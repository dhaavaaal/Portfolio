import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projectsData = [
    {
      projectname: "Coding",
      year: "2002-2006",
      technology: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 1,
    },
    {
      projectname: "Coding",
      year: "2002-2006",
      technology: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 2,
    },
    {
      projectname: "Coding",
      year: "2002-2006",
      technology: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 3,
    },
    {
      projectname: "Coding",
      year: "2002",
      technology: "Adobe Inc.",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      id: 4,
    },
  ];
  return (
    <div
      id="experience"
      style={{
        backgroundColor: "#0c0e27",
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
              <h2>Projects</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </p>
          </div>
        </div>
        <div className="row">
          {projectsData.map((item) => (
            <div className="col-sm-6">
              <ProjectsCard
                key={item.id}
                projectname={item.projectname}
                detail={item.detail}
                technology={item.technology}
                year={item.year}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
