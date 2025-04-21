import { Button } from "@/components/ui/button";
import ProductFeatures from "@/components/shared/ProductFeatures";
import {
  MessageSquare,
  CalendarDays,
  Utensils,
  Bot,
  Users,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

const GuestHub = () => {
  const coreFeatures = [
    {
      icon: <CalendarDays />,
      title: "Digital Check-in",
      description:
        "Paperless registration and seamless check-in process for all guests",
    },
    {
      icon: <MessageSquare />,
      title: "Automated Messaging",
      description:
        "Smart welcome messages via WhatsApp and Email with personalized content",
    },
    {
      icon: <Utensils />,
      title: "Service Management",
      description:
        "Comprehensive service catalog including housekeeping, laundry, and dining",
    },
    {
      icon: <Bot />,
      title: "AI Concierge",
      description:
        "24/7 virtual concierge with multilingual support and real-time responses",
    },
    {
      icon: <Users />,
      title: "Guest Profiles",
      description:
        "Detailed guest profiles with preferences and interaction history",
    },
    {
      icon: <Globe />,
      title: "Multilingual Support",
      description:
        "Break language barriers with our multilingual virtual concierge",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-hotel-50 via-teal-50 to-hotel-50">
          <div className="container relative mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-hotel-500 text-white mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Transform Guest Experience with AI
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                GuestHub
                <span className="text-hotel-500 ml-2">Digital Concierge</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elevate your guest experience from check-in to check-out with
                our AI-powered digital concierge. Deliver personalized service
                at scale while reducing operational overhead.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional guest experiences
              through intelligent automation
            </p>
          </div>

          <ProductFeatures features={coreFeatures} />

          {/* Integration Benefits */}
          <div className="mt-20 bg-gradient-to-r from-hotel-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Seamless Integrations</h3>
              <p className="text-gray-600 mb-8">
                Connect with your existing tools including PMS, OTAs, and
                communication platforms for a unified experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Shield className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Secure & Reliable</h4>
                  <p className="text-gray-600">
                    Enterprise-grade security with end-to-end encryption
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Bot className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">AI-Powered</h4>
                  <p className="text-gray-600">
                    Smart automation and personalized recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Guest Experience?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of properties already using GuestHub to deliver
              exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/#contact"}>
                <Button
                  className="bg-hotel-500 hover:bg-hotel-600 text-white cursor-pointer"
                  size="lg"
                >
                  Schedule Demo
                </Button>
              </Link>
              <Link href={"/#pricing"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-hotel-500 text-hotel-500 hover:bg-hotel-50 cursor-pointer"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GuestHub;
