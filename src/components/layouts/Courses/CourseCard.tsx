import Link from "next/link";

import { Clock, Star, Users } from "lucide-react";

import { CourseItem } from "@/constants/data";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CourseCardProps {
  course: CourseItem;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const IconComponent = course.icon;

  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="mb-2 flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            <IconComponent className="text-primary h-6 w-6" />
          </div>

          <span className="text-primary bg-primary/10 rounded-full px-2 py-1 text-sm font-medium">
            {course.level}
          </span>
        </div>

        <CardTitle className="text-xl font-bold">{course.title}</CardTitle>

        <CardDescription className="text-muted-foreground line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-muted-foreground flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()} siswa</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>

          <span className="text-muted-foreground">•</span>

          <span className="text-muted-foreground text-sm">
            Instruktur: {course.instructor}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="text-2xl font-bold">{course.price}</div>

        <Button asChild>
          <Link href={"/"}>Daftar Sekarang</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
