'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useRef } from 'react';

let arr = [1,2,3];

const ShopFilter = () => {
  const [taggle, setTaggle] = useState(false);
  const [clsname, setclsName] = useState('expanded');

  const ref = useRef();
  const handelToggl = (key,index) => {
  
  };

  return (
    <div>
      <div className="px-4">
        {arr.map((key, index)=>{ 
          return   <aside
         
          key={index}
           onClick={()=> handelToggl(key)}
           
           className={`border-b overflow-hidden  max-h-12 transition-all duration-500 border-[#ddd]`}
         >
           <h6
            
             className=" py-3 text-[13px]  cursor-pointer uppercase font-semibold tracking-wider flex justify-between"
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
         </aside>
         })}
       
       
      </div>
    </div>
  );
};

export default ShopFilter;
