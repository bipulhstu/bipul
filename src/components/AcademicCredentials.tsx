import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Trophy, FileText, Calendar, ExternalLink } from "lucide-react";

import { useState } from "react";

const AcademicCredentials = () => {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const getPreviewUrl = (url: string) => {
    const match = url.match(/\/file\/d\/([^/]+)\/view/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };
  const education = [
    {
      degree: "M.Sc. (Engineering) in Computer Science and Engineering",
      degreeUrl: "https://hstu.ac.bd/cse/dept_cse",
      institution: "Hajee Mohammad Danesh Science and Technology University",
      institutionUrl: "https://hstu.ac.bd/",
      location: "Dinajpur, Bangladesh",
      period: "Expected July 2026",
      gpa: "3.85/4.00 (First Semester)",
      supervisor: "Dr. Ashis Kumar Mandal",
      supervisorUrl: "https://hstu.ac.bd/teacher/ashis",
      transcriptUrl: "https://drive.google.com/file/d/1-jwXHCTUTpoukCz29jHBGy8Uusk5-teB/view?usp=sharing",
      status: "ongoing"
    },
    {
      degree: "B.Sc. (Engineering) in Electrical and Electronic Engineering",
      degreeUrl: "https://hstu.ac.bd/cse/eee",
      institution: "Hajee Mohammad Danesh Science and Technology University",
      institutionUrl: "https://hstu.ac.bd/",
      location: "Dinajpur, Bangladesh",
      period: "December 2019",
      gpa: "2.92/4.00",
      transcriptUrl: "https://drive.google.com/file/d/1-jwXHCTUTpoukCz29jHBGy8Uusk5-teB/view?usp=sharing",
      status: "completed"
    }
  ];

  const testScores = [
    {
      test: "Graduate Record Examination (GRE) - 1st Attempt",
      date: "15th February, 2024",
      scores: [
        { label: "Total", value: "305" },
        { label: "Quantitative", value: "159" },
        { label: "Verbal", value: "146" },
        { label: "Analytical Writing", value: "3.5" }
      ],
      url: "https://drive.google.com/file/d/10epztVdHTQjoww5Z8AHhP5e3qhDUwvDZ/view?usp=sharing"
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
      ],
      url: "https://certs.duolingo.com/4ff16a11f475598597fac844cb75f186"
    },

    {
      test: "Graduate Record Examination (GRE) - 2nd Attempt",
      date: "Determined to sit within December 2025",
      scores: [
        { label: "Total", value: "-" },
        { label: "Quantitative", value: "-" },
        { label: "Verbal", value: "-" },
        { label: "Analytical Writing", value: "-" }
      ]
    },
    {
      test: "Test of English as a Foreign Language (TOEFL)",
      date: "Determined to sit within December 2025",
      scores: [
        { label: "Overall", value: "-" },
        { label: "Listening", value: "-" },
        { label: "Speaking", value: "-" },
        { label: "Reading", value: "-" },
        { label: "Writing", value: "-" }
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
                        {edu.degreeUrl ? (
                          <a href={edu.degreeUrl} target="_blank" rel="noreferrer noopener" className="hover:underline">
                            {edu.degree}
                          </a>
                        ) : (
                          edu.degree
                        )}
                      </CardTitle>
                      <p className="text-primary font-medium mb-1">
                        {edu.institutionUrl ? (
                          <a href={edu.institutionUrl} target="_blank" rel="noreferrer noopener" className="hover:underline">
                            {edu.institution}
                          </a>
                        ) : (
                          edu.institution
                        )}
                      </p>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge className={edu.status === 'ongoing' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-green-100 text-green-800 border-green-200'}>
                        {edu.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      {edu.transcriptUrl ? (
                        <a href={edu.transcriptUrl} target="_blank" rel="noreferrer noopener" className="text-sm font-medium hover:underline">
                          CGPA: {edu.gpa}
                        </a>
                      ) : (
                        <span className="text-sm font-medium">CGPA: {edu.gpa}</span>
                      )}
                    </div>
                    {edu.supervisor && (
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        {edu.supervisorUrl ? (
                          <a href={edu.supervisorUrl} target="_blank" rel="noreferrer noopener" className="text-sm hover:underline">
                            Supervisor: {edu.supervisor}
                          </a>
                        ) : (
                          <span className="text-sm">Supervisor: {edu.supervisor}</span>
                        )}
                      </div>
                    )}
                    <div className="ml-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => setLoadingIndex(index)} variant="research" size="sm" className="group">
                            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Course Curriculum
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                          <DialogHeader>
                            <DialogTitle className="text-center">{edu.degree}</DialogTitle>
                            <p className="text-sm text-muted-foreground text-center">{edu.institution}</p>
                          </DialogHeader>
                          <div className="mt-4 relative">
                            {loadingIndex === index && (
                              <div className="absolute inset-0 flex items-center justify-center bg-muted/30 rounded-lg">
                                <svg className="animate-spin h-6 w-6 text-muted-foreground" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                              </div>
                            )}
                            <iframe
                              src={getPreviewUrl(index === 0 ? "https://www.hstu.ac.bd/uploads/curriculam/CourseLayoutMSc_CSE.pdf" : "https://hstu.ac.bd/uploads/curriculam/eee/1.pdf")}
                              className="w-full h-[600px] border-0 rounded-lg"
                              title={`${edu.degree} Curriculum`}
                              onLoad={() => setLoadingIndex(null)}
                            />
                          </div>
                          <div className="flex justify-center mt-4">
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={index === 0 ? "https://www.hstu.ac.bd/uploads/curriculam/CourseLayoutMSc_CSE.pdf" : "https://hstu.ac.bd/uploads/curriculam/eee/1.pdf"}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Open in New Tab
                              </a>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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
              <Card key={index} className="academic-card group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {test.test}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        {test.date}
                      </div>
                    </div>
                    {test.url && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => setLoadingIndex(index)} variant="research" size="sm" className="group">
                            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                          <DialogHeader>
                            <DialogTitle className="text-center">{test.test}</DialogTitle>
                            <p className="text-sm text-muted-foreground text-center">{test.date}</p>
                          </DialogHeader>
                          <div className="mt-4 relative">
                            {loadingIndex === index && (
                              <div className="absolute inset-0 flex items-center justify-center bg-muted/30 rounded-lg">
                                <svg className="animate-spin h-6 w-6 text-muted-foreground" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                              </div>
                            )}
                            <iframe
                              src={getPreviewUrl(test.url)}
                              className="w-full h-[600px] border-0 rounded-lg"
                              title={`${test.test} Certificate`}
                              onLoad={() => setLoadingIndex(null)}
                            />
                          </div>
                          <div className="flex justify-center mt-4">
                            <Button asChild variant="outline" size="sm">
                              <a href={test.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                Open in New Tab
                              </a>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
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