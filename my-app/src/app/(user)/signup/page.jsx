import React from 'react';
import BreadCum from '@/components/breadcum/breadcum';
const Register = () => {
  return (
    <div>
      <BreadCum></BreadCum>
      <div className="flex items-center justify-center">
        <div className="max-w-xl w-2/12 pt-10">
          <h4 className="text-[17px] text-center font-semibold uppercase tracking-widest">
            {' '}
            Register
          </h4>
          <div className="mt-10">
            <form action="">
              <div className="flex flex-col mb-2 mt-4">
                <label
                  className="text-[11px] mb-1 uppercase font-semibold tracking-widest text-[#303030]"
                  htmlFor="name"
                >
                  User name *
                </label>
                <input
                  className="border py-[5px] outline-0 px-2 w-full"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col mb-2 mt-4">
                <label
                  className="text-[11px]  mb-1 uppercase font-semibold tracking-widest text-[#303030]"
                  htmlFor="email"
                >
                  Email address *
                </label>
                <input
                  className="border py-[5px] outline-0 px-2 w-full"
                  type="text"
                  name="email"
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
                />
              </div>
              <div>
                <p className="text-[10px]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>
              <div className=" mb-2 mt-4">
                <button className=" bg-black text-white w-full text-[11px] tracking-widest py-3">
                  REGISTER
                </button>
              </div>
            </form>
            <div className=" text-center mt-4">
              <p className="text-[11px]">
                You a Member? <a href="/my-account">Login</a>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
