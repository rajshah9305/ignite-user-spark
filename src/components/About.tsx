import { Card } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building robust web applications with modern technologies and best practices.',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that delight users.',
      color: 'text-secondary'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ensuring fast, efficient, and scalable applications with optimal user experience.',
      color: 'text-accent'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver high-quality solutions on time.',
      color: 'text-primary'
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating meaningful digital experiences.
            With expertise in both frontend and backend technologies, I bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary">
              Crafting Digital Excellence
            </h3>
            <p className="text-text-secondary leading-relaxed">
              As a passionate full-stack developer with expertise in AI/ML integration, 
              web scraping, and modern web technologies, I specialize in creating 
              intelligent, scalable solutions. My experience spans from building 
              AI agent orchestration platforms to developing sophisticated web scrapers 
              and creative studio websites.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I believe in clean, efficient code and innovative problem-solving. 
              Whether it's orchestrating multiple AI agents, extracting valuable data 
              from complex web sources, or crafting beautiful user interfaces, 
              I approach every project with technical excellence and creative thinking.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Code Quality' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-text-tertiary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 glass-effect rounded-2xl relative overflow-hidden surface-glow">
              <div className="absolute inset-0 bg-gradient-primary opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-50">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 glass-effect border-0 hover:bg-surface-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-surface-elevated mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;