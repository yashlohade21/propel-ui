import React from 'react';
import LmsImage from '../assets/lms.jpg';

const WebinarVideo = () => {
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
      <div className="lg:w-1/2 p-4 relative">
        <div className="max-w-md lg:max-w-lg bg-black relative">
          <a href="#">
            <img className="w-full h-auto rounded-t-lg" src={LmsImage} alt="" />
          </a>
          <a href="#" className="absolute top-4 left-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-300 bg-opacity-80 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-purple-800">
            Demo
            <span className="ml-2">
              <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.781904 0.56626C1.00972 0.44188 1.28728 0.45183 1.50562 0.59219L11.4396 6.9783C11.6427 7.10886 11.7654 7.33373 11.7654 7.57517C11.7654 7.81661 11.6427 8.04149 11.4396 8.17205L1.50562 14.5582C1.28728 14.6985 1.00972 14.7085 0.781904 14.5841C0.554084 14.4597 0.412354 14.2208 0.412354 13.9613V1.18906C0.412354 0.9295 0.554084 0.69064 0.781904 0.56626ZM1.83148 2.48875V12.6616L9.74371 7.57517L1.83148 2.48875Z" fill="white"/>
              </svg>
            </span>
          </a>
          <br/ >
          <p className="mb-3 font-normal text-white-700 dark:text-white-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
    </div>
  );
};    

export default WebinarVideo;