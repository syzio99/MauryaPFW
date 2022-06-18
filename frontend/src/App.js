import React, {useState, useEffect} from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// install router -> npm i react-router-dom
import MainPage from "./pages/MainPage";
import NotFound404 from "./pages/NotFound404";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])

  return (
    loading ? 
     <CircleLoader
 
      size={50}
      color = {"#f55442"}
      loading={loading}
     />
    :

    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default App;
