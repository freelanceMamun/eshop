import Image from 'next/image';
import React from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

import paymentImg from '@/asset/ricky-2152262473.webp';
const Footer = () => {
  return (
    <div className="bg-[#070707]">
      <div className="px-20 py-20">
        <div className="grid grid-cols-3">
          <div className="w-[70%]">
            <p className="text-white uppercase text-[13px] tracking-widest">
              Sign up to get 10% off your first order and stay up to date on the
              latest product releases, special offers and news
            </p>
            {/* SubScribe Form */}
          </div>
          <div>
            <ul>
              <li className=" uppercase mb-2">
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  SHOP
                </a>
              </li>
              <li className=" uppercase mb-2">
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className=" uppercase mb-2">
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  Shipping
                </a>
              </li>
              <li className=" uppercase mb-2">
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  Returns
                </a>
              </li>
              <li className=" uppercase mb-2">
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className=" uppercase mb-2">
                <a
                  className="text-white text-[12px] hover:text-orange-500"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className=" text-white  text-[13px]">
              If you have any questions regarding your order, products or our
              service, please contact our customer service.
            </p>
            <div className="mt-4">
              <ul>
                <li className="text-[12px] uppercase tracking-widest text-white">
                  Monday - Friday: 10:00-6:00 PM
                </li>
                <li className="mt-2">
                  <p>
                    <span className="text-[#ddd] tracking-widest uppercase text-[12px] mr-1">
                      PHONE
                    </span>
                    <span className="text-white text-[12px] tracking-widest uppercase">
                      +1 712-339-9294
                    </span>
                  </p>
                </li>
                <li className="mt-2">
                  <p>
                    <span className="text-[#ddd] tracking-widest uppercase text-[12px] mr-1">
                      Email
                    </span>
                    <span className="text-white text-[12px] tracking-widest uppercase">
                      +1 712-339-9294
                    </span>
                  </p>
                </li>
                <li className="mt-2">
                  <p>
                    <span className="text-[#ddd] tracking-widest uppercase text-[12px] mr-1">
                      Address
                    </span>
                    <span className="text-white text-[12px] tracking-widest uppercase">
                      283 N. Glenwood Street, Levittown, NY
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-3">
            <div>
              <Image
                quality={100}
                width={100}
                className="w-1/2"
                height={47}
                alt="payment"
                src={paymentImg}
                unoptimized={true}
              ></Image>
            </div>
            <div>
              <p className="text-[11px] text-[#ddd]">
                © 2024 Webnuxt. All Rights Reserved.
              </p>
            </div>
            <div className="social">
              <div>
                <ul className="flex items-center">
                  <li className="text-white">
                    <a href="#" className="border border-[#333] text-[18px] p-3 block">
                      <BiLogoFacebook></BiLogoFacebook>
                    </a>
                  </li>
                  <li className="text-white">
                    <a href="#" className="border border-[#333] text-[18px] p-3 block">
                      <BiLogoInstagramAlt></BiLogoInstagramAlt>
                    </a>
                  </li>
                  <li className="text-white">
                    <a href="#" className="border border-[#333] text-[18px] p-3 block">
                      <BiLogoTwitter></BiLogoTwitter>
                    </a>
                  </li>
                  <li className="text-white">
                    <a href="#" className="border border-[#333] text-[18px] p-3 block">
                      <BiLogoYoutube></BiLogoYoutube>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
