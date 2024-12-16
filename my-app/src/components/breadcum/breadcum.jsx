'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
const BreadCum = () => {
  const params = usePathname();
  return (
    <div className="">
      <div className="text-center border-b pt-3 pb-3 border-[#ececec]">
        <div className="flex justify-center gap-1">
          <Link
            href={'/'}
            className="text-[10px] uppercase font-semibold tracking-widest cursor-pointer"
          >
            Home
          </Link>

          <p className="text-[10px] uppercase font-semibold tracking-widest">
            {`> ${params.split('/')[1]}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCum;
