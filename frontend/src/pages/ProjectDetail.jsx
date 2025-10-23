import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Play, ExternalLink } from 'lucide-react';
import { allProjects } from '../mockData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-[#38FF62] hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="grid-background" />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white/70 hover:text-[#38FF62] transition-colors mb-12"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-mono text-sm uppercase tracking-wide">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <span 
                  key={cat}
                  className="label px-3 py-1 border border-[#38FF62] text-[#38FF62]"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="title-big mb-6">{project.title}</h1>
            <p className="text-big text-white/80 leading-relaxed">{project.shortDesc}</p>
          </div>

          {/* Project Image */}
          <div className="mb-12 border border-white/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="label mb-4">
              TECH STACK
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="label-small px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-[#38FF62]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Metrics */}
          {project.metrics && (
            <div className="mb-12">
              <h2 className="label mb-4">
                RESULTS & IMPACT
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <div className="text-regular text-[#38FF62] mb-2">{project.metrics.performance}</div>
                  <div className="label-small text-white/50">PERFORMANCE</div>
                </div>
                <div className="card">
                  <div className="text-regular text-[#38FF62] mb-2">{project.metrics.accuracy}</div>
                  <div className="label-small text-white/50">ACCURACY</div>
                </div>
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.links?.demo && (
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center"
              >
                <Play size={16} className="mr-2" />
                DEMO VIDEO
              </a>
            )}
            {project.links?.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <Github size={16} className="mr-2" />
                SOURCE CODE
              </a>
            )}
            {project.links?.paper && (
              <a 
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <ExternalLink size={16} className="mr-2" />
                PAPER
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;