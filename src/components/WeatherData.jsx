import React, { useState } from 'react'
import {clear,clouds,drizzle,mist,rain,snow,humidity,wind} from '../assets/index'

function WeatherData({city,temp,humid,windSpeed,icon}) {
    const iconImg = {
      Clear : clear,
      Clouds : clouds,
      Drizzle : drizzle,
      Rain : rain,
      Snow : snow,
      Mist : mist
    }
  return (
    <div className='flex flex-col items-center'>
      <div className='text-white text-center leading-5'>
        <img src={iconImg[icon] || clear} className="w-[11rem]" />
        <h1 className='text-4xl font-bold'>{temp}</h1>
        <h2 className='text-3xl font-bold'>{city}</h2>
      </div>

      <div className='w-full flex justify-between items-center mt-6 text-white text-xl'>
        <div className='flex items-center'>
          <img src={humidity} className="w-12 mx-4" />
          <div>
            <h2>Humidity</h2>
            <h2>{humid}%</h2>
          </div>
        </div>

        <div className='flex items-center'>
          <img src={wind} className="w-12 mx-4" />
          <div>
            <h2>Wind Speed</h2>
            <h2>{windSpeed} km/h</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherData
