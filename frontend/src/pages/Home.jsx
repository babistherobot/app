import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { mockProjects } from '../mockData';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'AI/ML', 'Multi-Robot', 'Control', 'Vision'];

  const featuredProjects = mockProjects.filter(p => p.featured);
  
  const filteredProjects = selectedFilter === 'All' 
    ? mockProjects 
    : mockProjects.filter(p => p.category.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00FF88]">
              Robotics Engineer
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
            Building Intelligent
            <br />
            <span className="text-[#00FF88]">Autonomous Systems</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed">
            Specializing in AI/ML robotics, multi-robot coordination, and vision-language models for real-world deployments. Research from IITGN to IROS.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-[#00FF88] text-black font-mono text-sm uppercase tracking-wide hover:bg-[#00DD77] transition-colors inline-flex items-center"
            >
              View Projects
              <ArrowRight size={16} className="ml-2" />
            </a>
            <Link 
              to="/publications" 
              className="px-6 py-3 border border-white/20 font-mono text-sm uppercase tracking-wide hover:bg-white/5 transition-all"
            >
              Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Flagship Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group block bg-[#141414] border border-white/10 overflow-hidden hover:border-[#00FF88]/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <span 
                        key={cat}
                        className="text-xs font-mono uppercase px-2 py-1 border border-white/20 text-white/70"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FF88] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">All Projects</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Filter size={20} className="text-white/50 mt-2" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-sm font-mono uppercase tracking-wide transition-all ${
                    selectedFilter === filter
                      ? 'bg-[#00FF88] text-black'
                      : 'border border-white/20 text-white/70 hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group block bg-[#141414] border border-white/10 overflow-hidden hover:border-[#00FF88]/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <span 
                        key={cat}
                        className="text-xs font-mono uppercase px-2 py-1 border border-white/20 text-white/70"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FF88] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-white/5 text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;