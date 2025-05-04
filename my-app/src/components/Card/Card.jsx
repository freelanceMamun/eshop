import React from 'react';
import Image from 'next/image';
import pimg from '@/asset/ricky-2014887241-600x930.jpg';
import poImg from '@/asset/ricky-2014682334-600x930.jpg';
import AddtoCard from '../button/addtoCard';
import QuickView from '../button/quickview';
const Card = () => {
  return (
    <div className="border hover:border-black transition-all duration-300  product-picture">
      <div className=" relative">
        <div className="flex items-center gap-3 justify-end absolute top-3 z-10 right-3">
          <div className="border-black text-black border bg-white px-3 py-1 w-max text-[10px]">
            <span>BEST SELLER</span>
          </div>
          <div className="offer  border bg-white text-red-500 border-red-500 px-3 py-1 w-max text-[10px]">
            -20%
          </div>
        </div>
        <div className="relative Product">
          <div className=" relative overflow-hidden">
            <Image
              quality={100}
              unoptimized={true}
              width={100}
              src={pimg}
              alt="Product"
              className="w-full h-full Frist-picture"
            ></Image>
            <Image
              quality={100}
              unoptimized={true}
              width={100}
              height={100}
              alt="Product"
              className="w-full h-full second-picture absolute top-0 left-0"
              src={poImg}
            ></Image>
          </div>
          <div className="flex  items-center justify-between px-2  gap-2 absolute bottom-4 w-full">
            <QuickView></QuickView>
            <AddtoCard></AddtoCard>
          </div>
        </div>
        <div className="bg-white">
          <div className="category pt-2 px-3">
            <a href="#" className=" text-black font-medium uppercase text-[12px]">
              Valentino
            </a>
          </div>
          <div className="pb-5 px-3">
            <a className="" href="#">
              <h4 className="py-2 text-black text-[14px] font-semibold tracking-wide">
                V Logo Pocket Wool & Silk Dress
              </h4>
            </a>
            <p className=" text-[12px] pb-3 text-[#454545]">
              <a href="#">
                <span>
                  A shapely halter dress designed with slinky crossback straps
                  and a leg-baring slit is an elegant option for your upcoming
                  event.
                </span>
              </a>
            </p>
            <div className="price flex gap-1 items-center text-[12px]">
              <span className=" text-black">$2,400.00</span>
              <span className='text-gray-500'>-</span>
              <span className=" text-gray-600 text-[10px] line-through">$2,400.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
