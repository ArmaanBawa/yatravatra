import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PlaceCard from "@/components/PlaceCard";
import { delhiPlacesData } from "@/data/delhiPlaces"; // Assuming data is in this file

const PlaceList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // In a real app, fetch data here. Using localStorage or hardcoded data for now.
    const storedPlaces = localStorage.getItem("delhiPlaces");
    if (storedPlaces) {
      setPlaces(JSON.parse(storedPlaces));
    } else {
      setPlaces(delhiPlacesData);
      localStorage.setItem("delhiPlaces", JSON.stringify(delhiPlacesData));
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="places" className="bg-secondary/20 py-16 md:py-24">
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Must-Visit Places in Delhi
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Explore the best of Delhi's heritage and culture
        </p>

        {places.length === 0 ? (
          <p className="text-center text-muted-foreground">Loading places...</p>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PlaceList;
