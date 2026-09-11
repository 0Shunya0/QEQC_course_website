# QEQC Course Website

A minimal course archive website for Quantum Entanglement & Quantum Computing material, built with React and Vite.

## Included sections

- Course Material
- Question Bank
- TA Notes

Each unit and topic keeps course resources organized so slides, notes, lab notebooks, and PDFs can be added easily.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

This project is configured for GitHub Pages with the Vite base path set for:

https://0shunya0.github.io/QEQC_course_website/

A GitHub Actions workflow is included in `.github/workflows/deploy.yml` to build and deploy the site automatically on pushes to the `main` branch.

## Repository structure

- `src/` – React app code and pages
- `public/resources/` – static course assets
- `dist/` – production build output
- `.github/workflows/` – deployment automation

## Notes

- The site is intentionally minimal and academic in style.
- PDFs and other resources are kept under `public/resources/` so they can be served correctly from GitHub Pages.
