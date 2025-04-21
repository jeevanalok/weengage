import ProductFeatures from "@/components/shared/ProductFeatures";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  LineChart,
  Users,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";

const Prism = () => {
  const coreFeatures = [
    {
      icon: <DollarSign />,
      title: "Smart Pricing",
      description: "AI-powered dynamic pricing recommendations",
    },
    {
      icon: <TrendingUp />,
      title: "Competitor Analysis",
      description: "Real-time market rate tracking and analysis",
    },
    {
      icon: <BarChart3 />,
      title: "Revenue Analytics",
      description: "Comprehensive revenue and performance metrics",
    },
    {
      icon: <LineChart />,
      title: "Booking Insights",
      description: "Detailed booking patterns and trend analysis",
    },
    {
      icon: <Target />,
      title: "Market Positioning",
      description: "Strategic positioning and competitive analysis",
    },
    {
      icon: <Users />,
      title: "Customer Segmentation",
      description: "Advanced guest segmentation and targeting",
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
                Revenue Intelligence Platform
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                PRISM
                <span className="text-hotel-500 ml-2">
                  Revenue Intelligence
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Data-driven pricing optimization and market intelligence to
                maximize revenue and maintain competitive advantage.
              </p>

             
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to optimize revenue and stay competitive
            </p>
          </div>

          <ProductFeatures features={coreFeatures} />

          {/* Analytics Edge Section */}
          <div className="mt-20 bg-gradient-to-r from-hotel-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Analytics Edge</h3>
              <p className="text-gray-600 mb-8">
                Make data-driven decisions with advanced analytics
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <LineChart className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Custom Insights</h4>
                  <p className="text-gray-600">
                    Tailored analytics by property type and behavior
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Shield className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Strategic Pricing</h4>
                  <p className="text-gray-600">
                    Optimize direct booking conversions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Maximize Your Revenue?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of properties already using PRISM to optimize their
              pricing strategy
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

export default Prism;
