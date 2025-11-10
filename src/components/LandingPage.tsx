import { LandingHero } from './landing/LandingHero';
import { About } from './landing/About';
import { ProjectGrid } from './landing/ProjectGrid';
import { Contact } from './landing/Contact';
import { LandingNav } from './landing/LandingNav';

interface LandingPageProps {
  onViewProject: () => void;
}

export function LandingPage({ onViewProject }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      
      <main>
        <LandingHero />
        <About />
        <ProjectGrid onViewProject={onViewProject} />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Sarah Chen · Crafted with care</p>
        </div>
      </footer>
    </div>
  );
}
