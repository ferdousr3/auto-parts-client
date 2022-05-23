import React from "react";

const Blog = ({ question, answer }) => {
  return (
    <>
      <div className="max-w-3xl mx-auto sm:border py-7 sm:px-6 mb-7 rounded-sm">
        <h1 className="text-xl font-medium">
          <span className="text-2xl font-semibold text-secondary">Q: </span>
          {question}
        </h1>
        <p className="pt-4 text-neutral text-base">
          <span className="text-xl font-semibold text-info">A: </span>
          {answer}
        </p>
      </div>
    </>
  );
};

export default Blog;
