import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <AppBar position="sticky" elevation={0} className="site-header">
      <Toolbar className="nav-toolbar">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Y<span>.</span>SL
        </NavLink>
        <nav className={open ? "nav-links nav-links-open" : "nav-links"}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            component="a"
            href="/Yashwanth-Resume.pdf"
            download
            variant="contained"
            className="resume-btn"
          >
            Download CV
          </Button>
        </nav>
        <IconButton
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
