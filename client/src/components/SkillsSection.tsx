import { motion } from "framer-motion";
import { Code, Database, Settings, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java Spring Boot", level: 5 },
        { name: "Kotlin", level: 5 },
        { name: "Node.js", level: 4 }
      ],
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Database,
      title: "Database Systems",
      skills: [
        { name: "PostgreSQL", level: 5 },
        { name: "MySQL", level: 4 },
        { name: "Redis", level: 4 }
      ],
      gradient: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-600"
    },
    {
      icon: Settings,
      title: "DevOps Tools",
      skills: [
        { name: "Docker", level: 5 },
        { name: "Kubernetes", level: 3 },
        { name: "GitHub Actions", level: 4 }
      ],
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        { name: "AWS EKS", level: 3 },
        { name: "AWS Lambda", level: 5 },
        { name: "AWS RDS", level: 4 },
        { name: "AWS Batch", level: 4 },
        { name: "AWS Step Functions", level: 4 },
        { name: "AWS SQS", level: 4 },
        { name: "AWS Glue", level: 4 }
      ],
      gradient: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-600"
    }
  ];

  const SkillLevel = ({ level, color }: { level: number; color: string }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level ? color : 'bg-slate-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${category.gradient} transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 h-full group`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`${category.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-slate-700 font-medium text-xs sm:text-sm">{skill.name}</span>
                        <SkillLevel 
                          level={skill.level} 
                          color={category.iconBg === 'bg-blue-600' ? 'bg-blue-600' : 'bg-cyan-600'} 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
