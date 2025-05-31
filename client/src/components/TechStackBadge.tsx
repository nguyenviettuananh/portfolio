import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TechStackBadgeProps {
  tech: string;
  index: number;
  className?: string;
}

export default function TechStackBadge({ tech, index, className = "" }: TechStackBadgeProps) {
  const getTechIcon = (techName: string) => {
    const name = techName.toLowerCase();
    if (name.includes('kotlin')) return '🔥';
    if (name.includes('java')) return '☕';
    if (name.includes('node')) return '💚';
    if (name.includes('aws')) return '☁️';
    if (name.includes('docker')) return '🐳';
    if (name.includes('kubernetes')) return '⚙️';
    if (name.includes('postgresql') || name.includes('mysql')) return '🗄️';
    if (name.includes('redis')) return '🔴';
    if (name.includes('kafka')) return '📨';
    if (name.includes('python')) return '🐍';
    if (name.includes('ruby')) return '💎';
    return '⚡';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -2 }}
    >
      <Badge 
        className={`${className} text-xs cursor-pointer hover:shadow-lg transition-all duration-300 flex items-center gap-1`}
      >
        <span>{getTechIcon(tech)}</span>
        {tech}
      </Badge>
    </motion.div>
  );
}