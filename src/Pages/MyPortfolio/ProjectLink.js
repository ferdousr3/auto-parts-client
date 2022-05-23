import React from "react";

const ProjectLink = ({ title, technology, description, link, name }) => {
  return (
    <>
      <div className="py-6 px-6  mb-6 rounded-md shadow border">
        <h1 className="text-lg text-accent text-semibold">Name: {title}</h1>
        <h2 className="text-sm text-accent pb-2 pt-2">
          <span className="font-bold">Technology: </span> {technology}
        </h2>
        <p className="text-sm">
          <span className="font-bold">Description:</span> {description}
        </p>
        <p className="flex items-center pt-4 ">
          <span className=" font-bold">live Link:</span>
          <a
            className="text-primary cursor-pointer ml-4 block"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </p>
      </div>
    </>
  );
};

export default ProjectLink;
