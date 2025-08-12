import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-slide-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-text-secondary">Hello, I'm</span>
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Raj Shah
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Designer passionate about creating 
            <span className="text-gradient"> exceptional digital experiences</span>
          </p>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Python', 'React', 'AI/ML', 'Web Scraping', 'TypeScript', 'Docker'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass-effect rounded-full text-sm text-text-primary border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300 px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/rajshah9305', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rajshah9305', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass-effect rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="p-2 text-text-tertiary hover:text-primary transition-colors duration-200"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;