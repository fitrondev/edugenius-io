"use client";

import Autoplay from "embla-carousel-autoplay";

import { testimonialsData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 md:py-14">
      <div className="container space-y-8">
        <SectionTitle
          badge="Testimonials"
          title="Apa Kata"
          highlight="Alumni Kami?"
          highlight_className="inline"
          description="Dengarkan pengalaman nyata dari para alumni yang telah berhasil mengembangkan karir mereka bersama EduGenius."
        />

        <div className="relative mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 py-4 md:-ml-4">
              {testimonialsData.map(testimonial => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 lg:-left-12" />
            <CarouselNext className="-right-2 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
