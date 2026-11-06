import { Link } from "react-router-dom";
import { Button, Chip } from "@mui/material";
import { ArrowForward, GitHub, LinkedIn, Code } from "@mui/icons-material";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { profile, projects, skills } from "../data/portfolioData";
import SchoolIcon from "@mui/icons-material/School";

export default function Home() {
  const featuredSkills = [
    "Java",
    "Spring Boot",
    "React.js",
    "REST APIs",
    "PostgreSQL",
    "Hibernate/JPA",
  ];
  return (
    <div className="page home-page">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <span className="availability">
            <i /> OPEN TO FRESHER OPPORTUNITIES
          </span>
          <p className="hero-intro">Hello, I'm</p>
          <h1>
            {profile.name}
            <span></span>
          </h1>
          <h2>
            {profile.role}
            <br />
            <em>{profile.subtitle}</em>
          </h2>

          <p className="hero-description">{profile.summary}</p>
          <div className="hero-actions">
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              endIcon={<ArrowForward />}
            >
              Explore my work
            </Button>
            <Button component={Link} to="/contact" variant="outlined">
              Let's connect
            </Button>
          </div>
          <div className="social-row">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <Code />
            </a>
            <span className="social-divider" /> <span>{profile.location}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-monogram">
            <span>Y</span>
            <small>JAVA · REACT · BUILD</small>
          </div>
          <div className="floating-card card-top">
            <span>01 / BACKEND</span>
            <strong>Java & Spring Boot</strong>
          </div>
          <div className="floating-card card-bottom">
            <span>02 / FRONTEND</span>
            <strong>React.js & MUI</strong>
          </div>
          <div className="visual-dot dot-one" />
          <div className="visual-dot dot-two" />
        </div>
        <div className="education">
          <h2>EDUCATION</h2>

          <div className="education-card">
            <div className="education-icon">
              <SchoolIcon />
            </div>

            <div className="education-content">
              <span className="education-year">2022 – 2026</span>

              <h3>S J C Institute of Technology</h3>

              <h5>Electronics and Communication Engineering</h5>

              <p>Bachelor of Engineering</p>

              <div className="education-details">
                <span>CGPA: 7.8</span>
                <span>Chickballapur, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-strip">
        <div className="section-wrap tech-strip-inner">
          <span>TECH I WORK WITH</span>
          {featuredSkills.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
      </section>

      <section className="section-wrap content-section">
        <SectionTitle
          eyebrow="A LITTLE INTRO"
          title="Building ideas into applications."
          text="I enjoy working across the full stack — from designing clean user interfaces to developing backend logic and APIs."
        />
        <div className="intro-grid">
          <div className="intro-panel">
            <span className="panel-index">01 — WHO I AM</span>
            <h3>
              Curious developer.
              <br />
              <em>Practical problem solver.</em>
            </h3>
            <p>
              My foundation is in Electronics and Communication Engineering, and
              my focus is software development with Java, Spring Boot and React.
            </p>
            <Button component={Link} to="/about" endIcon={<ArrowForward />}>
              More about me
            </Button>
          </div>
          <div className="quick-skills">
            {skills.slice(0, 4).map((group, index) => (
              <div className="quick-skill" key={group.title}>
                <span>0{index + 1}</span>
                <div>
                  <h4>{group.title}</h4>
                  <p>{group.items.slice(0, 5).join(" · ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap content-section">
        <SectionTitle
          eyebrow="SELECTED WORK"
          title="Projects I've worked on."
          text="A selection of applications that demonstrate my frontend, backend and full-stack development practice."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="center-action">
          <Button component={Link} to="/projects" endIcon={<ArrowForward />}>
            View all project details
          </Button>
        </div>
      </section>
      <section className="cta-band section-wrap">
        <div>
          <span className="eyebrow">HAVE AN OPPORTUNITY?</span>
          <h2>
            Let's build something
            <br />
            <em>meaningful together.</em>
          </h2>
        </div>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<ArrowForward />}
        >
          Get in touch
        </Button>
      </section>
    </div>
  );
}
