# Riyadvi Software Technologies — Digital Growth Partner

A premium, dynamic corporate website concept for Riyadvi Software Technologies. The experience positions Riyadvi as a technology and digital solutions partner — not simply a software vendor — through a connected visual language of gold, ink, depth, systems and momentum.

## What is included

- **Multi-page routing** with reusable templates rather than a single landing page.
- **Responsive design** for desktop, tablet and mobile.
- **Interactive visual system** with Three.js, React Three Fiber, Drei, Motion and Lenis.
- **Dynamic service architecture** for six services and individual service pages.
- **Dynamic portfolio architecture** for ten case studies and individual case-study pages.
- **Dynamic blog architecture** with search, categories, tags, featured article and individual posts.
- **Dynamic careers architecture** with department filters, job details and application flows.
- **Functional backend** with tRPC procedures, Zod validation and Drizzle ORM.
- **MySQL/TiDB persistence** for contact enquiries, consultation requests, health checkups, guide leads and career applications.
- **Lead-generation journeys** for consultation, business health checkup and software project planning guide.
- **Admin overview** at `/admin` for lead counts and recent submissions.
- **Performance strategy** with a lazy-loaded Three.js scene, responsive rendering and reduced visual density on mobile.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with interactive digital ecosystem, process rail, technology constellation and selected work |
| `/services` | Six core capabilities |
| `/services/:slug` | Reusable service detail template |
| `/portfolio` | Dynamic portfolio grid |
| `/portfolio/:slug` | Dynamic case study template |
| `/about` | Riyadvi story, values and timeline since 2021 |
| `/blog` | Searchable insights hub |
| `/blog/:slug` | Individual article page |
| `/careers` | Filterable job listing |
| `/careers/:slug` | Job detail and application form |
| `/contact` | Contact and consultation conversion routes |
| `/business-health-checkup` | Five-step business assessment lead form |
| `/software-project-planning-guide` | Lead magnet capture flow |
| `/admin` | Lead operations overview |

## Technology stack

### Frontend

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Wouter routing
- Motion for hero entrance choreography
- Lenis for smooth scrolling
- Three.js through React Three Fiber
- Drei helpers (`Float`, `OrbitControls`)
- Lucide icons

### Backend

- Node.js + Express runtime through the WebDev full-stack scaffold
- tRPC 11 for typed procedures
- Zod for request validation
- Drizzle ORM
- MySQL/TiDB
- Manus OAuth scaffold for future authenticated operations

### Data model

- `contact_submissions`
- `consultation_requests`
- `health_checkup_leads`
- `lead_magnet_leads`
- `career_applications`
- `users` (provided auth model)

## Backend procedures

The frontend calls typed procedures under `trpc.leads`:

- `leads.contact`
- `leads.consultation`
- `leads.healthCheckup`
- `leads.leadMagnet`
- `leads.application`
- `leads.overview`

All public intake procedures validate inputs with Zod before writing to the database. Admin overview data is read through a dedicated typed query and is ready to be protected with an admin procedure when production access rules are finalised.

## Local development

```bash
pnpm install
pnpm dev
```

The project requires the standard WebDev environment variables for the database and Manus runtime. Do not commit `.env` files or secrets.

## Verification

```bash
pnpm check
pnpm test
pnpm build
```

Current validation coverage includes:

- Existing auth logout contract test
- Contact email validation
- Minimum contact message validation
- Health checkup challenge validation
- Career application position validation

## Design decisions

### Visual language

- **Primary:** `#D4AF37` gold and `#070707` ink
- **Supporting:** warm paper, muted graphite, soft panel black and restrained signal colours per capability
- **Type:** Space Grotesk for display, Manrope for body, DM Mono for metadata
- **Motion:** mostly transform and opacity; non-essential animation respects `prefers-reduced-motion`

### 3D strategy

The homepage and supporting pages use an interactive digital ecosystem visual. The central crystal/wireframe scene is rendered with React Three Fiber and Drei, while the surrounding orbit labels and rings give the experience a clear business narrative. The scene is **lazy-loaded** into its own chunk so content pages do not need to block their initial render on 3D dependencies.

On smaller screens the orbit is visually simplified and the CSS ring/label composition remains legible as a lightweight fallback layer around the canvas.

## AI Tools Used

### Tool: Manus AI assistant

**Purpose:** Accelerate information architecture, visual direction, data modeling, reusable component design, backend procedure scaffolding, test creation and debugging.

**Example prompt:**

> Build a premium multi-page corporate website for Riyadvi Software Technologies. Use a black and gold system, reusable service and case-study templates, database-backed lead forms, an admin overview, and meaningful interactive 3D experiences. The result must be responsive, production-minded and documented.

**What was generated:**

- Initial WebDev full-stack scaffold
- Route and component architecture
- Service, portfolio, blog and careers seed content
- UI system and responsive CSS
- Drizzle schema and tRPC procedures
- Lead form components
- Vitest validation coverage
- README architecture documentation

**What was manually changed:**

- Rewrote the template UI into a distinct Riyadvi visual system
- Chose the gold/ink/graphite palette, typography and layout rhythm
- Reworked copy around the “technology and digital growth partner” positioning
- Implemented reusable data-driven service, case study, article and job templates
- Added the interactive process rail and technology constellation interactions
- Added actual React Three Fiber/Drei/Three.js scene code instead of using a static visual only
- Added Lenis smooth scrolling and Motion hero choreography
- Added responsive mobile fallbacks and lazy loading for the 3D scene
- Added and ran backend validation tests
- Generated, reviewed and applied the Drizzle migration

**Why the tool was selected:**

The assignment explicitly evaluates AI-assisted development. Manus was used as a development collaborator for speed and breadth, while the final system was reviewed, customised, type-checked, tested and performance-checked rather than accepted as an unedited generation.

## Future production hardening

- Protect `/admin` with `adminProcedure` and role checks before deployment.
- Connect email notification, WhatsApp and Calendly credentials through environment-backed integrations.
- Replace seed content with a CMS or database-backed content service when editorial workflows are defined.
- Add real file upload storage for resumes through the provided S3 storage helpers.
- Add analytics events for CTA, form-step and case-study interactions.
