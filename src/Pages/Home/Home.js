import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/Share/PageTitle/PageTitle";


const Home = () => {
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="Home" />
     
      <section className="pb-24">
        <ContactForm/>
      </section>
    </>
  );
};

export default Home;
