import { motion } from "framer-motion";
import { Brain, Link, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InterestsSection() {
  const interests = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Exploring machine learning algorithms, neural networks, and AI applications in backend systems",
      gradient: "from-purple-50 to-blue-50",
      iconBg: "bg-purple-600"
    },
    {
      icon: Link,
      title: "Blockchain Technology",
      description: "Investigating decentralized systems, smart contracts, and cryptocurrency technologies",
      gradient: "from-orange-50 to-yellow-50",
      iconBg: "bg-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Tech Trends",
      description: "Following emerging technologies, industry innovations, and future development patterns",
      gradient: "from-green-50 to-cyan-50",
      iconBg: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interests & Passions
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
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${interest.gradient} text-center transform hover:scale-105 transition-all duration-300 shadow-lg border-0 h-full`}>
                <CardContent className="p-8">
                  <div className={`${interest.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <interest.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{interest.title}</h3>
                  <p className="text-slate-600">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
