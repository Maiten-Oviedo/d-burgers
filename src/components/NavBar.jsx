// src/components/Navbar.js
import React, { useState } from 'react';
import { CartIcon } from './Icons';

const Navbar = ( {handleCartVisible, numberCart} ) => {
  
  return (
    <nav className="px-[10%] md:px-[15%] py-2 bg-gray-800 text-white fixed w-full z-10">
      <div className="container flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold uppercase">{`D'Burgers`}</span>
        </div>
        <div className='md:flex md:gap-5 md:items-center md:uppercase'>
          <a href="#home" className="mr-4 hidden md:block">Home</a>
          <a href="#nuestra-carta" className="mr-4 hidden md:block">Carta</a>
          <a href="#nosotros" className=' hidden md:block'>Nosotros</a>
          <button onClick={handleCartVisible} className=" flex rounded-full p-1 gap-1">
            <CartIcon width={24} height={24} color={'white'}/>
            <span className="text-start h-full">{numberCart}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

