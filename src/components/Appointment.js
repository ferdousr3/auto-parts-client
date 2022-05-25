import React, { useState } from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      {/* !<---page title-----> */}
      <PageTitle title="Appointment " />
      <section >
        <AppointmentBanner date={date} setDate={setDate} />
      </section>
      <section className="container mx-auto pb-24">
        <AvailableAppointments date={date} /> 
      </section>
    </>
  );
};

export default Appointment;
