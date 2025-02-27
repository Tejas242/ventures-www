'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';

type Achievement = {
  id: number;
  title: string;
  description: string;
  date: string;
  location?: string;
  image?: string;
  category: 'award' | 'publication' | 'project' | 'event';
};

type YearSection = {
  year: string;
  achievements: Achievement[];
};

export default function AchievementsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentYear, setCurrentYear] = useState<string | null>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  // Achievements data organized by academic year
  const yearSections: YearSection[] = [
    {
      year: "2023-24",
      achievements: [
        {
          id: 1,
          title: "Winner of Maharashtra State Innovation Challenges 2024",
          description: "Team Ventures secured first place at the district level in the prestigious Maharashtra State Innovation Challenges, organized by MSI.",
          date: "February 2024",
          category: "award",
          image: "/achievements/msi-challenge.jpg"
        },
        {
          id: 2,
          title: "First Prize at CMIA 2024 Paper Presentation Competition",
          description: "The team's innovative research and presentation skills were recognized with the top honor at the CMIA 2024 Paper Presentation Competition.",
          date: "January 2024",
          category: "award",
          image: "/achievements/cmia-2024.jpg"
        },
        {
          id: 3,
          title: "First Prize at State Level Business Idea Presentation Competition",
          description: "Team Ventures won first place at the State Level business idea presentation competition held at Guru Govind Singh College, Nashik.",
          date: "March 2024",
          category: "award",
          image: "/achievements/business-idea.jpg"
        },
        {
          id: 4,
          title: "Second Prize at Start-up Competition 2024",
          description: "The team's entrepreneurial venture secured second place at the Start-up Competition 2024 hosted by KBT College Nashik.",
          date: "February 2024",
          category: "award",
          image: "/achievements/startup-comp.jpg"
        },
        {
          id: 5,
          title: "First Prize at India Innovates Competition Wings24",
          description: "Team Ventures' innovative project was awarded first prize at the prestigious India Innovates Competition Wings24.",
          date: "March 2024",
          category: "award",
          image: "/achievements/india-innovates.jpg"
        },
        {
          id: 6,
          title: "Educational Outreach at Sharda Vidya Mandir School",
          description: "Team members visited Sharda Vidya Mandir School to promote enthusiasm for engineering among school students, demonstrating projects and sharing knowledge.",
          date: "December 2023",
          category: "event",
          image: "/achievements/school-outreach.jpg"
        }
      ]
    },
    {
      year: "2022-23",
      achievements: [
        {
          id: 7,
          title: "DIPEX 2023 Winner in Mobility Section",
          description: "Team Ventures won first prize at DIPEX 2023, held at Sipna College of Engineering, Amravati, for their innovative project on retrofitting EV two-wheelers.",
          date: "March 2023",
          location: "Sipna College of Engineering, Amravati",
          category: "award",
          image: "/achievements/dipex-2023.jpg"
        },
        {
          id: 8,
          title: "Project: Retrofitting EV Two-Wheeler",
          description: "Successfully completed a project to convert conventional two-wheelers into electric vehicles, focusing on sustainability, efficiency, and innovation.",
          date: "2022-2023 Academic Year",
          category: "project",
          image: "/achievements/retrofit-ev.jpg"
        }
      ]
    },
    {
      year: "2021-22",
      achievements: [
        {
          id: 9,
          title: "2nd Prize in CMIA Paper Presentation",
          description: "Team Ventures secured the 2nd prize in the prestigious CMIA Paper Presentation competition with their project on retrofitting.",
          date: "February 2022",
          category: "award",
          image: "/achievements/cmia-2022.jpg"
        },
        {
          id: 10,
          title: "Project: Retrofitting",
          description: "Members undertook a significant project on retrofitting, focusing on updating and improving existing structures with modern technology and sustainable practices to enhance efficiency and extend the life of the structures.",
          date: "2021-2022 Academic Year",
          category: "project",
          image: "/achievements/retrofit-project.jpg"
        },
        {
          id: 11,
          title: "IEEMA Journal Publication",
          description: "Team Ventures' research paper was published in the October 2024 issue of the prestigious IEEMA journal, highlighting the club's commitment to academic excellence and industry-relevant research.",
          date: "October 2024",
          category: "publication",
          image: "/ieema-paper.pdf", // Link to the PDF in public folder
        }
      ]
    }
  ];

  // Setup horizontal scroll for achievements section
  useEffect(() => {
    if (!horizontalRef.current) return;
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('.year-section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          current = section.getAttribute('data-year') || '';
        }
      });
      
      if (current !== currentYear) {
        setCurrentYear(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentYear]);

  // Parallax effects setup
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  return (
    <>
      {/* Fixed year indicator (stays in view during scroll) */}
      <div className="fixed top-24 right-8 z-40 hidden lg:block">
        <div className="flex flex-col items-end">
          {yearSections.map((section) => (
            <motion.a
              key={section.year}
              href={`#year-${section.year}`}
              className={`text-2xl font-bold my-2 transition-all duration-300 ${
                currentYear === section.year 
                  ? 'text-emerald-400 scale-110'
                  : 'text-gray-600 hover:text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.year}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Hero section with parallax */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950"></div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://picsum.photos/seed/achievements/1920/1080"
              alt="Background"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ y: y2 }}
        >
          <svg width="100%" height="100%" className="text-emerald-500">
            <pattern id="trophy-pattern" width="70" height="70" patternUnits="userSpaceOnUse">
              <path d="M35,10 L45,30 L65,35 L45,40 L35,60 L25,40 L5,35 L25,30 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#trophy-pattern)" />
          </svg>
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-bold text-white leading-tight mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Legacy</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8">
              <div className="h-px w-16 bg-emerald-500"></div>
              <p className="text-xl md:text-2xl text-gray-300">
                A chronicle of innovation, excellence, and impact
              </p>
              <div className="h-px w-16 bg-emerald-500"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12"
            >
              <div className="mouse-scroll-indicator">
                <div className="mouse">
                  <div className="wheel"></div>
                </div>
                <div className="arrow">
                  <span></span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats section with animated counters */}
      <section className="py-24 bg-gradient-to-r from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={8} suffix="+" title="Awards Won" color="emerald" />
            <StatCounter end={3} suffix="+" title="Major Projects" color="blue" />
            <StatCounter end={1} suffix="+" title="Publications" color="purple" />
            <StatCounter end={3} suffix="+" title="Years of Excellence" color="amber" />
          </div>
        </div>
      </section>

      {/* Achievement timeline with innovative layout */}
      <div className="bg-zinc-950 py-16">
        <div className="container mx-auto px-4 mb-24">
          <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-16">Achievement Timeline</h2>
          
          {yearSections.map((yearSection, yearIndex) => (
            <div 
              key={yearSection.year} 
              id={`year-${yearSection.year}`}
              data-year={yearSection.year}
              className="year-section mb-32 last:mb-0"
            >
              <div className="relative">
                {/* Year indicator with line */}
                <div className="flex items-center mb-16">
                  <motion.h3 
                    className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {yearSection.year}
                  </motion.h3>
                  <motion.div 
                    className="flex-1 h-px bg-gradient-to-r from-emerald-500 to-transparent ml-6"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                </div>
                
                {/* Alternating layout for achievements */}
                <div className="space-y-32">
                  {yearSection.achievements.map((achievement, index) => (
                    <motion.div 
                      key={achievement.id}
                      className={`relative flex flex-col ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } items-center gap-8 md:gap-16`}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                    >
                      {/* Image section with hover effect */}
                      <div className="w-full md:w-1/2">
                        <motion.div 
                          className="relative overflow-hidden aspect-video rounded-xl group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          {achievement.image && !achievement.image.endsWith('.pdf') && (
                            <>
                              <Image
                                src={achievement.image || `https://picsum.photos/seed/${achievement.id}/800/450`}
                                alt={achievement.title}
                                width={800}
                                height={450}
                                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                              
                              {/* Category badge */}
                              <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                                  achievement.category === 'award'
                                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                    : achievement.category === 'publication'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : achievement.category === 'project'
                                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                }`}>
                                  {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                                </span>
                              </div>
                              
                              <div className="absolute bottom-4 left-4 text-sm text-white/70 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {achievement.date}
                              </div>
                            </>
                          )}
                          
                          {/* PDF Publication special design */}
                          {achievement.image && achievement.image.endsWith('.pdf') && (
                            <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 flex flex-col items-center justify-center">
                              <svg className="h-24 w-24 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 15L12 12M12 12L15 15M12 12V17.5M13 8.2V5.3" />
                              </svg>
                              <h4 className="text-xl font-medium text-white mb-2">IEEMA Journal Publication</h4>
                              <p className="text-gray-400 text-center mb-4">October 2024 Issue</p>
                              <a 
                                href={achievement.image} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full hover:bg-blue-500/30 transition-colors"
                              >
                                <span>View Publication</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </a>
                              
                              <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                  Publication
                                </span>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Content section with animated reveal */}
                      <div className="w-full md:w-1/2">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{achievement.title}</h3>
                          
                          <p className="text-gray-300 mb-6 text-lg leading-relaxed">{achievement.description}</p>
                          
                          {achievement.location && (
                            <div className="flex items-center text-gray-400 mb-6">
                              <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{achievement.location}</span>
                            </div>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -z-10 opacity-10">
                        <div className={`w-64 h-64 rounded-full blur-3xl bg-gradient-to-r ${
                          achievement.category === 'award'
                            ? 'from-emerald-800/20 to-emerald-600/5'
                            : achievement.category === 'publication'
                            ? 'from-blue-800/20 to-blue-600/5'
                            : achievement.category === 'project'
                            ? 'from-purple-800/20 to-purple-600/5'
                            : 'from-amber-800/20 to-amber-600/5'
                        }`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action with perspective effect */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full transform -skew-y-12 origin-top-right bg-gradient-to-r from-emerald-900/10 to-blue-900/10 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full h-full transform skew-y-12 origin-bottom-left bg-gradient-to-r from-blue-900/10 to-emerald-900/10 translate-y-1/2"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Make History <br className="hidden md:block" />With Us?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join Team Ventures and be part of our next groundbreaking achievement. Together, we'll innovate, compete, and shape the future of sustainable technology.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button href="/contact" variant="primary" size="lg" className="px-12 py-6 text-xl">
                Join Our Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated scrolling indicator and other CSS */}
      <style jsx global>{`
        .mouse-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .mouse {
          width: 30px;
          height: 50px;
          border: 2px solid #10b981;
          border-radius: 20px;
          position: relative;
        }
        
        .wheel {
          width: 6px;
          height: 6px;
          background-color: #10b981;
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }
        
        @keyframes scroll {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }
        
        .arrow {
          margin-top: 5px;
        }
        
        .arrow span {
          display: block;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #10b981;
          border-right: 2px solid #10b981;
          transform: rotate(45deg);
          margin: -5px;
          animation: arrow 2s infinite;
        }
        
        @keyframes arrow {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

function StatCounter({ end, suffix = '', title, color }: { end: number; suffix?: string; title: string; color: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000; // animation duration in ms
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(animate);
            }
          };
          
          window.requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [end]);

  return (
    <motion.div
      ref={counterRef}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`text-6xl md:text-7xl font-bold mb-3 text-${color}-400 tracking-tight`}>
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-lg">{title}</div>
      <div className={`h-1 w-12 bg-${color}-500 mx-auto mt-4 rounded-full`}></div>
    </motion.div>
  );
}