import React from "react";
import Python from "../../images/python.png";
import Java from "../../images/java.png";
import Ruby from "../../images/ruby.png";
import HTML from "../../images/html-5.png";
import CSS from "../../images/css.png";
import JS from "../../images/js.png";
import ReactLogo from "../../images/react.png";
import Bootstrap from "../../images/bootstrap.png";
import Material from "../../images/material.png";
import NodeLogo from "../../images/nodejs.png";
import MongoDB from "../../images/mongodb.png";
import Django from "../../images/django.png";
import SQL from "../../images/sql.png";

export default function MySkills () {

    return (
      <div>
        {" "}
        <div class="skill-container ">
          <h1 className="skills-section-heading">Technologies</h1>
          <div className="row justify-content-center">
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={Python}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">Python</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={Java}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title skills-card-title">Java</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={Ruby}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">Ruby</p>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-container ">
          <h1 className="skills-section-heading">Frontend</h1>
          <div className="row justify-content-center">
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={HTML}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">HTML</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={CSS}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title skills-card-title">CSS</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img src={JS} alt="" className="card-image skills-card-image" />
                <p className="card-title  skills-card-title">JavaScript</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={ReactLogo}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">React JS</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={Bootstrap}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">Bootstrap</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={Material}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">Material-UI</p>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-container ">
          <h1 className="skills-section-heading">Backend</h1>
          <div className="row justify-content-center">
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={NodeLogo}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">Node JS</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={Django}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title skills-card-title">Django</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={MongoDB}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">MongoDB</p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="card skills-card">
                <img
                  src={SQL}
                  alt=""
                  className="card-image skills-card-image"
                />
                <p className="card-title  skills-card-title">SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



