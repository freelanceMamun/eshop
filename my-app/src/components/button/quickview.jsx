'use client';
import React from 'react';
import { LuEye } from 'react-icons/lu';

const QuickView = () => {
  return (
    <div className="flex-1">
      <button
        className=" bg-white text-black flex items-center gap-2 flex-1 w-full 
      xl:p-3 xl:px-6 lg:p-3 lg:px-4 md:px-3 md:py-3 text-center font-semibold justify-center
       hover:text-white hover:bg-black transition-all duration-300 text-[13px] uppercase"
      >
        <LuEye></LuEye>
        Quick View
      </button>
    </div>
  );
};

export default QuickView;
