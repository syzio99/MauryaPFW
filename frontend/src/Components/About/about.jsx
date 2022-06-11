import React from "react";
import { Button } from "../ButtonElements";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Subtitle2,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from "./aboutElements";

const About = ({id,
    lightBg,
    lightText,
    lightTextDesc,
    topline,
    headline,
    description,
    description2,
    ButtonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    darkText}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg}  id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText} >{headline}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
                <Subtitle2 darkText={darkText} >{description2}</Subtitle2>
                <BtnWrap>
                  <Button to="about" 
                  smooth={true}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark = {dark ? 1 : 0}
                  >{ButtonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
