"use client"
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const values = [
    {
      title: "Innovation",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "We embrace creative thinking and continually seek new solutions to complex challenges."
    },
    {
      title: "Collaboration",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "We believe in the power of teamwork across disciplines to achieve exceptional results."
    },
    {
      title: "Sustainability",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "We are committed to developing environmentally responsible engineering solutions."
    },
    {
      title: "Excellence",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: "We strive for the highest quality in everything we design, build, and implement."
    },
    {
      title: "Learning",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "We foster continuous learning and skills development among all team members."
    },
    {
      title: "Impact",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "We measure our success by the positive change our projects create in the world."
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/90 z-0"></div>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
            <pattern id="about-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h40v-10h20v30h10v-50h30v10h-20v-30h-10v40h-30v-10h-40v20zm80 0h20v10h-20v-10zm-60 0h20v10h-20v-10z" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="square" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#about-circuit)" />
          </svg>
        </div>
        
        {/* Glowing orbs */}
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
              variants={fadeInUp}
            >
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Team Ventures</span>
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto my-6"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "5rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              A community of innovators, engineers and problem-solvers working on cutting-edge technology projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-zinc-900 relative">
        {/* Decorative elements */}
        <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-white mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Story
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                ></motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Team Ventures was founded in 2021 by a group of engineering students passionate about electric vehicles and renewable energy. What started as a small project team has grown into a vibrant community of innovators focused on developing sustainable technology solutions.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our journey began with a single electric vehicle prototype, and today we work across multiple engineering domains including automation, renewable energy systems, and smart infrastructure.
              </motion.p>
              
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Throughout our growth, our mission has remained constant: to provide hands-on learning experiences that bridge the gap between academic theory and real-world application while developing solutions for a sustainable future.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="relative h-96"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-xl blur-lg opacity-70"></div>
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image 
                  src="https://picsum.photos/800/600" 
                  alt="Team Ventures founding team" 
                  fill 
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-transparent rounded-xl"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-emerald-500/60 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald-500/60 rounded-bl-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-zinc-950 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Vision & Mission
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.span>
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center relative">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-emerald-400/20"
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
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become a leading hub for innovative engineering solutions that address global sustainability challenges while nurturing the next generation of forward-thinking engineers.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-cyan-500/20 hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center relative">
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
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create hands-on learning opportunities through collaborative engineering projects that promote innovation, sustainability, and technological advancement while preparing students for future industry challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Core Values
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
              These principles guide our work and define our culture
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/30 hover:border-emerald-600/20 hover:shadow-xl hover:shadow-emerald-900/10 group transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-400 relative">
                  {value.icon}
                  
                  {/* Decorative corner accent */}
                  <div className="absolute -top-px -right-px w-4 h-4 overflow-hidden">
                    <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-emerald-400/40 to-transparent transform rotate-45 translate-x-2 -translate-y-2"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-[10%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-[10%] w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">innovate</span> with us?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join Team Ventures and be part of engineering the sustainable future.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button href="/team" variant="primary" size="lg">
              Meet Our Team
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get Involved
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}