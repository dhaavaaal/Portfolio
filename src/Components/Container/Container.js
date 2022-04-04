import React from "react";
import Home from "../Home/Home";
import AboutMe from "../About Me/AboutMe";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import ContactMe from "../Contact Me/ContactMe";
import Testimonials from "../Testimonials/Testimonials";

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
