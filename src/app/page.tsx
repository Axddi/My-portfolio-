"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Award,
  Code,
  Cloud,
  Server,
  Database,
  Terminal,
  Box,
  Layers,
  GitBranch,
  Settings,
  FileCode,
  HardDrive,
  Monitor,
  Activity,
  BarChart3,
} from "lucide-react";
import { useTheme } from "next-themes";

// Custom Tech Icon Component
function TechIcon({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="w-5 h-5 rounded font-bold text-xs flex items-center justify-center"
      style={{ backgroundColor: color, color: "#fff" }}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Aaditya Saxena
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Cloud, DevOps & Generative AI
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Aaditya Saxena</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
              Cloud & DevOps Engineer | Generative AI & AIOps Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
             Building scalable cloud infrastructure, automated workflows, and AI-powered solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Code size={20} />
                View Projects
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </div>
            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://github.com/Axddi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aaditya-saxena22/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:aaditya.saxena.1357@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <div className="text-8xl text-white font-bold">Aaditya</div>
              </div>
              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 bg-card rounded-xl shadow-lg border border-border"
              >
                <Box size={32} className="text-[#2496ED]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 -left-8 p-4 bg-card rounded-xl shadow-lg border border-border"
              >
                <Layers size={32} className="text-[#326CE5]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 -right-8 p-4 bg-card rounded-xl shadow-lg border border-border"
              >
                <Settings size={32} className="text-[#7B42BC]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 left-1/4 p-4 bg-card rounded-xl shadow-lg border border-border"
              >
                <Cloud size={32} className="text-[#FF9900]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Final Year B.Tech Student | Cloud, DevOps & GenAI
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a final year B.Tech Computer Science student specializing in 
              Cloud Computing and Automation. I&apos;m passionate about cloud infrastructure, DevOps, 
              Generative AI, and building scalable, reliable, and automated solutions.
            </p>
            <div className="mb-6 p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-1">Current Role</h4>
              <p className="text-muted-foreground text-sm">
                Trainee at <b>NEC Corporation India</b>, working with AWS, Generative AI,
                Amazon Bedrock, and AIOps for enterprise cloud solutions.
              </p>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how large-scale applications 
              are deployed and managed. This led me to explore AWS, containerization, infrastructure 
              as code, CI/CD, and Generative AI. I now apply these technologies through projects and 
              my work as a Trainee at NEC Corporation India.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-muted-foreground text-sm">
                    B.Tech in Computer Science - Specialization in Cloud Computing and Automation
                  </p>
                  <p className="text-muted-foreground text-sm">
                    VIT Bhopal University | 2023-2027 | 8.3/10 CGPA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Cloud className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Career Goal</h4>
                  <p className="text-muted-foreground text-sm">
                   To build scalable cloud, DevOps, and AI solutions that solve real-world enterprise problems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Cloud, label: "Cloud Projects", value: "5+" },
              { icon: Server, label: "Deployments", value: "10+" },
              { icon: Code, label: "Repositories", value: "5+"},
              { icon: Award, label: "Certifications", value: "7"},
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border text-center card-hover"
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={32} />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS", color: "#FF9900" },
        { name: "Azure", color: "#0078D4" },
              ],
    },
    {
      title: "DevOps Tools",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "Terraform", color: "#7B42BC" },
        { name: "GitHub Actions", color: "#2088FF" },
        { name: "Prometheus", color: "#E6522C" },
        { name: "Grafana", color: "#F46800" },
        { name: "Jenkins", color: "#D24939" },
              ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", color: "#ED8B00" },
        { name: "Python", color: "#3776AB" },
        { name: "Go", color: "#00ADD8" },
        { name: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      title: "Databases & OS",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", color: "#4169E1" },
        { name: "Linux", color: "#FCC624" },
        { name: "Ubuntu", color: "#E95420" },
        { name: "MySQL", color: "#4479A1" },
        { name: "DynamoDB", color: "#4053D6" },
      ],
    },
    {
      title: "Generative AI & AIOps",
      icon: Activity,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Amazon Bedrock", color: "#FF9900" },
        { name: "RAG", color: "#7B42BC" },
        { name: "AIOps", color: "#326CE5" },
        { name: "PyTorch", color: "#EE4C2C" },
        { name: "Prometheus", color: "#E6522C" },
        { name: "Grafana", color: "#F46800" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg"
                  >
                    <TechIcon name={skill.name} color={skill.color} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "kubeforge-cicd-platform",
      description:
        "Production-grade CI/CD platform on AWS using Terraform, Jenkins, Kubernetes (EKS), Blue-Green deployments, Docker, and Prometheus.",
      tech: ["Terraform", "AWS", "Jenkins", "Kubernetes", "Docker"],
      github: "https://github.com/Axddi/kubeforge-cicd-platform",
      demo: null,
      featured: true,
    },
    {
      title: "cloud-cost-intelligence",
      description:
        "Serverless AWS FinOps platform that tracks cloud costs, stores historical usage, sends alerts, and visualizes spending through a dashboard provisioned with Terraform.",
      tech: ["Terraform", "AWS", "Lambda", "DynamoDB", "SNS"],
      github: "https://github.com/Axddi/cloud-cost-intelligence",
      demo: null,
      featured: true,
    },
    {
      title: "AI DevOps Copilot",
      description:
        "AI-powered DevOps platform for Kubernetes incident analysis, automated diagnostics, SRE dashboards, and cloud infrastructure managed through Terraform.",
      tech: ["Next.js", "FastAPI", "Kubernetes", "Terraform", "AWS"],
      github: "https://github.com/Axddi/ai-devops-copilot",
      demo: null,
      featured: false,
    },
    {
  title: "MeetMind-AI",
  description:
    "AI-powered meeting intelligence platform that transforms meeting transcripts into concise summaries, action items, and insights using AWS and Generative AI.",
  tech: ["AWS", "Terraform", "S3", "Transcribe", "Bedrock", "DynamoDB"],
  github: "https://github.com/Axddi/MEETMIND-AI",
  demo: null,
  featured: true,
},

{
  title: "NeuroSync",
  description:
    "Scalable healthcare application designed with modern cloud architecture, infrastructure-as-code, and CI/CD automation for secure and reliable deployment.",
  tech: ["Next.js", "AWS", "Terraform", "GitHub Actions"],
  github: "https://github.com/Axddi/neuro-sync",
  demo: null,
  featured: true,
},

{
  title: "HoneyRatan",
  description:
    "Freelance food delivery application built for a real-world client, featuring a Flutter mobile frontend, Node.js backend, and MySQL database for managing users, restaurants, orders, and delivery workflows.",
  tech: ["Flutter", "Node.js", "MySQL", "REST API"],
  github: null,
  demo: null,
  featured: true,
},
    {
      title: "Segmentify",
      description:
        "Built a full-stack SaaS platform enabling users to upload and query documents with AI-driven summaries.",
      tech: ["JavaScript", "Langchain", "Prisma", "TRPC", "ZOD"],
      github: "https://github.com/AAbhinVV/Segmentify",
      demo: null,
      featured: false,
    },
    {
      title: "RecipeCraft",
      description:
        "Recipe Craft generates recipe entered by the user and gives the user various recipes based on it.",
      tech: ["JavaScript", "AWS"],
      github: "https://github.com/Axddi/RecipeCraft",
      demo: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my cloud and DevOps expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card rounded-xl border border-border p-6 card-hover flex flex-col ${
                project.featured ? "lg:col-span-1 ring-2 ring-primary/20" : ""
              }`}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4 w-fit">
                  Featured
                </span>
              )}
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  <Github size={16} />
                  Code
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://github.com/Axddi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Certifications Section
function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2026",
      credentialId: "525269111",
      color: "#FF9900",
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "Oracle University",
      date: "2025",
      credentialId: "102633618OCI25AICFA",
      color: "#0078D4",
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "LinkedIn Learning & Docker",
      date: "2025",
      credentialId: "e892ede0035363",
      color: "#2496ED",
    },
    {
      title: "Ubuntu Linux Professional Certificate",
      issuer: "LinkedIn Learning & Canonical",
      date: "2025",
      credentialId: "9cb662b10a13e5577e6",
      color: "#E95420",
    },
    {
      title: "Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2024",
      credentialId: "C58F9RPDO7FC",
      color: "#34A853",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating my cloud and DevOps expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 text-center card-hover flex flex-col"
            >
              <div
                className="mx-auto mb-4 p-4 rounded-xl"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <Award size={32} style={{ color: cert.color }} />
              </div>

              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>

              <p className="text-muted-foreground text-sm mb-1">
                {cert.issuer}
              </p>

              <p className="text-muted-foreground text-sm mb-4">
                Issued: {cert.date}
              </p>

              <span className="mt-auto text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-md">
                Credential ID: {cert.credentialId}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Resume Section
function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Download My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a comprehensive overview of my experience, skills, and education
          </p>
          <motion.a
            href="/Aaditya_Saxena_resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Download size={24} />
            Download Resume (PDF)
          </motion.a>
          <p className="text-muted-foreground text-sm mt-4">
            Last updated: October 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an opportunity, collaboration, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Email */}
          <motion.a
            href="mailto:aaditya.saxena.1357@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <Mail className="text-primary" size={26} />
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground text-sm">
                aaditya.saxena.1357@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+919034534246"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <Phone className="text-primary" size={26} />
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground text-sm">
                +91 90345 34246
              </p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/aaditya-saxena22/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <Linkedin className="text-primary" size={26} />
            </div>

            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">
                linkedin.com/in/aaditya-saxena22
              </p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Axddi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <Github className="text-primary" size={26} />
            </div>

            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-muted-foreground text-sm">
                github.com/Axddi
              </p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
// Footer Component
function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Aaditya Saxena. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Axddi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aaditya-saxena22/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:aaditya.saxena.1357@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
