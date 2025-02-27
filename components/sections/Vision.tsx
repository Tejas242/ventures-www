"use client"
import { useEffect, useRef } from 'react';
import Card from '../ui/Card';

export default function Vision() {
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

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Vision</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto my-6"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            "To be a pioneering student-led technical club that fosters innovation, collaboration, and hands-on learning in engineering, empowering students to develop cutting-edge solutions for real-world challenges."
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Innovation"
            icon="/assets/icons/innovation.svg"
            className="fade-in-section"
            delay={0.1}
          >
            Exploring emerging technologies and developing groundbreaking solutions in electric vehicles and renewable energy systems.
          </Card>
          
          <Card 
            title="Collaboration"
            icon="/assets/icons/collaboration.svg"
            className="fade-in-section"
            delay={0.3}
          >
            Creating a vibrant ecosystem where students, faculty, and industry experts work together to solve complex engineering problems.
          </Card>
          
          <Card 
            title="Sustainability"
            icon="/assets/icons/sustainability.svg"
            className="fade-in-section"
            delay={0.5}
          >
            Designing eco-conscious solutions that address environmental challenges while promoting a sustainable engineering mindset.
          </Card>
        </div>
      </div>
    </section>
  );
}