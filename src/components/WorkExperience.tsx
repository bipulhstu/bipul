import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer (Android & iOS) – Team Leader",
      company: "Walton Digi-Tech Industries Ltd, Dhaka, Bangladesh",
      period: "Mar 2022 – Dec 2024",
      responsibilities: [
        "Led development of cross-platform apps, including Bench Educational App & HRMS, for internal use and clients.",
        "Built IoT-based Android apps for Walton Tick Smart Watch and FitPro Smart Weight Scale, enabling real-time device communication and data analytics.",
        "Managed app lifecycle, REST API integration, cloud sync, and mentored junior developers."
      ]
    },
    {
      title: "Android Application Developer",
      company: "Hovata Technologies, Dhaka, Bangladesh",
      period: "Jan 2020 – Feb 2022",
      responsibilities: [
        "Developed IoT-based Android apps including Digital Petrol Pump (Petrol ERP & POS), Smart Parking Management System (Hovata Parking), and Smart Wallet Management App (Linn Books).",
        "Implemented real-time device communication, secure transactions, and cloud integration for digital solutions."
      ]
    }
  ];

  return (
    <section id="work-experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Work Experience
          </Badge>
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
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;