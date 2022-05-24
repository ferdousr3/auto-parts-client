import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import Facility from "./Facility";
import Hero from "./Hero";
import Offers from "./Offers";
import OurProducts from "./OurProducts";


const Home = () => {
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="Home" />
      <section className="bg-[#f6f6f6]">
        <Hero />
      </section>
      <section>
        <Facility />
      </section>
      <section className="container mx-auto pb-24 ">
        <OurProducts />
      </section>
      <section className="bg-[#f6f6f6]">
        <Offers />
      </section>
      <section className="pb-24">
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
