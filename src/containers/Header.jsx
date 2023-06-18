// React Util
import React, { useState } from "react";

// Images
import Logo from "../assets/logitechLogo.webp";

// Icons
import { AiOutlineInfoCircle, AiFillGithub } from "react-icons/ai";

// Constants
import { header } from "../constants/Home";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <div className="fixed top-0 w-full h-[100px] flex items-center justify-between px-12">
      <a href={header.logitech}>
        <img className="invert h-12" src={Logo} alt="Logitech Logo" />
      </a>
      <div className="relative">
        {showInfo ? (
          <div className="absolute top-7 right-0 w-[300px] bg-background rounded p-2 shadow-xl">
            <p className="text-sm">{header.info}</p>
          </div>
        ) : null}
        <nav className="flex items-center gap-3">
          <a href={header.github}>
            <AiFillGithub size={23} />
          </a>
          <button onClick={() => toggleShowInfo()}>
            <AiOutlineInfoCircle size={23} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
