import { useEffect, useRef } from 'react';

export default function MouseTracker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trails = useRef<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trails.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 0.8
      });
      
      // Keep only last 10 trail points
      if (trails.current.length > 10) {
        trails.current = trails.current.slice(-10);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw trails
      trails.current = trails.current.map(trail => ({
        ...trail,
        opacity: trail.opacity * 0.9
      })).filter(trail => trail.opacity > 0.01);
      
      trails.current.forEach((trail, index) => {
        const radius = (index + 1) * 0.5;
        const gradient = ctx.createRadialGradient(
          trail.x, trail.y, 0,
          trail.x, trail.y, radius * 2
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${trail.opacity})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-30"
    />
  );
}