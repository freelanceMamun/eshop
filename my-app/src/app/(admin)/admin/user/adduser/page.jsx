"use client";

import BreadCum from "@/components/breadcum/breadcum";
import React from "react";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { FileImage } from "lucide-react";

const AddUser = () => {
  // createuser handaler

  return (
    <div className="p-5">
      <BreadCum></BreadCum>
      <div className="text-xl">Add New User</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border col-span-2 shadow-md p-10 mt-5">
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Username
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Full Name
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Email
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Phone number
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Department
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Join date
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Address
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  You upload image
                </label>
                <Input type="file" className="h-10"></Input>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Password
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Confirm Password
                </label>
                <Input className="h-10"></Input>
              </div>
              <div className="flex md:mt-7 flex-col gap-2">
                <Input
                  type="submit"
                  className="h-10 bg-black text-white"
                ></Input>
              </div>
            </div>
          </form>
        </div>
        <div className="Profile-image col-span-1 mt-5">
          <div className="border-black border-dotted rounded-md border w-6/12 h-full flex justify-center items-center">
            <FileImage size={50}></FileImage>

            {/* <img src="/profile.png" alt="" className="w-32 h-32 rounded-full" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
