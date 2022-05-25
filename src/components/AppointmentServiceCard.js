import React from "react";

const AppointmentServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <>
      <div className="card bg-base-100 shadow border border-bordercolor hover:border hover:border-primary hover:transition-colors hover:duration-400">
        <div className="card-body text-center">
          <h2 className="card-title justify-center text-secondary font-normal text-lg m-0 ">
            {name}
          </h2>
          <p className=" text-sm font-medium text-black my-0 p-0">
            {slots.length > 0 ? (
              <span>{slots[0]} </span>
            ) : (
              <span className="text-red-500">No slots Available</span>
            )}
          </p>
          <p className=" text-xs text-black m-0 uppercase font-medium">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions justify-center">
            
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              className=" btn btn-secondary rounded-full px-6 mt-2  text-base-100 font-medium"
            >
              appointment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentServiceCard;
