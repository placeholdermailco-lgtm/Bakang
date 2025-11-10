import { useState } from 'react';
import { Heart, Target, Lightbulb, Layers, TestTube } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';

const processStages = [
  {
    id: 'empathize',
    title: 'Empathize',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    description: 'Understanding user needs and pain points',
    methods: [
      '15 in-depth user interviews with millennials aged 25-35',
      'Competitive analysis of 8 existing budgeting apps',
      'Survey of 200+ potential users about financial habits'
    ],
    findings: [
      'Users feel overwhelmed by complex financial jargon and complicated interfaces',
      '73% of respondents abandon budget tracking within 2 weeks due to manual effort',
      'Users want quick daily check-ins (under 30 seconds) rather than detailed sessions',
      'Emotional connection to financial goals increases engagement by 2.5x'
    ],
    image: 'https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzYyNzU2OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'define',
    title: 'Define',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Synthesizing research into actionable insights',
    methods: [
      'Created 2 primary user personas: "Ambitious Amy" and "Casual Chris"',
      'Mapped user journey from awareness to goal achievement',
      'Facilitated "How Might We" workshops with stakeholders'
    ],
    findings: [
      'Key insight: Users don\'t want to "budget" — they want to "spend confidently"',
      'Primary persona: 28-year-old professional with irregular income who wants control without complexity',
      'Critical user need: Know spending status in under 5 seconds',
      'HMW statement: "How might we make budget tracking feel effortless and even enjoyable?"'
    ],
    image: 'https://images.unsplash.com/photo-1759984782062-c90baecd0c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyNzY4OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'ideate',
    title: 'Ideate',
    icon: Lightbulb,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    description: 'Generating and exploring potential solutions',
    methods: [
      'Conducted 3 Crazy 8s sessions with the design team',
      'Created storyboards for 5 different user scenarios',
      'Prioritized features using a 2x2 impact/effort matrix'
    ],
    findings: [
      'Explored gamification, AI coaching, social features, and minimalist approaches',
      'Decided on a "smart simplicity" direction: powerful automation with minimal UI',
      'Key differentiator: Proactive insights instead of reactive reporting',
      'Innovation: "Spend confidence score" that replaces traditional budget alerts'
    ],
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYyNzU2MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'prototype',
    title: 'Prototype',
    icon: Layers,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'Building and refining the design solution',
    methods: [
      'Created low-fidelity wireframes for 12 core screens in Figma',
      'Developed interactive high-fidelity prototype with micro-interactions',
      'Designed comprehensive design system with 40+ reusable components'
    ],
    findings: [
      'Initial card-based layout tested well for quick scanning',
      'Added progressive disclosure to hide complexity until needed',
      'Color-coded budget categories improved recognition speed by 40%',
      'Smooth animations between states reduced perceived loading time'
    ],
    image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYyNjcxMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'test',
    title: 'Test',
    icon: TestTube,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Validating design decisions with real users',
    methods: [
      'Conducted 3 rounds of usability testing with 20 participants',
      'A/B tested onboarding flow variations (improved completion by 34%)',
      'Measured task completion rates for core user flows'
    ],
    findings: [
      'Initial onboarding was too long — reduced from 7 to 3 steps',
      'Users missed the settings icon — moved to bottom navigation',
      '95% task completion rate for "check if I can afford this purchase"',
      'Key iteration: Added transaction search after users repeatedly requested it'
    ],
    image: 'https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm90b3R5cGUlMjB0ZXN0aW5nfGVufDF8fHx8MTc2Mjc2ODkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function DesignProcess() {
  const [activeTab, setActiveTab] = useState('empathize');

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full mb-4">
              Design Thinking Process
            </div>
            <h2 className="mb-6">From Research to Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Following the five stages of Design Thinking, I approached this project with a user-centered methodology that balanced empathy, creativity, and validation.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 h-auto">
              {processStages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <TabsTrigger 
                    key={stage.id} 
                    value={stage.id}
                    className="flex flex-col gap-2 py-4 data-[state=active]:bg-white"
                  >
                    <Icon className={`w-5 h-5 ${stage.color}`} />
                    <span className="hidden sm:inline">{stage.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {processStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <TabsContent key={stage.id} value={stage.id} className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 ${stage.bgColor} rounded-xl flex items-center justify-center`}>
                          <Icon className={`w-7 h-7 ${stage.color}`} />
                        </div>
                        <div>
                          <h3 className="mb-1">{stage.title}</h3>
                          <p className="text-gray-600">{stage.description}</p>
                        </div>
                      </div>

                      <Card className="mb-6">
                        <CardContent className="pt-6">
                          <h4 className="mb-4">Methods Used</h4>
                          <ul className="space-y-3">
                            {stage.methods.map((method, index) => (
                              <li key={index} className="flex gap-3 text-gray-700">
                                <span className={stage.color}>•</span>
                                <span>{method}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="mb-4">Key Findings & Decisions</h4>
                          <ul className="space-y-3">
                            {stage.findings.map((finding, index) => (
                              <li key={index} className="flex gap-3 text-gray-700">
                                <span className={stage.color}>→</span>
                                <span>{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <div className="rounded-xl overflow-hidden shadow-lg sticky top-24">
                        <ImageWithFallback 
                          src={stage.image}
                          alt={`${stage.title} phase`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
