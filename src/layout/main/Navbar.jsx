import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-14 bg-indigo-500 rounded-full m-2 mx-auto px-5 max-w-7xl">
      <ul className="h-full mx-auto flex items-center justify-between gap-3">
        <h1 className="text-white text-[20px] font-bold">Project Name</h1>
        <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
          <input
            className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none px-2"
            type="text"
            name="search"
            id="search"
            placeholder="search"
          />
        </li>
        <li className="text-white">
            <Link to='/'>Home</Link>
        </li>
        <li className="text-white">
            <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
