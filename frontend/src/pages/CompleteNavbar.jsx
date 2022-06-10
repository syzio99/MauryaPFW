import React, { useState } from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Home from '../Components/Home/Home'



export default function CompleteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{setIsOpen(!isOpen)}

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
    </>
  );
}
