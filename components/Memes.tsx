import React from "react"
import { useMemesQuery } from "../generated/graphql"
import tw from "twin.macro"

import Footer from './Footer'
import Navbar from './Navbar_'


import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface MemesProps { }

export const Memes: React.FC<MemesProps> = ({ }) => {
  const { data, loading: memesLoading } = useMemesQuery()
  return (










    <div>


      {/* NAVBAR */}

      <Navbar />




      {/* Memes */}
      <div tw="flex justify-center items-center flex-wrap"  >




        {memesLoading
          ? "loading.."
          : data?.memes.map(meme => (

            <Grid>

              <CardContent>


                <Typography>
                  <div tw='grid-cols-4'>
                    <h1 tw="uppercase font-bold text-base">{meme.title}</h1>

                  </div>
                </Typography>

                <Typography>
                  <img tw="w-40" src={meme.image_url} />

                </Typography>

                <Typography>
                  <h1>{meme.description}</h1>
                </Typography>

              </CardContent>
            </Grid>
          ))}
      </div>



      {/* FOOTER */}

      <Footer />


    </div>
  )
}



