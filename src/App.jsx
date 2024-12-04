import "./App.css";
import Home from "./Home";
import MyWork from "./MyWork";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [showModel, setShowModel] = useState(true);
  return (
    <>
      <AnimatePresence mode="wait">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
