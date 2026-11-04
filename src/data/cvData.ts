export interface Profile {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  bio: string;
  profileImage: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SkillProgress {
  name: string;
  category: "Frontend" | "Backend / DB" | "IA & Nube" | "Mobile";
  level: number; // percentage 0-100
  highlight?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface ProjectLink {
  github?: string;
  demo?: string;
  youtube?: string;
  spotify?: string;
}

export interface Project {
  title: string;
  type: string;
  period: string;
  description: string;
  technologies: string[];
  links?: ProjectLink;
  image: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  year: string;
  title: string;
  issuer: string;
}

export interface AdditionalInfo {
  driverLicense: string;
  youtube: string;
  podcast: string;
}

export interface CVData {
  profile: Profile;
  skills: SkillCategory[];
  skillProgress: SkillProgress[];
  experience: WorkExperience[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
  additionalInfo: AdditionalInfo;
}

export const cvData: CVData = {
  profile: {
    name: "José Gustavo Rodríguez Cortés",
    title: "Ingeniero de Software · Frontend Angular · Full Stack Junior",
    location: "Bogotá, Colombia",
    phone: "+57 319 251 3535",
    email: "josgus15@outlook.com",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-gustavo-rodr%C3%ADguez-cort%C3%A9s-96545380/",
    bio: "Ingeniero de Software graduado del Politécnico Grancolombiano (4 de septiembre de 2026), con experiencia práctica en desarrollo y soporte de aplicaciones en entorno financiero (Banco de Bogotá). He trabajado en frontend y backend con TypeScript, Angular y Python, con uso de AWS, Grafana y GitHub en dinámicas ágiles. Complemento mi perfil con proyectos personales en IA generativa, desarrollo móvil Android y aplicaciones web, aprendiendo de forma autodidacta y buscando comprender las decisiones detrás de cada solución. Me caracterizo por aprender haciendo, adaptarme rápidamente a nuevas tecnologías y asumir retos técnicos con responsabilidad.",
    profileImage: "/images/profile.jpg"
  },
  skills: [
    {
      category: "Frontend",
      skills: ["Angular (v15+)", "TypeScript", "HTML5", "CSS3", "RxJS", "Git / GitFlow"]
    },
    {
      category: "Backend / DB",
      skills: ["MySQL", "Python", "Java", "Node.js", "FastAPI"]
    },
    {
      category: "Cloud / DevOps",
      skills: ["AWS", "Grafana", "GitHub", "Jira", "Confluence", "Linux (fundamentos)"]
    },
    {
      category: "IA / Datos",
      skills: ["LangChain", "ChromaDB", "LLaMA 3.1 (Groq)", "RAG", "Power BI (fundamentos)"]
    },
    {
      category: "Mobile",
      skills: ["Android — Kotlin", "Jetpack Compose", "Java"]
    },
    {
      category: "Metodologías",
      skills: ["Scrumban", "LEAN", "Design Thinking", "PMI", "Scrum", "Kanban"]
    },
    {
      category: "Idiomas",
      skills: ["Español nativo", "Inglés profesional (Professional Working)"]
    }
  ],
  skillProgress: [
    { name: "Angular (v15+)", category: "Frontend", level: 90, highlight: "Desarrollo empresarial Banco de Bogotá" },
    { name: "TypeScript", category: "Frontend", level: 88, highlight: "Tipado estricto & aplicaciones bancarias" },
    { name: "HTML5 / CSS3 & UI", category: "Frontend", level: 92, highlight: "Maquetación responsive & animaciones" },
    { name: "RxJS", category: "Frontend", level: 82, highlight: "Programación reactiva & flujos de datos" },
    { name: "Python & FastAPI", category: "Backend / DB", level: 86, highlight: "APIs RESTful & backend del widget RAG" },
    { name: "MySQL & Bases de Datos", category: "Backend / DB", level: 80, highlight: "Modelado relacional & consultas" },
    { name: "Java & Node.js", category: "Backend / DB", level: 76, highlight: "Pasantía CodeGym & microservicios" },
    { name: "IA Generativa & RAG", category: "IA & Nube", level: 88, highlight: "LangChain, ChromaDB, LLaMA 3.1 (Groq)" },
    { name: "AWS Cloud & DevOps", category: "IA & Nube", level: 80, highlight: "Soluciones en nube & monitoreo Grafana" },
    { name: "Android (Kotlin & Compose)", category: "Mobile", level: 82, highlight: "App MetroWave & Chromecast API" }
  ],
  experience: [
    {
      role: "Practicante Empresarial — Tribu de Transformación Operativa",
      company: "Banco de Bogotá",
      location: "Bogotá",
      period: "Feb 2026 – Ago 2026",
      responsibilities: [
        "Desarrollo de funcionalidades frontend y backend con TypeScript, Angular y Python, incluyendo validaciones, gestión de datos, plantillas y mejoras en aplicaciones internas del banco.",
        "Participación en el desarrollo y mantenimiento de aplicaciones internas, realizando ajustes en frontend y backend y atendiendo requerimientos de datos y parametrías documentales.",
        "Uso de AWS para el desarrollo y gestión de soluciones en la nube; consultas y análisis en Grafana para diagnóstico y seguimiento de aplicaciones.",
        "Gestión del ciclo de desarrollo con GitHub y Jira: creación de ramas, revisión de código, Pull Requests y paso de cambios a ambientes de QA.",
        "Participación en pruebas funcionales, análisis de incidentes y validación de nuevas funcionalidades bajo dinámicas de trabajo ágiles.",
        "Proyecto capstone: widget de soporte inteligente basado en IA generativa y RAG (LangChain, ChromaDB, LLaMA 3.1, FastAPI), orientado a mejorar el acceso a información para usuarios internos. Reconocido entre las iniciativas destacadas de practicantes del banco."
      ],
      technologies: ["TypeScript", "Angular", "Python", "AWS", "Grafana", "GitHub", "Jira", "RAG", "Inteligencia Artificial"]
    },
    {
      role: "Trainer Backup — Social Media Consumer",
      company: "Teleperformance",
      client: "Microsoft GBS",
      location: "Bogotá",
      period: "Jun 2021 – Ago 2025",
      responsibilities: [
        "Formación de tres cohortes completas (Waves 12, 13 y 15) y capacitación de trainers en Social Media y Soporte Técnico.",
        "Apoyo al supervisor y equipo de calidad; seguimiento personalizado a agentes New Hire con métricas por debajo del objetivo."
      ]
    },
    {
      role: "Agente Social Media Care (Microsoft GBS)",
      company: "Teleperformance",
      location: "Bogotá",
      period: "Abr 2018 – Ago 2025",
      responsibilities: [
        "Gestión de soporte y comunidad en Twitter, Facebook, Instagram y TikTok para productos Microsoft — Windows, Office 365, Xbox.",
        "Reconocido como el mejor agente de la campaña en 2020."
      ]
    },
    {
      role: "Agente Social Media & Communities Windows Phone (Microsoft)",
      company: "Teleperformance",
      location: "Bogotá",
      period: "Mar 2017 – Abr 2018",
      responsibilities: [
        "Moderación de comunidad en answers.microsoft.com y soporte en perfiles Facebook y Twitter de Microsoft."
      ]
    },
    {
      role: "Agente Soporte Técnico Phone Microsoft CS3",
      company: "Teleperformance",
      location: "Bogotá",
      period: "Ene 2016 – Mar 2017",
      responsibilities: [
        "Asistencia técnica telefónica a usuarios domésticos de productos Microsoft; integrante del grupo VOA para gestión de licencias."
      ]
    },
    {
      role: "Analista Help Desk — Mesa de Servicio (ETB)",
      company: "Intelcia",
      location: "Bogotá",
      period: "Jul 2015 – Ene 2016",
      responsibilities: [
        "Mesa de servicio para empleados de ETB: atención de incidencias de red, PCs e impresoras; validaciones de primer nivel.",
        "Supervisión y capacitación del equipo; coordinación de horarios y desarrollo de material de capacitación."
      ]
    },
    {
      role: "Analista Planta Externa (Movistar)",
      company: "Telefónica",
      location: "Bogotá",
      period: "Ene 2014 – Ago 2014",
      responsibilities: [
        "Gestión de carga de materiales en SAP ECC (MM/GESTOT) para contratistas a nivel nacional; auditorías de presupuestos semanales."
      ]
    },
    {
      role: "Analista Facturación — Gestión de Abonados Movistar",
      company: "Atento",
      location: "Bogotá",
      period: "Ago 2013 – Feb 2015",
      responsibilities: [
        "Instalación y suspensión de servicios a abonados de línea fija con conexiones remotas a centrales Alcatel, Neax, Fetex y UMTS."
      ]
    },
    {
      role: "Analista Daños Masivos (Movistar)",
      company: "Atento",
      location: "Bogotá",
      period: "Mar 2014 – May 2014",
      responsibilities: [
        "Revisión y reporte de daños masivos a ingenieros de planta externa; verificación post-reparación y cierre de órdenes."
      ]
    },
    {
      role: "RAC Legalización (Movistar)",
      company: "Atento",
      location: "Bogotá",
      period: "Dic 2012 – Ago 2013",
      responsibilities: [
        "Legalización de servicios técnicos para productos de hogar Movistar; verificación de parámetros técnicos y validación de posibles fraudes."
      ]
    }
  ],
  projects: [
    {
      title: "Widget de Soporte Inteligente (IA Generativa / RAG)",
      type: "Proyecto capstone — Banco de Bogotá",
      period: "2026",
      description: "Asistente embebible con RAG. Stack: LangChain, ChromaDB, LLaMA 3.1 vía Groq, FastAPI, JS vanilla. Reconocido entre las iniciativas destacadas de practicantes del banco.",
      technologies: ["LangChain", "ChromaDB", "LLaMA 3.1 (Groq)", "FastAPI", "JavaScript vanilla", "RAG"],
      image: "/images/projects/widget-soporte-rag.jpg"
    },
    {
      title: "MetroWave — Reproductor de Música Android",
      type: "Proyecto personal",
      period: "2024 – presente",
      description: "App Android (Kotlin, Jetpack Compose) con visualizador de audio, letras sincronizadas (LRCLIB) y Chromecast.",
      technologies: ["Android", "Kotlin", "Jetpack Compose", "LRCLIB", "Chromecast"],
      image: "/images/projects/metrowave.jpg"
    },
    {
      title: "Portfolio Personal",
      type: "Proyecto personal",
      period: "2025 – presente",
      description: "Sitio web personal con App Router y despliegue continuo en Vercel.",
      technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "/images/projects/portfolio-personal.jpg"
    },
    {
      title: "TecnoCuriosidades — Canal de Divulgación Tecnológica",
      type: "Canal de Divulgación Tecnológica",
      period: "Activo",
      description: "Canal de tecnología y cultura digital.",
      technologies: ["YouTube", "Podcast Spotify"],
      links: {
        youtube: "https://youtube.com/@TecnoCuriosidades-s8r",
        spotify: "https://open.spotify.com/show/1kgAZIMElVcTURQrLNYHj4"
      },
      image: "/images/projects/tecnocuriosidades.jpg"
    }
  ],
  education: [
    {
      degree: "Ingeniería de Software",
      institution: "Politécnico Grancolombiano",
      period: "Mar 2024 – Sep 2026"
    },
    {
      degree: "Curso de Python Profesional",
      institution: "Código Facilito",
      period: "Oct 2026"
    },
    {
      degree: "Excel Avanzado & Fundamentos de Power BI",
      institution: "CET Colsubsidio",
      period: "Dic 2025 – Ene 2026"
    },
    {
      degree: "Curso de Iniciación al Desarrollo con IA",
      institution: "BIG School",
      period: "Sep – Oct 2025"
    },
    {
      degree: "Copilot (Inteligencia Artificial)",
      institution: "Santander Open Academy",
      period: "Jul 2024"
    },
    {
      degree: "Google: Inteligencia Artificial y Productividad",
      institution: "Santander Open Academy",
      period: "Jul 2024"
    },
    {
      degree: "Pasantía de Java en CodeGym",
      institution: "CodeGym University",
      period: "Feb 2024"
    },
    {
      degree: "Desafío GoIT — HTML5, CSS3, JavaScript",
      institution: "GoIT",
      period: "Sep – Oct 2022"
    },
    {
      degree: "Diplomado en Programación en Java (POO)",
      institution: "Politécnico de Colombia",
      period: "May 2022"
    },
    {
      degree: "Desarrollo de Apps Móviles",
      institution: "Google Activate",
      period: "Jul 2020"
    },
    {
      degree: "Conceptos Básicos de Marketing Digital",
      institution: "Google Garage Digital / BID",
      period: "Jun 2020"
    },
    {
      degree: "Reporting Analyst 2019",
      institution: "Teleperformance",
      period: "Sep – Nov 2019"
    },
    {
      degree: "Campus Party Colombia 2019 (240h — Ciencia, IA, Cívica Digital)",
      institution: "Campus Party",
      period: "Jun 2019"
    },
    {
      degree: "Trainer Jump 4.0",
      institution: "Teleperformance",
      period: "Jun – Dic 2017"
    },
    {
      degree: "Campus Party Colombia 5",
      institution: "Campus Party",
      period: "May – Jun 2012"
    },
    {
      degree: "Herramientas de Programación en Excel",
      institution: "",
      period: "Jun 2009"
    },
    {
      degree: "Java Programming Language",
      institution: "Fundación Compuclub",
      period: "Abr – Jun 2008"
    },
    {
      degree: "Linux: Sistema Operativo, Comandos y Utilidad",
      institution: "SENA",
      period: "Mar – Abr 2007"
    },
    {
      degree: "Bachillerato Técnico Industrial en Sistemas",
      institution: "I.E. Politécnico Álvaro González Santana",
      period: "2007"
    }
  ],
  certifications: [
    { year: "2026", title: "Curso de Python Profesional", issuer: "Código Facilito" },
    { year: "2026", title: "¿Por qué realizar pruebas de software?", issuer: "Ubits" },
    { year: "2026", title: "Valida la lógica de tu código con pruebas unitarias", issuer: "Ubits" },
    { year: "2026", title: "Certificado de Asistencia — Jornadas de Data Science con IA", issuer: "BIG School" },
    { year: "2026", title: "Certificado de Asistencia — SEO para IA y Google", issuer: "BIG School" },
    { year: "2026", title: "Certificado de Asistencia — Ciberseguridad y Hacking Ético", issuer: "BIG School" },
    { year: "2026", title: "Lidera a Toda Velocidad: Lecciones de la Fórmula 1", issuer: "Santander Open Academy" },
    { year: "2026", title: "Certificate of Completion: Claude 101", issuer: "Anthropic" },
    { year: "2026", title: "Certificado de Iniciación al Desarrollo con IA", issuer: "BIG School" },
    { year: "2026", title: "Preparación Certificación AWS AI Practitioner — Semana 1", issuer: "Amazon" },
    { year: "2026", title: "¿Por qué entrenarse en la IA y la nube?", issuer: "Amazon" },
    { year: "2024", title: "Copilot (Inteligencia Artificial)", issuer: "Santander Open Academy" },
    { year: "2024", title: "Google: Inteligencia Artificial y Productividad", issuer: "Santander Open Academy" },
    { year: "2018", title: "Microsoft Insider Dev Tour", issuer: "Microsoft" },
    { year: "2017", title: "Windows Insider Meetup", issuer: "Microsoft" },
    { year: "2015", title: "TechDay 2015 Bogotá", issuer: "Microsoft" },
    { year: "2015", title: "IT Camp: Implementing a Mobile-First World with Microsoft Enterprise Device Infrastructure", issuer: "Microsoft" },
    { year: "2015", title: "Un Desarrollo, Una Aplicación, Todas las Plataformas", issuer: "Microsoft" }
  ],
  additionalInfo: {
    driverLicense: "Categoría B1",
    youtube: "https://youtube.com/@TecnoCuriosidades-s8r",
    podcast: "https://open.spotify.com/show/1kgAZIMElVcTURQrLNYHj4"
  }
};
