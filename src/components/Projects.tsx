import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  
  {
    title: "Media Bias Detection Using Agentic AI",
    description: "LangChain-based automated pipeline for classifying news articles with sentiment and bias analysis.",
    details: [
      "Built LangChain pipeline classifying 200+ news articles daily",
      "Integrated Gemini API for reasoning with 85% accuracy on topic/lean/tone",
      "Created Streamlit dashboard for live sentiment tracking",
      "Implemented publisher comparison and bias visualization",
    ],
    tags: ["LangChain", "Gemini API", "Streamlit", "NLP", "Sentiment Analysis"],
    githubUrl: "",
    liveUrl: "https://github.com/kasturisarthak",
    featured: false,
  },
  {
    title: "GenAI-ESG Reporting and Compliance Checker",
    description: "Automated ESG disclosure validation with AI-based KPI extraction and comprehensive visualizations.",
    details: [
      "Developed Streamlit app automating ESG disclosure validation",
      "Integrated Gemini API for automated KPI extraction and summarisation",
      "Built comprehensive visualizations including heatmaps and KPI charts",
      "Implemented word cloud analysis for sustainability keywords",
    ],
    tags: ["Streamlit", "Gemini API", "ESG", "Data Visualization", "Compliance"],
    githubUrl: "",
    liveUrl: "https://github.com/kasturisarthak/GenAI-ESG-Reporting",
    featured: false,
  },
  {
    title: "Exploring Socio-Economic Trends in England and Wales",
    description: "Advanced statistical analysis of census data with Bayesian inference and interactive visualizations.",
    details: [
      "Performed PCA and t-SNE analysis on 2011–2021 census data",
      "Implemented Bayesian inference for uncertainty quantification",
      "Created Tableau dashboard visualising qualification patterns",
      "Analyzed nationality and socio-economic trends across regions",
    ],
    tags: ["Python", "Bayesian Analysis", "PCA", "t-SNE", "Tableau"],
    githubUrl: "",
    liveUrl: "https://github.com/kasturisarthak",
    featured: false,
  },
  {
    title: "Automated Sustainability Labelling for UK Grocery Products",
    description: "Azure pipeline unifying product catalogues from 6 UK retailers with fine-tuned ML models for sustainability classification.",
    details: [
      "Built comprehensive Azure pipeline unifying 6 UK retailer product catalogues",
      "Fine-tuned DistilBERT achieving 91.4% accuracy on sustainability labels",
      "Implemented DINOv2 achieving 89.8% recyclability classification accuracy",
      "Integrated Gemini API fallback ensuring 100% SKU coverage",
    ],
    tags: ["Azure", "DistilBERT", "DINOv2", "Gemini API", "MLOps"],
    githubUrl: "",
    liveUrl: "https://github.com/kasturisarthak/MSc-ECOZE-RetailClassification-Recylability",
    featured: true,
  },
  {
    title: "Structural Health Monitoring and Anomaly Detection",
    description: "Advanced ML implementation for low-decibel defect detection in structural systems using guided-wave signals.",
    details: [
      "Implemented Wang's NARX and TCN architectures for time-series analysis",
      "Achieved 0.92 AUC for low dB defect detection",
      "Developed novel feature engineering for guided-wave signal reconstruction",
      "Created automated anomaly detection pipeline for real-time monitoring",
    ],
    tags: ["PyTorch", "TCN", "NARX", "Signal Processing", "Anomaly Detection"],
    githubUrl: "",
    liveUrl: "https://github.com/kasturisarthak/MSc-ECOZE-RetailClassification-Recylability",
    featured: true,
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="typ-section mb-2">
          <span className="typ-kicker">05.</span> Projects
        </h2>
        <div className="w-20 h-0.5 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-card border border-border rounded-lg p-6 cursor-pointer card-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-end mb-4">
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={32} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="typ-card-title mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="typ-body text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="typ-card-title">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="typ-body text-muted-foreground">{selectedProject?.description}</p>
              <ul className="space-y-2">
                {selectedProject?.details.map((detail, i) => (
                  <li key={i} className="typ-body text-muted-foreground flex gap-2">
                    <span className="text-primary shrink-0">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject?.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
