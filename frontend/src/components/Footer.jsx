import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    At Ved Stationary, we bring your ideas to life with premium stationery crafted for professionals, students, and creative minds. Our mission is to inspire creativity while embracing sustainability.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Return Policy</li>
                </ul>
            </div>
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9899459288</li>
                <li>contact@gupta.nishant08042004@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright@2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
