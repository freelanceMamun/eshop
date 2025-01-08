'use client';
import React from 'react';
import { LuEye } from 'react-icons/lu';

const QuickView = () => {
  return (
    <div className="flex-1">
      <button
        className="bg-white flex items-center gap-2 flex-1 w-full 
      p-3 px-6 hover:text-white hover:bg-black transition-all duration-300 text-[11px] uppercase"
      >
        <LuEye></LuEye>
        Quick View
      </button>
    </div>
  );
};

export default QuickView;
