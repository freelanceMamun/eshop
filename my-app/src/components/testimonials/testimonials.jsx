'use client';
import React from 'react';
import pictures from '@/asset/ricky-2132323454-145x145.jpg';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  var settings = {
    centerMode: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-4 overflow-hidden">
      <Slider {...settings}>
        <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
