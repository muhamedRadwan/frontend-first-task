// Scroll-based state management with responsive menu
import React, { useState, useEffect } from "react";
import logo from "../assets/images/png-clipart-logo-organization-rashtriya-ekta-diwas-business-noida-job-offer-logo-business.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 navbar transition-all duration-300 ${
        scrolled
          ? "bg-white text-gray-800 shadow-md"
          : "bg-transparent text-white"
      } px-10`}
    >
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <div className="flex flex-col items-start text font-bold">
            <span className={scrolled ? "text-myBlue" : "text-white"}>
              Class
            </span>
            <span>Community</span>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 pl-50 ml-40">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Plus</a>
          </li>
          <li>
            <a>Schools</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>Community</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className={`${
            scrolled ? "bg-myBlue text-white" : "bg-white text-blue-700"
          } rounded-3xl px-6 py-1.5 cursor-pointer`}
        >
          Log in
        </a>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
