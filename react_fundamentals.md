### Reflection: Why are components important in React?

Components are important in React because they let you split your user interface into smaller, reusable parts. 

Instead of working with one big file, you can build your app from simple building blocks that each handle their own piece of the UI. This makes your code easier to understand, update, and reuse in different places. 

Overall, using components helps keep your project organized and makes it easier to build and maintain even as the app grows. 

NOTE: My application is in my-react-app folder. 

![alt text](image.png)
(This is how it looks like)

# react_fundamentals.md — Tailwind Setup Reflection

## What challenges did I face during setup?
1. **Choosing the right React starter template**  
   - CRA works but is heavier; I chose Vite for faster builds and easier Tailwind setup.
2. **Configuring `tailwind.config.js` content paths**  
   - Initially forgot to include `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`, so styles didn’t apply. Fixed by updating the content array.
3. **CSS entry point issues**  
   - Forgot to import `index.css` in `main.jsx`, so Tailwind utilities didn’t load. Added `import './index.css';` in the entry file.
4. **Validating Tailwind was actually running**  
   - Confirmed by creating a simple `bg-blue-50 text-4xl` heading and seeing changes in real time.

## Lessons Learned
- Always double-check Tailwind’s content configuration — missing paths = no styles.
- Import your Tailwind CSS file in the root JS/TS entry point.
- Test with visible, obvious classes to confirm Tailwind is active before deeper work.

## README Evidence
A **detailed `README.md`** with setup steps and screenshot evidence is located at:  

C:\Users\shaur\Desktop\Focus Bear Repo Intern\ssethx24-intern-repo-focusbear\README.md 
![
](image-21.png)

Screenshot showing Tailwind is working. Commit ID: ad196f6eb74c63eab235b6a3a88055c6868ccdc4 

Reflection – React Router Setup
Commit ID: 384c75f80fd3e6fdee13d3ce309e9bffaef7a0e9

Files Created / Modified
src/index.js –

Wrapped the <App /> component with <BrowserRouter> from react-router-dom to provide routing context.

This ensures that <Link> and <Routes> inside App.js work without errors.

src/App.js –

Added navigation links using <Link> from react-router-dom.

Added <Routes> with <Route> components for two pages: Home and Profile.

Integrated routing with your existing i18n, hooks demos (useCallback, useMemo, useEffect), and API demo.

src/pages/Home.js (new) –

Created a simple Home page component for routing demonstration.

src/pages/Profile.js (new) –

Created a simple Profile page component for routing demonstration.

What are the advantages of client-side routing?
Faster navigation –
Pages load instantly without a full server request; only the changed UI is rendered.

Smooth user experience –
No page refresh flicker, keeping state (like form inputs) intact between navigations.

Reduced server load –
Since navigation happens in the browser, the server doesn’t need to re-render the whole page on each route change.

More control over transitions & state –
You can manage animations, preserve component state, and fetch data only when necessary.

Single Page Application (SPA) benefits –
Allows building apps that feel like native applications with dynamic content updates.

screenshots for evidence:
Home page: ![alt text](image-25.png)
Profile page: ![alt text](image-26.png)