import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("toggleMenuclicked");
  };
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-3">
            <a href="/" className="block py-6 text-lg font-bold text-primary">
              travelaku.com
            </a>
          </div>
          <div className="flex items-center ml-9 ">
            <label className="btn md:hidden btn-circle swap swap-rotate left-19">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                onClick={toggleMenu}
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                onClick={toggleMenu}
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>

            <nav
              id="nav-menu"
              className={`absolute right-9 top-full ${
                !isMenuOpen ? "hidden" : ""
              }  w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static md:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none`}
              onClick={toggleMenu}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="/"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="about"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="gallery"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Gallery
                  </a>
                </li>
                <li className="group">
                  <a
                    href="partner"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Partner
                  </a>
                </li>
                <li className="group">
                  <a
                    href="blog"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="contact"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <div className="md:flex md:items-center md:ml-4">
                  <button className="btn btn-outline btn-primary mx-3">
                    Login
                  </button>
                  <button className="btn btn-secondary">Signup</button>
                </div>
              </ul>
            </nav>
          </div>
          <input
            type="checkbox"
            value="synthwave"
            className="  toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
