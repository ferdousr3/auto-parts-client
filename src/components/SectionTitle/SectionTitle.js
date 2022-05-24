import React from "react";

const SectionTitle = ({ title, subTitle, align }) => {
  return (
    <>
      <div className={` pb-14 ${align}`}>
        <h1 className="text-3xl font-[700] font-display uppercase  text-primary">
          {title}
        </h1>
        <p className="text-sm text-neutral">{subTitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
