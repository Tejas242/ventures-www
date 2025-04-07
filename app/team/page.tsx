'use client';

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

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
  const [activeTeam, setActiveTeam] = useState('leadership');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const departmentRefs = {
    leadership: useRef<HTMLDivElement>(null),
    electrical: useRef<HTMLDivElement>(null),
    mechanical: useRef<HTMLDivElement>(null),
    software: useRef<HTMLDivElement>(null),
    advisors: useRef<HTMLDivElement>(null),
  };

  const teamMembers: TeamMember[] = [
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
  
  const teamsByDepartment = useMemo(() => {
    return {
      leadership: teamMembers.filter(member => member.team === 'leadership'),
      electrical: teamMembers.filter(member => member.team === 'electrical'),
      mechanical: teamMembers.filter(member => member.team === 'mechanical'),
      software: teamMembers.filter(member => member.team === 'software'),
      advisors: teamMembers.filter(member => member.team === 'advisors'),
    };
  }, [teamMembers]);

  const handleOpenModal = useCallback((member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  }, [handleCloseModal]);

  const scrollToTeam = (team: string) => {
    const ref = departmentRefs[team as keyof typeof departmentRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveTeam(team);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('team-', '');
            setActiveTeam(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(departmentRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(departmentRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
            <pattern id="team-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h40v-10h20v30h10v-50h30v10h-20v-30h-10v40h-30v-10h-40v20zm80 0h20v10h-20v-10zm-60 0h20v10h-20v-10z" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="square" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#team-circuit)" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Team</span>
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto my-6"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "5rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Meet the passionate innovators, engineers, and problem-solvers working together to push the boundaries of sustainable technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Navigation */}
      <div className="sticky top-0 z-40 bg-zinc-900/90 backdrop-blur-lg border-b border-zinc-800 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-center overflow-x-auto hide-scrollbar gap-1 md:gap-2 py-4">
            {Object.keys(teamsByDepartment).map((team) => (
              <button
                key={team}
                onClick={() => scrollToTeam(team)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTeam === team
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                {team.charAt(0).toUpperCase() + team.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Organization Chart */}
      <section id="org-chart" className="py-24 bg-zinc-900 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Organization Structure
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto text-gray-300 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our team is structured to promote collaboration while maintaining clear leadership and specialized departments
            </motion.p>
          </motion.div>
          <div className="org-chart max-w-5xl mx-auto">
            <div className="relative">
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative z-10 bg-gradient-to-r from-emerald-500 to-blue-500 p-1 rounded-xl mb-24 w-64">
                  <div className="bg-zinc-900 rounded-lg p-6 text-center h-full">
                    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Leadership Team</h3>
                    <p className="text-gray-400 text-sm">Strategic direction and team management</p>
                  </div>
                  <motion.div 
                    className="absolute left-1/2 -bottom-24 w-0.5 h-24 bg-emerald-500/50"
                    initial={{ height: 0 }}
                    whileInView={{ height: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  ></motion.div>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full">
                <motion.div 
                  className="absolute top-[7.5rem] left-1/2 hidden md:block"
                  initial={{ width: 0 }}
                  whileInView={{ width: '66%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="h-0.5 bg-emerald-500/50 w-full -translate-x-1/2"></div>
                  <div className="absolute top-0 left-0 h-12 w-0.5 bg-emerald-500/50"></div>
                  <div className="absolute top-0 left-1/2 h-12 w-0.5 bg-emerald-500/50 -translate-x-1/2"></div>
                  <div className="absolute top-0 right-0 h-12 w-0.5 bg-emerald-500/50"></div>
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="bg-zinc-800 hover:bg-zinc-700/80 transition-colors border border-zinc-700 rounded-xl p-6 text-center shadow-xl">
                    <h3 className="text-xl font-bold mb-2 text-emerald-400">Electrical Team</h3>
                    <p className="text-gray-400 text-sm">Battery systems, electronics & controls</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <div className="bg-zinc-800 hover:bg-zinc-700/80 transition-colors border border-zinc-700 rounded-xl p-6 text-center shadow-xl">
                    <h3 className="text-xl font-bold mb-2 text-emerald-400">Mechanical Team</h3>
                    <p className="text-gray-400 text-sm">Chassis, aerodynamics & structural systems</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="bg-zinc-800 hover:bg-zinc-700/80 transition-colors border border-zinc-700 rounded-xl p-6 text-center shadow-xl">
                    <h3 className="text-xl font-bold mb-2 text-emerald-400">Software Team</h3>
                    <p className="text-gray-400 text-sm">User interfaces, telemetry & control systems</p>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="flex justify-center mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div 
                  className="absolute left-1/2 -top-24 w-0.5 h-24 bg-emerald-500/50"
                  initial={{ height: 0 }}
                  whileInView={{ height: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                ></motion.div>
                <div className="relative z-10 bg-zinc-800 hover:bg-zinc-700/80 transition-colors border border-zinc-700 rounded-xl p-6 text-center shadow-xl w-64">
                  <h3 className="text-xl font-bold mb-2 text-emerald-400">Faculty Advisors</h3>
                  <p className="text-gray-400 text-sm">Academic guidance and industry connections</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <div className="container mx-auto px-4 py-24">
        <div id="team-leadership" ref={departmentRefs.leadership} className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-4">Leadership</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision Carriers</h2>
                <p className="text-gray-300 text-lg mb-8">
                  The leadership team guides our vision, strategy, and operations, ensuring we stay on track to achieve our ambitious goals while fostering a culture of innovation and excellence.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
              {teamsByDepartment.leadership.map((member, idx) => (
                <TeamMemberCard 
                  key={member.id}
                  {...member}
                  isLarge={idx === 0}
                  onClick={() => handleOpenModal(member)}
                  index={idx}
                />
              ))}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#4ade80" strokeWidth="0.5" d="M10,10 L190,10 L190,190 L10,190 Z M20,20 L20,100 L100,100 L100,20 M120,20 L120,180 M120,80 L180,80 M140,80 L140,120 L180,120 M40,120 L80,120 L80,160 L40,160 L40,120" />
                  <circle cx="20" cy="20" r="3" fill="#4ade80" />
                  <circle cx="20" cy="100" r="3" fill="#4ade80" />
                  <circle cx="100" cy="100" r="3" fill="#4ade80" />
                  <circle cx="100" cy="20" r="3" fill="#4ade80" />
                  <circle cx="120" cy="20" r="3" fill="#4ade80" />
                  <circle cx="120" cy="180" r="3" fill="#4ade80" />
                  <circle cx="120" cy="80" r="3" fill="#4ade80" />
                  <circle cx="180" cy="80" r="3" fill="#4ade80" />
                  <circle cx="180" cy="120" r="3" fill="#4ade80" />
                  <circle cx="140" cy="120" r="3" fill="#4ade80" />
                  <circle cx="140" cy="80" r="3" fill="#4ade80" />
                  <circle cx="40" cy="120" r="3" fill="#4ade80" />
                  <circle cx="80" cy="120" r="3" fill="#4ade80" />
                  <circle cx="80" cy="160" r="3" fill="#4ade80" />
                  <circle cx="40" cy="160" r="3" fill="#4ade80" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="team-electrical" ref={departmentRefs.electrical} className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
                {teamsByDepartment.electrical.map((member, idx) => (
                  <TeamMemberCard 
                    key={member.id}
                    {...member}
                    isLarge={idx === 0}
                    onClick={() => handleOpenModal(member)}
                    index={idx}
                  />
                ))}
                <div className="absolute -bottom-12 -right-12 w-72 h-72 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#4ade80" strokeWidth="0.5" d="M10,10 L190,10 L190,190 L10,190 Z M20,20 L20,100 L100,100 L100,20 M120,20 L120,180 M120,80 L180,80 M140,80 L140,120 L180,120 M40,120 L80,120 L80,160 L40,160 L40,120" />
                    <circle cx="20" cy="20" r="3" fill="#4ade80" />
                    <circle cx="20" cy="100" r="3" fill="#4ade80" />
                    <circle cx="100" cy="100" r="3" fill="#4ade80" />
                    <circle cx="100" cy="20" r="3" fill="#4ade80" />
                    <circle cx="120" cy="20" r="3" fill="#4ade80" />
                    <circle cx="120" cy="180" r="3" fill="#4ade80" />
                    <circle cx="120" cy="80" r="3" fill="#4ade80" />
                    <circle cx="180" cy="80" r="3" fill="#4ade80" />
                    <circle cx="180" cy="120" r="3" fill="#4ade80" />
                    <circle cx="140" cy="120" r="3" fill="#4ade80" />
                    <circle cx="140" cy="80" r="3" fill="#4ade80" />
                    <circle cx="40" cy="120" r="3" fill="#4ade80" />
                    <circle cx="80" cy="120" r="3" fill="#4ade80" />
                    <circle cx="80" cy="160" r="3" fill="#4ade80" />
                    <circle cx="40" cy="160" r="3" fill="#4ade80" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-4">Electrical</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Powering Our Innovation</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our electrical team designs and implements the power systems, circuit boards, and control electronics that bring our projects to life, ensuring efficient and reliable performance.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div id="team-mechanical" ref={departmentRefs.mechanical} className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-4">Mechanical</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Building The Foundation</h2>
                <p className="text-gray-300 text-lg mb-8">
                  The mechanical team designs and fabricates the physical structure and dynamic systems of our projects, optimizing for performance, efficiency, and durability.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
              {teamsByDepartment.mechanical.map((member, idx) => (
                <TeamMemberCard 
                  key={member.id}
                  {...member}
                  isLarge={idx === 0}
                  onClick={() => handleOpenModal(member)}
                  index={idx}
                />
              ))}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#4ade80" strokeWidth="0.5" d="M10,10 L190,10 L190,190 L10,190 Z M20,20 L20,100 L100,100 L100,20 M120,20 L120,180 M120,80 L180,80 M140,80 L140,120 L180,120 M40,120 L80,120 L80,160 L40,160 L40,120" />
                  <circle cx="20" cy="20" r="3" fill="#4ade80" />
                  <circle cx="20" cy="100" r="3" fill="#4ade80" />
                  <circle cx="100" cy="100" r="3" fill="#4ade80" />
                  <circle cx="100" cy="20" r="3" fill="#4ade80" />
                  <circle cx="120" cy="20" r="3" fill="#4ade80" />
                  <circle cx="120" cy="180" r="3" fill="#4ade80" />
                  <circle cx="120" cy="80" r="3" fill="#4ade80" />
                  <circle cx="180" cy="80" r="3" fill="#4ade80" />
                  <circle cx="180" cy="120" r="3" fill="#4ade80" />
                  <circle cx="140" cy="120" r="3" fill="#4ade80" />
                  <circle cx="140" cy="80" r="3" fill="#4ade80" />
                  <circle cx="40" cy="120" r="3" fill="#4ade80" />
                  <circle cx="80" cy="120" r="3" fill="#4ade80" />
                  <circle cx="80" cy="160" r="3" fill="#4ade80" />
                  <circle cx="40" cy="160" r="3" fill="#4ade80" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="team-software" ref={departmentRefs.software} className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
                {teamsByDepartment.software.map((member, idx) => (
                  <TeamMemberCard 
                    key={member.id}
                    {...member}
                    isLarge={idx === 0}
                    onClick={() => handleOpenModal(member)}
                    index={idx}
                  />
                ))}
                <div className="absolute -bottom-12 -right-12 w-72 h-72 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#4ade80" strokeWidth="0.5" d="M10,10 L190,10 L190,190 L10,190 Z M20,20 L20,100 L100,100 L100,20 M120,20 L120,180 M120,80 L180,80 M140,80 L140,120 L180,120 M40,120 L80,120 L80,160 L40,160 L40,120" />
                    <circle cx="20" cy="20" r="3" fill="#4ade80" />
                    <circle cx="20" cy="100" r="3" fill="#4ade80" />
                    <circle cx="100" cy="100" r="3" fill="#4ade80" />
                    <circle cx="100" cy="20" r="3" fill="#4ade80" />
                    <circle cx="120" cy="20" r="3" fill="#4ade80" />
                    <circle cx="120" cy="180" r="3" fill="#4ade80" />
                    <circle cx="120" cy="80" r="3" fill="#4ade80" />
                    <circle cx="180" cy="80" r="3" fill="#4ade80" />
                    <circle cx="180" cy="120" r="3" fill="#4ade80" />
                    <circle cx="140" cy="120" r="3" fill="#4ade80" />
                    <circle cx="140" cy="80" r="3" fill="#4ade80" />
                    <circle cx="40" cy="120" r="3" fill="#4ade80" />
                    <circle cx="80" cy="120" r="3" fill="#4ade80" />
                    <circle cx="80" cy="160" r="3" fill="#4ade80" />
                    <circle cx="40" cy="160" r="3" fill="#4ade80" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-4">Software</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Digital Architects</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our software team develops the algorithms, interfaces, and control systems that make our projects intelligent and user-friendly, from embedded systems to data visualization.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div id="team-advisors" ref={departmentRefs.advisors} className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-4">Advisors</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Guiding Our Journey</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Our faculty advisors provide invaluable guidance, industry connections, and academic expertise to ensure our projects reach their full potential.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-8 relative">
              {teamsByDepartment.advisors.map((advisor, idx) => (
                <TeamMemberCard 
                  key={advisor.id}
                  {...advisor}
                  isLarge={false}
                  onClick={() => handleOpenModal(advisor)}
                  index={idx}
                />
              ))}
              
              {/* Background pattern SVG */}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#4ade80" strokeWidth="0.5" d="M10,10 L190,10 L190,190 L10,190 Z M20,20 L20,100 L100,100 L100,20 M120,20 L120,180 M120,80 L180,80 M140,80 L140,120 L180,120 M40,120 L80,120 L80,160 L40,160 L40,120" />
                  <circle cx="20" cy="20" r="3" fill="#4ade80" />
                  <circle cx="20" cy="100" r="3" fill="#4ade80" />
                  <circle cx="100" cy="100" r="3" fill="#4ade80" />
                  <circle cx="100" cy="20" r="3" fill="#4ade80" />
                  <circle cx="120" cy="20" r="3" fill="#4ade80" />
                  <circle cx="120" cy="180" r="3" fill="#4ade80" />
                  <circle cx="120" cy="80" r="3" fill="#4ade80" />
                  <circle cx="180" cy="80" r="3" fill="#4ade80" />
                  <circle cx="180" cy="120" r="3" fill="#4ade80" />
                  <circle cx="140" cy="120" r="3" fill="#4ade80" />
                  <circle cx="140" cy="80" r="3" fill="#4ade80" />
                  <circle cx="40" cy="120" r="3" fill="#4ade80" />
                  <circle cx="80" cy="120" r="3" fill="#4ade80" />
                  <circle cx="80" cy="160" r="3" fill="#4ade80" />
                  <circle cx="40" cy="160" r="3" fill="#4ade80" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-sm"
            onClick={handleCloseModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl shadow-black/50 border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-hidden">
                <div className="md:w-2/5 relative h-72 md:h-auto overflow-hidden">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-zinc-700 transition-colors md:hidden"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-2">
                        {selectedMember.team.charAt(0).toUpperCase() + selectedMember.team.slice(1)}
                      </div>
                      <h2 id="member-modal-title" className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {selectedMember.name}
                      </h2>
                      <p className="text-gray-400 mb-6">{selectedMember.role}</p>
                    </div>
                    <button
                      onClick={handleCloseModal}
                      className="hidden md:flex h-10 w-10 rounded-full bg-zinc-800 items-center justify-center text-white hover:bg-zinc-700 transition-colors"
                      aria-label="Close modal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="prose prose-invert prose-emerald max-w-none mb-8">
                    <p className="text-gray-300">{selectedMember.bio}</p>
                  </div>
                  {selectedMember.socialLinks && (
                    <div className="mt-auto">
                      <h3 className="text-lg font-medium text-white mb-3">Connect with {selectedMember.name.split(' ')[0]}</h3>
                      <div className="flex gap-3">
                        {selectedMember.socialLinks.github && (
                          <a
                            href={selectedMember.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-colors duration-300"
                            aria-label={`${selectedMember.name}'s GitHub`}
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {selectedMember.socialLinks.linkedin && (
                          <a
                            href={selectedMember.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-colors duration-300"
                            aria-label={`${selectedMember.name}'s LinkedIn`}
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                        {selectedMember.socialLinks.twitter && (
                          <a
                            href={selectedMember.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-colors duration-300"
                            aria-label={`${selectedMember.name}'s Twitter`}
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                        )}
                        {selectedMember.socialLinks.email && (
                          <a
                            href={selectedMember.socialLinks.email}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-colors duration-300"
                            aria-label={`Email ${selectedMember.name}`}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}