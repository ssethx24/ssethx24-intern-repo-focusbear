# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ssethx24-intern-repo-focusbear
This is Shaurya Seth's public repo as a focus bear intern. 


7️⃣ README.md for GitHub (Tailwind Setup)

# React + Tailwind CSS Setup

## Steps I Followed
1. **Created React project with Vite**
   npm create vite@latest my-tailwind-app --template react
   cd my-tailwind-app
   npm install
Installed Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configured Tailwind (tailwind.config.js)

js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}
Added Tailwind directives in src/index.css:

css

@tailwind base;
@tailwind components;
@tailwind utilities;
Tested Tailwind by adding classes in App.jsx.

Ran project:
npm run dev
Verification
Styled heading appeared with Tailwind styles applied.

No CSS errors in console.

Screenshot verifying the setup

![alt text](image-20.png)
Tailwind is working!!