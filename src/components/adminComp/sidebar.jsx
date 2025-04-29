import Image from 'next/image'
import React from 'react'
import { assets } from '../../../public/Assets/assets'

const sideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} width={120} alt=''/>
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                

            </div>

    </div>
  )
}

export default sideBar