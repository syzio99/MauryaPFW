import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea} from "semantic-ui-react";
import Swal from "sweetalert2";
import { Button } from "../ButtonElements";

import ContactImg from "../../images/contact.png"

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
  ImgWrap,
  Img
} from "./ResumeElements";

export default function Resume (){
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
          e.target.reset();}

  return (
    <>
    <AboutContainer id="resume" >
      <AboutWrapper>
        <AboutRow >
          <Column1>
            <ImgWrap>
            <TopLine>Let's talk about</TopLine>
              <Heading l >everything!</Heading>
              <Subtitle >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit maiores quo, omnis doloremque blanditiis, recusandae iusto culpa fugiat hic facere enim quas! Sed vero nostrum nemo aspernatur. Eos, in debitis?</Subtitle>
              <Img src={ContactImg} />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <Form onSubmit={handleOnSubmit}>
                <Form.Field
                  id='form-input-control-email'
                  control={Input}
                  label='Email'
                  name='user_email'
                  placeholder='Email…'
                  required
                  icon='mail'
                  iconPosition='left'
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Name'
                  name='user_name'
                  placeholder='Name…'
                  required
                  icon='user circle'
                  iconPosition='left'
                />
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Message'
                  name='user_message'
                  placeholder='Message…'
                  required
                />
                <BtnWrap>
                  <Button onClick={""} target='_blank'
                  smooth={true}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={true ? 1 : 0}
                  dark = {true ? 1 : 0}
                  >Send</Button> 
                </BtnWrap>
              </Form>
            </TextWrapper>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  </>);
};


