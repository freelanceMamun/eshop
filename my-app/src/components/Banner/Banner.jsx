import React from 'react';
import bannerImage from '@/asset/moderno-2726173801-960x600.jpg';
const Banner = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-3">
        <div className="">
          <div
            className="border bg-no-repeat bg-cover bg-center py-9 px-10 h-[360px] border-black flex flex-col justify-between items-center"
            style={{
              backgroundImage: 'url(' + bannerImage.src + ')',
            }}
          >
            <p className="text-center">NEW</p>
            <div className="">
              <h4 className="text-white text-4xl ">Grand Premium Suites</h4>
            </div>
            <div className="">
              <button className=" uppercase">Shop now</button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border">
            <p className="text-center">NEW</p>
            <div className="">
              <h4>Grand Premium Suites</h4>
            </div>
            <div className="">
              <button className=" uppercase">Shop now</button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border">
            <p className="text-center">NEW</p>
            <div className="">
              <h4>Grand Premium Suites</h4>
            </div>
            <div className="">
              <button className=" uppercase">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
