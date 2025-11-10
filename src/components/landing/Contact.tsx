import { Mail, Linkedin, Github, Twitter, MapPin, Download } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sarahchen', color: 'text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/sarahchen', color: 'text-gray-900' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/sarahchen', color: 'text-blue-400' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@sarahchen.design', color: 'text-red-600' }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full mb-4">
              Let's Connect
            </div>
            <h2 className="mb-6">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Email</div>
                        <a href="mailto:hello@sarahchen.design" className="text-gray-900 hover:text-blue-600">
                          hello@sarahchen.design
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Location</div>
                        <div className="text-gray-900">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="mb-4">Social Media</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <Icon className={`w-5 h-5 ${link.color}`} />
                            <span className="text-gray-700">{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full gap-2">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
                <CardContent className="pt-6">
                  <h4 className="text-white mb-2">Available for Work</h4>
                  <p className="opacity-90">I'm currently open to freelance projects and full-time opportunities.</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-6">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hi..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16">
            <Card className="bg-gray-50 border-0">
              <CardContent className="pt-6">
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-gray-800 mb-4 italic leading-relaxed">
                    "Sarah's ability to understand complex user needs and translate them into elegant solutions is exceptional. She brought both strategic thinking and beautiful execution to our project. A true design leader."
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
                    <div className="text-left">
                      <div className="text-gray-900">Michael Torres</div>
                      <div className="text-gray-600">VP of Product, TechCorp</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
