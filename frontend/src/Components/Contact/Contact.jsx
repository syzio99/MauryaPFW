import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../Lottie/contact.json";
import Bounce from "react-reveal/Bounce";
import emailjs from "emailjs-com";

import "./ContactStyle.css";
import "./EmailerElements.css";

export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const SERVICE_ID = "your service id ";
  const TEMPLATE_ID = "your template id";
  const USER_ID = "your user id";

  const [show, setShow] = useState(true);
  var errorOccured = false;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        setShow(false);
      },
      (error) => {
        errorOccured = true;
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="contactContainer">
      <div className="container contactWrapper">
        <div className="row ">
          <h1 className="text-center contactHeading pb-5">Contact</h1>
        </div>
        <div className="row ">
          <div className="col-md-6 col-sm-12">
            <div className="contact-ani">
              <Bounce left>
                <Lottie options={defaultOptions} />{" "}
              </Bounce>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <Bounce right>
              <div className="contact-right">
                <h1 className="contact-tag ">
                  Ready to get <span className="Orange-text">started?</span>
                </h1>
                {show ? (
                  errorOccured ? (
                    <h3>❌ Something Went Wrong</h3>
                  ) : null
                ) : (
                  <h3>✔️ Your Message sent successfully</h3>
                )}
                <form id="my-form" onSubmit={sendEmail}>
                  <input
                    required
                    className="form-control mb-3 transparent-input"
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                  />
                  <input
                    required
                    className="form-control  mb-3 transparent-input"
                    aria-describedby="emailHelp"
                    type="email"
                    name="user_email"
                    placeholder="Email "
                  />
                  <input
                    required
                    className="form-control  mb-3 transparent-input"
                    ype="text"
                    name="email_subject"
                    placeholder="Subject"
                  />
                  <textarea
                    required
                    className="form-control  mb-3 transparent-input"
                    name="message"
                    placeholder="Message"
                    rows="5"
                  />
                  <input
                    type="submit"
                    value="Send Message"
                    className="custom-btn"
                  />
                </form>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
}
