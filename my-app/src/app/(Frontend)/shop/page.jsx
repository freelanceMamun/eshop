import React from 'react';
import BreadCum from '@/components/breadcum/breadcum';

import CategoryThum from '@/asset/moderno-2738826553-300x300.webp';
import Card from '@/components/Card/Card';
import ShopFilter from '@/components/Filter/shopFilter';

const Shop = () => {
  return (
    <div>
      <BreadCum></BreadCum>
      <div className=" px-5">
        <div className="flex items-center justify-between py-10">
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
              <p className=" text-center">MAN</p>
            </div>
            <div className="border h-[170px] w-[170px]">
              <img
                src={CategoryThum.src}
                className="w-full h-full"
                alt="catagory-picture"
              />
              <p className=" text-center">MAN</p>
            </div>
            <div className="border h-[170px] w-[170px]">
              <img
                src={CategoryThum.src}
                className="w-full h-full"
                alt="catagory-picture"
              />
              <p className=" text-center">MAN</p>
            </div>
            <div className="border h-[170px] w-[170px]">
              <img
                src={CategoryThum.src}
                className="w-full h-full"
                alt="catagory-picture"
              />
              <p className=" text-center">MAN</p>
            </div>
          </div>
        </div>
      </div>
      {/* Shops Archive */}
      <div className="flex">
        <div className=" basis-[40%] pl-5 border border-r-0">
          <ShopFilter />
        </div>
        <div className=" grid grid-cols-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;
