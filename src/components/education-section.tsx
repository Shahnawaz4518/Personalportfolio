"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.E. in Computer Engineering",
      institution: "Lokmanya Tilak College of Engineering",
      location: "Mumbai, Maharashtra",
      period: "2021 - 2025",
      gpa: "CGPA: 7.31/10",
      description: "Currently pursuing Bachelor's degree in Computer Engineering from Mumbai University. Focused on building strong foundation in computer science fundamentals and practical software development skills.",
      achievements: [
        "Active participant in coding competitions and hackathons",
        "Solved 200+ problems on GFG and LeetCode",
        "Attended HackOverflow Hackathon showcasing problem-solving skills",
        "Strong academic performance with consistent grades"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Web Development",
        "Computer Networks",
        "Operating Systems"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "R.K. Talreja College",
      location: "Ulhasnagar, Maharashtra",
      period: "2019 - 2021",
      gpa: "86.83%",
      description: "Completed Higher Secondary education with Maharashtra State Board of Secondary & Higher Secondary Education with excellent performance in Science stream.",
      achievements: [
        "Scored 86.83% in HSC examination",
        "Strong foundation in Physics, Chemistry, and Mathematics",
        "Participated in various science exhibitions and competitions",
        "Developed interest in computer science and programming"
      ],
      relevantCourses: [
        "Physics",
        "Chemistry", 
        "Mathematics",
        "Computer Science",
        "English",
        "Environmental Science"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Swami Vivekanand High School",
      location: "Ulhasnagar, Maharashtra",
      period: "2018 - 2019",
      gpa: "77.20%",
      description: "Completed Secondary education with Maharashtra State Board of Secondary & Higher Secondary Education, building strong academic foundation.",
      achievements: [
        "Scored 77.20% in SSC examination",
        "Developed strong analytical and problem-solving skills",
        "Active participation in extracurricular activities",
        "Foundation for higher education in science stream"
      ],
      relevantCourses: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi/Marathi",
        "Information Technology"
      ]
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path in computer science and web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative lg:grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>

                {/* Education Card */}
                <Card className={`hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto lg:col-start-2'}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.relevantCourses.map((course, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Empty space for timeline alignment */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground mb-4">
                  I believe in lifelong learning and continuously update my skills through:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Online Courses</Badge>
                  <Badge variant="outline">Technical Blogs</Badge>
                  <Badge variant="outline">Open Source</Badge>
                  <Badge variant="outline">Tech Conferences</Badge>
                  <Badge variant="outline">Coding Challenges</Badge>
                  <Badge variant="outline">Peer Learning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection