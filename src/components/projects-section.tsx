"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Explorer App",
      description: "A modern, feature-rich Movie Explorer application built with Next.js 15, TypeScript, and Tailwind CSS. Browse, search, and save your favorite movies with a beautiful, responsive interface.",
      techStack: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "NextAuth.js", "TMDB API", "React Query", "shadcn/ui", "Axios"],
      liveUrl: "https://movie-explorer-app-ulap.vercel.app/",
      githubUrl: "https://github.com/Shahnawaz4518/Movie-Explorer-App",
      image: "/images/movie-explorer-app.png",
      stars: 42,
      lastUpdated: "2024-03-15",
      highlights: [
        "Authentication system with NextAuth.js",
        "Real-time movie search with TMDB API",
        "Favorites management with local storage",
        "Dark/Light theme toggle",
        "Responsive design for all devices"
      ]
    },
    {
      id: 2,
      title: "Blog-post App",
      description: "A lightweight and intuitive blogging platform empowering users with seamless content creation and management. Features real-time interactivity and secure data handling using React.js frontend and Appwrite backend services.",
      techStack: ["React.js", "Appwrite", "Authentication", "Database", "Real-time Updates"],
      liveUrl: "https://blogify-post.vercel.app",
      githubUrl: "https://github.com/Shahnawaz4518/BlogPostAppUsingReactJs",
      image: "/images/blog-post-app.png",
      stars: 28,
      lastUpdated: "2024-01-20",
      highlights: [
        "Real-time content creation and management",
        "Secure authentication with Appwrite",
        "Responsive blog interface",
        "Database-driven content storage",
        "Interactive user experience"
      ]
    },
    {
      id: 3,
      title: "ATM Machine Application",
      description: "A simulation of real-world ATM operations including balance inquiry, withdrawal, deposit, and mini-statement. Integrates backend Java logic with a user-friendly web interface using OOP principles and collections.",
      techStack: ["Java", "HTML", "CSS", "JavaScript", "OOP", "Collections"],
      liveUrl: "https://v0-host-this-website-sooty.vercel.app/",
      githubUrl: "https://github.com/Shahnawaz4518/ATM-Machine-App",
      image: "/images/ATM-Machine-App.png",
      stars: 19,
      lastUpdated: "2024-01-10",
      highlights: [
        "Real-world ATM operations simulation",
        "Secure authentication and transaction processing",
        "Java backend with OOP principles",
        "User-friendly web interface",
        "Real-time balance and transaction updates"
      ]
    },
    {
      id: 4,
      title: "Plant Disease Detection System",
      description: "A deep learning-based system for detecting plant diseases using image recognition. Provides farmers with instant diagnosis and solution suggestions through a user-friendly web interface.",
      techStack: ["Flask", "TensorFlow", "HTML", "CSS", "JavaScript", "Machine Learning"],
      liveUrl: "",
      githubUrl: "https://github.com/Shahnawaz4518/PYTHON-PROJECT",
      image: "/images/plant-disease-detection.png",
      stars: 24,
      lastUpdated: "2023-12-15",
      highlights: [
        "Deep learning image recognition",
        "Real-time plant disease detection",
        "Farmer-friendly solution suggestions",
        "TensorFlow-based ML model",
        "Web interface for easy image upload"
      ]
    }
  ]

  const ProjectCard = ({ project, index }: { project: typeof projects[0] & { highlights?: string[] }, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
        {/* Project Image */}
        <div className="aspect-video rounded-t-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              {project.stars}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            Last updated: {new Date(project.lastUpdated).toLocaleDateString()}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.techStack.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            {project.liveUrl && (
              <Button
                size="sm"
                className="flex-1"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live View
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className={project.liveUrl ? "flex-1" : "w-full"}
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Personal Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my personal development projects. Each project represents unique challenges, 
            learning opportunities, and practical applications of various technologies.
          </p>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Project Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Personal Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Coding Problems</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Hackathon</div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://github.com/Shahnawaz4518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mx-auto"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection