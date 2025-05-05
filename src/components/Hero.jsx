import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPlaces = () => {
    document.getElementById('places')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient relative overflow-hidden py-24 text-white md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
          >
            Discover Delhi with Yatra Vatra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-lg opacity-90 md:text-xl"
          >
            Your ultimate guide to exploring Delhi's iconic landmarks, vibrant markets, and rich cultural heritage.
            <br />
            <span className="mt-2 block text-base opacity-80">
              More exciting destinations coming soon!
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={scrollToPlaces}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Delhi <ArrowDown size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          className="h-full w-full object-cover" 
          alt="Abstract pattern representing Delhi map" 
          src="https://images.unsplash.com/photo-1686284683344-b726a081feca" 
        />
      </div>
    </section>
  );
};

export default Hero;
