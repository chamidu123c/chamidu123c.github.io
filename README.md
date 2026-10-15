# Chamidu Manthilaka | Portfolio

Personal portfolio website of **Chamidu Manthilaka**, an Information Technology undergraduate at SLIIT seeking a software engineering internship.

**Live site:** https://chamidu123c.github.io

## About

A single-page portfolio that presents my skills, projects, education and contact details. It is built with React and Tailwind CSS, and it is responsive from mobile to desktop.

## Sections

- **Hero:** introduction, photo and quick links to GitHub and LinkedIn
- **About me:** summary, studies, languages and certificate
- **Skills:** languages, frontend, backend, databases, tools and soft skills
- **Projects:** expandable details for each project
- **Education:** timeline from O/Levels to my current degree
- **Contact:** email, phone, GitHub and LinkedIn

## Projects featured

| Project | Description | Tech |
| --- | --- | --- |
| AgroLanka | Agriculture management system for web and mobile with an AI crop identifier | MongoDB, Express.js, React, React Native, Node.js |
| Online Tour Guide System | Tour booking and management system with role-based dashboards | Java, JSP, Servlets, JDBC, MySQL, Apache Tomcat |
| WellnessPath | Wellness management web system | HTML, CSS, JavaScript, PHP |

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment to GitHub Pages

## Getting started

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/chamidu123c/chamidu123c.github.io.git
cd chamidu123c.github.io

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the site into the `dist` folder |
| `npm run preview` | Previews the production build locally |
| `npm run deploy` | Builds the site and publishes it to GitHub Pages |

## Project structure

```
portfolio/
├── public/
│   ├── Myphoto.png
│   └── favicon/
│       ├── favicon.svg
│       ├── favicon.ico
│       ├── favicon-32.png
│       └── apple-touch-icon.png
├── src/
│   ├── App.jsx
│   ├── Portfolio.jsx    # all page content and layout
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Updating the content

All text on the site (name, summary, skills, projects, education and contact details) is stored in data objects at the top of `src/Portfolio.jsx`. Edit them there and the layout updates automatically.

## Deployment

### Option 1: GitHub Actions (Recommended - Automatic)

The repository includes a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In your GitHub repository, navigate to **Settings → Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Every time you push to the `main` branch, your portfolio is automatically built and deployed to https://chamidu123c.github.io.

### Option 2: Manual deployment with `gh-pages`

```bash
npm run deploy
```

Then in **Settings → Pages**, set the source to **Deploy from a branch**, select `gh-pages` and `/ (root)`.

## Contact

- Email: chamidumanthilaka888@gmail.com
- GitHub: [github.com/chamidu123c](https://github.com/chamidu123c)
- LinkedIn: [chamidu-manthilaka](https://linkedin.com/in/chamidu-manthilaka-0497a7249)

## License

&copy; Chamidu Manthilaka. All rights reserved.