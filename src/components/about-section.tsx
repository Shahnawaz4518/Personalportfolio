"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Zap, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb 
} from "lucide-react"

const AboutSection = () => {
  const skills = [
    "C/C++", "Java", "Python", "HTML5", "CSS3", "Tailwind", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "SQL","Fultter", "Data Structures", "Algorithms", "OOPs", "Git, GitHub", "REST APIs","DevOps", "MERN Stack", "Agile Methodologies", "Problem Solving"
  ]

  const interests = [
    "Web Development", "Machine Learning", "Problem Solving", "Innovation", "Team Leadership", "Open Source", "Java Development", "Competitive Programming"
  ]

  const aboutCards = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code following best practices."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing applications for speed, scalability, and exceptional user experience."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Problem Solving",
      description: "Tackling complex challenges with analytical thinking and creative solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Player",
      description: "Collaborating effectively in agile environments and contributing to team success."
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my skills, interests, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I am a Computer Engineering graduate from Lokmanya Tilak College of Engineering, Mumbai University,
                  with a CGPA of 7.31/10. I am a highly motivated and results-driven developer with a strong passion
                  for coding, problem-solving, and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I have hands-on experience with the MERN stack, demonstrated through building a Job Portal Web
                  Application during my internship at CodSoft. Additionally, I worked as a Frontend Developer during
                  my internship at IBM SkillsBuild, where I developed a Spotify Clone, strengthening my expertise in
                  React.js, Tailwind CSS, and responsive UI design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Alongside web development, I am also a Java Developer with a solid understanding of Object-Oriented
                  Programming (OOP), Data Structures and Algorithms (DSA), and backend problem-solving. My Java knowledge
                  extends to building applications, optimizing algorithms, and applying design principles to develop
                  efficient and scalable solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a blend of MERN stack proficiency and Java expertise, I bring versatility as a developer who can
                  contribute to both frontend and backend systems. I am dedicated to solving complex problems through
                  analytical thinking, creativity, and innovation, and I quickly adapt to new technologies.
                  
                  As a collaborative team player with leadership qualities, I am eager to contribute to impactful
                  projects in a dynamic and challenging environment, while continuously learning and growing as a 
                  software engineer.
                </p>
                
                
              </CardContent>
            </Card>

            {/* Skills Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests Grid */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Career Goals & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Career Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Become a proficient full-stack developer specializing in MERN technologies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Work on innovative projects that solve real-world problems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Contribute to open-source projects and share knowledge with the community
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Develop expertise in machine learning and AI technologies
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Values Cards */}
            <div className="space-y-4">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {card.icon}
                        <div>
                          <h4 className="font-semibold mb-1">{card.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection