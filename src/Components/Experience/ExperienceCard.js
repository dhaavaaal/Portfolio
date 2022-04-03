import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <div className="experience-card">
      <h4>{props.designation}</h4>
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
        {props.company}
      </p>
      <p>{props.detail}</p>
    </div>
  );
};

export default ExperienceCard;
