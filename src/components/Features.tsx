import { Lightbulb, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Lightning Fast",
    description: "Built with performance in mind for the best user experience.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security to protect your data.",
    icon: Shield,
  },
  {
    title: "Innovative",
    description: "Cutting-edge features to keep you ahead of the competition.",
    icon: Lightbulb,
  },
];

export const Features = () => {
  return (
    <div className="py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};