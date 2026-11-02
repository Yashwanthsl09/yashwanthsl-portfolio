export const profile = {
  name: "Yashwanth S L",
  role: "React.js Developer",
  subtitle: "Java Full Stack Developer",
  location: "Karnataka, India",
  email: "yashwanthsl2005@gmail.com",
  phone: "+91 8971530057",
  linkedin: "https://linkedin.com/in/yashwanth-s-l",
  github: "https://github.com/Yashwanthsl09",
  leetcode: "https://leetcode.com/u/Yashwanth09_2005",
  summary: "Electronics and Communication Engineering graduate with hands-on experience in Java, Spring Boot, REST API development, SQL, Hibernate/JPA, and React.js. Interested in building useful, responsive applications and reliable backend services."
};

export const skills = [
  { title: "Programming", items: ["Java"] },
  { title: "Backend", items: ["Spring Core", "Spring Boot", "Spring MVC", "Spring Security", "JDBC", "Servlets", "REST APIs", "JWT"] },
  { title: "ORM & Database", items: ["Hibernate", "JPA", "Spring Data JPA", "MySQL", "PostgreSQL", "Oracle"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Tools & Concepts", items: ["Git", "GitHub", "Postman", "Swagger", "Docker", "Eclipse", "VS Code", "OOP", "DSA"] }
];

export const projects = [
  {
    id: "nexmart", number: "01", title: "NexMart", category: "Frontend / E-Commerce",
    description: "A responsive e-commerce web application with product categories, reusable React components and dynamic navigation.",
    details: "Built the interface with React, JavaScript, HTML and CSS. Used React Router for navigation, Material UI and Bootstrap for UI elements, and React Toastify for user notifications. Developed with Vite.",
    stack: ["React.js", "JavaScript", "React Router", "MUI", "Bootstrap", "Vite"],
    status: "Personal project",
    link:"https://github.com/Yashwanthsl09/nexmart"
  },
  {
    id: "coldchainhub", number: "02", title: "ColdChainHub", category: "Full Stack / Marketplace",
    description: "A cold-storage marketplace concept that supports warehouse listing, availability management and booking workflows.",
    details: "Built with HTML, CSS, JavaScript, Spring Framework and PostgreSQL. Implemented backend functionality for warehouse and booking workflows with PostgreSQL-based data persistence.",
    stack: ["Java", "Spring Framework", "JavaScript", "PostgreSQL", "HTML", "CSS"],
    status: "Personal project",
    link:"https://github.com/Yashwanthsl09/ColdChainHub"
  },
  {
    id: "jobtracker", number: "03", title: "AI-Powered Smart Job Application & Interview Tracker", category: "Full Stack / Workflow",
    description: "A full-stack application designed to manage job applications, interviews and preparation activities in one workflow.",
    details: "Built using Spring Boot, React.js, PostgreSQL, Spring Security, JWT and Hibernate/JPA. Implemented REST APIs, authentication, interview scheduling, preparation tracking, feedback and application status management.",
    stack: ["Java", "Spring Boot", "Spring Security", "React.js", "PostgreSQL", "JWT", "Swagger"],
    status: "Personal project"
  }
];

export const education = [
  { course: "Bachelor of Engineering", field: "Electronics and Communication Engineering", school: "SJC Institute of Technology", period: "2022 – 2026", result: "CGPA: 7.8", place: "Chickballapur, Karnataka" },
  { course: "Pre-University Education", field: "", school: "Presidency PU College", period: "2020 – 2022", result: "81.83%", place: "Sira, Karnataka" }
];

export const certifications = [
  { title: "Java Full Stack Developer", provider: "QSpiders", period: "Jan 2026 – Present", note: "Currently pursuing training. Modules covered include Core Java, OOP, SQL & MySQL, Data Structures, HTML, CSS, JavaScript and React.js." },
  { title: "Java Fundamentals", provider: "Coursera", period: "Completed", note: "Fundamentals of Java programming, object-oriented programming and core programming concepts." }
];