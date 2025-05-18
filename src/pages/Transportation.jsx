import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Train, Bus, Car, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Transportation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Delhi Transportation Guide</h1>
        </div>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Navigate Delhi with ease! Here are the main ways to get around the city:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Train className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Delhi Metro</h2>
            <p className="text-muted-foreground text-center">Fast, clean, and connects most major areas. Highly recommended for tourists and locals alike.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Bus className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Buses</h2>
            <p className="text-muted-foreground text-center">DTC and cluster buses cover the entire city. Budget-friendly but can be crowded during peak hours.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Car className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Cabs & Auto-rickshaws</h2>
            <p className="text-muted-foreground text-center">Ola, Uber, and local autos are widely available. Always prefer metered rides or agree on a fare in advance.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <MapPin className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Cycle Rickshaws</h2>
            <p className="text-muted-foreground text-center">Great for short distances in Old Delhi and markets. Negotiate the fare before starting your ride.</p>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground">
          <p>Tip: Download the <b>Delhi Metro Rail</b> app or use Google Maps for real-time navigation and route planning.</p>
        </div>
      </div>
    </div>
  );
};

export default Transportation; 