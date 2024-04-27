import React, { useState } from "react";

const ProAccordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-4 bg-gray-700 m-1 text-white">
      <div className="w-[100%]  ">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full items-center"
        >
          <span>{title}</span>
          {/* Toggle icon based on accordion state */}
          {!accordionOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="invert rounded-full h-4 w-4" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="invert rounded-full h-4 w-4" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
          )}
        </button>
        {/* Render answer if accordion is open */}
        {accordionOpen && (
          <div className="overflow-hidden">
            <p className="md:text-xl text-left my-3">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProAccordion;
