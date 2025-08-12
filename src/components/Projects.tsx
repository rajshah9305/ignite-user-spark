import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and an admin dashboard.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      tags: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.',
      image: '/placeholder.svg',
      tags: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'An analytics platform for social media managers to track engagement, follower growth, and content performance across multiple platforms.',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'D3.js', 'Express', 'Social Media APIs'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimized performance.',
      image: '/placeholder.svg',
      tags: ['React', 'TypeScript', 'Framer Motion', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work and personal projects, demonstrating 
            various technologies and creative solutions.
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <Card className="glass-effect border-0 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      Featured
                    </Badge>
                    <div className="flex space-x-2">
                      <button
                        onClick={prevProject}
                        className="p-2 glass-effect rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextProject}
                        className="p-2 glass-effect rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {projects[currentProject].title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentProject].tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-primary/30 text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={projects[currentProject].liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a href={projects[currentProject].githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <Card
                key={project.id}
                className="glass-effect border-0 overflow-hidden hover:bg-surface-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-primary/30 text-text-tertiary"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/30 text-text-tertiary"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;