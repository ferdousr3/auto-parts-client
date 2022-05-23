import React from 'react';

const BookingCard = () => {
  return (
    <>
      <div className="bg-success rounded-xl  lg:px-10 lg:py-10">
        <div className="max-w-lg mx-auto p-5  lg:p-8">
          <h1 className="text-lg uppercase text-accent font-semibold lg:pr-48">
            Are you have car Auto-parts business?
          </h1>
          <p className="py-8 text-accent text-base font-normal">
            Grade Auto Spares is one of the growing nearly new auto parts
            dealers. We are dealing with almost every auto parts & accessories,
            ready to dispatch it to you. Whether you require a taillight
            assembly or a quarter panel or a complete engine, Grade either have
            it or can arrange it for you through our widespread network
          </p>
          <button className="px-8 py-4 rounded-full text-sm  text-white text-center font-medium  bg-primary  border-0 uppercase  hover:bg-secondary hover:transition-colors duration-400 ">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingCard;