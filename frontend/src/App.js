import React from "react";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router} from 'react-router-dom';
import CompleteNavbar from "./pages/CompleteNavbar";
import About from "./Components/About/about"
import {homeObjOne,homeObjTwo,homeObjThree} from "./Components/About/Data"
// install router -> npm i react-router-dom


const App = () => {
  return (
 
        <Router>
        <CompleteNavbar />
        <Home />
        <About {...homeObjOne}/>
        {/* <About {...homeObjTwo}/> */}
        {/* <About {...homeObjThree}/> */}
        </Router>
    
  );
};

export default App;
