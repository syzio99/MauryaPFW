import styled from "styled-components";
import Bg from "../../images/BlackBg5.jpg"

export const AboutContainer = styled.div`

  background-image: linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url(${Bg}) ;;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100% max-width 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  } 
   
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #fff;
  /* color: #f55422 !important; */
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  /* text-transform: uppercase; */
  /* margin-bottom: 16px; */
`;

export const Heading = styled.h1`
  color: #f55422 !important;
  margin-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;
  /* color: ${({ lightText }) => (lightText ? "#f9f9f9" : "#010606")}; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  color: #fff;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 24px;
  /* color: ${({ darkText }) => (darkText ? "#010606" : "#fff")}; */
  /* @media screen and (max-width: 480px) {
    font-size: 18px;
  } */
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;


export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ButtonLink = styled.a`
text-decoration: none;
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 64px;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 0px;
    /* margin-bottom: 10px; */
  }
`;