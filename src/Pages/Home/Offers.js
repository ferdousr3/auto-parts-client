import React from 'react';
import OfferImage from '../../assets/images/offer/offer.png'
import Button from '../../components/Share/Button/Button';

const Offers = () => {
  return (
    <>
      <div className="container max-auto">
        <div className="hero py-10 lg:py-15 lg:px-6 ">
          <div className="hero-content flex-col xl:flex-row-reverse gap-6 mx-auto">
            <img
              src={OfferImage}
              alt="Auto-parts hero"
              className=" w-48 lg:w-[48rem] flex justify-center items-center"
            />
            <div>
              <h1 className="xl:pr-10 text-2xl md:text-4xl lg:text-5xl font-[600] font-display uppercase pt-2 text-accent">
                AMP JUMP STARTER W/120 PSI COMPRESSOR
              </h1>
              <p className="pt-3 pb-2">
                Now we offered ths price for every 100unit orders <br />
                and you have not any shipping charges.
              </p>
              <h2 className="text-4xl text-primary font-[600] pt-3 pb-6 font-display">
                $18.79 <del className=" text-neutral text-xl ">$23.73</del>{" "}
              </h2>
              <Button text="Order Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;