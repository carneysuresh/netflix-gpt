import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants'

const Videobackground = ({movieId}) => {
  const getMovieVideos = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1038392/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    console.log(json)

    const Filterdata = json.results.filter((video) => video.type === "Trailer" ) ;
  const trailer = Filterdata.length? Filterdata[0] : json.results[0];
  console.log(trailer);
  }
  

  useEffect (() => {getMovieVideos()}, 
  []);
  return (
    <div>
      <iframe 
      width="560" height="315" 
      src="https://www.youtube.com/embed/9oxYM2OTkHY?si=vP3A-6sFtIKFzlkj" 
      title="YouTube video player" 
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      >

      </iframe>
    </div>
  )
}

export default Videobackground
