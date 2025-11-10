import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Badge variant="secondary">Mobile App</Badge>
            <Badge variant="secondary">FinTech</Badge>
            <Badge variant="secondary">2024</Badge>
          </div>
          
          <h1 className="mb-6">
            BudgetWise: Simplifying Personal Finance for Millennials
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A mobile-first budgeting application that helps young professionals take control of their finances through intelligent insights, automated tracking, and personalized financial goals.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div>
              <div className="text-gray-500 mb-1">Role</div>
              <div className="text-gray-900">Lead UX Designer</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Timeline</div>
              <div className="text-gray-900">3 Months</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Team</div>
              <div className="text-gray-900">4 People</div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYyNjcxMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="BudgetWise App Overview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
