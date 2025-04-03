import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.png';
const Navbar = () => {
  return (
    <ul className="flex justify-between   bg-violet-400">
      <li className="px-5">
      <img src={logo} style={{ width: "100px", height: "auto" }} />
      </li>
      <li className="flex justify-end">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "*:text-violet-950 bg-violet-600 rounded-3xl" : ""
        }
      >
       <div className="text-blue-900 text-xl flex justify-center py-3 px-6 hover:scale-110 hover:text-violet-900 transition-transform duration-50">Home</div>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "*:text-violet-900 bg-violet-600 rounded-3xl" : ""
        }
      >
        <div className="text-blue-900 text-xl flex justify-center py-3 px-6 hover:scale-110 hover:text-violet-900 transition-transform duration-50">About</div>
      </NavLink>
      </li>
      
    </ul>
  );
};

export default Navbar;
