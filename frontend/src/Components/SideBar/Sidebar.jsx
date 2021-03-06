import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from "./sidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLinks to="home" onClick={toggle}>
              Home
            </SidebarLinks>
            <SidebarLinks to="about" onClick={toggle}>
              About
            </SidebarLinks>
            <SidebarLinks to="services" onClick={toggle}>
              Services
            </SidebarLinks>
            <SidebarLinks to="resume" onClick={toggle}>
              Resume
            </SidebarLinks>
            <SidebarLinks to="contact" onClick={toggle}>
              Contact
            </SidebarLinks>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
