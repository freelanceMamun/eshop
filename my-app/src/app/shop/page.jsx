import React from 'react';
import BreadCum from '@/components/breadcum/breadcum';

import CategoryThum from '@/asset/moderno-2738826553-300x300.webp';

const Shop = () => {
  return (
    <div>
      <BreadCum></BreadCum>
      <div className=" px-5">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className=" text-2xl font-semibold uppercase">Shop</h3>
          </div>

          <div className="grid grid-cols-4">
            <div className="border h-[170px] w-[170px]">
              <img
                src={CategoryThum.src}
                className="w-full h-full"
                alt="catagory-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
