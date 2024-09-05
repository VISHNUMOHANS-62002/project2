import React, { useState } from 'react'
import DefaultLayoutHoc from '../layout/Default.Layout';


 import EntertaimentCardSlider from '../components/Entertaiment/EntertaimentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies]= useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
    <HeroCarousel/>
    </>
  )
}

export default DefaultLayoutHoc(HomePage);