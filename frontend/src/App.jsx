import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
