import SectionTitle from "../components/SectionTitle";
import { skills, education, certifications } from "../data/portfolioData";
import { School, WorkspacePremium, EmojiEvents } from "@mui/icons-material";

export default function About() {
  return (
    <div className="page inner-page section-wrap">
      <SectionTitle
        eyebrow="ABOUT ME"
        title="A developer focused on learning and building."
        text="My background, technical toolkit and learning journey."
      />
      <div className="about-intro">
        <div className="about-letter">
          Y<span>.</span>
        </div>
        <div>
          <h3>Hi, I'm Yashwanth.</h3>
          <p>
            I'm an Electronics and Communication Engineering graduate interested
            in software development. I work with Java and the Spring ecosystem
            for backend development, and React.js for building responsive
            frontend experiences. I value clean code, continuous learning and
            solving problems step by step.
          </p>
        </div>
      </div>
      <section className="content-section">
        <SectionTitle
          eyebrow="TECHNICAL TOOLKIT"
          title="Skills & technologies"
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionTitle eyebrow="EDUCATION" title="Academic background" />
        <div className="timeline">
          {education.map((item) => (
            <div className="timeline-item" key={item.school}>
              <div className="timeline-icon">
                <School />
              </div>
              <div>
                <span className="timeline-period">{item.period}</span>
                <h3>{item.course}</h3>
                <h4>{item.field}</h4>
                <p>
                  {item.school} · {item.place}
                </p>
                <strong>{item.result}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionTitle
          eyebrow="CERTIFICATIONS & TRAINING"
          title="Learning journey"
        />
        <div className="credential-grid">
          {certifications.map((item) => (
            <div className="credential-card" key={item.title}>
              <WorkspacePremium />
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.provider}</h4>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="achievement">
        <EmojiEvents />
        <div>
          <span className="eyebrow">ACHIEVEMENT</span>
          <h3>State-Level Badminton Championship</h3>
          <p>
            Represented Karnataka at the State-Level Badminton Championship,
            demonstrating athletic performance and teamwork.
          </p>
        </div>
      </section>
    </div>
  );
}
