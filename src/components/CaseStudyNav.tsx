import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudyNavProps {
  onBack: () => void;
}

export function CaseStudyNav({ onBack }: CaseStudyNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="gap-2" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('foundation')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('deliverables')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Deliverables
            </button>
            <button 
              onClick={() => scrollToSection('lessons')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Lessons
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
