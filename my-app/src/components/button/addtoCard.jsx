'use client';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const AddtoCard = () => {
  return (
    <div className="flex-1">
      <button className="bg-white py-3  tracking-wider hover:text-white flex items-center gap-2 flex-1 w-full  px-6 hover:bg-black transition-all duration-300 text-[11px] uppercase">
        <GoPlus></GoPlus> Add To cart
      </button>
    </div>
  );
};

export default AddtoCard;
