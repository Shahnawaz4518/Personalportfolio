"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Shahnawaz Khan" 
                className="w-full h-full rounded-full object-cover bg-background"
                style={{ 
                  objectPosition: 'center 25%',
                  transform: 'scale(1.3)'
                }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Shahnawaz Khan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            MERN Stack & Java Developer
          </motion.h2>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Final-year Computer Engineering student with a passion for coding and innovation. 
            Specialized in MERN Stack development and Java programming, dedicated to solving 
            complex problems through analytical thinking and creativity with a strong ability 
            to adapt to new challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'https://drive.google.com/file/d/18Txxz6ini_T15Qi8A75P-upLK28v6vIc/view?usp=drivesdk'
                link.target = '_blank'
                link.rel = 'noopener noreferrer'
                link.click()
              }}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              View Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'mailto:shahnawaz6499@gmail.com'
                link.click()
              }}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center items-center gap-4 mb-12"
          >
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a href="https://github.com/Shahnawaz4518" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a href="https://www.linkedin.com/in/shahnawaz-khan2512?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a href="https://x.com/Iamsk_25?t=onbRyTFciKPQmRXzPb49bw&s=09" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full"
              asChild
            >
              <a href="mailto:shahnawaz6499@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("#about")}
              className="animate-bounce"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection