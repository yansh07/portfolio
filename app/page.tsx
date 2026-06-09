"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { Terminal, Database, Server, Code2, Mail, Cpu, Box, Braces, TerminalSquare } from 'lucide-react';
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

// --- CUSTOM HOOKS & COMPONENTS ---

// Aggressive Typewriter Effect
const Typewriter = ({ text, speed = 40, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typing = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, speed);
    return () => clearInterval(typing);
  }, [text, speed, started]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-3 h-5 ml-1 bg-emerald-500 align-middle"
      />
    </span>
  );
};

// Arrogant Number Counter
const Counter = ({ from, to }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let current = from;
      const step = Math.ceil((to - from) / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return <span ref={nodeRef}>{count}</span>;
};

// --- MAIN PORTFOLIO COMPONENT ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* Glitchy Background Grain */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 border-b border-zinc-900 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 to-transparent pointer-events-none"
        />
        
        <div className="z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 text-emerald-500 font-mono text-sm uppercase tracking-widest"
          >
            <TerminalSquare size={16} />
            <span>System Initialized // v1.0.0</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            <Typewriter text="Oh, good." delay={500} speed={60} /> <br />
            <Typewriter text="Another recruiter." delay={1500} speed={60} />
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-light mb-12"
          >
            I'm <strong className="text-white">Priyanshu Kumar Singh</strong>. I'm currently tolerating a BCA program at DIT University. I write bare-metal C, build scalable backends, and interface with the Linux kernel while you struggle to center a div. 
            <br/><br/>
            Keep scrolling if you can comprehend greatness.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4 }}
            className="flex flex-wrap gap-4 font-mono text-sm"
          >
            <div className="px-4 py-2 border border-zinc-800 bg-zinc-900/50 text-white flex items-center gap-3">
              <Braces size={16} className="text-emerald-500" />
              <span>LeetCode Problems Devoured: <strong className="text-emerald-400 text-lg"><Counter from={0} to={180} />+</strong></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="py-32 px-8 md:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tight flex items-center gap-4">
            <Cpu className="text-emerald-500" size={48} />
            I Speak Machine.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Terminal size={32} />}
              title="Languages"
              skills={['C (Bare-Metal)', 'Python', 'JavaScript/TypeScript']}
              desc="I speak these better than I speak to humans. I actually know how dynamic heap memory works."
            />
            <SkillCard 
              icon={<Server size={32} />}
              title="Backend & APIs"
              skills={['Node.js', 'FastAPI', 'Next.js']}
              desc="I build asynchronous task pipelines that handle your garbage code submissions without crashing."
            />
            <SkillCard 
              icon={<Database size={32} />}
              title="Databases & Infra"
              skills={['PostgreSQL', 'Redis', 'Docker']}
              desc="Where I securely store your irrelevant opinions and session logs in under 50ms."
            />
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-32 px-8 md:px-24 bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Look What I Built, Peasant.
          </h2>
          <p className="text-zinc-400 font-mono mb-16 max-w-2xl">
            $ ls -la /usr/local/masterpieces/
          </p>

          <div className="space-y-24">
            {/* Project 1: Abyss Shell */}
            <ProjectCard 
              title="Abyss Shell"
              tech={['C', 'Linux Kernel API', 'POSIX']}
              links={{ github: 'https://github.com/yansh/abyss-shell' }}
            >
              <p>
                Architected a fully functional Unix shell in bare-metal C. Why? Because standard terminals bored me. I interface directly with the Linux kernel via <code className="text-emerald-400 bg-emerald-950/30 px-1">fork()</code> and <code className="text-emerald-400 bg-emerald-950/30 px-1">execvp()</code>.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-400">
                <li>Engineered a dynamic multi-pipe parser allocating File Descriptors without deadlocks.</li>
                <li>Hijacked Standard Streams using dup2() for I/O redirection.</li>
                <li>Enforced strict dynamic heap memory management. Zero memory leaks. Try doing that in JavaScript.</li>
              </ul>
            </ProjectCard>

            {/* Project 2: OopsEngine */}
            <ProjectCard 
              title="OopsEngine"
              tech={['Python', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL']}
              links={{ github: 'https://github.com/yansh/Oops-Engine', live: 'https://oopsengine.vercel.app/' }}
            >
              <p>
                A scalable remote code execution engine. I designed it to run your untrusted, poorly written Python scripts inside isolated Docker containers.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-400">
                <li>Constrained to 0.5 CPU cores and 128MB memory because that's all your code deserves.</li>
                <li>Engineered an async task pipeline via Redis Queue handling 50+ concurrent submissions.</li>
                <li>Implemented strict network isolation. 100% reduction in DoS vulnerabilities. You're welcome.</li>
              </ul>
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-40 px-8 md:px-24 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Fine, Hire Me.
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-xs md:max-w-xl mx-auto">
            You've made it this far. You might as well send me an email. Try not to bore me with standard HR templates.
          </p>
          
          <motion.a 
            href="mailto:pksingh69313@gmail.com"
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(16 185 129 / 0.5)" }}
            className="inline-block text-xl md:text-5xl font-mono text-emerald-500 border-b-2 border-emerald-500/30 hover:border-emerald-500 pb-2 transition-colors duration-300"
          >
            pksingh69313@gmail.com
          </motion.a>

          <div className="flex justify-center gap-8 mt-16">
            <SocialLink icon={<FaSquareGithub size={24} />} href="https://github.com/yansh07" label="GitHub" />
            <SocialLink icon={<FaLinkedin size={24} />} href="https://linkedin.com/in/yansh08" label="LinkedIn" />
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// --- SUBCOMPONENTS ---

function SkillCard({ icon, title, skills, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -10, borderColor: 'rgb(16 185 129 / 0.5)' }}
      className="p-8 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm relative group overflow-hidden transition-colors"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-emerald-500 mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-zinc-400 mb-6 text-sm">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, tech, children, links }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative border border-zinc-800 bg-zinc-950 rounded-lg overflow-hidden group"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
        </div>
        <div className="font-mono text-xs text-zinc-500 flex-1 text-center font-medium">
          guest@priyanshu: ~/projects/{title.toLowerCase().replace(' ', '-')}
        </div>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span key={i} className="px-2 py-1 bg-emerald-950/30 text-emerald-400 text-xs font-mono border border-emerald-900/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            {links.github && (
              <a href={links.github} className="p-3 bg-zinc-900 text-white hover:bg-emerald-500 hover:text-black transition-colors rounded-md">
                <FaSquareGithub size={20} />
              </a>
            )}
            {links.live && (
              <a href={links.live} className="p-3 bg-zinc-900 text-white hover:bg-emerald-500 hover:text-black transition-colors rounded-md">
                <Box size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="text-zinc-300 leading-relaxed font-light text-lg">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function SocialLink({ icon, href, label }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-colors font-mono uppercase tracking-widest text-sm"
    >
      {icon} <span>{label}</span>
    </a>
  );
}