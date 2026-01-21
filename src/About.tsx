import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Menu, X, Instagram, Github, Linkedin, MapPin, Plane, Dumbbell, Code, FileText, ArrowRight, Home, Camera, Car, Heart, Sun, Moon } from 'lucide-react';

interface AboutProps {
  navigateTo: (page: 'home' | 'projects' | 'resume' | 'about') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const About: React.FC<AboutProps> = ({ navigateTo, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const email = "shivvgandhii@gmail.com";

  // Helper to construct paths correctly for GitHub Pages
  // If your repo is "portfolio", this automatically adds "/portfolio/" to the start
  const getPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const dreams = [
    { icon: <Code size={16} />, text: "Tech Savvy" },
    { icon: <Plane size={16} />, text: "Traveler" },
    { icon: <Dumbbell size={16} />, text: "Fitness Enthusiast" },
    { icon: <Car size={16} />, text: "F1 Driver (Lol, out of budget)" },
    { icon: <Camera size={16} />, text: "Content Creator" },
    { icon: <Heart size={16} />, text: "Family Man (someday)" },
    { icon: <Instagram size={16} />, text: "Influencer (maybe ?)" },
    { icon: <MapPin size={16} />, text: "Startup Founder (Idk)" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-slate-50 dark:bg-slate-950 overflow-y-auto transition-colors duration-300"
    >
      {/* --- Nav Bar --- */}
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
                onClick={() => navigateTo('resume')}
                className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Resume <FileText size={20} className="mt-1 opacity-50" />
              </button>

              <button
                onClick={() => { setIsMenuOpen(false); }}
                className="text-left text-indigo-700 dark:text-indigo-400 flex items-center gap-2"
              >
                About <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full">Me</span>
              </button>

              <a href={`mailto:${email}`} className="text-slate-600 dark:text-slate-300 mt-4 text-lg font-semibold flex items-center gap-2">
                Contact <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Content --- */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-20"
        >
          {/* Profile Picture */}
          <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl relative group">
            <img
              // FIXED PATH: removed /public/ and added getPath helper
              src={getPath("img/profile.JPG")}
              className="w-full h-full object-cover object-center scale-110"
              style={{ objectPosition: "50% 50%" }}
              alt="Profile"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              More than just <br />
              <span className="text-indigo-600 dark:text-indigo-400">lines of code.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Hey, I'm Shiv. Welcome to the "Offline" version of me.
            </p>
          </div>
        </motion.div>

        {/* The "Philosophy" Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <div className="absolute -inset-4 bg-slate-100 dark:bg-slate-900/50 rounded-3xl -z-10" />
          <p className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
            I am 22 years old, and I refuse to believe I have to pick <span className="italic text-indigo-600 dark:text-indigo-400">just one thing</span>.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            They say life is short, but I think it's just long enough to be a tech genius, a startup founder, a football player, and an F1 driver (okay, maybe just in the simulator).
            I know it's just daydreaming at this point and reality will hit me eventually, but for now, I'm trying to do it all.
          </p>

          <div className="flex flex-wrap gap-3">
            {dreams.map((dream, i) => (
              <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 shadow-sm">
                {dream.icon} {dream.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Travel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <Plane className="text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 dark:text-white">Chasing Horizons</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96 md:h-80">
            {/* Big image */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl">
              <img
                src={getPath("img/banff.jpg")} // FIXED PATH
                alt="Nature shot"
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ objectPosition: "50% 40%" }}
              />
            </div>

            {/* Small 1 */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={getPath("img/Ladakh.jpg")} 
                alt="Landscape"
                className="absolute inset-0 w-full h-full object-cover scale-105"
                style={{ objectPosition: "50% 50%" }}
              />
            </div>

            {/* Small 2 */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={getPath("img/mountain.jpg")} 
                alt="Travel"
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ objectPosition: "50% 45%" }}
              />
            </div>
          </div>

        </motion.div>

        {/* Sports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <Dumbbell className="text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 dark:text-white">Until My Legs Give Out</h2>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            I love football. But honestly, I'll play anything with a scoreboard.
            I try every sport I can until my body literally refuses to cooperate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
              <video
                src={getPath("videos/football.mp4")} 
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
              <img
                src={getPath("img/cricket.JPG")} 
                alt="cricket"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "50% 50%" }}
              />
            </div>
          </div>
        </motion.div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-16 text-center">
          <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Think I'm interesting?
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Even if I'm not the right fit technically, I think I'm at least a fun follow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/shivgandhi10/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-3 rounded-full font-bold hover:shadow-lg transition-all active:scale-95 dark:bg-white dark:text-slate-900"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Shivv10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-3 rounded-full font-bold hover:shadow-lg transition-all active:scale-95 dark:bg-white dark:text-slate-900"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/shivv__10/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-7 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all active:scale-95"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;