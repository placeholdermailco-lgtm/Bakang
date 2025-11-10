import { Card, CardContent } from './ui/card';
import { BookOpen, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

export function LessonsLearned() {
  return (
    <section id="lessons" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full mb-4">
              Reflection
            </div>
            <h2 className="mb-6">Lessons Learned & Next Steps</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Key Learnings */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3>Key Learnings</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span><strong>Simplicity wins:</strong> Users overwhelmingly preferred a clean, focused interface over feature-rich complexity.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span><strong>Test early and often:</strong> Our initial onboarding would have failed without multiple testing rounds.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span><strong>Language matters:</strong> Reframing "budget" as "spend confidence" dramatically improved emotional response.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span><strong>Automation is expected:</strong> Modern users won't tolerate manual data entry for financial tracking.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3>Challenges Faced</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange-600 flex-shrink-0">•</span>
                    <span><strong>Technical constraints:</strong> Bank API limitations required creative solutions for real-time data syncing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 flex-shrink-0">•</span>
                    <span><strong>Privacy concerns:</strong> Users were initially hesitant about connecting bank accounts — required trust-building UI.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 flex-shrink-0">•</span>
                    <span><strong>Feature prioritization:</strong> Had to cut several "nice-to-have" features to maintain launch timeline.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 flex-shrink-0">•</span>
                    <span><strong>Diverse user needs:</strong> Balancing simplicity for beginners with depth for power users was an ongoing tension.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Impact & Results */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h3>Impact & Results</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-green-600 mb-1">95%</div>
                  <p className="text-gray-600">Task completion rate</p>
                </div>
                <div>
                  <div className="text-green-600 mb-1">4.7/5</div>
                  <p className="text-gray-600">Average user rating in beta</p>
                </div>
                <div>
                  <div className="text-green-600 mb-1">34%</div>
                  <p className="text-gray-600">Increase in onboarding completion</p>
                </div>
                <div>
                  <div className="text-green-600 mb-1">2.5x</div>
                  <p className="text-gray-600">Daily engagement vs. competitors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Enhancements */}
          <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white">Next Steps & Future Enhancements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white mb-3">Phase 2 Features</h4>
                  <ul className="space-y-2 opacity-90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Investment tracking integration</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Bill negotiation assistant</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Shared budgets for couples</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>AI-powered spending predictions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-3">Ongoing Improvements</h4>
                  <ul className="space-y-2 opacity-90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Enhanced accessibility features</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Expanded bank integrations</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Personalized financial education</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Multi-currency support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Reflection */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
              "This project reinforced my belief that great UX design isn't about adding features — it's about solving real problems in the simplest way possible. The most rewarding moment was watching test users genuinely enjoy using a budgeting app, something I'd never witnessed before."
            </p>
            <p className="text-gray-600 mt-4">— Sarah Chen, Lead UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
