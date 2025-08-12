import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rajshah9305@gmail.com',
      href: 'mailto:rajshah9305@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Available on request',
      href: '#',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available for Remote Work',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rajshah9305', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rajshah9305', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/rajshah9305', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 glass-effect border-0">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-surface transition-colors duration-200 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-text-tertiary text-sm">{info.title}</div>
                      <div className="text-text-primary font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 glass-effect border-0">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 glass-effect border-0 surface-glow">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-text-primary font-medium">Available for projects</span>
                </div>
                <p className="text-text-secondary text-sm">
                  Currently accepting new freelance opportunities and collaborations.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 glass-effect border-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-primary">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-surface border-border text-text-primary focus:border-primary transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-surface border-border text-text-primary focus:border-primary transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-text-primary">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-surface border-border text-text-primary focus:border-primary transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-primary">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-surface border-border text-text-primary focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300 py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 glass-effect border-0 surface-glow">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Let's discuss your ideas and turn them into reality. 
              I'm here to help bring your vision to life.
            </p>
            <Button
              className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300 px-8 py-3"
              onClick={() => document.getElementById('name')?.focus()}
            >
              Start Conversation
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;