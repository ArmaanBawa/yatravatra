import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Privacy Policy</h1>
        </div>
        <div className="bg-card rounded-lg p-8 shadow-md text-muted-foreground">
          <p className="mb-2"><b>Effective Date:</b> May 2024</p>
          <p className="mb-6">This Privacy Policy explains how <b>Yatra Vatra</b> collects, uses, and protects your information when you use our website.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Information We Collect</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Personal information you provide via forms (such as name, email, and message on the Contact Us page).</li>
            <li>Non-personal information such as browser type, device, and usage statistics.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>To respond to your inquiries and provide support.</li>
            <li>To improve our website and user experience.</li>
            <li>To send you updates or information if you have requested it.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Information Sharing</h2>
          <p className="mb-4">We do not sell or share your personal information with third parties except as required by law or to provide our services (e.g., email delivery services).</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Cookies</h2>
          <p className="mb-4">We may use cookies to enhance your experience. You can disable cookies in your browser settings.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Data Security</h2>
          <p className="mb-4">We take reasonable measures to protect your information, but no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. Please review this page periodically for changes.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via the <a href="/contact-us" className="text-primary underline">Contact Us</a> page.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 