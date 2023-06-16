// React Util
import React, { useState } from "react";

// Images
import Logo from "../assets/logitechLogo.webp";

// Icons
import { AiOutlineInfoCircle } from "react-icons/ai";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <div className="fixed top-0 w-full h-[100px] flex items-center justify-between px-12">
      <a href="/">
        <img className="invert h-12" src={Logo} alt="Logitech Logo" />
      </a>
      <div className="relative">
        {showInfo ? (
          <div className="absolute top-7 right-0 w-[300px] bg-background rounded p-2">
            <p className="text-sm">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              doloremque aliquid eius dolor corrupti possimus harum fugit.
              Facilis repellat inventore quia, ipsum nemo sit totam distinctio,
              dolore animi maxime nesciunt nostrum saepe iure ipsa quam, beatae
              alias ullam sequi. Similique.
            </p>
          </div>
        ) : null}
        <button onClick={() => toggleShowInfo()}>
          <AiOutlineInfoCircle size={23} />
        </button>
      </div>
    </div>
  );
};

export default Header;
