import React from "react";
import MySkillsCard from "./MySkillsCard";
import {
  PythonCard,
  JavaCard,
  RubyCard,
  HtmlCard,
  CSSCard,
  JSCard,
  ReactLogoCard,
  BootstrapCard,
  MaterialCard,
  NodeLogoCard,
  DjangoCard,
  MongoDBCard,
  SQLCard,
} from "./MySkillsCardData";

export default function MySkills() {
  return (
    <div>
      {" "}
      <div className="skill-container ">
        <h1 className="skills-section-heading">Technologies</h1>
        <div className="row justify-content-center">
          <div className="col-md-2 col-4">
            <MySkillsCard {...PythonCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...JavaCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...RubyCard} />
          </div>
        </div>
      </div>
      <div className="skill-container ">
        <h1 className="skills-section-heading">Frontend</h1>
        <div className="row justify-content-center">
          <div className="col-md-2 col-4">
            <MySkillsCard {...HtmlCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...CSSCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...JSCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...ReactLogoCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...BootstrapCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...MaterialCard} />
          </div>
        </div>
      </div>
      <div className="skill-container ">
        <h1 className="skills-section-heading">Backend</h1>
        <div className="row justify-content-center">
          <div className="col-md-2 col-4">
            <MySkillsCard {...NodeLogoCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...DjangoCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...MongoDBCard} />
          </div>
          <div className="col-md-2 col-4">
            <MySkillsCard {...SQLCard} />
          </div>
        </div>
      </div>
    </div>
  );
}
