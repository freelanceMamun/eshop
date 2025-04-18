import React from 'react';
import BreadCum from '@/components/breadcum/breadcum';

import Accroding from '@/components/accroding/accroding';
const Product = () => {
  return <div className='py-8'>
    <div className=' grid grid-cols-2'>
      <div></div>
      <div className='md:w-[720px] px-8'>
      <div className='flex items-start'>
        {/* Bread Come */}
         <BreadCum />
        {/* Bread Come */}
      </div>
      {/*  Product Descript */}
      <div className=''>
       <div className=''>
        <h4 className='text-[30px] py-4'>Crossback Halter Dress</h4>
        <div className='py-3'>$2,400.00-$2,650.00</div>
        <div className='py-3 text-sm'>
        A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event.
        </div>
       </div>  

      </div>
      {/*  Product Descript */}
      {/* Size */}
      <div className=' py-4'>
        <div className='flex items-center py-4'>
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
        {/*  Color */}
        <div className='py-4'>
          <div className='flex'>
            <h5 className=' uppercase font-bold text-[16px]'>Color</h5>
          </div>
          <div className=''>
            <h4>$2,5000</h4>
          </div>
        </div>
        {/* Color */}

        {/* Add to card */}
        <div class=" flex gap-4">
          <div className='border flex w-32 justify-between items-center'>
            <div className='cursor-pointer  text-center w-8 px-1 text-lg'>-</div>
            <div className=' text-sm'>20</div>
            <div className='cursor-pointer text-center  w-8  px-1 text-lg'>+</div>
          </div>
             <button id="addToCart" class="bg-black text-white px-14 py-3 text-[15px]  duration-00 transition-all  hover:bg-[#FC5F49]">Add to Cart</button>
        </div>
        {/*  */}
        <div className='flex items-center justify-between w-[60%] py-5'>
          <div className='cursor-pointer uppercase text-[12px]'>
            add to wishlist
          </div>
          <div className=' uppercase text-[12px]'>
            Category  : 
          </div>
          <div className=' text-[12px] uppercase'>TAG : </div>
        </div>

        {/*  */}

        {/* Descriptions */}


      
        {/*  */}
      </div>
    </div>
  </div>;
};

export default Product;
