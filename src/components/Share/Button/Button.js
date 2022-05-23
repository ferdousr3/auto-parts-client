import React from "react";
import {useNavigate} from 'react-router-dom'

const Button = ({ text,to }) => {
  const navigate = useNavigate()
  const handleNavigate = (to)=>{
    navigate(`/${to}`)
  }
  return (
    <>
      <button
        onClick={() => handleNavigate(to)}
        className=" btn  px-8 flex justify-center rounded-full text-sm  font-medium  text-black border-0 uppercase bg-info hover:bg-secondary  hover:text-white hover:transition-colors duration-400 "
      >
        {text}
      </button>
    </>
  );
};

export default Button;
