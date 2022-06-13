// import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ContactH1,
  ImgWrap,
  Img,
} from "./ContactElements";
import { Emailer } from "./Emailer";

export default function Contact() {
  const SERVICE_ID = "service_y6omtr4";
  const TEMPLATE_ID = "template_8rwt51k";
  const USER_ID = "X0d9S5bYjhtFgl2Z4";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <>
      <AboutContainer id="contact">
        <AboutWrapper>
        <ContactH1>Contact Me</ContactH1>
          <AboutRow>
            <Column1>
              <TopLine>Let's talk about</TopLine>
              <Heading l>everything! </Heading>

              <Subtitle>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                maiores quo, omnis doloremque blanditiis, recusandae iusto culpa
                fugiat hic facere enim quas! Sed vero nostrum nemo aspernatur.
                Eos, in debitis?
              </Subtitle>
                {/* <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_uwos7l6e.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player> */}
              {/* <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_9z4bwat5.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                controls
                autoplay
              ></lottie-player> */}
            </Column1>
            <Column2>
              <TextWrapper>
                <Emailer />
              </TextWrapper>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}
