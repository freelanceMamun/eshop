'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Login as LoginAPi } from '@/services/api';
import { toast, ToastContainer } from 'react-toastify';

import BreadCum from '@/components/breadcum/breadcum';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const router = useRouter();
  const handelLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Error: Please required the fild');
      return;
    }

    try {
      try {
        const response = await LoginAPi(name, email, password);
        console.log(response);

        router.push('/dashboard');
      } catch (error) {
        setError({ message: error.message });
      }
    } catch (error) {}
  };
  return (
    <div>
      <ToastContainer
        autoClose={4000}
        className={' w-[400px]'}
      ></ToastContainer>
      <BreadCum></BreadCum>
      <div className="flex items-center justify-center">
        <div className="max-w-xl w-2/12 pt-10">
          <h4 className="text-[17px] text-center font-semibold uppercase tracking-widest">
            Login
          </h4>
          <div className="mt-10 pb-24">
            <form action="" onSubmit={handelLogin}>
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
              <div className="flex flex-col mb-2 mt-4">
                <label
                  className="text-[11px]  mb-1 uppercase font-semibold tracking-widest text-[#303030]"
                  htmlFor="password"
                >
                  password
                </label>
                <input
                  className="border py-[5px] outline-0 px-2 w-full"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Remember" />
                  <label
                    htmlFor="Remember"
                    id="Remember"
                    className=" text-[11px] uppercase tracking-widest"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className=" underline text-[10px] tracking-widest"
                  >
                    Lost Your Password?
                  </a>
                </div>
              </div>
              <div className=" mb-2 mt-4">
                <button className=" bg-black uppercase text-white w-full text-[11px] tracking-widest py-3">
                  Log in
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

export default Login;
