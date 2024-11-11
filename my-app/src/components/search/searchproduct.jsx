import React from 'react';

const SearchProduct = () => {
  return (
    <div className="h-screen">
      <div className="Search-area flex items-center justify-center">
        <div className="title">
          <h4>What are you looking for?</h4>
        </div>
        <div className="mt-6">
          <form action="">
            <div className="fild">
              <input type="text" placeholder="Start typeing..." />
            </div>
            <button className=" cursor-pointer">Clear</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
