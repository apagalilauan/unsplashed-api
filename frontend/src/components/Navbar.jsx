import React, { useState } from 'react';
import logo from '../assets/Logo.svg'
import {FaFacebook as Facebook} from 'react-icons/fa'
import {FaBehance as Behance} from 'react-icons/fa'
import {FaLinkedin as Linkedin} from 'react-icons/fa'



function Navbar(props) {
  return (
    <>
    <nav className='sticky top-0 w-full flex flex-row h-16 items-center justify-center shadow-xl bg-red gap-5 text-white text-xs z-50
    md:justify-between px-10 sm:px-20 md:px-30 lg:px-40'>
        <a href='http://localhost:5173/' className='flex flex-row items-center gap-5 '>
            <img className='w-9' src={logo}/>
        </a>
        
        <div className='text-black md:w=[700px] lg:w-[900px]'>
          {props.children}
        </div>

        <div className='md:gap-5 md:flex hidden'>
          <a href='https://www.facebook.com/apagalilauan' target='_blank' className=' hover:bg-redshade hover:shadow-lg rounded-md transition px-4 py-2'> <Facebook size={25}/> </a>
          <a href='https://www.behance.net/andreipagalil' target='_blank' className='  hover:bg-redshade hover:shadow-lg rounded-md transition px-4 py-2'> <Behance size={25}/> </a>
          <a href='https://www.linkedin.com/in/andrei-pagalilauan/' target='_blank' className=' hover:bg-redshade hover:shadow-lg rounded-md transition px-4 py-2'> <Linkedin size={25}/> </a>
        </div>
    </nav>
    </>
  );
}

export default Navbar;
