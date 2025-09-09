import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  return (
    <section className="academic-hero min-h-[90vh] flex items-center justify-center py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profileImage}
                alt="Md. Bipul Islam - Academic Portrait"
                className="w-80 h-80 rounded-2xl object-cover shadow-elegant border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Research Scholar
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Md. Bipul Islam
            </h1>
            
            <p className="text-xl lg:text-2xl mb-6 text-white/90 font-light">
              M.Sc. in Computer Science & Engineering
            </p>
            
            <p className="text-lg mb-8 text-white/80 max-w-2xl leading-relaxed">
              Research Scholar specializing in Artificial Intelligence, Machine Learning, and Deep Learning. 
              Passionate about advancing the frontiers of Computer Vision, Natural Language Processing, 
              and Large Language Models through innovative research and practical applications.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Rangpur, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">bipulhstu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+880 1777 833 756</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="academic" size="lg" className="group">
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                View Research
              </Button>
              <Button variant="research" size="lg" className="group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;