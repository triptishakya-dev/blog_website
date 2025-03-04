import Link from 'next/link'
import React from 'react'
import { SiApplepay } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";
import { FaCcDiscover } from "react-icons/fa6";



const Footer = () => {
  return (
    <div>
      <div className='flex justify-between p-6 '>
        <ul>
          <h1 className='font-extrabold mb-6'>
          About Us
        </h1>
          <p>Lorem ipsum dolor sit amet </p>
        </ul>

           <ul>
            <h1 className='font-extrabold mb-6'>
            My Account
           </h1>
          <li>All Products</li>
          <li>My Account</li>
          <li>Order History</li>
          <li>Shopping Cart</li>
        </ul>
        <ul className='cursor-pointer'>
        <h1 className='font-extrabold mb-6'>
          Helps
        </h1>


            <Link href={"/aboutUs"}>
            <li>About Us</li>
            </Link>
           
           <Link href={"/contactUs"}>
           <li>Contact</li>
           </Link>



           <li>FAQs</li>
           <li>Blogs</li>
        </ul>
           <ul> 
            <h1 className='font-extrabold mb-6'>
            Categories
            </h1>
           <li>Students</li>
           <li>Health-Conscious individuals</li>
           <li>Parents</li>
           <li>Brain Booster</li>
           <li>Immunity Booster</li>
        </ul>
        <ul> 
          <h1 className='font-extrabold mb-6'>
          Proxy
          </h1>
           <li>Return Policy</li>
           <li>Shipping Policy</li>
           <li>Privacy Policy</li>
           <li>Terms & Condition</li>
        </ul>
      </div>
      <div className='flex justify-between p-6'>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <div className='flex items-end gap-3 text-3xl'><SiApplepay />
        <FaCcVisa />
        <FaAmazonPay /> 
        <FaCcDiscover />
        </div>
        
      </div>
    </div>
  )
}

export default Footer