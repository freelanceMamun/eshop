import React from 'react';

const QuickViewModal = () => {
  return (
    <div>
      <div className="border border-black p-3">
        <div className="grid grid-cols-2">
          <div className=""></div>
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
                <p className="uppercase">Size Guide</p>
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="border p-2 text-[10px]">
                  2
                </a>
                <a href="#" className="border p-2 text-[10px]">
                  4
                </a>
                <a href="#" className="border p-2 text-[10px]">
                  5
                </a>
                <a href="#" className="border p-2 text-[10px]">
                  6
                </a>
              </div>
            </div>
            {/* Color */}
            <div className="">
              <div className="flex items-center justify-between">
                <p className="uppercase text-[12px] font-semibold">Size</p>
                <p className="uppercase">Size Guide</p>
              </div>
            </div>
            {/* Add to  Cart */}
            <div className="">
              <div className="flex items-center">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
              <div>
                <button className="bg-black py-3  tracking-wider hover:text-white flex items-center gap-2 flex-1 w-full  px-6 hover:bg-black transition-all duration-300 text-[11px] uppercase">
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
