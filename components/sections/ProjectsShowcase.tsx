"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
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
      year: "2024"
    },
    {
      id: 2,
      title: "Smart Microgrid System",
      category: "Renewable Energy",
      description: "An intelligent campus microgrid that optimizes renewable energy sources, reducing carbon footprint and providing hands-on learning opportunities.",
      image: "https://picsum.photos/seed/microgrid/1200/800",
      year: "2023"
    },
    {
      id: 3,
      title: "Autonomous Delivery Robot",
      category: "Automation",
      description: "A self-navigating robot designed for last-mile delivery on campus, utilizing computer vision and machine learning algorithms.",
      image: "https://picsum.photos/seed/robot/1200/800",
      year: "2023"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const element = sectionRef.current;
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-zinc-900 fade-in-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto my-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Innovative solutions developed by our team members across various domains of engineering and technology.
          </p>
        </div>
        
        <div className="mt-12 relative">
          {/* Project carousel */}
          <div className="overflow-hidden relative h-[600px] rounded-xl">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent"></div>
                  </div>
                  
                  {/* Project content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between">
                    <div className="mb-6 md:mb-0 max-w-2xl">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-500/20 text-emerald-400 rounded-md mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <Button href="/projects" variant="secondary">
                        Learn More
                      </Button>
                    </div>
                    <div className="text-7xl font-bold text-white/10">{project.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel controls */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-emerald-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button href="/projects" variant="primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}