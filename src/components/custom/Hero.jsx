// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Trip With AI:</span> Personalized Itineraries at Your Fingertips.. </h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner travel curator, creating custom itineraries tailord to your interest and budjet.</p>

        <Link to={'/create-trip'}>
        <Button className= 'mt-5'>Get Started. It&apos;s free</Button>
        </Link>

        
    
    </div>
  )
}

export default Hero
