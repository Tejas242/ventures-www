"use client"
import { useRef } from 'react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-[20%] w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>
      
      {/* Circuit lines */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
          <path 
            d="M-100,500 C100,300 300,800 500,500 C700,200 900,600 1100,300" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M-100,600 C200,400 400,900 600,600 C800,300 1000,700 1200,400" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1" 
            fill="none"
          />
          <defs>
            <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Vision</span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-3xl">"</span>
            To be a pioneering student-led technical club that fosters innovation, collaboration, and hands-on learning in engineering, empowering students to develop cutting-edge solutions for real-world challenges.
            <span className="text-3xl">"</span>
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Innovation"
            icon="/file.svg"
            className="relative z-10"
            delay={0.1}
            variant="glowing"
          >
            <p className="text-gray-300">
              Exploring emerging technologies and developing groundbreaking solutions in electric vehicles and renewable energy systems.
            </p>
            <div className="mt-4 flex items-center text-emerald-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-sm font-medium">Learn about our approach</span>
            </div>
          </Card>
          
          <Card 
            title="Collaboration"
            icon="/globe.svg"
            className="relative z-10"
            delay={0.3}
            variant="glowing"
          >
            <p className="text-gray-300">
              Creating a vibrant ecosystem where students, faculty, and industry experts work together to solve complex engineering problems.
            </p>
            <div className="mt-4 flex items-center text-cyan-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-sm font-medium">Meet our partners</span>
            </div>
          </Card>
          
          <Card 
            title="Sustainability"
            icon="/window.svg"
            className="relative z-10"
            delay={0.5}
            variant="glowing"
          >
            <p className="text-gray-300">
              Designing eco-conscious solutions that address environmental challenges while promoting a sustainable engineering mindset.
            </p>
            <div className="mt-4 flex items-center text-blue-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-sm font-medium">Explore green initiatives</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}