import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
  className?: string;
}

const ProductFeatures = ({
  features,
  className = "",
}: ProductFeaturesProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {features.map((feature, index) => (
        <Card
          key={index}
          className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-gray-200"
        >
          <CardHeader>
            <div className="h-8 w-8 text-hotel-500 mb-2">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default ProductFeatures;
