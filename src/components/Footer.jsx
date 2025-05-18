import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MapPin size={16} />
              </div>
              <span className="text-xl font-bold">Yatra Vatra</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Your trusted companion for exploring Delhi's wonders.
              <br />
              <span className="mt-1 block text-xs text-primary">
                More destinations coming soon!
              </span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-secondary-foreground/90">Explore Delhi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#places" className="text-secondary-foreground/80 hover:text-primary">Tourist Places</a></li>
              <li><a href="/food-guide" className="text-secondary-foreground/80 hover:text-primary">Food Guide</a></li>
              <li><a href="/shopping-guide" className="text-secondary-foreground/80 hover:text-primary">Shopping</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-secondary-foreground/90">Coming Soon</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-secondary-foreground/80">Mumbai</span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">SOON</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary-foreground/80">Jaipur</span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">SOON</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary-foreground/80">Goa</span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">SOON</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary-foreground/80">Kerala</span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">SOON</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-secondary-foreground/90">Delhi Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-delhi" className="text-secondary-foreground/80 hover:text-primary">About Delhi</a></li>
              <li><a href="/transportation" className="text-secondary-foreground/80 hover:text-primary">Transportation</a></li>
              <li><a href="/travel-tips" className="text-secondary-foreground/80 hover:text-primary">Travel Tips</a></li>
              <li><a href="/contact-us" className="text-secondary-foreground/80 hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-secondary-foreground/90">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="text-secondary-foreground/80 hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-secondary-foreground/80 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} Yatra Vatra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
