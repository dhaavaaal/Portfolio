import React from "react";
import "./Education.css";
import EducationCard from "./EducationCard";

const Education = () => {
  const educationData = [
    {
      title: "Coding",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 1,
    },
    {
      title: "Quality Assurance",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 2,
    },
    {
      title: "Customer Review",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 3,
    },
    {
      title: "Customer Review",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 4,
    },
    {
      title: "Customer Review",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 5,
    },
  ];
  return (
    <div>
      <section
        id="services"
        className="abcd"
        style={{
          height: "65vh",
          backgroundColor: "#0C0E27",
          color: "white",
          padding: "3rem",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center aaa">
              <div>
                <h2>Education</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
          </div>
          <div className="row">
            {educationData.map((item) => (
              <div className="col-lg-4 col-sm-6" style={{ textAlign: "left" }}>
                <EducationCard
                  key={item.id}
                  title={item.title}
                  detail={item.detail}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
