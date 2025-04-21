"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Real-World Solutions</span> For Your
            Property
          </h2>
          <p className="text-lg text-gray-600">
            See how properties like yours are using our AI platform to solve
            common challenges and create exceptional guest experiences.
          </p>
        </div>

        <Tabs defaultValue="small-hotel" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl cursor-pointer">
              <TabsTrigger value="small-hotel">Small Hotels</TabsTrigger>
              <TabsTrigger value="homestay">Homestays</TabsTrigger>
              <TabsTrigger value="b-and-b">B&Bs</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="small-hotel" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-hotel-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/40 rounded-full translate-x-16 -translate-y-16 blur-2xl"></div>
                <h3 className="text-2xl font-bold text-hotel-800 mb-4">
                  Hotel Success Story
                </h3>
                <p className="text-gray-700 mb-4">
                  Ritumbhara Hotel & Resort struggled with staffing shortages
                  and inconsistent guest communication.
                </p>

                <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                  <h4 className="font-bold text-hotel-600 mb-2">Challenges</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Limited front desk hours creating guest frustration
                    </li>
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Manual booking process prone to errors
                    </li>
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Inconsistent upselling reducing potential revenue
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-teal-700 mb-2">
                    Results with WeEngage
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      24/7 AI guest assistance increasing satisfaction by 42%
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Booking errors reduced by 95%
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Revenue per booking increased by 23% through AI upselling
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  Small Hotel AI Applications
                </h3>
                <p className="text-gray-700">
                  Our AI platform helps small hotels with 10-50 rooms compete
                  with larger chains by providing enterprise-level technology
                  that&apos;s affordable and easy to implement.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Virtual Front Desk
                    </h4>
                    <p className="text-gray-600">
                      Provide 24/7 guest service with our AI assistant handling
                      check-in guidance, local recommendations, and room service
                      requests even when your staff is minimal.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Smart Staff Management
                    </h4>
                    <p className="text-gray-600">
                      AI-powered scheduling and task management helps your small
                      team work efficiently, prioritizing tasks based on guest
                      needs and business objectives.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Dynamic Pricing
                    </h4>
                    <p className="text-gray-600">
                      Maximize revenue with AI algorithms that adjust room rates
                      based on demand, seasonality, local events, and competitor
                      pricing.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book a Demo for Small Hotels{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="homestay" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-hotel-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/40 rounded-full translate-x-16 -translate-y-16 blur-2xl"></div>
                <h3 className="text-2xl font-bold text-hotel-800 mb-4">
                  Vacation Rental Success Story
                </h3>
                <p className="text-gray-700 mb-4">
                  A collection of 8 luxury vacation rentals, struggled with
                  guest communication and operational efficiency.
                </p>

                <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                  <h4 className="font-bold text-hotel-600 mb-2">Challenges</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Delayed responses to guest inquiries causing booking
                      losses
                    </li>
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Difficulty managing check-in for multiple properties
                    </li>
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Time-consuming guest communication across multiple
                      channels
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-teal-700 mb-2">
                    Results with WeEngage
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Instant responses to all guest inquiries, 24/7
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Self-service check-in with AI guide increased guest
                      satisfaction by 35%
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Owner time commitment reduced by 60%, allowing expansion
                      to 4 more properties
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Homestay AI Applications</h3>
                <p className="text-gray-700">
                  For vacation rentals and homestays, our AI platform helps
                  owners manage their properties efficiently, even when they
                  can&apos;t be physically present.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Virtual Property Manager
                    </h4>
                    <p className="text-gray-600">
                      Let AI handle guest communications, answer property
                      questions, and provide local recommendations so you can
                      focus on creating exceptional spaces.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Automated Check-in
                    </h4>
                    <p className="text-gray-600">
                      Guide guests through self-check-in with interactive AI
                      instructions, door code delivery, and smart home
                      integration for a seamless arrival.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Service Coordination
                    </h4>
                    <p className="text-gray-600">
                      Automatically schedule cleaning, maintenance, and other
                      services based on bookings, and get AI-generated reports
                      on property condition.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book a Demo for Homestays{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="b-and-b" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-hotel-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/40 rounded-full translate-x-16 -translate-y-16 blur-2xl"></div>
                <h3 className="text-2xl font-bold text-hotel-800 mb-4">
                  B&B Success Story
                </h3>
                <p className="text-gray-700 mb-4">
                  Buradvilas 1911, a family-run 8-room bed and breakfast, needed
                  to modernize operations while maintaining their personal
                  touch.
                </p>

                <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                  <h4 className="font-bold text-hotel-600 mb-2">Challenges</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Owners spending 3+ hours daily on administrative tasks
                    </li>
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Difficulty tracking guest preferences and dietary
                      restrictions
                    </li>
                    <li className="flex items-start">
                      <span className="text-hotel-500 mr-2">•</span>
                      Limited marketing reach compared to larger businesses
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-teal-700 mb-2">
                    Results with WeEngage
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Administrative tasks reduced to 45 minutes daily
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      Perfect tracking of guest preferences increased repeat
                      bookings by 28%
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      AI-optimized online presence increased direct bookings by
                      40%
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">B&B AI Applications</h3>
                <p className="text-gray-700">
                  Our AI solutions help B&Bs enhance their personalized service
                  while reducing the administrative burden on owners and staff.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Guest Preference Management
                    </h4>
                    <p className="text-gray-600">
                      AI tracks and remembers every guest preference, from
                      pillow type to breakfast choices, allowing you to provide
                      thoughtful personalized service.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Smart Inventory & Procurement
                    </h4>
                    <p className="text-gray-600">
                      AI forecasts your needs for breakfast ingredients,
                      toiletries, and supplies based on bookings, seasonality,
                      and guest preferences.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">
                      Digital Concierge
                    </h4>
                    <p className="text-gray-600">
                      Provide guests with AI-powered recommendations for local
                      attractions, dining, and activities, customized to their
                      interests and preferences.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book a Demo for B&Bs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
