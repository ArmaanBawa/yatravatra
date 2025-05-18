import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Users, Train, Hotel, Utensils } from "lucide-react";
import { delhiPlacesData } from "@/data/delhiPlaces";

const PlaceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = delhiPlacesData.find((p) => p.id === parseInt(id));

  if (!place) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Place not found</h2>
          <Button onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Header Image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          loading="lazy"
          src={place.image}
          alt={place.name}
          onError={e => { e.target.onerror = null; e.target.src = '/images/places/default.jpg'; }}
          className="h-full w-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold md:text-5xl">{place.name}</h1>
          <p className="mt-2 text-lg opacity-90">{place.area}</p>
        </div>
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="absolute left-8 top-8 bg-white/10 text-white hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Places
        </Button>
      </div>

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-foreground">About</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {place.longDescription}
            </p>

            <div className="mb-8 rounded-lg bg-secondary/10 p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Quick Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Area: {place.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    Crowd: {place.busyness}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    Transport: {place.transport}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Nearby Hotels */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Hotel className="h-5 w-5 text-primary" />
                Nearby Hotels
              </h3>
              <p className="text-muted-foreground">{place.nearbyHotels}</p>
            </div>

            {/* Nearby Restaurants */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Utensils className="h-5 w-5 text-primary" />
                Nearby Restaurants
              </h3>
              <p className="text-muted-foreground">{place.nearbyRestaurants}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceDetail; 