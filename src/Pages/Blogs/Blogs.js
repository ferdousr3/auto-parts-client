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
          answer="javascript object methods and properties contain an internal and hidden property known as Prototype. The Prototypal Inheritance is a powerful feature in javascript used to add methods and properties to objects.JavaScript allowed for 'prototypal inheritance' after ES6 updates. by this method objects can be shared, extended, and copied an object can inherit the properties and methods of another object. and for this method easy inheritance of structure (data fields), behavior, and state (data values)."
        />
        <Blog
          question="Why you do not set the state directly in React?"
          answer="When we directly update the state, it does not change immediately it can not store data. we can not control the state across all components. any states are a data store that contains the data of a component and renders it. When the data needs to change something on the render, that value should be supplied from the store or state. Whenever the data in the state changes, react will trigger a re-render with the new state which the view consumes and shows on the screen, for this reason, it is faster and it happens with virtual DOM."
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
