'use client';

import React, { useState } from 'react';
import BreadCum from '@/components/breadcum/breadcum';
import { forgotPassword } from '@/services/api';

import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handelClick = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }

    try {
      const response = await forgotPassword(email);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <BreadCum></BreadCum>
      <div className="flex items-center justify-center">
        <div className="max-w-xl w-2/12 pt-10">
          <h4 className="text-[17px] text-center font-semibold uppercase tracking-widest">
            Reset Password
          </h4>
          <div className="mt-10 pb-24">
            <form onClick={handelClick}>
              <div className="flex flex-col mb-2 mt-4">
                <label
                  className="text-[11px]  mb-1 uppercase font-semibold tracking-widest text-[#303030]"
                  htmlFor="email"
                >
                  Email Address *
                </label>
                <input
                  className="border py-[5px] outline-0 px-2 w-full"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className=" mb-2 mt-4">
                <button className=" bg-black uppercase text-white w-full text-[11px] tracking-widest py-3">
                  Send Now
                </button>
              </div>
            </form>
            <div className=" text-center mt-4">
              <p className="text-[11px]">
                Not a Member?{' '}
                <a href="/signup" className=" underline">
                  Register
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
