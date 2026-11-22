export const profile = {
  name: "Umang Patel",
  role: "Software Engineer",
  location: "Los Angeles, CA",
  email: "umang.patel.tech@gmail.com",
  github: "https://github.com/theumang100",
  githubHandle: "theumang100",
  linkedin: "https://www.linkedin.com/in/umangpatel100/",
  x: "https://x.com/oomangpatel",
  xHandle: "@oomangpatel",
  site: "https://umangp.com",
  summary:
    "Software engineer with 5 years of experience across telecom and biotech, most recently building backend services and vector search at Amgen. Enjoy owning systems end to end, from API design and data pipelines to deployment on cloud infrastructure.",
  personal:
    "I like to develop software and solve errors. In my free time I like to program, listen to music, or play volleyball with friends.",
};

export const outcomes = [
  {
    value: "~10,000",
    label: "Amgen employees the RAG system serves",
  },
  {
    value: "22%",
    label: "Higher thumbs-up rate from answer-quality evaluations",
  },
  {
    value: "~7%",
    label: "Faster responses after summarizing longer conversations",
  },
  {
    value: "~5%",
    label: "Faster high-volume recharge transactions at STL",
  },
];

export const experience = [
  {
    id: "amgen",
    title: "Software Engineer II",
    org: "Amgen",
    location: "Thousand Oaks, CA",
    start: "2023-01",
    startLabel: "Jan 2023",
    endLabel: "Present",
    stack: [
      "C++",
      "Python",
      "LLMs",
      "AWS",
      "DynamoDB",
      "FAISS",
      "JavaScript",
      "React.js",
    ],
    bullets: [
      "Developed vector search for a RAG system serving ~10,000 Amgen employees across millions of documents, using FAISS and embeddings to retrieve relevant context for citation-backed LLM answers; ran answer-quality evaluations that raised thumbs-up rate by 22%.",
      "Optimized conversation history management by implementing automatic summarization of longer conversations, reducing context size and improving response time by ~7% while preserving relevant conversation context.",
      "Designed the DynamoDB storage layer for embeddings, chunk metadata, and retrieval logs; tuned partition keys and secondary indexes to keep embedding lookup latency flat at million-document scale and added retrieval logging for offline evaluation and debugging.",
      "Designed a multi step AI agent workflow (semantic retrieval, content validation, structured output, grounded generation) that makes every final answer citation backed and auditable, reducing hallucination risk.",
      "Implemented role-based access control with JWT auth and ACL aware retrieval so users only see results from documents they are cleared to access.",
      "Developed the React frontend for repository search, inline source citation review, and formatted report export, cutting document-search time for multiple teams.",
    ],
  },
  {
    id: "stl",
    title: "Software Engineer",
    org: "Sterlite Technologies Limited",
    location: "Ahmedabad, India",
    start: "2021-01",
    end: "2022-01",
    startLabel: "Jan 2021",
    endLabel: "Jan 2022",
    stack: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "Bootstrap",
      "SQL",
      "REST API",
      "Docker",
      "Linux",
      "Jenkins",
    ],
    bullets: [
      "Maintained 10+ production REST APIs and launched 2 new ones for telecom BSS subscriber services at STL (recharge plan management and activation), supporting plan purchases, voucher recharges, and on demand add-ons for operator customers.",
      "Cut response times for high-volume real-time recharge transactions by ~5% by parallelizing core processing loops with Java multi-threading, improving responsiveness under load.",
      "Containerized payment processing and user authentication microservices with Docker, enabling consistent dev/test/prod behavior and zero downtime releases via Jenkins pipelines.",
      "Optimized SQL queries for subscriber data and reporting, and shipped backend features for recharge workflows, balance checks, and plan eligibility logic.",
      "Automated daily operations with Bash scripts for error log parsing, system health checks, and Swagger API doc generation, saving the team hours of manual work each week.",
    ],
  },
];

export const projects = [
  {
    title: "File Storage System",
    stack: [
      "C",
      "Linux",
      "Bash",
      "Multi-threading",
      "File Systems",
      "gprof",
      "Git",
    ],
    bullets: [
      "Built a custom C file storage system on Linux for high throughput, low latency reads/writes across storage devices.",
      "Designed an in-memory caching layer for frequently accessed data to accelerate reads.",
    ],
  },
  {
    title: "Automated Trading Platform",
    stack: [
      "Python",
      "React.js",
      "Grok AI",
      "REST APIs",
      "WebSockets",
      "Trading APIs",
      "Telegram Bot",
    ],
    bullets: [
      "Built an automated agentic trading platform using Python and Grok Bot to monitor stocks, cryptocurrencies, and meme coins, analyze market trends, and automate trading decisions.",
      "Developed a React.js dashboard for tracking trades, portfolio performance, and market activity. Integrated trading APIs, configurable risk management, and real-time Telegram notifications.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Programming languages",
    items: ["C++", "Python", "Java", "SQL", "JavaScript"],
  },
  {
    label: "Databases",
    items: ["DynamoDB", "PostgreSQL", "MySQL", "NoSQL"],
  },
  {
    label: "Libraries and frameworks",
    items: ["PyTorch", "TensorFlow", "Spring Boot", "React.js", "Node.js"],
  },
  {
    label: "Cloud and tools",
    items: [
      "Linux",
      "Kubernetes",
      "Docker",
      "Amazon Web Services (AWS)",
      "Redis",
      "Git",
      "Claude Code",
      "Codex",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "California State University, Channel Islands, CA",
    gpa: "GPA 3.9",
    date: "May 2023",
    dateTime: "2023-05",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "L. D. College of Engineering, India",
    gpa: "GPA 3.55",
    date: "June 2021",
    dateTime: "2021-06",
  },
];

export const nav = [
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#contact", id: "contact", label: "Contact" },
];
