import React from 'react';
import { Github, ExternalLink, User, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans p-8">
      {/* --- HEADER / HERO --- */}
      <header className="max-w-5xl mx-auto mb-20 mt-10 text-center">
        <h1 className="text-6xl font-black tracking-tighter mb-4">
          WHYBE<span className="text-blue-600">.AI</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          A sandbox for white-label coding tools and AI experiments. 
          Part repository, part portfolio, all curiosity.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* --- SECTION 1: TOOL REPOSITORY (The "White Coding" Tools) --- */}
        <section className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code size={24} /> Tool Repository
          </h2>
          
          {/* Project Card */}
          <div className="group relative bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Project Snapshot Tool</h3>
              <div className="flex gap-3">
                <a href="#" className="hover:text-blue-600"><Github size={20} /></a>
                <a href="#" className="hover:text-blue-600"><ExternalLink size={20} /></a>
              </div>
            </div>
            <p className="text-slate-600 mb-4 text-sm">
              An embedded prototype for white-labeling code snapshots. Built with Gemini API.
            </p>
            {/* The "Snapshot" or Embedded Frame Placeholder */}
            <div className="w-full h-40 bg-slate-100 rounded-lg flex items-center justify-center border border-dashed border-slate-300 group-hover:bg-blue-50 transition-colors">
              <span className="text-slate-400 text-xs italic">Live Prototype / Snapshot View</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PERSONAL PORTFOLIO / ABOUT --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <User size={24} /> The Maker
          </h2>
          <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-2xl rotate-1 group hover:rotate-0 transition-transform">
            <h3 className="font-bold mb-2">About Me</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              I'm diving deep into AI and white-label coding. This site is my journey to landing a role where I can build impactful products.
            </p>
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Interests</div>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'UI/UX', 'Cloudflare', 'Next.js'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
            <h3 className="font-bold mb-1">View My CV</h3>
            <p className="text-xs text-slate-500">A detailed look at my professional journey.</p>
          </div>
        </section>
      </main>

      {/* --- QUIRKY FOOTER --- */}
      <footer className="max-w-5xl mx-auto mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
        Built with Gemini & Vercel. Status: <span className="text-green-500 font-bold">Constantly Evolving</span>
      </footer>
    </div>
  );
}