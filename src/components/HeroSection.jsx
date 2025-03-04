import React from 'react'
import heroImg from '../../public/hero-section.jpg'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex bg-white w-full h-[80vh] justify-around items-center'>
      <div className='flex justify-around '>
        <Image
        src={heroImg}
        height={500}
        width={500}
        alt='failed'
        
        />
      </div>
      <div>
        <h1 className='text-black text-right text-2xl font-bold'>"Inspiring Ideas, One Post at a Time"
        </h1>
        <p className='text-black w-[23rem]'>Welcome to Tripti's Blog, your go-to source for insightful articles, expert tips, and inspiring stories. Whether you're here to learn, explore, or simply get inspired, we've got something for everyone. Dive in and start your journey with us today!</p>
        <button className='bg-stone-700 px-5 rounded-lg mt-5 py-3'>Reads-Blogs</button>
      </div>
    </div>
  )
}

export default HeroSection