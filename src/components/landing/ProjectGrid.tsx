import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface ProjectGridProps {
  onViewProject: () => void;
}

const projects = [
  {
    id: 1,
    title: 'BudgetWise',
    subtitle: 'Personal Finance App',
    description: 'A mobile-first budgeting application that helps millennials take control of their finances through intelligent insights and automated tracking.',
    tags: ['Mobile App', 'FinTech', 'User Research'],
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNjk0ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    clickable: true
  },
  {
    id: 2,
    title: 'HealthHub',
    subtitle: 'Telemedicine Platform',
    description: 'Redesigning the patient experience for a telehealth platform, improving appointment booking by 45%.',
    tags: ['Web App', 'Healthcare', 'Design System'],
    image: 'https://images.unsplash.com/photo-1762448884906-e27b998e340a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzU4NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
    clickable: false
  },
  {
    id: 3,
    title: 'ShopLocal',
    subtitle: 'E-Commerce Marketplace',
    description: 'Creating a seamless shopping experience for local artisans to sell their products online.',
    tags: ['E-Commerce', 'Marketplace', 'Mobile-First'],
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2Mjc1ODI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
    clickable: false
  },
  {
    id: 4,
    title: 'EduLearn',
    subtitle: 'Learning Management System',
    description: 'Gamified learning platform that increased student engagement by 60% through interactive modules.',
    tags: ['EdTech', 'Gamification', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1648260295976-de09f77ab469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2MjcyMjgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
    clickable: false
  }
];

export function ProjectGrid({ onViewProject }: ProjectGridProps) {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full mb-4">
              Featured Work
            </div>
            <h2 className="mb-6">Selected Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated collection of my recent work, showcasing end-to-end product design from research to final delivery.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`overflow-hidden transition-all duration-300 ${
                  project.clickable 
                    ? 'hover:shadow-2xl cursor-pointer transform hover:-translate-y-1' 
                    : 'hover:shadow-lg'
                }`}
                onClick={project.clickable ? onViewProject : undefined}
              >
                <CardContent className="p-0">
                  <div className={`grid ${index === 0 ? 'md:grid-cols-2' : 'md:grid-cols-5'} gap-0`}>
                    <div className={`relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 ${index === 0 ? '' : 'md:col-span-2'}`}>
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white">Featured Case Study</Badge>
                        </div>
                      )}
                    </div>

                    <div className={`p-8 flex flex-col justify-center ${index === 0 ? '' : 'md:col-span-3'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="mb-1">{project.title}</h3>
                          <p className="text-gray-600">{project.subtitle}</p>
                        </div>
                        {project.clickable && (
                          <ArrowUpRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>

                      {project.clickable && (
                        <div className="mt-6">
                          <button 
                            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
                            onClick={onViewProject}
                          >
                            View Full Case Study
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
