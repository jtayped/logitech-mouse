// React Util
import React from "react";
import { useInView } from "react-intersection-observer";

// Images
import MouseRealLife1 from "../assets/mouseRealLife1.webp";

// Constants
import { section1 } from "../constants/Home";

// Animations
import { motion } from "framer-motion";

const Section1 = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="w-full flex justify-center gap-10">
      <motion.img
        ref={ref}
        initial={{ x: -10, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "tween", duration: 0.5 }}
        className="md:aspect-portrait object-cover h-[400px] w-[100px] md:w-[300px] object-[35%]"
        src={MouseRealLife1}
        alt="Real Life Use Case"
      />
      <div className="mt-10 max-w-[500px] pr-5">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "tween", duration: 0.5 }}
          className="ml-[-70px] text-3xl sm:text-5xl lg:text-7xl font-bold"
        >
          {section1.title}
        </motion.h2>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "tween", duration: 0.5 }}
          className="mt-3 text-sm md:text-md"
        >
          {section1.text}
        </motion.p>
      </div>
    </section>
  );
};

export default Section1;
