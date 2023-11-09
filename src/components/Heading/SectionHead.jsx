import React from "react";

const SectionHead = ({ color, title }) => {
  return (
    <h2
      className={`text-${color} text-[29px] sm:text-[44px] md:text-[50px] md:leading-none  font-bold xl:pl-6 ml-4   py-6 text-center `}
      style={{ fontFamily: "'Teko', sans-serif" }}
    >
      {title}
    </h2>
  );
};

export default SectionHead;
