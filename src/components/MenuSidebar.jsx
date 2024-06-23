import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../Assets/Menu.svg";
import closeMenu from "../Assets/CloseMenu.svg";
import home from "../Assets/Home.svg";
import closeHome from "../Assets/CloseHome.svg";
import bag from "../Assets/Bag.svg";
import closeBag from "../Assets/CloseBag.svg";
import navlink from "../Assets/NavLink.svg";
import closeNavLink from "../Assets/CloseNavLink.svg";
import logo from "../Assets/Logo.svg";

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
      {/* Top navigation links */}
      <div
        className={`nav-links-top ${
          isMenuOpen ? "open" : ""
        } flex flex-col justify-center items-center p-2 gap-8 transition-width duration-300`}
      >
        {/* Logo Icon */}
        <div className="logo flex justify-center items-center p-2 rounded-md">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu">
          <div
            className="flex items-center p-2 gap-2"
            onClick={handleMenuClick}
          >
            <img src={isMenuOpen ? closeMenu : menu} alt="Menu Icon" />
          </div>
        </div>

        {/* Home Icon */}
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
