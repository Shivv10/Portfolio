import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Briefcase, GraduationCap, Award, Terminal, Coffee, Menu, X, Code, FileText, ArrowRight, Sun, Moon, Home, User } from 'lucide-react';

interface ResumeProps {
  navigateTo: (page: 'home' | 'projects' | 'resume' | 'about') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Resume: React.FC<ResumeProps> = ({ navigateTo, darkMode, setDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const email = "shivvgandhii@gmail.com";

  // Resume Data
  const experiences = [
    {
      id: 1,
      role: "Parts Advisor",
      company: "Part Source",
      period: "2023 – Present",
      icon: <Coffee size={20} />,
      content: "Currently continuing my role here. Managing inventory for 50+ clients/day and handling complex customer needs. If I can handle angry customers needing a specific spark plug, I can handle your merge conflicts. This role built my communication and negotiation skills significantly.",
      tech: ["Inventory Mgmt", "Communication", "CRM"]
    },
    {
      id: 2,
      role: "Application Developer (Part-time)",
      company: "Government of Manitoba",
      period: "Sep 2025 – Dec 2025",
      icon: <Terminal size={20} />,
      content: "Proved that 'Government' and 'Fast-Paced Innovation' can go in the same sentence. Built Power BI dashboards that saved analysts 5+ hours a week. Focused on optimizing data reporting workflows and maintaining legacy systems to ensure daily reliability.",
      tech: ["Power BI", "SQL", "System Maintenance", "Data Analysis"]
    },
    {
      id: 3,
      role: "Software Developer Intern",
      company: "Government of Manitoba",
      period: "May 2025 – Aug 2025",
      icon: <Briefcase size={20} />,
      content: "The summer of bug squashing. I resolved 30+ backlog bugs (some older than my favorite t-shirt) and reduced support tickets by 18%. Basically, I made the system stop yelling at people.",
      tech: ["Agile", "REST APIs", "Data Workflows"]
    },
    {
      id: 4,
      role: "Assistant Software Developer",
      company: "Symbiosis Technologies",
      period: "Aug 2021 – Dec 2021",
      icon: <CodeIcon size={20} />,
      content: "My origin story. Worked on microservices in Java & C#. Improved logging efficiency by 25% because I believe in leaving a breadcrumb trail when things break. Learned that 'production' is a scary place, but we deployed there anyway.",
      tech: ["Java", "C#", "SQL", "Microservices"]
    }
  ];

  const education = [
    {
      degree: "B.Sc. Computer Science",
      school: "University of Manitoba",
      period: "2022 – 2026 (Expected)",
      details: "GPA: 3.7. Dean's Honor List (4 years in a row, no big deal). Also a Runner-up in DevOps Hackathons, because sleep is optional.",
    }
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-slate-50 dark:bg-slate-950 overflow-y-auto transition-colors duration-300"
    >
      {/* --- Navigation Bar --- */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigateTo('home')}
          className="p-3 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-all border border-slate-200 dark:border-white/10 shadow-lg"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-all border border-slate-200 dark:border-white/10 shadow-lg"
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
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <X size={24} className="text-slate-900 dark:text-white" />
            </button>

            <div className="flex flex-col gap-6 text-2xl font-bold text-slate-900 dark:text-white">

              {/* Home Link on Top */}
              <button
                onClick={() => navigateTo('home')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Home <Home size={20} className="mt-1 opacity-50" />
              </button>

              <button
                onClick={() => navigateTo('projects')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Projects <Code size={20} className="mt-1 opacity-50" />
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-indigo-700 dark:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Resume <FileText size={20} className="mt-1 opacity-60" />
              </button>

              <button
                onClick={() => navigateTo('about')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                About Me <User size={20} className="mt-1 opacity-50" />
              </button>

              <a href={`mailto:${email}`} className="text-slate-600 dark:text-slate-300 mt-4 text-lg font-semibold flex items-center gap-2">
                Contact <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Content --- */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            The Professional <br />
            <span className="text-slate-400 dark:text-slate-600">(and slightly unfiltered)</span> <br />
            Journey.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            I’m a Computer Science Senior who builds scalable SaaS apps and optimizes databases.
            I also speak fluent Java, Python, and "Corporate Client".
            Here is what I've actually done, minus the buzzwords (okay, maybe a few buzzwords).
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="space-y-12 mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Experience Log</h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
              <div className="md:flex gap-10">
                <div className="hidden md:block w-[150px] text-right pt-1 pr-8">
                  <span className="text-xs font-bold text-slate-400 uppercase">{exp.period}</span>
                </div>
                <div className="flex-1 pb-12 relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500 hidden md:block" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden text-xs font-bold text-slate-400 uppercase">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {exp.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-500 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400"><GraduationCap size={24} /></div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Education</h3>
            </div>
            {education.map((edu, i) => (
              <div key={i}>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{edu.degree}</h4>
                <p className="text-sm text-slate-500 mb-2">{edu.school} • {edu.period}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400"><Award size={24} /></div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Arsenal</h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Languages</span>
                <p className="text-slate-700 dark:text-slate-300">Java, Python, C++, TypeScript, SQL, Go</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">The Fun Stuff</span>
                <p className="text-slate-700 dark:text-slate-300">React 19, Next.js 15, PyTorch, AWS, Docker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-16 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">"Oh, so you're one of those who lives by the textbook?"</p>
          <div className="inline-block p-1 pr-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <a
              href={`${import.meta.env.BASE_URL}resume/Shiv-Gandhi-Resume.pdf`}
              download="Shiv-Gandhi-Resume.pdf"
              className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all active:scale-95"
            >
              <Download size={20} /> Here is a professional PDF for you
            </a>

          </div>
          <p className="text-xs text-slate-400 mt-4">(ATS friendly, HR approved)</p>
        </div>
      </div>
    </div>
  );
};

// Helper Icon
const CodeIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Resume;