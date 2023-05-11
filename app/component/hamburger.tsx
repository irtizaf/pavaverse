"use client"
import { useState, useEffect } from "react";
import {RxCross2}  from "react-icons/rx"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let iconStyles = { fontSize: "1.5em" };

  return (
    <nav
      className={`${
        scrollPosition > 1 ? "  bg-transparent" : " bg-slate-400"
      } fixed top-0 z-50 w-full `}
    >
      <div className="mx-5 py-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <p
              className={`${
                scrollPosition > 1 ? "text-white" : "text-gray-800"
              } text-2xl font-bold`}
            >
              <a href="/">
              <img src='pana.png' className="h-10 w-20"></img>
              </a>
            </p>
          </div>

          <div className="flex items-center md:hidden ">
            <button onClick={toggleMenu} className={`${
              isOpen ? "hidden" : " "
            } `} >
              
              < FaBars className={`${
                scrollPosition > 1 ? "text-white" : "text-gray-800"
              } text-2xl font-bold`}  />
            </button>
          </div>

          <div className="flex items-center absolute right-0 md:hidden">
            <button onClick={toggleMenu} className={`${
              isOpen ? "" : " hidden"
            } `} >
              
              < RxCross2 className={`${
                scrollPosition > 1 ? "text-white" : "text-gray-800"
              } text-2xl font-bold`}  />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:justify-end `}
          >
            <a href="/intro">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block md:inline-block md:mt-0 mt-4 mr-4`}
                onClick={toggleMenu}
              >
                Vision
              </a>
            </a>

            <a href="/name">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block md:inline-block md:mt-0 mt-4 mr-4`}
                onClick={toggleMenu}
              >
                Courses
              </a>
            </a>

            <a href="https://www.piaic.org/" target={"_blank"}>
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block md:inline-block md:mt-0 mt-4 mr-4`}
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </a>

            
            <a href="https://portal.piaic.org/" target={"_blank"}>
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block md:inline-block md:mt-0 mt-4`}
                onClick={toggleMenu}
              >
                Login
              </a>
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar