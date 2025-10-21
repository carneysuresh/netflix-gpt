
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Miancontainer from './Miancontainer';
import Secondarycontainer from './Secondarycontainer';

const Browser = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <Miancontainer/>
      <Secondarycontainer/> 
      {/* 
      Maincontainer
      -videobackground
      -videoTitle
      Secondary container
      -movielist
      -moviecards
      */}
    </div>
    
  )
}

export default Browser;
