"use client"
import { useRef } from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

type Event = {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const events: Event[] = [
    {
      date: "April 2024",
      title: "National EV Challenge",
      description: "Competing in the national electric vehicle design and race competition with our latest prototype.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.1997 17.0001C19.1997 17.5501 18.7497 18.0001 18.1997 18.0001H16.1997V16.0001H18.1997C18.7497 16.0001 19.1997 16.4501 19.1997 17.0001ZM5.79969 18.0001H3.79969C3.24969 18.0001 2.79969 17.5501 2.79969 17.0001C2.79969 16.4501 3.24969 16.0001 3.79969 16.0001H5.79969V18.0001ZM21.1997 10.9001V17.0001C21.1997 18.6601 19.8597 20.0001 18.1997 20.0001H16.1997V21.0001C16.1997 21.5501 15.7497 22.0001 15.1997 22.0001C14.6497 22.0001 14.1997 21.5501 14.1997 21.0001V20.0001H7.79969V21.0001C7.79969 21.5501 7.34969 22.0001 6.79969 22.0001C6.24969 22.0001 5.79969 21.5501 5.79969 21.0001V20.0001H3.79969C2.13969 20.0001 0.799688 18.6601 0.799688 17.0001V10.9001L2.10969 5.67007C2.40969 4.61007 3.37969 3.87007 4.48969 3.87007H17.4997C18.6097 3.87007 19.5797 4.61007 19.8797 5.67007L21.1997 10.9001ZM4.78969 13.0001C3.87969 13.0001 3.13969 13.7401 3.13969 14.6501C3.13969 15.5601 3.87969 16.3001 4.78969 16.3001C5.69969 16.3001 6.43969 15.5601 6.43969 14.6501C6.43969 13.7401 5.69969 13.0001 4.78969 13.0001ZM17.1997 13.0001C16.2897 13.0001 15.5497 13.7401 15.5497 14.6501C15.5497 15.5601 16.2897 16.3001 17.1997 16.3001C18.1097 16.3001 18.8497 15.5601 18.8497 14.6501C18.8497 13.7401 18.1097 13.0001 17.1997 13.0001ZM19.3297 10.0001H2.66969L1.79969 7.00007H20.1997L19.3297 10.0001Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      date: "February 2024",
      title: "Industry Workshop Series",
      description: "Four-week workshop series on sustainable engineering practices led by industry experts.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      date: "December 2023",
      title: "Innovation Hackathon",
      description: "48-hour hackathon focused on developing solutions for renewable energy integration challenges.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      date: "October 2023",
      title: "Tech Showcase",
      description: "Annual exhibition of student projects spanning electric vehicles, automation and renewable energy.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.67 19H5V14.33H10.67V19ZM10.67 13.33H5V8.67H10.67V13.33ZM19 19H11.67V14.33H19V19ZM19 13.33H11.67V8.67H19V13.33ZM19 7.67H5V5H19V7.67Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle animated circuit lines */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
          <motion.path 
            d="M-100,300 C100,400 300,200 500,300 C700,400 900,200 1100,300" 
            stroke="url(#timeline-grad)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.path 
            d="M-100,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400" 
            stroke="url(#timeline-grad)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Upcoming <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Events</span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"
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
            Join us at our upcoming events to learn, collaborate, and experience engineering innovation firsthand.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative mt-20 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline vertical line - animated gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full">
            <motion.div
              className="w-0.5 h-full origin-top"
              style={{ background: "linear-gradient(to bottom, rgb(6, 182, 212), rgb(37, 99, 235))" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          
          {/* Timeline events */}
          <div className="space-y-16 relative">
            {events.map((event, index) => (
              <motion.div 
                key={event.title} 
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Date tag with animated pulse */}
                <motion.div 
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'} mb-6 md:mb-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium border border-cyan-500/20 shadow-lg backdrop-blur-sm">
                    {event.date}
                  </span>
                </motion.div>
                
                {/* Circle marker with pulse effect */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center relative">
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-cyan-400/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    />
                    <div className="text-cyan-400">
                      {event.icon}
                    </div>
                  </div>
                </div>
                
                {/* Event content card */}
                <motion.div 
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pb-8 md:pb-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700/40 rounded-xl p-6 hover:border-cyan-800/40 hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-500 relative group overflow-hidden">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -top-px -right-px w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-400/40 to-transparent transform rotate-45 translate-x-4 -translate-y-4"></div>
                    </div>
                    
                    <motion.div 
                      className="mt-4 flex items-center text-cyan-400 font-medium text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Add to calendar
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            href="/events" 
            variant="primary"
            size="lg"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" fill="currentColor"/>
              </svg>
            }
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
}