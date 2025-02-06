'use client';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const AddtoCard = () => {
  return (
    <div className="flex-1">
      <button className="bg-white xl:py-3 lg:py-3 md:px-3 md:py-3 justify-center  tracking-wider hover:text-white 
      flex items-center gap-2 flex-1 w-full  
      xl:px-6 lg:px-4 hover:bg-black transition-all duration-300 text-[11px] uppercase">
        <GoPlus></GoPlus> Add To cart
      </button>
    </div>
  );
};

export default AddtoCard;
