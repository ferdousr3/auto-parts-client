import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentServiceCard from "./AppointmentServiceCard";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from '../../components/Loading/Loading'

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  // const [services, setServices] = useState([]);

  const formattedDate = format(date, "PP");

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);

  const {data:services, isLoading, refetch} = useQuery(["available",formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res=>res.json())
  );
  if(isLoading){
    return <Loading />
  }

  return (
    <>
      <div className="pb-14">
        <h1 className="text-secondary text-lg font-medium  text-center pb">
          Available Appointment on {format(date, "PP")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services?.map((service) => (
          <AppointmentServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default AvailableAppointments;
