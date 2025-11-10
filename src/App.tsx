import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { CaseStudyPage } from './components/CaseStudyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'case-study'>('landing');

  if (currentPage === 'case-study') {
    return <CaseStudyPage onBack={() => setCurrentPage('landing')} />;
  }

  return <LandingPage onViewProject={() => setCurrentPage('case-study')} />;
}
