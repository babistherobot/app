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
                  className="text-xs font-mono uppercase px-3 py-1 border border-[#00FF88] text-[#00FF88]"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">{project.description}</p>
          </div>

          {/* Project Image */}
          <div className="mb-12 border border-white/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Problem Section */}
          <div className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              Problem Statement
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">{project.problem}</p>
          </div>

          {/* Approach Section */}
          <div className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              Technical Approach
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">{project.approach}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-[#141414] border border-white/20 font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Metrics */}
          {project.metrics && (
            <div className="mb-12">
              <h2 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                Results & Impact
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">{project.results}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-[#141414] border border-white/10 p-6">
                    <div className="text-3xl font-bold text-[#00FF88] mb-2">{value}</div>
                    <div className="text-sm font-mono uppercase text-white/50">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.video && (
              <a 
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#00FF88] text-black font-mono text-sm uppercase tracking-wide hover:bg-[#00DD77] transition-colors inline-flex items-center"
              >
                <Play size={16} className="mr-2" />
                Demo Video
              </a>
            )}
            {project.code && (
              <a 
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 font-mono text-sm uppercase tracking-wide hover:bg-white/5 transition-all inline-flex items-center"
              >
                <Github size={16} className="mr-2" />
                Source Code
              </a>
            )}
            {project.paper && (
              <a 
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 font-mono text-sm uppercase tracking-wide hover:bg-white/5 transition-all inline-flex items-center"
              >
                <ExternalLink size={16} className="mr-2" />
                Paper
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;