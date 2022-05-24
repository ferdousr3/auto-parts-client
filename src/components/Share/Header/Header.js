import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo.png";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  return (
    <>
      <div className="fixed shadow-sm z-20 w-full bg-base-100 ">
        <div className="navbar bg-base-100 z-20  flex justify-between w-full   max-w-7xl  container mx-auto lg:px-10 ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label
                onClick={() => setOpen(!open)}
                tabIndex="0"
                className="xl:hidden"
              >
                {open ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </label>
              {/* mobile nav link */}
              <ul
                tabIndex="0"
                className={
                  open
                    ? " dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box text-sm font-medium text-accent w-80 sm:w-[50rem] mx-auto text-center space-y-1 "
                    : "hidden"
                }
              >
                <li>
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "hover:text-primary transition-colors duration-300 "
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "hover:text-primary transition-colors duration-300 "
                    }
                    onClick={handleClose}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "hover:text-primary transition-colors duration-300 "
                    }
                    onClick={handleClose}
                    to="/appointment"
                  >
                    Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "hover:text-primary transition-colors duration-300 "
                    }
                    onClick={handleClose}
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="btn btn-link normal-case ml-1 lg:ml-0  ">
              <span className="text-sm  lg:-ml-5 sm:text-lg flex items-center   ">
                <img
                  className="hidden sm:block"
                  width="150"
                  height="80"
                  src={Logo}
                  alt="logo"
                />
              </span>
            </NavLink>
          </div>
          {/* desktop nav link */}
          <div className=" hidden navbar-end xl:flex">
            <ul className="flex space-x-4 p-0 text-sm font-medium text-accent ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-primary transition-colors duration-300 "
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-primary transition-colors duration-300 "
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-primary transition-colors duration-300 "
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-primary transition-colors duration-300 "
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-primary transition-colors duration-300 "
                  }
                  to="/myPortfolio"
                >
                  My Portfolio
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "hover:text-primary transition-colors duration-300 "
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* navbar end items */}
          <ul className="flex items-center h-full">
            {user && (
              <li className="pl-4 ">
                <label
                  htmlFor="my-drawer-2"
                  className="text-sm text-secondary font-medium lg:hidden"
                >
                  Dashboard
                </label>
              </li>
            )}
            <li className="pl-2 flex items-center ">
              {user && (
                <p className="text-xs pr-2">{user?.displayName?.slice(0, 2)}</p>
              )}
              {user ? (
                <button
                  onClick={logOut}
                  className="text-primary flex items-center bg-transparent border-0 p-0 m-0"
                >
                  <span className=" hidden sm:block">Logout</span>
                  <BsBoxArrowInRight className="sm:hidden text-primary text-lg font-bold" />
                </button>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary flex justify-center items-center"
                      : "hover:text-primary transition-colors duration-300 flex justify-center items-center"
                  }
                  to="/login"
                >
                  <span className=" hidden sm:block">Login </span>
                  <BsBoxArrowInLeft className="sm:hidden text-primary text-lg font-bold" />
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
