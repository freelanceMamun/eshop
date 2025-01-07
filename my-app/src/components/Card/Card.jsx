import React from 'react';
import Image from 'next/image';
import pimg from '@/asset/ricky-2014887241-600x930.jpg';
import poImg from '@/asset/ricky-2014682334-600x930.jpg';
const Card = () => {
  return (
    <div className="border">
      <div className="">
        <div className="offer border border-red-500 px-3 py-1 w-max text-[10px] ml-auto">
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
        <div className="category">
          <a href="#" className=" uppercase text-[12px]">
            Valentino
          </a>
        </div>
        <div className=" py-3">
          <a>
            <h4>V Logo Pocket Wool & Silk Dress</h4>
          </a>
          <p>
            <a href="#">
              <span>
                A shapely halter dress designed with slinky crossback straps and
                a leg-baring slit is an elegant option for your upcoming event.
              </span>
            </a>
          </p>
          <div className="price">
            <span className="">$2,400.00</span>
            <span className="">$2,400.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
