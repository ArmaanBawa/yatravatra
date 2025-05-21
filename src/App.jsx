import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
// import Home from "@/pages/Home";
// import PlaceDetail from "@/pages/PlaceDetail";
// import AboutDelhi from "@/pages/AboutDelhi";
// import DelhiMap from "@/pages/DelhiMap";
// import FoodGuide from "@/pages/FoodGuide";
// import ShoppingGuide from "@/pages/ShoppingGuide";
// import Transportation from "@/pages/Transportation";
// import TravelTips from "@/pages/TravelTips";
// import ContactUs from "@/pages/ContactUs";
// import PrivacyPolicy from "@/pages/PrivacyPolicy";
// import TermsOfService from "@/pages/TermsOfService";
// import MoreCities from "@/pages/MoreCities";

const Home = lazy(() => import("@/pages/Home"));
const PlaceDetail = lazy(() => import("@/pages/PlaceDetail"));
const AboutDelhi = lazy(() => import("@/pages/AboutDelhi"));
const DelhiMap = lazy(() => import("@/pages/DelhiMap"));
const FoodGuide = lazy(() => import("@/pages/FoodGuide"));
const ShoppingGuide = lazy(() => import("@/pages/ShoppingGuide"));
const Transportation = lazy(() => import("@/pages/Transportation"));
const TravelTips = lazy(() => import("@/pages/TravelTips"));
const ContactUs = lazy(() => import("@/pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const MoreCities = lazy(() => import("@/pages/MoreCities"));
const Contribute = lazy(() => import("@/pages/Contribute"));

import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place/:id" element={<Layout><PlaceDetail /></Layout>} />
          <Route path="/about-delhi" element={<Layout><AboutDelhi /></Layout>} />
          <Route path="/delhi-map" element={<Layout><DelhiMap /></Layout>} />
          <Route path="/food-guide" element={<Layout><FoodGuide /></Layout>} />
          <Route path="/shopping-guide" element={<Layout><ShoppingGuide /></Layout>} />
          <Route path="/transportation" element={<Layout><Transportation /></Layout>} />
          <Route path="/travel-tips" element={<Layout><TravelTips /></Layout>} />
          <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
          <Route path="/more-cities" element={<Layout><MoreCities /></Layout>} />
          <Route path="/contribute" element={<Layout><Contribute /></Layout>} />
        </Routes>
      </Suspense>
      <Analytics />
    </Router>
  );
}

export default App;
