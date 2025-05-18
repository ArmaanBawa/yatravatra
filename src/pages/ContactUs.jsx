import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manovggl"; // <-- Replace with your actual endpoint

const ContactUs = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      let errorData = {};
      try {
        errorData = await response.json();
      } catch (err) {
        errorData = { error: 'Could not parse error response' };
      }
      console.log('Formspree error:', errorData);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button onClick={() => navigate(-1)} variant="outline" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-foreground text-center w-full">Contact Us</h1>
        </div>
        <p className="mb-8 text-center text-lg text-muted-foreground">
          Have questions, suggestions, or feedback? Reach out to the Yatra Vatra team!
        </p>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg py-12">
            <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
            Thank you for contacting us! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Type your message here..."
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs; 