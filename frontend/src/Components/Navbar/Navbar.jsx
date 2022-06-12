import React, { useState, useEffect } from "react";
// import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarConatiner,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

// npm install react-icons --save

export default function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarConatiner>
          <NavLogo to="/" onClick={toggleHome}>
            <span style={{ color: "#f55422" }}>Shu</span>
            <span style={{ color: "#fff" }}>bham</span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="resume"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Resume
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarConatiner>
      </Nav>
    </>
  );
}
