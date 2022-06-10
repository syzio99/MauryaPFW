import React from "react";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router} from 'react-router-dom';
import CompleteNavbar from "./pages/CompleteNavbar";

// install router -> npm i react-router-dom


const App = () => {
  return (
    <dev>
        <Router>
        <CompleteNavbar />
        <Home />
        </Router>
        
    </dev>
  );
};

export default App;
