export const personalInfo = {
  name: "Muhammad Ubaidullah",
  title: "Software Engineer • AI/ML Engineer • Backend & AI Automation Engineer",
  shortBio: "I build intelligent software systems by combining backend engineering, artificial intelligence, automation, and modern web technologies.",
  email: "ubaidullahishtiaque11@gmail.com",
  github: "https://github.com/Ubaidullah28",
  linkedin: "https://www.linkedin.com/in/mubaidullah28",
  resume: "https://drive.google.com/file/d/1z-Q8eHZL0JDs2QiO99wBzpBsO46Pd66a/view?usp=sharing",
  portfolioUrl: "https://ubaidullah28.github.io", // Configurable production URL
  aboutNarrative: "I am a Computer Science professional with internship experience in Data Engineering and hands-on expertise in backend development, computer vision, blockchain, AI-powered systems, and workflow automation. I enjoy building systems that combine software engineering with AI and automation to solve real-world problems.",
  rotatingRoles: [
    "Building Intelligent Software Systems",
    "AI / ML / LLM Applications",
    "Backend & API Engineering",
    "AI Automation & Workflow Engineering",
    "Turning Ideas Into Production-Ready Systems"
  ]
};

export const focusCards = [
  {
    id: "ai-ml",
    title: "AI / ML & LLMs",
    subtitle: "Building intelligent applications",
    tech: "Groq LLMs • PyTorch • Computer Vision • NLP",
    icon: "Brain",
    accent: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    id: "backend",
    title: "Backend Engineering",
    subtitle: "Robust, high-throughput architectures",
    tech: "FastAPI • Django • REST APIs • Node.js • .NET",
    icon: "Server",
    accent: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "automation",
    title: "AI Automation",
    subtitle: "Orchestrated end-to-end pipelines",
    tech: "n8n • Selenium • BeautifulSoup • Webhooks",
    icon: "Cpu",
    accent: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: "data",
    title: "Data Engineering",
    subtitle: "Multi-layered structured pipelines",
    tech: "ETL • PostgreSQL • MySQL • MongoDB",
    icon: "Database",
    accent: "from-emerald-500/20 to-cyan-500/20",
    border: "group-hover:border-emerald-500/50"
  }
];

export const engineeringApproach = [
  {
    step: "01",
    title: "Understand",
    description: "Deeply understand the problem domain, users, data structures, edge cases, and hardware/computational constraints before writing code.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Engineer",
    description: "Design clean, scalable software architectures, type-safe APIs, relational schemas, and deterministic data transformation workflows.",
    icon: "Layers"
  },
  {
    step: "03",
    title: "Integrate AI",
    description: "Apply Machine Learning, Computer Vision, and LLM reasoning strictly where they add demonstrable value, efficiency, and intelligence.",
    icon: "Sparkles"
  },
  {
    step: "04",
    title: "Automate & Deploy",
    description: "Connect disparate systems with n8n/Selenium pipelines, automate repetitive operations, test rigorously, and deploy for production reliability.",
    icon: "Rocket"
  }
];

export const experiences = [
  {
    id: "axiom-world",
    role: "Data Engineer Intern",
    company: "Axiom World",
    location: "Onsite",
    period: "June 2025 – August 2025",
    type: "Internship",
    highlights: [
      "Automated data collection workflows using n8n and Selenium, reducing manual processing across multiple datasets.",
      "Designed ETL pipelines and managed structured datasets across raw, silver, gold, and production layers.",
      "Integrated machine learning outputs with Django-based backend services through APIs for real-time data availability.",
      "Optimized backend APIs and PostgreSQL operations to improve application performance and data flow."
    ],
    tech: ["n8n", "Selenium", "Python", "ETL", "Django", "PostgreSQL", "REST APIs", "Data Pipelines"]
  }
];

export const projects = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    isFlagship: true,
    category: "AI / ML",
    allCategories: ["AI / ML", "Backend", "Full Stack"],
    description: "An AI-powered resume analysis platform that evaluates resumes against job descriptions and generates actionable recommendations for improving ATS compatibility.",
    longDescription: "A full-stack, enterprise-grade AI evaluation platform designed to bridge candidate credentials with modern Applicant Tracking Systems (ATS). It extracts structural text, analyzes semantic alignment using Groq-accelerated LLMs, computes ATS compatibility scores, detects missing skills, and suggests targeted resume improvements with persistent history tracking.",
    liveDemo: "https://ai-resume-analyzer-taupe-one.vercel.app/",
    github: "https://github.com/Ubaidullah28/AI-Resume-Analyzer",
    techStack: ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "Groq AI", "LLMs", "Tailwind CSS"],
    flowPipeline: [
      "Resume PDF/Doc",
      "Text Parser",
      "Job Description",
      "Groq LLM Engine",
      "ATS Match Score",
      "Skill Gap Analysis",
      "Actionable Recommendations"
    ],
    features: [
      "Resume parsing & extraction",
      "Job description alignment analysis",
      "Deterministic ATS compatibility score",
      "Keyword & domain match calculation",
      "Missing critical skills detection",
      "Groq-accelerated ultra-fast LLM inference",
      "Actionable step-by-step resume improvement tips",
      "Persistent historical analysis data in PostgreSQL",
      "Modular FastAPI backend architecture",
      "Reactive modern Vite + React interface"
    ]
  },
  {
    id: "face-recognition-system",
    title: "Face Recognition System for Low-Resource Devices",
    subtitle: "A Comparative Analysis of State-of-the-Art Face Recognition Models",
    isFlagship: false,
    category: "Computer Vision",
    allCategories: ["Computer Vision", "AI / ML", "Backend"],
    description: "A comprehensive performance analysis and practical implementation of state-of-the-art face recognition models with a focus on accuracy, computational efficiency, and low-resource inference.",
    projectPage: "https://ubaidullah28.github.io/fyp_links_page/",
    github: "https://ubaidullah28.github.io/fyp_links_page/", // primary link
    techStack: ["Python", "Django", "OpenCV", "InsightFace", "ArcFace", "RetinaFace", "ONNX Runtime", "PostgreSQL"],
    features: [
      "Evaluated five state-of-the-art face recognition models on the SCFace dataset",
      "Selected ArcFace based on superior accuracy and CPU efficiency",
      "Built unified desktop and web-based attendance system",
      "Implemented high-precision RetinaFace detection pipeline",
      "ArcFace deep embeddings with cosine similarity metric",
      "ONNX Runtime optimization for low-resource hardware execution",
      "PostgreSQL integration for real-time logs and user identities",
      "Email and NTFY push alert integrations for unknown-face detection",
      "DroidCam integration for live video stream monitoring",
      "Automated attendance recording and security anomaly reporting"
    ]
  },
  {
    id: "upwork-automation",
    title: "Upwork Lead Scraping & Automated Application Pipeline",
    subtitle: "End-to-End Automation & Webhook Workflow System",
    isFlagship: false,
    category: "Automation",
    allCategories: ["Automation", "Backend"],
    description: "An automated lead generation and proposal dispatch system that scrapes Upwork job listings using Selenium, extracts high-intent criteria with BeautifulSoup, and routes qualified leads through n8n workflows.",
    github: "https://github.com/Ubaidullah28/Upwork-Scraping-selenuim.git",
    techStack: ["Python", "Selenium", "n8n", "BeautifulSoup", "REST APIs", "Webhooks", "JSON Pipeline"],
    flowPipeline: [
      "Upwork Feed",
      "Selenium Scraper",
      "BS4 Parser",
      "n8n Workflow Engine",
      "Lead Qualification Filter",
      "Automated Apply Trigger"
    ],
    features: [
      "Automated Upwork job query harvesting with headless Selenium",
      "Dynamic HTML cleaning and content extraction via BeautifulSoup",
      "n8n webhook triggers and conditional logic routing",
      "Automated client spend, rating, and verification filtering",
      "Instant notification dispatch and proposal generation triggers",
      "Robust error handling, rate limiting, and session persistence"
    ]
  },
  {
    id: "blockchain-donation-aml",
    title: "Blockchain-Based Donation System with AML Monitoring",
    isFlagship: false,
    category: "Blockchain",
    allCategories: ["Blockchain", "Backend", "Full Stack"],
    description: "A blockchain-powered donation platform designed around transparent, immutable transactions with an AML monitoring module for identifying suspicious activity.",
    github: "https://github.com/Ubaidullah28/donation-anti-money-laundering-blockchain",
    techStack: ["Django", "Solidity", "Ethereum", "Web3.py", "Hardhat", "MetaMask"],
    flowPipeline: [
      "Donor Wallet",
      "Solidity Contract",
      "Ethereum Network",
      "Web3.py Ingestion",
      "AML Rule Engine",
      "Admin Audit Review"
    ],
    features: [
      "Solidity smart contracts for tamper-proof donation distribution",
      "MetaMask crypto wallet authentication and Web3.py backend integration",
      "Real-time Anti-Money Laundering (AML) monitoring and anomaly detection",
      "Automated suspicious transaction velocity & threshold flagging",
      "Immutable public transaction ledger with cryptographic proof",
      "Comprehensive Django admin transaction review and compliance dashboard"
    ]
  },
  {
    id: "speech-transcriber",
    title: "Speech Transcriber & Translator",
    isFlagship: false,
    category: "AI / ML",
    allCategories: ["AI / ML", "Systems"],
    description: "A desktop application for transcribing live or uploaded audio using OpenAI Whisper and translating the resulting text into multiple languages.",
    github: "https://github.com/Ubaidullah28/Transcriber-and-Translator",
    techStack: ["Python", "OpenAI Whisper", "Google Translate API", "Tkinter", "PyAudio"],
    features: [
      "High-accuracy local audio transcription powered by OpenAI Whisper",
      "Multilingual translation integration using Google Translate API",
      "Dual input modes: live microphone streaming and uploaded audio files (WAV, MP3)",
      "Lightweight, responsive native desktop graphical user interface (GUI)",
      "Instant export of transcription and translation transcripts"
    ]
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Full-Stack Platform Clone",
    isFlagship: false,
    category: "Full Stack",
    allCategories: ["Full Stack", "Backend"],
    description: "A full-stack Airbnb-inspired web application featuring authentication, listings, booking management, and role-based functionality.",
    github: "https://github.com/Ubaidullah28/airbnb",
    techStack: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Full MERN stack architecture with RESTful API endpoints",
      "Secure JWT token authentication and role-based permissions",
      "Interactive property listing creation, image uploads, and search filters",
      "Real-time reservation booking system and user itinerary dashboard",
      "Optimized MongoDB data schemas for high read/write performance"
    ]
  },
  {
    id: "cpp-compiler",
    title: "C++ Compiler From Scratch",
    isFlagship: false,
    isCollaborative: true,
    collaboratorNote: "Collaborative contribution to HarisMajeed05/Cpp-Compiler-From-Scratch",
    category: "Systems",
    allCategories: ["Systems"],
    description: "A toy compiler implemented from scratch in C++ to explore compiler architecture, lexical analysis, parsing, syntax validation, semantic checks, and error detection.",
    github: "https://github.com/HarisMajeed05/Cpp-Compiler-From-Scratch",
    techStack: ["C++", "Compiler Architecture", "Lexical Analysis", "Recursive Descent Parsing"],
    features: [
      "Custom lexical analyzer generating distinct token streams",
      "Recursive-descent syntactic parser enforcing formal grammar rules",
      "Type checking, symbol table management, and semantic validation",
      "Custom grammar definition with clear operator precedence",
      "Granular line-by-line syntax error detection and compiler diagnostics"
    ]
  }
];

export const automationArchitecture = {
  title: "AI Automation & Workflow Engineering",
  subtitle: "Connecting data collection, APIs, AI models, business logic, and downstream systems into resilient autonomous pipelines.",
  steps: [
    {
      id: "sources",
      label: "Web & Data Sources",
      description: "Target job boards, external APIs, unstructured documents, and web services.",
      tools: ["Selenium", "BeautifulSoup", "HTTP Webhooks"],
      icon: "Globe"
    },
    {
      id: "ingestion",
      label: "Ingestion & Preprocessing",
      description: "Automated browser drivers navigate, bypass challenges, and extract raw payloads into clean JSON/tabular data.",
      tools: ["Python", "Pandas", "JSON Schemas"],
      icon: "Cpu"
    },
    {
      id: "orchestration",
      label: "n8n Workflow Engine",
      description: "Trigger-based multi-step branching, error fallbacks, and conditional webhook routing.",
      tools: ["n8n", "REST APIs", "Node Triggers"],
      icon: "GitFork"
    },
    {
      id: "ai-inference",
      label: "AI / LLM Intelligence",
      description: "LLM semantic evaluation, prompt chaining, intent classification, and structured scoring.",
      tools: ["Groq AI", "OpenAI APIs", "ArcFace/ONNX"],
      icon: "Sparkles"
    },
    {
      id: "backend-dispatch",
      label: "FastAPI / Backend Dispatch",
      description: "Structured storage into PostgreSQL, real-time alert dispatch, and downstream execution.",
      tools: ["FastAPI", "Django", "PostgreSQL", "NTFY"],
      icon: "Database"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["Python", "C++", "C", "C#", "JavaScript", "HTML/CSS", "XML"]
  },
  {
    category: "AI / ML & LLMs",
    icon: "Brain",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLM Applications", "Generative AI", "AI Automation"]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: ["FastAPI", "Django", "Node.js", "REST APIs", ".NET", "Microservices"]
  },
  {
    category: "Automation & Scraping",
    icon: "Zap",
    skills: ["n8n", "Selenium", "BeautifulSoup", "Workflow Automation", "Webhooks"]
  },
  {
    category: "Data & Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "NocoDB", "ETL Pipelines", "Data Ingestion"]
  },
  {
    category: "AI / CV Libraries",
    icon: "Layers",
    skills: ["OpenCV", "InsightFace", "PyTorch", "ONNX Runtime", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design"]
  },
  {
    category: "DevOps & Tools",
    icon: "Terminal",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Visual Studio", "Jupyter"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Information Technology University (ITU)",
    location: "Lahore, Pakistan",
    period: "2022 – 2026",
    status: "In Progress / Final Year",
    details: "Focusing on Software Engineering, Artificial Intelligence, Computer Vision, Distributed Systems, and Database Architectures.",
    highlights: ["Data Structures & Algorithms", "Artificial Intelligence", "Computer Vision", "Database Systems", "Compiler Construction"]
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab Group of Colleges",
    location: "Lahore, Pakistan",
    period: "2020 – 2022",
    status: "Completed",
    details: "Foundational coursework in Advanced Mathematics, Physics, and Analytical Problem Solving.",
    highlights: ["Mathematics", "Physics", "Chemistry"]
  }
];

