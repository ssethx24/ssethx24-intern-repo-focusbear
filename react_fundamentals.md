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

Screenshot showing Tailwind is working