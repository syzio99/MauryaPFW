import React from "react";
import { Button } from "../ButtonElements";
// import {useNavigate} from 'react-router-dom';
import Fade from 'react-reveal/Slide';
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

      // const navigate = useNavigate();
      // const navigateHome = () => {
      //   // 👇️ navigate to /
      //   navigate('https://bobbyhadz.com/blog/react-onclick-redirect');
      // };


  return (
    <>
      <AboutContainer lightBg={lightBg}  id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
          
          <Column1>
              <Fade left big><TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText} >{headline}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
                <Subtitle2 darkText={darkText} >{description2}</Subtitle2>
                <BtnWrap>
                  <Button onClick={()=>window.open('https://drive.google.com/drive/folders/16aW-UlFcLonCofo1IJpnr_vbahaI1ChT?usp=sharing','_blank')} target='_blank'
                  smooth={true}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark = {dark ? 1 : 0}
                  >{ButtonLabel}</Button>
                </BtnWrap>
              </TextWrapper></Fade>
            </Column1>
          
         
            <Column2>
             
               <ImgWrap> <Fade right>
                <Img src={img} /> </Fade>
              </ImgWrap>
            </Column2>
           
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
