import { CourseCard } from "@/components/ui/CourseCard";
import Hero from "@/components/ui/Hero";
import { getCourses } from "@/sanity/lib/courses/getCourses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="container mx-auto px-4">
        <div>
          <div>
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0"></div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  href={`/courses/${course.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
