import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export default function GlowingCard({ 
  children, 
  className = "", 
  glowColor = "blue",
  delay = 0 
}: GlowingCardProps) {
  const glowColors = {
    blue: "shadow-blue-500/25 hover:shadow-blue-500/40",
    cyan: "shadow-cyan-500/25 hover:shadow-cyan-500/40",
    green: "shadow-green-500/25 hover:shadow-green-500/40",
    purple: "shadow-purple-500/25 hover:shadow-purple-500/40",
    orange: "shadow-orange-500/25 hover:shadow-orange-500/40"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className={`${className} shadow-2xl ${glowColors[glowColor as keyof typeof glowColors]} transform transition-all duration-300 border-0 group relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}