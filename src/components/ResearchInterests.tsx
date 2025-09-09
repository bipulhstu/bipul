import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, MessageSquare, Database, BarChart3, Cpu, Search, Network } from "lucide-react";

const ResearchInterests = () => {
  const interests = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Developing intelligent systems and algorithms for complex problem-solving and decision-making"
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Pattern recognition, predictive modeling, and algorithm optimization for diverse applications"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image processing, object detection, and visual understanding systems"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Text analysis, language understanding, and conversational AI systems"
    },
    {
      icon: Database,
      title: "Data Mining & Big Data",
      description: "Extracting insights from large-scale datasets and developing scalable analytics solutions"
    },
    {
      icon: BarChart3,
      title: "Data Science & Visualization",
      description: "Statistical analysis, data visualization, and evidence-based decision making"
    },
    {
      icon: Network,
      title: "Deep Learning",
      description: "Neural networks, representation learning, and advanced deep learning architectures"
    },
    {
      icon: Search,
      title: "Large Language Models",
      description: "Transformer architectures, fine-tuning strategies, and LLM applications"
    }
  ];

  return (
    <section id="research-interests" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Research Focus
          </Badge>
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Research Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My research spans across multiple domains of AI and Computer Science, with a focus on developing 
            innovative solutions that bridge theoretical foundations with practical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <Card key={index} className="academic-card research-highlight group cursor-pointer border-0 bg-white/50 hover:bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;