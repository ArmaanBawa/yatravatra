import React from "react";
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PlaceList />
      <Footer />
    </>
  );
};

export default Home; 