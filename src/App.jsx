import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PlaceDetail from "@/pages/PlaceDetail";
import AboutDelhi from "@/pages/AboutDelhi";
import DelhiMap from "@/pages/DelhiMap";
import FoodGuide from "@/pages/FoodGuide";
import ShoppingGuide from "@/pages/ShoppingGuide";
import Transportation from "@/pages/Transportation";
import TravelTips from "@/pages/TravelTips";
import ContactUs from "@/pages/ContactUs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import MoreCities from "@/pages/MoreCities";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/about-delhi" element={<AboutDelhi />} />
        <Route path="/delhi-map" element={<DelhiMap />} />
        <Route path="/food-guide" element={<FoodGuide />} />
        <Route path="/shopping-guide" element={<ShoppingGuide />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/more-cities" element={<MoreCities />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
