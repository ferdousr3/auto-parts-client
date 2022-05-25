import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUserAlt, FaStarHalfAlt } from "react-icons/fa";
import { BsTags, BsAward } from "react-icons/bs";

const BusinessSummary = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="div">
          <SectionTitle
            title="Our Achievement"
            subTitle="We have some happy Client & best awards"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto lg:border rounded-sm ">
          <div className="stat place-items-center lg:border-r">
            <div className="text-4xl mb-2 text-primary hover:text-secondary">
              <FaUserAlt />
            </div>
            <div className="stat-title text-accent font-medium">
              Happy Client
            </div>
            <div className="stat-value text-accent py-1">23,400</div>
            <div className="stat-desc"> ↗︎ 400 (22%)</div>
          </div>
          <div className="stat place-items-center lg:border-r">
            <div className="text-4xl mb-2 text-primary hover:text-secondary">
              <FaStarHalfAlt />
            </div>
            <div className="stat-title text-accent font-medium ">Rating</div>
            <div className="stat-value text-accent py-1">10,400</div>
            <div className="stat-desc"> ↗︎ 4.9(star)</div>
          </div>
          <div className="stat place-items-center lg:border-r">
            <div className="text-4xl mb-2 text-primary hover:text-secondary">
              <BsTags />
            </div>
            <div className="stat-title text-accent font-medium ">Brand</div>
            <div className="stat-value text-accent py-1">6</div>
            <div className="stat-desc">
              We sell 6 brand cars parts, including (BMW)
            </div>
          </div>
          <div className="stat place-items-center ">
            <div className="text-4xl mb-2 text-primary hover:text-secondary">
              <BsAward />
            </div>
            <div className="stat-title text-accent font-medium ">Award's</div>
            <div className="stat-value text-accent py-1">10</div>
            <div className="stat-desc text-accent">
              we Achieve best seller award's{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSummary;
