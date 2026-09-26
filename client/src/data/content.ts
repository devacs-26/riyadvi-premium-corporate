export type Service = {
  slug: string;
  number: string;
  name: string;
  short: string;
  description: string;
  accent: string;
  icon: string;
  stack: string[];
  features: string[];
  industries: string[];
  problem: string;
  solution: string;
  process: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    name: "Web Development",
    short: "High-performance digital platforms",
    description: "Web experiences that turn complex business goals into clear, conversion-ready journeys.",
    accent: "#d4af37",
    icon: "⌘",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    features: ["Conversion-first architecture", "Headless CMS foundations", "Performance budgets", "Analytics instrumentation"],
    industries: ["SaaS", "Retail", "Healthcare", "B2B services"],
    problem: "Your website looks like a brochure, while your customers expect an intelligent product experience.",
    solution: "We create modular platforms that clarify your value, shorten decision cycles and give your team a system to grow with.",
    process: ["Discover", "Architect", "Design", "Build", "Measure"],
  },
  {
    slug: "app-development",
    number: "02",
    name: "App Development",
    short: "Products people return to",
    description: "Mobile and web applications engineered around real customer behaviour, not feature checklists.",
    accent: "#8e9bff",
    icon: "◈",
    stack: ["React Native", "TypeScript", "Node.js", "MySQL"],
    features: ["Cross-platform delivery", "Role-based experiences", "Offline-ready flows", "Release observability"],
    industries: ["Fintech", "Wellness", "Education", "Logistics"],
    problem: "Teams lose momentum when product decisions are detached from customer context.",
    solution: "We pair product thinking with rigorous engineering to ship useful, reliable experiences in focused releases.",
    process: ["Frame", "Prototype", "Validate", "Ship", "Evolve"],
  },
  {
    slug: "digital-marketing",
    number: "03",
    name: "Digital Marketing",
    short: "Demand with a measurable engine",
    description: "Brand, content and performance loops that connect attention to commercial outcomes.",
    accent: "#65d6a1",
    icon: "↗",
    stack: ["SEO", "GA4", "Meta Ads", "HubSpot"],
    features: ["Content systems", "Search strategy", "Paid acquisition", "Funnel reporting"],
    industries: ["D2C", "Professional services", "Hospitality", "Technology"],
    problem: "Marketing activity is moving, but the team cannot see what is compounding.",
    solution: "We build a focused growth system that makes the next best move visible across channels.",
    process: ["Audit", "Position", "Activate", "Optimise", "Scale"],
  },
  {
    slug: "ar-vr",
    number: "04",
    name: "AR / VR",
    short: "Immersive ways to understand",
    description: "Spatial experiences that make products, places and ideas feel immediate.",
    accent: "#f49a8b",
    icon: "◉",
    stack: ["Three.js", "WebXR", "Unity", "Blender"],
    features: ["Interactive 3D journeys", "WebAR try-ons", "Virtual showrooms", "Spatial storytelling"],
    industries: ["Real estate", "Manufacturing", "Education", "Retail"],
    problem: "Static media cannot communicate the scale, material or possibility of what you offer.",
    solution: "We use spatial interfaces when they clarify a decision, not as decoration.",
    process: ["Concept", "Blockout", "Prototype", "Experience", "Launch"],
  },
  {
    slug: "3d-modeling",
    number: "05",
    name: "3D Modeling",
    short: "Objects with a point of view",
    description: "Digital objects and environments designed to add depth to product and brand stories.",
    accent: "#c8a6f7",
    icon: "✦",
    stack: ["Blender", "Three.js", "GLTF", "WebGPU"],
    features: ["Product visualization", "Optimised GLTF assets", "Motion-ready systems", "Web performance"],
    industries: ["Consumer brands", "Architecture", "Automotive", "Media"],
    problem: "Your strongest story is physical, but your digital presence flattens it.",
    solution: "We model a visual language that works across web, campaign and sales moments.",
    process: ["Reference", "Model", "Materialise", "Animate", "Deploy"],
  },
  {
    slug: "ui-ux-design",
    number: "06",
    name: "UI / UX Design",
    short: "Clarity people can feel",
    description: "Interfaces with a confident visual system and flows that remove friction from every step.",
    accent: "#f0cc73",
    icon: "⌗",
    stack: ["Figma", "Design systems", "Prototyping", "User research"],
    features: ["Journey mapping", "Design systems", "Rapid prototyping", "Usability testing"],
    industries: ["Startups", "Enterprise", "Healthcare", "Consumer"],
    problem: "A beautiful interface still fails when the underlying path is unclear.",
    solution: "We make the right action feel inevitable through narrative, hierarchy and feedback.",
    process: ["Listen", "Map", "Explore", "Prototype", "Refine"],
  },
];

export type PortfolioItem = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  color: string;
  featured?: boolean;
};

export const portfolio: PortfolioItem[] = [
  { slug: "puratap", client: "Puratap", industry: "Water & wellness", title: "A calmer route to better water", summary: "A premium commerce experience for a category built on trust.", challenge: "Puratap needed to make product choice feel simple without losing technical credibility.", solution: "A guided product story, high-intent comparison flow and tactile visual system that brought the product closer.", result: "Sharper product discovery and a more confident premium position.", tags: ["Strategy", "Web", "UX"], color: "#d4af37", featured: true },
  { slug: "wanaromah", client: "Wanaromah Perfumers", industry: "Luxury retail", title: "Scent, translated digitally", summary: "An editorial storefront for a perfumery with a point of view.", challenge: "The brand's sensorial nuance was getting lost in a conventional catalogue.", solution: "We paired cinematic storytelling with a concise purchase path and a warm, ingredient-led visual language.", result: "A digital flagship that feels considered from first scroll to checkout.", tags: ["Brand", "Commerce", "3D"], color: "#c8a6f7" },
  { slug: "laxmi-astro-ai", client: "Laxmi Astro AI", industry: "AI & guidance", title: "Making the unknown actionable", summary: "A clear, human interface for a deeply personal product.", challenge: "The platform had powerful intelligence but an overwhelming first experience.", solution: "We shaped a progressive journey that turns complex inputs into moments of clarity.", result: "A more approachable product narrative and a platform ready to scale.", tags: ["Product", "App", "AI"], color: "#8e9bff" },
  { slug: "tony-and-guy", client: "Tony & Guy", industry: "Beauty", title: "A salon network in motion", summary: "A connected booking and brand experience for a recognisable name.", challenge: "Multiple locations and services created choice overload for visitors.", solution: "A location-first architecture and energetic interaction system made booking feel immediate.", result: "Less friction between inspiration and appointment.", tags: ["Web", "Booking", "Growth"], color: "#f49a8b" },
  { slug: "studio11", client: "Studio11", industry: "Beauty & lifestyle", title: "The next appointment starts here", summary: "A mobile-first digital front door for modern salons.", challenge: "The experience needed to feel premium while serving quick, repeat actions.", solution: "We designed an editorial landing system with reusable campaign modules and fast booking paths.", result: "A flexible foundation for every seasonal story.", tags: ["UX", "Web", "Content"], color: "#65d6a1" },
  { slug: "sivam-physio-care", client: "Sivam Physio Care", industry: "Healthcare", title: "Care that starts before the visit", summary: "An accessible platform for a trusted local practice.", challenge: "Patients needed answers before they felt ready to book.", solution: "A calm information architecture, outcome-led content and a visible care pathway.", result: "More informed enquiries and a stronger local digital presence.", tags: ["Healthcare", "UX", "Content"], color: "#f0cc73" },
  { slug: "pearl-housing", client: "Pearl Housing", industry: "Real estate", title: "Space, with context", summary: "A property discovery experience that gives every place a story.", challenge: "Listings felt interchangeable and sales teams lacked a strong first impression.", solution: "We brought visual hierarchy, guided discovery and spatial previews into one system.", result: "A more memorable path from browse to conversation.", tags: ["Property", "3D", "Web"], color: "#8e9bff" },
  { slug: "nugenica-biotech-lab", client: "Nugenica Biotech Lab", industry: "Biotech", title: "Complex science, made legible", summary: "A digital identity and platform for a research-led organisation.", challenge: "The work was credible but difficult for non-specialists to understand.", solution: "A precise visual system with layered explanations and a confident information rhythm.", result: "A sharper bridge between scientific depth and human interest.", tags: ["Brand", "Web", "Strategy"], color: "#65d6a1" },
  { slug: "visdoc", client: "VisDoc", industry: "Health tech", title: "The interface for looking closer", summary: "A product story for a new generation of clinical tools.", challenge: "The product needed to speak to both practitioners and decision-makers.", solution: "We created a modular narrative that changes depth without changing direction.", result: "A platform for demos, sales and the next product chapter.", tags: ["Product", "Health tech", "UX"], color: "#f49a8b" },
  { slug: "cube-dental", client: "Cube Dental", industry: "Healthcare", title: "Precision with a human edge", summary: "A digital experience for a practice built on confidence.", challenge: "The brand needed to feel advanced without becoming intimidating.", solution: "Friendly micro-interactions and direct patient pathways balanced clinical expertise.", result: "A more welcoming first step into care.", tags: ["Healthcare", "Brand", "Web"], color: "#c8a6f7" },
];

export const blogPosts = [
  { slug: "designing-for-the-next-decision", category: "Perspective", date: "Sep 18, 2026", read: "6 min read", title: "Designing for the next decision, not the last click", excerpt: "The best digital experiences do more than explain. They help people move with confidence.", body: ["A website is often treated as a destination. In practice, it is a sequence of decisions: trust this, explore that, ask a question, make a move.", "When we design around the next decision, hierarchy becomes more useful than decoration. The page earns attention by making the right action clearer at exactly the right moment.", "That is the difference between a digital presence and a digital partner: one presents information; the other creates momentum."], tags: ["UX", "Strategy", "Growth"] },
  { slug: "what-a-3d-website-is-for", category: "Technology", date: "Sep 05, 2026", read: "8 min read", title: "What a 3D website is actually for", excerpt: "Depth is not a special effect. It is a tool for context, understanding and memory.", body: ["3D earns its place when a flat image cannot communicate material, scale, relationship or possibility.", "Used well, it turns an abstract system into something people can navigate. Used everywhere, it becomes noise. The craft is knowing the difference.", "We use interactive visuals as signposts: to make a product tangible, a process legible or a story worth remembering."], tags: ["3D", "Web", "Interaction"] },
  { slug: "the-compound-effect-of-a-content-system", category: "Growth", date: "Aug 22, 2026", read: "5 min read", title: "The compound effect of a content system", excerpt: "A content system gives the next good idea somewhere useful to go.", body: ["Content becomes expensive when every story starts from zero. A system lets teams build on what is already working.", "That system might be a CMS model, a set of page patterns or simply a sharper point of view. The important part is that it makes quality repeatable.", "The strongest teams do not publish more because they have more time. They publish more because the path from idea to experience is clear."], tags: ["Content", "Systems", "Marketing"] },
];

export const jobs = [
  { slug: "senior-react-engineer", title: "Senior React Engineer", department: "Engineering", experience: "4+ years", location: "Chennai / Hybrid", summary: "Build product-quality experiences with a small, sharp team.", responsibilities: ["Own front-end architecture across client projects", "Partner with design to make complex interactions feel simple", "Raise the bar on performance, accessibility and testing"], requirements: ["Strong React and TypeScript experience", "Comfort with APIs, Git and component systems", "A product mindset and an eye for detail"] },
  { slug: "product-designer", title: "Product Designer", department: "Design", experience: "3+ years", location: "Chennai / Hybrid", summary: "Shape the next generation of digital experiences for ambitious teams.", responsibilities: ["Lead discovery, flows and visual direction", "Create systems that make quality repeatable", "Present work clearly to clients and collaborators"], requirements: ["Strong portfolio across digital products", "Proficiency in Figma and prototyping", "Curiosity about business and technology"] },
  { slug: "growth-strategist", title: "Growth Strategist", department: "Growth", experience: "2+ years", location: "Remote / India", summary: "Connect story, channel and commercial outcomes.", responsibilities: ["Build practical growth plans for clients", "Turn data into useful recommendations", "Collaborate across content, design and engineering"], requirements: ["Experience with SEO, analytics or paid media", "Clear written and verbal communication", "Comfort working with ambiguity"] },
];

export const techOrbit = ["React", "Next.js", "Node.js", "Three.js", "MySQL", "Figma", "Blender", "WordPress", "GA4", "TypeScript"];

export const navItems = [
  { href: "/services", label: "Capabilities" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
];
