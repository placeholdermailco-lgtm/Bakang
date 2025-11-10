import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, Users, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function About() {
  const skills = [
    { icon: Users, title: 'User Research', description: 'Interviews, surveys, usability testing, and data analysis' },
    { icon: Zap, title: 'Interaction Design', description: 'Prototyping, wireframing, and high-fidelity mockups' },
    { icon: Heart, title: 'User-Centered Design', description: 'Empathy-driven solutions that prioritize user needs' },
    { icon: Award, title: 'Design Systems', description: 'Scalable component libraries and style guides' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full mb-4">
                About Me
              </div>
              <h2 className="mb-6">Designing with Purpose & Empathy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over 5 years of experience in product design, I've had the privilege of working with startups and established companies to create digital experiences that make a difference.
                </p>
                <p>
                  My approach combines deep user research, strategic thinking, and meticulous craft. I believe great design is invisible — it just works. Every project starts with understanding the real problem and ends with a solution that users love.
                </p>
                <p>
                  When I'm not designing, you'll find me mentoring aspiring designers, speaking at design conferences, or exploring the latest in AI and emerging technologies.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1761522002366-870191e79f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRlc2lnbmVyfGVufDF8fHx8MTc2Mjc0ODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sarah Chen - UI/UX Designer"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="italic">"Design is not just what it looks like. Design is how it works."</p>
                <p className="mt-2 opacity-75">— Steve Jobs</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="mb-2">{skill.title}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16 text-center">
            <h3 className="mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Figma', 'Adobe XD', 'Sketch', 'Principle', 'ProtoPie', 'Miro', 'Notion', 'Jira', 'HTML/CSS', 'React'].map((tool) => (
                <div key={tool} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
