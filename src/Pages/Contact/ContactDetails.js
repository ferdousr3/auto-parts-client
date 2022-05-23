import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaRegEnvelope,
} from "react-icons/fa";
import EmailItems from './EmailItems';

const ContactDetails = () => {
  return (
    <>
      <div className=" space-y-2 ">
        <EmailItems
          icon={<FaMapMarkerAlt />}
          title="ADDRESS"
          text="No 40 Baria Sreet 133/2 NewYork City, NY, USD."
        />
        <EmailItems
          icon={<FaRegClock />}
          title="WORK HOURS"
          text="Mon. – Frie. 11AM – 19PM"
        />
        <EmailItems
          icon={<FaRegEnvelope />}
          title="E-MAIL"
          text="brandname@mail.com"
        />
        <EmailItems
          icon={<FaPhoneAlt />}
          title="TELEPHONE"
          text="(+371) 512 566 921"
        />
      </div>
    </>
  );
};

export default ContactDetails;