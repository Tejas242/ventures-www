import Image from "next/image";
import Button from "@/components/ui/Button";

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

export default function ProjectsPage() {
  const projects: Project[] = [
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

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const statuses = ['All', 'Completed', 'Ongoing', 'Upcoming'];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/90 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto my-6"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Innovative engineering solutions developed by our team across various domains.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-10 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div>
              <label className="text-gray-300 block mb-2">Category</label>
              <select className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-md border border-zinc-700">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-300 block mb-2">Status</label>
              <select className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-md border border-zinc-700">
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-300 block mb-2">Year</label>
              <select className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-md border border-zinc-700">
                <option value="All">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-zinc-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-zinc-700/50">
                <div className="relative h-64">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                    <span className={`px-3 py-1 text-xs font-medium rounded-md ${
                      project.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                      project.status === 'ongoing' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                    <span className="text-gray-300 text-sm">{project.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-400">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 text-xs bg-zinc-700 text-gray-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button href={`/projects/${project.id}`} variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a project idea?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for new challenges and collaborations.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Propose a Project
          </Button>
        </div>
      </section>
    </main>
  );
}