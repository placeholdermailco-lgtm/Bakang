import { Target, AlertCircle, Lightbulb } from 'lucide-react';

export function ProjectFoundation() {
  return (
    <section id="foundation" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full mb-4">
              Project Foundation
            </div>
            <h2 className="mb-6">Understanding the Challenge</h2>
          </div>

          <div className="space-y-12">
            {/* Project Brief */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Project Brief</h3>
                <p className="text-gray-700 leading-relaxed">
                  BudgetWise is a mobile application designed for a fintech startup targeting millennials aged 25-35 who struggle with personal finance management. The goal was to create an intuitive, engaging budgeting tool that automates expense tracking while providing actionable insights to help users achieve their financial goals.
                </p>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3">The Problem Statement</h3>
                <div className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 leading-relaxed italic">
                    "Our target users, young professionals aged 25-35, are facing <span className="text-red-600">difficulty managing their finances</span> due to overwhelming information, manual tracking requirements, and lack of personalized insights, which results in <span className="text-red-600">financial stress, overspending, and failure to reach savings goals</span>. We need to find a way to <span className="text-red-600">simplify budget tracking and provide clear, actionable guidance</span> that empowers users to make confident financial decisions."
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3">The Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We designed a mobile-first budgeting application that combines automated expense tracking with intelligent categorization and personalized financial insights. The solution features:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-green-600">•</span>
                    <span>Automatic transaction syncing and smart categorization that eliminates manual data entry</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">•</span>
                    <span>Visual spending analytics with real-time budget tracking and alerts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">•</span>
                    <span>Personalized goal-setting features with milestone celebrations to maintain motivation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">•</span>
                    <span>Simple, card-based interface optimized for quick daily check-ins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
