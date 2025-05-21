import React from "react";
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PlaceList />
    </>
  );
};

export default Home; 