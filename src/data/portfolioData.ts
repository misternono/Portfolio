export const personalInfo = {
  name: "Noah-Gabriel Winkler",
  title: "Software Engineer",
  email: "w.noah.gabriel@gmail.com",
  location: "Alicante, Spain",
  linkedin: "https://www.linkedin.com/in/noah-gabriel-winkler",
  github: "https://github.com/misternono",
  website: "https://noah-winkler.dev"
};

export const aboutData = {
  summary: "Software Engineer specialized in .NET development with 3+ years of experience implementing enterprise architectures. Expert in various technologies, performing technical analysis and reviews, leading development teams to deliver robust solutions. Recently completed Computer Engineering degree at University of Alicante while working full-time.",
  highlights: [
    "Software Engineer at Alten Delivery Center since January 2026",
    "Specialized in .NET enterprise integration and architecture",
    "Led development teams and technical analysis projects",
    "Trilingual professional (German, English, Spanish)",
    "Competing cybersecurity participant (13th place nationally)",
    "Elastic Stack and VUE certified developer"
  ]
};

export const skills = [
  { name: ".NET Framework", level: 95, category: "Backend" },
  { name: "C#", level: 92, category: "Programming" },
  { name: "Oracle PL/SQL", level: 90, category: "Database" },
  { name: "SQL Server", level: 80, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "Angular", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Programming" },
  { name: "RabbitMQ", level: 82, category: "Messaging" },
  { name: "API REST", level: 90, category: "Backend" },
  { name: "JWT/OpenID", level: 88, category: "Security" },
  { name: "OAuth", level: 50, category: "Security" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "Kubernetes", level: 35, category: "DevOps" },
  { name: "Vue.js", level: 78, category: "Frontend" },
  { name: "IIS", level: 85, category: "Infrastructure" },
  { name: "Jenkins", level: 80, category: "CI/CD" }
];

export const projects = [
  {
    id: 1,
    title: "Template-Based PDF Generation System",
    description: "A robust PDF generation solution built entirely in .NET with custom LaTeX compiler, offering both SaaS cloud deployment and on-premise solutions for enterprise document generation",
    technologies: [".NET", "C#", "LaTeX", "Kubernetes", "Docker", "API REST", "Microservices"],
    features: [
      "Zero third-party dependencies - fully custom .NET implementation",
      "Built-in LaTeX compiler developed from scratch",
      "Flexible deployment: SaaS cloud service and on-premise options",
      "Kubernetes-based cloud architecture for scalability",
      "Customizable LaTeX templates for professional PDF generation",
      "RESTful API for seamless integration",
      "Enterprise-grade security for sensitive document processing"
    ],
    metrics: {
      dependencies: "Zero third-party libs",
      deployment: "Cloud + On-premise",
      architecture: "Kubernetes native"
    },
    image: "https://images.pexels.com/photos/33175656/pexels-photo-33175656.jpeg?auto=compress&cs=tinysrgb&w=800",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Alten Delivery Center",
    period: "January 2026 - Present",
    location: "Alicante, Spain",
    description: "Software Engineer specialized in .NET development, working on enterprise solutions for a German Client.",
    achievements: [
      "Developing .NET enterprise solutions",
      "Implementing modern software architecture patterns",
      "Contributing to team development processes"
    ]
  },
  {
    title: "Software Architect & Programmer Analyst",
    company: "Gestión Tributaria Territorial",
    period: "May 2022 - December 2025",
    location: "Alfaz del Pi, Alicante",
    description: "Software Architect and Programmer Analyst specialized in .NET integration, responsible for implementing various technologies in enterprise architectures, performing technical analysis and reviews, leading small development teams to deliver robust solutions.",
    achievements: [
      "Architected .NET integration solutions for enterprise systems",
      "Implemented ApiRest solutions for interconnecting technologies",
      "Developed Identity/OpenId (JWT) authentication servers",
      "Led technical analysis and code review processes",
      "Managed and mentored development teams",
      "Established best practices for dependency injection and design patterns"
    ]
  },
  {
    title: "German Language Teacher / Private Classes",
    company: "Freelance",
    period: "January 2019 - May 2022",
    location: "Alfaz del Pi, Alicante",
    description: "Provided private German language instruction, leveraging native-level fluency to help students achieve language proficiency goals.",
    achievements: [
      "Developed personalized curriculum for individual students",
      "Achieved high student success rates in language proficiency",
      "Adapted teaching methods to different learning styles",
      "Maintained flexible scheduling while working full-time"
    ]
  },
  {
    title: "Helping Staff / Cashier",
    company: "Supermarket Costa Blanca",
    period: "August 2017 - May 2022",
    location: "Alfaz del Pi, Alicante",
    description: "Provided customer service and support in retail environment, developing strong communication skills and attention to detail.",
    achievements: [
      "Maintained excellent customer service standards",
      "Handled cash operations with high accuracy",
      "Supported team operations during peak periods",
      "Developed multilingual customer service skills"
    ]
  }
];

export const education = [
  {
    degree: "Master's Degree in Cybersecurity",
    institution: "University of Alicante",
    period: "September 2025 - Present",
    location: "San Vicente, Alicante (ES)",
    description: "Currently pursuing Master's degree in Cybersecurity, building on competitive cybersecurity experience and software architecture expertise."
  },
  {
    degree: "Computer Engineering",
    institution: "University of Alicante",
    period: "September 2020 - July 2025",
    location: "San Vicente, Alicante (ES)",
    description: "Completed degree in Computer Engineering with focus on software architecture and systems design."
  },
  {
    degree: "Baccalaureate",
    institution: "I.S. Lope de Vega",
    period: "September 2008 - June 2018",
    location: "Benidorm, Alicante (ES)",
    description: "Completed secondary education with honors, including recognition for extracurricular project involvement."
  },
  {
    degree: "Primary School",
    institution: "Albrecht-Dürer Schule",
    period: "August 2006 - June 2008",
    location: "Meckenbeuren, Baden-Württemberg (DE)",
    description: "Primary education completed in Germany, establishing strong foundation in German language and culture."
  }
];

export const certifications = [
  {
    name: "Elastic Stack Certification",
    issuer: "Formadores IT",
    year: "2022",
    description: "Advanced certification in Elasticsearch, Logstash, and Kibana"
  },
  {
    name: "Basics in VUE Certification",
    issuer: "Technical Training Institute",
    year: "2022",
    description: "Frontend development certification in Vue.js framework"
  },
  {
    name: "Cambridge CAE (C1) Certificate",
    issuer: "Cambridge Assessment English",
    year: "2018",
    description: "Advanced English language proficiency certification"
  },
  {
    name: "INCIBE Cybersecurity Competition",
    issuer: "National Cybersecurity Institute (INCIBE)",
    year: "2015, 2017",
    description: "13th place nationally in cybersecurity competitions"
  }
];

export const languages = [
  { name: "German", level: "Native", proficiency: 100 },
  { name: "English", level: "Fully qualified (C1)", proficiency: 95 },
  { name: "Spanish", level: "Fully qualified", proficiency: 95 },
  { name: "Valencian", level: "Basic competence", proficiency: 60 },
  { name: "French", level: "Elemental competence", proficiency: 25 }
];

export const events = [
  {
    name: ".NET Conf 2025",
    type: "Conference",
    date: "November 2025",
    location: "Madrid, Spain",
    description: "Microsoft's flagship .NET conference featuring the latest updates in .NET ecosystem, including .NET 10 innovations, cloud-native development, and AI integration.",
    topics: [".NET 10", "AI Integration", "Cloud Architecture", "Aspire"],
    website: "https://dotnetconfspain.com/"
  },
  {
    name: ".NET Conf 2024",
    type: "Conference",
    date: "November 2024",
    location: "Madrid, Spain",
    description: "Annual .NET conference showcasing .NET 9 features, modern development practices, and enterprise architecture patterns for scalable applications.",
    topics: [".NET 9", "Microservices", "Blazor", "AI Integration"],
    website: "https://dotnetconfspain.com/"
  },
  {
    name: "VlcTesting 2024",
    type: "Conference",
    date: "2024",
    location: "Valencia, Spain",
    description: "Local Valencia testing conference focused on software quality assurance, testing methodologies, and best practices for modern development teams.",
    topics: ["Software Testing", "QA Practices", "Test Automation", "Quality Assurance"],
    website: "https://vlctesting.es/"
  },
  {
    name: ".NET Conf 2023",
    type: "Conference",
    date: "November 2023",
    location: "Madrid, Spain",
    description: "Major .NET conference highlighting .NET 8 capabilities, cross-platform development, and modern architectural approaches for enterprise solutions.",
    topics: [".NET 8", "Cross-platform", "Web APIs", "Cloud Development"],
    website: "https://dotnetconfspain.com/"
  },
  {
    name: "Codemotion 2023",
    type: "Conference",
    date: "2023",
    location: "Online",
    description: "European tech conference bringing together developers and tech professionals to explore latest trends in software development, DevOps, and emerging technologies.",
    topics: ["Software Development", "DevOps", "Tech Trends", "Innovation"],
    website: "https://www.codemotion.com/"
  }
];