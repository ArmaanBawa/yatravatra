import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Terms of Service</h1>
        </div>
        <div className="bg-card rounded-lg p-8 shadow-md text-muted-foreground">
          <p className="mb-2"><b>Effective Date:</b> May 2024</p>
          <p className="mb-6">By using the <b>Yatra Vatra</b> website, you agree to the following terms and conditions:</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Use of Content</h2>
          <ul className="list-disc list-inside mb-4">
            <li>All content is for informational purposes only and may not be reproduced without permission.</li>
            <li>We strive for accuracy but do not guarantee the completeness or reliability of information.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">User Conduct</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Do not use the site for unlawful purposes or to harm others.</li>
            <li>Do not attempt to gain unauthorized access to the site or its data.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Limitation of Liability</h2>
          <p className="mb-4">Yatra Vatra is not liable for any damages arising from the use of this site or its content.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">External Links</h2>
          <p className="mb-4">We may link to third-party sites. We are not responsible for their content or privacy practices.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Changes to Terms</h2>
          <p className="mb-4">We may update these terms at any time. Continued use of the site means you accept the new terms.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Contact</h2>
          <p>If you have questions about these terms, please contact us via the <a href="/contact-us" className="text-primary underline">Contact Us</a> page.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 