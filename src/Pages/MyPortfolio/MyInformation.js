import React from "react";

const MyInformation = () => {
  return (
    <>
      <div className="personal-details pb-8 text-lg text-accent">
        <div className=" flex-row sm:flex sm:space-x-5 pt-6">
          <div className="">
            <h1 className="mr-2 font-bold text-secondary">Name:</h1>
            <p className=" text-base  font-medium">MD.Ferdous</p>
          </div>
          <div className="">
            <h1 className="mr-2 font-bold text-secondary">Email:</h1>
            <p className=" text-base font-medium">ferdousr1992@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInformation;
