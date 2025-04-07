"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  technologies?: string[];
};

export default function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "EcoRacer EV Prototype",
      category: "Electric Vehicles",
      description: "A student-designed electric racing vehicle focused on energy efficiency and performance, achieving top ranks in national competitions.",
      image: "https://picsum.photos/seed/evracer/1200/800",
      year: "2024",
      technologies: ["Electric Motors", "Battery Management", "Aerodynamics", "Lightweight Materials"]
    },
    {
      id: 2,
      title: "Smart Microgrid System",
      category: "Renewable Energy",
      description: "An intelligent campus microgrid that optimizes renewable energy sources, reducing carbon footprint and providing hands-on learning opportunities.",
      image: "https://picsum.photos/seed/microgrid/1200/800",
      year: "2023",
      technologies: ["Solar PV", "Energy Storage", "IoT Monitoring", "AI Optimization"]
    },
    {
      id: 3,
      title: "Autonomous Delivery Robot",
      category: "Automation",
      description: "A self-navigating robot designed for last-mile delivery on campus, utilizing computer vision and machine learning algorithms.",
      image: "https://picsum.photos/seed/robot/1200/800",
      year: "2023",
      technologies: ["Computer Vision", "AI/ML", "Path Planning", "Obstacle Avoidance"]
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-zinc-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-emerald-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Innovative solutions developed by our team members across various domains of engineering and technology.
          </motion.p>
        </motion.div>
        
        <div className="mt-12 relative">
          {/* Project carousel */}
          <div className="overflow-hidden relative h-[600px] md:h-[650px] rounded-xl">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                index === activeIndex && (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative h-full w-full">
                      {/* Project image with gradient overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="100vw"
                          className="object-cover rounded-xl"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/20"></div>
                        
                        {/* Subtle grid pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Project content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex flex-col md:flex-row items-start md:items-end justify-between"
                        >
                          <div className="mb-6 md:mb-0 max-w-2xl">
                            <motion.span 
                              className="inline-block px-3 py-1 text-sm font-medium bg-emerald-500/20 text-emerald-400 rounded-md mb-4"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              {project.category}
                            </motion.span>
                            <motion.h3 
                              className="text-3xl md:text-4xl font-bold text-white mb-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-300 mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                            >
                              {project.description}
                            </motion.p>
                            
                            {project.technologies && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex flex-wrap gap-2 mb-6"
                              >
                                {project.technologies.map(tech => (
                                  <span 
                                    key={tech} 
                                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </motion.div>
                            )}
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.7 }}
                            >
                              <Button 
                                href="/projects" 
                                variant="primary"
                                icon={
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" 
                                      fill="currentColor"/>
                                  </svg>
                                }
                              >
                                Learn More
                              </Button>
                            </motion.div>
                          </div>
                          <motion.div 
                            className="text-8xl font-bold text-white/10"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            {project.year}
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/50 transition-colors duration-300"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/50 transition-colors duration-300"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-emerald-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={`absolute -top-8 transform -translate-x-1/2 left-1/2 px-2 py-1 rounded bg-zinc-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  index === activeIndex ? 'opacity-100' : ''
                }`}>
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            href="/projects" 
            variant="primary" 
            size="lg"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5h-2V3a1 1 0 0 0-2 0v2h-6V3a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V8a1 1 0 0 1 1-1h2v2a1 1 0 0 0 2 0V7h6v2a1 1 0 0 0 2 0V7h2a1 1 0 0 1 1 1Z" 
                  fill="currentColor"/>
              </svg>
            }
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}