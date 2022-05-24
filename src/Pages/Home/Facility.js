import React from "react";
import FacilityItem from "./FacilityItem";
import Shipping from "../../assets/images/icon/shipping.png";
import Payment from "../../assets/images/icon/payment.png";
import Return from "../../assets/images/icon/return.png";
import Support from "../../assets/images/icon/support.png";

const Facility = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-clos-3 xl:grid-cols-4 gap-5">
          <FacilityItem
            title="Free Shipping"
            icon={Shipping}
            description="Free worldwide Shipping on all area on order above $100. "
          />
          <FacilityItem
            title="Payment secure"
            icon={Payment}
            description="We ensure 100% secure payment with Online Payment."
          />
          <FacilityItem
            title="7 Days easy return"
            icon={Return}
            description="Product any fault within 07 days for an immediately exchange. "
          />
          <FacilityItem
            title="24/7 friendly support"
            icon={Support}
            description="Our support team always ready for you to 7 days a week. "
          />
        </div>
      </div>
    </>
  );
};

export default Facility;
