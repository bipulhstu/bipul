import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const CourseGrades = () => {
  const courses = [
    { name: "Linear Algebra", grade: "3.00/4.00" },
    { name: "Signal and Systems", grade: "3.75/4.00" },
    { name: "Basic Statistics and Probability Theory", grade: "3.75/4.00" },
    { name: "Electrical Circuit - I", grade: "3.50/4.00" },
    { name: "Basic Statistics and Probability Practical", grade: "3.50/4.00" },
    { name: "Electrical Circuit – II", grade: "2.75/4.00" },
    { name: "Calculus – I", grade: "3.25/4.00" },
    { name: "Digital Electronics Theory", grade: "2.50/4.00" },
    { name: "Calculus – II", grade: "3.00/4.00" },
    { name: "Digital Electronics Practical", grade: "3.25/4.00" },
    { name: "Computer Programming", grade: "2.50/4.00" },
    { name: "Digital Signal Processing", grade: "3.00/4.00" },
    { name: "Microcontroller Based System Design", grade: "3.00/4.00" },
    { name: "Communication Theory", grade: "2.50/4.00" },
    { name: "Mobile Cellular Communication", grade: "3.50/4.00" }
  ];

  const getGradeColor = (grade: string) => {
    const numericGrade = parseFloat(grade);
    if (numericGrade >= 3.5) return "text-green-600";
    if (numericGrade >= 3.0) return "text-blue-600";
    if (numericGrade >= 2.5) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Academic Performance
          </Badge>
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Relevant Coursework with Achieved Grade Points
          </h2>
        </div>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Course Performance Overview</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <span className="text-sm font-medium text-foreground">{course.name}</span>
                  <Badge variant="outline" className={`${getGradeColor(course.grade)} border-current`}>
                    {course.grade}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseGrades;