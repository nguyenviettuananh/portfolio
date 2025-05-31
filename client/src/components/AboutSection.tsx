import { motion } from "framer-motion";
import { Code, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "8+ years of expertise in backend development with Kotlin, Java Spring Boot, and Node.js",
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description: "Led teams of ~10 engineers and QA professionals in feature delivery and project management",
      gradient: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-600"
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "Passionate about cutting-edge technologies including AI, blockchain, and emerging tech trends",
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Summary
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${feature.gradient} text-center transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 h-full group`}>
                <CardContent className="p-8">
                  <div className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
