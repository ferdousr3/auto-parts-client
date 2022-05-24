import React from "react";

const FacilityItem = ({ icon,  title, description }) => {
  return (
    <>
      <div className="flex">
        <div className="img">
          <img className="w-20 " src={icon} alt={title} />
        </div>
        <div className="ml-4">
          <h1 className="text-xl text-accent font-display uppercase font-extrabold hover:text-secondary hover:transition-colors hover:duration-300 ">
            {title}
          </h1>
          <p className="text-xs text-neutral pt-1">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FacilityItem;
