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
        <div className="">
          <div className="left-side">
            <div className="">
              <div className="">
                <div>
                  <img src={thumbail.src} alt="thumbail-picture" />
                </div>
                <div className="">
                  <div></div>
                  <div>
                    <h4>Summer Collections</h4>
                    <p>
                      Summer is just around the corner, which means it’s time to
                      update our wardrobes with the latest fashion trends.
                    </p>
                  </div>
                  <div>
                    <p>
                      <a href="#" className=' uppercase text-sm'>NEWs</a>
                      <a href="#" className=" uppercase">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
