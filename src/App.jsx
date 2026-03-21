import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  Terminal, 
  User, 
  ArrowUpRight, 
  Database, 
  Globe, 
  Trophy, 
  BarChart3, 
  Search, 
  Coffee 
} from 'lucide-react';
import profilePic from './assets/Profile.jpg';

/** * CONFIGURATION: 
 * Add the exact names of your GitHub repositories here to display them.
 */
const PROJECT_NAMES = [
  "React-To-Do", 
  "ReactExpense-Tracker", 
  "React-Weather-App",
  "Queue-Management-System",
  "TaskForge",
  "Expenly-Expense-Tracker"
]; 

// --- Animation Hook ---
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.15 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return [domRef, isVisible];
};

// --- Sub-components ---

const FadeInSection = ({ children }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-white/5 transition-all duration-700 group-hover:rotate-[360deg] group-hover:border-white/30 group-hover:shadow-white/20">
            <img src={profilePic} alt="Vexor Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-2xl tracking-tighter text-white/90">Vexor</span>
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-zinc-400">
          {['About', 'Stack', 'Projects', 'GitHub', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const fullText = "Building clean, functional, and scalable full-stack web experiences.";

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleType = () => {
    const shouldDelete = isDeleting;
    
    setText(
      shouldDelete 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(shouldDelete ? 30 : 70);

    if (!shouldDelete && text === fullText) {
      setTimeout(() => setIsDeleting(true), 3000); 
    } else if (shouldDelete && text === '') {
      setIsDeleting(false);
      setTypingSpeed(500); 
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 text-center relative overflow-hidden">
      {/* Soft Ambient Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-500/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
        <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold mb-10 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
          </span>
          <span className="tracking-wide uppercase">Full Stack Developer (Learning...)</span>
        </div>
      </div>
      
      <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter mb-6 animate-fade-in opacity-0 text-white leading-none uppercase" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
        Vexor
      </h1>
      
      <p className="text-2xl md:text-3xl text-zinc-300 font-light mb-10 animate-fade-in opacity-0 tracking-tight" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
        Frontend Developer
      </p>
      
      <div className="max-w-xl text-zinc-400 leading-relaxed mb-14 h-16 font-mono text-sm bg-white/[0.03] py-4 px-8 rounded-[2rem] border border-white/5 flex items-center justify-center backdrop-blur-sm animate-fade-in opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
        <span className="inline-block text-center">{text}</span>
        <span className="animate-pulse inline-block w-1.5 h-4 bg-white/40 ml-1.5 align-middle"></span>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in opacity-0" style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}>
        <a 
          href="#projects" 
          className="group px-12 py-4 bg-white text-zinc-950 font-bold rounded-2xl hover:bg-zinc-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center space-x-2 shadow-xl active:scale-95"
        >
          <span>Explore Works</span>
        </a>
        <div className="flex space-x-5">
          <a href="https://github.com/vaidus2608m" target="_blank" className="p-4 bg-white/5 text-white rounded-2xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm shadow-sm hover:-translate-y-1"><Github size={22} /></a>
          <a href="#github" className="p-4 bg-white/5 text-white rounded-2xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm shadow-sm hover:-translate-y-1"><Trophy size={22} /></a>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-20">
    <h2 className="text-4xl font-bold mb-4 tracking-tight text-white/90">{title}</h2>
    <div className="w-20 h-1 bg-white/30 mb-8 rounded-full"></div>
    <p className="text-zinc-400 text-xl max-w-2xl font-light leading-relaxed">{subtitle}</p>
  </div>
);

const About = () => (
  <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
    <FadeInSection>
      <SectionHeader title="About" subtitle="Fusing high-end design with performant architecture." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-10 text-zinc-400 text-lg leading-relaxed font-light">
          <p>
            I am <span className="text-white font-medium">Vaidus</span>, crafting digital experiences under the handle <span className="text-white/80 font-medium italic">Vexor</span>. My focus is on being a world-class <span className="text-white">Frontend Developer</span>, specializing in user-centric interfaces.
          </p>
          <div className="grid grid-cols-1 gap-5 pt-4">
            <div className="flex items-center gap-5 p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white transition-colors duration-500 shadow-inner">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em]">Frontend</h4>
                <p className="text-xs text-zinc-500 mt-1 italic">React, Zustand, and Pixel-Perfect Styling.</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white transition-colors duration-500 shadow-inner">
                <Coffee size={24} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em]">Backend</h4>
                <p className="text-xs text-zinc-500 mt-1 italic">Node.js & Java (Building robust logic layers).</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-zinc-700 to-zinc-200 rounded-[3rem] blur-2xl opacity-[0.03] group-hover:opacity-10 transition duration-1000"></div>
          <div className="relative bg-[#111114] border border-white/10 p-12 rounded-[3rem] shadow-2xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                <BarChart3 size={24} className="text-white/50" /> Competitive Track
              </h3>
              <div className="space-y-5">
                {[
                  { name: "LeetCode", info: "DSA Problem Solver", icon: <Terminal size={20}/>, url: "https://leetcode.com/u/vaizus" },
                  { name: "Codeforces", info: "Competitive Programmer", icon: <Trophy size={20}/>, url: "https://codeforces.com/profile/0xxxVexor" },
                  { name: "GitHub", info: "@vaidus2608m", icon: <Github size={20}/>, url: "https://github.com/vaidus2608m" }
                ].map((item, i) => (
                  <a key={i} href={item.url} target="_blank" className="flex items-center gap-5 p-5 bg-white/5 rounded-[2rem] border border-white/5 group/item hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
                    <div className="text-white/40 group-hover/item:text-white transition-colors">{item.icon}</div>
                    <div>
                      <h5 className="text-white font-bold text-base">{item.name}</h5>
                      <p className="text-zinc-500 text-xs mt-0.5">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  </section>
);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/vaidus2608m/repos?sort=updated&per_page=50')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const selected = data.filter(repo => 
            PROJECT_NAMES.includes(repo.name)
          );
          setRepos(selected);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
      <FadeInSection>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <SectionHeader title="Showcase" subtitle="Selected works focusing on modern frontend tech." />
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-4 px-5 py-2.5 bg-white/5 rounded-full border border-white/5 shadow-inner">
            <Search size={14} className="opacity-50" />
            <span className="opacity-70">Filtered Selection</span>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : repos.length === 0 ? (
          <div className="p-24 text-center border border-dashed border-white/10 rounded-[3.5rem] text-zinc-600 italic text-lg">
            Awaiting repository selection...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {repos.map((repo) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                className="group relative bg-[#121215] border border-white/5 rounded-[3rem] p-10 hover:bg-white/5 transition-all duration-700 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/[0.02]"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                      <Code2 size={26} />
                    </div>
                    <ArrowUpRight className="text-white/10 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">{repo.name}</h3>
                  <p className="text-zinc-500 text-base line-clamp-3 mb-10 font-light leading-relaxed">
                    {repo.description || "Architecting high-performance logic with clean code principles."}
                  </p>
                </div>
                <div className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  <span className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    {repo.language || "Java"}
                  </span>
                  <span className="opacity-70">⭐ {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </FadeInSection>
    </section>
  );
};

const TechStack = () => {
  const stack = {
    Frontend: ["React", "Tailwind CSS", "Zustand", "HTML/CSS"],
    Backend: ["Node.js", "Java"],
    Languages: ["C++", "JavaScript", "Java"],
    Systems: ["Git", "GitHub", "AI Workflows"]
  };

  return (
    <section id="stack" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
      <FadeInSection>
        <SectionHeader title="Stack" subtitle="The core toolkit powering my development." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-black">{category}</h3>
              <div className="flex flex-wrap gap-3.5">
                {items.map(item => (
                  <span key={item} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-sm font-medium hover:bg-white hover:text-zinc-950 hover:scale-110 hover:-rotate-1 transition-all duration-500 cursor-default shadow-sm active:scale-90">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

const GitHubSection = () => (
  <section id="github" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
    <FadeInSection>
      <SectionHeader title="Contribution" subtitle="Live feed of my open source activity." />
      
      <div className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-[#121215] border border-white/10 rounded-[3rem] overflow-hidden group hover:border-white/20 transition-all duration-700 shadow-xl">
             <img 
              src="https://github-readme-stats.vercel.app/api?username=vaidus2608m&show_icons=true&theme=transparent&title_color=ffffff&text_color=a1a1aa&icon_color=ffffff&bg_color=00000000&hide_border=true" 
              alt="Stats" 
              className="w-full h-auto p-6 md:p-12 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="bg-[#121215] border border-white/10 rounded-[3rem] overflow-hidden flex items-center hover:border-white/20 transition-all duration-700 shadow-xl">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vaidus2608m&layout=compact&theme=transparent&title_color=ffffff&text_color=a1a1aa&bg_color=00000000&hide_border=true" 
              alt="Langs" 
              className="w-full h-auto p-10 opacity-90"
            />
          </div>
        </div>

        <div className="bg-[#121215] border border-white/10 rounded-[3rem] p-10 md:p-16 overflow-hidden hover:border-white/20 transition-all duration-700 shadow-xl">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">Global Matrix</h3>
            <a href="https://github.com/vaidus2608m" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-sm font-bold group">
              @vaidus2608m <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          <img 
            src="https://ghchart.rshah.org/3b82f6/vaidus2608m" 
            alt="Contributions" 
            className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
      </div>
    </FadeInSection>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-40 px-6 max-w-6xl mx-auto border-t border-white/5">
    <FadeInSection>
      <div className="relative p-16 md:p-32 rounded-[4.5rem] overflow-hidden text-center bg-[#0e0e11] border border-white/5 group shadow-2xl">
        <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
        <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-white">Got a vision?</h2>
        <p className="text-zinc-500 text-xl md:text-2xl mb-20 max-w-2xl mx-auto font-light leading-relaxed">
          Open for engineering collaborations and innovative web architecture.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 relative z-10">
          {[
            { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vaidus2608m@gmail.com' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaidus-tech-16460b378/' },
            { icon: Github, label: 'GitHub', href: 'https://github.com/vaidus2608m' },
            { icon: Terminal, label: 'LeetCode', href: 'https://leetcode.com/u/vaizus' },
            { icon: Trophy, label: 'Codeforces', href: 'https://codeforces.com/profile/0xxxVexor' }
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group/link">
              <div className="w-20 h-20 bg-white/5 rounded-[1.75rem] flex items-center justify-center mb-5 border border-white/5 group-hover/link:bg-white group-hover/link:text-zinc-950 transition-all duration-700 group-hover/link:scale-110 shadow-2xl active:scale-90">
                <link.icon size={26} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover/link:text-white transition-colors">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-[#08080a]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-black">
      <div className="mb-8 md:mb-0 opacity-40">
        © {new Date().getFullYear()} Vexor Systems
      </div>
      <div className="flex items-center gap-2 opacity-50">
        Designed for <span className="text-white/40 tracking-normal">Frontend Excellence</span>
      </div>
    </div>
  </footer>
);

// --- App Shell ---

export default function App() {
  return (
    <div className="bg-[#0c0c0e] text-zinc-300 selection:bg-white selection:text-black font-sans antialiased">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #0c0c0e;
          overflow-x: hidden;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0c0c0e;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 10px;
          border: 2px solid #0c0c0e;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
      
      <Navbar />
      
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <GitHubSection />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}