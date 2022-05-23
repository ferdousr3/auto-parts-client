import React from 'react';

const Education = ({degree, varsityName,description}) => {
  return (
    <>
      <div className="border py-6 px-6 bg-success mb-6 rounded-md">
        <h1 className="text-lg text-accent text-semibold">{degree}</h1>
        <h2 className="text-sm text-accent pb-2 pt-2">{varsityName}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};

export default Education;