import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const ResearchExperience = () => {
  return (
    <section id="research-experience" className="pt-10 pb-8 px-4 scroll-mt-16 md:scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          {/**
          <Badge className="mb-4 text-primary bg-primary/10 border-primary/20">
            Research Experience
          </Badge>
          **/}
          <h2 className="text-4xl font-bold mb-6 academic-gradient-text">
            Research Experience
          </h2>
        </div>

        <Card className="academic-card">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl mb-2">Research Assistant</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4" />
                  <span>Computer Science Lab, HSTU</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Jan 2025 - Present</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Conducting research in AI, Machine Learning, and Deep Learning, focusing on representation learning and transfer learning across diverse datasets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Evaluating pre-trained models (Kinetics-400, MiT, LLMs) using strategies such as full fine-tuning, linear probing, and few-shot learning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Applying methods in Computer Vision and NLP with PyTorch, TensorFlow, Hugging Face, spaCy, and PySpark for large-scale experiments and analysis.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchExperience;