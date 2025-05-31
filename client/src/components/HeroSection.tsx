import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Nguyen Viet
                <span className="text-blue-600"> Tuan Anh</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-medium">
                Technical Leader & Senior Backend Engineer
              </p>
              <div className="flex items-center space-x-4 text-slate-500">
                <MapPin className="w-4 h-4" />
                <span>Vietnam</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>8+ Years Experience</span>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              An experienced IT professional specializing in Kotlin, Java Spring Boot, and Node.js. 
              Passionate about solving complex problems and exploring cutting-edge technologies like AI and blockchain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="#contact" className="inline-flex items-center">
                  <span className="font-semibold">Get In Touch</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                <a href="#experience" className="font-semibold">
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Professional headshot of Nguyen Viet Tuan Anh" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
            
            {/* Floating Tech Icons */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.747 2l-0.5 0.8-4.747 7.6h1.794l3.453-5.5 3.453 5.5h1.794l-4.747-7.6-0.5-0.8zm-0.747 9.2l-2.5 4h5l-2.5-4z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="absolute top-20 -left-4 bg-white rounded-xl p-3 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.985c-.275 0-.532-.074-.745-.196l-2.378-1.414c-.353-.208-.558-.589-.558-.997v-2.764c0-.408.205-.789.558-.997l2.378-1.414c.425-.253.1065-.253 1.49 0l2.378 1.414c.353.208.558.589.558.997v2.764c0 .408-.205.789-.558.997l-2.378 1.414c-.213.122-.47.196-.745.196zm-1.123-3.539v1.449l1.123.668 1.123-.668v-1.449l-1.123-.668-1.123.668z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="absolute bottom-10 -right-6 bg-white rounded-xl p-3 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.5 5h-1v6h1V5zm6.5 7c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.141-7 7-7 7 3.141 7 7zm-1 0c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
