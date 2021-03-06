import React from "react"
import { useMemesQuery } from "../generated/graphql"
import tw from "twin.macro"
interface MemesProps {}

export const Memes: React.FC<MemesProps> = ({}) => {
  const { data, loading: memesLoading } = useMemesQuery()
  return (
    <div tw="w-screen h-screen flex justify-center items-center flex-wrap">
      <h1 tw="uppercase font-bold text-5xl">halo ini boilerplate</h1>
      <div tw="flex justify-center items-center flex-wrap">
        {memesLoading
          ? "loading.."
          : data?.memes.map(meme => (
              <div>
                <h1 tw="uppercase font-bold text-base">{meme.title}</h1>
                <img tw="w-40" src={meme.image_url} />
              </div>
            ))}
      </div>
    </div>
  )
}
