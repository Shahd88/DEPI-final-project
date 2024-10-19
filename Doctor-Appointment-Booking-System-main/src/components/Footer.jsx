import React from 'react'
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom'



function Footer() {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* --- left section --- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Book Your Appointment Today!
                        Your health is our priority. Schedule a visit with one of our experienced doctors and take the first step towards better well-being. We look forward to serving you!</p>
                </div>

                {/* --- center section --- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <NavLink to="/">
                            <li className='py-1'>Home</li>
                        </NavLink>
                        <NavLink to="/doctors">
                            <li className='py-1'>All Doctors</li>
                        </NavLink>
                        <NavLink to="/about">

                            <li className='py-1'>About</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li className='py-1'>Contact</li>
                        </NavLink>
                    </ul>
                </div>

                {/* --- right section --- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>greatstackdev@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* --- copy rights part --- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 Book Appointment Team - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;