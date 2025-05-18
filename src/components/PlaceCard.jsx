import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hotel, Utensils, Train, Users, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"; // Import Dialog components

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getBusynessColor = (level) => {
    switch (level.toLowerCase()) {
      case 'busy': return 'text-red-600';
      case 'moderate': return 'text-yellow-600';
      case 'quiet': return 'text-green-600';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="place-card overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          onError={e => { e.target.onerror = null; e.target.src = '/images/places/default.jpg'; }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{place.name}</h3>
          <p className="text-sm opacity-90">{place.area}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="mb-4 text-sm text-muted-foreground">
          {place.shortDescription}
        </p>

        <div className="grid gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{place.area}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{place.busyness}</span>
          </div>
          <div className="flex items-center gap-2">
            <Train className="h-4 w-4 text-primary" />
            <span>{place.transport}</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/place/${place.id}`)}
          className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PlaceCard;
