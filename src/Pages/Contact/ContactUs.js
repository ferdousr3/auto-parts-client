import React from 'react';
import Button from '../../components/Share/Button/Button'

const ContactUs = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl font-normal text-accent">
          24/7 Online Support{" "}
        </h1>
        <h2 className=" text-base text-neutral font-normal py-3">
          We’re happy to answer any questions you have or provide you with an
          estimate. Just send us a message in the form below with any questions
          you may have or call us.
        </h2>
        <p className="text-secondary text-xl  font-medium pb-5">
          (+800) 123 456 7890
        </p>
        <Button to="home" text="Visit shope" />
      </div>
    </>
  );
};

export default ContactUs;