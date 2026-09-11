import { useState, useEffect, useRef } from "react";
import heroPhoto from "@/imports/ChatGPT_Image_Sep_8__2026__04_33_05_PM.png";

const NAV_LINKS = ["Home", "About", "Work", "Skills", "Contact"];

const PROJECTS = [
  {
    title: "MZANSI GREENTECH CRM",
    category: "Salesforce Administration",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format",
    desc: "Full Salesforce org setup for a renewable energy company — role hierarchies, custom objects, validation rules, and automated sharing across Sales & Ops.",
  },
  {
    title: "SOLAR FORCE SALES APP",
    category: "Salesforce Flow & Automation",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format",
    desc: "Built a sun-themed Lightning App with lead queues, a real-time Sales Dashboard, and Flow automations that replaced all manual handovers.",
  },
  {
    title: "3D ENVIRONMENTS",
    category: "3D Generalist — Rendermatic",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    desc: "Compositing, photo editing, and 3D colour management work completed during an internship at Cape Town-based studio Rendermatic.",
  },
  {
    title: "ARCHITECTURE & ENVIRONMENTS",
    category: "Freelance — My Africa Sport",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop&auto=format",
    desc: "2D and 3D architectural renditions and environment designs created for multiple teams across My Africa Sport.",
  },
];

const SKILLS = [
  { label: "SALESFORCE ADMINISTRATION", num: "01" },
  { label: "WEB DEVELOPMENT", num: "02" },
  { label: "3D & MOTION GRAPHICS", num: "03" },
  { label: "VIDEO PRODUCTION", num: "04" },
];

const SKILL_TAGS = [
  "Salesforce.com", "CRM Integration", "Salesforce Flow", "Data Management",
  "HTML5", "CSS", "JavaScript", "Vue.js", "Python", "GitHub",
  "Cinema 4D", "Blender", "Adobe After Effects", "Adobe Premiere Pro",
  "Photoshop", "Illustrator", "3D Animation", "Image Compositing",
];

const TESTIMONIALS = [
  {
    name: "Rendermatic Studio",
    role: "3D Generalist Internship, Cape Town",
    quote: "Recognised for exceptional growth, passion, punctuality, and talent. Completed every task with efficiency and excellence, while bringing strong communication and problem-solving to every project.",
  },
  {
    name: "Life Choices Academy",
    role: "Youth Force Project — Salesforce Track",
    quote: "Demonstrated leadership capabilities by taking on project lead roles and guiding the cohort as a primary point of contact. Earned 100+ Trailhead badges alongside Cisco Data Science and Cybersecurity credentials.",
  },
  {
    name: "Oaklands High School",
    role: "Grade 12 Prefect & Class Representative",
    quote: "Featured on national television for exceptional performance in a competitive coding and programming initiative. Hand-selected for advanced artistic development at the Peter Clarke Art Centre.",
  },
];

const BRANDS = ["Salesforce", "Rendermatic", "My Africa Sport", "Life Choices", "ADA", "Peter Clarke Art Centre", "MTN", "Trailhead"];

const ACHIEVEMENTS = [
  { num: "01", name: "SALESFORCE CERTIFIED PLATFORM ADMIN", desc: "Salesforce", year: "Jul 2026" },
  { num: "02", name: "ADOBE CERTIFIED PROFESSIONAL", desc: "Video Design", year: "2022" },
  { num: "03", name: "100+ TRAILHEAD BADGES", desc: "Salesforce", year: "2025–26" },
  { num: "04", name: "IBHABHATHANE BURSARY", desc: "Peter Clarke Art Centre", year: "2017" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openSkill, setOpenSkill] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    work: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    Object.values(sectionRefs).forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-full bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
        <span className="font-display text-lg tracking-widest text-white">LH</span>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className={`text-sm tracking-wider transition-colors ${
                activeSection === link.toLowerCase() ? "text-[#d4f53c]" : "text-white/60 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link.toLowerCase())} className="font-display text-4xl tracking-wider text-white hover:text-[#d4f53c] transition-colors">
              {link}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-end pb-16 pt-28 px-6 md:px-10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end gap-10">
            {/* Left: text */}
            <div className="flex-1">
              <div className="mb-8">
                <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-none uppercase tracking-tight text-white">
                  I'M LOYISO
                </h1>
                <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-none uppercase tracking-tight text-white flex items-center gap-4 flex-wrap">
                  HANS
                  <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d4f53c] text-[#0a0a0a] text-2xl md:text-3xl font-bold">✦</span>
                </h1>
                <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-none uppercase tracking-tight text-white">
                  SALESFORCE
                </h1>
                <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-none uppercase tracking-tight text-white">
                  ADMIN &
                </h1>
                <h1 className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-none uppercase tracking-tight text-[#d4f53c]">
                  DIGITAL CREATIVE
                </h1>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md">
                Salesforce Administrator based in Cape Town — configuring and optimising CRM environments for real businesses, from building role hierarchies to automating workflows with Salesforce Flow. Backed by a creative foundation in 3D, motion, and web development.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center gap-2 text-sm text-white border-b border-white/30 pb-1 hover:text-[#d4f53c] hover:border-[#d4f53c] transition-colors w-fit"
                >
                  Get in touch <span>↗</span>
                </button>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { label: "LINKEDIN", url: "https://www.linkedin.com/in/loyiso-hans" },
                    { label: "ARTSTATION", url: "https://mrrando.artstation.com/" },
                    { label: "YOUTUBE", url: "https://www.youtube.com/@MrRanddo" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs border border-white/20 rounded-full px-4 py-1.5 text-white/50 hover:border-[#d4f53c] hover:text-[#d4f53c] transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: photo */}
            <div className="hidden md:block w-[38%] shrink-0 self-end">
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-white/10">
                <img
                  src={heroPhoto}
                  alt="Loyiso Hans"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-[#f0f0e8] py-14 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <p className="text-[#0a0a0a]/40 text-xs uppercase tracking-widest md:w-32 shrink-0">ABOUT ME</p>
          <div className="flex-1">
            <p className="text-[#0a0a0a] text-sm leading-relaxed max-w-lg mb-8">
              I move fluidly between the technical and the creative — configuring Salesforce CRMs that actually scale, while bringing a background in 3D, motion graphics, and web development to every challenge. Based in Cape Town. Open to on-site, hybrid, or remote.
            </p>
            <div className="flex gap-16 flex-wrap">
              <div>
                <p className="font-display text-4xl text-[#0a0a0a]">100+</p>
                <p className="text-[#0a0a0a]/50 text-xs uppercase tracking-widest mt-1">Trailhead Badges</p>
              </div>
              <div>
                <p className="font-display text-4xl text-[#0a0a0a]">59</p>
                <p className="text-[#0a0a0a]/50 text-xs uppercase tracking-widest mt-1">Skills on LinkedIn</p>
              </div>
              <div>
                <p className="font-display text-4xl text-[#0a0a0a]">4+</p>
                <p className="text-[#0a0a0a]/50 text-xs uppercase tracking-widest mt-1">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH PHOTO */}
      <section id="about" ref={sectionRefs.about} className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img src={heroPhoto} alt="Loyiso Hans — Salesforce Administrator & Digital Creative" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </section>

      {/* BIO + EXPERIENCE */}
      <section className="bg-[#0a0a0a] py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-64 shrink-0">
            <p className="text-white/40 text-xs uppercase tracking-widest">Background</p>
          </div>
          <div className="flex-1">
            <p className="text-white/70 text-base leading-relaxed max-w-lg mb-16">
              My background spans 3D generalist work, motion graphics, video production, and web development — all feeding into my current focus: Salesforce administration. I've applied this on real client work, designing multi-department org structures, automated sharing rules, and lead-routing systems that replace manual handovers with something that actually scales.
            </p>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-10">Experience</p>
            <div className="space-y-0 divide-y divide-white/15">
              {[
                { dates: "Mar 2026 – Present", company: "LC STUDIO", role: "Salesforce Administrator" },
                { dates: "Jan 2024 – May 2024", company: "MY AFRICA SPORT", role: "Freelance 3D Generalist" },
                { dates: "Jan 2023 – Aug 2023", company: "RENDERMATIC", role: "3D Generalist Intern" },
              ].map((job) => (
                <div key={job.company} className="group flex items-center justify-between py-7 flex-wrap gap-2 cursor-default">
                  <span className="text-white/50 text-sm w-40">{job.dates}</span>
                  <span className="font-display text-2xl md:text-3xl tracking-wider flex-1 transition-colors group-hover:text-[#d4f53c]">{job.company}</span>
                  <span className="text-white/60 text-sm text-right transition-colors group-hover:text-[#d4f53c]">{job.role}</span>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-xs uppercase tracking-widest mt-20 mb-10">Education</p>
            <div className="space-y-0 divide-y divide-white/15">
              {[
                { dates: "2025 – 2026", company: "LIFE CHOICES ACADEMY", role: "Salesforce Admin / Web Dev" },
                { dates: "2022 – 2023", company: "ACADEMY OF DIGITAL ARTS", role: "Game & Interactive Media" },
                { dates: "2017 – 2021", company: "PETER CLARKE ART CENTRE", role: "Communication Design" },
                { dates: "2016 – 2021", company: "OAKLANDS HIGH SCHOOL", role: "National Senior Certificate" },
              ].map((ed) => (
                <div key={ed.company} className="group flex items-center justify-between py-7 flex-wrap gap-2 cursor-default">
                  <span className="text-white/50 text-sm w-40">{ed.dates}</span>
                  <span className="font-display text-xl md:text-2xl tracking-wider flex-1 transition-colors group-hover:text-[#d4f53c]">{ed.company}</span>
                  <span className="text-white/60 text-sm text-right transition-colors group-hover:text-[#d4f53c]">{ed.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" ref={sectionRefs.work} className="bg-[#0f0f0f] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">PROJECTS</p>
              <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-none uppercase">
                HELPING ORGANISATIONS<br />SCALE WITH INTENT
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="font-display text-xl md:text-2xl tracking-wider mb-1">{p.title}</p>
                  <p className="text-[#d4f53c] text-xs mb-3">{p.category}</p>
                  <p className="text-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={sectionRefs.skills} className="bg-[#d4f53c] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] uppercase text-[#0a0a0a] mb-12">MY SKILL & SERVICE</h2>
          <div className="divide-y divide-[#0a0a0a]/20">
            {SKILLS.map((s, i) => (
              <div key={s.label}>
                <button
                  className="w-full group flex items-center justify-between py-6 cursor-pointer text-left"
                  onClick={() => setOpenSkill(openSkill === i ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#0a0a0a]/30 font-display text-xl group-hover:text-[#0a0a0a] transition-colors">{openSkill === i ? "−" : "+"}</span>
                    <span className="font-display text-2xl md:text-3xl tracking-wider text-[#0a0a0a] group-hover:translate-x-2 transition-transform">
                      {s.label}
                    </span>
                  </div>
                  <span className="text-[#0a0a0a]/40 font-display text-lg">[{s.num}]</span>
                </button>
                {openSkill === i && (
                  <div className="pb-6 flex flex-wrap gap-2">
                    {SKILL_TAGS.slice(i * 4, i * 4 + 9).map((tag) => (
                      <span key={tag} className="text-xs border border-[#0a0a0a]/30 rounded-full px-3 py-1 text-[#0a0a0a]/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-[#d4f53c] border-t border-[#0a0a0a]/10 py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] uppercase text-[#0a0a0a] mb-10">CERTIFICATIONS & ACHIEVEMENTS</h2>
          <div className="divide-y divide-[#0a0a0a]/20">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.num} className="flex items-center gap-6 py-5 flex-wrap">
                <span className="text-[#0a0a0a]/30 text-xs w-8">{a.num}</span>
                <span className="font-display text-base md:text-xl flex-1 text-[#0a0a0a]">{a.name}</span>
                <span className="text-[#0a0a0a]/50 text-xs hidden md:block">{a.desc}</span>
                <span className="text-[#0a0a0a]/50 text-xs">{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0a0a0a] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-[clamp(1.5rem,5vw,3rem)] uppercase">WHAT THEY SAID</h2>
            <div className="flex gap-3">
              <button
                onClick={() => setTestimonialIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-[#d4f53c] hover:text-[#d4f53c] transition-colors text-sm"
              >←</button>
              <button
                onClick={() => setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length)}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-[#d4f53c] hover:text-[#d4f53c] transition-colors text-sm"
              >→</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`border rounded-sm p-6 transition-all duration-300 ${
                  i === testimonialIndex ? "border-[#d4f53c]/40 bg-white/5" : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#d4f53c]/10 border border-[#d4f53c]/30 flex items-center justify-center text-sm font-display text-[#d4f53c]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-10 overflow-hidden">
        <div className="flex gap-12 items-center" style={{ width: "max-content", animation: "marquee 25s linear infinite" }}>
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="text-white/50 text-sm font-medium whitespace-nowrap hover:text-[#d4f53c] transition-colors cursor-default px-2">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT HEADER */}
      <section id="contact" ref={sectionRefs.contact} className="bg-[#d4f53c] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[clamp(3rem,9vw,7rem)] leading-none uppercase text-[#0a0a0a]">
            LET'S TALK ABOUT<br />YOUR PROJECT
          </h2>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#0a0a0a] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-2xl uppercase mb-10">GET IN TOUCH</h3>
              <div className="space-y-0 divide-y divide-white/10">
                {[
                  { icon: "✉", label: "LoyisoHanss@gmail.com" },
                  { icon: "⊕", label: "Mitchells Plain, Cape Town, ZA" },
                  { icon: "◎", label: "Open to on-site · hybrid · remote" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 py-5">
                    <span className="text-white/30 text-lg w-6">{item.icon}</span>
                    <span className="text-white/70 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-3 flex-wrap">
                {[
                  { label: "LinkedIn", url: "https://www.linkedin.com/in/loyiso-hans" },
                  { label: "ArtStation", url: "https://mrrando.artstation.com/" },
                  { label: "YouTube", url: "https://www.youtube.com/@MrRanddo" },
                  { label: "Portfolio", url: "https://loyisohans.infinityfreeapp.com/" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-white/20 rounded-full px-4 py-1.5 text-white/50 hover:border-[#d4f53c] hover:text-[#d4f53c] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              {(["name", "email", "subject"] as const).map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => setFormData((f) => ({ ...f, [field]: e.target.value }))}
                  className="w-full bg-[#141414] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4f53c] transition-colors"
                  required
                />
              ))}
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                className="w-full bg-[#141414] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d4f53c] transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#d4f53c] text-[#0a0a0a] font-display tracking-widest text-sm py-4 rounded-sm hover:bg-white transition-colors"
              >
                {submitted ? "SENT ✓" : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d4f53c] py-24 px-6 text-center">
        <p className="text-[#0a0a0a]/50 text-xs uppercase tracking-widest mb-4">Have a project in mind?</p>
        <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none uppercase text-[#0a0a0a] mb-10">
          LET'S WORK TOGETHER
        </h2>
        <button
          onClick={() => scrollTo("contact")}
          className="border border-[#0a0a0a] text-[#0a0a0a] font-display text-xs tracking-widest px-8 py-3 rounded-full hover:bg-[#0a0a0a] hover:text-[#d4f53c] transition-colors"
        >
          GET IN TOUCH
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#d4f53c] border-t border-[#0a0a0a]/10 py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <p className="text-[#0a0a0a] font-display text-lg tracking-widest mb-1">LOYISO HANS</p>
            <p className="text-[#0a0a0a]/40 text-xs">
              Salesforce Administrator & Digital Creative<br />
              Cape Town, South Africa · © {new Date().getFullYear()}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2">
            {["Home", "About", "Work", "Skills", "Contact"].map((l) => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="text-[#0a0a0a]/50 text-xs hover:text-[#0a0a0a] transition-colors text-left">
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
