import React from 'react';

const Navbar = () => {
  return (
    <nav className="">
      <div className="container max-w-full px-6 py-4">
        {/* Offer Section */}
        <div className="text-[11px] font-medium text-[#070707]">
          <p>
            <a className="font-medium uppercase tracking-widest" href="#">
              Best special offers! 40% Off!
            </a>
          </p>
        </div>
        {/* === Brand Lodo */}
        <div className="brand-logo">
          <div className="font-bold">
            <h2 className="uppercase text-2xl">
              <a href="/">Webnuxt Shop</a>
            </h2>
          </div>
        </div>
        {/* === Brand Logo End */}

        {/* Control section */}
        <div className="flex items-center gap-2">
          
        </div>

        {/* Control section */}
      </div>
    </nav>
  );
};

export default Navbar;
