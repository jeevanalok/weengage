import {
  MessageSquare,
  Building2,
  Users,
  HotelIcon,
  Bot,
  BarChart3,
  BadgeDollarSign,
  Settings2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-hotel-500" />,
    title: "GuestHub",
    description:
      "Digital concierge with AI-powered check-in, guest communications, and service recommendations via WhatsApp and email.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-hotel-500" />,
    title: "ATLAS",
    description:
      "Complete Property Management System automating front office, housekeeping, maintenance, and staff operations.",
  },
  {
    icon: <Users className="h-10 w-10 text-hotel-500" />,
    title: "LOOP",
    description:
      "Comprehensive guest engagement suite with loyalty programs, omnichannel marketing, and automated feedback collection.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-hotel-500" />,
    title: "PRISM",
    description:
      "Smart pricing and analytics platform offering rate intelligence, competitor tracking, and strategic insights.",
  },
  {
    icon: <Bot className="h-10 w-10 text-hotel-500" />,
    title: "AI Automation",
    description:
      "Intelligent automation for guest communications, service requests, and operational workflows.",
  },
  {
    icon: <HotelIcon className="h-10 w-10 text-hotel-500" />,
    title: "Property Operations",
    description:
      "Streamlined management of housekeeping, maintenance, and front office tasks.",
  },
  {
    icon: <BadgeDollarSign className="h-10 w-10 text-hotel-500" />,
    title: "Revenue Optimization",
    description:
      "Dynamic pricing and smart upselling recommendations to maximize revenue.",
  },
  {
    icon: <Settings2 className="h-10 w-10 text-hotel-500" />,
    title: "Modular Integration",
    description:
      "Flexible, scalable solutions that grow with your property's needs and integrate seamlessly.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-700">
            Comprehensive <span className="text-gradient">AI Solutions</span>{" "}
            for Modern Hospitality
          </h2>
          <p className="text-lg text-gray-600">
            AI-powered solutions designed to deepen guest relationships,
            streamline operations, and help your property thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-hotel-200"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-neutral-700">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
