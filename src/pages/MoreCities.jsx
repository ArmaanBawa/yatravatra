import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MoreCities = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">More Cities</h1>
        </div>
        <div className="bg-card rounded-lg p-8 shadow-md text-muted-foreground text-center">
          <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Coming Soon!</h2>
          <p className="mb-4">We are working hard to bring you travel guides for more amazing Indian cities.</p>
          <ul className="mb-4 space-y-2">
            <li><span className="font-bold text-primary">Mumbai</span> <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary ml-2">SOON</span></li>
            <li><span className="font-bold text-primary">Jaipur</span> <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary ml-2">SOON</span></li>
            <li><span className="font-bold text-primary">Goa</span> <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary ml-2">SOON</span></li>
            <li><span className="font-bold text-primary">Kerala</span> <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary ml-2">SOON</span></li>
          </ul>
          <p>Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default MoreCities; 