import React from "react";
import { useState } from "react";
import WorkEducation from "./WorkEducation";
import MySkills from "./MySkills";
import Portfolios from "./Portfolios";
import "./ResumeElements.css";

export default function Resume() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (buttonNumber) => {
    setToggleState(buttonNumber);
  };

  return (
    <section id="resume" className="resumeContainer">
      <div className="container resumeWrapper">
        <h1 class="text-center pb-5">Resume</h1>
        <div className="row ">
          <div className="col-md-12">
            <ul className="nav nav-pills mb-3  " id="myTab" role="tablist">
              <li className="nav-item  mr-3" role="presentation">
                <button
                  className={
                    toggleState === 1 ? "nav-link active " : "nav-link"
                  }
                  onClick={() => toggleTab(1)}
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Work & Eduction
                </button>
              </li>
              <li className="nav-item  mr-3" role="presentation">
                <button
                  className={toggleState === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => toggleTab(2)}
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  My Skills
                </button>
              </li>
              <li className="nav-item  mr-3" role="presentation">
                <button
                  className={toggleState === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => toggleTab(3)}
                  id="messages-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#messages"
                  type="button"
                  role="tab"
                  aria-controls="messages"
                  aria-selected="false"
                >
                  Recent Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-12">
            <div className="tab-content">
              <div
                className={toggleState === 1 ? "tab-pane active" : "tab-pane"}
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <WorkEducation />
              </div>
              <div
                className={toggleState === 2 ? "tab-pane active" : "tab-pane"}
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <MySkills />
              </div>
              <div
                className={
                  toggleState === 3
                    ? "tab-pane active container"
                    : "tab-pane container"
                }
                id="messages"
                role="tabpanel"
                aria-labelledby="messages-tab"
              >
                <Portfolios />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
