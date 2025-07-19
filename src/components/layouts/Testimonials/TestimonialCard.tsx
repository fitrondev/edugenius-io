import { Quote, Star } from "lucide-react";

import { TestimonialItem } from "@/constants/data";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <Card className="relative flex h-full min-h-[280px] w-full flex-col bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Quote className="text-primary/10 absolute top-4 right-4 h-12 w-12 stroke-[1.5px]" />

      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar className="border-primary/20 h-12 w-12 border-2">
            <AvatarImage
              src={testimonial.avatar || "https://github.com/shadcn.png"}
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {getInitials(testimonial.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <span className="text-[15px] leading-none font-semibold">
              {testimonial.name}
            </span>
            <span className="text-muted-foreground text-sm leading-none">
              {testimonial.role} at {testimonial.company}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1">
          {renderStars(testimonial.rating)}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 items-start">
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          {testimonial.content}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
