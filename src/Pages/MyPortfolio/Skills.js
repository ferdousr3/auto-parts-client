import React from 'react';

const Skills = () => {
  return (
    <>
      <div className="skills pb-10 ">
        <h2 className="pb-4 text-secondary">My Programming Skills Included</h2>
        <div className="flex space-x-5 text-accent font-medium">
          <ol>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>JavaScript</p>
            </li>
          </ol>
          <ol>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
            <li>
              <p>Rest API</p>
            </li>
          </ol>
          <ol>
            <li>
              <p>NodeJs</p>
            </li>
            <li>
              <p>Express</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Skills;