import React from "react";
import Header from "./Header";
import CourseCard from "./CourseCard/CourseCard";
import Webinar from "./Webinar";
import WebinarVideo from "./WebinarVideo";
import PriceCard from "./PriceCard/PriceCard";
import SolutionItem from "./SolutionItem";
import ReadytoBegin from "./ReadytoBegin";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      <Header />
      <CourseCard />
      <SolutionItem heading={{ headingName: "Whats in for ", headingWord: "You?" }} />
      <Webinar />
      <PriceCard />
      <WebinarVideo />
      <SolutionItem heading={{ headingName: "Why Mentorship is ", headingWord: "Important",}}/>
      {/* Assintance Card here */}
      <FAQ/>
      <ReadytoBegin/>
      </>
  );
};

export default Home;
