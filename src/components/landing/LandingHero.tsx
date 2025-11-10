import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';

export function LandingHero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              UI/UX Designer
            </div>
          </div>
          
          <h1 className="mb-6">
            Crafting Intuitive Digital Experiences That Users Love
          </h1>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm Sarah Chen, a product designer based in San Francisco. I specialize in creating user-centered digital products that solve real problems through thoughtful research, strategic thinking, and beautiful design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Let's Talk
            </Button>
          </div>

          <div className="flex flex-wrap gap-12 justify-center text-center">
            <div>
              <div className="text-gray-900 mb-1">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">20+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">3</div>
              <div className="text-gray-600">Design Awards</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
