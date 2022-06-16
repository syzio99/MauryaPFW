import React from "react";
import emailjs from "emailjs-com";
// import { Button } from "../ButtonElements";
import "./EmailerElements.css";
export const Emailer = () => {
  const SERVICE_ID = "service_y6omtr4";
  const TEMPLATE_ID = "template_8rwt51k";
  const USER_ID = "X0d9S5bYjhtFgl2Z4";

  var success = false;
  function checkSucces() {
    if (success === true) {
      return( alert("your message send successfully "));
    } else {
      return (
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
          <input type="submit" value="Send Message" className="custom-btn" />
        </form>
      );
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        success = true;
        checkSucces();
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return checkSucces();
};
