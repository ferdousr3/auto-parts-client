import React from "react";
import PageTitle from "../../components/Share/PageTitle/PageTitle";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <>
      <PageTitle title="Blogs" />
      <div className="container mx-auto py-10 md:py-32 ">
        <Blog
          question="How will you improve the performance of a React Application?"
          answer="1. Utilizing Immutable Data StructuresInformation unchanging nature isn't an engineering or configuration design, it's a stubborn approach to composing code. 2. Work/Stateless Components and React.PureComponentIn React, work parts and PureComponent give two distinct approaches to upgrading React applications at the part level.Work parts forestall building class occasions while lessening the general pack size as it minifies better compared to classes.3. Various Chunk FilesYour application generally starts with a couple of parts. You begin adding new elements and conditions, and in practically no time, you end up with a tremendous creation record."
        />
        <Blog
          question="What are the different ways to manage a state in a React application?"
          answer="Setting Initial State in a Component In this movement, you'll set the fundamental state on a section by giving out the basic state to a custom variable using the useState Hook. To research Hooks, you'll make a thing page with a shopping bin, then, at that point, show the hidden characteristics considering the state. Close to the completion of the movement, you'll know the different approaches to holding a state regard using Hooks and when to use state rather than a prop or a static worth.There are four principal kinds of state you need to manage in your React applications properly:Close by state, Overall state,Server state,URL stat"
        />
        <Blog
          question="How does prototypical inheritance work?"
          answer="In programming, we as often as possible need to take something and widen it.For instance, we have a client object with its properties and strategies, and need to make executive and guest as fairly changed varieties of it. We should reuse what we have in client, not copy/reimplement its strategies, just create one more article on top of it. With respect to heritage, JavaScript simply has one form: objects. Every thing has a secret property which holds an association with another thing called its model. That model thing has its own personal model, and so on until an article is reached with invalid as its model. By definition, invalid has no model, and goes probably as the last association in this model chain."
        />
        <Blog
          question="You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?"
          answer="Search and sifting are extremely fundamental elements that an API should have to productively serve information to the client application. By dealing with these procedure on the server-side, we can decrease how much handling that must be done on the client application, consequently expanding its exhibition.
          A very famous approach to carrying out this is with the assistance of question strings. A question string is a piece of the URL which permits us to pass information from client to server as well as the other way around as boundaries and their qualities.Adding Mock Data: For doing looking and separating, we really want a few false information for example a rundown of clients whereupon we can do these tasks."
        />
        <Blog
          question="What is a unit test? Why should write unit tests?"
          answer="Unit testing, a testing method utilizing which individual modules are tried to decide whether there are any issues by the engineer himself. It is worried about utilitarian rightness of the independent modules.
          The principal point is to confine every unit of the framework to distinguish, examine and fix the deformities.
          Unit Testing - Advantages:
          Diminishes Defects in the Newly evolved includes or decreases bugs while changing the current usefulness.
          Decreases Cost of Testing as imperfections are caught in beginning stage.
          Further develops plan and permits better refactoring of code.
          Unit Tests, when coordinated with fabricate gives the nature of the form too.
          Any bugs are found effectively and faster."
        />
      </div>
    </>
  );
};

export default Blogs;
