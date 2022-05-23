import React from "react";


const ContactForm = () => {
  return (
    <>
      <div
     
      >
        <div className="container mx-auto py-14 ">
          <div className={` pb-14 text-secondary text-center`}>
            <h1 className="text-lg font-medium text-secondary">Contact Us</h1>
            <p className="text-xl text-white font-light">
              Stay connected with us
            </p>
          </div>

          <div className="flex justify-center p-5 lg:p-0">
            <div className="text-center">
              <form className=" space-y-4  ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input w-full max-w-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input w-full max-w-sm"
                />
                <textarea
                  className="textarea w-full  max-w-sm "
                  placeholder="Your Message"
                />
                <br />
                <input
                  type="button"
                  value="submit"
                  className="input px-10 py-4 rounded-full text-sm  justify-center items-center font-medium  hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:transition-colors duration-400  max-w-sm btn btn-primary  text-white border-0 uppercase bg-gradient-to-r from-secondary to-primary  "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
