"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, Building } from "lucide-react"

const InternshipSection = () => {
  const internships = [
    {
      id: 1,
      company: "CodSoft Technologies",
      position: "Project Intern",
      period: "2024",
      projectTitle: "Job Portal Web Application",
      description: "Developed a comprehensive Job Portal Web Application using MERN stack, enabling users to browse, apply for jobs, manage profiles, and recruiters to manage postings, companies, and applicants via an admin panel.",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux Toolkit", "Multer", "Framer Motion"],
      achievements: [
        "Integrated Redux Toolkit for state management",
        "Implemented Multer for file uploads",
        "Added Framer Motion for UI animations",
        "Deployed fully responsive application on Render",
        "Implemented secure authentication system"
      ],
      certificateUrl: "https://drive.google.com/file/d/1GvaablL2rflwJX05o3Ei8q9S2IC1on6P/view?usp=drivesdk",
      liveUrl: "https://naukri-dekho.onrender.com/",
      githubUrl: "https://github.com/Shahnawaz4518/JobPortal"
    },
    {
      id: 2,
      company: "IBM SkillsBuild",
      position: "Frontend Development Intern",
      period: "2024",
      projectTitle: "Spotify Clone",
      description: "Developed a Spotify Clone using HTML, CSS, and JavaScript, replicating core UI/UX features including play, pause, and playlist navigation with dynamic interactions and responsive design.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      achievements: [
        "Replicated core Spotify UI/UX features",
        "Implemented play, pause, and playlist navigation",
        "Created dynamic interactions and animations",
        "Ensured fully responsive design",
        "Enhanced understanding of music streaming interfaces"
      ],
      certificateUrl: "https://drive.google.com/file/d/1o5tXc5Wzs5_89UxQJm343qZGn-8NPs-m/view?usp=drivesdk",
      liveUrl: "https://68145e5d4fd3ae5b619e10a6--deluxe-melba-c6e290.netlify.app/",
      githubUrl: "https://github.com/Shahnawaz4518"
    }
  ]

  const InternshipCard = ({ internship, index }: { internship: typeof internships[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {internship.company}
                </CardTitle>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4" />
                <span className="font-medium">{internship.position}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {internship.period}
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              Internship
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col space-y-4">
          {/* Project Title */}
          <div>
            <h4 className="font-semibold text-lg mb-2">{internship.projectTitle}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {internship.description}
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h5 className="font-semibold mb-2 text-sm">Key Achievements:</h5>
            <ul className="space-y-1">
              {internship.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h5 className="font-semibold mb-2 text-sm">Technologies Used:</h5>
            <div className="flex flex-wrap gap-1">
              {internship.techStack.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-auto pt-4 border-t">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Button
                size="sm"
                className="flex items-center gap-2"
                asChild
              >
                <a
                  href={internship.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                asChild
              >
                <a
                  href={internship.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Project
                </a>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 w-full"
              asChild
            >
              <a
                href={internship.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="internships" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Internship Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience gained through industry internships, working on real-world projects 
            and collaborating with experienced developers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>

        {/* Skills Gained Section */}
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
                <h3 className="text-xl font-semibold mb-4">Skills Gained Through Internships</h3>
                <p className="text-muted-foreground mb-6">
                  These internships provided hands-on experience with industry-standard technologies and best practices.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Full Stack Development</Badge>
                  <Badge variant="outline">MERN Stack</Badge>
                  <Badge variant="outline">Frontend Development</Badge>
                  <Badge variant="outline">UI/UX Design</Badge>
                  <Badge variant="outline">State Management</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                  <Badge variant="outline">Authentication</Badge>
                  <Badge variant="outline">Database Management</Badge>
                  <Badge variant="outline">API Development</Badge>
                  <Badge variant="outline">Version Control</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default InternshipSection