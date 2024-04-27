import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GirlImage from '../../assets/GirlImage.png';
import './CourseCard.css';

function CourseCard() {
  // Define settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: false, // Ensure slider scrolls horizontally
  };

  // Function to check if the screen width is less than 768px (sm)
  const isMobileScreen = () => window.innerWidth < 768;

  return (
    <>
      {isMobileScreen() ? (
        // Render the slider if it's a mobile screen
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div className="rounded overflow-hidden shadow-lg py-2 lg:w-1/4 w-4/5 lg:mx-0 mx-auto my-4 card">
        <h2 className="font-bold py-2 text-lg text-center lg:w-3/3 w-2/3  mx-auto">
          AI Powered Full Stack Development
        </h2>
        <p className="py-2 px-5 text-sm text-center   mx-auto">
          Develop smart solutions with peak performance, Get ahead of your
          competition with superpowers of Generative AI tools
        </p>
        <img
          className="w-full px-2"
          src={GirlImage}
          alt="Sunset in the mountains"
        />
        <p className="py-2 px-5 text-sm text-center text-[#232833] w-2/3 mx-auto ">
          Watch demo class and start your development journey
        </p>
        <button className="courseCard-btn rounded text-white my-[10px] flex mx-auto">
          Get Started
        </button>
      </div>
          {/* Slide 2 */}
          <div className="rounded overflow-hidden shadow-lg py-2 lg:w-1/4 w-4/5 lg:mx-0 mx-auto my-4 card">
          <h2 className="font-bold py-2 text-lg text-center mb-4 mt-3 lg:w-3/3 w-2/3  mx-auto">
          Data Science + Generative AI
        </h2>
        <p className="py-2 px-5 text-sm text-center ">
          Maximize your data potential. Learn data science and generative AI for
          smarter outcomes
        </p>
        <img
          className="w-full px-2"
          src={GirlImage}
          alt="Sunset in the mountains"
        />
        <p className="py-2 px-5 text-sm text-center text-[#232833] w-2/3 mx-auto ">
          Watch demo class and start your AI journey
        </p>
        <button className="courseCard-btn rounded text-white my-[10px] flex mx-auto">
          Get Started
        </button>
          </div>
          {/* Slide 3 */}
          <div className="rounded overflow-hidden shadow-lg py-2 lg:w-1/4 w-4/5 lg:mx-0 mx-auto my-4 card">
            <h2 className="font-bold py-2  text-base text-center  lg:w-3/3 w-2/3  mx-auto ">
          Business Intelligence + Entrepreneurship
        </h2>
        <p className="py-2 px-8 text-sm text-center  mx-auto">
          Empower your business acumen. Master business intelligence and
          entrepreneurship for strategic success.
        </p>
        <img
          className="w-full px-2"
          src={GirlImage}
          alt="Sunset in the mountains"
        />
        <p className="py-2 px-5 text-sm text-center text-[#232833] w-2/3 mx-auto ">
          Watch demo class and start your entrepreneurship journey
        </p>
        <button className="courseCard-btn rounded text-white my-3 flex mx-auto ">
          Get Started
        </button>
          </div>
        </Slider>
      ) : (
        // Render regular layout if it's not a mobile screen
        <div className="CourseCard lg:flex md:block justify-center">
          {/* Course 1 */}
          <div className="rounded overflow-hidden shadow-lg py-2 lg:w-1/4 w-4/5 lg:mx-0 mx-auto my-4 card">
        <h2 className="font-bold py-2 text-lg text-center lg:w-3/3 w-2/3  mx-auto">
          AI Powered Full Stack Development
        </h2>
        <p className="py-2 px-5 text-sm text-center   mx-auto">
          Develop smart solutions with peak performance, Get ahead of your
          competition with superpowers of Generative AI tools
        </p>
        <img
          className="w-full px-2"
          src={GirlImage}
          alt="Sunset in the mountains"
        />
        <p className="py-2 px-5 text-sm text-center text-[#232833] w-2/3 mx-auto ">
          Watch demo class and start your development journey
        </p>
        <button className="courseCard-btn rounded text-white my-[10px] flex mx-auto">
          Get Started
        </button>
          </div>
          {/* Course 2 */}
          <div className="rounded overflow-hidden shadow-lg py-2 lg:w-1/4  w-4/5  lg:mx-[30px]  mx-auto my-4 card">
          <h2 className="font-bold py-2 text-lg text-center mb-4 mt-3 lg:w-3/3 w-2/3  mx-auto">
          Data Science + Generative AI
        </h2>
        <p className="py-2 px-5 text-sm text-center ">
          Maximize your data potential. Learn data science and generative AI for
          smarter outcomes
        </p>
        <img
          className="w-full px-2"
          src={GirlImage}
          alt="Sunset in the mountains"
        />
        <p className="py-2 px-5 text-sm text-center text-[#232833] w-2/3 mx-auto ">
          Watch demo class and start your AI journey
        </p>
        <button className="courseCard-btn rounded text-white my-[10px] flex mx-auto">
          Get Started
        </button>
          </div>
          {/* Course 3 */}
          <div className="rounded overflow-hidden shadow-lg py-2 lg:w-1/4 w-4/5 lg:mx-0 mx-auto my-4 card">
          <h2 className="font-bold py-2  text-base text-center  lg:w-3/3 w-2/3  mx-auto ">
          Business Intelligence + Entrepreneurship
        </h2>
        <p className="py-2 px-8 text-sm text-center  mx-auto">
          Empower your business acumen. Master business intelligence and
          entrepreneurship for strategic success.
        </p>
        <img
          className="w-full px-2"
          src={GirlImage}
          alt="Sunset in the mountains"
        />
        <p className="py-2 px-5 text-sm text-center text-[#232833] w-2/3 mx-auto ">
          Watch demo class and start your entrepreneurship journey
        </p>
        <button className="courseCard-btn rounded text-white my-3 flex mx-auto ">
          Get Started
        </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseCard;
