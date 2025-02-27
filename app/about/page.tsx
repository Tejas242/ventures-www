import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/90 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Team Ventures</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto my-6"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              A community of innovators, engineers and problem-solvers working on cutting-edge technology projects.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Team Ventures was founded in 2021 by a group of engineering students passionate about electric vehicles and renewable energy. What started as a small project team has grown into a vibrant community of innovators focused on developing sustainable technology solutions.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey began with a single electric vehicle prototype, and today we work across multiple engineering domains including automation, renewable energy systems, and smart infrastructure.
              </p>
              <p className="text-gray-300">
                Throughout our growth, our mission has remained constant: to provide hands-on learning experiences that bridge the gap between academic theory and real-world application while developing solutions for a sustainable future.
              </p>
            </div>
            <div className="relative h-96">
              <Image 
                src="https://picsum.photos/800/600" 
                alt="Team Ventures founding team" 
                fill 
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Vision & Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto my-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
              <div className="mb-4 w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300">
                To become a leading hub for innovative engineering solutions that address global sustainability challenges while nurturing the next generation of forward-thinking engineers.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
              <div className="mb-4 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To create hands-on learning opportunities through collaborative engineering projects that promote innovation, sustainability, and technological advancement while preparing students for future industry challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto my-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              These principles guide our work and define our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                icon: "💡",
                description: "We embrace creative thinking and continually seek new solutions to complex challenges."
              },
              {
                title: "Collaboration",
                icon: "🤝",
                description: "We believe in the power of teamwork across disciplines to achieve exceptional results."
              },
              {
                title: "Sustainability",
                icon: "🌱",
                description: "We are committed to developing environmentally responsible engineering solutions."
              },
              {
                title: "Excellence",
                icon: "🏆",
                description: "We strive for the highest quality in everything we design, build, and implement."
              },
              {
                title: "Learning",
                icon: "📚",
                description: "We foster continuous learning and skills development among all team members."
              },
              {
                title: "Impact",
                icon: "⚡",
                description: "We measure our success by the positive change our projects create in the world."
              },
            ].map((value, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-xl hover:bg-zinc-800/70 transition duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to innovate with us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Team Ventures and be part of engineering the sustainable future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/team" variant="primary" size="lg">
              Meet Our Team
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}