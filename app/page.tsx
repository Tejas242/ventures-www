import Hero from '../components/ui/Hero';
import Vision from '../components/sections/Vision';
import Mission from '../components/sections/Mission';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import Timeline from '../components/sections/Timeline';

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <Vision />
      <Mission />
      <ProjectsShowcase />
      <Timeline />
    </main>
  );
}