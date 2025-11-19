import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/moviesllice';

const Videobackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  const dispatch = useDispatch();
  
  const getMovieVideos = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1062722/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    console.log(json)

    const Filterdata = json.results.filter((video) => video.type === "Trailer" ) ;
  const trailer = Filterdata.length? Filterdata[0] : json.results[0];
  console.log(trailer);
  dispatch(addTrailerVideo(trailer));
  }
  

  useEffect (() => {getMovieVideos()}, 
  []);
  return (
    <div>
      <iframe 
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1" }
      title="YouTube video player" 
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      >

      </iframe>
    </div>
  )
}

export default Videobackground
