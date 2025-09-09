import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Eye, MessageSquare } from "lucide-react";

const ResearchProjects = () => {
  const projects = [
    {
      title: "Handwritten Digit & Bengali Character Recognition",
      subtitle: "Independent Research",
      icon: Eye,
      description: [
        "Built CNN architectures in PyTorch to classify Bengali handwritten digits (MNIST) and characters (EMNIST).",
        "Compared deep learning models with traditional ML approaches such as SVM and KNN.",
        "Achieved high accuracy while minimizing misclassification rates."
      ],
      technologies: ["Python", "PyTorch", "Scikit-learn", "NumPy"]
    },
    {
      title: "Real-Time Object Detection & Tracking",
      subtitle: "Computer Vision Research",
      icon: Code,
      description: [
        "Implemented YOLOv5 with OpenCV for real-time detection and tracking in video streams.",
        "Optimized inference speed for deployment on low-resource devices.",
        "Achieved stable tracking and high accuracy across multiple environments."
      ],
      technologies: ["Python", "OpenCV", "PyTorch"]
    },
    {
      title: "Sentiment Analysis of Social Media Data",
      subtitle: "NLP Research",
      icon: MessageSquare,
      description: [
        "Collected and preprocessed large-scale Twitter data using spaCy and NLTK.",
        "Trained BERT and RoBERTa transformer models for sentiment classification tasks.",
        "Achieved high F1-scores demonstrating strong generalization across topics."
      ],
      technologies: ["Python", "Hugging Face Transformers", "spaCy", "NLTK"]
    },
    {
      title: "COVID-19 Data Dashboard",
      subtitle: "Data Science Project",
      icon: Database,
      description: [
        "Collected and analyzed global COVID-19 datasets from WHO and Johns Hopkins repositories.",
        "Performed trend analysis using Pandas/SciPy and created interactive dashboards.",
        "Delivered visual insights for public health tracking and reporting."
      ],
      technologies: ["Python", "Pandas", "SciPy", "Plotly/Dash"]
    }
  ];

  return (
    <section id="research-projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Research Projects
          </Badge>
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Research Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="academic-card group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground italic">{project.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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

export default ResearchProjects;