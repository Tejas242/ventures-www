"use client"
import { useEffect, useRef } from 'react';

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const missions = [
    {
      number: '01',
      title: 'Innovation & Research',
      description: 'Encourage students to explore and develop groundbreaking projects in emerging technologies like Electric Vehicles, Renewable Energy, and Automation.'
    },
    {
      number: '02',
      title: 'Skill Development',
      description: 'Provide hands-on experience in engineering design, prototyping, and industrial applications through workshops, competitions, and mentorship.'
    },
    {
      number: '03',
      title: 'Collaboration & Networking',
      description: 'Build strong connections with academia, industry leaders, and research institutions to create opportunities for learning and professional growth.'
    },
    {
      number: '04',
      title: 'Sustainability & Impact',
      description: 'Promote sustainable engineering solutions that contribute to society while fostering an eco-conscious mindset.'
    },
    {
      number: '05',
      title: 'Leadership & Teamwork',
      description: 'Cultivate leadership, teamwork, and project management skills to prepare students for future professional challenges.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Mission</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto my-6"></div>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {missions.map((mission, index) => (
            <div 
              key={mission.number}
              className="flex gap-8 items-start fade-in-section"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="hidden md:flex flex-col items-center">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-blue-500">
                  {mission.number}
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-emerald-500/30 to-blue-500/30 mt-4"></div>
              </div>
              
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 md:p-8 hover:border-emerald-700/30 transition-all duration-500 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center">
                  <span className="md:hidden text-emerald-500 mr-3">{mission.number}</span>
                  {mission.title}
                </h3>
                <p className="text-gray-300">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}