import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const TravelTips = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Delhi Travel Tips</h1>
        </div>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Make the most of your Delhi trip with these practical travel tips!
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Info className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Stay Hydrated</h2>
            <p className="text-muted-foreground text-center">Carry a water bottle, especially in summer. Avoid drinking tap water—opt for bottled or filtered water.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Info className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Dress Comfortably</h2>
            <p className="text-muted-foreground text-center">Wear light, breathable clothes in summer and layer up in winter. Comfortable shoes are a must for exploring.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Info className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Bargain in Markets</h2>
            <p className="text-muted-foreground text-center">Bargaining is common in local markets. Don't hesitate to negotiate for a better price.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Info className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Beware of Scams</h2>
            <p className="text-muted-foreground text-center">Be cautious of touts and overly friendly strangers. Use official transport and ticket counters.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Info className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Respect Local Customs</h2>
            <p className="text-muted-foreground text-center">Dress modestly at religious sites and remove shoes where required. Always ask before taking photos of people.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
            <Info className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-xl font-semibold mb-2">Use Trusted Apps</h2>
            <p className="text-muted-foreground text-center">Use Google Maps, Ola, Uber, and Zomato for navigation, transport, and food delivery.</p>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground">
          <p>Tip: Always keep a copy of your ID and emergency contacts handy.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelTips; 