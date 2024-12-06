import React from 'react';

import { BiUser } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { BiHeart, BiShoppingBag } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="">
      <div className="container max-w-full px-6 py-4 flex items-center justify-between">
        {/* Offer Section */}
        <div className="text-[11px] font-medium text-[#070707]">
          <p>
            <a className="font-medium uppercase tracking-widest" href="#">
              Best special offers! 40% Off!
            </a>
          </p>
        </div>
        {/* === Brand Lodo */}
        <div className="brand-logo">
          <div className="font-bold">
            <h2 className="uppercase text-2xl">
              <a href="/">Webnuxt Shop</a>
            </h2>
          </div>
        </div>
        {/* === Brand Logo End */}

        {/* Control section */}
        <div className="flex items-center gap-4">
          <div>
            <a className="text-xl font-normal" href="#" title="Login">
              <BiUser></BiUser>
            </a>
          </div>
          <div>
            <a href="#" className="text-xl font-normal" title="Search">
              <BiSearch></BiSearch>
            </a>
          </div>
          <div>
            <a href="#" className="text-xl font-normal" title="Wishlist">
              <BiHeart></BiHeart>
            </a>
          </div>
          <div>
            <a href="#" className="text-xl font-normal" title="">
              <BiShoppingBag></BiShoppingBag>
            </a>
          </div>
        </div>
srwerw
        {/* Control section */}
      </div>
    </nav>
  );
};

export default Navbar;
