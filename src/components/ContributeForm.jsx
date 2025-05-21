import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContributeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      placeName: formData.get("placeName"),
      area: formData.get("area"),
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl"),
      nearbyRestaurants: formData.get("nearbyRestaurants"),
      transport: formData.get("transport"),
      busyness: formData.get("busyness"),
      contributorName: formData.get("contributorName"),
      contributorEmail: formData.get("contributorEmail"),
    };

    try {
      // Here you would typically send this data to your backend
      // For now, we'll just show a success message
      console.log("Contribution data:", data);
      toast({
        title: "Thank you for your contribution!",
        description: "We'll review your submission and add it to our guide soon.",
      });
      e.target.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your contribution. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Contribute to Yatra Vatra</h2>
      <p className="mb-6 text-muted-foreground">
        Help us make Yatra Vatra better by sharing your knowledge about Delhi's places!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="placeName" className="mb-2 block font-medium">
              Place Name *
            </label>
            <Input
              id="placeName"
              name="placeName"
              required
              placeholder="e.g., Red Fort"
            />
          </div>

          <div>
            <label htmlFor="area" className="mb-2 block font-medium">
              Area/Location *
            </label>
            <Input
              id="area"
              name="area"
              required
              placeholder="e.g., Old Delhi"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block font-medium">
            Description *
          </label>
          <Textarea
            id="description"
            name="description"
            required
            placeholder="Tell us about this place..."
            className="min-h-[100px]"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="mb-2 block font-medium">
            Image URL
          </label>
          <Input
            id="imageUrl"
            name="imageUrl"
            type="url"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="nearbyRestaurants" className="mb-2 block font-medium">
            Nearby Restaurants
          </label>
          <Textarea
            id="nearbyRestaurants"
            name="nearbyRestaurants"
            placeholder="List some good restaurants near this place..."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="transport" className="mb-2 block font-medium">
              Transportation Options
            </label>
            <Input
              id="transport"
              name="transport"
              placeholder="e.g., Metro, Bus, Auto"
            />
          </div>

          <div>
            <label htmlFor="busyness" className="mb-2 block font-medium">
              Busyness Level
            </label>
            <Input
              id="busyness"
              name="busyness"
              placeholder="e.g., Usually Crowded"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="mb-4 text-lg font-semibold">Your Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="contributorName" className="mb-2 block font-medium">
                Your Name *
              </label>
              <Input
                id="contributorName"
                name="contributorName"
                required
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="contributorEmail" className="mb-2 block font-medium">
                Your Email *
              </label>
              <Input
                id="contributorEmail"
                name="contributorEmail"
                type="email"
                required
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Contribution"}
        </Button>
      </form>
    </div>
  );
};

export default ContributeForm; 