import React, { useState } from "react";
import MainBody from "./components/MainBody.jsx";
import { mainBody } from "./editable-stuff/config.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import AboutPage from "./components/About.jsx";
import ContactPage from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  return (
    <MainBody
      gradient={mainBody.gradientColors}
      title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
      message={mainBody.message}
      icons={mainBody.icons}
    />
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
