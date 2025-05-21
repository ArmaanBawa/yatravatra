import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContributeForm from "@/components/ContributeForm";

const Contribute = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-3xl">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Contribute to Yatra Vatra</h1>
        </div>
        
        <div className="mb-8 text-center">
          <p className="text-lg text-muted-foreground">
            Share your knowledge about Delhi's places and help others discover the city's hidden gems!
          </p>
        </div>

        <ContributeForm />
      </div>
    </div>
  );
};

export default Contribute; 