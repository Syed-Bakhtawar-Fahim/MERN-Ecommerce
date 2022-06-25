import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webFont from "webfontloader"
import React from 'react';
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/Home/Home"




function App() {

  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Driod Sans", "Chilanka"]
      }
    })
  }, []);

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
