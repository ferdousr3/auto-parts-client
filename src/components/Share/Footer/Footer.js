import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from '../../../assets/images//logo/logo_footer16.png'

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <div className="text-base-content bg-[#333333]">
        <div className="container mx-auto mt-5">
          <div className="footer p-10  text-white grid xl:grid-cols-12">
            <div className="lg:col-span-4">
              <img src={FooterLogo} alt='Footer logo' />
              <p className=" font-light text-neutral ">
                <small>
                  Hi, we are always open for cooperation and suggestions,
                  contact us in one of the ways below:
                </small>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="div">
                  <h1 className="text-xs font-light">PHONE NUMBER</h1>
                  <p className="pt-1">
                    <small>+3 (465) 137-8763</small>
                  </p>
                </div>
                <div className="div">
                  <h1 className="text-xs font-light">EMAIL ADDRESS</h1>
                  <p className="pt-1">
                    <small>exmple@gmail.com</small>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="div">
                  <h1 className="text-xs font-light">STORE LOCATION</h1>
                  <p className="pt-1">
                    <small>
                      The Barn, Henley in <br /> Arden B578. England
                    </small>
                  </p>
                </div>
                <div className="div">
                  <h1 className="text-xs font-light">WORKING HOURS</h1>
                  <p className="pt-1">
                    <small>
                      Mon - Fri: 08:00 - 20:00 <br />
                      Sat - Sun: 09:00 - 18:00
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <span className=" text-2xl font-[700] text-white font-display">
                Services
              </span>
              <Link to="/" className="link link-hover">
                Branding
              </Link>
              <Link to="/" className="link link-hover">
                Design
              </Link>
              <Link to="/" className="link link-hover">
                Marketing
              </Link>
              <Link to="/" className="link link-hover">
                Advertisement
              </Link>
            </div>
            <div className="lg:col-span-2">
              <span className="text-2xl font-[700] text-white font-display">
                Company
              </span>
              <Link to="/about" className="link link-hover">
                About us
              </Link>
              <Link to="/contact" className="link link-hover">
                Contact
              </Link>
              <Link to="/blogs" className="link link-hover">
                Blogs
              </Link>
            </div>
            <div className="lg:col-span-4">
              <span className="text-2xl font-[700] text-white font-display">
                Newsletter
              </span>
              <div className="form-control w-60 lg:w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="email@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer items-center p-4  border-t border-t-[#484848]  text-white">
            <div className="items-center grid-flow-col">
              <p>Copyright © {year}- All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
