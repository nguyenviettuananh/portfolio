import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 transform hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
      }`}
      size="icon"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
    </Button>
  );
}
