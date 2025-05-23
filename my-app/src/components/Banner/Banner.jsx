import React from 'react';
import bannerImage from '@/asset/moderno-2726173801-960x600.jpg';
const Banner = () => {
  return (
    <div className="py-10 bg-white">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2">
        <div className="">
          <div
            className="border after:bg-black after:top-0 after:left-0 after:w-full after:h-full after:opacity-40  
            after:z-[1] after:absolute relative bg-no-repeat bg-cover bg-center py-9 px-10 h-[330px] border-black flex flex-col justify-between items-center"
            style={{
              backgroundImage: 'url(' + bannerImage.src + ')',
            }}
          >
            <p className="text-center z-[2] relative text-white">NEW</p>
            <div className="">
              <h4 className="text-white relative w-10/12 text-center m-auto xl:text-4xl font-semibold  z-[2] ">
                Grand Premium Suites
              </h4>
            </div>
            <div className="relative z-[2]">
              <button className=" text-white text-[13px] uppercase">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="border after:bg-black after:top-0 after:left-0 after:w-full after:h-full after:opacity-40  
            after:z-[1] after:absolute relative bg-no-repeat bg-cover bg-center py-9 px-10 h-[330px] border-black flex flex-col justify-between items-center"
            style={{
              backgroundImage: 'url(' + bannerImage.src + ')',
            }}
          >
            <p className="text-center z-[2] relative text-white">NEW</p>
            <div className="">
              <h4 className="text-white relative w-10/12 text-center m-auto xl:text-4xl font-semibold  z-[2] ">
                Grand Premium Suites
              </h4>
            </div>
            <div className="relative z-[2]">
              <button className=" text-white text-[13px] uppercase">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="border after:bg-black after:top-0 after:left-0 after:w-full after:h-full after:opacity-40  
            after:z-[1] after:absolute relative bg-no-repeat bg-cover bg-center py-9 px-10 h-[330px] border-black flex flex-col justify-between items-center"
            style={{
              backgroundImage: 'url(' + bannerImage.src + ')',
            }}
          >
            <p className="text-center z-[2] relative text-white">NEW</p>
            <div className="">
              <h4 className="text-white relative w-10/12 text-center m-auto xl:text-4xl font-semibold  z-[2] ">
                Grand Premium Suites
              </h4>
            </div>
            <div className="relative z-[2]">
              <button className=" text-white text-[13px] uppercase">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
