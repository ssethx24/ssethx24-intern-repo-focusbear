# AI Usage Guidelines – Focus Bear

## Research & Learn

### What AI tools are typically used for your role?

As a front-end developer intern, some commonly used AI tools include:
- **GitHub Copilot** – for code completion and suggestions while coding
- **ChatGPT** – for debugging help, explaining new concepts, and boilerplate generation
- **Claude AI** – for reviewing or rewriting large chunks of code or documentation

### What are the benefits and risks of using AI in a professional setting?

**Benefits:**
- Faster development through autocomplete and code suggestions
- Clearer understanding of unfamiliar topics or libraries
- Reduced time spent writing boilerplate or repetitive code

**Risks:**
- Inaccurate or outdated code suggestions
- Blindly trusting outputs without validation
- Potential for **leaking sensitive data** if code or internal information is pasted into public tools, especially the codebase. 

### What types of information should never be entered into AI tools?

- Any **confidential company information** (e.g., source code, credentials, API keys, internal documents)
- **User data or private customer information**
- Details about unreleased features or strategy
- Anything not already public or covered by proper agreements (e.g., open-source)

### How can you fact-check and validate AI-generated content?

- **Run and test the code** before using it in production
- **Cross-check explanations** with official docs (e.g., React, MDN, TypeScript)
- **Ask a teammate or senior developer** to review AI-assisted code if unsure
- Treat AI suggestions as a *starting point*, not final answers


## Reflection

### When should you use AI for assistance, and when should you rely on your own skills?

I use AI when I’m stuck on syntax, need to write boilerplate, or want a quick explanation of a concept. But I rely on my own judgment when reviewing logic, implementing features, or making UI decisions — especially when user experience is involved.

### How can you avoid over-reliance on AI while still benefiting from it?

By using AI as a helper, not a crutch. I try to understand the “why” behind AI’s suggestion instead of just copy-pasting it. If I can’t explain it myself, I either research it further or ask for clarification before using it.

### What steps will you take to ensure data privacy when using AI tools?

- Never paste sensitive code, user data, or internal docs into AI tools
- Stick to **generic questions or isolated code examples** when using public tools like ChatGPT or Claude
- Prefer internal tools or company-approved environments for anything private
- Ask before using AI tools on sensitive tasks

---

## Task – Using AI Responsibly

### Task I Tried:
I used ChatGPT to generate a basic React component that fetches data from an API and displays a list.

### Was Editing or Fact-Checking Needed?
Yes. The initial response included:
- A deprecated way of handling async in `useEffect`. 
- No error handling
- Hardcoded placeholder URLs (in GPT 3.5 )

I updated the code to use proper loading/error states and added types with TypeScript.
GPT 4.0 gave exactly the correct code. 

### One Best Practice I’ll Follow:
> **Always review and edit AI-generated code before using it in a project — treat it like a draft, not the final version**
AI is an amazing tool for learning and boosting productivity, but it should always be used thoughtfully. As an intern, I want to build good habits early — balancing AI assistance with my own growth and responsibility.
 