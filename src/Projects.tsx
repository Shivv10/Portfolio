import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ArrowLeft, Moon, Sun, Menu, ArrowRight, Code, FileText, Home, User } from 'lucide-react';
import { projects } from './projectsData';

interface ProjectsProps {
  navigateTo: (page: 'home' | 'projects' | 'resume' | 'about') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({ navigateTo, darkMode, setDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const email = 'shivvgandhii@gmail.com';

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const selectedProject = projects.find((p) => p.id === selectedId);
  const overlayColor = darkMode ? 'rgba(2, 6, 23, 0.98)' : 'rgba(241, 245, 249, 0.98)';

  useEffect(() => {
    if (selectedId) setIsMenuOpen(false);
  }, [selectedId]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden cursor-crosshair transition-colors duration-300"
    >
      {/* --- Navigation Bar --- */}
      <div className="fixed top-6 left-6 z-50 flex gap-4">
        <button
          onClick={() => navigateTo('home')}
          className="p-3 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-all border border-slate-200 dark:border-white/10 shadow-lg"
          aria-label="Go home"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* --- Hamburger Menu Button --- */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-3 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-all border border-slate-200 dark:border-white/10 shadow-lg"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* --- Theme Toggle --- */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-yellow-400 transition-colors pointer-events-auto hover:scale-110 active:scale-95"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* --- Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[60] p-8 flex flex-col pt-24 border-l border-slate-200 dark:border-slate-800"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} className="text-slate-900 dark:text-white" />
            </button>

            <div className="flex flex-col gap-6 text-2xl font-bold text-slate-900 dark:text-white">
              
              <button
                onClick={() => navigateTo('home')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Home <Home size={20} className="mt-1 opacity-50" />
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-indigo-700 dark:text-indigo-400 flex items-center gap-2"
              >
                Projects <Code size={20} className="mt-1 opacity-60" />
              </button>

              <button
                onClick={() => navigateTo('resume')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Resume <FileText size={20} className="mt-1 opacity-50" />
              </button>
              
              <button 
                onClick={() => navigateTo('about')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                About Me <User size={20} className="mt-1 opacity-50"/>
              </button>

              <a
                href={`mailto:${email}`}
                className="text-slate-600 dark:text-slate-300 mt-4 text-lg font-semibold flex items-center gap-2"
              >
                Contact <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LAYER 1: The Content Grid (Scrollable) --- */}
      <div className="absolute inset-0 z-0 px-10 overflow-y-auto relative">
        <div className="max-w-7xl mx-auto">
          {/* --- TITLE --- */}
          <div className="relative z-20 pt-24 pointer-events-none">
            <h2 className="text-4xl md:text-6xl font-black text-slate-600 dark:text-slate-400 uppercase tracking-tighter opacity-100 select-none">
              Projects
            </h2>
          </div>

          {/* --- Project Grid --- */}
          <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 pb-20">
            {projects.map((project) => (
              <motion.div
                layoutId={`card-${project.id}`}
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 aspect-square rounded-xl p-6 cursor-pointer overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-colors shadow-sm dark:shadow-none"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-2 block">
                      {String(project.id).padStart(2, '0')} // PROJECT
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-2 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- LAYER 2: The Flashlight Overlay --- */}
        {/* FIX: Added 'hidden md:block' to hide this mask on mobile devices */}
        {!selectedId && (
          <div
            className="hidden md:block absolute inset-0 z-10 pointer-events-none transition-colors duration-500"
            style={{
              background: `radial-gradient(circle 380px at ${mousePosition.x}px ${mousePosition.y}px, transparent 185px, ${overlayColor} 187px)`,
            }}
          >
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
        )}
      </div>

      {/* --- Expanded Card Modal --- */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-50/80 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${selectedProject.color}`} />
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-black/20 hover:bg-slate-200 dark:hover:bg-black/40 rounded-full text-slate-900 dark:text-white transition-colors"
                aria-label="Close project"
              >
                <X size={20} />
              </button>
              <div className="p-8 md:p-12">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Project 0{selectedProject.id}</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2 mb-6">{selectedProject.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors">
                    <Github size={20} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;