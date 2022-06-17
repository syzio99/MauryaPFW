import React from "react";
import { Emailer } from "./Emailer";
import Lottie from "react-lottie";
import animationData from "../../Lottie/contact.json";
import "./ContactStyle.css";

export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="contact" className="resumeContainer">
      <div className="container resumeWrapper">
        <div className="row ">
          <h1 class="text-center resumeHeading pb-5">Contact</h1>
        </div>
        <div className="row ">
          <div className="col-md-6 col-sm-12">
            <div className="contact-ani">
              <Lottie options={defaultOptions} />
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="contact-right">
            <h1 className="contact-tag ">
              Ready to get <span className="Orange-text">started?</span>
            </h1>
            <Emailer />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
