// import React, { useEffect, useState } from 'react'
import Categorycard from './Categorycard'
import { Grid } from '@chakra-ui/react'

export default function Categories() {

  
  

  return (<>    
 
    <div style={{width:"100%", maxWidth:"100vw", padding:"4vw"}}>
      
      <Grid
      templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
      templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(3, 1fr)" }}
      gap="2vw"  w="100%"
        >
      <Categorycard category="Action & adventure" image={"./Images/action.png"} />
         <Categorycard category="Anime" image={"./Images/anime.png"}/>
         <Categorycard category="Comedy"  image={"./Images/comedy.png"}/>
         <Categorycard category="Documentary" image={"./Images/documentary.png"}/>
         <Categorycard category="Drama" image={"./Images/drama.png"}/>
         <Categorycard category="Fantasy" image={"./Images/fantasy.png"}/>
         <Categorycard category="Horror" image={"./Images/horror.png"}/>
         <Categorycard category="Kids" image={"./Images/kids.png"}/>
         <Categorycard category="Romance" image={"./Images/romance.png"}/>
         <Categorycard category="Sci-Fi" image={"./Images/scifi.png"}/>
         <Categorycard category="Sports" image={"./Images/sports.png"}/>
         <Categorycard category="Mystery & thriller" image={"./Images/thriller.png"}/>
         </Grid>
    </div>
    </>


  
  )
}
