import React from "react";

const faqs = [
  {
    _id: 1,
    title: `Shipping Charge`,
    description: `Shipping charge is free for some location, but other places we add very small amount of shipping Charge.`,
  },
  {
    _id: 2,
    title: `How to Order?`,
    description: `Choose your parts (no single parts you must order minimum amount) and payment us then we sent your parts.`,
  },
  {
    _id: 3,
    title: `Are payment method secure?`,
    description: `Yes! your Payment method is secure and we hide your details`,
  },
  {
    _id: 4,
    title: `How to we support after sells?`,
    description: `We support online 24/7 and offline we support our office time`,
  },
];

const Ask = () => {
  return (
    <>
      <div id="faq" className=" space-y-3 ">
        {faqs.map((faq) => (
          <div
            key={faq._id}
            tabIndex={faq._id}
            className="container max-w-2xl mx-auto"
          >
            <div className=" collapse collapse-plus rounded-sm  shadow">
              <input type="checkbox" />
              <div className="collapse-title text-sm md:text-xl font-medium bg-success">
                <h1 className="text-accent text-sm md:text-xl">
                  {faq.title}
                </h1>
              </div>
              <div className="collapse-content ">
                <p className="pt-2 text-accent text-base">{faq.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ask;
