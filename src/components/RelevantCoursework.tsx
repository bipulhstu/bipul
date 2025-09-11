import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, Award, GraduationCap, ExternalLink, Eye } from "lucide-react";
import javaCert from "@/assets/java.jpg";
import pythonCert from "@/assets/python.jpg";
import dsaCert from "@/assets/dsa.jpg";

import { useState } from "react";

const RelevantCoursework = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const allItems = [
    // Certifications
    { 
      title: "Machine Learning Scientist in Python (85 Hours) ", 
      type: "Certification", 
      provider: "DataCamp",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://app.datacamp.com/learn/career-tracks/machine-learning-scientist-with-python"
    },
    { 
      title: "Data Scientist in Python (26 Hours) ", 
      type: "Certification", 
      provider: "DataCamp",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://app.datacamp.com/learn/career-tracks/data-scientist-in-python"
    },
    { 
      title: "Associate Data Scientist in Python (90 Hours) ", 
      type: "Certification", 
      provider: "DataCamp",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://app.datacamp.com/learn/career-tracks/associate-data-scientist-in-python"
    },
    { 
      title: "AI Fundamentals (10 Hours)", 
      type: "Certification", 
      provider: "DataCamp",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://app.datacamp.com/learn/skill-tracks/ai-fundamentals"
    },
    { 
      title: "Data Manipulation in Python (16 Hours)", 
      type: "Certification", 
      provider: "DataCamp",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://example.com/certificate/data-manipulation-python"
    },
    { 
      title: "Mathematics for Machine Learning and Data Science", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science"
    },
    { 
      title: "Python 101 for Data Science provided by IBM", 
      type: "Certification", 
      provider: "IBM",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://courses.cognitiveclass.ai/certificates/72380d981e2242b898ac23833f0f5591"
    },
    { 
      title: "AI for Everyone (DeepLearning.AI)", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/learn/ai-for-everyone"
    },
    { 
      title: "IBM Machine Learning Professional Certificate", 
      type: "Certification", 
      provider: "IBM",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/professional-certificates/ibm-machine-learning"
    },
    { 
      title: "Python Programming Fundamentals (13 Hours)", 
      type: "Certification", 
      provider: "Professional",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/aa0c04b09add8d80009c3e98f824f7ace710bcc9",
      image: pythonCert
    },
    { 
      title: "Java Fundamentals (16 Hours)", 
      type: "Certification", 
      provider: "Professional",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/fc093e3233a3369c38e6152a498cb75d09521ebc",
      image: javaCert
    },
    
    // Coursework
    { 
      title: "Algorithms 1 (Princeton University)", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/learn/algorithms-part1"
    },
    { 
      title: "Algorithms 2 (Princeton University)", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/learn/algorithms-part2"
    },
    { 
      title: "Discrete Mathematics (Shanghai Jiao Tong University)", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/learn/discrete-mathematics"
    },
    { 
      title: "Data Structures and Algorithms Through C in Depth", 
      type: "Certification", 
      provider: "Udemy",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.udemy.com/course/data-structures-and-algorithms-in-c/",
      image: dsaCert
    },
    { 
      title: "Computer Organization and Architecture", 
      type: "Coursework", 
      provider: "Academic",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "CPU architecture, pipelining, and instruction sets",
        "Memory hierarchy: cache, main memory, virtual memory",
        "I/O systems and performance",
        "Assembly and machine-level representation"
      ],
      playlistUrl: "https://www.youtube.com/playlist?list=PL59E5B57A04EAE09C"
    },
    { 
      title: "Principles of Computer Operating Systems", 
      type: "Coursework", 
      provider: "Academic",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Processes, threads, and CPU scheduling",
        "Concurrency, synchronization, and deadlocks",
        "Memory management and paging",
        "File systems and storage"
      ],
      playlistUrl: "https://www.youtube.com/playlist?list=PLA5E8028C991AC770"
    },
    { 
      title: "Theory of Computation", 
      type: "Coursework", 
      provider: "Academic",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Finite automata and regular languages",
        "Context-free grammars and pushdown automata",
        "Turing machines and decidability",
        "Complexity classes: P, NP, NP-Completeness"
      ],
      playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev"
    },
    { 
      title: "Compiler Design", 
      type: "Coursework", 
      provider: "Academic",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Lexical analysis and parsing",
        "Syntax-directed translation and semantic analysis",
        "Intermediate code generation and optimization",
        "Code generation and runtime environments"
      ],
      playlistUrl: "https://www.youtube.com/playlist?list=PL3_ATDyQLqPidPjIs1Zh9opdanOP3mgKQ"
    },
    { 
      title: "Digital Logic Design", 
      type: "Coursework", 
      provider: "Academic",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Boolean algebra and logic simplification",
        "Combinational circuits and Karnaugh maps",
        "Sequential circuits: flip-flops, counters, registers",
        "FSM design and timing analysis"
      ],
      playlistUrl: "https://www.youtube.com/playlist?list=PL285AEB5731791842"
    },
    { 
      title: "Programming for Everybody (University of Michigan)", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/learn/python"
    },
    { 
      title: "Object Oriented Programming in Java (University of California, San Diego)", 
      type: "Certification", 
      provider: "Coursera",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.coursera.org/learn/object-oriented-java"
    },
    { 
      title: "HarvardX: CS50's Introduction to Computer Science", 
      type: "Certification", 
      provider: "edX",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      certificateUrl: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science"
    }
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

        <Card className="academic-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Education & Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {allItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className={`p-2 rounded-lg ${item.bgColor} flex-shrink-0`}>
                      <IconComponent className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        {(item.image || item.certificateUrl || item.details) && (
                          <Dialog>
                            <DialogTrigger asChild>
                              {item.type === "Coursework" ? (
                                <Button variant="research" size="sm" className="group">
                                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                  View Details
                                </Button>
                              ) : (
                                <Button variant="research" size="sm" className="group">
                                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                  View Certificate
                                </Button>
                              )}
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                              <DialogHeader>
                                <DialogTitle className="text-center">{item.title}</DialogTitle>
                                <p className="text-sm text-muted-foreground text-center">{item.provider}</p>
                              </DialogHeader>
                              <div className="mt-4">
                                {item.type === "Coursework" && item.details ? (
                                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    {item.details.map((d: string, i: number) => (
                                      <li key={i}>{d}</li>
                                    ))}
                                  </ul>
                                ) : item.image ? (
                                  <img
                                    src={item.image}
                                    alt={`${item.title} Certificate`}
                                    className="w-full max-h-[70vh] object-contain rounded-lg"
                                  />
                                ) : item.certificateUrl ? (
                                  <iframe
                                    src={item.certificateUrl}
                                    className="w-full h-[600px] border-0 rounded-lg"
                                    title={`${item.title} Certificate`}
                                  />
                                ) : null}
                              </div>
                              <div className="flex justify-center mt-4">
                                <Button asChild variant="outline" size="sm">
                                  <a 
                                    href={item.type === "Coursework" ? (item.playlistUrl || "#") : (item.certificateUrl || item.image || "#")} 
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
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.provider}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RelevantCoursework;