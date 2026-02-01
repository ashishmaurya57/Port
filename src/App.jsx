import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  Terminal, 
  Cpu, 
  Server, 
  Award, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// --- Data ---

const profile = {
  name: "Ashish Maurya",
  role: "AI & Backend Engineer",
  tagline: "Architecting scalable backend infrastructures and next-gen AI systems.",
  email: "ashishmauryaam57@gmail.com",
  phone: "+91 9517009645",
  socials: {
    github: "#",
    linkedin: "#",
    portfolio: "#"
  }
};

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-6 h-6" />,
    items: ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "Transformers", "RAG", "NLP", "HuggingFace"]
  },
  {
    category: "Backend & API",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Express.js", "FastAPI", "Django", "REST API"]
  },
  {
    category: "Frontend",
    icon: <Terminal className="w-6 h-6" />,
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    category: "Tools & DevOps",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Docker", "Git", "Vercel", "Railway", "Render", "CI/CD", "Streamlit"]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["MongoDB", "MySQL", "Qdrant", "Firebase", "Cloudflare R2"]
  }
];

const experience = [
  {
    id: 1,
    role: "AI & Backend Engineer",
    company: "Cognio Labs",
    period: "July 2025 – Present",
    description: "Architecting end-to-end production backends and integrating advanced AI modules.",
    achievements: [
      "Reduced system latency by 25% and infrastructure costs by 30% using FastAPI & Python.",
      "Designed a backend pipeline for AI-powered Webpage Design Generation, improving accuracy by 40%.",
      "Developed 'Druidix', an Agentic AI Platform with hybrid RAG, improving retrieval precision by 45%."
    ]
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "HashedBit Innovation",
    period: "June 2024 – Sept 2024",
    description: "Engineered responsive web applications and optimized backend workflows.",
    achievements: [
      "Improved user engagement by 20% through responsive React.js applications.",
      "Redesigned CRUD APIs with Node.js/Express, reducing server response time by 15%."
    ]
  }
];

const projects = [
  {
    id: 1,
    title: "No-Code AI Agent Builder",
    description: "A platform enabling users to create and automate AI agents without coding. Features integrated memory, RAG, and LLM tools.",
    tech: ["React", "Node.js", "MongoDB", "LangChain", "OpenAI"],
    link: "#"
  },
  {
    id: 2,
    title: "Conversational Search Engine",
    description: "Real-time search engine utilizing LangChain Agents to integrate sources like Wikipedia and DuckDuckGo with a live chat interface.",
    tech: ["LangChain", "Streamlit", "Groq", "Python"],
    link: "#"
  }
];

const achievements = [
  {
    title: "LeetCode Knight",
    value: "1869",
    sub: "Max Rating",
    icon: <Award className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "CodeChef",
    value: "3-Star",
    sub: "Max Rating: 1680",
    icon: <Award className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Global Rank 1432",
    value: "Top 5%",
    sub: "LeetCode Weekly Contest",
    icon: <Award className="w-8 h-8 text-purple-400" />
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          AM.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-medium mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{profile.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
            {profile.role}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
            {profile.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 rounded-lg transition-all"
            >
              View Work
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href={profile.socials.github} className="text-slate-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href={profile.socials.linkedin} className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${profile.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">{title}</h2>
    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-4" />
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Technical Expertise" subtitle="A comprehensive toolkit for building scalable AI and backend solutions." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full border border-slate-700/50">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Work Experience" subtitle="My professional journey in software engineering." />
        
        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                <span className="text-cyan-400 font-medium text-sm bg-cyan-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-slate-300 font-medium mb-4">{exp.company}</div>
              <p className="text-slate-400 mb-4 italic">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="Showcasing innovation in AI and Web Development." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 bg-slate-950 rounded-xl border border-slate-800"
            >
              <div className="p-4 bg-slate-900 rounded-full">
                {item.icon}
              </div>
              <div>
                <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{item.title}</h4>
                <div className="text-3xl font-bold text-white my-1">{item.value}</div>
                <p className="text-slate-500 text-sm">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionTitle title="Get In Touch" />
        <p className="text-slate-400 text-lg mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={profile.socials.github} className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">GitHub</a>
            <a href={profile.socials.linkedin} className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}