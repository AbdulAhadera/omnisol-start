import React from 'react';
import logo from "../Assets/Omnisol.png";
import DropDownTwo from './DropDownTwo';
import DropDownOne from './DropDownOne';
import { Link } from 'react-router-dom';

function LaptopNavbar() {
    return (
        <nav className='shadow-lg flex justify-between bg-gradient-to-t from-gray-900 via-navy-800 to-gray-900 border-b border-blue-800/30 py-2 w-full px-2 sm:px-4 md:px-40 lg:px-60'>


            <div className=''>
                <img src={logo} className='h-8' alt="" />
            </div>

            <div className='pt-1'>
                <DropDownOne />
                <span className='px-4'></span>
                <DropDownTwo />
            </div>

            <div className='flex'>

                <button className='bg-white px-4 py-1 rounded-md  hover:bg-gray-100 transition-all ml-1'>
                    <Link to="v1/agent/" >Try For Free</Link>
                </button>
            </div>



        </nav>
    )
}

export default LaptopNavbar;