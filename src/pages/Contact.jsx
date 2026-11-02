import { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import {
  Email,
  Phone,
  LinkedIn,
  GitHub,
  ContentCopy,
} from "@mui/icons-material";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
  };
  return (
    <div className="page inner-page section-wrap contact-page">
      <SectionTitle
        eyebrow="CONTACT"
        title="Have a role or project in mind?"
        text="I'm open to entry-level software development opportunities and conversations about building useful products."
      />
      <div className="contact-grid">
        <div className="contact-message">
          <span className="eyebrow">LET'S TALK</span>
          <h2>
            Good things start with a <em>conversation.</em>
          </h2>
          <p>
            Feel free to reach out for fresher opportunities, internships or
            professional connections.
          </p>
          <Button
            variant="contained"
            href={`mailto:${profile.email}`}
            startIcon={<Email />}
          >
            Send an email
          </Button>
        </div>
        <div className="contact-list">
          <a href={`mailto:${profile.email}`}>
            <Email />
            <div>
              <span>EMAIL</span>
              <strong>{profile.email}</strong>
            </div>
          </a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
            <Phone />
            <div>
              <span>PHONE</span>
              <strong>{profile.phone}</strong>
            </div>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedIn />
            <div>
              <span>LINKEDIN</span>
              <strong>linkedin.com/in/yashwanth-s-l</strong>
            </div>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitHub />
            <div>
              <span>GITHUB</span>
              <strong>github.com/Yashwanthsl09</strong>
            </div>
          </a>
          <Button onClick={copyEmail} startIcon={<ContentCopy />}>
            Copy email address
          </Button>
          {copied && <Alert severity="success">Email copied.</Alert>}
        </div>
      </div>
    </div>
  );
}
