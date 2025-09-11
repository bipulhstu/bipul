import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Building2, Calendar, ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const WorkExperience = () => {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const getDrivePreviewUrl = (url: string) => {
    // Converts Google Drive "view" links to embeddable preview links
    const match = url.match(/\/file\/d\/([^/]+)\/view/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const experiences = [
    {
      title: "Software Engineer (Android & iOS) – Team Leader",
      company: "Walton Digi-Tech Industries Ltd, Dhaka, Bangladesh",
      companyUrl: "https://www.waltondigitech.com",
      period: "Mar 2022 – Dec 2024",
      certificateUrl: "https://drive.google.com/file/d/1l5omEGS04I6a0kmKS9oisGfHtNjZOCpU/view?usp=sharing", // Add Google Drive link here when available
      responsibilities: [
        "Led development of cross-platform apps, including Bench Educational App & HRMS, for internal use and clients.",
        "Built IoT-based Android apps for Walton Tick Smart Watch and FitPro Smart Weight Scale, enabling real-time device communication and data analytics.",
        "Managed app lifecycle, REST API integration, cloud sync, and mentored junior developers."
      ]
    },
    {
      title: "Android Application Developer",
      company: "Hovata Technologies, Dhaka, Bangladesh",
      companyUrl: "https://hovata.com",
      period: "Jan 2020 – Feb 2022",
      certificateUrl: "https://drive.google.com/file/d/1-w5ickLgNdv2Q7xGK2T4GIQ7aBrCIBN1/view", // Add Google Drive link here when available
      responsibilities: [
        "Developed IoT-based Android apps including Digital Petrol Pump (Petrol ERP & POS), Smart Parking Management System (Hovata Parking), and Smart Wallet Management App (Linn Books).",
        "Implemented real-time device communication, secure transactions, and cloud integration for digital solutions."
      ]
    }
  ];

  return (
    <section id="work-experience" className="pt-10 pb-8 px-4 scroll-mt-16 md:scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          {/**
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Work Experience
          </Badge>
          **/}
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="academic-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-primary hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                {exp.certificateUrl && (
                  <div className="mt-4 flex justify-end">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setLoadingIndex(index)} variant="research" size="sm" className="group">
                          <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Experience Certificate
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                        <DialogHeader>
                          <DialogTitle className="text-center">{exp.title}</DialogTitle>
                          <p className="text-sm text-muted-foreground text-center">{exp.company}</p>
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
                            src={getDrivePreviewUrl(exp.certificateUrl)}
                            className="w-full h-[600px] border-0 rounded-lg"
                            title={`${exp.title} Certificate`}
                            onLoad={() => setLoadingIndex(null)}
                          />
                        </div>
                        <div className="flex justify-center mt-4">
                          <Button asChild variant="outline" size="sm">
                            <a 
                              href={exp.certificateUrl}
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;