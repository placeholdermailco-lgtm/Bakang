import { Hero } from './Hero';
import { ProjectFoundation } from './ProjectFoundation';
import { DesignProcess } from './DesignProcess';
import { FinalDeliverables } from './FinalDeliverables';
import { LessonsLearned } from './LessonsLearned';
import { CaseStudyNav } from './CaseStudyNav';

interface CaseStudyPageProps {
  onBack: () => void;
}

export function CaseStudyPage({ onBack }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyNav onBack={onBack} />
      
      <main>
        <Hero />
        <ProjectFoundation />
        <DesignProcess />
        <FinalDeliverables />
        <LessonsLearned />
      </main>

      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Sarah Chen · UI/UX Designer</p>
        </div>
      </footer>
    </div>
  );
}
