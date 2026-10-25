import {
  About,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
  Certifications,
  Recommendations,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Avishka",
  lastName: "Abeywickrama",
  name: `Avishka Abeywickrama`,
  role: "Software Engineer",
  avatar: "/images/Avishka.jpeg",
  email: "avishkaabeywickrama99@gmail.com",
  location: "Asia/Colombo", // IANA time zone identifier for Sri Lanka
  displayLocation: "Galle, Sri Lanka", // Human-readable location for display
  languages: ["English", "Sinhala"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/avishka4444",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/avishka-abeywickrama",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Kaggle",
    icon: "kaggle",
    link: "https://www.kaggle.com/avishkaabeywickrama",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable software solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Winlads</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/winlads-gaming-platform",
  },
  subline: (
    <>
      Full-stack Software Engineer with 3+ years of experience shipping
      production systems across IoT, fintech, gaming, and education domains.
      Currently at Zebra Technologies building RFID test automation with Go and
      React. Skilled in Go, Java/Spring Boot, Node.js, React, Next.js, and
      PostgreSQL on AWS. Delivers end-to-end from problem framing through
      production health.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.displayLocation || person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting%20with%20Avishka%20Abeywickrama&details=Hi%20there!%0A%0AI'd%20love%20to%20schedule%20a%20meeting%20to%20discuss:%0A%0A•%20Potential%20collaboration%20opportunities%0A•%20Your%20software%20engineering%20needs%0A•%20Technical%20consulting%20services%0A•%20Project%20requirements%20and%20timelines%0A%0APlease%20let%20me%20know%20your%20preferred%20time%20and%20any%20specific%20topics%20you'd%20like%20to%20cover.%0A%0ALooking%20forward%20to%20connecting!%0A%0ABest%20regards,%0AAvishka%20Abeywickrama%0ASoftware%20Engineer%0AEmail:%20avishkaabeywickrama99@gmail.com%0ALinkedIn:%20https://www.linkedin.com/in/avishka-abeywickrama&location=Video%20Call%20(Google%20Meet/Zoom)",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a full-stack Software Engineer with 3+ years of experience
        shipping production systems end-to-end across IoT, fintech, gaming, and
        education domains. Currently building RFID test automation at Zebra
        Technologies with Go and React. Skilled in React, Next.js, Go,
        Java/Spring Boot, and Node.js with PostgreSQL, Kafka, and AWS. Strong
        track record of optimizing performance, automating deployments, and
        delivering for international clients.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Zebra Technologies",
        timeframe: "Aug 2026 - Present · Sri Lanka",
        role: "Software Engineer, Professional II",
        achievements: [
          <>
            Building a full-stack RFID test automation suite in Go and React,
            orchestrating end-to-end validation of reader and hardware behavior
            across 50+ test scenarios.
          </>,
          <>
            Developing Go backend services to programmatically configure,
            execute, and verify RFID device test cases, replacing manual QA
            workflows.
          </>,
          <>
            Implementing React dashboards for configuring test runs, monitoring
            live execution status, and generating pass/fail reports with
            drill-down diagnostics.
          </>,
        ],
        images: [],
      },
      {
        company: "Arimac Digital",
        timeframe: "Jan 2026 - Aug 2026 · Colombo (Hybrid)",
        role: "Software Engineer I",
        achievements: [
          <>
            Designed a Spring Boot payment processing system that automated BNPL
            loan recovery workflows, improving transaction success rates through
            configurable retry logic and webhook-based reconciliation.
          </>,
          <>
            Built a Kafka-driven bulk data processing module handling 100K+
            customer records per batch with asynchronous execution, DLQ-based
            failure recovery, and real-time progress tracking.
          </>,
          <>
            Engineered multi-stage validation pipelines with configurable retry
            mechanisms and dead-letter queues, reducing failed payment attempts
            by 30%.
          </>,
          <>
            Improved platform observability by instrumenting services with
            Grafana dashboards and managing deployments through ArgoCD, cutting
            mean time to detection by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "Kingteza Software Solutions (Pvt) Ltd",
        timeframe: "Feb 2025 - Dec 2025",
        role: "Software Engineer",
        achievements: [
          <>
            Developed high-performance React/TypeScript and Next.js (SSR/SSG)
            frontends serving 5,000+ active users, reducing page load times by
            20% through code splitting, lazy loading, and image optimization.
          </>,
          <>
            Built end-to-end CI/CD pipelines with GitHub Actions, Jenkins,
            Docker, and AWS ECS, achieving zero-downtime deployments and cutting
            release cycles from days to hours.
          </>,
          <>
            Optimized PostgreSQL queries and implemented Redis-based job
            schedulers and caching layers, reducing API response times by 25%
            and increasing task reliability by 40%.
          </>,
          <>
            Enforced OWASP security best practices and SonarQube quality gates
            across all repositories, reducing post-release defects by 35%.
          </>,
        ],
        images: [],
      },
      {
        company: "Kingteza Software Solutions (Pvt) Ltd",
        timeframe: "Jul 2024 - Jan 2025",
        role: "Associate Software Engineer",
        achievements: [
          <>
            Delivered full-stack features across React, Next.js, and NestJS for
            gaming and rewards platforms, building reusable UI component
            libraries and RESTful APIs for game logic, rewards distribution, and
            session management.
          </>,
          <>
            Architected AWS serverless infrastructure (S3, CloudFront, Lambda,
            SQS FIFO + DLQ) that reduced hosting costs by 30% while handling
            10K+ daily asset requests with sub-100ms latency.
          </>,
          <>
            Implemented JWT/Firebase Auth for secure authentication and i18n
            localization supporting 3 languages, expanding platform reach to
            international markets.
          </>,
        ],
        images: [],
      },
      {
        company: "Future Labs (Pvt) Ltd",
        timeframe: "Jan 2024 - Mar 2024",
        role: "Associate Software Engineer",
        achievements: [
          <>
            Led frontend development for Mtrada2 and PTE Labs using React/Redux
            and Angular, building modular component architectures with Material
            UI that improved development velocity across teams.
          </>,
          <>
            Containerized application stack with Docker and integrated AWS
            services, reducing environment setup time from hours to minutes and
            enabling consistent deployments across staging and production.
          </>,
        ],
        images: [],
      },
      {
        company: "Future Labs (Pvt) Ltd",
        timeframe: "Aug 2023 - Dec 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Built Python Flask REST APIs for the PTE Labs scoring engine and
            contributed to the ML model pipeline for automated language
            proficiency assessment.
          </>,
          <>
            Integrated Stripe payment processing into the Angular frontend,
            enabling secure subscription billing for 500+ users.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Peradeniya",
        description: (
          <>
            Bachelor of Science (Hons) Specializing in Computer Engineering
            <br />
            Nov 2019 - Sep 2024 | Second Class Upper Division: GPA - 3.45/4.00
            <br />
            Relevant coursework: Software Engineering, Database Systems,
            Computer Networks, AI, Machine Learning, Data Structures &
            Algorithms.
          </>
        ),
      },
      {
        name: "Sanghamitta Balika Vidyalaya, Galle",
        description: (
          <>
            G.C.E. Advanced Level - Physical Science (2018)
            <br />
            Results: 2A&apos;s, 1B
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        icon: "code",
        description: (
          <>
            Proficient in multiple programming languages for full-stack
            development and data analysis.
          </>
        ),
        tags: [
          {
            name: "Go",
            icon: "code",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "C#",
            icon: "csharp",
          },
          {
            name: "C",
            icon: "c",
          },
          {
            name: "R",
            icon: "r",
          },
        ],
        images: [],
      },
      {
        title: "Web Development",
        icon: "server",
        description: (
          <>
            Building modern, scalable web applications with React, Next.js,
            Spring Boot, and Node.js ecosystem.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "NestJS",
            icon: "nestjs",
          },
          {
            name: "Spring Boot",
            icon: "java",
          },
          {
            name: "Express.js",
            icon: "express",
          },
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: ".NET",
            icon: "dotnet",
          },
          {
            name: "Redux Toolkit",
            icon: "react",
          },
          {
            name: "Tailwind CSS",
            icon: "code",
          },
          {
            name: "Prisma ORM",
            icon: "code",
          },
          {
            name: "Apache Kafka",
            icon: "code",
          },
          {
            name: "GraphQL",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: "Database Systems",
        icon: "chip",
        description: (
          <>
            Expertise in relational and NoSQL databases with optimization and
            caching strategies.
          </>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        icon: "cloud",
        description: (
          <>
            AWS and Azure infrastructure, containerization, CI/CD automation,
            and observability.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Microsoft Azure",
            icon: "azure",
          },
          {
            name: "ECS Fargate",
            icon: "aws",
          },
          {
            name: "Lambda",
            icon: "aws",
          },
          {
            name: "S3",
            icon: "aws",
          },
          {
            name: "CloudFront",
            icon: "aws",
          },
          {
            name: "SQS",
            icon: "aws",
          },
          {
            name: "SNS",
            icon: "aws",
          },
          {
            name: "CloudWatch",
            icon: "aws",
          },
          {
            name: "Amazon RDS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "GitHub Actions",
            icon: "github",
          },
          {
            name: "Jenkins",
            icon: "code",
          },
          {
            name: "ArgoCD",
            icon: "code",
          },
          {
            name: "SonarQube",
            icon: "code",
          },
          {
            name: "Grafana",
            icon: "code",
          },
          {
            name: "Vercel",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: "AI/ML & LLM Integration",
        icon: "rocket",
        description: (
          <>
            Machine learning, deep learning, and LLM API integration for
            intelligent applications.
          </>
        ),
        tags: [
          {
            name: "LLM API Integration",
            icon: "code",
          },
          {
            name: "Prompt Engineering",
            icon: "code",
          },
          {
            name: "ChatGPT API",
            icon: "code",
          },
          {
            name: "TensorFlow",
            icon: "python",
          },
          {
            name: "PyTorch",
            icon: "python",
          },
          {
            name: "Scikit-learn",
            icon: "python",
          },
          {
            name: "Keras",
            icon: "python",
          },
          {
            name: "Pandas",
            icon: "python",
          },
          {
            name: "NumPy",
            icon: "python",
          },
        ],
        images: [],
      },
    ],
  },
};


const certifications: Certifications = {
  path: "/certifications",
  label: "Certifications",
  title: `Certifications – ${person.name}`,
  description: `Professional certifications and achievements by ${person.name}`,
  certifications: [
    // AI/ML & Deep Learning Certifications
    {
      name: "Building Your Own Database Agent",
      issuer: "DeepLearning.AI",
      date: "Sep 2025",
      description:
        "Skills: Agents · Data Processing · Gen AI Applications · LLMOps · RAG · LLM Serving",
    },
    {
      name: "Building Systems with the ChatGPT API",
      issuer: "DeepLearning.AI",
      date: "Jul 2025",
      description:
        "Skills: Language Models, Chat Format & Tokens · Classification & Content Moderation · Chain of Thought Reasoning · Prompt Engineering & Chaining · Output Evaluation & Safety Checks",
    },
    {
      name: "ChatGPT Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
      date: "Jul 2025",
      description:
        "Skills: Effective prompting techniques · Iterative prompt development · Summarizing and inferring with LLMs · Text transformation and expansion · Building chatbot applications",
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "Jun 2025",
      description:
        "Skills: Machine Learning · Python (Programming Language) · Jupyter · Scikit-Learn · Supervised Learning · Regression Analysis · Feature Engineering · NumPy · Statistical Modeling · Artificial Intelligence (AI) · CART",
    },
    {
      name: "Bank Loan Approval Prediction With Artificial Neural Nets",
      issuer: "Coursera",
      date: "Mar 2023",
      description:
        "Skills: Machine Learning · Artificial Neural Networks · Deep Learning",
    },
    {
      name: "Introduction to Quantum Computing",
      issuer: "Udemy",
      date: "Feb 2023",
      description: "Skills: Q# · Quantum Computing",
    },

    // Project Management & Collaboration
    {
      name: "Confluence Fundamentals Badge",
      issuer: "Atlassian",
      date: "Sep 2023",
      credentialId: "277141362",
      description: "Skills: Confluence · Project Management",
    },
    {
      name: "Jira Fundamentals Badge",
      issuer: "Atlassian",
      date: "Sep 2023",
      credentialId: "276886427",
      description:
        "Skills: Agile Methodologies · Project Management · Jira Software",
    },
    {
      name: "Jira Project Management",
      issuer: "Great Learning",
      date: "2023",
      description: "Skills: Agile Methodologies · Jira Software",
    },

    // Web Development & Programming
    {
      name: "Front-End Web Development",
      issuer: "University of Moratuwa",
      date: "Feb 2023",
      credentialId: "P1epHIyKVk",
      description:
        "Comprehensive course covering modern web development technologies and best practices",
    },
    {
      name: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "Jun 2022",
      credentialId: "9IU5ZrusRk",
      description: "Skills: Web Design · Python (Programming Language)",
    },

    // Database & SQL
    {
      name: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      date: "Feb 2023",
      credentialId: "EF55FAF8E338",
      description: "Skills: MySQL",
    },
    {
      name: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "Feb 2023",
      credentialId: "030CF42A0E30",
      description: "Skills: MySQL",
    },

    // Programming Languages
    {
      name: "Python Programming",
      issuer: "University of Moratuwa",
      date: "Aug 2022",
      credentialId: "0Q7iwenIUM",
      description: "Skills: Python (Programming Language)",
    },
    {
      name: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "May 2022",
      credentialId: "l8bUUrEfMn",
      description: "Skills: Python (Programming Language)",
    },
    {
      name: "Java(Basic)",
      issuer: "HackerRank",
      date: "May 2022",
      description: "Skills: Java",
    },
    {
      name: "Using Python to Access Web Data",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "694W3ZP7W44K",
      description: "Skills: Python (Programming Language)",
    },
    {
      name: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "Jun 2020",
      credentialId: "CCBD8R5MB7ED",
      description: "Skills: Python (Programming Language)",
    },
    {
      name: "Python Data Structures",
      issuer: "Coursera",
      date: "Jun 2020",
      credentialId: "WRH9KSXR33QF",
      description: "Skills: Python (Programming Language) · Data Structures",
    },

    // Cybersecurity & IoT
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Nov 2021",
      description: "Skills: Networking · Cybersecurity",
    },
    {
      name: "SECURE WARS - Webinar Series and Workshop Series on Ethical Hacking",
      issuer: "IET On Campus - University of Peradeniya",
      date: "Jun 2021",
      description: "Skills: Ethical Hacking",
    },
    {
      name: "INNOVMIND - Workshop Series on IoT",
      issuer: "IEEE Student Branch of SLTC",
      date: "Oct 2021",
      description: "Skills: Internet of Things (IoT)",
    },
    {
      name: "ARDIOFLO - Arduino Workshop Series",
      issuer: "IEEE Student Branch of SLTC",
      date: "Jan 2021",
      description: "Skills: Arduino",
    },

    // Data Analysis
    {
      name: "Data Flow Analysis",
      issuer: "Indian Institute of Technology, Bombay",
      date: "Aug 2022",
      description: "Advanced data flow analysis techniques and methodologies",
    },

    // Competition Achievements
    {
      name: "Hackathon 2023 (ACES) - Winners",
      issuer: "ACES",
      date: "2023",
      description: "Entertainment and Enlightenment Category, Project: Voice4U",
    },
    {
      name: "ACES Pre Coders",
      issuer: "ACES",
      date: "2023",
      description: "Selected for the final round (ACES Coders)",
    },
    {
      name: "RoboFest (SLIIT)",
      issuer: "SLIIT",
      date: "2023",
      description:
        "Qualifying into the final round of the University Level Competition",
    },
  ],
};

// Categorized certifications for better organization
const certificationCategories = [
  {
    title: "Full-Stack Development",
    certifications: [
      {
        name: "Front-End Web Development",
        issuer: "University of Moratuwa",
        date: "Feb 2023",
        credentialId: "P1epHIyKVk",
        description:
          "Comprehensive course covering modern web development technologies and best practices",
        verificationUrl:
          "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
      },
      {
        name: "Web Design for Beginners",
        issuer: "University of Moratuwa",
        date: "Jun 2022",
        credentialId: "9IU5ZrusRk",
        description: "Skills: Web Design · Python (Programming Language)",
      },
      {
        name: "SQL (Basic) Certificate",
        issuer: "HackerRank",
        date: "Feb 2023",
        credentialId: "EF55FAF8E338",
        description: "Skills: MySQL",
        verificationUrl: "https://www.hackerrank.com/certificates/ef55faf8e338",
      },
      {
        name: "SQL (Intermediate) Certificate",
        issuer: "HackerRank",
        date: "Feb 2023",
        credentialId: "030CF42A0E30",
        description: "Skills: MySQL",
        verificationUrl: "https://www.hackerrank.com/certificates/030cf42a0e30",
      },
      {
        name: "Python Programming",
        issuer: "University of Moratuwa",
        date: "Aug 2022",
        credentialId: "0Q7iwenIUM",
        description: "Comprehensive Python programming course covering procedural, object-oriented, and functional programming paradigms. Learning outcomes include developing and evaluating programs using standard programming constructs, creating appropriate techniques and libraries to solve problems, and developing professional software development skills including communication, analytical abilities, and employability skills for the ICT industry.",
        verificationUrl:
          "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
      },
      {
        name: "Python for Beginners",
        issuer: "University of Moratuwa",
        date: "May 2022",
        credentialId: "l8bUUrEfMn",
        description: "Foundational Python programming course designed for beginners. Covers basic programming constructs, problem-solving techniques, and introduces professional software development practices. Prepares participants for lifelong learning in the evolving technological landscape.",
      },
      {
        name: "Java(Basic)",
        issuer: "HackerRank",
        date: "May 2022",
        description: "Skills: Java",
        verificationUrl: "https://www.hackerrank.com/certificates/f2166d230025",
      },
      {
        name: "Using Python to Access Web Data",
        issuer: "Coursera",
        date: "Jul 2020",
        credentialId: "694W3ZP7W44K",
        description: "Specialized course covering web data extraction using regular expressions, web protocols, API integration, and XML data processing. Skills gained include Python Programming, Web Scraping, JSON, API development, XML, Network Protocols, RESTful API, TCP/IP, Web Services, HTML, Data Capture, and Data Import/Export.",
        verificationUrl:
          "https://www.coursera.org/account/accomplishments/certificate/694W3ZP7W44K",
      },
      {
        name: "Programming for Everybody (Getting Started with Python)",
        issuer: "Coursera",
        date: "Jun 2020",
        credentialId: "CCBD8R5MB7ED",
        description: "Comprehensive Python programming course covering installation, basic programming concepts, variables, functions, and loops. Skills gained include Python Programming, Computer Programming, Computational Thinking, Programming Principles, Software Installation, and Development Environment setup.",
        verificationUrl:
          "https://www.coursera.org/account/accomplishments/certificate/CCBD8R5MB7ED",
      },
      {
        name: "Python Data Structures",
        issuer: "Coursera",
        date: "Jun 2020",
        credentialId: "WRH9KSXR33QF",
        description: "Advanced Python course covering data structures principles, file I/O operations, dictionaries, tuples, and multi-step data processing tasks. Skills gained include Data Structures, Python Programming, File Management, Data Processing, Data Manipulation, Programming Principles, Virtual Environment, and Development Environment management.",
        verificationUrl:
          "https://www.coursera.org/account/accomplishments/certificate/WRH9KSXR33QF",
      },
    ],
  },
  {
    title: "AI/ML & Deep Learning",
    certifications: [
      {
        name: "Building Your Own Database Agent",
        issuer: "DeepLearning.AI",
        date: "Sep 2025",
        description:
          "Learn to build intelligent database agents that can interact with SQL databases using natural language. Skills: Agents · Data Processing · Gen AI Applications · LLMOps · RAG · LLM Serving",
        verificationUrl:
          "https://learn.deeplearning.ai/accomplishments/92e87070-8ed8-4257-b5f5-41be564a2069",
      },
      {
        name: "Building Systems with the ChatGPT API",
        issuer: "DeepLearning.AI",
        date: "Jul 2025",
        description:
          "Master the art of building complex systems using the ChatGPT API, including chaining prompts and evaluating outputs. Skills: Language Models, Chat Format & Tokens · Classification & Content Moderation · Chain of Thought Reasoning · Prompt Engineering & Chaining · Output Evaluation & Safety Checks",
        verificationUrl:
          "https://learn.deeplearning.ai/accomplishments/1bcb4f81-2ad8-47a2-9435-454e89d7b08d?usp=sharing",
      },
      {
        name: "ChatGPT Prompt Engineering for Developers",
        issuer: "DeepLearning.AI",
        date: "Jul 2025",
        description:
          "Learn effective prompting techniques for developers to get the best results from large language models. Skills: Effective prompting techniques · Iterative prompt development · Summarizing and inferring with LLMs · Text transformation and expansion · Building chatbot applications",
        verificationUrl:
          "https://learn.deeplearning.ai/accomplishments/9d153ad2-9fd5-49bf-8962-956ec98efe95?usp=sharing",
      },
      {
        name: "Supervised Machine Learning: Regression and Classification",
        issuer: "DeepLearning.AI",
        date: "Jun 2025",
        description:
          "Comprehensive course covering supervised machine learning algorithms for regression and classification problems. Skills: Machine Learning · Python (Programming Language) · Jupyter · Scikit-Learn · Supervised Learning · Regression Analysis · Feature Engineering · NumPy · Statistical Modeling · Artificial Intelligence (AI) · CART",
      },
      {
        name: "Bank Loan Approval Prediction With Artificial Neural Nets",
        issuer: "Coursera",
        date: "Mar 2023",
        description:
          "Applied machine learning project using artificial neural networks to predict bank loan approvals. Skills: Machine Learning · Artificial Neural Networks · Deep Learning",
        verificationUrl:
          "https://www.coursera.org/account/accomplishments/verify/UW4FEDVAQCC7",
      },
      {
        name: "Introduction to Quantum Computing",
        issuer: "Udemy",
        date: "Feb 2023",
        description: "Skills: Q# · Quantum Computing",
        verificationUrl:
          "https://www.udemy.com/certificate/UC-674289f7-4a3a-4a6a-a131-c3e17a81ac3d/",
      },
    ],
  },
  {
    title: "Data Analysis",
    certifications: [
      {
        name: "Data Flow Analysis",
        issuer: "Indian Institute of Technology, Bombay",
        date: "Aug 2022",
        description: "Advanced data flow analysis techniques and methodologies",
      },
    ],
  },
  {
    title: "Project Management & Collaboration",
    certifications: [
      {
        name: "Confluence Fundamentals Badge",
        issuer: "Atlassian",
        date: "Sep 2023",
        credentialId: "277141362",
        description: "Comprehensive training in Confluence fundamentals covering content creation, collaboration features, page organization, and team workspace management. Skills gained include document collaboration, knowledge management, team communication, and project documentation best practices.",
        verificationUrl:
          "https://university.atlassian.com/student/award/NMEugicecepUhg35pHax4tam",
      },
      {
        name: "Jira Fundamentals Badge",
        issuer: "Atlassian",
        date: "Sep 2023",
        credentialId: "276886427",
        description:
          "Fundamental training in Jira software covering issue tracking, project management, workflow configuration, and agile methodologies. Skills gained include agile project management, issue lifecycle management, sprint planning, team collaboration, and software development workflow optimization.",
        verificationUrl:
          "https://university.atlassian.com/student/award/U4DwjETNMhGnZHvMGFsbq6vu",
      },
      {
        name: "Jira Project Management",
        issuer: "Great Learning",
        date: "2023",
        description: "Advanced project management training using Jira software covering agile methodologies, sprint management, team coordination, and project tracking. Skills gained include agile project management, sprint planning, team collaboration, workflow optimization, and software development lifecycle management.",
      },
    ],
  },
  {
    title: "Cybersecurity & IoT",
    certifications: [
      {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "Nov 2021",
        description: "Skills: Networking · Cybersecurity",
        verificationUrl:
          "https://www.credly.com/badges/d325cc99-1510-456c-b26f-71928de23023?source=linked_in_profile",
      },
      {
        name: "SECURE WARS - Webinar Series and Workshop Series on Ethical Hacking",
        issuer: "IET On Campus - University of Peradeniya",
        date: "Jun 2021",
        description: "Skills: Ethical Hacking",
      },
      {
        name: "INNOVMIND - Workshop Series on IoT",
        issuer: "IEEE Student Branch of SLTC",
        date: "Oct 2021",
        description: "Skills: Internet of Things (IoT)",
      },
      {
        name: "ARDIOFLO - Arduino Workshop Series",
        issuer: "IEEE Student Branch of SLTC",
        date: "Jan 2021",
        description: "Skills: Arduino",
      },
    ],
  },
  {
    title: "Competition Achievements",
    certifications: [
      {
        name: "Hackathon 2023 (ACES) - Winners",
        issuer: "ACES",
        date: "2023",
        description:
          "Our team 'InNov8Q' emerged victorious at the ACES Hackathon 2023 under the Entertainment and Enlightenment category. We developed an innovative solution for differently abled people to help them communicate with society. The solution uses image processing techniques to recognize sign language and actions, converting them into text displayed through a mobile application. Additionally, app users can convert text or voice messages into sign language images, displayed as animated videos on the mobile application.",
      },
    ],
  },
];

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const recommendations: Recommendations = {
  path: "/recommendations",
  label: "Recommendations",
  title: `Professional Recommendations – ${person.name}`,
  description: `LinkedIn recommendations from colleagues, managers, and clients who have worked with ${person.firstName}.`,
  recommendations: [
    {
      name: "Shehan Madhusanka",
      role: "Senior Software Engineer",
      company: "Cut+Dry Inc.",
      content:
        "I had the opportunity to study and work with Avishka during our undergraduate years, where we collaborated on several academic and volunteer projects. Avishka was always dependable and brought great ideas, strong technical skills, and a positive attitude to every project. Avishka consistently demonstrated strong leadership and teamwork, bringing people together and keeping projects moving smoothly. Her proactive approach, focus, and problem-solving mindset made a real impact on the success of every project she was part of. It was a pleasure working with her, and I'm confident she'll continue to excel and make a strong impact in her career.",
      date: "Oct 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
    {
      name: "Tharuja Sandeepanie",
      role: "Specialist Software Engineer",
      company: "Yaala Labs",
      content:
        "I had the pleasure of working closely with Avishka at Future Labs for more than eight months, during which she consistently impressed me with her technical expertise, professionalism, and positive outlook. Avishka is a skilled full-stack software engineer with solid hands-on experience in both frontend and backend technologies. Her technical toolkit includes: Frontend: React/Redux, Angular. Backend: AWS, Docker, Python, and Google Cloud. She has a strong grasp of system design principles and software development best practices, and she quickly adapts to new tools and frameworks with remarkable ease. Beyond her technical strengths, Avishka stands out for her exceptional communication, collaborative mindset, and analytical problem-solving skills. Her positive energy and supportive nature make her a valuable asset in any team setting. Overall, I highly recommend Avishka as a reliable, talented, and adaptable software engineer. She would be an excellent addition to any organization fortunate enough to have her.",
      date: "Oct 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
    {
      name: "Kushan Manahara",
      role: "AI/ML Engineer",
      company: "",
      content:
        "I had the chance to study and work together with Avishka, and I've always admired her drive and determination. She's someone who learns new things really fast, takes responsibility seriously, and is always willing to go the extra mile to make things work. During our AI/ML research and development projects, her contributions played a big part in moving things forward and making them a success. On top of that, she's reliable, collaborative, and genuinely great to work with. I have no doubt she'll excel wherever she goes.",
      date: "Sept 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
    {
      name: "Malitha Liyanage",
      role: "Software Engineer | AWS Certified Solutions Architect (Associate)",
      company: "",
      content:
        "I had the pleasure of working with Avishka at Future Labs (Pvt) Ltd, and was impressed by her professionalism, adaptability, and collaborative mindset. She quickly learned React fundamentals, synced up with the team, and consistently delivered quality work. When given new tasks, she could figure out the requirements, design solutions, and implement them effectively, making her a key contributor to the team's success. She also has a strong interest and knowledge in AI, which adds great value to her technical skill set.",
      date: "Sept 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
    {
      name: "Thakshila Jayathilake",
      role: "Full-Stack Software Engineer",
      company: "XigeniX",
      content:
        "I had the privilege of working closely with Avishka during our university days, both on academic projects and beyond. One of the things I admire most about her is her ability to deliver her part of the work completely and calmly, never letting stress compromise the quality of what she produces. She collaborated with our team end-to-end, always bringing good ideas and a sense of responsibility, which taught the rest of us the value of balance. She's an intelligent, resourceful person, the kind of teammate who isn't easily replaced. Even outside academics, like during sports events, she showed the same dedication and commitment to the goal. I believe she would bring the same drive and reliability to any team she joins.",
      date: "Sept 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
    {
      name: "Tharaka Senevirathne",
      role: "Full-Stack Software Engineer",
      company: "",
      content:
        "I have had the pleasure of working with Avishka, and I wholeheartedly recommend her for her exceptional technical expertise and problem-solving skills. She has consistently demonstrated a deep understanding of MERN, effectively tackling complex challenges with innovative solutions. Her ability to learn quickly, adapt to new technologies, and collaborate seamlessly with team members has made her an indispensable part of our team. She handles high-pressure situations with ease, consistently delivering results ahead of schedule. Avishka's professionalism, attention to detail, and proactive approach make her a valuable asset to any organization.",
      date: "Aug 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
    {
      name: "Muthuni De Alwis",
      role: "Software Engineer",
      company: "Sysco Labs",
      content:
        "Avishka is hardworking, responsible, and a quick learner with a strong work ethic, which makes her both dependable and inspiring. She naturally creates a positive and supportive environment and is always ready to help others, share her knowledge, and encourage her peers, making her a joy to work alongside. I'm certain that, Avishka will continue to make a positive impact and bring great value in any role she takes on.",
      date: "Aug 2025",
      linkedinUrl: "https://www.linkedin.com/in/avishka-abeywickrama/details/recommendations/",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  work,
  recommendations,
  certifications,
  certificationCategories,
};
