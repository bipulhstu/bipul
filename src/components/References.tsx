import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Building2, Linkedin, ExternalLink } from "lucide-react";

const References = () => {
  const references = [
    {
      name: "Md. Shoriful Islam",
      title: "Software Engineer (Android)",
      department: "Software Development Section, Department: ICT",
      organization: "Walton Digi-Tech Industries Ltd",
      location: "Dhaka, Bangladesh",
      phone: "+880 1608 985 600",
      email: "wdc.com.its6@waltonbd.com",
      linkedin: "https://www.linkedin.com/in/sharifulbsc/",
      website: undefined
    },
    {
      name: "Dr. Md. Dulal Haque",
      title: "Professor",
      department: "Department of Electronics and Communication Engineering",
      organization: "Hajee Mohammad Danesh Science and Technology University",
      location: "Dinajpur, Bangladesh",
      phone: "+880 1712 534 968",
      email: "dhaque@hstu.ac.bd",
      linkedin: "https://www.linkedin.com/in/dr-md-dulal-haque-49908b232/",
      website: "https://hstu.ac.bd/teacher/dulal"
    },
    {
      name: "Dr. Ashis Kumar Mandal",
      title: "Professor",
      department: "Department of Computer Science and Engineering",
      organization: "Hajee Mohammad Danesh Science and Technology University",
      location: "Dinajpur, Bangladesh",
      phone: "+880 1912 136 021",
      email: "ashis@hstu.ac.bd",
      linkedin: "https://www.linkedin.com/in/ashis-kumar-mandal-phd-1b995945/",
      website: "https://hstu.ac.bd/teacher/ashis"
    },
    {
      name: "Md. Faruk Kibria",
      title: "Professor",
      department: "Department of Electrical and Electronic Engineering (EEE)",
      organization: "Hajee Mohammad Danesh Science and Technology University",
      location: "Dinajpur, Bangladesh",
      phone: "+880 1714 942 185",
      email: "mfkibria.eee@hstu.ac.bd",
      linkedin: "https://www.linkedin.com/in/md-faruk-kibria-9a7896b6/",
      website: "https://hstu.ac.bd/teacher/kibria"
    }
  ];

  return (
    <section id="references" className="pt-10 pb-8 px-4 scroll-mt-16 md:scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          {/**
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            References
          </Badge>
          **/}
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            References
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <Card key={index} className="academic-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{ref.name}</CardTitle>
                <p className="text-lg font-medium text-muted-foreground">{ref.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{ref.department}</p>
                    <p className="text-sm text-muted-foreground">{ref.organization}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{ref.location}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-foreground font-mono">{ref.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-sm text-primary font-mono hover:underline"
                  >
                    {ref.email}
                  </a>
                </div>

                {(ref.linkedin || ref.website) && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {ref.linkedin && (
                      <Button asChild variant="research" size="sm" className="group">
                        <a href={ref.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {ref.website && (
                      <Button asChild variant="research" size="sm" className="group">
                        <a href={ref.website} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Website
                        </a>
                      </Button>
                    )}
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

export default References;