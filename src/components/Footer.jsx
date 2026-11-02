import { profile } from "../data/portfolioData";
export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & built by <strong>{profile.name}</strong>
      </p>
      <span>© {new Date().getFullYear()} · Keep learning. Keep building.</span>
    </footer>
  );
}
