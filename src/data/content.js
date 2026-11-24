export const profile = {
  name: "Harshad Santosh Shinde",
  shortName: "Harshad Shinde",
  role: "Software Engineer",
  role2: "Full Stack Developer",
  tagline:
    "I build fast, accessible web products across the stack — React, Angular, Node.js and the MERN ecosystem.",
  location: "Pune, Maharashtra, India",
  email: "harshads1433@gmail.com",
  phone: "8623828852",
  resume: "/Harshad_Shinde_Resume.pdf",
  portfolio: "https://harshad-portfolio-1433.vercel.app/",
  startDate: "2025-01-01",
  socials: [
    { label: "GitHub", href: "https://github.com/Harshadsshinde" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harshad-shinde-359488353/",
    },
  ],
};

export const navItems = [
  { label: "Home", to: "/", hash: "#intro" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const sections = [
  { id: "intro", index: "01", label: "Intro" },
  { id: "who", index: "02", label: "About" },
  { id: "what", index: "03", label: "What I do" },
  { id: "philosophy", index: "04", label: "Approach" },
  { id: "ecosystem", index: "05", label: "Skills" },
  { id: "work", index: "06", label: "Work" },
  { id: "experience", index: "07", label: "Experience" },
  { id: "focus", index: "08", label: "Focus" },
  { id: "why", index: "09", label: "Values" },
  { id: "talk", index: "10", label: "Contact" },
];

export const services = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    blurb: "Fast, accessible, pixel-precise interfaces.",
    body: "React and Angular with TypeScript and Tailwind — component architecture, state management and responsive UI systems. I care about layout integrity, semantic markup and smooth 60fps interactions.",
    stack: [
      "React.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "PrimeNG",
      "Next.js",
    ],
  },
  {
    id: "fullstack",
    title: "Backend & APIs",
    blurb: "APIs, auth and data that hold up.",
    body: "Node, Express and MongoDB or PostgreSQL with JWT auth and Socket.IO for real-time features. I model data, design REST endpoints and ship features that survive real usage.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "JWT",
    ],
  },
  {
    id: "interactive",
    title: "Motion & 3D",
    blurb: "Interfaces that feel alive.",
    body: "Framer Motion and GSAP for interface animation, plus Three.js / WebGL for immersive product moments — used as focal points, never as decoration for its own sake.",
    stack: ["Framer Motion", "GSAP", "Three.js", "WebGL", "Canvas 2D"],
  },
];

export const philosophy = [
  { n: "01", title: "Design is engineering", body: "Good interfaces are a systems problem — spacing, hierarchy and state, solved deliberately." },
  { n: "02", title: "Performance is a feature", body: "Every millisecond of jank is a bug. I budget for it from the first component." },
  { n: "03", title: "Motion with intent", body: "Animation should explain, guide or reward — never just fill silence." },
  { n: "04", title: "Clarity over cleverness", body: "Readable code and obvious UX beat clever tricks every single time." },
  { n: "05", title: "Ship, measure, refine", body: "Working software in front of people beats a perfect plan in my head." },
];

export const skillTiers = [
  {
    title: "Core",
    note: "Daily drivers, shipped to production",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    title: "Comfortable",
    note: "Production experience, still sharpening",
    items: ["Angular", "Next.js", "PostgreSQL", "PrimeNG", "Framer Motion", "Git"],
  },
  {
    title: "Familiar",
    note: "Working knowledge and side projects",
    items: ["Three.js", "WebGL", "GSAP", "Figma", "Cloudinary", "Vercel"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Angular",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "PrimeNG",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Design & Integration"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    title: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Cloudinary",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
];

export const marqueeTech = [
  "React.js",
  "Angular",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "PrimeNG",
  "Framer Motion",
  "REST APIs",
];

export const experience = [
  {
    period: "Aug 2025 — Present",
    role: "Software Engineer",
    roleNote: "Intern → Full-time",
    org: "ADnA Intelligence Pvt. Ltd. · Pune",
    body: "Joined ADnA as a Software Engineer Intern and converted to full-time, building and maintaining production enterprise applications — School Management ERP, CodeBid and NGO ERP — across multiple business and operational modules.",
    points: [
      "Develop and enhance features across Angular and React.js with TypeScript, JavaScript and PrimeNG.",
      "Built core NGO ERP functionality spanning Task Management, Dashboards, Reports, Notifications and User Management.",
      "Engineered task workflows for assignment, execution tracking, status updates and approval processing through integrated APIs.",
      "Integrated frontend modules with backend services, debugged data/API flows and delivered tested enhancements within sprint cycles.",
    ],
  },
  {
    period: "Jun 2025 — Jul 2025",
    role: "Software Engineer Intern",
    org: "Anvistar ITS Pvt. Ltd. · Pune",
    body: "Developed web application features using React.js, Node.js and MongoDB, supporting frontend functionality and backend integration.",
    points: [
      "Integrated REST APIs and supported feature testing and debugging.",
      "Contributed to sprint-based application delivery.",
    ],
  },
  {
    period: "Jan 2025 — Feb 2025",
    role: "Web Developer Intern",
    org: "OPRA IT Solution · Pune",
    body: "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, Express.js and MongoDB in a production environment.",
    points: [
      "Built and integrated REST APIs and responsive, accessible interfaces with Tailwind CSS.",
      "Deployed applications to live servers and applied performance optimization and SEO practices.",
    ],
  },
];

export const education = [
  {
    period: "Graduated 2026",
    degree: "B.Tech — Computer Engineering",
    school: "Dr. D.Y. Patil Pratishthan College of Engineering, Kolhapur",
    detail: "CGPA 7.0 / 10",
  },
];

export const currentFocus = [
  { label: "Building", value: "Enterprise ERP modules and internal tools with Angular, React and TypeScript." },
  { label: "Learning", value: "Advanced TypeScript, system design and PostgreSQL." },
  { label: "Exploring", value: "Motion, WebGL and performant 3D on the web." },
];

export const whyMe = [
  { title: "Ownership", body: "I follow a feature from ticket to tested, deployed and maintainable — no loose ends." },
  { title: "Detail-oriented", body: "I care about edge cases, accessibility and the small things users actually feel." },
  { title: "Fast learner", body: "Angular, PrimeNG and PostgreSQL were all picked up on the job and shipped to production." },
  { title: "Collaborative", body: "I work well in sprint teams — clear updates, code reviews and shared ownership." },
];
