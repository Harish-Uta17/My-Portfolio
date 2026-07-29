// ============================================================================
//  Portfolio.tsx  —  Uta Harish Kumar
//  Single self-contained file. Drop into your Vite repo's src/ folder.
//
//  SETUP (run once in your repo):
//     npm install motion lucide-react
//
//  Then render it, e.g. in src/App.tsx:
//     import Portfolio from "./Portfolio";
//     export default function App() { return <Portfolio />; }
//
//  Tailwind CSS is required (you already have it). Fonts are auto-injected.
// ============================================================================
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, animate } from "motion/react";
import {
  Github, Linkedin, Mail, ExternalLink, Download, TrendingUp, Award, Target,
  Code2, Database, BrainCircuit, ChevronRight, FileText, Users, CheckCircle2,
  Calendar, MapPin, Camera, Menu, X, Trophy, Star, Zap, ArrowUp, Briefcase,
  GraduationCap, Sparkles, ArrowDown,
} from "lucide-react";

// ───────────────────────────────  FONTS  ───────────────────────────────
// Injects the Google Fonts <link> once, so the file is fully self-contained.
function useFonts() {
  useEffect(() => {
    const id = "uhk-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

// ───────────────────────────────  DATA  ───────────────────────────────
const NAV = ["Home", "About", "Experience", "Projects", "Skills", "Achievements", "Contact"];

const LINKS = {
  linkedin: "https://www.linkedin.com/in/uta-harish-kumar-83b685300/",
  github: "https://github.com/Harish-Uta17",
  email: "utaharish96@gmail.com",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=utaharish96@gmail.com",
};

const roles = ["Data Scientist", "AI / ML Engineer", "Automation Builder", "Data Analyst"];

const quickStats = [
  { label: "Projects", value: 15, suffix: "+", color: "from-cyan-400 to-sky-500" },
  { label: "Internships", value: 5, suffix: "", color: "from-violet-400 to-fuchsia-500" },
  { label: "Technologies", value: 20, suffix: "+", color: "from-emerald-400 to-teal-500" },
  { label: "Certifications", value: 4, suffix: "", color: "from-amber-400 to-orange-500" },
];

const techStrip = ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "SQL", "PostgreSQL", "Power BI", "Streamlit", "Flask", "n8n", "Gemini AI", "LangChain", "Matplotlib", "XGBoost"];

const competencies = [
  { icon: Code2, text: "Machine Learning & Deep Learning", color: "text-cyan-400" },
  { icon: Database, text: "Data Analysis & Visualization", color: "text-sky-400" },
  { icon: BrainCircuit, text: "AI Agents & Automation", color: "text-violet-400" },
  { icon: TrendingUp, text: "Predictive Analytics", color: "text-emerald-400" },
  { icon: FileText, text: "Statistical Analysis", color: "text-amber-400" },
  { icon: Users, text: "Cross-Functional Collaboration", color: "text-pink-400" },
];

const experiences = [
  {
    company: "YBI Foundation",
    role: "Data Science & Machine Learning Intern",
    period: "Nov 2025 – Jan 2026",
    location: "Remote, India",
    achievements: [
      "Built end-to-end ML pipelines on real-world datasets achieving 85%+ model accuracy",
      "Implemented regression and classification algorithms with comprehensive evaluation metrics",
      "Created data visualizations using Matplotlib & Seaborn, reducing analysis time by 40%",
      "Performed advanced preprocessing, feature engineering, and EDA on 10+ datasets",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    company: "Cognifyz Technologies",
    role: "Data Science Intern",
    period: "Nov 2025 – Dec 2025",
    location: "Remote, India",
    achievements: [
      "Applied advanced ML techniques to business datasets, producing actionable stakeholder insights",
      "Developed predictive models with 80%+ accuracy via feature engineering and hyperparameter tuning",
      "Collaborated with cross-functional teams to deliver solutions on deadline",
      "Conducted statistical analysis and hypothesis testing to validate business assumptions",
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Statistical Modeling"],
  },
  {
    company: "Future Interns",
    role: "Data Science & Analytics Intern",
    period: "Nov 2025 – Dec 2025",
    location: "Remote, India",
    achievements: [
      "Analyzed complex datasets to extract meaningful patterns and business intelligence",
      "Developed analytical frameworks for data-driven decision making",
      "Recognized for exceptional professionalism and consistent high-quality deliverables",
      "Created comprehensive reports and presentations for stakeholder communication",
    ],
    technologies: ["Data Analytics", "Python", "Business Intelligence", "Reporting"],
  },
];

const projects = [
  {
    title: "House Price Prediction System",
    description: "Enterprise-grade regression system predicting real estate prices via feature engineering, ensemble learning, and systematic evaluation.",
    impact: "92% prediction accuracy with a 15% RMSE reduction over baseline models.",
    category: "Predictive Modeling",
    metrics: ["92% Accuracy", "15% RMSE Reduction"],
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    github: "https://github.com/Harish-Uta17/House-price-prediction",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Smart Sales Analytics Platform",
    description: "Full-stack analytics app turning sales data into real-time KPI dashboards and customer insights using SQL and Streamlit.",
    impact: "Faster business decisions via automated KPI tracking and customer segmentation.",
    category: "Data Analytics",
    metrics: ["Real-time Dashboards", "5+ KPIs"],
    technologies: ["Python", "PostgreSQL", "Streamlit", "SQL"],
    github: "https://github.com/Harish-Uta17/Smart-Sales-Analytics",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Social Media Automation Agent",
    description: "Automation system using Gemini AI and n8n to generate and publish professional LinkedIn content with minimal manual effort.",
    impact: "Reduced manual posting time by 80% through an AI-assisted workflow.",
    category: "AI Automation",
    metrics: ["80% Time Saved", "Automated Workflow"],
    technologies: ["AI Agents", "Google Gemini", "n8n"],
    github: "https://github.com/Harish-Uta17/AI-Social-Automation-Agent",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "AI News Summarization Agent",
    description: "Automated news aggregation and summarization system delivering concise AI-generated newsletters.",
    impact: "Automated daily content delivery for faster information consumption.",
    category: "AI & NLP",
    metrics: ["Daily Automation", "AI Summarization"],
    technologies: ["NLP", "Google Gemini", "RSS Feeds"],
    github: "https://github.com/Harish-Uta17/AI-News-Summarization-Agent",
    accent: "from-pink-500 to-rose-600",
  },
  {
    title: "ElectroHub Sales Analytics",
    description: "Power BI dashboard transforming retail sales data into stakeholder-ready insights across product, promotion, and city performance.",
    impact: "Modeled 3,510 transactions into an interactive BI solution.",
    category: "Power BI",
    metrics: ["3,510 Transactions", "8 Product Lines"],
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    github: "https://github.com/Harish-Uta17/ElectroHub-PowerBI",
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Student Score Predictor",
    description: "ML regression app predicting a student's math score from profile and preparation data through a polished Streamlit experience.",
    impact: "Recruiter-friendly ML workflow with reusable preprocessing and saved inference artifacts.",
    category: "Machine Learning",
    metrics: ["Streamlit UI", "Regression Pipeline"],
    technologies: ["Python", "Scikit-learn", "Streamlit", "Flask"],
    github: "https://github.com/Harish-Uta17/Student-Exam-Performance-Predictor",
    accent: "from-indigo-500 to-purple-600",
  },
];

const skills: { cat: string; grad: string; items: { name: string; level: number }[] }[] = [
  { cat: "Programming Languages", grad: "from-cyan-400 to-sky-500", items: [
    { name: "Python", level: 90 }, { name: "SQL", level: 85 }, { name: "C++", level: 75 } ] },
  { cat: "Data Science & ML", grad: "from-violet-400 to-fuchsia-500", items: [
    { name: "Machine Learning", level: 85 }, { name: "Scikit-learn", level: 88 }, { name: "Deep Learning", level: 70 }, { name: "Data Analysis", level: 90 } ] },
  { cat: "Tools & Frameworks", grad: "from-emerald-400 to-teal-500", items: [
    { name: "Pandas & NumPy", level: 90 }, { name: "Streamlit", level: 85 }, { name: "TensorFlow/Keras", level: 70 }, { name: "PostgreSQL", level: 80 } ] },
  { cat: "Analytics & BI", grad: "from-amber-400 to-orange-500", items: [
    { name: "Power BI", level: 88 }, { name: "Data Visualization", level: 92 }, { name: "Dashboard Design", level: 86 }, { name: "Power Query", level: 84 } ] },
  { cat: "Specializations", grad: "from-pink-400 to-rose-500", items: [
    { name: "AI Agents & Automation", level: 85 }, { name: "Prompt Engineering", level: 88 }, { name: "Business Intelligence", level: 87 }, { name: "Feature Engineering", level: 82 } ] },
];

const achievements = [
  { icon: Trophy, title: "5 Technical Internships", description: "Data Science & ML across industry teams", grad: "from-amber-500 to-orange-600" },
  { icon: Star, title: "15+ Projects", description: "End-to-end ML & analytics solutions delivered", grad: "from-cyan-500 to-blue-600" },
  { icon: Zap, title: "92% Accuracy", description: "Best-in-class predictive model performance", grad: "from-violet-500 to-fuchsia-600" },
  { icon: Award, title: "4 Certifications", description: "Professional credentials in the DS stack", grad: "from-emerald-500 to-teal-600" },
];

// ───────────────────────────────  HELPERS  ───────────────────────────────
function Aurora() {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i, top: Math.random() * 100, left: Math.random() * 100,
    size: Math.random() * 2 + 1, delay: Math.random() * 4,
  }));
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: "linear-gradient(rgba(120,140,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(120,140,255,0.15) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
      }} />
      <motion.div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute top-20 -right-40 h-[42rem] w-[42rem] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.32), transparent 70%)" }}
        animate={{ x: [0, -70, 0], y: [0, 60, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-10rem] left-1/3 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.28), transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
      {stars.map((s) => (
        <motion.span key={s.id} className="absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.9, 0.1] }} transition={{ duration: 3, repeat: Infinity, delay: s.delay, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.55, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <motion.div className="flex w-max gap-3" animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
        {doubled.map((t, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">{t}</span>
        ))}
      </motion.div>
    </div>
  );
}

function useTyping(words: string[], speed = 85, pause = 1300) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === cur) t = setTimeout(() => setDel(true), pause);
    else if (del && text === "") { setDel(false); setI((v) => v + 1); }
    else t = setTimeout(() => setText(cur.slice(0, text.length + (del ? -1 : 1))), del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function SectionHeading({ eyebrow, title, subtitle, grad }: { eyebrow: string; title: string; subtitle: string; grad: string }) {
  return (
    <Reveal>
      <div className="mb-14 text-center">
        <span className={`mb-3 inline-block rounded-full border border-white/10 bg-gradient-to-r ${grad} bg-clip-text px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-transparent`}>{eyebrow}</span>
        <h2 className={`bg-gradient-to-r ${grad} bg-clip-text text-3xl text-transparent sm:text-4xl`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">{subtitle}</p>
      </div>
    </Reveal>
  );
}

// ───────────────────────────────  MAIN  ───────────────────────────────
export default function Portfolio() {
  useFonts();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState<string>(
    () => (typeof localStorage !== "undefined" && localStorage.getItem("profileImage")) || "",
  );
  const [imgError, setImgError] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const typed = useTyping(roles);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress((top / h) * 100);
      setScrolled(top > 20);
      setShowTop(top > 500);
      const cur = NAV.map((n) => n.toLowerCase()).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 150 && r.bottom >= 150;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImageUrl(reader.result);
        localStorage.setItem("profileImage", reader.result);
        setImgError(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative min-h-screen w-full text-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Aurora />

      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* NAV */}
      <nav className={`fixed z-50 w-full transition-all ${scrolled ? "border-b border-white/10 bg-[#05060a]/85 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-xl text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>UHK.</span>
          <div className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <button key={n} onClick={() => go(n.toLowerCase())}
                className={`relative text-sm transition-colors ${active === n.toLowerCase() ? "text-cyan-300" : "text-slate-400 hover:text-cyan-300"}`}>
                {n}
                {active === n.toLowerCase() && <motion.span layoutId="navunderline" className="absolute -bottom-1 left-0 right-0 h-0.5 rounded bg-gradient-to-r from-cyan-400 to-violet-400" />}
              </button>
            ))}
          </div>
          <button onClick={() => go("contact")} className="hidden rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm text-white shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)] transition-transform hover:scale-105 md:block">Get In Touch</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white md:hidden">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#05060a]/95 px-6 py-4 md:hidden">
            {NAV.map((n) => (
              <button key={n} onClick={() => go(n.toLowerCase())} className="block w-full rounded-lg px-4 py-3 text-left text-slate-300 hover:bg-white/5 hover:text-cyan-300">{n}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for opportunities · May 2027
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl leading-[1.05] sm:text-7xl md:text-8xl" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
          <span className="bg-gradient-to-br from-white via-cyan-100 to-slate-300 bg-clip-text text-transparent">Uta Harish</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Kumar</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-xl text-slate-300 sm:text-2xl">
          I'm a <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text font-semibold text-transparent">{typed}</span>
          <span className="ml-0.5 inline-block h-6 w-[3px] animate-pulse bg-cyan-300 align-middle" />
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 max-w-2xl text-slate-400">
          Building AI-powered applications, predictive models, and data-driven systems that turn raw data into intelligent, automated decisions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => go("projects")} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3 text-white shadow-[0_0_30px_-6px_rgba(56,189,248,0.7)] transition-transform hover:scale-105">
            <Sparkles size={18} /> View My Work
          </button>
          <button onClick={() => go("contact")} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-slate-200 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:text-cyan-200">
            <Mail size={18} /> Contact Me
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex gap-3">
          {[{ icon: Linkedin, href: LINKS.linkedin }, { icon: Github, href: LINKS.github }, { icon: Mail, href: LINKS.gmail }].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-8 text-slate-500">
          <ArrowDown size={22} />
        </motion.div>
      </section>

      {/* TECH MARQUEE */}
      <div className="border-y border-white/5 bg-white/[0.02] py-4">
        <Marquee items={techStrip} />
      </div>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="lg:col-span-1">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400" />
                <div className="group relative mx-auto mb-6 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-400/40 bg-gradient-to-br from-cyan-500 to-violet-600 shadow-[0_0_45px_-8px_rgba(56,189,248,0.6)]">
                  {imageUrl && !imgError ? (
                    <img src={imageUrl} alt="Profile" className="h-full w-full object-cover" onError={() => setImgError(true)} />
                  ) : (
                    <span className="text-5xl text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>UH</span>
                  )}
                  <button onClick={() => fileInput.current?.click()} className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Camera className="text-white" size={30} />
                  </button>
                </div>
                <input type="file" ref={fileInput} onChange={onUpload} accept="image/*" className="hidden" />
                <div className="mb-6 flex justify-center">
                  <button onClick={() => fileInput.current?.click()} className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-300 hover:text-cyan-200">
                    <Camera size={13} /> Change Photo
                  </button>
                </div>
                <h3 className="text-center text-xl text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>Uta Harish Kumar</h3>
                <p className="mb-6 mt-1 bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-center text-transparent">Data Scientist · AI/ML Engineer</p>
                <div className="mb-6 space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-cyan-400" /> Vadodara, Gujarat, India</div>
                  <div className="flex items-center gap-2"><Mail size={16} className="text-violet-400" /> {LINKS.email}</div>
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-pink-400" /> Available May 2027</div>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 py-3 text-white transition-transform hover:scale-[1.02]">
                  <Download size={18} /> Download Resume
                </button>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {quickStats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                    <div className={`bg-gradient-to-r ${s.color} bg-clip-text text-3xl text-transparent`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                      <CountUp value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <span className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan-300">About Me</span>
              <h2 className="text-3xl text-white sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.15 }}>
                Data Science Professional & <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">AI Automation Engineer</span>
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center gap-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Target className="text-cyan-400" size={22} /> Professional Summary
                </h3>
                <p className="leading-relaxed text-slate-300">
                  Data professional specializing in data analytics, data science, generative AI, and intelligent automation. Applying advanced techniques in machine learning, deep learning, prompt engineering, and AI agent development. Currently pursuing a B.Tech in Artificial Intelligence at Parul Institute of Engineering & Technology, with strong proficiency in Python, SQL, and modern ML frameworks.
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  Demonstrated excellence across 5 technical internships, delivering quantifiable business impact through predictive modeling, data-driven insights, and AI-powered automation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <h3 className="mb-6 flex items-center gap-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Award className="text-violet-400" size={22} /> Core Competencies
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {competencies.map((c) => (
                    <div key={c.text} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-white/20">
                      <c.icon className={`shrink-0 ${c.color}`} size={20} />
                      <span className="text-sm text-slate-300">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <h3 className="mb-6 flex items-center gap-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <GraduationCap className="text-emerald-400" size={22} /> Education
                </h3>
                <div className="border-l-2 border-cyan-500/50 pl-6">
                  <h4 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Bachelor of Technology — Artificial Intelligence</h4>
                  <p className="mt-1 text-cyan-300">Parul Institute of Engineering & Technology</p>
                  <p className="mt-1 text-sm text-slate-500">July 2023 – May 2027 (Expected)</p>
                  <p className="mt-2 text-sm text-slate-400">Specialization in Machine Learning, Deep Learning, DSA, and AI systems development.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Experience" title="Professional Experience" subtitle="Hands-on experience delivering data-driven solutions." grad="from-cyan-400 to-sky-500" />
          <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:hidden before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-violet-400/40 before:to-transparent md:before:block">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="relative md:pl-10">
                  <span className="absolute left-0 top-3 hidden h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#05060a] shadow-[0_0_12px_rgba(56,189,248,0.8)] md:block" />
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_45px_-12px_rgba(56,189,248,0.5)]">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600"><Briefcase className="text-white" size={18} /></span>
                      <h3 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{exp.role}</h3>
                    </div>
                    <p className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{exp.company}</p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1"><Calendar size={14} className="text-cyan-400" /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} className="text-violet-400" /> {exp.location}</span>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-400" /> {a}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Portfolio" title="Featured Projects" subtitle="Real-world applications across ML, business intelligence, and automation." grad="from-violet-400 to-pink-500" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.05}>
                <motion.div whileHover={{ y: -6 }} className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_0_45px_-12px_rgba(168,85,247,0.5)]">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className={`rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-white`}>{p.category}</span>
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-cyan-300"><ExternalLink size={16} /></a>
                  </div>
                  <h3 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <div className="mt-4 rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-3">
                    <p className="text-xs text-emerald-300">Impact</p>
                    <p className="mt-0.5 text-sm text-emerald-200/90">{p.impact}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span key={m} className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">{m}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {p.technologies.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-slate-400">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-8 py-3 text-white shadow-[0_0_30px_-6px_rgba(168,85,247,0.6)] transition-transform hover:scale-105">
                View All Projects on GitHub <ChevronRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Expertise" title="Technical Skills" subtitle="Python, ML, Power BI, and dashboarding for end-to-end data work." grad="from-emerald-400 to-teal-500" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((group, idx) => (
              <Reveal key={group.cat} delay={(idx % 3) * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <h3 className={`mb-5 bg-gradient-to-r ${group.grad} bg-clip-text text-transparent`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{group.cat}</h3>
                  <div className="space-y-4">
                    {group.items.map((s) => (
                      <div key={s.name}>
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span className="text-slate-300">{s.name}</span>
                          <span className="text-slate-400">{s.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${group.grad}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Milestones" title="Key Achievements" subtitle="Highlights that define my journey so far." grad="from-amber-400 to-orange-500" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <motion.div whileHover={{ y: -6 }} className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${a.grad} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    <a.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{a.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Contact" title="Let's Connect" subtitle="Open to full-time opportunities starting May 2027." grad="from-cyan-400 via-violet-400 to-pink-400" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Mail, title: "Email", sub: LINKS.email, href: LINKS.gmail, grad: "from-cyan-500 to-blue-600" },
              { icon: Linkedin, title: "LinkedIn", sub: "Connect with me", href: LINKS.linkedin, grad: "from-violet-500 to-fuchsia-600" },
              { icon: Github, title: "GitHub", sub: "View my code", href: LINKS.github, grad: "from-pink-500 to-rose-600" },
            ].map((c) => (
              <Reveal key={c.title}>
                <a href={c.href} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-white/20">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.grad} transition-transform group-hover:scale-110`}>
                    <c.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</h3>
                  <p className="mt-1 break-all text-sm text-slate-400">{c.sub}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Uta Harish Kumar · Data-driven solutions · AI-powered innovation.</p>
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 p-3.5 text-white shadow-lg transition-transform hover:scale-110">
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
