"use client";

import { useState, useEffect } from "react";
import DarkVeilBackground from "@/components/background/AnimatedBackground";
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
              DevOps and Cloud computing
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Aaditya Saxena</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
              DevOps & Cloud Engineer | Cloud Automation Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
             Turning ideas into automated, scalable cloud solutions.
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
              Pre final Year B.Tech Student & Cloud Enthusiast
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a passionate pre final year B.Tech Computer Science student specializing in 
              Cloud Computing and Automation. With a strong foundation in DevOps practices, 
              I love building scalable, reliable, and automated infrastructure solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how large-scale applications 
              are deployed and managed. This led me to explore the world of cloud computing, 
              containerization, and infrastructure as code. Today, I actively contribute to 
              open-source projects and enjoy sharing my knowledge with the community.
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
                    VIT Bhopal Univesity | 2023-2027 | 8.08/10 CGPA
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
                   To become a Cloud Solutions Architect who designs and implements enterprise-grade cloud infrastructure that drives business innovation.
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
        { name: "GCP", color: "#4285F4" },
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
        { name: "Jenkins", color: "#D24939" },
        { name: "Ansible", color: "#EE0000" },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", color: "#ED8B00" },
        { name: "Python", color: "#3776AB" },
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
      ],
    },
    {
      title: "Monitoring",
      icon: Activity,
      color: "from-cyan-500 to-blue-500",
      skills: [
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
        "Production-grade CI/CD platform on AWS using Terraform, Jenkins, Kubernetes (EKS), Blue-Green deployments, and Prometheus monitoring.",
      tech: ["Terraform", "AWS", "Jenikins", "Kubernetes", "Docker"],
      github: "https://github.com/Axddi/kubeforge-cicd-platform",
      demo: null,
      featured: true,
    },
    {
      title: "cloud-cost-intelligence",
      description:
        "A serverless AWS-based cloud cost monitoring platform that tracks daily service-wise costs, stores history, exposes a read-only API, and visualizes spending via a modern dashboard—provisioned using Terraform.",
      tech: ["Terraform", "AWS", "Cloudfront", "SNS", "Python"],
      github: "https://github.com/Axddi/cloud-cost-intelligence",
      demo: null,
      featured: true,
    },
    {
      title: "neuro-sync",
      description:
        "Designed with scalable architecture, CI/CD, and infrastructure-as-code, it is built to evolve into a secure, production-ready healthcare system.",
      tech: ["Next.js", "Terraform", "AWS", "GitHub Actions"],
      github: "https://github.com/Axddi/neuro-sync",
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
            Last updated: February 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnjzekgz", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message")
      })
    });

    const result = await response.json();

    if (result.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">

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
          <p className="text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mb-8">
              I&apos;m always interested in hearing about new opportunities,
              collaborations, or just having a chat about cloud and DevOps technologies.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg"
                  />
                </div>

                <input
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg"
                />

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-card border border-border rounded-xl text-center"
              >
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  Message Sent Successfully 🎉
                </h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

          </motion.div>
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
      <DarkVeilBackground />
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
