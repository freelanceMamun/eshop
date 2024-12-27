import React from 'react';
import Marquee from 'react-fast-marquee';
const MarqueText = () => {
  return (
    <div className="w-full">
      <div className=" border py-5 border-[#000] w-full">
        <Marquee>
          <Mycomponents></Mycomponents>
          <Mycomponents></Mycomponents>
          <Mycomponents></Mycomponents>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueText;

function Mycomponents() {
  return (
    <ul className=" flex items-center justify-center gap-3">
      <li className="flex items-center gap-2">
        <svg
          aria-hidden="true"
          className="text-sm e-font-icon-svg w-1 e-fas-circle"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
        <div className=" uppercase  text-[15px] font-semibold -tracking-tighter">
          Free Delivery
        </div>
      </li>
      <li className="flex items-center gap-2">
        <svg
          aria-hidden="true"
          className="text-sm e-font-icon-svg w-1 e-fas-circle"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
        <div className="uppercase  text-[15px] font-semibold -tracking-tighter">
          Money Back Guarantee
        </div>
      </li>
      <li className="flex items-center gap-2">
        <svg
          aria-hidden="true"
          className="text-sm e-font-icon-svg w-1 e-fas-circle"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
        <div className="uppercase  text-[15px] font-semibold -tracking-tighter">
          24/7 Support
        </div>
      </li>
      <li className="flex items-center gap-2">
        <svg
          aria-hidden="true"
          className="text-sm e-font-icon-svg w-1 e-fas-circle"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
        <div className="uppercase mr-2  text-[15px] font-semibold -tracking-tighter">
          High quality cotton
        </div>
      </li>
    </ul>
  );
}
