import { Award, ChevronRight } from "lucide-react";

const certifications = [
  "CFA Investment Foundations Certificate",
  "Azure Data Engineer (Ongoing)",
  "McKinsey Forward Program",
  "Tableau Desktop Specialist",
  "Applied Data Science Lab",
  "Introduction to ESG and Sustainable Finance (Bloomberg)",
];

export const Certifications = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="typ-section mb-2">
          <span className="typ-kicker">06.</span> Certifications
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                <Award className="text-primary" size={20} />
              </div>
              <p className="typ-body text-foreground">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
