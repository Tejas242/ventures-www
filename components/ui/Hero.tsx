"use client"
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

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

  // Circuit board pattern SVG
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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950"></div>
      
      {/* Circuit board pattern */}
      <CircuitPattern />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-1/4 left-1/4 w-36 h-36 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          className="absolute top-1/3 right-1/4 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Electric vehicle wireframe animation */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M150,300 L200,300 L250,200 L550,200 L600,300 L650,300"
              stroke="url(#grad1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.circle 
              cx="200" cy="300" r="40" 
              stroke="url(#grad1)" 
              strokeWidth="2" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 3 }}
            />
            <motion.circle 
              cx="600" cy="300" r="40" 
              stroke="url(#grad1)" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 3 }}
            />
            <motion.path
              d="M250,200 L250,100 L550,100 L550,200"
              stroke="url(#grad1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
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
              className="text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ventures
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10"
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
          <Button href="/projects" variant="primary" size="lg">
            Explore Projects
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Join the Team
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="animate-bounce">
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
        
        {/* Energy pulse animation */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}