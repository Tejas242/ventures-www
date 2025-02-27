"use client"
import { useEffect, useRef } from 'react';
import Button from '../ui/Button';

type Event = {
  date: string;
  title: string;
  description: string;
};

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const events: Event[] = [
    {
      date: "April 2024",
      title: "National EV Challenge",
      description: "Competing in the national electric vehicle design and race competition with our latest prototype."
    },
    {
      date: "February 2024",
      title: "Industry Workshop Series",
      description: "Four-week workshop series on sustainable engineering practices led by industry experts."
    },
    {
      date: "December 2023",
      title: "Innovation Hackathon",
      description: "48-hour hackathon focused on developing solutions for renewable energy integration challenges."
    },
    {
      date: "October 2023",
      title: "Tech Showcase",
      description: "Annual exhibition of student projects spanning electric vehicles, automation and renewable energy."
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
    
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Upcoming <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Events</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Join us at our upcoming events to learn, collaborate, and experience engineering innovation firsthand.
          </p>
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/70 via-cyan-500/70 to-emerald-500/70"></div>
          
          {/* Timeline events */}
          <div className="space-y-12 relative">
            {events.map((event, index) => (
              <div 
                key={event.title} 
                className={`timeline-item fade-in-section flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Circle marker */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-glow-cyan border-2 border-cyan-300 z-10"></div>
                
                {/* Event content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700/40 rounded-xl p-6 hover:border-cyan-800/40 transition-all duration-500 shadow-lg">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-md mb-4">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button href="/events" variant="primary">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}