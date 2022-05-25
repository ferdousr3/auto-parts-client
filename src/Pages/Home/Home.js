import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import BusinessSummary from "./BusinessSummary";
import Facility from "./Facility";
import Hero from "./Hero";
import Offers from "./Offers";
import OurProducts from "./OurProducts";
import Reviews from "./Reviews";


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
      <section className=" bg-[#f6f6f6] mb-24">
        <Offers />
      </section>
      <section className="pb-24">
        <BusinessSummary />
      </section>
      <section className="py-16 bg-[#f7f7f7]">
        <div className="gird grid-cols-1">
          <Reviews />
        </div>
      </section>
    </>
  );
};

export default Home;
