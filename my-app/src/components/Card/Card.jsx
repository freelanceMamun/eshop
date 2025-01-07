import React from 'react';
import Image from 'next/image';
import pimg from '@/asset/ricky-2014887241-600x930.jpg';
import poImg from '@/asset/ricky-2014682334-600x930.jpg';
const Card = () => {
  return (
    <div className="border hover:border-black transition-all duration-300 ">
      <div className=" relative">
        <div className="offer absolute top-3 right-3 z-10 border border-red-500 px-3 py-1 w-max text-[10px] ml-auto">
          -20%
        </div>
        <div className="product-picture relative">
          <Image
            quality={100}
            unoptimized={true}
            width={100}
            src={pimg}
            className="w-full h-full"
          ></Image>
          <Image
            quality={100}
            unoptimized={true}
            width={100}
            height={100}
            className="w-full h-full absolute top-0 left-0"
            src={poImg}
          ></Image>
        </div>
        <div className="category pt-5 px-3">
          <a href="#" className=" uppercase text-[12px]">
            Valentino
          </a>
        </div>
        <div className="pb-5 px-3">
          <a className="" href="#">
            <h4 className="py-2 text-[15px] font-semibold tracking-wide">
              V Logo Pocket Wool & Silk Dress
            </h4>
          </a>
          <p className=" text-[12px] pb-3 text-[#454545]">
            <a href="#">
              <span>
                A shapely halter dress designed with slinky crossback straps and
                a leg-baring slit is an elegant option for your upcoming event.
              </span>
            </a>
          </p>
          <div className="price flex gap-1 items-center text-[12px]">
            <span className="">$2,400.00</span>
            <span>-</span>
            <span className="">$2,400.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
