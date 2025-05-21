import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MapPin size={16} />
          </div>
          <span className="text-xl font-bold text-foreground">Yatra Vatra</span>
        </div>

        <nav className="hidden space-x-6 md:flex">
          <a href="#places" className="text-sm font-medium text-foreground hover:text-primary">Delhi Places</a>
          <Link to="/delhi-map" className="text-sm font-medium text-muted-foreground hover:text-primary">Delhi Map</Link>
          <Link to="/about-delhi" className="text-sm font-medium text-muted-foreground hover:text-primary">About Delhi</Link>
          <span className="relative">
            <Link to="/more-cities" className="text-sm font-medium text-muted-foreground hover:text-primary">More Cities</Link>
            <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
              SOON
            </span>
          </span>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/contact-us">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
