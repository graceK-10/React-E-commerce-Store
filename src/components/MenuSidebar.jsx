import react, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/Menu.svg";
import closeMenu from "../assets/CloseMenu.svg";
import home from "../assets/Home.svg";
import closeHome from "../assets/CloseHome.svg";
import bag from "../assets/Bag.svg";
import closeBag from "../assets/CloseBag.svg";
import navlink from "../assets/NavLink.svg";
import closeNavLink from "../assets/CloseNavLink.svg";

const MenuSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`navbar fixed inset-y-0 left-4 my-4 flex flex-col justify-between bg-white rounded-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? "w-[8rem]" : "w-[5.5rem]"
      }`}
    >
      <div className="logo flex justify-center items-center p-2 rounded-md">
        <img src={isMenuOpen ? closeMenu : menu} alt="Logo" />
      </div>
      <div className="menu">
        <div className="flex items-center p-2 gap-2" onClick={handleMenuClick}>
          <img src={isMenuOpen ? closeMenu : menu} alt="Menu Icon" />
        </div>
      </div>
      <div className="home">
        <Link to="/">
          <img
            src={isMenuOpen ? closeHome : home}
            alt="Home Icon"
            className="flex justify-center items-center p-2 gap-2 w-18 h-19 bg-black rounded-xl"
          />
        </Link>
      </div>
      <div className="Bag">
        <Link to="/bag">
          <img
            src={isMenuOpen ? closeBag : bag}
            alt="Bag Icon"
            className="flex justify-center items-center p-2 gap-2 rounded-lg bg-white"
          />
        </Link>
      </div>

      {/* Bottom navigation link */}
      <div className="nav-link-bottom flex items-center justify-center p-2 gap-8">
        <Link to="/">
          <img src={isMenuOpen ? closeNavLink : navlink} alt="Nav link Icon" />
        </Link>
      </div>
    </div>
  );
};

export default MenuSidebar;
