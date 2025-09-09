import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Wrench, PieChart, Smartphone } from "lucide-react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Data Science",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "Hugging Face", level: 80 },
        { name: "OpenCV", level: 85 },
        { name: "spaCy", level: 75 }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "Kotlin", level: 75 },
        { name: "Swift", level: 70 },
        { name: "Dart", level: 70 }
      ]
    },
    {
      icon: PieChart,
      title: "Data Analysis",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: [
        { name: "NumPy", level: 95 },
        { name: "Pandas", level: 95 },
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 85 },
        { name: "SciPy", level: 80 },
        { name: "PySpark", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Database & Big Data",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Hadoop", level: 70 },
        { name: "Spark", level: 75 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      skills: [
        { name: "Android (Java/Kotlin)", level: 90 },
        { name: "iOS (Swift)", level: 80 },
        { name: "Flutter", level: 85 },
        { name: "React Native", level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "text-red-600",
      bgColor: "bg-red-50",
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "Google Colab", level: 90 },
        { name: "Django", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "LaTeX", level: 85 }
      ]
    }
  ];

  return (
    <section id="technical-skills" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical proficiency across AI/ML frameworks, programming languages, 
            and development tools essential for cutting-edge research and application development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="academic-card group border-0 bg-white/70 hover:bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <IconComponent className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/50"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;