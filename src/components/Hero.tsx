import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile-pic.jpeg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="typ-kicker">Hi, my name is</p>
            <h1 className="typ-section">Sarthak Kasturi</h1>
            <h2 className="typ-card-title text-muted-foreground">
              Data Scientist
            </h2>
            <p className="typ-body text-muted-foreground max-w-xl">
            A mechanical engineer who accidentally fell in love with data. 
            What began as tweaking a few Python scripts at work spiraled into full-blown AI experiments, 
            and now I build systems that help humans and machines collaborate a little more smoothly every day.
             I still love tinkering — only now my tools are transformers, not torque wrenches.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/kasturisarthak" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/sarthakkasturi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:kasturi.sarthak1@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="Sarthak Kasturi" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
