import { useState } from "react";
import Logo from "../images/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className=" w-full max-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1 className="">
          <a href="/" className="logo">
            <img src={Logo} alt="Kingsley Logo" className="w-10 h-10" />
          </a>
        </h1>

        <div className="relative  md:justify-self-center max-md:w-full max-md:flex justify-end">
          <button
            className="menu-btn md:hidden!"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <div className="flex justify-end">
          <a
            href="#contact"
            className=" btn btn-secondary max-md:hidden! border w-full md:w-auto "
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
