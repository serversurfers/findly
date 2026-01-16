Here’s a **clean, beginner-friendly `README.md`** you can copy-paste directly into your repo.
It assumes **Next.js + pnpm**, and focuses on **fork → clone → run locally**.

---

````md
# Findly 🧭

**Findly** is a university-focused lost and found web application that helps students and staff report, search, and recover lost items easily.

This project is beginner-friendly and open-source. You can fork it, run it locally, and contribute even if you’re new to GitHub or Next.js.

---

## 🚀 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **pnpm** (package manager)
- **Vercel** (deployment)

---
📁 Project Conventions & Naming Guide

(Next.js – Frontend & Backend)

Goal: Make the codebase easy to read, easy to navigate, and hard to mess up, even for beginners.

1️⃣ General Naming Rules (Applies Everywhere)
✅ Use lowercase + kebab-case for folders
auth-form
user-profile
learning-insights
api-client


❌ Avoid:

AuthForm
authForm
auth_form

✅ Use camelCase for variables & functions
getUserProfile()
isAuthenticated
fetchLearningInsights

✅ Use PascalCase for:

React components

Types & Interfaces

Classes

UserCard
NavLink
LearningInsight

✅ File purpose should be obvious from the name

Good:

user-card.tsx
login-form.tsx
fetch-user.ts
create-session.ts


Bad:

utils.ts
helper.ts
test.ts
file1.ts

2️⃣ Frontend (Next.js App Router)
📂 Folder Structure (Recommended)
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
│
├── (dashboard)/
│   ├── page.tsx
│   └── settings/
│       └── page.tsx
│
├── api/
│   └── auth/
│       └── route.ts
│
├── layout.tsx
├── page.tsx
└── globals.css

🧠 Rules

(auth) & (dashboard) are route groups (not part of URL)

page.tsx = route

layout.tsx = layout wrapper

route.ts = backend API

3️⃣ Components Convention
components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   └── modal.tsx
│
├── navigation/
│   ├── nav-bar.tsx
│   └── nav-link.tsx
│
├── auth/
│   ├── login-form.tsx
│   └── register-form.tsx
│
└── shared/
    ├── logo.tsx
    └── empty-state.tsx

Component file rules:

One component per file

File name matches component name (kebab-case)

// nav-link.tsx
export function NavLink() {}

4️⃣ Backend (Next.js API Routes)
📂 API Structure
app/api/
├── auth/
│   ├── login/
│   │   └── route.ts
│   ├── logout/
│   │   └── route.ts
│   └── register/
│       └── route.ts
│
├── users/
│   └── route.ts
│
└── learning-insights/
    └── route.ts

HTTP method clarity
export async function GET() {}
export async function POST() {}
export async function DELETE() {}

5️⃣ Business Logic (Backend & Shared)
lib/
├── auth/
│   ├── create-session.ts
│   ├── verify-session.ts
│   └── hash-password.ts
│
├── users/
│   ├── get-user.ts
│   └── update-user.ts
│
└── learning-insights/
    ├── generate-insights.ts
    └── fetch-insights.ts

Rule:

Routes should be thin. Logic lives in lib/.

6️⃣ Types & Interfaces
types/
├── user.ts
├── session.ts
├── learning-insight.ts
└── api-response.ts

// types/user.ts
export interface User {
  id: string;
  email: string;
  createdAt: string;
}

7️⃣ Hooks Convention
hooks/
├── use-auth.ts
├── use-user.ts
└── use-learning-insights.ts


Rules:

Must start with use

One hook per file

8️⃣ Utility & Helpers
utils/
├── cn.ts            // className helper
├── format-date.ts
├── api-client.ts


Avoid dumping everything in one file.

9️⃣ Environment & Config
config/
├── site.ts
├── auth.ts
└── routes.ts

// config/routes.ts
export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
};

🔟 Git & PR Conventions (Beginner Friendly)
Branch names
feature/login-form
fix/navbar-alignment
chore/update-deps

Commit messages
feat: add login form
fix: correct session validation
refactor: simplify auth logic

🧩 Beginner Golden Rules (Put this in bold)

❗ Don’t create utils.ts

❗ Don’t mix UI & business logic

❗ Name files by what they do

❗ If unsure, follow existing patterns

✅ Small PRs > Big PRs

✅ Ask before refactoring

---
## 📦 Getting Started (Beginner Guide)

Follow these steps carefully 👇

---

## 1️⃣ Fork the Repository (YOU DON'T NEED TO FORK IF I HAVE ADDED YOU ON PROJECT)

1. Click the **Fork** button (top-right of this page)
2. This creates your own copy of the project under your GitHub account
3. [SKIP THIS FORK STEP] IF YOU ARE A MEMBER OR I HAVE ADDED YOU ON THE PROJECT

---

## 2️⃣ Clone the Project to Your Laptop

Open your terminal (Command Prompt / PowerShell / Terminal) and run:

```bash
git clone https://github.com/YOUR-USERNAME/findly.git
````

Replace `YOUR-USERNAME` with your GitHub username.

Then move into the project folder:

```bash
cd findly
```

---

## 3️⃣ Install pnpm (If Not Installed)

Check if pnpm is installed:

```bash
pnpm --version
```

If not installed, install it globally:

```bash
npm install -g pnpm
```

---

## 4️⃣ Install Project Dependencies

Inside the project folder, run:

```bash
pnpm install
```

This will download all required packages.

---

## 5️⃣ Run the Project Locally

Start the development server:

```bash
pnpm dev
```

You should see something like:

```
Local: http://localhost:3000
```

Open your browser and go to:

👉 **[http://localhost:3000](http://localhost:3000)**

🎉 You’re running Findly locally!

---

## 📁 Project Structure (Simple Overview)

```
app/            → Pages and routes
components/     → Reusable UI components
public/         → Static assets
```

---

## 🧪 Common Commands

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm start` | Run production build     |

---

## 🤝 Contributing

Contributions are welcome!

Basic flow:

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Push to your fork
5. Open a Pull Request

No contribution is too small — even fixing typos helps 🙌

---

## 📄 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute this project.

---

## 💬 Support

If you’re stuck:

* Open an issue
* Ask in the team group
* Or ask for help — beginners are welcome!

---


Built with ❤️ By serversurfers.

