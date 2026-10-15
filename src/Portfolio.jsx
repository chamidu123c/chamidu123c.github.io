import { useState } from "react";

const profile = {
  name: "Chamidu Manthilaka",
  role: "Information Technology undergraduate",
  photo: "/Myphoto.png", // put Myphoto.png in your /public folder
  email: "chamidumanthilaka888@gmail.com",
  phone: "+94 77 260 2637",
  github: "https://github.com/chamidu123c",
  linkedin: "https://linkedin.com/in/chamidu-manthilaka-0497a7249",
  summary:
    "Enthusiastic IT undergraduate with strong skills in Java, programming and problem solving, and hands-on experience building web applications through academic projects. I'm seeking a software engineering internship to apply my skills and contribute to innovative projects.",
};

const skillGroups = [
  { icon: "code", title: "Languages", items: ["Java", "JavaScript", "C", "C++", "PHP", "HTML5", "CSS3"] },
  { icon: "layout", title: "Frontend", items: ["React", "Next.js", "React Native"] },
  { icon: "server", title: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "JSP & Servlets"] },
  { icon: "database", title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { icon: "wrench", title: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "Microsoft 365"] },
  {
    icon: "user",
    title: "Soft skills",
    accent: true,
    items: ["Problem solving", "Analytical thinking", "Teamwork", "Time management", "Attention to detail", "Continuous learning"],
  },
];

const projects = [
  {
    icon: "leaf",
    name: "AgroLanka",
    type: "Agriculture management system for web and mobile",
    stack: ["MongoDB", "Express.js", "React.js", "React Native", "Node.js", "JavaScript", "REST APIs", "Git", "AI"],
    points: [
      "Developed a full-stack agriculture management system with web and mobile apps using the MERN stack and React Native.",
      "Implemented secure user authentication, RESTful APIs and complete CRUD operations for farmers, crops, products and related records.",
      "Integrated an AI-powered crop identifier that lets users identify crops from images, improving accuracy and convenience.",
      "Connected MongoDB with the frontend and backend using asynchronous API requests for efficient data management.",
      "Built an interactive dashboard with reusable React components, form validation and error handling.",
      "Used Git and GitHub for version control, testing, debugging and collaborative development.",
    ],
  },
  {
    icon: "map",
    name: "Online Tour Guide System",
    type: "Tour booking and management system",
    stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat", "MVC"],
    points: [
      "Developed a full-stack tour booking and management system with role-based dashboards for Admin, Tourist, Guide and Transport Manager.",
      "Implemented secure user authentication, role-based authorization and CRUD operations for tours, bookings, users, guides and transport management.",
      "Applied OOP principles and core Java concepts, including exception handling and the Collections Framework, to build a modular and maintainable application.",
      "Followed the MVC architecture to separate presentation, business logic and data access layers.",
      "Integrated MySQL using JDBC for efficient data management and deployed the application on Apache Tomcat.",
    ],
  },
  {
    icon: "heart",
    name: "WellnessPath",
    type: "Wellness management web system",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    points: [
      "Developed a web-based wellness management system with a customer dashboard, authentication pages, profile management and password recovery features.",
    ],
  },
];

const education = [
  {
    title: "B.Sc. (Hons) in Information Technology",
    place: "Sri Lanka Institute of Information Technology (SLIIT), Kandy",
    date: "Jun 2023 to Jun 2027",
    note: "Currently studying",
  },
  {
    title: "G.C.E. Advanced Level",
    place: "Vidyartha College, Kandy, Sri Lanka",
    date: "2023",
    note: "Accounting (B), Economics (B), Business Studies (C)",
  },
  {
    title: "G.C.E. Ordinary Level",
    place: "Vidyartha College, Kandy, Sri Lanka",
    date: "2019",
    note: "Mathematics (B), English (B)",
  },
];

const navLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

/* ------------------------------------------------------------------ */
/*  Icons: inline SVG (Lucide style), so no extra package is needed.   */
/* ------------------------------------------------------------------ */

const icons = {
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  layout: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  server: (
    <>
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  user: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  map: (
    <>
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  cap: (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  plus: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2745FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7F9]";

function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-10 flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2745FF] text-white">
            <Icon name={icon} />
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Pill({ children, tone = "light" }) {
  const styles =
    tone === "accent"
      ? "bg-[#2745FF]/10 text-[#1B33C9]"
      : "bg-white text-slate-700 ring-1 ring-slate-200";
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${styles}`}>
      {children}
    </span>
  );
}

function Project({ project, open, onToggle }) {
  return (
    <article className="border-t border-slate-200 py-7 first:border-t-0 sm:py-8">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`group flex w-full items-start justify-between gap-5 rounded-lg text-left ${focusRing}`}
      >
        <span className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#2745FF] ring-1 ring-slate-200">
            <Icon name={project.icon} className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-xl font-semibold text-slate-900 sm:text-2xl">
              {project.name}
            </span>
            <span className="mt-1 block text-slate-600">{project.type}</span>
          </span>
        </span>
        <span
          className={`mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 motion-reduce:transition-none ${
            open
              ? "rotate-45 bg-[#2745FF] text-white"
              : "bg-white text-slate-700 ring-1 ring-slate-200 group-hover:ring-slate-400"
          }`}
        >
          <Icon name="plus" className="h-5 w-5" />
        </span>
      </button>

      <div className="mt-4 flex flex-wrap gap-2 sm:pl-16">
        {project.stack.map((t) => (
          <Pill key={t} tone="accent">
            {t}
          </Pill>
        ))}
      </div>

      {open && (
        <ul className="mt-6 max-w-2xl space-y-3 text-[15px] leading-relaxed text-slate-700 sm:pl-16">
          {project.points.map((p) => (
            <li key={p} className="flex gap-3">
              <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-[#2745FF]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function ContactLink({ icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/15 transition hover:bg-white/10 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900">
        <Icon name={icon} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-slate-400">{label}</span>
        <span className="block truncate font-semibold">{value}</span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [openProject, setOpenProject] = useState(0);

  return (
    <div
      className="min-h-screen bg-[#F6F7F9] text-slate-800 antialiased"
      style={{
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#F6F7F9]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className={`rounded font-semibold tracking-tight text-slate-900 ${focusRing}`}
          >
            {profile.name}
          </a>
          <ul className="hidden gap-7 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className={`rounded transition-colors hover:text-slate-900 ${focusRing}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className={`inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2745FF] ${focusRing}`}
          >
            <Icon name="mail" className="h-4 w-4" />
            Email me
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-12 pt-14 sm:px-8 sm:pt-20 md:grid-cols-[1.25fr_1fr] md:pb-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Seeking a software engineering internship
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-[#2745FF] sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 rounded-full bg-[#2745FF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1B33C9] ${focusRing}`}
              >
                <Icon name="code" className="h-5 w-5" />
                View projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-300 transition hover:ring-slate-500 ${focusRing}`}
              >
                <Icon name="github" className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-300 transition hover:ring-slate-500 ${focusRing}`}
              >
                <Icon name="linkedin" className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-[#2745FF]"
              aria-hidden="true"
            />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
            />
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About me" icon="user">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                I'm an Information Technology undergraduate at SLIIT with strong
                skills in Java, programming and problem solving. Through my
                academic projects I've built web applications, from a tour
                booking system in Java to a full-stack agriculture app with an
                AI-powered crop identifier.
              </p>
              <p>
                I'm passionate about emerging technologies and I'm looking for a
                software engineering internship where I can apply my technical
                skills, gain practical experience and contribute to innovative
                projects.
              </p>
            </div>
            <dl className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              {[
                ["cap", "Studying", "B.Sc. (Hons) in Information Technology, SLIIT"],
                ["pin", "Campus", "Kandy, Sri Lanka"],
                ["globe", "Languages", "Sinhala (native), English (intermediate)"],
                ["award", "Certificate", "English course (6 months), National Institute of Co-operative Development"],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2745FF]/10 text-[#2745FF]">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-sm text-slate-500">{label}</dt>
                    <dd className="mt-0.5 font-semibold text-slate-900">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon="wrench">
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"
              >
                <h3 className="mb-4 flex items-center gap-3 font-semibold text-slate-900">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2745FF]/10 text-[#2745FF]">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[#F6F7F9] px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon="code">
          <div>
            {projects.map((p, i) => (
              <Project
                key={p.name}
                project={p}
                open={openProject === i}
                onToggle={() => setOpenProject(openProject === i ? -1 : i)}
              />
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon="cap">
          <ol className="relative ml-5 border-l-2 border-slate-200">
            {education.map((e) => (
              <li key={e.title} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2745FF] text-white ring-4 ring-[#F6F7F9]">
                  <Icon name="cap" className="h-3 w-3" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{e.title}</h3>
                {e.place && <p className="text-slate-600">{e.place}</p>}
                {e.date && <p className="mt-0.5 text-sm text-slate-500">{e.date}</p>}
                {e.note && <p className="mt-1 text-sm text-slate-700">{e.note}</p>}
              </li>
            ))}
          </ol>
        </Section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 px-5 pb-16 pt-8 sm:px-8 sm:pb-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-900 px-7 py-14 text-white sm:px-14 sm:py-20">
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let's build something together.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-slate-300">
              I'm looking for a software engineering internship. Send me a message
              and I'll reply as soon as I can.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <ContactLink icon="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactLink icon="phone" label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactLink icon="github" label="GitHub" value="github.com/chamidu123c" href={profile.github} external />
              <ContactLink icon="linkedin" label="LinkedIn" value="chamidu-manthilaka" href={profile.linkedin} external />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
