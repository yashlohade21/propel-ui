import React from "react";

function SolutionItem(props) {
  let heading = props.heading;
  return (
    <>
      <div className=" md:mx-auto sm:w-full md:w-[70%] my-10 mt-5">
        <div>
          <h2 className="font-semibold text-white text-center text-4xl sm:text-balance ">
            {heading.headingName}
            <span className="bg-gradient-to-br  from-[#A570FF] from-10%  via-[#FF6EB2] via-80% to-yellow-500 text-transparent bg-clip-text">
              {heading.headingWord}
            </span>
          </h2>
        </div>

        <div className="h-auto p-5 bg-gradient-to-br from-[#32323c] to-[#08080c] mt-5 mx-auto pb-5 rounded-2xl justify-center items-center flex flex-col gap-5 lg:flex-row space-x-5 ">
          <div className="flex-col text-center justify-center items-center">
            <h3 className="text-3xl font-semibold m-2 text-center text-white ">Explore Propel LMS</h3>
            <img
              className="h-[155px] w-[320px] md:h-[235px] md:w-[350px] my-5 transition ease-in-out delay-75 hover:shadow-lg hover:border-green-500 hover:border-2  hover:shadow-cyan-500/50 hover:-translate-y-2 hover:scale-110 duration-300  rounded-2xl"
              src="https://s3-alpha-sig.figma.com/img/cea7/23e1/2f3548f14688a6a06a0997d6b6aaa078?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rgyjxrm8~7zD78OR60vuBJVMqCeQnBwXRmtBgy1Nds~yKc-GyA7KLjeUs3rFgRTBohRWy-1KmymOjOO9qp7Vx2buzLb9yM9h8emGjndaLCygzG1B-8hq8nhJxUN60cZX1ngMvoUre4fE0Z2QFwjN7FubSnEXylF0ejNibrB81NxHPqYy8iOYk~yMHD9oNw6rnDRDzGR7g6aKzCM43AKShHIYy1ODEFJXVoUuHN3LAeMIBdwlhc-CD4IQeY3ylLc0~KkIm7Rik10~IRb1lCyWJRNq6nDHQMkOtX44YGyjXKSm0mKQaTxP8iXg92VZErvNOB5L2ruzJTpTnvuEWpu-cg__"
              alt=""
            />
            <a
              href="#"
              className=" inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-gradient-to-r from-purple-700 to-indigo-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Get Started For Free
              <svg
                className="rtl:rotate-180 w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className=" md:flex text-white w-full md:w-[45%]  h-auto rounded-2xl p-1  bg-gradient-to-b from-gray-700 to-gray-900  flex-col items-center">
            <div className="w-full transition ease-in-out delay-75 hover:shadow-lg hover:shadow-cyan-500/50 hover:border-2 hover:border-green-500 hover:-translate-y-2 hover:scale-110 duration-300 p-3 rounded-lg bg-gradient-to-b from-[#32323c] to-[#08080c]">
              <div>
                <h4 className="text-xl text">6 Month Work Experience</h4>
              </div>
              <div>
                {" "}
                <p className="text-gray-400">
                  Integrated Learning + work experience in live projects
                </p>
              </div>
            </div>
            <div className="w-full transition hover:shadow-lg hover:shadow-cyan-500/50  ease-in-out delay-100 hover:border-green-500 hover:border-2 hover:-translate-y-2 hover:scale-110 duration-300 p-3 rounded-lg  bg-gradient-to-b from-[#32323c] to-[#08080c]">
              <div>
                <h4 className="text-xl text">
                  6+ Hosted Projects to add on your resume
                </h4>
              </div>
              <div>
                {" "}
                <p className="text-gray-400">
                  Project Based Learning on weekends. Get 24 X 7 Guidance and
                  support to build awesome projects
                </p>
              </div>
            </div>
            <div className="w-full transition hover:shadow-lg hover:shadow-cyan-500/50  ease-in-out delay-100 hover:border-green-500 hover:border-2 hover:-translate-y-2 hover:scale-110 duration-300 p-3 rounded-lg  bg-gradient-to-b from-[#32323c] to-[#08080c]">
              <div>
                <h4 className="text-xl text">
                  Get Mentorship from Industry Experts
                </h4>
              </div>
              <div>
                {" "}
                <p className="text-gray-400">
                  Learn from industry leaders with years of experience
                </p>
              </div>
            </div>
            <div className="w-full transition hover:shadow-lg hover:shadow-cyan-500/50  ease-in-out delay-100 hover:border-green-500 hover:border-2 hover:-translate-y-2 hover:scale-110 duration-300 p-3 rounded-lg  bg-gradient-to-b from-[#32323c] to-[#08080c]">
              <div>
                <h4 className="text-xl text">
                  Industrial connect with CEOs, CTOs, PMs, corporate leaders
                </h4>
              </div>
              <div>
                {" "}
                <p className="text-gray-400">
                  Get networking opportunities and latest insights from
                  industries
                </p>
              </div>
            </div>
            <div className="w-full transition hover:shadow-lg hover:shadow-cyan-500/50  ease-in-out delay-100 hover:border-green-500 hover:border-2 hover:-translate-y-2 hover:scale-110 duration-300 p-3 rounded-lg  bg-gradient-to-b from-[#32323c] to-[#08080c]">
              <div>
                <h4 className="text-xl text">
                  Personalized Mock Interviews for growth
                </h4>
              </div>
              <div>
                {" "}
                <p className="text-gray-400">
                  Mock interviews to improve your chances of getting hired
                </p>
              </div>
            </div>
            <div className="w-full transition hover:shadow-lg hover:shadow-cyan-500/50  ease-in-out delay-100 hover:border-green-500 hover:border-2 hover:-translate-y-2 hover:scale-110 duration-300 p-3 rounded-lg  bg-gradient-to-b from-[#32323c] to-[#08080c]">
              <div>
                <h4 className="text-xl text">24 X 7 support from mentors</h4>
              </div>
              <div>
                {" "}
                <p className="text-gray-400">
                  Self paced learning with a mentor who can guide you and solve
                  your doubts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionItem;
