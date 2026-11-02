import { Link } from "react-router-dom";
import { ArrowOutward, CodeRounded } from "@mui/icons-material";
import { Chip, Button } from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <CodeRounded />
      </div>
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="chip-list">
        {project.stack.map((item) => (
          <Chip key={item} label={item} size="small" />
        ))}
      </div>
      <Button
        component={Link}
        to="/projects"
        endIcon={<ArrowOutward />}
        className="text-link"
      >
        Explore project
      </Button>
    </article>
  );
}
