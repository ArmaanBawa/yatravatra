import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DelhiMap = () => {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // PASTE YOUR GOOGLE MAPS API KEY HERE
  // Example: const GOOGLE_MAPS_API_KEY = "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const GOOGLE_MAPS_API_KEY = "AIzaSyBaphPbY41JLeZc4ESWN7QxUfn-_7xtBB8";

  const keyLocations = [
    {
      name: "Red Fort",
      description: "Historic fort and UNESCO World Heritage Site",
      coordinates: { lat: 28.6562, lng: 77.2410 },
      category: "Historical"
    },
    {
      name: "India Gate",
      description: "War memorial and popular tourist spot",
      coordinates: { lat: 28.6129, lng: 77.2295 },
      category: "Landmark"
    },
    {
      name: "Qutub Minar",
      description: "Tallest brick minaret in the world",
      coordinates: { lat: 28.5245, lng: 77.1855 },
      category: "Historical"
    },
    {
      name: "Lotus Temple",
      description: "Famous Bahá'í House of Worship",
      coordinates: { lat: 28.5535, lng: 77.2588 },
      category: "Religious"
    },
    {
      name: "Chandni Chowk",
      description: "Historic market and food street",
      coordinates: { lat: 28.6562, lng: 77.2310 },
      category: "Market"
    },
    {
      name: "Akshardham Temple",
      description: "Modern Hindu temple complex",
      coordinates: { lat: 28.6127, lng: 77.2773 },
      category: "Religious"
    }
  ];

  useEffect(() => {
    // Check if API key is set
    if (GOOGLE_MAPS_API_KEY === "YOUR_API_KEY_HERE") {
      console.error("Please set your Google Maps API key in the DelhiMap component");
      return;
    }

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const delhi = { lat: 28.6139, lng: 77.2090 };
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: delhi,
        zoom: 12,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      setMap(mapInstance);

      // Create markers for each location
      const newMarkers = keyLocations.map(location => {
        const marker = new window.google.maps.Marker({
          position: location.coordinates,
          map: mapInstance,
          title: location.name,
          animation: window.google.maps.Animation.DROP
        });

        // Add click event to marker
        marker.addListener('click', () => {
          setSelectedLocation(location);
          mapInstance.setCenter(location.coordinates);
          mapInstance.setZoom(15);
        });

        return marker;
      });

      setMarkers(newMarkers);
    };

    return () => {
      // Cleanup markers when component unmounts
      markers.forEach(marker => marker.setMap(null));
      document.head.removeChild(script);
    };
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    if (map) {
      map.setCenter(location.coordinates);
      map.setZoom(15);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
          alt="Delhi Skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Delhi Map</h1>
          <p className="mt-2 text-lg opacity-90">Explore Key Locations</p>
        </div>
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="absolute left-8 top-8 bg-white/10 text-white hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      <div className="container py-12">
        {GOOGLE_MAPS_API_KEY === "YOUR_API_KEY_HERE" ? (
          <div className="rounded-lg border bg-card p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground">Google Maps API Key Required</h2>
            <p className="mt-4 text-muted-foreground">
              Please set your Google Maps API key in the DelhiMap component to enable the interactive map.
            </p>
            <div className="mt-6 rounded-lg bg-muted p-4 text-left">
              <h3 className="font-semibold">How to get an API key:</h3>
              <ol className="mt-2 list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Go to <a href="https://console.cloud.google.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
                <li>Create a new project or select an existing one</li>
                <li>Enable the Maps JavaScript API</li>
                <li>Create credentials (API key)</li>
                <li>Restrict the API key to your domain</li>
                <li>Replace "YOUR_API_KEY_HERE" in the code with your actual API key</li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="grid gap-12 md:grid-cols-3">
            {/* Map Section */}
            <div className="md:col-span-2">
              <div className="rounded-lg border bg-card p-6">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <div ref={mapRef} className="h-full w-full" />
                </div>
                {selectedLocation && (
                  <div className="mt-6 rounded-lg border bg-card p-4">
                    <h3 className="text-xl font-semibold">{selectedLocation.name}</h3>
                    <p className="mt-2 text-muted-foreground">{selectedLocation.description}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Info size={14} />
                      <span>
                        {selectedLocation.coordinates.lat.toFixed(4)}° N,{" "}
                        {selectedLocation.coordinates.lng.toFixed(4)}° E
                      </span>
                    </div>
                    <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {selectedLocation.category}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Key Locations List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Key Locations</h2>
              <div className="space-y-4">
                {keyLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`rounded-lg border bg-card p-4 cursor-pointer transition-colors ${
                      selectedLocation?.name === location.name
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => handleLocationClick(location)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{location.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {location.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                          <Info size={12} />
                          <span>
                            {location.coordinates.lat.toFixed(4)}° N,{" "}
                            {location.coordinates.lng.toFixed(4)}° E
                          </span>
                        </div>
                        <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {location.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DelhiMap; 