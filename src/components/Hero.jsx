import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row justify-around pt-28 md:pt-32 lg:px-14 bg-slate-100">
      <div className="w-full md:w-3/5 flex flex-col gap-6 items-start px-4 md:px-0">
        <div className="bg-slate-300 w-auto px-3 py-2 rounded-md">
          <span className="font-medium">Simple and Secure Payments</span>
        </div>
        <h1 className="text-6xl font-semibold">
          The New Era of Global Payments
        </h1>
        <p className="font-medium text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae,
          in dolores impedit rerum animi.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-700 text-white font-medium px-4 py-3 border-2 border-indigo-700 rounded-md hover:bg-indigo-600">
            Get Started
          </button>
          <button className="px-4 py-3 rounded-md font-medium border-2 hover:bg-indigo-700 hover:border-indigo-600 hover:text-white">
            Watch Demo
          </button>
        </div>
        <div className="md:pt-4">
          <span className="text-slate-500 font-medium">
            Trusted 13,000+ Businesses Worldwide
          </span>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex justify-center md:justify-end items-start pt-8 md:pt-0">
        <img
          src="https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-10/12 md:h-96 rounded-md mx-0"
        />
      </div>
    </div>
  );
};

export default Hero;
