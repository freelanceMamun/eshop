import React from 'react';
import Link from 'next/link';
const MenuBar = () => {
  return (
    <div>
      <div className=" py-4 border-t border-[#000] ">
        <ul className="flex items-center justify-center gap-7">
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest ">
            <Link href="/">HOME</Link>
          </li>
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href="/">Shop</Link>
          </li>
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href="/">Blog</Link>
          </li>
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href="/">Pages</Link>
          </li>
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href={'/ategories'}>Categories</Link>
          </li>
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href={'contact'}>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
