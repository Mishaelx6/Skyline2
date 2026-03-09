# Skyline2 / Skilline Project Overview

This document describes the current state of the **Skyline2** workspace, which implements a front‑end for a hypothetical online learning platform called **Skilline**.  It is intended to capture what we are building and highlight accomplishments to date.

---

## 🎯 Goal

Build a modern, responsive educational web application using **Next.js (App Router)** and **Tailwind CSS**.  The primary concepts are:

1. Marketing pages explaining the product.
2. A simple authentication flow separating **students** and **instructors**.
3. A role‑based portal/dashboard for each user type.

No backend or persistent data store has been connected yet; the focus so far has been on UI, routing and layout.

---

## 🧱 Current Features & Structure

### 1. Marketing / Public Site
- `app/page.tsx` (home) composes multiple reusable components:
  - `Header`, `Features`, `InfoSection`, `ExtraFeatures`, `Integrations`, `Testimonial`
- Additional content pages under `app/about`, `app/blog`, `app/careers`.
- Responsive navbar and footer components (`Navbar.tsx`, `Footer.tsx`, `ConditionalNavbar`, `ConditionalFooter`).
- Tailwind‑powered hero sections with background images and animations.

### 2. Authentication Flow
- `/signup` and `/login` landing pages prompting role selection.
- Dynamic subroutes (`signup/[role]` and `login/[role]`) for `student` and `instructor`.
- Client‑side React components handle form state and submission; currently log to console and redirect to portal.

### 3. Role‑Based Portals
- `/portal/[role]` page renders a dashboard based on the user’s role:
  - **Student** sees sections for courses, progress, settings.
  - **Instructor** sees classes, course creation, reports.
- Shared layout with sidebar navigation and logout link.
- No real data; placeholders indicate where functionality will appear.

### 4. Layout & Styling
- Global fonts imported via `next/font/google` (Geist & Geist_Mono).
- `globals.css` includes base Tailwind and custom utilities.
- Each section uses common utility classes for spacing, colors, typography.
- Mobile‑first design with responsive breakpoints (`lg`, `sm`, etc.).

---

## 🛠 Technical Stack

- **Framework:** Next.js 14+ with the App Router
- **Styling:** Tailwind CSS (configured via `tailwind.config.ts`)
- **TypeScript:** Strict mode in use (`tsconfig.json`)
- **Fonts:** `next/font` for optimized Google fonts
- **Images:** `next/image` for responsive media

---

## ✅ Achievements So Far

- Scaffolded a full Next.js project with comprehensive routing.
- Implemented a two‑step signup/login process with role selection.
- Built reusable UI components and layouts across the app.
- Added polished visual design (gradients, animated bubbles, etc.) without external libraries.
- Structured the codebase to easily add server/API logic later.

---

## 🚧 Next Steps / Roadmap

1. **Backend & Authentication**
   - Added a simple in‑memory user store (`lib/users.ts`) with password hashing.
   - Created API route (`/api/auth/signup`) for registration and wired signup forms.
   - Integrated [NextAuth](https://next-auth.js.org/) for credentials and Google providers, with JWT sessions and role propagation.
   - Protected portal routes using `getServerSession` and role-based redirect logic.
   - Forms now call the backend and use `signIn`/`signOut` helpers; Google sign‑in supported.
2. **Data Models**
   - Define course, user, enrollment, and progress schemas.
   - Integrate with a database (Postgres, MongoDB, Fauna, etc.).
3. **Dashboard Functionality**
   - Allow students to browse and enroll in courses.
   - Enable instructors to create/edit courses and view analytics.
4. **Access Control**
   - Protect `/portal` routes server‑side based on authentication.
   - Redirect unauthorized users to `/login`.
5. **Testing & CI**
   - Add unit/end‑to‑end tests for pages and components.
   - Configure GitHub Actions or similar pipeline.
6. **Deployment**
   - Deploy to Vercel or another hosting provider.
   - Set up environment variables for API keys, database URLs.

---

> This overview should help team members (or future contributors) quickly understand what the project is, how it’s structured and what has been built.  Feel free to update this document as new capabilities are added.

---

*Last updated: March 2026.*
