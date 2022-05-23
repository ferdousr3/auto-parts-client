import React from 'react';
import About from '../../assets/images/about/about1.png'
import Ask from '../../components/Faq/Ask';


const Care = () => {
  return (
    <>
      <div className=" ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="div">
            <img src={About} className=" rounded-lg " alt="About" />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">
              About <span className="font-light text-4xl">Auto Parts</span>
            </h1>
            <p className="py-6">
              Owing to our expertise in this field, we are able to trade,
              distribute, supply and export a quality-centric assortment of Door
              Rubber for Cars.
            </p>
            <div className="-ml-5 md:-ml-12 mb-2">
              <Ask />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Care;