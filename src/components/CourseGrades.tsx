import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink } from "lucide-react";

const CourseGrades = () => {
  const courses = [
    { code: "MAP 213", name: "Linear Algebra", grade: "3.00/4.00" },
    { code: "ECE 215", name: "Signal and Systems", grade: "3.75/4.00" },
    { code: "STT 223", name: "Basic Statistics and Probability Theory", grade: "3.75/4.00" },
    { code: "EEE 105", name: "Electrical Circuit - I", grade: "3.50/4.00" },
    { code: "STT 224", name: "Basic Statistics and Probability Practical", grade: "3.50/4.00" },
    { code: "EEE 107", name: "Electrical Circuit – II", grade: "2.75/4.00" },
    { code: "MAP 129", name: "Calculus – I", grade: "3.25/4.00" },
    { code: "EEE 309", name: "Digital Electronics Theory", grade: "2.50/4.00" },
    { code: "MAP 131", name: "Calculus – II", grade: "3.00/4.00" },
    { code: "EEE 310", name: "Digital Electronics Practical", grade: "3.25/4.00" },
    { code: "CSE 117", name: "Computer Programming", grade: "2.50/4.00" },
    { code: "ECE 353", name: "Digital Signal Processing", grade: "3.00/4.00" },
    { code: "EEE 407", name: "Microcontroller Based System Design", grade: "3.00/4.00" },
    { code: "ECE 351", name: "Communication Theory", grade: "2.50/4.00" },
    { code: "ECE 491", name: "Mobile Cellular Communication", grade: "3.50/4.00" }
  ];

  const mscLevel1Sem1 = [
    { code: "CSE 507", name: "Advanced Artifical Intelligence", grade: "3.75/4.00" },
    { code: "CSE 523", name: "Advanced Synthetic Pattern Recognition", grade: "3.75/4.00" },
    { code: "CSE 501", name: "Computer Arithmetic", grade: "4.00/4.00" },
    { code: "CSE 505", name: "Research Methodology", grade: "4.00/4.00" },
    { code: "CSE 503", name: "Advanced Database Systems", grade: "3.75/4.00" }
  ];

  const getGradeColor = (grade: string) => {
    const numericGrade = parseFloat(grade);
    if (numericGrade >= 3.5) return "text-green-600";
    if (numericGrade >= 3.0) return "text-blue-600";
    if (numericGrade >= 2.5) return "text-blue-600";
    // if (numericGrade >= 2.5) return "text-orange-600";
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
            
            {/* MSc Level 1 Semester 1 - shown at top */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-6 bg-primary rounded" />
                  <h4 className="text-lg font-semibold">MSc in CSE Semester 1 Courses with Achieved GPA</h4>
                </div>
                <Button asChild variant="research" size="sm" className="group">
                  <a href="https://drive.google.com/file/d/1-jwXHCTUTpoukCz29jHBGy8Uusk5-teB/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Transcripts
                  </a>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {mscLevel1Sem1.map((course, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-sm font-medium text-foreground">
                      <span className="text-muted-foreground mr-2 font-mono">{course.code}</span>
                      {course.name}
                    </span>
                    <Badge variant="outline" className={`${getGradeColor(course.grade)} border-current`}>
                      {course.grade}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Courses */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-6 bg-primary rounded" />
                  <h4 className="text-lg font-semibold">B.Sc. in EEE Courses with Achieved GPA</h4>
                </div>
                <Button asChild variant="research" size="sm" className="group">
                  <a href="https://drive.google.com/file/d/1-jwXHCTUTpoukCz29jHBGy8Uusk5-teB/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Transcripts
                  </a>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-sm font-medium text-foreground">
                      {course.code && (
                        <span className="text-muted-foreground mr-2 font-mono">{course.code}</span>
                      )}
                      {course.name}
                    </span>
                    <Badge variant="outline" className={`${getGradeColor(course.grade)} border-current`}>
                      {course.grade}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseGrades;