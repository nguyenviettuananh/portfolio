import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Oct 2024 - Present",
      title: "Senior Software Engineer",
      company: "GIAOHANGTIETKIEM",
      status: "current",
      responsibilities: [
        "Learning and analyzing legacy systems",
        "Rebuilding and modernizing logistics system"
      ],
      techStack: ["Java", "MySQL", "Kafka"],
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      dotColor: "bg-green-600",
      chevronColor: "text-green-600"
    },
    {
      period: "Mar 2020 - Sep 2024",
      title: "Founding Team Member - Technical Leader",
      company: "Nano Technologies",
      badge: "YC W21",
      status: "past",
      responsibilities: [
        "Conducted market research on Earned Wage Access (EWA) model and bootstrapped company's backend infrastructure",
        "Developed features and integrated with client systems while maintaining data synchronization",
        "Collaborated with partners and vendors for SMS, voice otp, customer data platform (Segment), engagement platform (Clevertap), and eKYC integration",
        "Led a team of ~10 engineers and QA professionals in feature delivery"
      ],
      techStack: ["Kotlin Spring Boot", "PostgreSQL", "Redis", "AWS (EKS, RDS, Lambda, Batch, Step Function, S3, Glue)", "CI/CD (GitLab Runner, CircleCI, GitHub Actions)"],
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      dotColor: "bg-cyan-600",
      chevronColor: "text-cyan-600"
    },
    {
      period: "Oct 2018 - Mar 2020",
      title: "Software Engineer",
      company: "Focal Labs",
      status: "past",
      responsibilities: [
        "Developed building management system product for UP Co-working Space"
      ],
      techStack: ["Node.js (NestJS 5)", "PostgreSQL", "Redis", "AWS Stack", "Docker"],
      bgColor: "bg-slate-100",
      textColor: "text-slate-800",
      dotColor: "bg-slate-400",
      chevronColor: "text-slate-400"
    },
    {
      period: "Apr 2017 - Oct 2018",
      title: "Software Engineer",
      company: "VTVLive",
      status: "past",
      responsibilities: [
        "Developed VTVPlay V3 (OTT System) API Server serving multiple platforms (Web, App, TV Box, TV App)",
        "Built and optimized ONSport API Server (onsports.vn) handling 3,000 concurrent users for exclusive content and live football streaming"
      ],
      techStack: ["Node.js (Express.js)", "MySQL", "Redis", "Docker", "Docker Swarm", "Nimble Streaming Server"],
      bgColor: "bg-slate-100",
      textColor: "text-slate-800",
      dotColor: "bg-slate-400",
      chevronColor: "text-slate-400"
    },
    {
      period: "Apr 2016 - Mar 2017",
      title: "Software Engineer",
      company: "Topica",
      status: "past",
      responsibilities: [
        "Project Usercore - Developed centralized system for mapping and tracking user progress across ecosystem products",
        "Built search and course recommendation functionality for Edumall platform"
      ],
      techStack: ["Node.js (Express.js)", "Python", "Ruby on Rails", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
      bgColor: "bg-slate-100",
      textColor: "text-slate-800",
      dotColor: "bg-slate-400",
      chevronColor: "text-slate-400"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 z-0"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className={`ml-12 md:ml-0 w-full ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <Card className="bg-white shadow-lg transform hover:scale-105 transition-all duration-300 border-0">
                    <CardContent className="p-8">
                      <Badge className={`${exp.bgColor} ${exp.textColor} mb-4`}>
                        {exp.period}
                      </Badge>
                      
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                        {exp.badge && (
                          <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-800">
                            {exp.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className={`text-lg font-semibold mb-4 ${exp.status === 'current' ? 'text-green-600' : exp.company === 'Nano Technologies' ? 'text-cyan-600' : 'text-slate-600'}`}>
                        {exp.company}
                      </h4>
                      
                      <ul className="text-slate-600 space-y-2 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className={`${exp.chevronColor} mt-1 mr-2 w-4 h-4 flex-shrink-0`} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.techStack.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-slate-700">Tech Stack:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className={`${exp.bgColor} ${exp.textColor} text-xs`}>
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
