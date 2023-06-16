// React Util
import React from "react";

// Images
import MouseRealLife1 from "../assets/mouseRealLife1.webp";

// Constants
import { section1 } from "../constants/Home";

const Section1 = () => {
  return (
    <section className="w-full flex justify-center gap-10">
      <img
        className="md:aspect-portrait object-cover h-[400px] w-[100px] md:w-[300px] object-[35%]"
        src={MouseRealLife1}
        alt="Real Life Use Case"
      />
      <div className="mt-10 max-w-[500px] pr-5">
        <h2 className="ml-[-70px] text-3xl sm:text-5xl lg:text-7xl font-bold">
          {section1.title}
        </h2>
        <p className="mt-3 text-sm md:text-md">{section1.text}</p>
      </div>
    </section>
  );
};

export default Section1;
