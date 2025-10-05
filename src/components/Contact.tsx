import { useState } from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">
          <span className="text-primary font-mono text-xl">07.</span> Get In Touch
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8 mx-auto"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-muted-foreground leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. Whether you
              have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:kasturi.sarthak1@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>kasturi.sarthak1@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto">
              <Download size={18} className="mr-2" />
              Download CV
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border"
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
