"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
const BreadCum = () => {
  const params = usePathname();

  return (
    <div className="flex justify-end pr-5 pt-5">
      <div className="text-end  pt-3 pb-3 border-[#ececec]">
        <div className="flex justify-center gap-1">
          <Link
            href={"/admin"}
            className="text-[10px] uppercase font-semibold tracking-widest cursor-pointer"
          >
            Home
          </Link>

          <p className="text-[10px] uppercase font-semibold tracking-widest">
            {`> ${params.split("/")[1]}`}
          </p>

          <p className="text-[10px] uppercase font-semibold tracking-widest">
            {`> ${params.split("/")[2]}`}
          </p>
          {params.split("/")[3] && (
            <p className="text-[10px] uppercase font-semibold tracking-widest">
              {`> ${params.split("/")[2]}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCum;
