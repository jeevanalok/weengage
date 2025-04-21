"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-neutral-700 space-y-6">
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 font-semibold text-xs md:text-sm">
              <span className="">
                <span className="mr-1">✨</span>{" "}
                <span className=" whitespace-nowrap">
                  {" "}
                  Next-Gen Guest Engagement Platform
                </span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
              Transform Your{" "}
              <span className="text-teal-600">Independent Property</span> with
              Smart AI
            </h1>
            <p className="text-base md:text-xl text-neutral-700/80 leading-relaxed">
              <span className="font-bold text-hotel-700">
                Your guest experience doesn’t start at the door. It starts at
                the first hello.
              </span>{" "}
              <br />
              WeEngage creates moments that matter — from a welcome message that
              feels personal, to seamless check-ins and memories that linger
              long after checkout.
              <span className="block mt-3 italic">
                Your Guests Deserve More Than Just a Room. Give Them a{" "}
                <span className="text-hotel-700">Journey</span>
              </span>
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-hotel-600 text-white hover:bg-hotel-600/90 hover:cursor-pointer font-medium text-base"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-hotel-600 text-hotel-600 hover:bg-white/10 hover:cursor-pointer font-medium text-base"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Products
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-hotel-400/30 rounded-full filter blur-3xl"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-white/50 backdrop-blur-sm">
              <div className="px-6 py-5 bg-hotel-50/50">
                <div className="flex items-center">
                  <MessageCircle className="h-8 w-8 text-hotel-600 mr-3" />
                  <h3 className="text-xl font-semibold text-hotel-800">
                    GuestHub Digital Concierge
                  </h3>
                </div>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div className="bg-hotel-100/50 rounded-lg p-4">
                    <p className="text-gray-700">Guest Message:</p>
                    <p className="text-gray-900 font-medium mt-1">
                      &quot;Could you help me with early check-in tomorrow?
                      Also, what dining options do you recommend nearby?&quot;
                    </p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4">
                    <p className="text-gray-700">WeEngage AI Response:</p>
                    <p className="text-gray-900 font-medium mt-1">
                      &quot;I&apos;ve noted your early check-in request. Our
                      AI-powered system suggests 3 top-rated restaurants within
                      walking distance, based on your preferences. Would you
                      like me to make a reservation for you?&quot;
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-hotel-500 hover:bg-hotel-600 text-white">
                      Experience GuestHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-hotel-600">
                4+
              </p>
              <p className="text-gray-600 mt-2">AI Products</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-hotel-600">
                24/7
              </p>
              <p className="text-gray-600 mt-2">AI Support</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-hotel-600">
                40%
              </p>
              <p className="text-gray-600 mt-2">Operation Cost Saved</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-hotel-600">
                100%
              </p>
              <p className="text-gray-600 mt-2">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
