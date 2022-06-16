import React from "react";
import { useState } from "react";
import "./ResumeElements.css";
import Icon1 from "../../images/Icon1.png";
import { Button } from "../ButtonElements";

import {FaLinkedinIn,FaGithubAlt,FaTwitter } from "react-icons/fa"  

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
                <ul className="timeline">
                  <li className="timeline-item mb-5">
                    <h5 className="fw-bold">
                      Our company starts its operations
                    </h5>
                    <small className=" bg-base-color mb-2 fw-bold">
                      11 March 2020
                    </small>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit necessitatibus adipisci, ad alias, voluptate pariatur
                      officia repellendus repellat inventore fugit perferendis
                      totam dolor voluptas et corrupti distinctio maxime
                      corporis optio?
                    </p>
                  </li>

                  <li className="timeline-item mb-5">
                    <h5 className="fw-bold">First customer</h5>
                    <small className=" bg-base-color mb-2 fw-bold">
                      19 March 2020
                    </small>
                    <p className="">
                      Quisque ornare dui nibh, sagittis egestas nisi luctus nec.
                      Sed aliquet laoreet sapien, eget pulvinar lectus maximus
                      vel. Phasellus suscipit porta mattis.
                    </p>
                  </li>

                  <li className="timeline-item mb-5">
                    <h5 className="fw-bold">Our team exceeds 10 people</h5>
                    <small className=" bg-base-color mb-2 fw-bold">
                      24 June 2020
                    </small>
                    <p className="">
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nulla ullamcorper arcu
                      lacus, maximus facilisis erat pellentesque nec. Duis et
                      dui maximus dui aliquam convallis. Quisque consectetur
                      purus erat, et ullamcorper sapien tincidunt vitae.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className={toggleState === 2 ? "tab-pane active" : "tab-pane"}
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ul className="timeline">
                  <li className="timeline-item mb-5">
                    <h5 className="fw-bold">
                      Our company starts its operations
                    </h5>
                    <small className=" bg-base-color  mb-2 fw-bold">
                      11 March 2020
                    </small>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit necessitatibus adipisci, ad alias, voluptate pariatur
                      officia repellendus repellat inventore fugit perferendis
                      totam dolor voluptas et corrupti distinctio maxime
                      corporis optio?
                    </p>
                  </li>

                  <li className="timeline-item mb-5">
                    <h5 className="fw-bold">First customer</h5>
                    <small className="bg-base-color mb-2 fw-bold">
                      19 March 2020
                    </small>
                    <p className="">
                      Quisque ornare dui nibh, sagittis egestas nisi luctus nec.
                      Sed aliquet laoreet sapien, eget pulvinar lectus maximus
                      vel. Phasellus suscipit porta mattis.
                    </p>
                  </li>

                  <li className="timeline-item mb-5">
                    <h5 className="fw-bold">Our team exceeds 10 people</h5>
                    <small className="bg-base-color mb-2 fw-bold">
                      24 June 2020
                    </small>
                    <p className="">
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nulla ullamcorper arcu
                      lacus, maximus facilisis erat pellentesque nec. Duis et
                      dui maximus dui aliquam convallis. Quisque consectetur
                      purus erat, et ullamcorper sapien tincidunt vitae.
                    </p>
                  </li>
                </ul>
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
                <div>
                  <div className="row text-center">
                  <div className="col-md m-2 services services-down">
                      <div className="card  border-0 bg-gradient bg-light">
                        <img
                          src={Icon1}
                          class="card-img services-images"
                          // style={{ width: "18rem" }}
                          alt="..."
                        />
                        <div class="card-img-overlay">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <a href="/" className="SocialIconLink"><FaGithubAlt /></a>
                          
                        </div>
                      </div>
                    </div>

                    <div className="col-md m-2 services services-down">
                      <div className="card  border-0 bg-gradient bg-light">
                        <img
                          src={Icon1}
                          class="card-img services-images"
                          // style={{ width: "18rem" }}
                          alt="..."
                        />
                        <div class="card-img-overlay">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <a href="/" className="SocialIconLink"><FaGithubAlt /></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md m-2 services services-down">
                      <div className="card  border-0 bg-gradient bg-light">
                        <img
                          src={Icon1}
                          class="card-img services-images"
                          // style={{ width: "18rem" }}
                          alt="..."
                        />
                        <div class="card-img-overlay">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <a href="/" className="SocialIconLink"><FaGithubAlt /></a>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row  portfolio-button-wrapper">
                    {/* <div className="col-md"> */}
                    <Button
                      onClick={() =>
                        window.open("https://github.com/syzio99", "_blank")
                      }
                      target="_blank"
                      smooth={true}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={true ? 1 : 0}
                      // dark= {true ? 1 : 0}
                      big={true}
                    >
                      See More Protfolio{" "}
                    </Button>
                    {/* </div> */}
                  </div>
                  {/* <a classNam="custom-btn justify-content-center" href="/" > bsb</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
