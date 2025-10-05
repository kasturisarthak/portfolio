import { Code, Cloud, Database, BarChart3, Box, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "SQL (Redshift, PostgreSQL, NoSQL)", "R"],
  },
  {
    icon: Cloud,
    title: "Cloud & Big Data",
    skills: ["Azure", "GCP", "Databricks", "PySpark", "dbt", "Kafka"],
  },
  {
    icon: Database,
    title: "ML Frameworks",
    skills: ["Transformers", "PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    skills: ["Tableau", "Power BI", "Looker Studio", "Streamlit"],
  },
  {
    icon: Box,
    title: "MLOps & CI/CD",
    skills: ["Docker", "Kubernetes", "Azure DevOps", "GitLab"],
  },
];

export const Skills = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary font-mono text-xl">04.</span> Skills
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
