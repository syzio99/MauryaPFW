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
            <SidebarLinks to="about" onClick={toggle} >About</SidebarLinks>
            <SidebarLinks to="Resume" onClick={toggle} >Resume</SidebarLinks>
            <SidebarLinks to="Service" onClick={toggle} >Services</SidebarLinks>
            <SidebarLinks to="Contact" onClick={toggle} >Contact</SidebarLinks>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
