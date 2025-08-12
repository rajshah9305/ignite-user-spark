import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'bg-primary' },
        { name: 'TypeScript', level: 90, color: 'bg-primary' },
        { name: 'JavaScript (ES6+)', level: 95, color: 'bg-primary' },
        { name: 'HTML5/CSS3', level: 98, color: 'bg-primary' },
        { name: 'Tailwind CSS', level: 92, color: 'bg-primary' },
        { name: 'Vue.js', level: 78, color: 'bg-secondary' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-accent' },
        { name: 'Express.js', level: 90, color: 'bg-accent' },
        { name: 'Python/Django', level: 82, color: 'bg-accent' },
        { name: 'PostgreSQL', level: 85, color: 'bg-accent' },
        { name: 'MongoDB', level: 80, color: 'bg-accent' },
        { name: 'GraphQL', level: 75, color: 'bg-secondary' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'bg-primary' },
        { name: 'Docker', level: 78, color: 'bg-secondary' },
        { name: 'AWS/Cloud Services', level: 80, color: 'bg-secondary' },
        { name: 'Figma/Design Tools', level: 88, color: 'bg-accent' },
        { name: 'Testing (Jest/Cypress)', level: 82, color: 'bg-accent' },
        { name: 'CI/CD', level: 75, color: 'bg-secondary' },
      ],
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'MongoDB Certified Developer',
    'React Developer Certification',
  ];

  const interests = [
    'Open Source Contributing',
    'Machine Learning',
    'Web Performance',
    'Accessibility',
    'Mobile Development',
    'Design Systems',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies 
            I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-6 glass-effect border-0 hover:bg-surface-elevated transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-text-tertiary text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={skill.level}
                        className="h-2 bg-surface"
                      />
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (index * 0.1) + 0.5}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="p-6 glass-effect border-0">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-surface/50 hover:bg-surface transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                  <span className="text-text-secondary">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Learning & Interests */}
          <Card className="p-6 glass-effect border-0">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="border-primary/30 text-text-secondary hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 glass-effect border-0 surface-glow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '20+', label: 'Technologies' },
                { number: '100%', label: 'Passion for Code' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-tertiary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;