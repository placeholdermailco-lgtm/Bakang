import { Button } from '../ui/button';

export function LandingNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-900">Sarah Chen</div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors hidden md:inline"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-gray-900 transition-colors hidden md:inline"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors hidden md:inline"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
