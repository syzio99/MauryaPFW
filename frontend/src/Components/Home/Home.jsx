import React, { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import {
  HomeContainer,
  HomeBG,
  VideoBG,
  HomeContent,
  HomeP,
  HomeH1,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
  SocailIcon,
  SocialIconLink,
} from "./HomeElements";
import HomeVideo from "./assets/HomeVideo2.mp4";
import { Button } from "../ButtonElements";
import {FaLinkedinIn,FaGithubAlt,FaTwitter } from "react-icons/fa"  



export default function Home() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer id="home">
      <HomeBG>
        <VideoBG autoPlay loop muted src={HomeVideo} type="video/mp4" />
      </HomeBG>
      <HomeContent>
        <HomeP>HI THERE 👋, I'M </HomeP>
        <HomeH1>Shubham Maurya</HomeH1>
        <HomeH1>
          <TypeWriterEffect
            textStyle={{
              color: "#f55422",
              fontWeight: "bold",
            }}
            startDelay={1000}
            cursorColor="#f55422"
            multiText={[
              "Software Developer ",
              "Front End Developer ",
              "Full Stack Developer ",
              "MERN Stack Developer ",
            ]}
            multiTextDelay={1000}
            typeSpeed={60}
            multiTextLoop
          />
        </HomeH1>
        <SocailIcon>
          <SocialIconLink
            href="https://www.linkedin.com/in/syzio99/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com/syzio99"
            target="_blank"
            aria-label="github"
          >
            <FaGithubAlt />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com/"
            target="_blank"
            aria-label="twitter"
          >
            <FaTwitter />
          </SocialIconLink>
        </SocailIcon>

        <HomeBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            See More About me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
        
      </HomeContent>
    </HomeContainer>
  );
}

