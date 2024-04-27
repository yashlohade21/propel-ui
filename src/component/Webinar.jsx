import React from 'react';
import WebinarImage from '../assets/webinar.jpg'

const Webinar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-black text-white min-h-screen">
      <div className="lg:w-1/2 p-4 text-center">
        <h2 className="text-5xl lg:text-7xl font-bold mb-8">Webinar</h2>
        <a href="#" className="inline-flex items-center px-6 py-3 text-lg font-medium text-center text-white bg-gradient-to-r from-purple-700 to-indigo-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          Get Started For Free
          <svg className="rtl:rotate-180 w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
      <div className="lg:w-1/2 p-4">
        <div className="max-w-md lg:max-w-lg bg-black border border-purple-200 rounded-lg shadow dark:bg-purple-800 dark:border-purple-700">
          <a href="#">
            <img className="w-full h-auto rounded-t-lg" src={WebinarImage} alt="" />
          </a>
          <div className="p-5 bg:#0B071E backdrop-filter backdrop-blur-lg">
            <a href="#">
              <h5 className="mb-4 text-xl font-bold text-white-900 dark:text-white ">Create your own AI chatbot</h5>
            </a>
            <p className="mb-4 text-sm text-white-700 dark:text-white-400">Produce engaging & concise product videos</p>
            <a href="#" className="inline-flex items-center px-6 py-3 text-lg font-medium text-center text-white bg-gradient-to-r from-purple-700 to-indigo-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
              Get Started 
              <svg className="rtl:rotate-180 w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
