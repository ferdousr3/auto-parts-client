import React from "react";
import ContactDetails from "./ContactDetails";

const EmailUs = () => {

  
  const handleBooking = (event) => {
    event.preventDefault();
    const treatmentName = event.target.treatmentName.value;
    const slotsDate = event.target.slotsDate.value;
    const slotTime = event.target.slotTime.value;
    const submit = { treatmentName, slotsDate, slotTime };

    console.log(submit);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl   ">
        <div className="flex justify-center items-center">
          <div className="div">
            <div className="pb-3">
              <h1 className="text-2xl text-accent ">
                Store Location <br />
                
              </h1>
              <p
               
                className="text-sm  text-neutral font-medium  capitalize lg:pr-20"
              >
                Have a question? You may find an answer in our FAQs. But you can
                also contact us:
              </p>
            </div>
            <ContactDetails />
          </div>
        </div>
        <div className="">
          <h2 className="text-xl text-neutral font-light lg:pl-16 pb-4">
            Email Us
          </h2>
          <form onSubmit={handleBooking} className=" space-y-3 text-center ">
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full max-w-sm input-secondary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input w-full max-w-sm input-secondary"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="input w-full max-w-sm input-secondary"
            />
            <textarea
              type="email"
              placeholder="Your Message"
              className="textarea w-full max-w-sm textarea-secondary"
            />

            <input
              className=" text-white btn btn-secondary w-full max-w-sm "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailUs;
