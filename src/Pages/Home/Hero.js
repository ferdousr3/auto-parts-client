import React from "react";
import HeroRight from '../../assets/images/hero/hero.PNG'

const Hero = () => {
  return (
    <>
      <div className="container max-auto">
        <div className="hero py-10 lg:py-32 xl:min-h-screen lg:px-8">
          <div className="hero-content flex-col lg:flex-row-reverse gap-6">
            <img src={HeroRight} alt="Auto-parts hero" className=" w-52 lg:w-[32rem] flex justify-center" />
            <div>
              <h1 className=" text-sm font-medium uppercase text-accent pb-1">Find Auto Parts Fast</h1>
              <h1 className="text-4xl lg:text-5xl font-[600] font-display uppercase pt-2 text-accent">
                <span className="text-primary">Best Quality</span> <br />
                for Best Price
              </h1>
              <p className="pt-3 pb-6">
                Auto-Parts is a car parts  whole seller Website <br />
                purchase your car parts for your business.
              </p>
              <button className="py-2 font-medium px-6 uppercase text-sm rounded-sm bg-primary text-white">buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
