import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, FileText, Calendar } from "lucide-react";

const AcademicCredentials = () => {
  const education = [
    {
      degree: "M.Sc. (Engineering) in Computer Science and Engineering",
      institution: "Hajee Mohammad Danesh Science and Technology University",
      location: "Dinajpur, Bangladesh",
      period: "Expected July 2026",
      gpa: "3.87/4.00 (First Semester)",
      supervisor: "Dr. Ashis Kumar Mandal",
      status: "ongoing"
    },
    {
      degree: "B.Sc. (Engineering) in Electrical and Electronic Engineering",
      institution: "Hajee Mohammad Danesh Science and Technology University",
      location: "Dinajpur, Bangladesh",
      period: "December 2019",
      gpa: "2.92/4.00",
      status: "completed"
    }
  ];

  const testScores = [
    {
      test: "Graduate Record Examination (GRE)",
      date: "15th February, 2024",
      scores: [
        { label: "Total", value: "305" },
        { label: "Quantitative", value: "159" },
        { label: "Verbal", value: "146" },
        { label: "Analytical Writing", value: "3.5" }
      ]
    },
    {
      test: "Duolingo English Test (DET)",
      date: "13th January, 2024",
      scores: [
        { label: "Overall", value: "120" },
        { label: "Literacy", value: "115" },
        { label: "Comprehension", value: "135" },
        { label: "Conversation", value: "110" },
        { label: "Production", value: "95" }
      ]
    }
  ];

  return (
    <section id="academic-credentials" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Academic Background
          </Badge>
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Academic Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strong academic foundation with advanced degrees in engineering and standardized test achievements 
            demonstrating readiness for graduate studies in the United States.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="academic-card group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge className={edu.status === 'ongoing' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-green-100 text-green-800 border-green-200'}>
                        {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">CGPA: {edu.gpa}</span>
                    </div>
                    {edu.supervisor && (
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm">Supervisor: {edu.supervisor}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Test Scores */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Standardized Test Scores
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testScores.map((test, index) => (
              <Card key={index} className="academic-card group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {test.test}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {test.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {test.scores.map((score, scoreIndex) => (
                      <div key={scoreIndex} className="flex justify-between items-center py-2 px-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">{score.label}</span>
                        <span className="text-sm font-bold text-primary">{score.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCredentials;