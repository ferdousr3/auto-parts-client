import React from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <>
      <PageTitle title="Blogs" />
      <div className="container mx-auto py-10 md:py-32 shadow">
        <Blog
          question="How will you improve the performance of a React Application?"
          answer="Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance."
        />
        <Blog
          question="How will you improve the performance of a React Application?"
          answer="Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance."
        />
        <Blog
          question="How will you improve the performance of a React Application?"
          answer="Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance."
        />
      </div>
    </>
  );
};

export default Blogs;
