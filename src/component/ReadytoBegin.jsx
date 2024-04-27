import React from "react";

function ReadytoBegin(){
  return (
    <>
      <div className="text-center mx-auto py-10 border-2 w-[80%] rounded-2xl flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold  text-white ">
          Ready to
          <span className="mx-1 bg-gradient-to-r from-[#A570FF] from-10%  via-[#FF6EB2] via-80% to-yellow-500 text-transparent bg-clip-text">
            Begin?
          </span>
        </h2>
        <p className="mt-2 text-lg font-normal text-gray-500">
        Embark on the journey of creating your very own AI-powered assistant effortlessly.
        </p>
        <a href="#" className="text-center w-[120px] rounded-lg mt-5 border-1 p-2 bg-gradient-to-r from-[#A570FF] from-10%  via-[#FF6EB2] via-60% to-yellow-500 text-white">
          Get Started
        </a>
      </div>
    </>
  );
};

export default ReadytoBegin;
