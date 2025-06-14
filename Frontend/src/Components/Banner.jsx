import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Hello, welcomes here to learn something
              <span className="text-pink-700"> new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam.
              Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at
              veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg 
              className="w-4 h-4 opacity-70" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <div>
              <button className="btn mt-6 btn-secondary">Get Started</button>
            </div>
          </div>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">

          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;