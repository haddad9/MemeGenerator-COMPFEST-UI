import { ApolloClient, HttpLink, split } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache"
import fetch from "isomorphic-fetch"
import ws from "isomorphic-ws"
import React from "react"
import { SubscriptionClient } from "subscriptions-transport-ws"
import { setContext } from "@apollo/client/link/context"

import nookies from "nookies"

const createHttpLink = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/v1/graphql",
    credentials: "include",
    fetch,
  })
  return httpLink
}

const createWSLink = () => {
  return new WebSocketLink(
    new SubscriptionClient(
      process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/v1/graphql",
      {
        lazy: true,
        reconnect: true,
      },
      ws
    )
  )
}

let initialToken: string

const getAuthLink = (initialToken: string) => {
  return setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = process.env.NEXT_PUBLIC_AUTH_TOKEN
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }
  })
}

let apolloClient: ApolloClient<NormalizedCacheObject>

export const createApolloClient = (token: string) => {
  const ssrMode = typeof window === "undefined"

  const l = !ssrMode
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          )
        },
        createWSLink(),
        createHttpLink()
      )
    : createHttpLink()

  const link = getAuthLink(token).concat(l)

  return new ApolloClient({ ssrMode, link, cache: new InMemoryCache() })
}

export function initializeApollo(initialState = {}, token: string) {
  const _token = token ?? nookies.get(null)?.token
  const _apolloClient = apolloClient ?? createApolloClient(_token)

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo(initialState: any, token: string) {
  const store = React.useMemo(() => initializeApollo(initialState, token), [
    initialState,
    token,
  ])
  return store
}
