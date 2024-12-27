'use client';
import React from 'react';
import Img1 from '@/asset/ricky-2127760710.jpg';
import Image from 'next/image';
import Slider from 'react-slick';
import { SliderData } from '@/utils/data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=' overflow-hidden'>
    <Slider {...settings}>
      {SliderData.map((item,index) => {
        return (
          <div className="w-full" key={index}>
            <div className="flex w-full">
              <div className="w-1/3">
                <div className="w-full h-full flex items-center justify-center flex-col">
                  <div className="px-14">
                    <div className=" pb-8">
                      <h1 className="text-[64px] text-black tracking-tighter font-medium leading-[66px] ">
                        New Spring Collection 2023
                      </h1>
                    </div>
                    <div className="pb-8">
                      <p className="text-[12px] font-normal">
                        Introducing the new fashion summer collection, featuring
                        bold and bright colors, playful prints, and comfortable
                        yet stylish pieces perfect for any occasion. From
                        oversized blazer dresses to monochromatic denim pieces,
                        this collection has something for everyone.
                      </p>
                    </div>
                    <div className="button">
                      <button className="  hover:bg-[#FC5F49] transition duration-300 uppercase bg-black text-white px-10 py-3 text-[12px] tracking-widest">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-4/6">
                <Image
                  className="w-full"
                  unoptimized={true}
                  quality={100}
                  width={100}
                  height={100}
                  src={Img1}
                  alt="Banner-image"
                ></Image>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
    </div>
  );
};

export default BannerSlider;
