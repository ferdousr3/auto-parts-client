import React from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import AboutCard from "./AboutCard";
import Care from "./Care";
import PartsBrand from "./PartsBrand";

const About = () => {
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="About" />
      <section className=" container mx-auto ">
        <PartsBrand />
      </section>
      <section className=" container mx-auto py-24">
        <AboutCard />
      </section>
      <section className=" container mx-auto pb-24">
        <Care />
      </section>
    </>
  );
};

export default About;
