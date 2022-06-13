import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// install router -> npm i react-router-dom
import MainPage from "./pages/MainPage";
import NotFound404 from "./pages/NotFound404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default App;
