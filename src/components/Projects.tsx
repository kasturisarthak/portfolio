import { useState } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
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
    featured: true,
  },
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
    featured: false,
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary font-mono text-xl">05.</span> Projects
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
              <div className="flex items-center justify-between mb-4">
                <FolderOpen className="text-primary" size={32} />
                <div className="flex gap-2">
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tech-badge text-xs">
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
              <DialogTitle className="text-2xl text-foreground">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground">{selectedProject?.description}</p>
              <ul className="space-y-2">
                {selectedProject?.details.map((detail, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex gap-2">
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
