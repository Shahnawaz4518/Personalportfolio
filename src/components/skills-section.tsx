"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Database, 
  Palette, 
  GitBranch, 
  Cloud, 
  Smartphone,
  Shield,
  Zap,
  Layers,
  Server,
  Globe,
  Terminal
} from "lucide-react"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6 text-primary" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "React", level: 90, icon: <Code className="w-4 h-4" /> },
        { name: "TypeScript", level: 85, icon: <Code className="w-4 h-4" /> },
        { name: "JavaScript", level: 95, icon: <Code className="w-4 h-4" /> },
        { name: "HTML5/CSS3", level: 90, icon: <Code className="w-4 h-4" /> },
        { name: "Tailwind CSS", level: 88, icon: <Palette className="w-4 h-4" /> },
        { name: "Next.js", level: 82, icon: <Layers className="w-4 h-4" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-primary" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Node.js", level: 88, icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", level: 85, icon: <Server className="w-4 h-4" /> },
        { name: "MongoDB", level: 82, icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", level: 75, icon: <Database className="w-4 h-4" /> },
        { name: "REST APIs", level: 90, icon: <Zap className="w-4 h-4" /> },
        { name: "GraphQL", level: 70, icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      title: "Java Development",
      icon: <Code className="w-6 h-6 text-primary" />,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Core Java", level: 85, icon: <Code className="w-4 h-4" /> },
        { name: "Spring Boot", level: 78, icon: <Server className="w-4 h-4" /> },
        { name: "JDBC", level: 80, icon: <Database className="w-4 h-4" /> },
        { name: "Servlets", level: 75, icon: <Server className="w-4 h-4" /> },
        { name: "JSP", level: 72, icon: <Code className="w-4 h-4" /> },
        { name: "Hibernate", level: 70, icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Git", level: 90, icon: <GitBranch className="w-4 h-4" /> },
        { name: "Docker", level: 75, icon: <Layers className="w-4 h-4" /> },
        { name: "AWS", level: 70, icon: <Cloud className="w-4 h-4" /> },
        { name: "Firebase", level: 80, icon: <Cloud className="w-4 h-4" /> },
        { name: "Vercel", level: 85, icon: <Globe className="w-4 h-4" /> },
        { name: "Linux", level: 78, icon: <Terminal className="w-4 h-4" /> }
      ]
    }
  ]

  const otherSkills = [
    "MERN Stack", "Java Development", "Spring Framework", "Web Development", "Machine Learning", 
    "Problem Solving", "Innovation", "Team Leadership", "Open Source", "Responsive Design", 
    "UI/UX Design", "Database Management", "API Development", "Frontend Frameworks", 
    "Backend Development", "Agile Methodologies", "Object-Oriented Programming", "Data Structures"
  ]

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </motion.div>
  )

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            across various technologies and tools
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex} 
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Additional Skills & Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2">
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years of Coding Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Coding Problems Solved</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection