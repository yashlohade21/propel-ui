import React from 'react';

const Assistance = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-black to-gray-900 text-white min-h-screen">
      <div className="lg:w-1/2 p-4 text-center">
      <div className="inline-flex items-center px-6 py-3 text-lg font-medium text-center text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
  <div className="bg-black bg-opacity-70 p-6">
    <div className="flex flex-col space-y-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full mr-4"></div>
        <div>
          <h3 className="text-lg font-bold text-white">John Doe</h3>
          <p className="text-gray-300 text-sm">This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full mr-4"></div>
        <div>
          <h3 className="text-lg font-bold text-white">Jane Smith</h3>
          <p className="text-gray-300 text-sm">I agree with John. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full mr-4"></div>
        <div>
          <h3 className="text-lg font-bold text-white">Bob Johnson</h3>
          <p className="text-gray-300 text-sm">I have a different opinion. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="lg:w-1/2 p-4">
            <div className="max-w-md lg:max-w-lg bg-gradient-to-r from-black via-gray-800 to-black rounded-lg shadow">
                <div className="p-5 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
                <a href="#">
                    <h5 className="mb-4 text-xl font-bold text-white dark:text-white ">
                    Assistance Everywhere
                    </h5>
                </a>
                <p className="mb-4 text-sm text-white dark:text-white-400">
                    Integrate Assistify into your favorite applications with our versatile options. From Slack to support apps. Zapier, Email software, and beyond - Assistify is ready to assist wherever you need it.
                </p>
                <a href="#" className="inline-flex items-center px-6 py-3 text-md font-medium text-center text-white bg-gradient-to-r from-black to-gray-600 rounded-lg border border-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    Learn More
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

export default Assistance;
