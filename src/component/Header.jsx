import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-center flex flex-col justify-center my-8">
        <h3 className="md:text-6xl text-4xl text-[#D9D9E8]">
          LEARN FROM <br /> INDUSTRY EXPERTS
        </h3>
        <p className=" text-sm mt-2 m-auto w-2/5 font-semibold text-[#A6A6C9]">
          Rapidly Develop a Tailored AI Assistant with OpenAI GPT-3.5:
          Seamlessly Connect to Resources and Upload Files for Comprehensive
          Assistance.
        </p>
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center">
          <button className="w-[150px] h-[40px] text-xs text-balance bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 hover:from-purple-700 hover:via-pink-600 hover:to-yellow-500 text-white font-bold py-1 px-4 rounded mt-4 ">
            Talk to our Career Counsellor
          </button>
          <button className="w-[150px] h-[40px] text-sm  bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded mt-4  md:ml-2  ">
            Chat with team
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
