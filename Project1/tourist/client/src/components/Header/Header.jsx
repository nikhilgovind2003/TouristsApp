import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const nav_Links = [
    {
      display: "Home",
      link: "/home",
    },
    {
      display: "About",
      link: "/about",
    },
    {
      display: "Tours",
      link: "/tours",
    },
  ];

  return (
    <div className=" flex w-full justify-between items-center px-44 py-4 bg-gray-50 fixed top-0 z-10 shadow-3xl">
      {/* ======== LOGO ======== */}
      <Link to="/home">
        <img src={logo} className=" w-[30%]" alt="logo" />
      </Link>
      {/* ======= NavLinks ========= */}
      <div>
        <ul className=" flex items-center gap-8">
          {nav_Links.map((item, index) => (
            <li className=" text-lg">
              <Link className=" focus:text-green-500 text-black active:font-bold"  key={index} to={item.link}>
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ======== Login/ Register =========== */}
      <div className=" flex items-center gap-4">
        <ul className=" flex items-center gap-4">
          <button className=" px-4 py-2 font-bold bg-green-50  rounded-md">
            <Link to="/login">Login</Link>
          </button>
          <button className=" px-4 py-2 text-white bg-green-500  rounded-full">
            <Link to="/register">Register</Link>
          </button>
        </ul>
        <span className=" text-black lg:hidden">
          <i class="ri-menu-line"></i>
        </span>
      </div>
      {/* ======== Login/ Register end =========== */}

    </div>
  );
};

export default Header;
