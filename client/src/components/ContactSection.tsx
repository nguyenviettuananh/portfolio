import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "nguyenviettuananh.bk.k56@gmail.com",
      href: "mailto:nguyenviettuananh.bk.k56@gmail.com",
      iconBg: "bg-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+84387446686",
      href: "tel:+84387446686",
      iconBg: "bg-cyan-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#",
      iconBg: "bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to discuss opportunities or collaborate on exciting projects? Let's connect!
          </motion.p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800 border-slate-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group hover:bg-slate-700">
                <CardContent className="p-8">
                  <div className={`${method.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{method.title}</h3>
                  <a 
                    href={method.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 group-hover:text-white"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
