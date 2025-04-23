"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTierProps {
  name: string;
  price: string;
  discountedPrice?: string;

  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

const PricingTier = ({
  name,
  price,
  discountedPrice,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
}: PricingTierProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden border ${
        isPopular
          ? "border-hotel-500 shadow-lg shadow-hotel-100"
          : "border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="bg-hotel-500 text-white py-1.5 px-4 text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">
            <s className="text-gray-900">₹{price}</s> ₹{discountedPrice}
          </span>
          <span className="ml-1 text-gray-600">/month</span>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        <Button
          className={`mt-6 w-full cursor-pointer ${
            isPopular
              ? "bg-hotel-500 hover:bg-hotel-600"
              : "bg-gray-900 hover:bg-gray-800"
          }`}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {ctaText}
        </Button>

        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className={`h-5 w-5 mr-2 ${
                  isPopular ? "text-hotel-500" : "text-gray-700"
                }`}
              />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that&apos;s right for your property. All plans
            include our core AI services with no hidden fees or long-term
            contracts required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Basic"
            price="1999"
            discountedPrice="1499"
            description="Essential tools for budget stays and small independent hotels."
            features={[
              "Airbnb integration",
              "Automated payments",
              "Automated check-in & checkout messages (Airbnb compatible)",
              "Guest data access",
              "Housekeeping automation",
              "Smart Admin Dashboard",
              "Basic support",
            ]}
            ctaText="Start 14-Day Free Trial"
          />

          <PricingTier
            name="Premium"
            price="3999"
            discountedPrice="2499"
            description="Ideal for growing properties looking to enhance revenue and guest communication."
            features={[
              "Everything in Basic",
              "WhatsApp integration",
              "Guest journey mapping",
              "Guest personalization",
              "WeEngage analytics",
              "Email support",
              "24/7 live support",
              "Digital upselling",
              "AI Front Desk",
              "Digital Concierge",
            ]}
            ctaText="Start 14-Day Free Trial"
          />

          <PricingTier
            name="Platinum Plus"
            price="5999"
            discountedPrice="2999"
            isPopular={true}
            description="Complete AI-powered guest experience and operational intelligence suite."
            features={[
              "Everything in Premium",
              "AI-powered guest communication (Email & WhatsApp)",
              "Loyalty & reward program",
              "Smart pricing & strategic insights",
              "Smart upselling",
              "Open API keys for integrations",
              "Smart inventory & procurement",
              "Guest preference management",
              "Automated maintenance",
            ]}
            ctaText="Start 14-Day Free Trial"
          />
        </div>

        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
          <p className="text-gray-700">
            Need a customized solution for your unique property or
            multi-property management? Our team can create a tailored AI package
            that fits your specific requirements and budget.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              className="text-white bg-teal-500 hover:cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule Consultation
            </Button>
            <Button
              variant="ghost"
              className="border hover:border-teal-500 hover:text-teal-500"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
