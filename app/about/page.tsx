"use client";

import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Download, MapPin, Calendar, Briefcase, GraduationCap, Award, ArrowLeft } from 'lucide-react';

export default function About() {
  const experience = [
    {
      role: "Senior Project Manager",
      company: "Central Square Foundation",
      period: "2023 - Present",
      description: "Building white-label AI tools and prototypes. Exploring LLM applications, prompt engineering, and developer tooling.",
      tags: ["Claude API", "Python", "AWS S3", "Cloudflare"]
    },
    {
      role: "Freelance Project Manager",
      company: "Multiple",
      period: "2020 - 2022",
      description: "Worked on consulting projects pertaining to web development and databse management for public health organisations",
      tags: ["Node.js", "SEO", "MySQL", "Microsoft Excel"]
    },
    {
      role: "Business Manager",
      company: "Internshala",
      period: "2017 - 2019",
      description: "Built and maintained an internal product for core operations",
      tags: ["Balsamiq", "MySQL", "CSS", "Git"]
    }
  ];

  const education = [
    {
      degree: "Executive Program in Public Policy & Management",
      school: "Indian Institute of Management Calcutta",
      period: "2023 - 2024",
      description: "Policymaking in India, Challenges in education and sustainability regulations"
    },
    {
      degree: "Master of Arts in Development Studies",
      school: "Tata Institute of Social Sciences",
      period: "2021 - 2023",
      description: "Theories of development, human rights & violence and modernity"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Amrita University",
      period: "2013 - 2017",
      description: "Focus on data mining and DevOps"
    }
  ];

  const skills = {
    "Languages": ["Python", "SQL", "HTML/CSS"],
    "Frameworks": ["React", "FastAPI", "Tailwind CSS"],
    "AI/ML": ["LangChain", "OpenAI API", "RAG", "Prompt Engineering"],
    "Tools": ["Git", "Docker", "Vercel", "Cloudflare Workers", "PostgreSQL"]
  };

  const certifications = [
    { name: "SQL (Advanced)", issuer: "HackerRank", year: "2025" },
    { name: "AI Practioner", issuer: "Amazon Web Services", year: "2026" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-fuchsia-400 selection:text-black">
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
            <a href="/#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="/#prototype-request" className="text-sm text-zinc-400 hover:text-white transition-colors">Request Prototype</a>
            <a href="/about" className="text-sm text-white transition-colors">About</a>
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

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Home</span>
          </a>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-8 mb-6">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center text-5xl font-black mb-6 mx-auto">
                    W
                  </div>
                  <h1 className="text-2xl font-bold text-center mb-2">The Maker</h1>
                  <p className="text-zinc-500 text-center text-sm mb-6">AI Developer &amp; Builder</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <MapPin size={16} className="text-fuchsia-400" />
                      <span>Remote / Worldwide</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <Briefcase size={16} className="text-fuchsia-400" />
                      <span>Open to Opportunities</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-6">
                    <a href="https://github.com/gordianknot-legacy" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" 
                       className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" 
                       className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>

                  <a href="#" 
                     className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold rounded-xl hover:from-fuchsia-400 hover:to-purple-500 transition-all">
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-4 text-center">
                    <div className="text-2xl font-bold text-lime-400">5+</div>
                    <div className="text-xs text-zinc-500">Years Exp</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-4 text-center">
                    <div className="text-2xl font-bold text-amber-400">20+</div>
                    <div className="text-xs text-zinc-500">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio */}
              <section>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="prose prose-invert prose-zinc max-w-none">
                  <p className="text-lg text-zinc-400 leading-relaxed mb-4">
                    I&apos;m a developer passionate about building at the intersection of AI and developer tools. 
                    My journey started with traditional web development, but I&apos;ve increasingly focused on 
                    leveraging large language models to create innovative solutions.
                  </p>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    WHYBE.AI is my sandbox for experimentation—a place where I prototype ideas, build 
                    white-label tools, and explore what&apos;s possible with modern AI. I believe in building 
                    in public and sharing the journey.
                  </p>
                </div>
              </section>

              {/* Experience */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-lime-400/10 rounded-xl">
                    <Briefcase className="text-lime-400" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Experience</h2>
                </div>
                
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div 
                      key={index}
                      className="group rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-6 hover:border-lime-400/20 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold">{job.role}</h3>
                          <p className="text-lime-400 text-sm">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <Calendar size={14} />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/5 text-xs text-zinc-500 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-400/10 rounded-xl">
                    <Award className="text-amber-400" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Skills &amp; Technologies</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div 
                      key={category}
                      className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-6"
                    >
                      <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map(skill => (
                          <span key={skill} className="px-3 py-1.5 bg-white/5 text-sm text-white rounded-lg border border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-fuchsia-400/10 rounded-xl">
                    <GraduationCap className="text-fuchsia-400" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div 
                      key={index}
                      className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-bold">{edu.degree}</h3>
                          <p className="text-fuchsia-400 text-sm">{edu.school}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-teal-400/10 rounded-xl">
                    <Award className="text-teal-400" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Certifications</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 p-5 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center shrink-0">
                        <Award className="text-teal-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{cert.name}</h3>
                        <p className="text-zinc-500 text-xs">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="rounded-3xl bg-gradient-to-br from-fuchsia-950/50 via-zinc-950 to-zinc-950 border border-fuchsia-500/20 p-8">
                <h3 className="text-2xl font-bold mb-3">Let&apos;s Work Together</h3>
                <p className="text-zinc-400 mb-6">
                  Interested in collaborating or have a project in mind? I&apos;m always open to discussing new opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/#prototype-request" 
                     className="group flex items-center gap-2 px-6 py-3 bg-fuchsia-500 text-white font-bold rounded-full hover:bg-fuchsia-400 transition-all">
                    Request a Prototype
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a href="#" 
                     className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all">
                    <Mail size={18} />
                    Get in Touch
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-tighter">
            WHYBE<span className="text-lime-400">.AI</span>
          </div>
          <div className="text-sm text-zinc-600">
            "That the speed of light is a limit is a theory; that Superman can travel faster than light is a fact." — Isaac Asimov • Status: <span className="text-lime-400">Constantly Evolving</span>
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
