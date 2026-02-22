"use client";

import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Mail, ArrowUpRight, Sparkles, ChevronRight, Send, Lightbulb, Zap, Clock, Code, Briefcase } from 'lucide-react';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ideaTitle: '',
    description: '',
    timeline: 'flexible'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'ideaTitle':
        if (!value.trim()) return 'Idea title is required';
        if (value.trim().length < 3) return 'Title must be at least 3 characters';
        return '';
      case 'description':
        if (!value.trim()) return 'Description is required';
        if (value.trim().length < 20) return 'Please provide at least 20 characters';
        return '';
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/prototype-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setFormSubmitted(true);
      setFormData({ name: '', email: '', ideaTitle: '', description: '', timeline: 'flexible' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Carbon for AI",
      description: "Tells you the amount of carbon emissions based on token usage.",
      tags: [ "React", "WXT", "API"],
      status: "WIP",
    },
    {
      id: 2,
      title: "CareerWatch",
      description: "Intelligent career opportunities alert engine.",
      tags: ["API", "Python", "RAG"],
      status: "Beta",
    },
    {
      id: 3,
      title: "Prompt Lab",
      description: "Experimental playground for prompt engineering patterns.",
      tags: ["Prompts", "Testing", "UI"],
      status: "WIP",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-lime-400 selection:text-black">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]"
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'}} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0b]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-black tracking-tighter">
            WHYBE<span className="text-lime-400">.AI</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#prototype-request" className="text-sm text-zinc-400 hover:text-white transition-colors">Request Prototype</a>
            <a href="https://github.com/gordianknot-legacy/my-sandbox"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-all border border-white/10 hover:border-white/20">
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm text-zinc-500 uppercase tracking-widest">Building for the community</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            AI Sandbox for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400">
           Prototyping
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
            A space for AI experiments and prototyping.
            Part repository, part portfolio, all curiosity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects"
               className="group flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 transition-all">
              Explore Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#prototype-request"
               className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all">
              Request a Prototype
            </a>
          </div>
        </div>
      </header>

      {/* Bento Grid */}
      <main className="px-6 pb-20" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

            {/* Featured Project - Large */}
            <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-8 hover:border-lime-400/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-400/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-lime-400/10 text-lime-400 text-xs font-bold rounded-full border border-lime-400/20">
                    Featured
                  </span>
                  <div className="flex gap-2">
                    <a href="https://github.com/gordianknot-legacy/my-sandbox" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="https://careerwatch.whybe.ai" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3">CareerWatch</h3>
                <p className="text-zinc-400 mb-6 flex-grow">
                  Intelligent career opportunities alert engine. Powered by AI to help you find the right opportunities at the right time.
                </p>
                <div className="w-full h-48 bg-black/50 rounded-2xl border border-white/5 overflow-hidden group-hover:border-lime-400/20 transition-colors">
                  <iframe
                    src="https://careerwatch.whybe.ai"
                    title="CareerWatch Live Preview"
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["API", "Python", "RAG", "AI"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-xs text-zinc-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Stats Card */}
            <div className="group rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-6 hover:border-amber-400/30 transition-all duration-500">
              <a href="https://github.com/gordianknot-legacy/my-sandbox"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="h-full flex flex-col">
                <Github className="text-amber-400 mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Source Code</h3>
                <p className="text-sm text-zinc-500 flex-grow">Explore the repository behind this sandbox.</p>
                <div className="flex items-center gap-1 text-amber-400 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  View on GitHub <ChevronRight size={16} />
                </div>
              </a>
            </div>

            {/* Status Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950/50 to-zinc-950 border border-emerald-500/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">All Systems Operational</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">API Status</span>
                  <span className="text-emerald-400">Online</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Last Deploy</span>
                  <span className="text-zinc-300">2h ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Uptime</span>
                  <span className="text-zinc-300">99.9%</span>
                </div>
              </div>
            </div>

            {/* Project Cards */}
            {projects.slice(1).map((project) => {
              const cardContent = (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      project.status === 'Beta' ? 'bg-amber-400/10 text-amber-400' : 'bg-fuchsia-400/10 text-fuchsia-400'
                    }`}>
                      {project.status}
                    </span>
                    <ExternalLink size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 text-[10px] text-zinc-500 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              const link = project.title === 'CareerWatch' ? 'https://careerwatch.whybe.ai' : undefined;

              return link ? (
                <a
                  key={project.id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-6 hover:border-white/20 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={project.id}
                  className="group rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-6 hover:border-white/20 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {cardContent}
                </div>
              );
            })}

            {/* About Preview Card */}
            <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-fuchsia-950/30 via-zinc-950 to-zinc-950 border border-white/5 p-8 hover:border-fuchsia-400/30 transition-all duration-500">
              <div className="flex items-start gap-6">
                <img src="/maker-photo.jpg" alt="The Maker" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">The Maker</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Diving deep into AI and white-label coding. This site follows my journey of building pro bono solutions at the intersection of AI and real-world problem solving, using code as a tool to help move the needle for everyone.
                  </p>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com/in/anirudh-g"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center w-10 h-10 bg-fuchsia-400/10 text-fuchsia-400 rounded-xl hover:bg-fuchsia-400/20 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/gordianknot-legacy"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center w-10 h-10 bg-fuchsia-400/10 text-fuchsia-400 rounded-xl hover:bg-fuchsia-400/20 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <a href="mailto:g.anirudh.sharma@gmail.com" className="group rounded-3xl bg-gradient-to-br from-cyan-950/30 to-zinc-950 border border-cyan-400/20 p-6 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer block">
              <Mail className="text-cyan-400 mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">Let&apos;s Connect</h3>
              <p className="text-sm text-zinc-500 mb-4">Open to opportunities and collaborations.</p>
              <div className="flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                Get in Touch <ChevronRight size={16} />
              </div>
            </a>

            {/* Request Prototype CTA Card */}
            <div className="group rounded-3xl bg-gradient-to-br from-teal-950/30 to-zinc-950 border border-teal-400/20 p-6 hover:border-teal-400/40 transition-all duration-500 cursor-pointer">
              <a href="#prototype-request" className="block h-full">
                <Lightbulb className="text-teal-400 mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Have an Idea?</h3>
                <p className="text-sm text-zinc-500 mb-4">Let me build an AI prototype for you.</p>
                <div className="flex items-center gap-1 text-teal-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Request Now <ChevronRight size={16} />
                </div>
              </a>
            </div>

          </div>
        </div>
      </main>

      {/* Prototype Request Section */}
      <section id="prototype-request" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column - Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-400/10 rounded-xl">
                  <Zap className="text-teal-400" size={24} />
                </div>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">Prototype Request</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Turn Your Idea Into an
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"> AI Prototype</span>
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Have a concept for an AI-powered tool or application? I&apos;ll build a working prototype to help you validate your idea and explore possibilities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Lightbulb size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Share Your Vision</h4>
                    <p className="text-sm text-zinc-500">Describe your idea, target users, and the problem you&apos;re solving.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Code size={20} className="text-lime-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Rapid Prototyping</h4>
                    <p className="text-sm text-zinc-500">I&apos;ll build a functional prototype using the latest AI tools and frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Clock size={20} className="text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Spread the Word</h4>
                    <p className="text-sm text-zinc-500">Your prototype will be shared with the world.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 p-8">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-teal-400/10 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="text-teal-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p className="text-zinc-400">I&apos;ll review your idea and get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none transition-all ${
                          fieldErrors.name
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50'
                            : 'border-white/10 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50'
                        }`}
                        placeholder="John Doe"
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none transition-all ${
                          fieldErrors.email
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50'
                            : 'border-white/10 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50'
                        }`}
                        placeholder="john@example.com"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ideaTitle" className="block text-sm font-medium text-zinc-300 mb-2">
                      Idea Title
                    </label>
                    <input
                      type="text"
                      id="ideaTitle"
                      name="ideaTitle"
                      value={formData.ideaTitle}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none transition-all ${
                        fieldErrors.ideaTitle
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50'
                          : 'border-white/10 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50'
                      }`}
                      placeholder="AI-Powered Recipe Generator"
                    />
                    {fieldErrors.ideaTitle && (
                      <p className="mt-1 text-sm text-red-400">{fieldErrors.ideaTitle}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-2">
                      Describe Your Idea
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none transition-all resize-none ${
                        fieldErrors.description
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50'
                          : 'border-white/10 focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50'
                      }`}
                      placeholder="Tell me about your idea, the problem it solves, who it's for, and any specific features you have in mind..."
                    />
                    {fieldErrors.description && (
                      <p className="mt-1 text-sm text-red-400">{fieldErrors.description}</p>
                    )}
                  </div>

                  {formError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      {formError}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-bold rounded-xl hover:from-teal-300 hover:to-cyan-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    {!isSubmitting && <Send size={18} />}
                  </button>

                  <p className="text-xs text-zinc-600 text-center">
                    By submitting, you agree to be contacted about your prototype request.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-tighter">
            WHYBE<span className="text-lime-400">.AI</span>
          </div>
          <div className="text-sm text-zinc-600">
            "Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke • Status: <span className="text-lime-400">Constantly Evolving</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/gordianknot-legacy/my-sandbox"
               target="_blank"
               rel="noopener noreferrer"
               className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-500 hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
