import { motion } from "framer-motion";
import { GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const references = [
    {
      name: "Thang Nguyen",
      title: "CTO at Nano Technologies",
      gradient: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-600"
    },
    {
      name: "Dzung Dang",
      title: "CEO at Nano Technologies",
      subtitle: "Former CEO of Uber Vietnam",
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Engineer Degree in Information Systems</h3>
                    <p className="text-blue-600 font-medium mb-2">Ha Noi University of Science & Technology</p>
                    <p className="text-slate-600">2011 - 2016</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* References */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">References</h2>
            <div className="space-y-6">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-br ${ref.gradient} shadow-lg border-0`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`${ref.iconBg} w-12 h-12 rounded-full flex items-center justify-center`}>
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{ref.name}</h3>
                          <p className={`${ref.iconBg === 'bg-cyan-600' ? 'text-cyan-600' : 'text-blue-600'} font-medium`}>
                            {ref.title}
                          </p>
                          {ref.subtitle && (
                            <p className="text-slate-600 text-sm">{ref.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
