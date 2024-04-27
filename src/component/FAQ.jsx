import React from "react";
import ProAccordion from "./ProAccordian";

const FAQ = () => {
  return (
    <div className="p-4 bg-slate-800 w-[90%] md:w-[70%] mx-auto mt-16 mb-20">
      <div className="m-2">
        <h2 className="font-semibold text-white text-center text-4xl sm:text-balance ">
          {/* {heading.headingName} */}
          Frequently Asked
          <span className="bg-gradient-to-br mx-2 from-[#A570FF] from-10%  via-[#FF6EB2] via-80% to-yellow-500 text-transparent bg-clip-text">
            {/* {heading.headingWord} */}
            Questions
          </span>
        </h2>
      </div>
      <div className=" mx-auto">
        <ProAccordion
          title="What makes your mentorship programs stand out from others?"
          answer="Our mentorship programs offer a comprehensive learning experience, including masterclasses from industry experts such as CTOs, PMs, L&D consultants, and industry pioneers. We provide live project implementation with round-the-clock support, detailed videos, blogs, and resources for self-paced learning, as well as mock interviews and code reviews for continuous improvement. Additionally, we offer weekly revision and doubt-clearing sessions to help our mentees succeed."
        />
        <ProAccordion
          title="How do the masterclasses benefit me?"
          answer="Our masterclasses give you access to top industry experts who share their knowledge, experience, and insights on the latest trends in AI-powered full-stack development, data science, and generative AI. These sessions provide you with valuable perspectives and practical advice that can enhance your skills and knowledge."
        />
        <ProAccordion
          title="What kind of support do you offer during live project implementation?"
          answer="We offer 24/7 support during live project implementation to ensure you have access to guidance and assistance whenever you need it. Our experienced mentors are available to answer your questions, help you troubleshoot issues, and provide feedback on your work to help you succeed."
        />
        <ProAccordion
          title="How do the detailed videos and blogs help me learn?"
          answer="Our detailed videos and blogs cover a wide range of topics in AI-powered full-stack development, data science, and generative AI. They serve as valuable resources for self-paced learning, allowing you to dive deep into specific subjects and learn at your own speed."
        />
        <ProAccordion
          title="What is the benefit of mock interviews and code reviews?"
          answer="Mock interviews and code reviews help you prepare for real-world challenges and job interviews. Our mentors provide personalised feedback and constructive criticism to help you improve your coding skills, communication, and problem-solving abilities."
        />
        <ProAccordion
          title="How do weekly revision and doubt-clearing sessions work?"
          answer="Our weekly revision and doubt-clearing sessions provide an opportunity for you to review and consolidate your learning. You can ask questions and seek clarification on any topics you're unsure about, ensuring you stay on track and progress in your studies."
        />
        <ProAccordion
          title="How do your programs help me advance my career?"
          answer="Our mentorship programs are designed to equip you with the skills and knowledge you need to excel in AI-powered full-stack development, data science, and generative AI. By learning from industry experts, working on live projects, and receiving continuous feedback, you'll be well-prepared to advance your career and stand out in the job market."
        />
        <ProAccordion
          title="What kind of mentorship structure do you offer?"
          answer="We offer personalised mentorship tailored to your goals and needs. Our mentors work closely with you to identify your strengths and areas for improvement, and they provide guidance and support throughout your learning journey."
        />
        
      </div>
    </div>
  );
};

export default FAQ;
