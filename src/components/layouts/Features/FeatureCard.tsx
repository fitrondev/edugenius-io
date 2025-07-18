import { FeatureItem } from "@/constants/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FeatureCardProps = {
  feature: FeatureItem;
  index: number;
};

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const IconComponent = feature.icon;

  return (
    <Card className="group relative gap-4 overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Background gradient effect */}
      <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="relative">
        {/* Icon container */}
        <div className="from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-500 group-hover:scale-110">
          <IconComponent className="text-primary h-8 w-8 transition-all duration-500 group-hover:scale-110" />

          {/* Floating animation dot */}
          <div className="bg-primary/20 absolute -top-1 -right-1 h-3 w-3 rounded-full opacity-0 transition-all duration-500 group-hover:animate-ping group-hover:opacity-100" />
        </div>

        <CardTitle className="group-hover:text-primary text-xl font-bold transition-colors duration-300">
          {feature.title}
        </CardTitle>

        {/* Card number indicator */}
        <div className="group-hover:bg-primary/10 group-hover:text-primary text-muted-foreground absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold transition-all duration-300">
          {String(index + 1).padStart(2, "0")}
        </div>
      </CardHeader>

      <CardContent className="relative">
        <CardDescription className="text-muted-foreground group-hover:text-muted-foreground/80 text-base leading-relaxed transition-colors duration-300">
          {feature.description}
        </CardDescription>
      </CardContent>

      {/* Bottom accent line */}
      <div className="from-primary to-primary/60 absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full" />
    </Card>
  );
};

export default FeatureCard;
