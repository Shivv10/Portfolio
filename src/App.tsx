import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Moon, Sun, Code, FileText, Home, User } from 'lucide-react';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

const App: React.FC = () => {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'resume' | 'about'>('home');

  // App States
  const [sellLevel, setSellLevel] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactFlash, setContactFlash] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const email = "shivvgandhii@gmail.com";

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    setContactFlash(sellLevel >= 98); 
  }, [sellLevel]);

  // --- NAVIGATION HANDLER ---
  const navigateTo = (page: 'home' | 'projects' | 'resume' | 'about') => {
    setCurrentPage(page);
    setIsMenuOpen(false); 
  };

  // --- PAGE ROUTING ---
  if (currentPage === 'projects') {
    return (
      <Projects 
        navigateTo={navigateTo} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  if (currentPage === 'resume') {
    return (
      <Resume 
        navigateTo={navigateTo} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  if (currentPage === 'about') {
    return (
      <About 
        navigateTo={navigateTo} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  // --- HOME PAGE CONTENT ---
  type Content = { tag: string; title: string; text: string };

  // Rolling Snowball Logic:
  // Levels 0-74: Accumulates sentences about skills and general experience.
  // Level 75: Swaps to a deeper professional summary and continues building.
  const getContent = (level: number): Content => {
    // --- PHASE 1: The Build Up ---
    const baseLine = "I build clean software—and I’m leveling up in AI/ML and automation.";
    const addOn1 = " I focus on modern apps that feel fast, simple, and reliable, ensuring products don't just work but scale smarter.";
    const addOn2 = " I’ve done this in professional teams, prioritizing readable code and shipping changes that don’t create new problems next week.";
    const addOn3 = " I’ve built and improved systems in large-scale settings where clean delivery and practical results actually matter.";

    if (level < 15) {
      return {
        tag: "Less hard sell",
        title: "Hi, I’m Shiv.",
        text: baseLine,
      };
    }
    if (level < 30) {
      return {
        tag: "Still chill",
        title: "I like shipping useful things.",
        text: baseLine + addOn1,
      };
    }
    if (level < 45) {
      return {
        tag: "A bit more",
        title: "I’ve done this in real teams.",
        text: baseLine + addOn1 + addOn2,
      };
    }
    if (level < 60) {
      return {
        tag: "Proof of life",
        title: "Yes, I’ve shipped at scale.",
        text: baseLine + addOn1 + addOn2 + addOn3,
      };
    }
    if (level < 75) {
      return {
        tag: "Professional Experience",
        title: "From idea to release.",
        text: baseLine + addOn1 + addOn2 + addOn3 + " I’ve taken features from concept to deployment in complex environments, ensuring they are genuinely smooth to use.",
      };
    }

    // --- PHASE 2: The Pivot (New Base) ---
    // At level 75, we switch the narrative to a deeper professional summary
    const proBase = "I bring solid experience from professional dev cycles: planning, building, debugging, and delivering. I’m especially interested in automation—scripts, tooling, and workflows that remove friction—plus AI/ML features where they make sense and stay maintainable.";
    
    if (level < 90) {
      return {
        tag: "Real-world Dev Cycles",
        title: "I’ve done this professionally.",
        text: proBase,
      };
    }
    if (level < 97) {
      return {
        tag: "Projects",
        title: "I build outside work too.",
        text: proBase + " My projects are where I push these ideas further: cleaner UX, smarter flows, and experiments with AI/ML and automation.",
      };
    }

    // --- PHASE 3: The Hard Sell ---
    return {
      tag: "Maximum hard sell",
      title: "Hire me before your competition does.",
      text: proBase + " My projects are where I push these ideas further. Here’s the deal: you can keep doing slow loops and patchy fixes, or you can bring in someone who ships clean work now. If you’re hiring, reach out today.",
    };
  };

  const content = getContent(sellLevel);

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-hidden relative ${
      darkMode 
      ? 'dark bg-[#0F172A]' 
      : 'bg-gradient-to-b from-[#FFFBF5] via-[#F7FAFF] to-[#EEF2FF]'
    } selection:bg-indigo-600 selection:text-white`}>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.12),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(16,185,129,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-40 dark:opacity-30 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full">
         <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-slate-900 font-black text-sm shadow-lg transition-colors">SG</div>
            <div className="leading-tight">
               <div className="font-semibold tracking-tight text-lg text-slate-900 dark:text-white transition-colors">Shiv Gandhi</div>
               <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Software • AI/ML • Automation • Cloud</div>
            </div>
         </div>

         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-slate-200/70 dark:hover:bg-slate-800 rounded-full transition-colors z-50 focus-ring">
            <Menu size={24} className="text-slate-900 dark:text-white" />
         </button>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[60] p-8 flex flex-col pt-24 border-l border-slate-200 dark:border-slate-800"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
               <X size={24} className="text-slate-900 dark:text-white" />
            </button>

            <div className="flex flex-col gap-6 text-2xl font-bold text-slate-900 dark:text-white">
              
              <button 
                onClick={() => navigateTo('home')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 text-indigo-700 dark:text-indigo-400"
              >
                Home <Home size={20} className="mt-1 opacity-50"/>
              </button>

              <button 
                onClick={() => navigateTo('projects')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Projects <Code size={20} className="mt-1 opacity-50"/>
              </button>

              <button 
                onClick={() => navigateTo('resume')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Resume <FileText size={20} className="mt-1 opacity-50"/>
              </button>
              
              <button 
                onClick={() => navigateTo('about')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                About Me <User size={20} className="mt-1 opacity-50"/>
              </button>
              
              <a href={`mailto:${email}`} className="text-slate-600 dark:text-slate-300 mt-4 text-lg font-semibold flex items-center gap-2">
                Contact <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[84vh] px-5 md:px-8 max-w-7xl mx-auto w-full pb-10">
         <div className="w-full max-w-6xl">
            <div className="glass-panel rounded-[28px] p-8 md:p-14 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-emerald-400 to-rose-400 opacity-80" />
               <motion.div layout>
                  <motion.span layout key={content.tag} className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block text-slate-600 dark:text-slate-400 transition-colors">{content.tag}</motion.span>
                  <motion.h1 layout key={content.title} className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white transition-colors">{content.title}</motion.h1>
                  <motion.p layout key={content.text} className="mt-6 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl transition-colors">{content.text}</motion.p>
                  
                  <AnimatePresence>
                    {sellLevel >= 80 && (
                      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="mt-10">
                        <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white dark:bg-white dark:text-slate-900 font-semibold hover:opacity-90 transition">
                          Contact me <ArrowRight size={18} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </motion.div>
            </div>
         </div>
         <div className="mt-8 w-4/5 max-w-5xl glass-panel p-6 rounded-2xl flex flex-col gap-4">
             <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors">
                <span>Less hard sell</span><span>More hard sell</span>
             </div>
             <input type="range" min="0" max="100" value={sellLevel} onChange={(e) => setSellLevel(Number(e.target.value))} className="w-full h-2 appearance-none focus:outline-none" />
         </div>
      </main>

      {/* Footer & Toggles */}
      <footer className="relative z-10 pb-8 w-full text-center text-slate-500 dark:text-slate-500 text-sm font-medium">Based in Winnipeg, MB • 2026</footer>
      <motion.button onClick={() => setDarkMode(!darkMode)} className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-yellow-400 transition-colors focus-ring">
         {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Contact Flash Overlay */}
      <AnimatePresence>
        {contactFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.h2
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
            >
              Let’s build something.
            </motion.h2>

            <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl space-y-6">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-slate-900">Quick call?</p>
                <p className="text-slate-500">If you’re hiring, don’t wait. Let’s talk before someone else snaps me up.</p>
              </div>

              <a href={`mailto:${email}`} className="block w-full py-4 bg-slate-900 hover:opacity-90 text-white font-bold rounded-xl transition-all active:scale-[0.99] text-lg">
                Email Me Now
              </a>

              <button onClick={() => setSellLevel(0)} className="text-sm text-slate-400 hover:text-slate-600 underline">
                Back to pitch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default App;