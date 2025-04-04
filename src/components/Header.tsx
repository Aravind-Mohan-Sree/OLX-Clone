import React, { useState } from "react";
import { Link } from "react-router-dom";
import olx from "../assets/images/asset 0.svg";
import search from "../assets/images/asset 3.svg";
import arrowDown from "../assets/images/asset 2.svg";
import heart from "../assets/images/asset 5.svg";
import plus from "../assets/images/asset 7.svg";
import Login from "./Login";
import { useAuth } from "../hooks/useAuth";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <div className="container flex justify-between items-center shadow-md bg-[#ebeeef] h-[4.25rem] px-[1rem] fixed top-0 left-0 z-1">
        <Link to={"/"}>
          <img src={olx} alt="" />
        </Link>

        <div className="flex border-[#002f34] border-2 rounded-[4px] overflow-hidden w-80 h-[3rem]">
          <span className="bg-white ps-2 p-3">
            <img src={search} alt="" width={30} />
          </span>
          <input
            type="text"
            className="p-2 w-full focus:outline-none bg-white placeholder-[#0e040594]"
            placeholder="Search city, area or locality"
          />
          <span className="bg-white p-3 pe-5">
            <img src={arrowDown} alt="" width={30} />
          </span>
        </div>

        <div className="flex border-[#002f34] border-2 rounded-[4px] overflow-hidden w-1/2 h-[3rem]">
          <input
            type="text"
            className="ps-4 p-2 w-full focus:outline-none bg-white placeholder-[#0e040594]"
            placeholder='Search "Properties"'
          />
          <span className="bg-[#002f34] p-2.5 pe-3">
            <img className="invert" src={search} alt="" />
          </span>
        </div>

        <div className="flex border-[#002f34] text-[#0e0405] font-bold items-center">
          <span>ENGLISH</span>
          <span className="bg-[#ebeeef] p-3 pe-3">
            <img src={arrowDown} alt="" />
          </span>
        </div>

        <img src={heart} alt="" />

        <button
          className="relative text-[#0e0405] font-bold after:block after:bottom-0 after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-[#0e0405] hover:after:hidden cursor-pointer"
          onClick={!user ? () => setOpen(true) : logout}
        >
          {!user ? "Login" : "Logout"}
        </button>

        <Link
          to={"/post"}
          onClick={(e) => {
            if (!user) e.preventDefault();
            setOpen(true);
          }}
        >
          <button className="relative px-6 py-2 font-bold text-[.875rem] text-[#04332e] bg-white rounded-full border-transparent cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              <img src={plus} alt="" /> SELL
            </span>
            <span className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-500"></span>
            <span className="absolute inset-[2px] bg-white rounded-full"></span>
          </button>
        </Link>
      </div>

      {open && <Login setOpen={setOpen} />}
    </>
  );
};

export default Header;
