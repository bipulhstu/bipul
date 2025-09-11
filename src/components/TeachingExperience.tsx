import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const TeachingExperience = () => {
  return (
    <section id="teaching-experience" className="pt-10 pb-8 px-4 scroll-mt-16 md:scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          {/**
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Teaching Experience
          </Badge>
          **/}
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Teaching Experience
          </h2>
        </div>

        <Card className="academic-card">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl mb-2">Private Instructor</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>Independent Teaching</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Jan 2023 - Present</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Mentor students individually and teach Computer Programming (C, C++, Java, Python) to undergraduate and high school level students.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>I teach professional Android & iOS app development with projects and help my students to secure jobs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>I design and deliver coursework on Data Structures and Algorithms, focusing on problem-solving and optimization techniques.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>I provide hands-on training in Python for Data Science and Machine Learning, including NumPy, Pandas, Scikit-learn, and visualization libraries.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeachingExperience;