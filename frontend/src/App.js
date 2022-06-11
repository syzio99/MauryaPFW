import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// install router -> npm i react-router-dom
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
