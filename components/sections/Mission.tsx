"use client"
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const missions = [
    {
      number: '01',
      title: 'Innovation & Research',
      description: 'Encourage students to explore and develop groundbreaking projects in emerging technologies like Electric Vehicles, Renewable Energy, and Automation.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Skill Development',
      description: 'Provide hands-on experience in engineering design, prototyping, and industrial applications through workshops, competitions, and mentorship.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Collaboration & Networking',
      description: 'Build strong connections with academia, industry leaders, and research institutions to create opportunities for learning and professional growth.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Sustainability & Impact',
      description: 'Promote sustainable engineering solutions that contribute to society while fostering an eco-conscious mindset.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Leadership & Teamwork',
      description: 'Cultivate leadership, teamwork, and project management skills to prepare students for future professional challenges.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Mission</span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {missions.map((mission, index) => (
            <motion.div 
              key={mission.number}
              className="flex gap-8 items-start"
              variants={itemVariants}
            >
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-md"></div>
                  <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-800">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-blue-500">
                      {mission.number}
                    </span>
                  </div>
                  {index < missions.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-emerald-500/40 to-blue-500/20"></div>
                  )}
                </div>
              </div>
              
              <div className="bg-zinc-800/30 backdrop-blur-md border border-zinc-700/30 rounded-xl p-6 md:p-8 hover:border-blue-600/20 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 w-full relative group">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="flex items-center mb-4">
                  <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-blue-500/10 mr-4">
                    <span className="text-lg font-bold text-emerald-400">{mission.number}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center mr-4">
                      <div className="text-blue-400">
                        {mission.icon}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {mission.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 ml-0 md:ml-14">{mission.description}</p>
                
                {/* Decorative corner accent */}
                <div className="absolute -bottom-px -right-px w-8 h-8 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-12 h-12 -rotate-45 bg-gradient-to-b from-blue-500 to-emerald-500 opacity-30"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}