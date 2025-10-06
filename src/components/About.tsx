import { Users, TrendingDown, AlertCircle, Activity } from "lucide-react";

const highlights = [
  { icon: Users, label: "3+ years", sublabel: "Professional experience" },
  { icon: TrendingDown, label: "22% waste", sublabel: "Operational reduction (£85K+)" },
  { icon: AlertCircle, label: "20% reduction", sublabel: "False positives" },
  { icon: Activity, label: "10K+ events", sublabel: "Real-time processing weekly" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="typ-section mb-2">
          <span className="typ-kicker">01.</span> About Me
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="typ-body text-muted-foreground">
              I'm a Data Scientist passionate about building resilient, ethically aligned AI systems
              that drive measurable impact. With expertise spanning machine learning, data
              engineering, and cloud automation, I've designed and deployed scalable AI pipelines
              handling over 10,000 real-time events daily.
            </p>
            <p className="typ-body text-muted-foreground">
              My work has reduced operational waste and false positives across enterprise systems,
              delivering tangible business value while maintaining high ethical standards in AI
              development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-lg p-6 card-glow"
              >
                <item.icon className="text-primary mb-3" size={28} />
                <p className="typ-title">{item.label}</p>
                <p className="typ-meta mt-1">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
