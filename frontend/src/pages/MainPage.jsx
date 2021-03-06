import React, { useState } from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Home from '../Components/Home/Home'
import About from "../Components/About/about";
import { homeObjOne } from "../Components/About/Data";
import Services from "../Components/Services/Services"
import Resume from "../Components/Resume/Resume";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{setIsOpen(!isOpen)}

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Home />
      <About {...homeObjOne} />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
