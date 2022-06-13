import React, { useState } from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";

import Footer from "../Components/Footer/Footer";

export default function NotFound404() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{setIsOpen(!isOpen)}

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_zyu0ctqb.json"  background="transparent"  speed="1"  style={{height:"100vh"}}  loop  autoplay></lottie-player>
      <Footer />
    </>
  );
}
