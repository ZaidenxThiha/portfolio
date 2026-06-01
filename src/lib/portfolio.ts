/** Structured portfolio content for Thiha Aung, sourced from CV. */

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  meta?: string;
  points: string[];
  tags?: string[];
  repo?: string;
  demo?: string;
}

export interface SkillRating {
  name: string;
  level: number; // 1–5, from CV star ratings
}

export const ABOUT = {
  name: "Thiha Aung",
  role: "AI Engineer & Data Analyst",
  status: "Final-year Computer Science student",
  location: "Ho Chi Minh City, Vietnam",
  summary:
    "Final-year Computer Science student at Ton Duc Thang University and an aspiring AI Engineer & Data Analyst based in Ho Chi Minh City. I started out as a Technical Engineer — diagnosing hardware, software, and network issues and keeping systems running with minimal downtime — and in 2026 I built two POS financial systems for Thazin & Cherry English Centre and EDUbridge Private School. I’m now channeling that problem-solving mindset into machine learning, data analysis, and AI-powered tools.",
};

export const EDUCATION: TimelineItem[] = [
  {
    title: "BSc, Computer Science",
    org: "Ton Duc Thang University, Ho Chi Minh City",
    period: "Sept 2023 – Present",
    points: ["Final year, focused on AI, data analysis, and software engineering."],
  },
  {
    title: "BE, Electronics (5th year)",
    org: "Technological University, Kyaukse",
    period: "Dec 2014 – Dec 2019",
    points: [
      "Capstone: Elevator Control System — PLC programming for floor selection and safety features.",
    ],
  },
  {
    title: "Matriculation",
    org: "No.8 Basic Education High School, Mandalay",
    period: "",
    points: [],
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Software Developer — POS Financial Systems",
    org: "Thazin & Cherry English Centre · EDUbridge Private School",
    period: "2026 – Present",
    points: [
      "Designed and built two POS financial systems — one for each school — to manage payments, billing, and financial records.",
      "Tailored each system to the institution’s workflow, streamlining day-to-day financial operations.",
    ],
  },
  {
    title: "IT Support",
    org: "FPT IS Vietnam",
    period: "Apr 2025 – Jun 2025",
    points: ["Provided technical support and troubleshooting across systems and end-users."],
  },
  {
    title: "Technical Engineer",
    org: "Thazin & Cherry English Training Centre, Mandalay",
    period: "Jan 2020 – Jan 2023",
    points: [
      "Diagnosed and resolved hardware, software, and connectivity issues, minimizing downtime.",
      "Enhanced network infrastructure for reliable, day-to-day educational operations.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Student Dropout Prediction & Alert System",
    meta: "Educational Data Mining · ML",
    tags: ["Python", "scikit-learn", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    repo: "https://github.com/ZaidenxThiha/Student-Dropout-Prediction-and-Alert-System",
    points: [
      "Early-warning dashboard combining two ML models — academic pass/fail (Random Forest on UCI Student Performance) and dropout risk (XGBoost on OULA engagement data).",
      "Generates SHAP-based explanations for every prediction and produces parent-facing alert notifications.",
      "Interactive Streamlit dashboard with KPIs, ROC/threshold tuning, and a what-if simulator.",
    ],
  },
  {
    title: "POS & School Management System — Thazin & Cherry",
    meta: "2026 · Next.js · Supabase",
    tags: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Python (ETL)"],
    repo: "https://github.com/ZaidenxThiha/tc-school-mgmt",
    demo: "https://tncengcenter.vercel.app",
    points: [
      "Full internal admin system for an ESL school — students, enrolment, billing & payments, scheduling, payroll, attendance, inventory, and events.",
      "Monthly and on-demand invoice generation with a Postgres trigger that auto-reconciles invoice status when payments are recorded; CSV export and bulk actions.",
      "Role-based access (owner / admin / accounts / readonly) enforced with Supabase Auth and Row-Level-Security policies.",
    ],
  },
  {
    title: "POS Financial System — EDUbridge",
    meta: "2026 · School finance",
    points: [
      "Tailored POS finance system for EDUbridge Private School, streamlining fee collection and record-keeping.",
    ],
  },
  {
    title: "Elevator Control System",
    meta: "Technological University · PLC",
    points: [
      "Programmed and tested a PLC managing floor selection and safety features.",
      "Collaborated in a team to integrate and optimize the system for reliable performance.",
    ],
  },
];

/** Core skills with the exact star ratings from the CV. */
export const CORE_SKILLS: SkillRating[] = [
  { name: "Computer Skills", level: 5 },
  { name: "Troubleshooting", level: 4 },
  { name: "Communication", level: 4 },
  { name: "Leadership", level: 4 },
  { name: "Programming", level: 3 },
  { name: "Networking", level: 3 },
];

/** AI & Data focus areas (presented as tags). */
export const FOCUS_SKILLS: string[] = [
  "Python",
  "Data Analysis",
  "Machine Learning",
  "SQL",
  "Data Visualization",
  "LLM Tools",
];

export const FUN: string[] = [
  "Tinkering with hardware and electronics 🔧",
  "Exploring Ho Chi Minh City on two wheels 🛵",
  "Turning random datasets into charts for fun 📊",
  "Always picking up a new tool or language 📚",
];
