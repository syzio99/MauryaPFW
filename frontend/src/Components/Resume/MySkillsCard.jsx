import React from "react";
import Flip from "react-reveal/Flip";

export default function MySkillsCard({
  CardImage,
  CardTitle
}) {
  return (
    <Flip left>
      <div className="card skills-card">
        <img src={CardImage} alt="" className="card-image skills-card-image" />
        <p className="card-title  skills-card-title"> {CardTitle}</p>
      </div>
    </Flip>
  );
}
