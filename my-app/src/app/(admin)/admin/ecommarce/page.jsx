import React from "react";
import BreadCum from "@/components/breadcum/breadcum";
import ProductList from "@/components/productlist/product-list";
const page = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Product List
          </h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>›</span>
            <span>Order</span>
            <span>›</span>
            <span className="text-foreground">Product List</span>
          </div>
        </div>
      </div>
      {/*  Product Listing  */}
      <ProductList></ProductList>
    </div>
  );
};

export default page;
