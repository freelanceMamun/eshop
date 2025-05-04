'use client';
import React from 'react';
import pictures from '@/asset/ricky-2132323454-145x145.jpg';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

const Testimonials = () => {
  var settings = {
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-4 bg-white overflow-hidden testimonials_slider">
      <Slider {...settings}>
        <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p className='text-black'>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold text-black">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>

        </Slider>
    </div>
  );
};



function SliderITem() {
  
  return  <div className="border w-[770px] py-20 px-16  testimonials">
          <div className="flex gap-8 items-center">
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={pictures.src} className="w-full h-full" alt="profile" />
            </div>
            <div className=" flex-1">
              <p className='text-black'>
                I am a regular at this fashion shop - their stylish clothes and
                accessories always keep me ahead of the trend.
              </p>
              <h4 className="font-semibold text-black">Madelyn George, ELLE</h4>
            </div>
          </div>
        </div>
}


export default Testimonials;
