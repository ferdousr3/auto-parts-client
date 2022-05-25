import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, slots, name } = treatment;

  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slotTime.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    const url = `http://localhost:5000/booking`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // close modal
        console.log(data);
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch()
        setTreatment(null);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-error text-black btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center py-2">
            Booking for {name}
          </h3>
          <form onSubmit={handleBooking} className=" space-y-3 text-center ">
            <input
              disabled
              name="treatmentName"
              type="text"
              className="input w-full max-w-sm input-secondary"
              value={name}
            />
            <input
              disabled
              name="date"
              type="text"
              className="input w-full max-w-sm input-secondary"
              value={format(date, "PP")}
            />
            <select
              name="slotTime"
              className="select select-bordered w-full max-w-sm select-secondary"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="input w-full max-w-sm input-secondary"
              disabled
              value={user?.displayName}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="input w-full max-w-sm input-secondary"
            />
            <input
              type="email"
              className="input w-full max-w-sm input-secondary"
              disabled
              value={user?.email}
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

export default BookingModal;
