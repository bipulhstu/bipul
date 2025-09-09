import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award } from "lucide-react";

const RelevantCoursework = () => {
  const certifications = [
    "Machine Learning Scientist in Python - DataCamp",
    "Data Scientist Certification",
    "Associate Data Scientist Certification",
    "AI Fundamentals",
    "Data Manipulation in Python",
    "Mathematics for Machine Learning and Data Science",
    "Python 101 for Data Science provided by IBM",
    "AI for Everyone (DeepLearning.AI)",
    "IBM Machine Learning Professional Certificate",
    "Python Programming Fundamentals (13 Hours)",
    "Java Fundamentals (16 Hours)"
  ];

  const courses = [
    "Algorithms 1 & 2 (Princeton University)",
    "Discrete Mathematics (Shanghai Jiao Tong University)",
    "Data Structures and Algorithms Through C in Depth",
    "Computer Organization and Architecture",
    "Principles of Computer Operating Systems",
    "Theory of Computation",
    "Compiler Design",
    "Digital Logic Design",
    "Programming for Everybody (University of Michigan)",
    "Object Oriented Programming in Java (University of California, San Diego)",
    "HarvardX: CS50's Introduction to Computer Science"
  ];

  return (
    <section id="coursework" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Education
          </Badge>
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Relevant Coursework & Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="academic-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Coursework */}
          <Card className="academic-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Relevant Coursework</h3>
              </div>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RelevantCoursework;