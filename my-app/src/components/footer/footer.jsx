import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#070707]">
      <div className="px-20 py-20">
        <div className=" grid grid-cols-3">
          <div className="w-[70%]">
            <p className="text-white uppercase text-[13px] tracking-widest">
              Sign up to get 10% off your first order and stay up to date on the
              latest product releases, special offers and news
            </p>
            {/* SubScribe Form */}
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[12px] cursor-pointer hover:text-orange-500 "
                  href="#"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[12px] hover:text-orange-500"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>
              If you have any questions regarding your order, products or our
              service, please contact our customer service.
            </p>
            <div>
              <ul>
                <li>Monday - Friday: 10:00-6:00 PM</li>
                <li>
                  <p>
                    <span>PHONE</span>
                    <span>+1 712-339-9294</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email</span>
                    <span>+1 712-339-9294</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address</span>
                    <span>+1 712-339-9294</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>
                    <span>+1 712-339-9294</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
