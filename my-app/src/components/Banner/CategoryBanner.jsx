import React from 'react';
import Image from 'next/image';
import CategoryImage from '@/asset/ricky-2105975080-600x929.jpg';
const CategoryBanner = () => {
  return (
    <div className=" py-10 bg-white">
      <div>
        <div className=" grid grid-cols-2 xl:grid-cols-4">
          <div className="border xl:h-[650px] border-black border-r-0">
            <div
              className="h-full  relative after:transition after:duration-300 after:absolute after:bg-white after:w-full after:h-full after:top-0 after:left-0  
            after:opacity-0 hover:after:opacity-80"
            >
              <Image
                quality={100}
                unoptimized={true}
                width={100}
                src={CategoryImage}
                alt=""
                className="h-full w-full"
              />
              <div className="absolute top-[45%] z-[2] text-center left-0 w-full">
                <button className="text-[14px] font-bold tracking-widest uppercase px-12 py-4 bg-white">
                  WOMAN
                </button>
              </div>
            </div>
          </div>
          <div className="border xl:h-[650px] border-black border-r-0">
            <div
              className="h-full  relative after:transition after:duration-300 after:absolute after:bg-white after:w-full after:h-full after:top-0 after:left-0  
            after:opacity-0 hover:after:opacity-80"
            >
              <Image
                quality={100}
                unoptimized={true}
                width={100}
                src={CategoryImage}
                alt=""
                className="h-full w-full"
              />
              <div className="absolute top-[45%] z-[2] text-center left-0 w-full">
                <button className="text-[14px] font-bold tracking-widest uppercase px-12 py-4 bg-white">
                  WOMAN
                </button>
              </div>
            </div>
          </div>
          <div className="border xl:h-[650px] border-black border-r-0">
            <div
              className="h-full  relative after:transition after:duration-300 after:absolute after:bg-white after:w-full after:h-full after:top-0 after:left-0  
            after:opacity-0 hover:after:opacity-80"
            >
              <Image
                quality={100}
                unoptimized={true}
                width={100}
                src={CategoryImage}
                alt=""
                className="h-full w-full"
              />
              <div className="absolute top-[45%] z-[2] text-center left-0 w-full">
                <button className="text-[14px] font-bold tracking-widest uppercase px-12 py-4 bg-white">
                  WOMAN
                </button>
              </div>
            </div>
          </div>

          <div className="border xl:h-[650px] border-black border-r-0">
            <div
              className="h-full  relative after:transition after:duration-300 after:absolute after:bg-white after:w-full after:h-full after:top-0 after:left-0  
            after:opacity-0 hover:after:opacity-80"
            >
              <Image
                quality={100}
                unoptimized={true}
                width={100}
                src={CategoryImage}
                alt=""
                className="h-full w-full"
              />
              <div className="absolute top-[45%] z-[2] text-center left-0 w-full">
                <button className="text-[14px] font-bold tracking-widest uppercase px-12 py-4 bg-white">
                  WOMAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
