import React from "react";
// import { NavLink } from 'react-router-dom'
import {
  Nav,
  NavbarConatiner,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

// npm install react-icons --save

export default function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <NavbarConatiner>
          <NavLogo to="/"><span style={{ color: "#f55422" }}>Shu</span><span style={{color: "#fff"}}>bham</span></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Resume">Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Service">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarConatiner>
      </Nav>
    </> 
  );
}
