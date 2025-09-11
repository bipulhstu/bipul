import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Calendar, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "A Comparative Machine Learning Study on July Revolution in Bangladesh 2024",
      authors: ["Md. Bipul Islam", "Dr. Ashis Kumar Mandal", "Dino Nath Roy"],
      conference: "27th International Conference on Computer and Information Technology (ICCIT)",
      year: "2024",
      type: "Conference Paper",
      status: "Published"
    },
    {
      title: "A Comparative Machine Learning Study on July Revolution in Bangladesh 2024",
      authors: ["Md. Bipul Islam", "Abdur Rakib", "Md. Hafizul Islam"],
      conference: "27th International Conference on Computer and Information Technology (ICCIT)",
      year: "2024",
      type: "Conference Paper",
      status: "Published"
    },
    {
      title: "Smart IoT Framework for Real-Time River Pollution Tracking and Flood Forecasting in Bangladesh",
      authors: ["M. Bipul Islam", "M. Azad", "M. Ashik-Uz-Zaman"],
      conference: "International Conference on Innovation in Engineering and Technology (ICIET)",
      year: "2023",
      type: "IEEE Conference",
      status: "Published"
    }
  ];

  return (
    <section id="publications" className="pt-10 pb-8 px-4 scroll-mt-16 md:scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          {/**
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Publications
          </Badge>
          **/}
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Research Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Peer-reviewed publications demonstrating contributions to artificial intelligence, 
            machine learning, and computational solutions for real-world problems.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="academic-card group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{pub.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge variant="secondary" className="text-xs">
                      {pub.type}
                    </Badge>
                    <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
                      {pub.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span className="italic">{pub.conference}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    View Paper
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;