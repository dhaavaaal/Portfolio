import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experienceData = [
    {
      designation: "Coding",
      year: "2002-2006",
      company: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 1,
    },
    {
      designation: "Coding",
      year: "2002-2006",
      company: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 2,
    },
    {
      designation: "Coding",
      year: "2002-2006",
      company: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 3,
    },
    {
      designation: "Coding",
      year: "2002-2006",
      company: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 4,
    },
  ];
  return (
    <div
      id="experience"
      style={{
        backgroundColor: "#121833",
        color: "white",
        padding: "3rem",
      }}
    >
      <div className="container text-center">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div>
              <h2>Experience</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </p>
          </div>
        </div>
        <div className="row">
          {experienceData.map((item) => (
            <div className="col-sm-6">
              <ExperienceCard
                key={item.id}
                designation={item.designation}
                detail={item.detail}
                company={item.company}
                year={item.year}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
