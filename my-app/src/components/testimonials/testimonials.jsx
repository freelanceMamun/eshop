'use client';
import React from 'react';
import pictures from '@/asset/ricky-2132323454-145x145.jpg';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  return (
    <div className="px-4 py-4 overflow-hidden">
      <Slider {...settings}>
        <div className="">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className="">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className="">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className="">
              <p>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className="">
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
