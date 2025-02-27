'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  team: string;
  image: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
};

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  // Sample team members data
  const teamMembers: TeamMember[] = [
    // Leadership
    {
      id: 1,
      name: "Alex Chen",
      role: "Team Lead",
      team: "leadership",
      image: "https://picsum.photos/seed/alex/400/400",
      bio: "Alex has led the team since 2022, focusing on strategic growth and fostering industry partnerships. With a background in mechanical engineering and renewable energy systems, they guide overall project direction and team development.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
        email: "mailto:alex@ventures.edu"
      }
    },
    {
      id: 2,
      name: "Jordan Taylor",
      role: "Technical Director",
      team: "leadership",
      image: "https://picsum.photos/seed/jordan/400/400",
      bio: "Jordan oversees all technical aspects of the team's projects, ensuring integration between different subsystems and maintaining quality standards. They have extensive experience in EV powertrain systems and energy storage solutions.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/"
      }
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Operations Manager",
      team: "leadership",
      image: "https://picsum.photos/seed/maya/400/400",
      bio: "Maya manages team logistics, budget planning, and resource allocation. Their background in industrial engineering helps optimize team workflows and ensure effective project execution within timeline and budget constraints.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "mailto:maya@ventures.edu"
      }
    },
    
    // Electrical Team
    {
      id: 4,
      name: "Sam Rodriguez",
      role: "Electrical Lead",
      team: "electrical",
      image: "https://picsum.photos/seed/sam/400/400",
      bio: "Sam leads the electrical subsystem development, focusing on battery management systems and motor controllers. They have participated in multiple EV competitions and have expertise in high-voltage systems and power electronics.",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 5,
      name: "Priya Kumar",
      role: "Electronics Engineer",
      team: "electrical",
      image: "https://picsum.photos/seed/priya/400/400",
      bio: "Priya specializes in embedded systems and sensor integration for our vehicles. Their work ensures reliable data collection and processing for vehicle control systems and telemetry.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/"
      }
    },
    {
      id: 6,
      name: "Jamal Washington",
      role: "Battery Systems Specialist",
      team: "electrical",
      image: "https://picsum.photos/seed/jamal/400/400",
      bio: "Jamal focuses on battery pack design, thermal management, and cell balancing technologies. Their research on innovative cooling solutions has significantly improved our battery performance in competition scenarios.",
      socialLinks: {
        linkedin: "https://linkedin.com/"
      }
    },
    
    // Mechanical Team
    {
      id: 7,
      name: "Sophia Martinez",
      role: "Mechanical Lead",
      team: "mechanical",
      image: "https://picsum.photos/seed/sophia/400/400",
      bio: "Sophia directs chassis design and manufacturing processes, with expertise in lightweight materials and structural optimization. Their leadership has resulted in significant weight reductions while maintaining structural integrity.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        github: "https://github.com/"
      }
    },
    {
      id: 8,
      name: "David Park",
      role: "Aerodynamics Specialist",
      team: "mechanical",
      image: "https://picsum.photos/seed/david/400/400",
      bio: "David leads aerodynamic development through CFD analysis and wind tunnel testing. Their innovative designs have improved vehicle efficiency and stability, contributing to our competitive performance.",
      socialLinks: {
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 9,
      name: "Emma Wilson",
      role: "Suspension Engineer",
      team: "mechanical",
      image: "https://picsum.photos/seed/emma/400/400",
      bio: "Emma designs and optimizes suspension systems for maximum performance and handling. Their work balances ride comfort with dynamic performance across various competition events.",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    
    // Software Team
    {
      id: 10,
      name: "Raj Sharma",
      role: "Software Lead",
      team: "software",
      image: "https://picsum.photos/seed/raj/400/400",
      bio: "Raj coordinates software development across vehicle systems, from low-level embedded controllers to telemetry applications. They bring expertise in real-time systems and distributed computing.",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 11,
      name: "Lin Wei",
      role: "Control Systems Engineer",
      team: "software",
      image: "https://picsum.photos/seed/lin/400/400",
      bio: "Lin develops control algorithms for vehicle dynamics and powertrain management. Their work on predictive energy management has significantly improved our vehicle's range and efficiency.",
      socialLinks: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 12,
      name: "Tyler Johnson",
      role: "UI/UX Designer",
      team: "software",
      image: "https://picsum.photos/seed/tyler/400/400",
      bio: "Tyler creates user interfaces for both driver display systems and team management software. Their designs prioritize clarity and accessibility while providing critical information at a glance.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/"
      }
    },
    
    // Faculty Advisors
    {
      id: 13,
      name: "Dr. Rebecca Fox",
      role: "Faculty Advisor",
      team: "advisors",
      image: "https://picsum.photos/seed/rebecca/400/400",
      bio: "Dr. Fox provides guidance on electrical engineering aspects of our projects. Her research in power electronics and energy systems offers valuable insights for our vehicle development.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "mailto:rfox@university.edu"
      }
    },
    {
      id: 14,
      name: "Prof. Michael Okonjo",
      role: "Technical Advisor",
      team: "advisors",
      image: "https://picsum.photos/seed/michael/400/400",
      bio: "Prof. Okonjo specializes in automotive engineering and provides strategic direction on vehicle dynamics and system integration. His industry experience helps bridge academic learning with practical applications.",
      socialLinks: {
        linkedin: "https://linkedin.com/"
      }
    }
  ];

  const teamFilters = [
    { value: 'all', label: 'All Members' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'electrical', label: 'Electrical Team' },
    { value: 'mechanical', label: 'Mechanical Team' },
    { value: 'software', label: 'Software Team' },
    { value: 'advisors', label: 'Faculty Advisors' }
  ];

  const filteredMembers = teamMembers.filter(member => 
    activeFilter === 'all' || member.team === activeFilter
  );

  useEffect(() => {
    // Close modal when clicking escape key
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Control body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Intersection observer for scroll animations
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
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openMemberModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div ref={pageRef} className="bg-zinc-950 min-h-screen pt-24">
      {/* Header section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950"></div>
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-cyan-500" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Team</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto my-6"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals behind our innovative projects, bringing diverse expertise and passion for sustainable engineering solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team filter section */}
      <section className="py-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {teamFilters.map((filter) => (
              <motion.button
                key={filter.value}
                className={`px-4 py-2 rounded-full text-sm border ${
                  activeFilter === filter.value
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-transparent border-zinc-700 text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Team members grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-emerald-900/5 fade-in-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => openMemberModal(member)}
              >
                <div className="relative aspect-square">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-emerald-400">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-zinc-950 fade-in-section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              We're always looking for passionate individuals to join Team Ventures. Whether you're interested in electrical systems, mechanical design, software development, or business operations, there's a place for you on our team.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 shadow-sm hover:shadow-md hover:shadow-emerald-900/20 transition-all duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team member modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="flex items-center justify-center min-h-screen px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-800 border border-zinc-700 rounded-xl shadow-xl p-6 md:p-8 w-full max-w-2xl relative z-50"
            >
              {/* Close button */}
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-zinc-700/50"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedMember.name}</h3>
                  <p className="text-emerald-400 mb-4">{selectedMember.role}</p>
                  
                  <div className="text-gray-300 mb-6 space-y-4">
                    <p>{selectedMember.bio}</p>
                  </div>
                  
                  {selectedMember.socialLinks && (
                    <div className="flex space-x-3">
                      {selectedMember.socialLinks.linkedin && (
                        <a 
                          href={selectedMember.socialLinks.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      
                      {selectedMember.socialLinks.github && (
                        <a 
                          href={selectedMember.socialLinks.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                      
                      {selectedMember.socialLinks.twitter && (
                        <a 
                          href={selectedMember.socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-sky-500 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      
                      {selectedMember.socialLinks.email && (
                        <a 
                          href={selectedMember.socialLinks.email}
                          className="text-gray-400 hover:text-emerald-500 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-section.appear {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}