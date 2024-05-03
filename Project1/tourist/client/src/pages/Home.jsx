import React from 'react'

import heroImg from "../assets/images/hero-img01.jpg"
import heroImg2 from "../assets/images/hero-img02.jpg"
import heroVid from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from '../shared/Subtitle'


const Home = () => {
  return (
    <div className=' mt-20'>
      <div className='grid grid-cols-2'>
        <div className=' flex items-center justify-center'>
          <Subtitle subtitle="Knnow before you go."/>
          <img className=' w-24' src={worldImg} alt="" />
        </div>

        <div className="grid grid-cols-3">
          <div>
            <img src={heroImg} alt="" />
          </div>
          <div>
            <video src={heroVid} alt="" />
          </div>
          <div>
            <img src={heroImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home