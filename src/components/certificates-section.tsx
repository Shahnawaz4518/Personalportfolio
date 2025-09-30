"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Download, 
  ExternalLink, 
  Calendar, 
  CheckCircle,
  FileText,
  Shield
} from "lucide-react"

const CertificatesSection = () => {
  const certificates = [
    {
      id: 3,
      title: "HackOverflow Hackathon Participation",
      issuer: "HackOverflow 1.0",
      issueDate: "2023",
      expiryDate: "No Expiry",
      credentialId: "HACKOVERFLOW-2023-003",
      credentialUrl: "https://drive.google.com/file/d/1oKWwRpo2xXc3zVuibkCE_32QwWjrb7R7/view?usp=drivesdk",
      downloadUrl: "/certificates/hackoverflow-hackathon.pdf",
      image: "/images/certificates/hackoverflow-certificate.jpg",
      description: "I participated in a national-level hackathon with a team of 4 members. We developed a Welfare Website that combined multiple features into one platform, including Productivity tools, Games, Songs and entertainment section, Study-related resources, and more. This project gave me hands-on experience in teamwork, problem-solving, and building a multifunctional web solution under time constraints.",
      location: "Pillai College of Engineering, Navi Mumbai",
      skills: ["Team Work", "Problem Solving", "Web Development", "Time Management", "Full Stack"],
      featured: false
    },
    {
      id: 4,
      title: "200+ Coding Problems Solved",
      issuer: "GeeksforGeeks & LeetCode",
      issueDate: "Ongoing",
      expiryDate: "No Expiry",
      credentialId: "CODING-CHALLENGES-2024",
      credentialUrl: "https://www.geeksforgeeks.org/user/shahnawaz25/",
      downloadUrl: "/certificates/coding-achievements.pdf",
      image: "/images/certificates/coding-achievements.png",
      description: "I have solved 200+ Data Structure and Algorithms problems on GeeksforGeeks & LeetCode and this process is ongoing. This demonstrates my strong foundation in computer science fundamentals and problem-solving abilities.",
      profileLinks: {
        gfg: "https://www.geeksforgeeks.org/user/shahnawaz25/",
        leetcode: "https://leetcode.com/u/shahnawaz25/"
      },
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Optimization", "Code Efficiency"],
      featured: false
    },
    {
      id: 5,
      title: "KraftPixel PCAT Assessment – Cleared",
      issuer: "KraftPixel Digital Solutions Pvt. Ltd.",
      issueDate: "July 2025",
      expiryDate: "No Expiry",
      credentialId: "10576590110417",
      credentialUrl: "https://drive.google.com/file/d/1AyXyCFBXGGCEKbTnpVgQvHXq5KqfLU2f/view?usp=drivesdk",
      downloadUrl: "/certificates/kraftpixel-pcat-assessment.pdf",
      image: "/images/certificates/kraftpixel-certificate.png",
      description: "I successfully cleared the KraftPixel PCAT Assessment conducted by KraftPixel Digital Solutions Pvt. Ltd. This certification was awarded on 09 July 2025 as part of the Automation Testing Internship Assessment.",
      skills: ["Automation Testing", "Quality Assurance", "Testing Methodologies", "Technical Assessment", "Internship"],
      featured: false
    }
  ]

  const featuredCertificates = certificates.filter(cert => cert.featured)
  const otherCertificates = certificates.filter(cert => !cert.featured)

  const CertificateCard = ({ certificate, index }: { certificate: typeof certificates[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg leading-tight">{certificate.title}</CardTitle>
            </div>
            {certificate.featured && (
              <Badge variant="default" className="text-xs">
                Featured
              </Badge>
            )}
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>Issued: {certificate.issueDate}</span>
              {certificate.expiryDate !== "No Expiry" && (
                <span>• Expires: {certificate.expiryDate}</span>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          {/* Certificate Image */}
          <div className="aspect-video rounded-lg mb-4 overflow-hidden">
            <img 
              src={certificate.image} 
              alt={`${certificate.title} certificate`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Description */}
          {certificate.description && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Description:</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{certificate.description}</p>
            </div>
          )}

          {/* Location */}
          {certificate.location && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Location:</h4>
              <p className="text-xs text-muted-foreground">{certificate.location}</p>
            </div>
          )}

          {/* Skills */}
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Skills Covered:</h4>
            <div className="flex flex-wrap gap-1">
              {certificate.skills.slice(0, 3).map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {certificate.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{certificate.skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Profile Links */}
          {certificate.profileLinks && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Profile Links:</h4>
              <div className="space-y-1">
                {certificate.profileLinks.gfg && (
                  <a
                    href={certificate.profileLinks.gfg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    GeeksforGeeks Profile
                  </a>
                )}
                {certificate.profileLinks.leetcode && (
                  <a
                    href={certificate.profileLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    LeetCode Profile
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Credential ID */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground">
              Credential ID: <span className="font-mono">{certificate.credentialId}</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              asChild
            >
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="certificates" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise 
            and commitment to continuous learning
          </p>
        </motion.div>

        {/* Featured Certificates */}
        {featuredCertificates.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-2"
            >
              <Shield className="w-6 h-6 text-primary" />
              Featured Certifications
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredCertificates.map((certificate, index) => (
                <CertificateCard key={certificate.id} certificate={certificate} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* All Certificates */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 text-center"
          >
            All Certificates
          </motion.h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherCertificates.map((certificate, index) => (
              <CertificateCard 
                key={certificate.id} 
                certificate={certificate} 
                index={index + featuredCertificates.length} 
              />
            ))}
          </div>
        </div>

        {/* Verification Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Verification Information</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  All certificates are verifiable online. Click the "Verify" button on any certificate 
                  to view the official credential. For employment verification, please contact me directly.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">
                    <Award className="w-3 h-3 mr-1" />
                    Industry Recognized
                  </Badge>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    Up-to-date
                  </Badge>
                  <Badge variant="outline">
                    <Shield className="w-3 h-3 mr-1" />
                    Verifiable
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificatesSection