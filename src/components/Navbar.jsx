
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-gray-500 h-[3rem] w-full flex justify-between items-center'>  
            <div>
            <GiThreeLeaves className='text-4xl bg-green-500' />
            </div>
            <div className=''>
                <ul className='flex gap-6'>
                    <li>Home</li>
                    <li>Students</li>
                    <li>Immunity/Booster</li>
                    <li>BrainB ooster</li>
                </ul>
            </div>
            <div className='mr-5 flex gap-4'>
                <FaSearch className='mt-2'/>  
                <Link href={"/signIn"}>
                <button className='bg-green-700 px-4 py-2 rounded-lg'> Sign in </button>
                </Link>
                <IoCartOutline className='text-2xl mt-2' />
          </div>

        </div>
  )
}

export default Navbar