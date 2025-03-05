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
      </div>
    </div>
  </div>;
};

export default Product;
