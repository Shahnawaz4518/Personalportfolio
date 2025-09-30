"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Code,
  Heart,
  ExternalLink
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/Shahnawaz4518" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/shahnawaz-khan2512" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", url: "mailto:shahnawaz6499@gmail.com" }
  ]

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "shahnawaz6499@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+91 9146059689" },
    { icon: <MapPin className="w-4 h-4" />, text: "Mumbai, Maharashtra, India" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">Shahnawaz Khan</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Final-year Computer Engineering student passionate about MERN stack development, 
                coding, and innovation. Dedicated to solving complex problems through analytical thinking.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">Contact Info</h3>
              <ul className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">{contact.icon}</span>
                    <span className="text-sm text-muted-foreground">{contact.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">Let's Connect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in working together or have a project in mind? 
                I'd love to hear from you!
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/KhanShahnawazResume.pdf'
                    link.download = 'Shahnawaz-Khan-Resume.pdf'
                    link.click()
                  }}
                >
                  Download Resume
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span>© {currentYear} Shahnawaz Khan. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="flex items-center gap-2"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer