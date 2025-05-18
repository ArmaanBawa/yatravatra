import React from "react";
import { delhiPlacesData } from "@/data/delhiPlaces";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShoppingGuide = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Delhi Shopping Guide</h1>
        </div>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Explore the best shopping destinations near Delhi's top attractions!
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {delhiPlacesData.map((place) => (
            <div key={place.id} className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="mb-2 text-2xl font-semibold text-primary">{place.name}</h2>
              <p className="mb-4 text-muted-foreground">{place.area}</p>
              <h3 className="mb-2 text-lg font-bold text-foreground">Nearby Shopping Spots</h3>
              <ul className="mb-2 list-disc list-inside text-muted-foreground">
                {place.nearbyMarkets
                  ? place.nearbyMarkets.split(',').map((m, i) => (
                      <li key={i}>{m.trim()}</li>
                    ))
                  : <li>No shopping recommendations listed.</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingGuide; 