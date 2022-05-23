import React from "react";

const EmailItems = ({ icon, title, text }) => {
  return (
    <>
      <div className="flex items-center md:mx-auto ">
        <span className="text-sm text-white p-2 rounded-full bg-secondary">{icon}</span>
        <div className="ml-5">
          <p className="text-[16px] text-neutral font-normal">{text}</p>
        </div>
      </div>
    </>
  );
};

export default EmailItems;
