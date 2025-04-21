import ProductFeatures from "@/components/shared/ProductFeatures";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Award,
  Mail,
  Star,
  Users,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";

const Loop = () => {
  const coreFeatures = [
    {
      icon: <MessageSquare />,
      title: "Omnichannel Marketing",
      description: "Integrated WhatsApp and email campaign management",
    },
    {
      icon: <Award />,
      title: "Loyalty Program",
      description: "Customizable reward points and guest benefits system",
    },
    {
      icon: <Mail />,
      title: "Automated Campaigns",
      description: "Trigger-based messaging and personalized communications",
    },
    {
      icon: <Star />,
      title: "Feedback Management",
      description: "Automated review collection and sentiment analysis",
    },
    {
      icon: <Users />,
      title: "Guest Profiling",
      description: "Detailed guest insights and preference tracking",
    },
    {
      icon: <Target />,
      title: "Campaign Analytics",
      description: "Comprehensive campaign performance tracking",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-hotel-50 via-teal-50 to-hotel-50">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-hotel-500 text-white mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Guest Engagement & Loyalty Platform
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                LOOP
                <span className="text-hotel-500 ml-2">
                  Guest Engagement & Loyalty
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build lasting relationships with guests through personalized
                marketing, loyalty programs, and automated feedback collection.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage guest relationships and loyalty
              programs effectively
            </p>
          </div>

          <ProductFeatures features={coreFeatures} />

          {/* Smart Engagement Section */}
          <div className="mt-20 bg-gradient-to-r from-hotel-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Smart Engagement Tools
              </h3>
              <p className="text-gray-600 mb-8">
                Leverage AI-powered tools to create personalized guest
                experiences
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Mail className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Campaign Builder</h4>
                  <p className="text-gray-600">
                    Drag-and-drop interface for personalized campaigns
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Users className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Guest Segmentation</h4>
                  <p className="text-gray-600">
                    Advanced behavioral targeting and analytics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Guest Engagement?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of properties already using LOOP to build lasting
              guest relationships
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

export default Loop;
