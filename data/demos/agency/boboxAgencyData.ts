/**
 * Byteflyo Agency Showcase Data
 * Minimalist-Brutalist Obsidian (#0a0a0a) + Warm Off-White Glow (#ededed / #ffffff) Aesthetic
 * Crafted with bespoke original copy, case studies, capabilities, and journal items.
 */

export interface DesignerCredit {
  name: string;
  role: string;
  note: string;
  designerImage?: string;
  monogram: string;
  location?: string;
  statusBadge?: string;
}

export interface BoboxProject {
  id: string;
  title: string;
  client: string;
  year: number;
  category: string;
  tagline: string;
  brief: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  palette: {
    primary: string;
    accent: string;
    surface: string;
  };
  visualRatio: string;
  featured?: boolean;
}

export interface BoboxCapability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  disciplines: string[];
  focusAreas: string[];
}

export interface BoboxJournalItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  tags: string[];
}

export interface BoboxBrandColors {
  name: string;
  obsidian: {
    canvas: string;
    surface: string;
    surfaceRaised: string;
    surfaceHighlight: string;
    border: string;
    borderSubtle: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
  };
  amberGold: {
    accent: string;
    accentHover: string;
    accentDark: string;
    accentGlow: string;
    accentSubtle: string;
    metallicGold: string;
    champagneGold: string;
  };
}

export interface BoboxData {
  agencyName: string;
  heroTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  brandColors: BoboxBrandColors;
  designerCredit: DesignerCredit;
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];
  capabilities: BoboxCapability[];
  projects: BoboxProject[];
  journalItems: BoboxJournalItem[];
  manifesto: {
    title: string;
    paragraphs: string[];
    quote: string;
    author: string;
  };
  contact: {
    inquiriesEmail: string;
    pressEmail: string;
    studioLocation: string;
    timezone: string;
    availability: string;
  };
}

export const designerCredit: DesignerCredit = {
  name: "Famim Hayat",
  role: "Lead UI & Frontend Designer",
  note: "Crafted visual hierarchy, responsive grid rhythm, and interactive UI polish.",
  designerImage: undefined, // Defaults to undefined with monogram fallback
  monogram: "FH",
  location: "Dhaka, Bangladesh",
  statusBadge: "Available for Q1/Q2 Design Systems & Flagships",
};

export const boboxBrandColors: BoboxBrandColors = {
  name: "Obsidian & Luminous Monochrome",
  obsidian: {
    canvas: "#0a0a0a",
    surface: "#0a0a0a",
    surfaceRaised: "rgba(0, 0, 0, 0.8)",
    surfaceHighlight: "rgba(0, 0, 0, 0.9)",
    border: "rgba(255, 255, 255, 0.15)",
    borderSubtle: "rgba(255, 255, 255, 0.15)",
    textPrimary: "#ededed",
    textSecondary: "#a1a1aa",
    textMuted: "#71717a",
  },
  amberGold: {
    accent: "#ffffff",
    accentHover: "#ededed",
    accentDark: "#d4d4d8",
    accentGlow: "rgba(245, 239, 230, 0.7)",
    accentSubtle: "rgba(255, 255, 255, 0.08)",
    metallicGold: "#ededed",
    champagneGold: "#f5efe6",
  },
};

export const boboxProjects: BoboxProject[] = [
  {
    id: "kinetix-chrono",
    title: "Kinetix Chrono Flagship",
    client: "Aethel Horology Swiss",
    year: 2026,
    category: "Spatial Web & Flagship Commerce",
    tagline: "Ultra-luxury watchmaker digital flagship with real-time mechanical movement simulator.",
    brief:
      "Engineered an interactive horological experience enabling collectors to deconstruct high-beat mechanical escapements in real-time WebGL, accompanied by kinetic typography and obsidian micro-interactions.",
    deliverables: [
      "Spatial 3D Escapement Explorer",
      "Obsidian & Amber Token System",
      "Dynamic Soundscape Engine",
      "Collector Reservation Concierge",
    ],
    metrics: [
      { label: "Pre-order Reservation Lift", value: "+184%" },
      { label: "Average Session Duration", value: "4m 42s" },
      { label: "Interaction Latency", value: "<14ms" },
    ],
    palette: {
      primary: "#07080b",
      accent: "#f59e0b",
      surface: "#0e111a",
    },
    visualRatio: "16:10",
    featured: true,
  },
  {
    id: "velox-autonomous",
    title: "Velox Mission Control",
    client: "Velox Dynamics Berlin",
    year: 2025,
    category: "Telemetry HUD & Mission Control",
    tagline: "Sub-16ms vector telemetry interface for autonomous aerial delivery fleets.",
    brief:
      "Architected a high-contrast dark cockpit dashboard visualizing live telemetry, airspace geofencing, and battery degradation curves for industrial drone corridors spanning 14 European metropolitan regions.",
    deliverables: [
      "Real-time Telemetry Dashboard",
      "Vector Map Spatial Layer",
      "Dark-Mode HUD Token Spec",
      "Fault-Tolerance Alert System",
    ],
    metrics: [
      { label: "Active Airspace Corridors", value: "14 Metros" },
      { label: "Telemetry Refresh Rate", value: "60 FPS" },
      { label: "Operator Cognitive Load", value: "-38%" },
    ],
    palette: {
      primary: "#090a10",
      accent: "#fbbf24",
      surface: "#111422",
    },
    visualRatio: "16:9",
    featured: true,
  },
  {
    id: "aura-soundworks",
    title: "Aura Spatial Synthesizer",
    client: "Aura Labs Stockholm",
    year: 2025,
    category: "Interactive Audio & Brand Identity",
    tagline: "Tactile browser soundscape synthesizer translating acoustic physics into generative visuals.",
    brief:
      "Created an acoustic brand universe and Web Audio API synthesizer where studio producers modulate binaural soundscapes with interactive magnetic nodal controllers and responsive frequency topography.",
    deliverables: [
      "Web Audio Interactive Synth",
      "Generative Frequency Topography",
      "Bespoke Monospaced Typographic Rig",
      "Tactile Haptic Feedback Protocol",
    ],
    metrics: [
      { label: "Global Sound Sessions", value: "2.4M+" },
      { label: "FWA of the Day", value: "Awarded" },
      { label: "Brand Recall Affinity", value: "+310%" },
    ],
    palette: {
      primary: "#06070a",
      accent: "#f59e0b",
      surface: "#10131f",
    },
    visualRatio: "1:1",
    featured: true,
  },
  {
    id: "solis-infrastructure",
    title: "Solis Energy Topography",
    client: "Solis Energy Consortium",
    year: 2025,
    category: "Enterprise Data Visualization",
    tagline: "Multi-gigawatt offshore wind telemetry rendered into fluid vector topography.",
    brief:
      "Transformed complex offshore renewable telemetry into an executive visualization suite, enabling sovereign investment funds to track live megawatt production, tidal flows, and carbon offset milestones.",
    deliverables: [
      "Executive Topography Canvas",
      "Sovereign Capital Portal",
      "Fluid Data Table Component Library",
      "High-Frequency Chart Engine",
    ],
    metrics: [
      { label: "Capital Facilitated", value: "$1.8B" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Live Turbine Nodes", value: "3,400+" },
    ],
    palette: {
      primary: "#07090d",
      accent: "#eab308",
      surface: "#0f121d",
    },
    visualRatio: "16:10",
    featured: false,
  },
  {
    id: "monolith-monographs",
    title: "Monolith Editorial Archive",
    client: "Monolith Studio Zurich",
    year: 2024,
    category: "Editorial Design & Typography",
    tagline: "Brutalist digital monograph and architectural archive for modernist structuralists.",
    brief:
      "Formulated an editorial digital canvas honoring modernist Swiss architectural principles. Features asymmetrical column tension, high-contrast monochrome photography, and amber metadata indices.",
    deliverables: [
      "Fluid Typographic Scaling Engine",
      "Asymmetrical Grid Architecture",
      "Infinite Canvas Portfolio Archive",
      "Architectural PDF Export Utility",
    ],
    metrics: [
      { label: "Monographs Published", value: "12 Volumes" },
      { label: "Tokyo TDC Nominee", value: "Finalist" },
      { label: "Reader Retention Time", value: "6m 12s" },
    ],
    palette: {
      primary: "#050608",
      accent: "#fbbf24",
      surface: "#0c0e14",
    },
    visualRatio: "4:3",
    featured: false,
  },
  {
    id: "nox-atelier",
    title: "Nox Electric Hypercar 360",
    client: "Nox Automobili Torino",
    year: 2024,
    category: "3D Configurator & Luxury Concierge",
    tagline: "Photorealistic electric hypercar customizer with bespoke titanium & amber finishes.",
    brief:
      "Developed a VIP configuration portal for ultra-exclusive electric hypercars. Clients inspect woven carbon weave textures, active aerodynamic flaps, and amber-gold cockpit stitching in 60 FPS 4K clarity.",
    deliverables: [
      "3D Real-time Paint Shader",
      "Bespoke Material Studio",
      "Private VIP Concierge Portal",
      "Order Specification PDF Generator",
    ],
    metrics: [
      { label: "Limited Allocations", value: "42/42 Sold" },
      { label: "Configurator Completion", value: "98.2%" },
      { label: "Webby Award Winner", value: "Best Visual" },
    ],
    palette: {
      primary: "#08090e",
      accent: "#d97706",
      surface: "#131726",
    },
    visualRatio: "16:9",
    featured: false,
  },
];

export const boboxCapabilities: BoboxCapability[] = [
  {
    id: "cap-digital-product",
    number: "01",
    title: "Digital Product & UI/UX Engineering",
    tagline: "Scalable design architectures engineered for category leaders.",
    description:
      "We design and build production-grade web flagships with uncompromising attention to visual hierarchy, responsive baseline rhythm, fluid micro-interactions, and accessible interface foundations.",
    disciplines: [
      "High-Density Design Systems",
      "Next.js App Router Architecture",
      "Responsive Layout Rhythm",
      "WCAG AAA Accessibility Standards",
    ],
    focusAreas: ["Enterprise Dashboards", "E-Commerce Flagships", "SaaS Control Panels", "Creative Portfolios"],
  },
  {
    id: "cap-kinetic-motion",
    number: "02",
    title: "Kinetic Motion & Interactive UI Polish",
    tagline: "Choreographed motion systems that bring digital surfaces to life.",
    description:
      "Motion is not decoration; it is spatial continuity. We craft frame-accurate physics transitions, magnetic cursor interactions, and fluid editorial reveals that orient the user without cognitive lag.",
    disciplines: [
      "Framer Motion Choreography",
      "Fluid Scroll Velocity Triggers",
      "Magnetic Cursor Physics",
      "Perceptual Latency Elimination",
    ],
    focusAreas: ["Page Transitions", "Micro-Feedback States", "Interactive Infographics", "Hero Stage Reveals"],
  },
  {
    id: "cap-brand-architecture",
    number: "03",
    title: "Brand Architecture & Visual Systems",
    tagline: "Obsidian & amber-gold visual identities with indelible presence.",
    description:
      "We translate company essence into rigorous design languages: from custom typographic pairings and color token hierarchies to physical-digital print collateral that command authority.",
    disciplines: [
      "Color Token Architecture",
      "Editorial Typographic Hierarchy",
      "Iconography Design Systems",
      "Brand Guidelines & Monograms",
    ],
    focusAreas: ["Luxury Ateliers", "Defense & Frontier Tech", "Swiss Horology", "Venture Capital Funds"],
  },
  {
    id: "cap-spatial-web",
    number: "04",
    title: "3D Spatial Web & Real-Time Canvas",
    tagline: "Photorealistic WebGL experiences built for frictionless web delivery.",
    description:
      "Bridging the gap between cinema-grade 3D graphics and sub-second web load speeds. We build custom shaders, GLTF model optimizers, and interactive spatial environments.",
    disciplines: [
      "Three.js & WebGL Shaders",
      "GLTF Geometry Optimization",
      "Real-time Material Lighting",
      "Spatial Audio Integration",
    ],
    focusAreas: ["Product Customizers", "Virtual Showrooms", "Interactive Architecture", "Spatial Audio Visualizers"],
  },
  {
    id: "cap-conversion-cro",
    number: "05",
    title: "Conversion Architecture & Web Vitals",
    tagline: "Sub-second load times married to persuasive editorial storytelling.",
    description:
      "Beauty without speed is friction. We engineer lightweight bundles, partial prerendering, zero layout shifts, and psychological eye-tracking paths that drive measurable pipeline growth.",
    disciplines: [
      "Core Web Vitals Optimization (100/100)",
      "Partial Prerendering (PPR)",
      "Zero Layout Shift (CLS: 0)",
      "Editorial Copy Staging",
    ],
    focusAreas: ["High-Ticket Landing Pages", "Investor Pitch Portals", "Pre-Order Drops", "Executive Keynotes"],
  },
];

export const boboxJournalItems: BoboxJournalItem[] = [
  {
    id: "journal-kinetic-grid",
    title: "The Kinetic Grid: Orchestrating Asymmetrical Rhythm Without Layout Shift",
    date: "October 24, 2026",
    readTime: "6 min read",
    category: "Design Engineering",
    excerpt:
      "Why traditional 12-column frameworks collapse when handling dynamic editorial layouts, and how fluid CSS clamp equations create organic breathing room for high-craft digital flagships.",
    tags: ["CSS Architecture", "Visual Hierarchy", "Typography"],
  },
  {
    id: "journal-obsidian-amber",
    title: "Obsidian & Amber: The Neurobiology of High-Ticket Digital Artifacts",
    date: "September 18, 2026",
    readTime: "8 min read",
    category: "Visual Theory",
    excerpt:
      "An in-depth study into the ocular psychology of deep obsidian surfaces (#07080b) contrasted with razor-focused amber-gold (#f59e0b) highlights in luxury digital conversion funnels.",
    tags: ["Color Psychology", "Luxury Branding", "Conversion"],
  },
  {
    id: "journal-sub-50ms",
    title: "Sub-50ms Perception: Eliminating Cognitive Friction with Anticipatory UI",
    date: "August 12, 2026",
    readTime: "5 min read",
    category: "Interaction Design",
    excerpt:
      "Human neurological thresholds for perceived immediacy, and how prefetching during cursor hover trajectories tricks the user mind into experiencing zero latency.",
    tags: ["Micro-interactions", "Performance", "Frontend Polish"],
  },
  {
    id: "journal-system-evolution",
    title: "The Demise of Rigid Token Tables in the Era of Multi-Industry Contexts",
    date: "July 05, 2026",
    readTime: "7 min read",
    category: "System Architecture",
    excerpt:
      "Why the next generation of multi-industry showcases must transition from static design tokens to context-aware layout engines that adapt gracefully to industry domain semantics.",
    tags: ["Design Systems", "Component Architecture", "Design Ops"],
  },
];

export const boboxAgencyData: BoboxData = {
  agencyName: "Byteflyo Agency",
  heroTagline: "Avant-Garde Digital Design & Motion Engineering Atelier",
  heroHeadline: "We sculpt high-conversion digital flagships for category pioneers.",
  heroSubheadline:
    "Grounded in deep obsidian canvases, illuminated by warm off-white luminous precision, and engineered with responsive spatial rhythm. Built by craftsmen who believe every pixel is a promise.",
  brandColors: boboxBrandColors,
  designerCredit,
  stats: [
    {
      value: "99.4/100",
      label: "Lighthouse Performance",
      detail: "Zero CLS, instant hydration, and sub-100ms INP across mobile & desktop.",
    },
    {
      value: "$420M+",
      label: "Client Revenue Generated",
      detail: "Measurable commercial pipeline attributed to digital flagship redesigns.",
    },
    {
      value: "18+",
      label: "International Accolades",
      detail: "Awwwards Site of the Year nominations, FWA of the Day, and Tokyo TDC recognition.",
    },
    {
      value: "100%",
      label: "Bespoke Original Code",
      detail: "Zero generic templates, custom typography pairing, and proprietary motion physics.",
    },
  ],
  capabilities: boboxCapabilities,
  projects: boboxProjects,
  journalItems: boboxJournalItems,
  manifesto: {
    title: "The Byteflyo Agency Design Manifesto",
    paragraphs: [
      "The modern web is inundated with sanitized templates, cookie-cutter cards, and lifeless interfaces that look indistinguishable from one another. We reject the generic default.",
      "At Byteflyo Agency, design is treated as architectural discipline. We believe deep contrast commands reverence. Obsidian (#0a0a0a) provides the stillness of an art gallery, allowing luminous monochrome focal points to lead human attention with surgical accuracy.",
      "Every curve, every easing curve, every typographic kerning pair must serve both beauty and commercial velocity. When high craft meets rock-solid engineering, conversion is not an accident—it is inevitable.",
    ],
    quote: "True luxury is the quiet confidence of immaculate restraint.",
    author: "Famim Hayat — Lead UI & Frontend Designer",
  },
  contact: {
    inquiriesEmail: "collaborate@byteflyo.agency",
    pressEmail: "press@byteflyo.agency",
    studioLocation: "Dhaka • Zurich • Berlin",
    timezone: "UTC +6 / Global Asynchronous",
    availability: "Accepting select flagship projects for Q2 2026",
  },
};

export default boboxAgencyData;
