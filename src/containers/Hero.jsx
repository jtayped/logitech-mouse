// React Util
import React from "react";

// Images
import HeroIMG from "../assets/mouseProfile.webp";

// Constants
import { hero } from "../constants/Home";

// Icons
import { BiCart } from "react-icons/bi";

// Animations
import { motion } from "framer-motion";

const animationDuration = 0.5;

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[100vh] px-10 bg-gradient-to-tr from-background from-50% to-85% to-secondary-button">
      <div className="w-[185px] lg:w-[330px]">
        <motion.p
          className="text-xl lg:text-3xl text-right font-bold"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: animationDuration }}
        >
          <span className="text-primary-button">Opulent</span> Touch
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animationDuration }}
        >
          <h1 className="font-bold text-7xl lg:text-9xl leading-[53px] lg:leading-[90px] mb-[-25px] md:mb-0">
            {hero.header}
          </h1>
          <p className="text-sm mt-1 hidden md:flex">{hero.text}</p>
        </motion.div>
        <a href={hero.buttonLink}>
          <motion.button
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: animationDuration }}
            className="hidden md:flex items-center gap-1 bg-accent hover:bg-accent/90 px-3 py-1 rounded text-white mt-2"
          >
            <BiCart size={20} />
            {hero.button}
          </motion.button>
        </a>
      </div>
      <div className="relative">
        <p className="absolute left-1/2 md:left-auto md:top-1/2 translate-y-[115px] md:-translate-y-1/2 -translate-x-1/2 md:translate-x-20 md:rotate-90 text-6xl md:text-9xl font-extrabold text-primary-button/20">
          Modern
        </p>
        <img
          className="min-w-[300px] w-[300px] md:h-[200px] md:rotate-90 transform -scale-x-100 md:scale-x-100"
          src={HeroIMG}
          alt="Logitech Mouse"
        />
      </div>
    </div>
  );
};

export default Hero;
