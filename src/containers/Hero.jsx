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
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-tr from-background from-50% to-85% to-secondary-button">
      <div className="w-[330px]">
        <motion.p
          className="text-3xl text-right font-bold"
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
          <h1 className="font-bold text-9xl leading-[90px]">{hero.header}</h1>
          <p className="text-sm mt-1">{hero.text}</p>
        </motion.div>

        <motion.button
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: animationDuration }}
          className="flex items-center gap-1 bg-accent hover:bg-accent/90 px-3 py-1 rounded text-white mt-2"
        >
          <BiCart size={20} />
          {hero.button}
        </motion.button>
      </div>
      <div className="relative">
        <motion.p
          initial={{ x: 0, opacity: 0, rotate: 90, y: -70 }}
          animate={{ x: 70, opacity: 1, rotate: 90, y: -70 }}
          transition={{ type: "tween", duration: animationDuration }}
          className="absolute top-1/2 -translate-y-1/2 translate-x-20 rotate-90 text-9xl font-extrabold text-primary-button/20"
        >
          Modern
        </motion.p>
        <motion.img
          initial={{ x: -20, rotate: 90 }}
          animate={{ x: 0, rotate: 90 }}
          transition={{ type: "tween", duration: animationDuration }}
          className="h-[200px] rotate-90 transform -scale-y-100"
          src={HeroIMG}
          alt="Logitech Mouse"
        />
      </div>
    </div>
  );
};

export default Hero;
