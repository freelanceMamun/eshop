'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useRef } from 'react';

let arr = [1,2,3];

const ShopFilter = () => {
  const [taggle, setTaggle] = useState(false);
  const [height, setHeight] = useState('45px');

  const ref = useRef();
  const handelToggl = (key,index) => {
     let num =  arr.findIndex((a)=> a === key)
     
     if(num === index){
      setHeight("200px")
     }
     
  };

  return (
    <div>
      <div className="px-4">
        {arr.map((key, index)=>{ 
          return   <div
         
          key={index}
           onClick={()=> handelToggl(key,index)}
           style={{maxHeight : height} }
           className={`border-b overflow-hidden transition-all duration-500 border-[#ddd]`}
         >
           <h6
            
             className=" py-3 text-[13px] cursor-pointer uppercase font-semibold tracking-wider flex justify-between"
           >
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
         })}
       
       
      </div>
    </div>
  );
};

export default ShopFilter;
