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
              <p>SIZE</p>
              <div className=""></div>
            </div>
            {/* Color */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
