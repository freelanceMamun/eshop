import React from 'react';
import Link from 'next/link';

import MegaMenu from './meganenu';

const MenuBar = () => {
  return (
    <div>
      <div className=" relative py-4 border-t border-[#000] border-b border-b-[#ddd] ">
        <ul className="flex items-center justify-center gap-7">
          <li className=" uppercase text-[12px] text-[#020202] cursor-pointer font-semibold tracking-widest ">
            <Link href="/">HOME</Link>
          </li>
          <li className=" uppercase text-[11px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href="/shops">Shop</Link>
          </li>
          <li className=" uppercase text-[11px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href="/blog">Blog</Link>
          </li>
          <li className=" uppercase text-[11px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href="#">Pages</Link>
            <div className="absolute top-[52px] left-0 w-full -z-10 border-b border-[#020202] opacity-0 h-[400px] text-black bg-slate-100">
              <h3>H1</h3>
            </div>
          </li>
          <li className=" upper+case text-[11px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href={'/ategories'}>Categories</Link>
          </li>
          <li className=" uppercase text-[11px] text-[#020202] cursor-pointer font-semibold tracking-widest">
            <Link href={'contact'}>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
