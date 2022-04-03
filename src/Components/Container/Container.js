import React from "react";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About Me/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import ContactMe from "./Components/Contact Me/ContactMe";
import Testimonials from "./Components/Testimonials/Testimonials";

const Container = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Testimonials />
      <ContactMe />
    </>
  );
};

export default Container;
