import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Science Project Leader",
    company: "180 Degrees Consulting Bristol",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Developed database management systems using Flask/MySQL, boosting efficiency and enabling Charity status",
      "Architected GCP + Airflow pipelines processing 10K+ weekly interactions",
      "Delivered Looker Studio dashboards increasing engagement by 40%",
      "Oversaw data science consultants and presented impact at UK Project Showcase",
    ],
    tags: ["Python", "Flask", "MySQL", "GCP", "Airflow", "Looker Studio"],
  },
  {
    title: "Associate Consultant",
    company: "Oracle Financial Services Software",
    period: "Jul 2022 – Jul 2024",
    description: [
      "Led end-to-end Oracle FLEXCUBE implementation for six business lines",
      "Reduced migration downtime 37%, increased reconciliation accuracy to 100%",
      "Built configurable Python/SQL migration utilities reducing query latency 40%",
      "Designed AML rule sets analysing 5M+ transactions to reduce false positives by 20%",
    ],
    tags: ["Python", "SQL", "Oracle FLEXCUBE", "ETL", "AML"],
  },
  {
    title: "Operations Insights Intern",
    company: "Fourth Partner Energy",
    period: "Jan 2021 – Jun 2021",
    description: [
      "Designed Power BI dashboards tracking £1M CAPEX for solar rollout",
      "Built Python/SQL ETL pipelines tracking 25+ KPIs; reduced slippage 10%",
      "Optimised vendor performance benchmarks for £85K/year savings",
    ],
    tags: ["Python", "SQL", "Power BI", "ETL", "Data Analysis"],
  },
  {
    title: "Data Analyst",
    company: "Punjab Eggs",
    period: "Jun 2019 – Dec 2019",
    description: [
      "Implemented risk-based supplier tiering; reduced defaults 17%",
      "Created seasonal Python models for cashflow simulation under volatility cycles",
    ],
    tags: ["Python", "Data Modeling", "Supply Chain", "Risk Analysis"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="typ-section mb-2">
          <span className="typ-kicker">02.</span> Experience
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Briefcase className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="typ-card-title">{exp.title}</h3>
                      <p className="text-primary font-semibold flex items-center text-xl md:text-2xl">
                        {exp.company}
                      </p>
                    </div>
                    <span className="typ-meta font-mono">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="typ-body text-muted-foreground flex gap-2">
                        <span className="text-primary shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
