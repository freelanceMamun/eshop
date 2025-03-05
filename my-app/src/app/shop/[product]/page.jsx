import React from 'react';
import BreadCum from '@/components/breadcum/breadcum';
const Product = () => {
  return <div>
    <div className=' grid grid-cols-2'>
      <div></div>
      <div>
      <div className='flex items-start'>
        {/* Bread Come */}
         <BreadCum />
        {/* Bread Come */}
      </div>
      {/*  Product Descript */}
      <div className=''>
       <div className=''>
        <h4>Crossback Halter Dress</h4>
        <div className=''>$2,400.00-$2,650.00</div>
        <div>
        A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event.
        </div>
       </div>  

      </div>
      {/*  Product Descript */}
      {/* Size */}
      <div className=''>
        <div className='flex items-center'>
          <h5 className=' text-[16px] font-bold uppercase'>Size</h5>
          <h5 className=' uppercase'>Size Guide</h5>
        </div>
        <div className=''>
          <div className='flex gap-1'>
            <div className='border px-4 py-2 text-[14px] border-black'>2</div>
            <div className='border px-4 py-2 text-[14px] border-black'>4</div>
            <div className='border px-4 py-2 text-[14px] border-black'>6</div>
            <div className='border px-4 py-2 text-[14px] border-black'>8</div>
          </div>
        </div>
      </div>

      {/* Size */}
      </div>
    </div>
  </div>;
};

export default Product;
