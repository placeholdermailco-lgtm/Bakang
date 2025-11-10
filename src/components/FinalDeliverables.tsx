import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Smartphone } from 'lucide-react';

const mockupScreens = [
  {
    title: 'Onboarding Flow',
    description: 'Streamlined 3-step onboarding that gets users started in under 60 seconds',
    screens: [
      { name: 'Welcome', badge: 'Step 1' },
      { name: 'Connect Bank', badge: 'Step 2' },
      { name: 'Set Goals', badge: 'Step 3' }
    ]
  },
  {
    title: 'Dashboard',
    description: 'At-a-glance view of spending health with proactive insights',
    screens: [
      { name: 'Home', badge: 'Main' },
      { name: 'Spend Score', badge: 'Feature' }
    ]
  },
  {
    title: 'Transaction Management',
    description: 'Intelligent categorization with easy search and filtering',
    screens: [
      { name: 'Transactions', badge: 'List View' },
      { name: 'Details', badge: 'Edit' },
      { name: 'Search', badge: 'Filter' }
    ]
  },
  {
    title: 'Goals & Insights',
    description: 'Personalized financial goals with progress tracking and celebrations',
    screens: [
      { name: 'Goals', badge: 'Overview' },
      { name: 'Progress', badge: 'Detail' },
      { name: 'Achievement', badge: 'Celebration' }
    ]
  }
];

const criticalFlow = [
  {
    step: '01',
    title: 'Check Spending Status',
    description: 'User opens app and immediately sees their "spend confidence score" — a simple indicator of whether they\'re on track with their budget.',
    highlight: 'Under 3 seconds to comprehend financial status'
  },
  {
    step: '02',
    title: 'View Category Breakdown',
    description: 'User taps on a spending category to see detailed transactions and how much budget remains for the month.',
    highlight: 'Color-coded visuals make status instantly clear'
  },
  {
    step: '03',
    title: 'Make Purchase Decision',
    description: 'Based on clear insights, user confidently decides whether to make a purchase, knowing it won\'t derail their budget.',
    highlight: 'Empowerment through transparency'
  }
];

export function FinalDeliverables() {
  return (
    <section id="deliverables" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full mb-4">
              Final Deliverables
            </div>
            <h2 className="mb-6">The Solution in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-fidelity mockups showcasing the key features and user flows of the BudgetWise application.
            </p>
          </div>

          {/* Critical User Flow */}
          <div className="mb-24">
            <h3 className="mb-8 text-center">Critical User Flow: Checking Spending Status</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {criticalFlow.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full mb-4">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r">
                    <p className="text-blue-900">{item.highlight}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Flow mockups */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-xl aspect-[9/16] flex items-center justify-center">
                    <div className="text-center text-white">
                      <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="opacity-75">Screen {item} Preview</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup Gallery */}
          <div className="space-y-20">
            {mockupScreens.map((section, index) => (
              <div key={index}>
                <div className="mb-8">
                  <h3 className="mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>

                <div className={`grid gap-6 ${section.screens.length === 2 ? 'md:grid-cols-2 max-w-3xl' : 'md:grid-cols-3'}`}>
                  {section.screens.map((screen, screenIndex) => (
                    <div key={screenIndex} className="relative group">
                      {/* Device Frame */}
                      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-3xl z-10" />
                        
                        {/* Screen */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.5rem] aspect-[9/16] overflow-hidden">
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <Smartphone className="w-16 h-16 text-gray-300 mb-4" />
                            <Badge variant="secondary" className="mb-2">{screen.badge}</Badge>
                            <p className="text-gray-600 text-center">{screen.name}</p>
                          </div>
                        </div>
                      </div>

                      {/* Screen Label */}
                      <div className="mt-4 text-center">
                        <p className="text-gray-900">{screen.name}</p>
                        <Badge variant="outline" className="mt-1">{screen.badge}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Design System Highlight */}
          <div className="mt-24 bg-gray-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h3 className="mb-4">Design System & Components</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Created a comprehensive design system with 40+ reusable components, ensuring consistency and scalability across the entire application.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-blue-600 mb-2">Colors</div>
                <div className="flex gap-2 justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600" />
                  <div className="w-8 h-8 rounded-full bg-purple-600" />
                  <div className="w-8 h-8 rounded-full bg-green-600" />
                  <div className="w-8 h-8 rounded-full bg-red-600" />
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-purple-600 mb-2">Typography</div>
                <div className="space-y-1">
                  <div className="h-3 bg-gray-200 rounded" />
                  <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto" />
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-green-600 mb-2">Components</div>
                <div className="text-gray-900">40+</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-orange-600 mb-2">Icons</div>
                <div className="text-gray-900">120+</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
