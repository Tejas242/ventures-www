"use client"
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(scrollY / 600, 0.8);
      const translateY = scrollY * 0.4;
      
      hero.style.opacity = `${opacity}`;
      hero.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced circuit board pattern SVG
  const CircuitPattern = () => (
    <div className="absolute inset-0 opacity-10">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-500"
      >
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 50h40v-10h20v30h10v-50h30v10h-20v-30h-10v40h-30v-10h-40v20zm80 0h20v10h-20v-10zm-60 0h20v10h-20v-10z"
            fill="none"
            strokeWidth="1"
            stroke="currentColor"
            strokeLinecap="square"
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );

  // Animated particles
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: 20 + Math.random() * 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 5,
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/50"></div>
      
      {/* Circuit board pattern */}
      <CircuitPattern />
      
      {/* Enhanced animated particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <motion.div 
            key={particle.id}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            animate={{ 
              opacity: [0, 0.2, 0], 
              scale: [0.5, 1.2, 0.8],
              x: [`${particle.x}%`, `${particle.x + (Math.random() * 10 - 5)}%`],
              y: [`${particle.y}%`, `${particle.y + (Math.random() * 10 - 5)}%`],
            }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity, 
              repeatType: 'reverse', 
              delay: particle.delay 
            }}
            className={`absolute w-${Math.floor(particle.size)}px h-${Math.floor(particle.size)}px rounded-full mix-blend-screen filter blur-xl`}
            style={{ 
              width: `${particle.size}px`, 
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(59, 130, 246, 0.5) 70%, rgba(16, 185, 129, 0) 100%)` 
            }}
          />
        ))}
      </div>

      {/* Enhanced EV wireframe animation */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="scale-125 md:scale-100"
        >
          <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            <motion.path
              d="M150,300 C170,300 180,300 200,300 L250,200 L550,200 L600,300 C620,300 630,300 650,300"
              stroke="url(#grad1)"
              strokeWidth="2"
              filter="url(#glow)"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, delay: 1 }}
            />
            
            <motion.circle 
              cx="200" cy="300" r="40" 
              stroke="url(#grad1)" 
              strokeWidth="2"
              filter="url(#glow)" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1, delay: 3 }}
            />
            
            <motion.circle 
              cx="600" cy="300" r="40" 
              stroke="url(#grad1)" 
              strokeWidth="2"
              filter="url(#glow)" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1, delay: 3 }}
            />
            
            <motion.path
              d="M250,200 L250,100 C250,80 270,80 300,80 L500,80 C530,80 550,80 550,100 L550,200"
              stroke="url(#grad1)"
              strokeWidth="2"
              filter="url(#glow)"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            />
            
            {/* Headlights */}
            <motion.path
              d="M250,150 L270,150"
              stroke="#10B981"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.4, 0.8, 0.4, 0.8] }}
              transition={{ duration: 2, delay: 4, repeat: Infinity, repeatDelay: 5 }}
            />
            
            <motion.path
              d="M530,150 L550,150"
              stroke="#10B981"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.4, 0.8, 0.4, 0.8] }}
              transition={{ duration: 2, delay: 4, repeat: Infinity, repeatDelay: 5 }}
            />
            
            {/* Battery component */}
            <motion.path
              d="M350,120 L450,120 L450,160 L350,160 Z"
              stroke="#3B82F6"
              strokeWidth="2"
              filter="url(#glow)"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 4 }}
            />
            
            {/* Battery charge animation */}
            <motion.path
              d="M370,140 L385,130 L395,140 L430,120"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="5,5"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.5, delay: 4.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Team
            </motion.span>
            <motion.span 
              className="text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 font-extrabold relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ventures
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full"></span>
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Pioneering innovation in electric vehicles, renewable energy, and sustainable engineering solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button 
            href="/projects" 
            variant="primary" 
            size="lg"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 3H14.75C16.46 3 17.98 4.51 18 6.23V20.27C18 21.53 16.39 22.18 15.5 21.29L12.57 18.36C12.25 18.04 11.75 18.04 11.43 18.36L8.5 21.29C7.61 22.18 6 21.53 6 20.27V6.23C6 4.51 7.52 3 9.25 3Z" 
                  fill="currentColor"/>
              </svg>
            }
          >
            Explore Projects
          </Button>
          <Button 
            href="/contact" 
            variant="secondary" 
            size="lg"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
                  fill="currentColor"/>
                <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" 
                  fill="currentColor"/>
              </svg>
            }
          >
            Join the Team
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div 
            className="animate-bounce p-2 bg-white/5 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Energy pulse animation */}
        <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            style={{ width: "100%" }}
          />
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>
    </section>
  );
}