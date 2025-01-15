'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const ShopFilter = () => {
  return (
    <div>
      <div className="px-4">
        <div className="border-b transition-all duration-300 border-[#ddd]">
          <h6 className=" py-3 text-[13px] cursor-pointer uppercase font-semibold tracking-wider flex justify-between">
            categories
            <FaPlus></FaPlus>
          </h6>
          <div className="FilterList">
            <div className="pb-4 pt-2">
              <ul>
                <li className="flex pb-3">
                  <p className="flex text-[10px] uppercase tracking-widest font-semibold gap-1 items-center">
                    <input type="checkbox" />
                    <span>Accessories</span>
                  </p>
                  <p></p>
                </li>
                <li className="flex pb-3">
                  <p className="flex text-[10px] uppercase tracking-widest font-semibold gap-1 items-center">
                    <input type="checkbox" />
                    <span>Accessories</span>
                  </p>
                  <p></p>
                </li>
                <li className="flex pb-3">
                  <p className="flex text-[10px] uppercase tracking-widest font-semibold gap-1 items-center">
                    <input type="checkbox" />
                    <span>Accessories</span>
                  </p>
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
