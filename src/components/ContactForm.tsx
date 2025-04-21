"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CalendarClock, Mail, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    rooms: "",
    message: "",
  });

  interface FormValues {
    name: string;
    email: string;
    phone: string;
    propertyType: string;
    rooms: string;
    message: string;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { propertyType, rooms } = formData;
    if (propertyType === "" || rooms === "") {
      toast.warning("Please select property type and number of rooms.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzzrpgnd", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.info("Demo request received!", {
          description:
            "We'll be in touch within 24 hours to schedule your personalized demo.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "",
          rooms: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong", {
          description: "Please try again later.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send request");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-hotel-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
                <span className="mr-1">✨</span> Get Started
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Transform Your{" "}
                <span className="text-gradient">Hospitality Business?</span>
              </h2>
              <p className="text-lg text-gray-700">
                Book a personalized demo to see how our AI platform can address
                your property&apos;s unique needs and help you deliver
                exceptional guest experiences.
              </p>

              <div className="pt-6 space-y-5">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <CalendarClock className="h-6 w-6 text-hotel-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Personalized Demo</h3>
                    <p className="text-gray-600">
                      See how{" "}
                      <span className="text-teal-600 font-bold">WeEngage</span>{" "}
                      can be customized for your specific property type and
                      size.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <MessageCircle className="h-6 w-6 text-hotel-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Expert Consultation</h3>
                    <p className="text-gray-600">
                      Discuss your challenges with our hospitality tech
                      specialists and get recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <Mail className="h-6 w-6 text-hotel-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">No Pressure</h3>
                    <p className="text-gray-600">
                      Get your questions answered and explore options with zero
                      obligation or sales pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Request Your Demo</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="focus-visible:ring-2 focus-visible:ring-hotel-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="focus-visible:ring-2 focus-visible:ring-hotel-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Your phone number"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid phone number"
                    className="focus-visible:ring-2 focus-visible:ring-hotel-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        handleSelectChange(value, "propertyType")
                      }
                      required
                    >
                      <SelectTrigger id="propertyType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel"> Hotel</SelectItem>
                        <SelectItem value="bed & breakfast">
                          Bed & Breakfast
                        </SelectItem>
                        <SelectItem value="vacation">
                          Vacation Rental
                        </SelectItem>
                        <SelectItem value="homestay">Homestay</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rooms">Number of Rooms</Label>
                    <Select
                      value={formData.rooms}
                      onValueChange={(value) =>
                        handleSelectChange(value, "rooms")
                      }
                      required
                    >
                      <SelectTrigger id="rooms">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 rooms</SelectItem>
                        <SelectItem value="6-20">6-20 rooms</SelectItem>
                        <SelectItem value="21-50">21-50 rooms</SelectItem>
                        <SelectItem value="50+">50+ rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your property</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your current challenges and what you're looking to achieve with AI..."
                    rows={4}
                    className="focus-visible:ring-2 focus-visible:ring-hotel-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-hotel-500 hover:bg-hotel-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Request..." : "Book Your Demo"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
