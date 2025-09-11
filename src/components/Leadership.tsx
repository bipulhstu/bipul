import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Calendar } from "lucide-react";

const Leadership = () => {
  const activities = [
    {
      role: "App Development Team Leader",
      period: "April 2023 – Dec 2024",
      type: "leadership"
    },
    {
      role: "IEEE HSTU Student Branch: Member",
      period: "2017",
      type: "membership"
    },
    {
      role: "Skill Development Club Of HSTU: Executive Member",
      period: "2017–2018",
      type: "leadership"
    },
    {
      role: "EEE CLUB of HSTU: Member",
      period: "2015–present",
      type: "membership"
    },
    {
      role: "Prothom-Alo Bondhushava, HSTU: General Secretary",
      period: "2019",
      type: "leadership"
    },
    {
      role: "Prothom-Alo Bondhushava, HSTU: Member",
      period: "2018",
      type: "membership"
    },
    {
      role: "HSTU-OSN: IT Secretary",
      period: "2016-2017",
      type: "leadership"
    },
    {
      role: "Programmers Arena: Program Manager",
      period: "2016-2018",
      type: "leadership"
    }
  ];

  const getIcon = (type: string) => {
    return type === "leadership" ? Users : Award;
  };

  const getBadgeVariant = (type: string) => {
    return type === "leadership" ? "default" : "secondary";
  };

  return (
    <section id="leadership" className="py-10 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          {/**
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Activities
          </Badge>
          **/}
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Leadership and Voluntary Activities
          </h2>
        </div>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="grid gap-4">
              {activities.map((activity, index) => {
                const IconComponent = getIcon(activity.type);
                return (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{activity.role}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{activity.period}</span>
                      </div>
                      <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                        {activity.type === "leadership" ? "Leadership" : "Membership"}
                      </Badge>
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

export default Leadership;