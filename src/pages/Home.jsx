import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PlaceList />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 