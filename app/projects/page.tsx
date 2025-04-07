"use client"
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  technologies: string[];
};

type FilterState = {
  category: string;
  status: string;
  year: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "EcoRacer EV Prototype",
    category: "Electric Vehicles",
    description: "A student-designed electric racing vehicle focused on energy efficiency and performance, achieving top ranks in national competitions.",
    image: "https://picsum.photos/800/500",
    year: "2024",
    status: 'ongoing',
    technologies: ['Electric Drivetrain', 'Composite Materials', 'Battery Management', 'Aerodynamics']
  },
  {
    id: 2,
    title: "Smart Microgrid System",
    category: "Renewable Energy",
    description: "An intelligent campus microgrid that optimizes renewable energy sources, reducing carbon footprint and providing hands-on learning opportunities.",
    image: "https://picsum.photos/800/500",
    year: "2023",
    status: 'completed',
    technologies: ['Solar PV', 'Energy Storage', 'IoT Monitoring', 'Smart Controls']
  },
  {
    id: 3,
    title: "Autonomous Delivery Robot",
    category: "Automation",
    description: "A self-navigating robot designed for last-mile delivery on campus, utilizing computer vision and machine learning algorithms.",
    image: "https://picsum.photos/800/500",
    year: "2023",
    status: 'completed',
    technologies: ['Computer Vision', 'Machine Learning', 'Embedded Systems', 'Path Planning']
  },
  {
    id: 4,
    title: "EV Charging Infrastructure Network",
    category: "Infrastructure",
    description: "A network of smart EV charging stations across campus with load balancing and renewable energy integration capabilities.",
    image: "https://picsum.photos/800/500",
    year: "2023",
    status: 'completed',
    technologies: ['Smart Grid', 'Power Electronics', 'IoT', 'User Interface Design']
  },
  {
    id: 5,
    title: "Hydroponics Monitoring System",
    category: "AgriTech",
    description: "An automated system for monitoring and controlling hydroponic farming parameters, optimizing crop growth and resource usage.",
    image: "https://picsum.photos/800/500",
    year: "2022",
    status: 'ongoing',
    technologies: ['Sensors', 'Microcontrollers', 'Data Analytics', 'Automation']
  },
  {
    id: 6,
    title: "Solar-Powered Water Purification",
    category: "Environmental",
    description: "A portable water purification system powered by solar energy, designed for deployment in areas with limited access to clean water and electricity.",
    image: "https://picsum.photos/800/500",
    year: "2022",
    status: 'completed',
    technologies: ['Solar Power', 'Filtration Technology', 'UV Purification', 'Compact Design']
  },
  {
    id: 7,
    title: "Advanced Battery Testing Facility",
    category: "Energy Storage",
    description: "A state-of-the-art facility for testing and characterizing various battery chemistries and configurations for electric vehicle applications.",
    image: "https://picsum.photos/800/500",
    year: "2024",
    status: 'upcoming',
    technologies: ['Battery Analysis', 'Thermal Management', 'Data Acquisition', 'Safety Systems']
  },
  {
    id: 8,
    title: "Waste-to-Energy Converter",
    category: "Renewable Energy",
    description: "A system that converts organic waste into biogas and subsequently into electricity, providing a sustainable solution for campus waste management.",
    image: "https://picsum.photos/800/500",
    year: "2022",
    status: 'completed',
    technologies: ['Anaerobic Digestion', 'Gas Handling', 'Power Generation', 'Process Control']
  }
];

export default function ProjectsPage() {
  // Using useMemo for derived data to prevent recalculation on every render
  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(projectsData.map(project => project.category)))], 
    []
  );
  
  const statuses = useMemo(() => ['All', 'Completed', 'Ongoing', 'Upcoming'], []);
  
  const years = useMemo(() => 
    ['All', ...Array.from(new Set(projectsData.map(project => project.year))).sort().reverse()], 
    []
  );

  // State for filters and filtered projects
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    status: 'All',
    year: 'All',
  });
  
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [isFiltering, setIsFiltering] = useState(false);

  // Apply filters effect - with optimized dependencies
  useEffect(() => {
    // Set filtering state to show loading
    setIsFiltering(true);
    
    // Clear any existing timer to prevent race conditions
    const filterId = setTimeout(() => {
      const result = projectsData.filter(project => {
        const matchesCategory = filters.category === 'All' || project.category === filters.category;
        const matchesStatus = filters.status === 'All' || 
          project.status.toLowerCase() === filters.status.toLowerCase();
        const matchesYear = filters.year === 'All' || project.year === filters.year;
        
        return matchesCategory && matchesStatus && matchesYear;
      });
      
      setFilteredProjects(result);
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(filterId);
  }, [filters]); // Removed projectsData dependency since it's now static

  // Handle filter changes with a stable callback
  const handleFilterChange = (type: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/90 z-0"></div>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
            <pattern id="projects-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h40v-10h20v30h10v-50h30v10h-20v-30h-10v40h-30v-10h-40v20zm80 0h20v10h-20v-10zm-60 0h20v10h-20v-10z" fill="none" strokeWidth="1" stroke="currentColor" strokeLinecap="square" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#projects-circuit)" />
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
              variants={itemVariants}
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Projects</span>
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto my-6"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "5rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-300"
              variants={itemVariants}
            >
              Innovative engineering solutions developed by our team across various domains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-10 bg-zinc-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="bg-zinc-800/40 p-6 rounded-xl border border-zinc-700/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="category-filter" className="text-gray-300 block mb-2 text-sm">Category</label>
                <div className="relative">
                  <select 
                    id="category-filter"
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full bg-zinc-900 text-gray-200 px-4 py-2.5 rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="status-filter" className="text-gray-300 block mb-2 text-sm">Status</label>
                <div className="relative">
                  <select 
                    id="status-filter"
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-full bg-zinc-900 text-gray-200 px-4 py-2.5 rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="year-filter" className="text-gray-300 block mb-2 text-sm">Year</label>
                <div className="relative">
                  <select 
                    id="year-filter"
                    value={filters.year}
                    onChange={(e) => handleFilterChange('year', e.target.value)}
                    className="w-full bg-zinc-900 text-gray-200 px-4 py-2.5 rounded-lg border border-zinc-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center">
              <span className="text-sm text-gray-400">
                Showing {filteredProjects.length} of {projectsData.length} projects
              </span>
              
              {/* Reset filters button */}
              {(filters.category !== 'All' || filters.status !== 'All' || filters.year !== 'All') && (
                <button
                  onClick={() => setFilters({ category: 'All', status: 'All', year: 'All' })}
                  className="ml-auto flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  aria-label="Reset filters"
                  tabIndex={0}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset Filters
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          {isFiltering ? (
            <div className="flex justify-center py-20">
              <div className="relative h-12 w-12">
                <div className="absolute animate-ping h-full w-full rounded-full bg-emerald-400 opacity-20"></div>
                <div className="relative rounded-full h-12 w-12 flex items-center justify-center">
                  <svg className="animate-spin h-8 w-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-block">
                <svg className="w-16 h-16 text-gray-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-4">No projects match your current filter criteria.</p>
              <button
                onClick={() => setFilters({ category: 'All', status: 'All', year: 'All' })}
                className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-md hover:bg-emerald-600/30 transition-colors duration-300"
                aria-label="Reset filters"
                tabIndex={0}
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
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
            Have a <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">project idea?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We're always looking for new challenges and collaborations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Propose a Project
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// ProjectCard Component
const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleToggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <motion.div 
      className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/30 hover:border-emerald-500/30 group transition-all duration-500 h-full flex flex-col backdrop-blur-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="relative h-60 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={800}
          height={500}
          style={{ objectFit: 'cover' }}
          className="w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
        
        {/* Status badge and year */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            project.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
            project.status === 'ongoing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
            'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
          <span className="text-gray-300 text-sm px-3 py-1 bg-zinc-800/80 rounded-full">
            {project.year}
          </span>
        </div>
        
        {/* Category badge at top */}
        <div className="absolute top-4 left-4">
          <span className="bg-zinc-900/80 text-xs px-3 py-1 rounded-full text-gray-400 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs bg-zinc-700 text-gray-300 rounded-md border border-zinc-600/30 hover:bg-zinc-600 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleToggleExpand}
          className="w-full flex items-center justify-center px-4 py-2 border border-zinc-600/40 bg-zinc-700/30 hover:bg-emerald-600/20 hover:border-emerald-500/40 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          aria-expanded={isExpanded}
          tabIndex={0}
          aria-label={isExpanded ? "Hide project details" : "Show project details"}
        >
          {isExpanded ? "Hide Details" : "Show Details"}
          <svg 
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Expanded details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-zinc-700/30"
            >
              <div className="space-y-4">
                {/* Additional project details */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Project Impact
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {project.category === "Electric Vehicles" ? 
                      "This project contributes to sustainable transportation and reduced carbon emissions through innovative EV technologies." :
                    project.category === "Renewable Energy" ?
                      "This initiative advances clean energy adoption, energy independence, and contributes to climate change mitigation." :
                    project.category === "Automation" ?
                      "This project enhances efficiency and productivity while reducing human error in critical processes." :
                    project.category === "Infrastructure" ?
                      "This development improves critical infrastructure, enhancing community resilience and sustainability." :
                    project.category === "AgriTech" ?
                      "This innovation helps optimize agricultural practices, conserve resources, and improve food security." :
                    project.category === "Environmental" ?
                      "This initiative directly addresses environmental challenges and promotes ecological sustainability." :
                    project.category === "Energy Storage" ?
                      "This project advances energy storage solutions critical for renewable energy adoption and grid stability." :
                      "This project contributes significantly to sustainability and technological advancement."}
                  </p>
                </div>
                
                {/* Team members or stakeholders */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Contributors
                  </h4>
                  <p className="text-gray-300 text-sm">
                    A collaborative effort involving students, faculty, and industry partners with expertise in {project.technologies.join(", ")}.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};