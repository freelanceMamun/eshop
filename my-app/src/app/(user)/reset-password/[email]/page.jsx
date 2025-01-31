'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const setUpPassword = () => {
  const [password, setPassword] = useState('');
  const [updatePssword, setUpdatepassword] = useState('');
  const searchParams = useSearchParams();

  console.log(searchParams.get('id'));
  console.log(searchParams.get('name'));

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="max-w-xl w-2/12 pt-10">
          <h4 className="text-[17px] text-center font-semibold uppercase tracking-widest">
            Update Password
          </h4>
          <div className="mt-10 pb-24">
            <form>
              <div className="flex flex-col mb-2 mt-4">
                <label
                  className="text-[11px]  mb-1 uppercase font-semibold tracking-widest text-[#303030]"
                  htmlFor="email"
                >
                  New Password
                </label>
                <input
                  className="border py-[5px] outline-0 px-2 w-full"
                  type="password"
                  name="password"
                  value={password}
                />
              </div>
              <div className="flex flex-col mb-2 mt-4">
                <label
                  className="text-[11px]  mb-1 uppercase font-semibold tracking-widest text-[#303030]"
                  htmlFor="email"
                >
                  Confirm Password
                </label>
                <input
                  className="border py-[5px] outline-0 px-2 w-full"
                  type="password"
                  name="password"
                  value={updatePssword}
                />
              </div>

              <div className=" mb-2 mt-4">
                <button className=" flex items-center justify-center gap-2 bg-black uppercase text-white w-full text-[11px] tracking-widest py-3">
                  {/* {loading ? (
                    <LuLoader className="size-5 transition-all duration-300 animate-spin" />
                  ) : (
                    'Send Now'
                  )} */}
                  Update Password
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

export default setUpPassword;
