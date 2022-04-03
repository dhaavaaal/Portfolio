import React from "react";

const ProjectsCard = (props) => {
  return (
    <div className="experience-card">
      <h4>{props.projectname}</h4>
      <p
        style={{
          paddingBottom: "1rem",
          borderBottom: "1px solid grey",
        }}
      >
        <span
          className="text_default"
          style={{
            color: "#24E175",
          }}
        >
          {props.year}
        </span>{" "}
        {props.technology}
      </p>
      <p>{props.detail}</p>
    </div>
  );
};

export default ProjectsCard;
