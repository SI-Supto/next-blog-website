import Link from "next/link";
import React from "react";
import ToggleButton from "./ToogleButton";
import SigninBtn from "./SigninBtn";
import Navmenu from "./Navmenu";

const Navbar = () => {
  return (
    <div className="px-3 py-3 md:px-9 lg:px-12 md:py-6 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <Link href={"/"} className="tracking-wider font-bold text-xl md:text-2xl">
            Blog
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/blogs"}> Blogs</Link>
              </li>
              <li>
                <Link href={"/dashboard"}> Dashboard</Link>
              </li>
              <li>
                <Link href={"/about"}> About us</Link>
              </li>
              <li>
                <ToggleButton />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-6 px-2">
          <div>
            <SigninBtn />
          </div>
          <div className="md:hidden">
            <Navmenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
