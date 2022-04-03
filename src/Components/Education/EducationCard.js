import React from "react";
import "./EducationCard.css";

const EducationCard = ({ title, detail }) => {
  return (
    <div className="education-card">
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "500",
          borderBottom: "1px solid grey",
        }}
      >
        {title}
      </p>
      <p>{detail}</p>
    </div>
  );
};

export default EducationCard;
