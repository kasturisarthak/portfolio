import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MSc Data Science",
    institution: "University of Bristol",
    period: "2024 – 2025",
    grade: "Distinction (expected)",
    courses: "Visual and Text Analytics, Big Data Engineering, Statistics, Deep Learning",
  },
  {
    degree: "B.E. Mechanical Engineering",
    institution: "Punjab Engineering College",
    period: "2018 – 2022",
    grade: "Distinction",
    courses: "Certificate of Excellence for Allround Achievements",
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary font-mono text-xl">03.</span> Education
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                  <p className="text-sm text-muted-foreground">{edu.grade}</p>
                  <p className="text-sm text-muted-foreground mt-3">{edu.courses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
