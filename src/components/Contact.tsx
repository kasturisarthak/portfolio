import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="typ-section mb-2 text-center">
          <span className="typ-kicker">07.</span> Contact
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8 mx-auto"></div>

        <div className="max-w-xl mx-auto space-y-6 animate-fade-in text-center">
          <p className="typ-body text-muted-foreground">
            I'm currently looking for new opportunities and my inbox is always open. Whether you
            have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:kasturi.sarthak1@gmail.com"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span>kasturi.sarthak1@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span>GitHub Profile</span>
            </a>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto mt-6" asChild>
            <a href="https://drive.google.com/file/d/1mlqvLlcSCgmQ79_FkJk1nnHlhfACt6Ao/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
