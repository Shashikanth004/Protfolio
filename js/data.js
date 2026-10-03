/* ==========================================================
   ALL SITE CONTENT LIVES HERE.
   Edit this file to add projects, certificates or links —
   the page re-renders itself from it. No HTML changes needed.
   ========================================================== */
window.PORTFOLIO = {
  person: {
    name: "ShashiKanth B",
    email: "kanthshashi755@gmail.com",
    phone: "+91 9900145138",
    phoneHref: "+919900145138",
    location: "Karnataka, India",
    resume: "assets/ShashiKanthB_Resume.pdf",
    // Add your profile URLs below. Empty = the button is hidden.
    linkedin: "",
    github: ""
  },

  /* Order = order on the page (newest first).
     url: clicking the card / button opens this. Empty = card is not a link. */
  projects: [
    {
      name: "PostflowAI",
      mark: "Pf",
      period: "Jun 2026 – Sep 2026",
      description: "An AI-powered content workflow platform that helps users generate, refine and manage social media content using LLM-based automation and intelligent workflows.",
      tags: ["LLMs", "Automation", "Content workflow"],
      url: "",
      hue: 265
    },
    {
      name: "AI-Tutor",
      mark: "AI",
      period: "Apr 2026 – May 2026",
      description: "An AI study companion for students, trained with ML algorithms, where they can learn at their own pace in their own space.",
      tags: ["AI", "Machine Learning", "Education"],
      url: "https://tutor-bright-mind.vercel.app/",
      hue: 195
    },
    {
      name: "Fact-Check AI",
      mark: "FC",
      period: "Feb 2026 – May 2026",
      description: "A fact and claim verification system built with Gemini, RAG, ChromaDB and FastAPI. It verifies claims, retrieves supporting evidence and returns confidence-based results with citations.",
      tags: ["Gemini", "RAG", "ChromaDB", "FastAPI"],
      url: "https://factcheck-ai-livid.vercel.app/",
      hue: 22
    },
    {
      name: "AI Powered Power BI",
      mark: "BI",
      period: "Feb 2026 – Mar 2026",
      description: "An interactive business intelligence dashboard built with Microsoft Power BI to visualize, analyze and monitor data insights in real time.",
      tags: ["Power BI", "Data analytics", "Dashboards"],
      url: "https://power-bi-frontend-ivory.vercel.app/",
      hue: 48
    },
    {
      name: "Elder-Tech",
      mark: "ET",
      period: "Jul 2025 – Aug 2025",
      description: "An elder-friendly technology assistance platform that helps senior citizens understand smartphones, digital payments and video calling.",
      tags: ["Smartphones", "Digital payments", "Video calling"],
      url: "https://elder-tech-424yun8fl-shashikanth004s-projects.vercel.app/",
      hue: 150
    }
  ],

  /* url: paste the direct certificate / credential link here.
     While it is empty, the name opens the issuer's website instead. */
  certifications: [
    { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", issuer: "LinkedIn", period: "Jul 2026",
      url: "", fallback: "https://www.linkedin.com/learning/" },
    { name: "AI Agents Contest", issuer: "Microsoft", period: "Jun 2026 – Jul 2026",
      url: "", fallback: "https://www.microsoft.com/en-in/" },
    { name: "AI Essentials", issuer: "Google", period: "May 2026 – Jun 2026",
      url: "", fallback: "https://grow.google/ai-essentials/" },
    { name: "Cisco Certified Network Associate – Networking", issuer: "Cisco Networking Academy", period: "Feb 2026 – Present",
      url: "", fallback: "https://www.netacad.com/" },
    { name: "Deloitte Australia – Data Analytics Job Simulation", issuer: "Forage", period: "Feb 2026 – Present",
      url: "", fallback: "https://www.theforage.com/" },
    { name: "Introduction to Programming Using Python", issuer: "HackerRank", period: "Feb 2026 – Present",
      url: "", fallback: "https://www.hackerrank.com/" },
    { name: "Introduction to Data Science", issuer: "Cisco Networking Academy", period: "Feb 2026 – Present",
      url: "", fallback: "https://www.netacad.com/" },
    { name: "Data Science for Business", issuer: "L&T EduTech, Bengaluru", period: "Jan 2026 – Present",
      url: "", fallback: "https://lntedutech.com/" }
  ],

  skills: [
    { group: "AI and data",
      items: ["Artificial Intelligence", "Machine Learning", "Generative AI Tools", "Prompt Engineering"] },
    { group: "Programming and web",
      items: ["Python", "Java", "C#", "JavaScript", "HTML", "HTML 5", "React", "Web Development", "Frontend Development", "APIs"] },
    { group: "Engineering and teamwork",
      items: ["Algorithms", "Problem Solving", "Critical Thinking", "Leadership", "Software Development Life Cycle (SDLC)", "Agile Methodology"] }
  ],

  education: [
    { years: "2024 – 2028", title: "B.Tech, Computer Science & Engineering", place: "Svyasa Deemed to be University", detail: "In progress" },
    { years: "2024", title: "Senior Secondary (XII), Karnataka State Board", place: "KLE Society's School, Bangalore", detail: "Science · 89.00%" },
    { years: "2022", title: "Secondary (X), CBSE", place: "The San Global School", detail: "86.40%" }
  ],

  recognition: [
    { when: "March 2026", title: "3rd Position, GeeksforGeeks Hackathon", text: "Placed third in a competitive hackathon run by GeeksforGeeks." },
    { when: "Academic year 2026", title: "Outstanding Student Award", text: "Honoured on Engineers' Day by the university for overall achievements in the academic year 2026." }
  ]
};
