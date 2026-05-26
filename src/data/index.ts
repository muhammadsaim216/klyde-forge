import {
  Code2, Smartphone, Palette, Bot, Cloud, Plug, ShoppingCart, LayoutDashboard,
} from "lucide-react";

export const services = [
  { icon: Code2, title: "Web Development", desc: "Blazing-fast, SEO-ready sites and web apps built with React, Next.js and modern tooling." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feel iOS & Android experiences powered by React Native and Flutter." },
  { icon: Palette, title: "UI/UX Design", desc: "Design systems, prototypes and interfaces that feel inevitable and beautiful." },
  { icon: Bot, title: "AI Automation", desc: "Custom agents, RAG pipelines and AI copilots that ship measurable impact." },
  { icon: LayoutDashboard, title: "SaaS Development", desc: "End-to-end SaaS platforms with billing, auth, dashboards and analytics." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable infra on AWS, GCP and edge runtimes with zero-downtime deploys." },
  { icon: Plug, title: "API Development", desc: "Typed, documented, secure REST and GraphQL APIs that scale globally." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Headless storefronts and checkout flows that convert and delight." },
];

export const projectCategories = ["All", "Web Apps", "AI Projects", "Mobile Apps", "Dashboards", "Educational", "E-Commerce"] as const;

export type Project = {
  id: string;
  title: string;
  category: typeof projectCategories[number];
  tags: string[];
  short: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "nebula-analytics", title: "Nebula Analytics", category: "Dashboards",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    short: "Realtime product analytics for fast-moving SaaS teams.",
    description: "A realtime analytics platform with sub-second event ingestion, cohort funnels, and AI-generated insight summaries.",
    features: ["Realtime event pipeline", "Cohort & funnel builder", "AI weekly digests", "Role-based workspaces"],
    metrics: [{ label: "Events / day", value: "12B+" }, { label: "Dashboards", value: "8.4k" }, { label: "Avg latency", value: "240ms" }],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "synapse-ai", title: "Synapse AI", category: "AI Projects",
    tags: ["Python", "OpenAI", "LangChain", "Pinecone"],
    short: "Enterprise RAG copilot that reads your entire knowledge base.",
    description: "A retrieval-augmented copilot deployed across legal and finance teams with strict role-based context isolation.",
    features: ["Multi-tenant RAG", "Streaming responses", "Citations & audit logs", "SOC2-ready"],
    metrics: [{ label: "Documents", value: "2.3M" }, { label: "Queries / day", value: "180k" }, { label: "Accuracy", value: "94%" }],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "orbit-commerce", title: "Orbit Commerce", category: "E-Commerce",
    tags: ["Shopify", "React", "Stripe"],
    short: "Headless storefront for a global apparel brand.",
    description: "Cinematic product pages, AI-powered recommendations, and a checkout that converts at 4.2%.",
    features: ["Headless Shopify", "AI recommendations", "Edge-rendered pages", "Multi-currency"],
    metrics: [{ label: "Conversion", value: "4.2%" }, { label: "TTFB", value: "120ms" }, { label: "Revenue uplift", value: "+38%" }],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "pulse-fitness", title: "Pulse Fitness", category: "Mobile Apps",
    tags: ["React Native", "Supabase", "HealthKit"],
    short: "AI personal trainer in your pocket.",
    description: "Adaptive workout plans, wearable sync, and social challenges built natively for iOS and Android.",
    features: ["Adaptive workouts", "Wearable sync", "Social challenges", "Offline-first"],
    metrics: [{ label: "Active users", value: "320k" }, { label: "App rating", value: "4.9" }, { label: "Retention D30", value: "62%" }],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "lumen-learn", title: "Lumen Learn", category: "Educational",
    tags: ["Next.js", "tRPC", "OpenAI"],
    short: "AI tutor that adapts to every learner.",
    description: "Personalized learning paths, generative practice problems, and teacher dashboards trusted by 200+ schools.",
    features: ["Adaptive curriculum", "AI-generated practice", "Teacher dashboards", "Parent reports"],
    metrics: [{ label: "Students", value: "85k" }, { label: "Schools", value: "210" }, { label: "Test score lift", value: "+24%" }],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "vault-bank", title: "Vault Banking", category: "Web Apps",
    tags: ["React", "Node.js", "Plaid"],
    short: "A modern banking dashboard for digital-native businesses.",
    description: "Multi-account banking, virtual cards, and AI-powered cashflow forecasting in one elegant interface.",
    features: ["Multi-account", "Virtual cards", "Cashflow AI", "Open banking"],
    metrics: [{ label: "TPV", value: "$1.2B" }, { label: "Customers", value: "14k" }, { label: "Uptime", value: "99.99%" }],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "atlas-crm", title: "Atlas CRM", category: "Web Apps",
    tags: ["TypeScript", "tRPC", "PostgreSQL"],
    short: "The CRM your sales team will actually use.",
    description: "Pipeline automation, AI deal scoring, and a keyboard-first UX inspired by Linear.",
    features: ["AI deal scoring", "Keyboard-first UX", "Email sync", "Automations"],
    metrics: [{ label: "Pipelines", value: "5.6k" }, { label: "Win rate lift", value: "+31%" }, { label: "Time saved", value: "9h/wk" }],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
  {
    id: "echo-podcast", title: "Echo Studio", category: "AI Projects",
    tags: ["Whisper", "FFmpeg", "Next.js"],
    short: "Podcast editing reimagined with AI.",
    description: "Transcribe, edit by text, remove filler words, and auto-generate show notes in minutes.",
    features: ["Edit by text", "Filler removal", "Auto show notes", "Multi-track"],
    metrics: [{ label: "Hours processed", value: "1.4M" }, { label: "Creators", value: "32k" }, { label: "Time saved", value: "85%" }],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    liveUrl: "#", githubUrl: "#",
  },
];

export const team = [
  { name: "Ayaan Khan", role: "Founder & CEO", skills: ["Product", "Strategy"], image: "https://i.pravatar.cc/300?img=12" },
  { name: "Sofia Chen", role: "Head of Design", skills: ["UI/UX", "Brand"], image: "https://i.pravatar.cc/300?img=47" },
  { name: "Marcus Reed", role: "Lead Engineer", skills: ["React", "Node.js"], image: "https://i.pravatar.cc/300?img=33" },
  { name: "Priya Shah", role: "AI Engineer", skills: ["LLMs", "Python"], image: "https://i.pravatar.cc/300?img=45" },
  { name: "Diego Alvarez", role: "Mobile Lead", skills: ["React Native", "Swift"], image: "https://i.pravatar.cc/300?img=15" },
  { name: "Hana Park", role: "Cloud Architect", skills: ["AWS", "K8s"], image: "https://i.pravatar.cc/300?img=49" },
];

export const testimonials = [
  { name: "Lena Hoffmann", role: "CTO, Northwind", quote: "Klyde shipped in 6 weeks what our last agency couldn't ship in 6 months. The polish is unreal.", image: "https://i.pravatar.cc/100?img=5", rating: 5 },
  { name: "Rahul Mehta", role: "Founder, Plume", quote: "Working with Klyde felt like hiring a senior product team overnight. Easily the best decision we made this year.", image: "https://i.pravatar.cc/100?img=8", rating: 5 },
  { name: "Aiko Tanaka", role: "Head of Product, Lumen", quote: "Every interaction, every pixel, every animation considered. Our users notice the difference.", image: "https://i.pravatar.cc/100?img=20", rating: 5 },
  { name: "Owen Carter", role: "VP Eng, Vault", quote: "The engineering quality is exceptional. Clean architecture, zero outages, beautiful UX.", image: "https://i.pravatar.cc/100?img=11", rating: 5 },
];

export const blogPosts = [
  { id: "ai-product-design", title: "Designing for AI: the new interaction patterns", category: "AI", readTime: "8 min", excerpt: "Why streaming, citations and confidence intervals are the new buttons.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80", date: "May 12, 2026" },
  { id: "saas-architecture", title: "A pragmatic SaaS architecture for 2026", category: "SaaS", readTime: "12 min", excerpt: "Multi-tenant from day one without paying the complexity tax.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80", date: "May 04, 2026" },
  { id: "edge-rendering", title: "Edge rendering, demystified", category: "Web Development", readTime: "6 min", excerpt: "What runs where, and why your TTFB suddenly halved.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80", date: "Apr 22, 2026" },
  { id: "design-systems", title: "Design systems that engineers love", category: "UI/UX", readTime: "9 min", excerpt: "Tokens, primitives, and the art of saying no.", image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&q=80", date: "Apr 14, 2026" },
  { id: "startup-engineering", title: "Startup engineering: ship, then scale", category: "Startup Engineering", readTime: "7 min", excerpt: "Boring tech, deliberate scope, and the one metric that matters.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80", date: "Apr 03, 2026" },
  { id: "cloud-cost", title: "Cutting cloud cost without cutting corners", category: "Cloud Systems", readTime: "10 min", excerpt: "Spot, scale-to-zero and the three workloads you should not migrate.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80", date: "Mar 28, 2026" },
];

export const techStack = [
  "React", "Next.js", "Node.js", "Python", "Supabase", "Firebase",
  "Tailwind", "Docker", "PostgreSQL", "OpenAI", "TypeScript", "AWS",
];

export const stats = [
  { value: 240, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 35, suffix: "+", label: "Technologies Used" },
  { value: 28, suffix: "", label: "Team Members" },
];
