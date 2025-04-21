import { Button } from "@/components/ui/button";
import ProductFeatures from "@/components/shared/ProductFeatures";
import {
  Building2,
  Users,
  ClipboardList,
  Settings2,
  Shield,
  Zap,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const Atlas = () => {
  const coreFeatures = [
    {
      icon: <Building2 />,
      title: "Front Office Management",
      description: "Streamlined reservations and check-in/out processes",
    },
    {
      icon: <Users />,
      title: "Staff Management",
      description: "Role-based access control and task assignment system",
    },
    {
      icon: <ClipboardList />,
      title: "Task Tracking",
      description: "Real-time monitoring of housekeeping and maintenance",
    },
    {
      icon: <Settings2 />,
      title: "Smart Automation",
      description: "Automated workflows for routine tasks and operations",
    },
    {
      icon: <LineChart />,
      title: "Performance Analytics",
      description: "Comprehensive reporting and business intelligence",
    },
    {
      icon: <Shield />,
      title: "Enterprise Security",
      description: "Advanced security features and access controls",
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
                All-in-One Tech for Lodging Automation & Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                ATLAS
                <span className="text-hotel-500 ml-2">
                  Property Management System
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A powerful, automation-first PMS designed for operational
                excellence. Streamline your property management with intelligent
                workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your property efficiently in one
              place
            </p>
          </div>

          <ProductFeatures features={coreFeatures} />

          {/* Automation Highlights */}
          <div className="mt-20 bg-gradient-to-r from-hotel-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Automation at its Finest
              </h3>
              <p className="text-gray-600 mb-8">
                Reduce manual work and streamline operations with intelligent
                automation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Settings2 className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Smart Workflows</h4>
                  <p className="text-gray-600">
                    Automated service routing and task management
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Building2 className="h-8 w-8 text-hotel-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Paperless Operations</h4>
                  <p className="text-gray-600">
                    Digital workflows for all property management needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Property Management?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of properties already using ATLAS to streamline
              their operations
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

export default Atlas;
