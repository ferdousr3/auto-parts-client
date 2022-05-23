import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MyLink = ({ to, text, onClick, setOpen,open }) => {
  return (
    <>
      <NavLink
        onClick={() => setOpen(!open)}
        to={`/${to}`}
        className={({ isActive }) =>
          isActive ? " text-orange-200 " : "text-black"
        }
      >
        {text}
      </NavLink>
    </>
  );
};

export default MyLink;
