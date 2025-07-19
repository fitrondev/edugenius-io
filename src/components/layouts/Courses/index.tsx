import Link from "next/link";

import { coursesData } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";

import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <section className="from-primary/5 via-background to-primary/10 bg-gradient-to-br py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Header */}
        <SectionTitle
          badge="Pembelajaran Terbaik"
          title="Kursus"
          highlight="Populer"
          highlight_className="inline"
          description="Pilih dari berbagai kursus berkualitas tinggi yang dirancang untuk membantu Anda mencapai tujuan pembelajaran dan karir."
        />

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href={"/courses"}>Lihat Semua Kursus</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
