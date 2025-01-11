import React from 'react';
import pimg from '@/asset/ricky-2014887241-600x930.jpg';
import Image from 'next/image';
const QuickViewModal = () => {
  return (
    <div className="bg-white/95  absolute w-full top-0 left-0 flex items-center justify-center  h-screen">
      <div className="border bg-white lg:max-w-[800px] border-black p-5">
        <div className="grid grid-cols-2">
          <div className="">
            <Image
              quality={100}
              unoptimized={true}
              width={100}
              src={pimg}
              alt="I"
              className="w-full h-full Frist-picture"
            ></Image>
          </div>
          <div className="">
            <div></div>
            <div className="">
              <h4>Crossback Halter Dress</h4>
              <p className="price">$24,000 - $26,000</p>
              <p>
                A shapely halter dress designed with slinky crossback straps and
                a leg-baring slit is an elegant option for your upcoming event.
              </p>
            </div>
            {/* Size */}
            <div className="">
              <div className="flex items-center justify-between">
                <p className="uppercase text-[12px] font-semibold">Size</p>
                <p className="uppercase text-[10px] tracking-widest  font-semibold">
                  Size Guide
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="border px-4 font-semibold active:border-black py-3 text-[10px]"
                >
                  2
                </a>
                <a
                  href="#"
                  className="border px-4 font-semibold active:border-black py-3 text-[10px]"
                >
                  4
                </a>
                <a
                  href="#"
                  className="border px-4 font-semibold active:border-black py-3 text-[10px]"
                >
                  5
                </a>
                <a
                  href="#"
                  className="border px-4 font-semibold active:border-black py-3 text-[10px]"
                >
                  6
                </a>
              </div>
            </div>
            {/* Color */}
            <div className="">
              <div className="flex items-center justify-between">
                <p className="uppercase text-[12px] font-semibold">Color</p>
                <p className="uppercase text-[10px] font-semibold tracking-widest">
                  Color Guide
                </p>
              </div>
            </div>
            {/* Add to  Cart */}
            <div className="flex items-center gap-3 ">
              <div className="flex items-center justify-between border max-w-28 px-3 flex-1 gap-3 ">
                <button className="py-2 block">-</button>
                <span className="py-2 block">0</span>
                <button className="py-2 block">+</button>
              </div>
              <div className="flex-1 text-center">
                <button className="bg-black py-3  justify-center text-center  text-white tracking-wider hover:text-white flex items-center gap-2 flex-1 w-full  px-6 hover:bg-black transition-all duration-300 text-[11px] uppercase">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
