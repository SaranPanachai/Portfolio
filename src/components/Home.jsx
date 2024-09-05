import React from 'react'
import './style.css'
import Programmer from '../assets/programmer.png'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
          <h2 className='Text-4xl sm:text-5xl font-bold text-orange-400 py-4 border-b-2 border-white'>My name is Saran Panachai</h2>
          <p className="text-white py-2 sm:text-3xl">Front end developer</p>
        <div>
        <img src={Programmer} alt="my profile"  className=' rounded-2xl mx-auto w-2/3 '/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home