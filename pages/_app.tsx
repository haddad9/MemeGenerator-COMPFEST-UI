import type { AppProps } from "next/app"
import { GlobalStyles } from "twin.macro"
import { useApollo } from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState, pageProps.token)
  return (
    <div>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  )
}

export default App
