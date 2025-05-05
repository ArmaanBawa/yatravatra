import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PlaceDetail from "@/pages/PlaceDetail";
import AboutDelhi from "@/pages/AboutDelhi";
import DelhiMap from "@/pages/DelhiMap";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/about-delhi" element={<AboutDelhi />} />
        <Route path="/delhi-map" element={<DelhiMap />} />
      </Routes>
    </Router>
  );
}

export default App;
