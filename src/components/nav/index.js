import React from "react";

const Nav = () => {
  return (
    <nav className="flex align-center justify-between w-full py-10">
      <h3 className="basis-1/4">logo</h3>
      <ul className="flex basis-1/6  justify-between ">
        <li className="font-medium">Blog</li>
        <li className="font-medium">Work</li>
        <li className="font-medium">About</li>
      </ul>
    </nav>
  );
};

export default Nav;
