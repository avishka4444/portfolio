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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
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
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
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
      Full-stack Software Engineer with hands-on experience building and scaling
      high-traffic applications (10k+ daily users) across fintech, gaming, and
      education domains. Skilled in React, Next.js, NestJS, and PostgreSQL with
      a strong track record of optimizing performance and deployment efficiency.
      Experienced in AWS infrastructure and cross-functional delivery for
      international clients.
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
        I'm a full-stack Software Engineer with hands-on experience
        building and scaling high-traffic applications (10k+ daily users) across
        fintech, gaming, and education domains. Skilled in React, Next.js,
        NestJS, and PostgreSQL with a strong track record of optimizing
        performance and deployment efficiency. Experienced in AWS infrastructure
        and cross-functional delivery for international clients.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kingteza Software Solutions (Pvt) Ltd",
        timeframe: "Feb 2025 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Designed and deployed full-stack solutions for Winlads, a gaming and
            rewards platform serving 5k+ active users, with 10+ microservices
            and real-time session handling.
          </>,
          <>
            Optimized PostgreSQL queries and Redis caching, reducing response
            times by 25% and improving scalability under high-concurrency
            workloads.
          </>,
          <>
            Automated CI/CD pipelines with GitHub Actions and SonarQube, cutting
            deployment time by 30% and improving code quality with static
            analysis.
          </>,
          <>
            Collaborated with international stakeholders to deliver enterprise
            web applications aligned with client requirements.
          </>,
        ],
        images: [],
      },
      {
        company: "Kingteza Software Solutions (Pvt) Ltd",
        timeframe: "July 2024 - Jan 2025",
        role: "Associate Software Engineer",
        achievements: [
          <>
            Delivered scalable features for DVUE and Winlads; reduced deployment
            time by 30% through optimized CI/CD pipelines.
          </>,
          <>
            Architected and deployed AWS-based infrastructure (EC2, S3,
            CloudFront), enabling fast, scalable image delivery and optimization
            for high-traffic applications.
          </>,
        ],
        images: [],
      },
      {
        company: "Future Labs (Pvt) Ltd",
        timeframe: "Jan 2024 - March 2024",
        role: "Associate Software Engineer",
        achievements: [
          <>
            Led front-end development for Mtrada2 with React/Redux, improving UI
            responsiveness.
          </>,
          <>
            Integrated AWS backend services; supported containerized deployments
            with Docker and Kubernetes.
          </>,
          <>
            Worked with international stakeholders to deliver high-performance
            web applications, aligning technical solutions with client
            requirements.
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
            Developed back-end and front-end features for the PTE scoring engine
            using Python and Angular; integrated AWS and Stripe payments.
          </>,
          <>Assisted with ML model integration into production workflows.</>,
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
            Computer Networks, AI, and Machine Learning.
          </>
        ),
      },
      {
        name: "Sanghamitta Balika Vidyalaya, Galle",
        description: (
          <>
            G.C.E. Advanced Level - Physical Science (2018)
            <br />
            Results: 2A's, 1B
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
            Building modern, scalable web applications with React, Next.js, and
            Node.js ecosystem.
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
            name: "Express.js",
            icon: "express",
          },
          {
            name: "Angular",
            icon: "angular",
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
            AWS infrastructure management, containerization, and CI/CD pipeline
            automation.
          </>
        ),
        tags: [
          {
            name: "AWS",
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
        ],
        images: [],
      },
      {
        title: "Machine Learning & Deep Learning",
        icon: "rocket",
        description: (
          <>
            Advanced machine learning and deep learning expertise for AI model
            development, training, and deployment.
          </>
        ),
        tags: [
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
        description: "Skills: Python (Programming Language)",
        verificationUrl:
          "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
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
        verificationUrl: "https://www.hackerrank.com/certificates/f2166d230025",
      },
      {
        name: "Using Python to Access Web Data",
        issuer: "Coursera",
        date: "Jul 2020",
        credentialId: "694W3ZP7W44K",
        description: "Skills: Python (Programming Language)",
        verificationUrl:
          "https://www.coursera.org/account/accomplishments/certificate/694W3ZP7W44K",
      },
      {
        name: "Programming for Everybody (Getting Started with Python)",
        issuer: "Coursera",
        date: "Jun 2020",
        credentialId: "CCBD8R5MB7ED",
        description: "Skills: Python (Programming Language)",
        verificationUrl:
          "https://www.coursera.org/account/accomplishments/certificate/CCBD8R5MB7ED",
      },
      {
        name: "Python Data Structures",
        issuer: "Coursera",
        date: "Jun 2020",
        credentialId: "WRH9KSXR33QF",
        description: "Skills: Python (Programming Language) · Data Structures",
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
        description: "Skills: Confluence · Project Management",
        verificationUrl:
          "https://university.atlassian.com/student/award/NMEugicecepUhg35pHax4tam",
      },
      {
        name: "Jira Fundamentals Badge",
        issuer: "Atlassian",
        date: "Sep 2023",
        credentialId: "276886427",
        description:
          "Skills: Agile Methodologies · Project Management · Jira Software",
        verificationUrl:
          "https://university.atlassian.com/student/award/U4DwjETNMhGnZHvMGFsbq6vu",
      },
      {
        name: "Jira Project Management",
        issuer: "Great Learning",
        date: "2023",
        description: "Skills: Agile Methodologies · Jira Software",
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
          "Entertainment and Enlightenment Category, Project: Voice4U",
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
      name: "Kushan Manahara",
      role: "Machine Learning Engineer",
      company: "CML Insight",
      content:
        "I had the chance to study and work together with Avishka, and I've always admired her drive and determination. She's someone who learns new things really fast, takes responsibility seriously, and is always willing to go the extra mile to make things work. During our AI/ML research and development projects, her contributions played a big part in moving things forward and making them a success. On top of that, she's reliable, collaborative, and genuinely great to work with. I have no doubt she'll excel wherever she goes.",
      date: "Sept 2025",
      linkedinUrl: "https://linkedin.com/in/kushan-manahara",
       avatar: "/kushan.png",
    },
    {
      name: "Malitha Liyanage",
      role: "Software Engineer | AWS Certified Solutions Architect (Associate)",
      company: "Yaala Labs",
      content:
        "I had the pleasure of working with Avishka at Future Labs (Pvt) Ltd, and was impressed by her professionalism, adaptability, and collaborative mindset. She quickly learned React fundamentals, synced up with the team, and consistently delivered quality work. When given new tasks, she could figure out the requirements, design solutions, and implement them effectively, making her a key contributor to the team's success. She also has a strong interest and knowledge in AI, which adds great value to her technical skill set.",
      date: "Sept 2025",
      linkedinUrl: "https://linkedin.com/in/malitha-liyanage",
       avatar: "/malitha.jpeg",
    },
    {
      name: "Thakshila Jayathilake",
      role: "Associate Software Engineer",
      company: "Xigenix",
      content:
        "I had the privilege of working closely with Avishka during our university days, both on academic projects and beyond. One of the things I admire most about her is her ability to deliver her part of the work completely and calmly, never letting stress compromise the quality of what she produces. She collaborated with our team end-to-end, always bringing good ideas and a sense of responsibility, which taught the rest of us the value of balance. She's an intelligent, resourceful person, the kind of teammate who isn't easily replaced. Even outside academics, like during sports events, she showed the same dedication and commitment to the goal. I believe she would bring the same drive and reliability to any team she joins.",
      date: "Sept 2025",
       linkedinUrl: "https://www.linkedin.com/in/thakshila-jayathilake-5919b5213",
    },
    {
      name: "Tharaka Senevirathne",
      role: "Software Engineer | Masters in Information Technology, Software Engineering",
      company: "",
      content:
        "I have had the pleasure of working with Avishka, and I wholeheartedly recommend her for her exceptional technical expertise and problem-solving skills. She has consistently demonstrated a deep understanding of MERN, effectively tackling complex challenges with innovative solutions. Her ability to learn quickly, adapt to new technologies, and collaborate seamlessly with team members has made her an indispensable part of our team. She handles high-pressure situations with ease, consistently delivering results ahead of schedule. Avishka's professionalism, attention to detail, and proactive approach make her a valuable asset to any organization.",
      date: "Aug 2025",
      linkedinUrl: "https://linkedin.com/in/tharaka-senevirathne",
    },
    {
      name: "Muthuni De Alwis",
      role: "Software Engineer",
      company: "Sysco Labs",
      content:
        "Avishka is hardworking, responsible, and a quick learner with a strong work ethic, which makes her both dependable and inspiring. She naturally creates a positive and supportive environment and is always ready to help others, share her knowledge, and encourage her peers, making her a joy to work alongside. I'm certain that, Avishka will continue to make a positive impact and bring great value in any role she takes on.",
      date: "Aug 2025",
      linkedinUrl: "https://linkedin.com/in/muthuni-de-alwis",
       avatar: "/muthuni.jpeg",
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
