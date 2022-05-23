import React from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import Education from "./Education";
import MyInformation from "./MyInformation";
import ProjectLink from "./ProjectLink";
import Skills from "./Skills";

const MyPortfolio = () => {
  return (
    <>
      <PageTitle title="My Profile" />
      <div className="container mx-auto max-w-6xl py-10 lg:py-32">
        <p className="text-accent lg:pr-80">
          I enjoy the Process of turning ideas into realities using Creative
          solutions. I Always curious about learning new skills, tools and
          concepts. In additional to working on various solo full stack Project
        </p>
        {/* personal information */}
        <MyInformation />
        {/* educational background */}

        {/* my skills */}
        <Skills />

        <div className=" mx-auto">
          <h1 className="pb-4 text-secondary">Educational Background</h1>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-2 gap-5 mx-auto">
            <Education
              degree="BBA(Accounting)"
              varsityName="National University"
              description="I Completed my BBA(Accounting) Degree from the National University, Bangladesh."
            />
            <Education
              degree="MBA(Accounting)"
              varsityName="National University"
              description="I Completed my BBA(Accounting) Degree from the National University, Bangladesh."
            />
          </div>
        </div>
        <div className=" mx-auto pt-6">
          {/* projects */}
          <h1 className="pb-4 text-secondary">Project & Live Link</h1>
          <div className="grid grid-cols-1 md-grid-cols-6 lg:grid-cols-2 gap-5 ">
            <ProjectLink
              title="X-fit Gym"
              technology="React, firebase"
              description="A health club is a place that houses exercise equipment for the purpose of physical exercise. I provide some gym services for very low price,I have some excellent packages."
              link="https://x-fit-full.web.app/"
              name="x-fit"
            />
            <ProjectLink
              title="X-fit Gym"
              technology="React, firebase"
              description="A health club is a place that houses exercise equipment for the purpose of physical exercise. I provide some gym services for very low price,I have some excellent packages."
              link="https://x-fit-full.web.app/"
              name="x-fit"
            />
            <ProjectLink
              title="X-fit Gym"
              technology="React, firebase"
              description="A health club is a place that houses exercise equipment for the purpose of physical exercise. I provide some gym services for very low price,I have some excellent packages."
              link="https://x-fit-full.web.app/"
              name="x-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
