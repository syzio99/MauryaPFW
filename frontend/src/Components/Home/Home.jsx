import React,{useState} from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { HomeContainer, HomeBG, VideoBG,HomeContent,HomeP,HomeH1,HomeBtnWrapper,ArrowForward,ArrowRight } from "./HomeElements";
import HomeVideo from "./assets/HomeVideo2.mp4";

export default function Home() {
  const [hover,setHover] = useState(false)

  const onhover = ()=> {setHover(!hover)}

  return (
    <HomeContainer>
      <HomeBG>
        <VideoBG autoPlay loop muted src={HomeVideo} type="video/mp4" />
      </HomeBG>
      <HomeContent>
        <HomeP>HI THERE, I'M </HomeP>
        <HomeH1>
          Shubham Maurya
          <TypeWriterEffect
            textStyle={{
              color: "#f55422",
            }}
            startDelay={1000}
            cursorColor="#f55422"
            multiText={[
              "Software Developer",
              "Front End Developer",
              "Full Stack Developer",
              "MERN Stack Developer",
            ]}
            multiTextDelay={1000}
            typeSpeed={60}
            multiTextLoop
          />
        </HomeH1>
        <HomeBtnWrapper>
          <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
            See More About me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
}


     {/* <div className="home-social-icon">
        <a href="/">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="/">
          <i className="bi bi-twitter"></i>
        </a>
      </div> */}
        {/* <div className="home-buttons">
        <button className="btn btn-primary"> See More About me -> </button>
        <button className="btn btn-primary"> Resume</button>
      </div> */}