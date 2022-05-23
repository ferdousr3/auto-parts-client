import React from "react";
import Ask from "../../components/Faq/Ask";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import ContactUs from "./ContactUs";
import EmailUs from "./EmailUs";

const Contact = () => {
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="Contact" />
      <section className="container mx-auto pt-10 pb-24">
        <ContactUs />
      </section>
      <section className="container mx-auto pb-24">
        <EmailUs />
      </section>
      <section className=" pb-24">
        <SectionTitle title=" Asked Frequently" align="text-center" />
        <Ask />
      </section>
    </>
  );
};

export default Contact;
