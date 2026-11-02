import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/portfolioData";
import { GitHub, ArrowOutward } from "@mui/icons-material";
import { Chip } from "@mui/material";

export default function Projects() {
  return (
    <div className="page inner-page section-wrap">
      <SectionTitle
        eyebrow="MY WORK"
        title="Projects & practical experience."
        text="Applications built while exploring frontend development, backend services, databases and full-stack workflows."
      />
      <div className="project-detail-list">
        {projects.map((project) => (
          <article className="project-detail" key={project.id}>
            <div className="detail-number">{project.number}</div>
            <div className="detail-content">
              <span className="project-category">{project.category}</span>
              <h2>
                <a href={project.link} style={{ cursor: "pointer" }}>
                  {project.title}
                </a>
              </h2>
              <p className="detail-lead">{project.description}</p>
              <p>{project.details}</p>
              <div className="chip-list">
                {project.stack.map((item) => (
                  <Chip key={item} label={item} size="small" />
                ))}
              </div>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="detail-side">
              <a href={project.link} style={{ cursor: "pointer" }}>
                <GitHub />
              </a>
              <span>
                <a href={project.link} style={{ cursor: "pointer" }}>
                  PROJECT
                </a>
              </span>
              <strong>{project.number}</strong>
            </div>
          </article>
        ))}
      </div>
      <p className="project-note">
        Project descriptions are based on the information listed in my resume.
        Add repository and live-demo links when you publish each project.
      </p>
      <p> - click project name and GitHub logo to visit the project</p>
    </div>
  );
}
