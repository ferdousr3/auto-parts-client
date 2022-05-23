import React from "react";
import Button from "../../components/Share/Button/Button";
import ProfIcon from '../../assets/images/icons2.png'
import Photo1 from '../../assets/images/about/1.jpg'
import Photo2 from '../../assets/images/about/2.jpg'
import Photo3 from '../../assets/images/about/3.jpg'
import Photo4 from '../../assets/images/about/4.jpg'

const Practices = () => {
  return (
    <>
      <div className="hero ">
        <div className=" hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className="pt-5">
            <h1 className="text-xl md:text-5xl font-bold text-accent">
              Auto Parts <br /> For Different Cars.
            </h1>
            <p className="py-6">
              We Provide some parts of Modern Cars, we are Whole Sailer
            </p>
            <div className="-ml-5 flex-row md:flex mb-5">
              <div className="flex">
                <img className="w-24 " src={Photo1} alt="1" />
                <img className="w-24 " src={Photo2} alt="2" />
              </div>
              <div className="flex">
                <img className="w-24 " src={Photo3} alt="3" />
                <img className="w-24 " src={Photo4} alt="4" />
              </div>
            </div>
            <Button to="appointment" text="Order Our Products  " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Practices;
