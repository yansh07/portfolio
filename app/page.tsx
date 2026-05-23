"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SkillBarProps = {
  label: string;
  level: number;
  color: string;
  animated?: boolean;
};

function SkillBar({ label, level, color, animated = true }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1 font-mono text-xs">
        <span className="text-zinc-300">{label}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="bg-zinc-800 h-2 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%", backgroundColor: color }}
        />
      </div>
    </div>
  );
}

type GlitchHeadingProps = {
  text: string;
  className?: string;
};

function GlitchHeading({ text, className = "" }: GlitchHeadingProps) {
  return <span className={className}>{text}</span>;
}

const PROJECTS = [
  {
    name: "Oversight",
    emoji: "🕵️",
    stack: ["Go", "React", "TypeScript", "Redis", "AES-256"],
    tagline: "Hide secrets in PNGs. NSA-approved† (†not really)",
    desc: "Steganography-based file sharing. Embeds AES-256 encrypted data inside innocent-looking PNG images. Zero-knowledge arch — server sees nothing. Files self-destruct after download like a spy movie, but real.",
    github: "https://github.com/yansh07/oversight",
    live: "https://oversight-ten.vercel.app/",
    color: "#22c55e",
  },
  {
    name: "Ledgerly",
    emoji: "💸",
    stack: ["FastAPI", "Python", "React", "PostgreSQL", "Docker"],
    tagline: "Personal finance dashboard. Will judge your spending.",
    desc: "Full-stack finance tracker with Google OAuth, JWT auth, real-time expense viz, and email alerts when you've blown your budget on chai again. Alembic migrations, background tasks, the works.",
    github: "https://github.com/yansh07/Ledgerly",
    live: "https://ledgerly-sandy.vercel.app/",
    color: "#facc15",
  },
  {
    name: "Gophar",
    emoji: "🦫",
    stack: ["Go (Gin)", "React", "PostgreSQL", "Telegram API"],
    tagline: "Uptime monitor that texts you before your boss does.",
    desc: "Concurrent health-check engine using Goroutines. Pings your services, detects downtime, fires Telegram alerts with spam suppression so it doesn't become the boy who cried wolf. Clean Architecture, because we're adults.",
    github: "https://github.com/yansh07/gophar",
    live: "https://gophar.vercel.app/",
    color: "#22d3ee",
  },
];

const SKILLS = [
  { label: "Go", level: 92, color: "#22c55e" },
  { label: "TypeScript", level: 84, color: "#38bdf8" },
  { label: "Python", level: 88, color: "#facc15" },
  { label: "React / Next.js", level: 80, color: "#a78bfa" },
  { label: "PostgreSQL", level: 76, color: "#60a5fa" },
  { label: "Docker", level: 82, color: "#f97316" },
];

const FUN_FACTS = [
  "Solved 180+ LeetCode problems. Still gets surprised by off-by-one errors.",
  "450+ commits across 7+ repos. Git blame is a horror movie.",
  "Writes Go code professionally. Go routines are just anxiety with benefits.",
  "Uses Docker religiously. \"Works on my machine\" is no longer an excuse.",
  "BCA student who somehow builds production-grade systems. Overachiever detected.",
  "Tried Redis TTL for data expiry. Uses the same approach on bad code.",
];

const MEMES = [
  { top: "It works on", bot: "my machine 🐳", sub: "(containerised it anyway)" },
  { top: "Concurrent goroutines?", bot: "What could go wrong", sub: "(narrator: a lot did)" },
  { top: "Zero knowledge", bot: "architecture", sub: "(server: 😶‍🌫️)" },
  { top: "NeetCode 150", bot: "completed btw", sub: "(asks for hints on easy problems)" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [funFactIdx, setFunFactIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFunFactIdx(i => (i + 1) % FUN_FACTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 overflow-x-hidden">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 4px)",
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#080808]/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-sm">
          <span className="text-green-400 font-bold tracking-widest">PK<span className="text-zinc-500">://</span>SINGH</span>
          <div className="flex md:gap-6 gap-1 px-1">
            {["about", "skills", "projects", "contact"].map(s => (
              <a
                key={s}
                href={`#${s}`}
                className="text-zinc-400 hover:text-green-400 transition-colors uppercase tracking-widest text-xs"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-green-400 text-sm mb-4 tracking-widest">{"// hello, world();"}</p>
            <h1 className="text-5xl md:text-6xl font-black leading-none mb-2 tracking-tight">
              <GlitchHeading text="PRIYANSHU" className="block text-white hover:cursor-crosshair" />
              <GlitchHeading text="KUMAR" className="block text-green-400 hover:cursor-crosshair" />
              <GlitchHeading text="SINGH" className="block text-zinc-500 hover:cursor-crosshair" />
            </h1>
            <p className="mt-4 text-zinc-400 font-mono text-sm leading-relaxed">
              Full-Stack Developer · Pythonista · Person who<br />
              actually reads documentation (sometimes).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 bg-green-500 text-black font-bold font-mono text-sm rounded hover:bg-green-400 transition-colors">
                ./view-work
              </a>
              <a href="#contact" className="px-5 py-2.5 border border-zinc-600 text-zinc-300 font-mono text-sm rounded hover:border-green-500 hover:text-green-400 transition-colors">
                sudo contact-me
              </a>
            </div>

            {/* rotating fun fact */}
            <div className="mt-8 p-3 bg-zinc-900 border-l-2 border-yellow-400 rounded font-mono text-xs text-zinc-400">
              <span className="text-yellow-400">$ random_fact.sh </span>
              <span className="text-zinc-300 block mt-1 transition-all duration-500">{FUN_FACTS[funFactIdx]}</span>
            </div>
          </div>

          <Image
            src="/image.png"
            alt="Priyanshu"
            width={300}
            height={300}
            className="rounded-xl border border-zinc-800 grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-green-400 text-sm mb-2">{"// cat about.md"}</p>
          <h2 className="text-3xl font-black text-white">WHO IS THIS GUY?</h2>
          <p className="text-zinc-600 font-mono text-xs mt-1">spoiler: it's complicated</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-5">
            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-zinc-300 leading-relaxed">
                I'm a <span className="text-green-400 font-mono">BCA student</span> at Dehradun Institute of Technology,
                expected to graduate in May 2027 — which means I'm building production-grade systems while most people
                my age are still figuring out what a <span className="text-yellow-400 font-mono">pointer</span> is.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                I write Go for the performance, Python when I need to get things done fast,
                TypeScript because <span className="text-red-400 font-mono">any</span> is a skill issue,
                and React because I enjoy pretending to understand state management.
              </p>
              <p className="text-zinc-500 leading-relaxed mt-3 text-sm italic">
                Currently: somewhere between "junior dev" and "accidentally architecting distributed systems".
              </p>
            </div>

            {/* Meme grid */}
            <div className="grid grid-cols-2 gap-3">
              {MEMES.map((m, i) => (
                <div key={i} className="p-4 bg-[#0f0f0f] border border-zinc-800 rounded-lg text-center hover:border-green-800 transition-colors group">
                  <p className="text-zinc-500 font-mono text-xs group-hover:text-zinc-400 transition-colors">{m.top}</p>
                  <p className="text-white font-black text-sm my-1">{m.bot}</p>
                  <p className="text-zinc-600 font-mono text-[10px]">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-4">
            {[
              { label: "LeetCode Problems", value: "180+", icon: "🔢", note: "NeetCode 150 ✓" },
              { label: "GitHub Commits", value: "450+", icon: "📦", note: "across 7+ repos" },
              { label: "Active Repos", value: "7+", icon: "🗂️", note: "not abandoned, promise" },
              { label: "Languages", value: "5", icon: "🗣️", note: "Go is the best one" },
            ].map(s => (
              <div key={s.label} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-black text-green-400 font-mono">{s.value}</div>
                <div className="text-zinc-300 text-sm font-medium">{s.label}</div>
                <div className="text-zinc-600 text-xs font-mono mt-1">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 bg-[#060606]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="font-mono text-green-400 text-sm mb-2">{"// ls -la skills/"}</p>
            <h2 className="text-3xl font-black text-white">TECH STACK</h2>
            <p className="text-zinc-600 font-mono text-xs mt-1">hover for existential dread</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
            {SKILLS.map(s => <SkillBar key={s.label} {...s} />)}
          </div>

          {/* Tag cloud */}
          <div className="mt-12 flex flex-wrap gap-2">
            {["Goroutines", "Zero-Knowledge", "Clean Architecture", "AES-256", "Google OAuth", "JWT", "Alembic", "Docker", "Railway", "Vercel", "Telegram Bots", "REST APIs", "Redis TTL", "Concurrent Systems", "Postman"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full font-mono text-xs text-zinc-400 hover:border-green-600 hover:text-green-400 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-green-400 text-sm mb-2">{"// git log --oneline --projects"}</p>
          <h2 className="text-3xl font-black text-white">THINGS I BUILT</h2>
          <p className="text-zinc-600 font-mono text-xs mt-1">and didn't break (mostly)</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="group relative p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 overflow-hidden"
            >
              {/* glow accent */}
              <div
                className="absolute -top-px left-0 right-0 h-[2px] opacity-80"
                style={{ backgroundColor: p.color }}
              />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{p.emoji}</span>
                    <div>
                      <h3 className="text-xl font-black text-white font-mono">{p.name}</h3>
                      <p style={{ color: p.color }} className="text-xs font-mono italic">{p.tagline}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3 max-w-2xl">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.stack.map(s => (
                      <span key={s} className="px-2 py-0.5 bg-[#0f0f0f] border border-zinc-700 rounded font-mono text-xs" style={{ color: p.color }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-1">
                  <a href={p.github} className="px-3 py-1.5 border border-zinc-700 rounded font-mono text-xs text-zinc-400 hover:border-zinc-500 hover:text-white transition-colors">
                    GitHub →
                  </a>
                  <a href={p.live} className="px-3 py-1.5 rounded font-mono text-xs font-bold text-black transition-colors" style={{ backgroundColor: p.color }}>
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 p-5 bg-[#0f0f0f] border border-zinc-800 rounded-lg font-mono text-sm grid grid-cols-1 md:flex items-center gap-4">
          {/* <span className="text-zinc-500">$</span> */}
          <span className="text-zinc-300"><span className="text-zinc-500 px-2">$</span>open github.com/yansh07</span>
          <span className="text-zinc-600 ml-auto text-xs px-10 md:px-4">450+ commits · 7+ repos · all public · no regrets</span>
          <a href="https://github.com/yansh07" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 hover:bg-zinc-700 transition-colors whitespace-nowrap">
            Visit →
          </a>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 bg-[#060606]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-green-400 text-sm mb-2">{"// cat education.log"}</p>
            <h2 className="text-3xl font-black text-white">EDUCATION</h2>
          </div>
          <div className="flex items-start gap-6 p-6 bg-zinc-900 border border-zinc-800 rounded-xl max-w-2xl">
            <div className="text-5xl">🎓</div>
            <div>
              <h3 className="text-lg font-black text-white">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-green-400 font-mono text-sm">Dehradun Institute of Technology</p>
              <p className="text-zinc-500 font-mono text-xs mt-1">Expected May 2027 · Dehradun, India</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["DSA", "Operating Systems", "DBMS", "Computer Networks"].map(c => (
                  <span key={c} className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-400 font-mono">{c}</span>
                ))}
              </div>
              <p className="mt-3 text-zinc-500 text-xs italic font-mono">
                "technically studying, practically building production systems"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <p className="font-mono text-green-400 text-sm mb-2">{"// curl -X POST /hire-me"}</p>
        <h2 className="text-4xl font-black text-white mb-4">LET'S WORK TOGETHER</h2>
        <p className="text-zinc-500 max-w-md mx-auto mb-10 font-mono text-sm">
          I'm open to internships, freelance projects, and full-time roles.<br />
          I respond faster than my build pipelines, I promise.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto mb-10">
          {[
            { label: "Email", value: "pksingh69313@gmail.com", href: "mailto:pksingh69313@gmail.com", icon: "📧" },
            { label: "LinkedIn", value: "yansh08", href: "https://linkedin.com/in/yansh08", icon: "💼" },
            { label: "GitHub", value: "yansh07", href: "https://github.com/yansh07", icon: "🐙" },
          ].map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-green-700 hover:bg-zinc-800 transition-all group"
            >
              <div className="text-2xl mb-2">{c.icon}</div>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{c.label}</p>
              <p className="text-zinc-300 font-mono text-xs mt-1 group-hover:text-green-400 transition-colors truncate">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="inline-block p-4 bg-[#0f0f0f] border border-zinc-800 rounded-lg font-mono text-xs text-zinc-600">
          <span className="text-green-400">status:</span> available for hire ·{" "}
          <span className="text-green-400">response_time:</span> {"< 24h"} ·{" "}
          <span className="text-green-400">coffee:</span> appreciated
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 px-6 font-mono text-xs text-zinc-700 text-center">
        <p>Built by Priyanshu Kumar Singh · No AI was harmed in the making of this portfolio</p>
        <p className="mt-1">© {new Date().getFullYear()} · all bugs are features · {"{}'s your fear not mine"}</p>
      </footer>
    </div>
  );
}