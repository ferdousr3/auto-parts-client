import React from "react";

const SectionTitle = ({ title, subTitle ,align }) => {
  return (
    <>
      <div className={` pb-14 ${align}`}>
        <h1 className="text-lg font-medium text-accent" >{title}</h1>
        <p className="text-2xl text-accent" >{subTitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
