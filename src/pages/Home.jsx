import React from 'react'

import Banner  from "../components/Banner";
import Sales from "../components/Sales";
import Newarrivals from "../components/Newarrivals";
import Bestsell from "../components/Bestsell";
import Phone from '../components/Phone';
import Special from "../components/Special";




const Home = () => {
  return (
    <>
    
    <Banner/>
    <Sales/>
    <Newarrivals/>
    <Bestsell/>
    <Phone/>
    <Special/>

    
    </>
  )
}

export default Home