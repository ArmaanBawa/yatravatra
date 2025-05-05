import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Train, MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutDelhi = () => {
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold md:text-5xl">About Delhi</h1>
          <p className="mt-2 text-lg opacity-90">India's Capital City</p>
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
        <div className="grid gap-12 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-foreground">The Heart of India</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Delhi, the capital city of India, is a fascinating blend of the old and the new. 
                It's a city where ancient monuments stand alongside modern skyscrapers, where 
                traditional bazaars coexist with luxury malls, and where diverse cultures and 
                cuisines come together to create a unique experience.
              </p>
              <p className="text-lg text-muted-foreground">
                With a history that dates back to the 6th century BCE, Delhi has been the center 
                of power for various empires and dynasties. Today, it stands as a vibrant metropolis 
                that serves as the political, cultural, and economic hub of India.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Quick Facts</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-secondary/10 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Northern India, on the banks of the Yamuna River
                  </p>
                </div>
                <div className="rounded-lg bg-secondary/10 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Population</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Over 30 million in the National Capital Region
                  </p>
                </div>
                <div className="rounded-lg bg-secondary/10 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Best Time to Visit</h3>
                  </div>
                  <p className="text-muted-foreground">
                    October to March (pleasant weather)
                  </p>
                </div>
                <div className="rounded-lg bg-secondary/10 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Train className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Transport</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Metro, buses, auto-rickshaws, and taxis
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Cultural Heritage</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Delhi's rich cultural heritage is reflected in its numerous historical monuments, 
                museums, art galleries, and cultural centers. The city is home to three UNESCO 
                World Heritage Sites: the Red Fort, Qutub Minar, and Humayun's Tomb.
              </p>
              <p className="text-lg text-muted-foreground">
                The city's cultural scene is vibrant and diverse, with numerous festivals, 
                exhibitions, and performances taking place throughout the year. From classical 
                music and dance to contemporary art and theater, Delhi offers something for 
                every cultural enthusiast.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Must-Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Street food in Old Delhi</li>
                <li>• Shopping in Chandni Chowk</li>
                <li>• Evening at India Gate</li>
                <li>• Heritage walks in Old Delhi</li>
                <li>• Cultural performances at Dilli Haat</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Local Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use the Metro for convenient travel</li>
                <li>• Try local street food with caution</li>
                <li>• Bargain while shopping in markets</li>
                <li>• Carry water and wear comfortable shoes</li>
                <li>• Respect local customs and traditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDelhi; 