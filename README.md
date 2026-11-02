# Yashwanth S L — React Portfolio

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. In the project terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Build for deployment
```bash
npm run build
npm run preview
```

## Project structure
- `src/App.jsx` — React Router routes only
- `src/main.jsx` — React entry point, MUI theme and BrowserRouter
- `src/components/` — reusable Navbar, Footer, SectionTitle and ProjectCard
- `src/pages/` — Home, About, Projects, Contact and NotFound pages
- `src/data/portfolioData.js` — resume details, skills, education and project content
- `src/styles/` — global styles split into layout, components and page styles

## Important customizations
- Resume content is populated from the uploaded resume. Review all details before publishing.
- Put your final resume PDF at `public/Yashwanth-Resume.pdf` for the Download CV button.
- Add actual GitHub repository/demo links to projects when available. The current project cards intentionally do not invent project URLs.
- The contact page uses your resume email, phone, LinkedIn, GitHub and LeetCode details.
- CSS is split into files and uses native nested CSS rules in component/page styles. Modern browsers support CSS nesting.

## Notes
- Contact form is intentionally not included: the email button opens the visitor's email app, avoiding a fake form that cannot send messages without a backend.
- This is a frontend-only portfolio. Do not place secrets or API keys in the React source.
