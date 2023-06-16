// React Util
import React from "react";

// Images
import MouseRealLife1 from "../assets/mouseRealLife1.webp";

// Constants
import { section1 } from "../constants/Home";

const Section1 = () => {
  return (
    <section className="w-full h-screen flex justify-center gap-10">
      <img
        className="aspect-portrait object-cover h-[500px] object-[35%]"
        src={MouseRealLife1}
        alt="Real Life Use Case"
      />
      <div className="mt-10 max-w-[500px]">
        <h2 className="ml-[-70px] text-7xl font-bold">{section1.title}</h2>
        <p className="mt-3">{section1.text}</p>
        <button></button>
      </div>
    </section>
  );
};

export default Section1;
