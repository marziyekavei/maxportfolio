import React from 'react';
import logo from '../../assets/avatar.png';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function header() {
  return (
    <div className='flex flex-col mt-7 ml-2 sm:flex-row justify-evenly items-center max-w-900px h-300px p-4'>
      <div>
        <p className='text-base sm:text-lg sm:mb-2'>Hello,</p>
        <p className='text-lg sm:text-xl sm:font-bold'>Im Mohammad(max) kavei</p>
        <p className='text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className='flex flex-row text-3xl mt-4'>
          <a className='mr-2' target='_blank' href="https://github.com/"><IoLogoGithub color='#172554' /></a>
          <a className='mr-2' target='_blank' href="https://www.linkedin.com/"><IoLogoLinkedin color='#172554' /></a>
          <a className='mr-2' href="mailto:maxkaveh98@gmail.com"><MdEmail color='#172554' /></a>
        </div>
      </div>
      <img src={logo} alt="" className='md:w-64 md:h-72 rounded-full' />
      
    </div>
  )
}

export default header;