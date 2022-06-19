import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWarp,
  Logo,
  SocailIcon,
  SocialIconLink,
  Rights,
} from "./FooterElements";

import { FaLinkedinIn, FaGithubAlt, FaTwitter } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWarp>
          <Zoom top>
            <Logo to="/" onClick={toggleHome}>
              Shubham
            </Logo>
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
            <Rights>
              Copyright © {new Date().getFullYear()} - All Right Reserved.
            </Rights>
          </Zoom>
        </FooterWarp>
      </FooterContainer>
    </>
  );
};

export default Footer;
