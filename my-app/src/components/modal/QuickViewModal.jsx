import React from 'react';
import pimg from '@/asset/ricky-2014887241-600x930.jpg';
import Image from 'next/image';
import brandImg from '@/asset/ricky-2136507208-e1682433504388.webp';
const QuickViewModal = () => {
  return (
    <div className="bg-white/95  absolute w-full top-0 left-0 flex items-center justify-center  h-screen">
      <div className="border bg-white lg:max-w-[800px] border-black p-6">
        <div className="grid grid-cols-2">
          <div className="h-[85%]">
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
            <div>
              <img
                src={brandImg.src}
                className="max-w-[120px] object-cover"
                alt="Brand"
              />
            </div>
            <div className="">
              <h4 className="text-xl font-semibold tracking-wider py-4">
                Crossback Halter Dress
              </h4>
              <p className="price text-xl pb-3 font-semibold">
                $24,000 - $26,000
              </p>
              <p className="text-[14px]">
                A shapely halter dress designed with slinky crossback straps and
                a leg-baring slit is an elegant option for your upcoming event.
              </p>
            </div>
            {/* Size */}
            <div className=" py-6">
              <div className="flex items-center justify-between pb-3">
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
            <div className=" py-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-[12px] font-semibold">Color</p>
                <p className="uppercase text-[10px] font-semibold tracking-widest">
                  Color Guide
                </p>
              </div>
            </div>
            {/* Price */}
            <div className="py-3">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[14px]">$2,500.00</p>
                <a href="#" className="text-[11px]">
                  Clear
                </a>
              </div>
            </div>
            {/* Price */}
            {/* Add to  Cart */}
            <div className="flex items-center gap-3 py-5">
              <div className="flex items-center justify-between border max-w-32  flex-1 gap-3 ">
                <button className="py-2 flex-1 block px-2">-</button>
                <span className="py-2 block ">0</span>
                <button className="py-2 flex-1 block px-2">+</button>
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
