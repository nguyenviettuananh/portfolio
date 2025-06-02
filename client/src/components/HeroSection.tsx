import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import TypewriterEffect from "./TypewriterEffect";
import ProgressiveBlur from "./ProgressiveBlur";
import profileImage from "@/assets/profile_image.jpeg";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <ProgressiveBlur />
      <ParticleBackground />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-500 rounded-full opacity-40"
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-500 rounded-full opacity-40"
          animate={{ 
            y: [0, -80, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Nguyen Viet
                <span className="text-blue-600"> Tuan Anh</span>
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium h-8 flex items-center">
                <TypewriterEffect 
                  words={[
                    "Technical Leader",
                    "Senior Backend Engineer", 
                    "System Architecture",
                  ]}
                  typeSpeed={80}
                  deleteSpeed={40}
                  delayBetween={2000}
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-slate-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Vietnam</span>
                </div>
                <span className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>8+ Years Experience</span>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              An experienced IT professional specializing in Kotlin, Java Spring Boot, and Node.js. 
              Passionate about solving complex problems and exploring cutting-edge technologies like AI and blockchain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                <a href="#contact" className="inline-flex items-center justify-center">
                  <span className="font-semibold">Get In Touch</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 w-full sm:w-auto">
                <a href="#experience" className="font-semibold text-center">
                  View Experience
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Professional headshot placeholder */}
            <img 
              src={profileImage} 
              alt="Professional headshot of Nguyen Viet Tuan Anh" 
              className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
            
            {/* Floating Tech Icons with enhanced animations */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.5 9c-.9 0-1.7.3-2.4.8l-1.1-.6C15.3 8.4 15.5 7.7 15.5 7c0-1.4-1.1-2.5-2.5-2.5S10.5 5.6 10.5 7c0 .7.2 1.4.5 2l-1.1.6c-.7-.5-1.5-.8-2.4-.8C5.6 8.8 4.5 9.9 4.5 11.3s1.1 2.5 2.5 2.5c.9 0 1.7-.3 2.4-.8l1.1.6c-.3.6-.5 1.3-.5 2 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.7-.2-1.4-.5-2l1.1-.6c.7.5 1.5.8 2.4.8 1.4 0 2.5-1.1 2.5-2.5S19.9 9 18.5 9z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="absolute top-20 -left-4 bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2M12 4.2L19.9 8.08V10C19.9 15.09 16.67 19.18 12 20.09C7.33 19.18 4.1 15.09 4.1 10V8.08L12 4.2Z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="absolute bottom-10 -right-6 bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              animate={{ 
                y: [0, -18, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2 shadow-lg opacity-20"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-32 h-32 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
