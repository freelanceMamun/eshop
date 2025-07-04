"use client";

import { usePathname } from "next/navigation";

import React from "react";

import { BiUser } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiHeart, BiShoppingBag } from "react-icons/bi";

import { CiMenuBurger } from "react-icons/ci";

import MenuBar from "./menubar";
const Navbar = () => {
  const path = usePathname();

  if (path === "/admin") {
    return;
  }

  return (
    <nav className="bg-white">
      <div className="container max-w-full px-6 py-4 flex items-center justify-between">
        {/* Offer Section */}
        <div className="text-[11px] font-medium md:block lg:block  hidden justify-center text-[#070707]">
          <p>
            <a className="font-medium uppercase tracking-widest" href="#">
              Best special offers! 40% Off!
            </a>
          </p>
        </div>

        <div className="menu-btn block lg:hidden ">
          <a href="#">
            <CiMenuBurger className=" size-6" />
          </a>
        </div>
        {/* === Brand Lodo */}
        <div className="brand-logo">
          <div className="font-bold">
            <h2 className="uppercase xl:text-2xl text-xl">
              <a href="/" className="text-black">
                Webnuxt Shop
              </a>
            </h2>
          </div>
        </div>
        {/* === Brand Logo End */}
        {/* Control section */}
        <div className="flex items-center gap-4">
          <div className=" hidden lg:block">
            <a className="text-xl font-normal" href="#" title="Login">
              <BiUser></BiUser>
            </a>
          </div>
          <div className=" hidden lg:block">
            <a href="#" className="text-xl font-normal" title="Search">
              <BiSearch></BiSearch>
            </a>
          </div>
          <div className=" hidden lg:block">
            <a href="#" className="text-xl font-normal" title="Wishlist">
              <BiHeart></BiHeart>
            </a>
          </div>
          <div>
            <a href="#" className="text-xl font-normal" title="">
              <BiShoppingBag className="xl:size-6 size-8"></BiShoppingBag>
            </a>
          </div>
        </div>
        {/* Control section */}
      </div>
      <MenuBar></MenuBar>
    </nav>
  );
};

export default Navbar;
