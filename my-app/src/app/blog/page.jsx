import React from 'react';
import BreadCum from '@/components/breadcum/breadcum';

import thumbail from '@/asset/moderno-2338813525-600x336.jpg';

const Blogs = () => {
  return (
    <div>
      <BreadCum></BreadCum>
      <div className="py-5 container max-w-5xl m-auto">
        <h4 className=" uppercase font-semibold text-2xl">Blog</h4>
      </div>
      <div className="container max-w-5xl m-auto">
        <div className="flex">
          <div className="left-side">
            <Article></Article>
            <Article></Article>
            <Article></Article>
          </div>
          <div className="right-side sticky"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

function Article() {
  return (
    <article>
      <div className="border border-b-0">
        <div className="flex">
          <div className="w-[210px]">
            <img
              className="w-full h-full object-cover"
              src={thumbail.src}
              alt="thumbail-picture"
            />
          </div>
          <div className=" py-8 px-7">
            <div className="text-[10px] border px-2 py-1 w-max mb-3">
              April 23, 2023
            </div>
            <div>
              <h4 className="text-[23px] mb-3 uppercase font-medium">
                Summer Collections
              </h4>
              <p>
                Summer is just around the corner, which means it’s time to
                update our wardrobes with the latest fashion trends.
              </p>
            </div>
            <div className="mt-10">
              <p className="">
                <a href="#" className="block uppercase text-[11px] mb-3">
                  NEWs
                </a>
                <a
                  href="#"
                  className=" text-[13px] tracking-wide font-semibold uppercase"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
