/**
 * 99-Page Multi-Industry Showcase Hub Registry
 * Categorized catalog of 99 landing page experiences across 11 key industries:
 * Agency (15), Portfolio (15), Barber (15), Restaurant (15), Fashion (15),
 * Cosmetics (5), Dental (5), Medical (5), Travel (5), Cars (2), Motorcycle (2).
 * Total: 99 Items.
 */

export type DemoCategory =
  | "Agency"
  | "Portfolio"
  | "Barber"
  | "Restaurant"
  | "Fashion"
  | "Cosmetics"
  | "Dental"
  | "Medical"
  | "Travel"
  | "Cars"
  | "Motorcycle";

export type DemoStatus = "live" | "coming-soon";

export interface DemoItem {
  id: string;
  slug: string;
  title: string;
  category: DemoCategory;
  categorySlug: string;
  status: DemoStatus;
  description: string;
  tags: string[];
  accentColor: string;
  featured?: boolean;
  year: number;
  highlight?: string;
  badge?: string;
  industryIcon?: string;
}

export interface DemoCategoryMeta {
  id: string;
  label: string;
  categoryKey?: DemoCategory;
  count: number;
  description: string;
  accent: string;
  iconName: string;
}

export const DEMO_CATEGORIES: DemoCategoryMeta[] = [
  {
    id: "all",
    label: "All",
    count: 99,
    description: "The complete 99-page multi-industry showcase archive",
    accent: "#f59e0b",
    iconName: "grid",
  },
  {
    id: "agency",
    label: "Agency",
    categoryKey: "Agency",
    count: 15,
    description: "Avant-garde creative agencies, design studios & tech collectives",
    accent: "#f59e0b",
    iconName: "sparkles",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    categoryKey: "Portfolio",
    count: 15,
    description: "High-craft personal portfolios, directors, architects & creators",
    accent: "#38bdf8",
    iconName: "user",
  },
  {
    id: "barber",
    label: "Barber",
    categoryKey: "Barber",
    count: 15,
    description: "Artisanal barber lounges, heritage clubs & grooming parlours",
    accent: "#d97706",
    iconName: "scissors",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    categoryKey: "Restaurant",
    count: 15,
    description: "Michelin-starred dining, izakayas, wine bistros & botanical cafes",
    accent: "#f97316",
    iconName: "utensils",
  },
  {
    id: "fashion",
    label: "Fashion",
    categoryKey: "Fashion",
    count: 15,
    description: "Haute couture ateliers, minimalist streetwear & luxury apparel",
    accent: "#ec4899",
    iconName: "shirt",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    categoryKey: "Cosmetics",
    count: 5,
    description: "Clean skincare laboratories, botanicals & luxury pigment beauty",
    accent: "#a855f7",
    iconName: "droplet",
  },
  {
    id: "dental",
    label: "Dental",
    categoryKey: "Dental",
    count: 5,
    description: "Modern aesthetic dentistry, pearl wellness & orthodontic clinics",
    accent: "#06b6d4",
    iconName: "shield",
  },
  {
    id: "medical",
    label: "Medical",
    categoryKey: "Medical",
    count: 5,
    description: "Integrative healthcare institutes, longevity labs & diagnostics",
    accent: "#10b981",
    iconName: "heart-pulse",
  },
  {
    id: "travel",
    label: "Travel",
    categoryKey: "Travel",
    count: 5,
    description: "Ultra-luxury expeditions, arctic retreats & private yacht escapes",
    accent: "#14b8a6",
    iconName: "compass",
  },
  {
    id: "cars",
    label: "Cars",
    categoryKey: "Cars",
    count: 2,
    description: "Bespoke hypercar ateliers & high-performance EV concierges",
    accent: "#e11d48",
    iconName: "car",
  },
  {
    id: "motorcycle",
    label: "Motorcycle",
    categoryKey: "Motorcycle",
    count: 2,
    description: "Custom cafe racers, electric superbikes & hand-machined moto works",
    accent: "#eab308",
    iconName: "gauge",
  },
];

export const DEMOS_REGISTRY: DemoItem[] = [
  // ==========================================
  // 1. AGENCY (15 items: 1 Live + 14 Coming Soon)
  // ==========================================
  {
    id: "bobox-agency",
    slug: "/demos/agency/bobox-agency",
    title: "Byteflyo Agency",
    category: "Agency",
    categorySlug: "agency",
    status: "live",
    description:
      "Avant-garde digital design & motion engineering studio landing page. Featuring kinetic typography, #0a0a0a obsidian canvas, warm off-white glow accents, and high-conversion client showcases.",
    tags: ["Creative Agency", "Minimalist-Brutalist", "Kinetic UI", "Design Systems"],
    accentColor: "#ffffff",
    featured: true,
    year: 2026,
    highlight: "Lead Showcase Flagship",
    badge: "Live Demo",
    industryIcon: "sparkles",
  },
  {
    id: "vortex-creative-lab",
    slug: "/demos/agency/vortex-creative-lab",
    title: "Vortex Creative Lab",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Generative 3D studio crafting algorithmic web interactions, spatial brand systems, and dynamic canvas shaders for global innovators.",
    tags: ["Generative 3D", "WebGL", "Interactive Lab"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aura-interactive",
    slug: "/demos/agency/aura-interactive",
    title: "Aura Interactive",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Next-generation digital agency specializing in immersive sensory interfaces, spatial audio integration, and frictionless e-commerce flows.",
    tags: ["Spatial Audio", "E-Commerce", "Sensory UI"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "nexus-brand-studio",
    slug: "/demos/agency/nexus-brand-studio",
    title: "Nexus Brand Studio",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Strategic visual identity collective empowering venture-backed frontier tech companies to establish market-defining leadership.",
    tags: ["Brand Identity", "Venture Tech", "Typography"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "kinetix-digital",
    slug: "/demos/agency/kinetix-digital",
    title: "Kinetix Digital Works",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Motion-first UI engineering studio building high-velocity interactive product showcases and complex enterprise design systems.",
    tags: ["Motion UI", "Design Systems", "Enterprise"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "hyperion-media-group",
    slug: "/demos/agency/hyperion-media-group",
    title: "Hyperion Media Group",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Cinematic digital advertising and campaign production studio blending editorial storytelling with high-contrast luxury art direction.",
    tags: ["Editorial Media", "Cinematic Story", "Art Direction"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "solis-design-co",
    slug: "/demos/agency/solis-design-co",
    title: "Solis Design Co.",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Sustainable design atelier focused on clean tech interfaces, circular economy narratives, and carbon-negative web architectures.",
    tags: ["Clean Tech", "Green Hosting", "Sustainable Web"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "monolith-creative",
    slug: "/demos/agency/monolith-creative",
    title: "Monolith Creative Co.",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Brutalist digital consultancy for modern architectural practices, heritage foundations, and forward-thinking cultural institutions.",
    tags: ["Brutalist Design", "Architecture", "Cultural Heritage"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "zephyr-experience",
    slug: "/demos/agency/zephyr-experience",
    title: "Zephyr Experience Lab",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Boutique experience engineering studio orchestrating multi-device physical installations and fluid responsive web surfaces.",
    tags: ["Experience Engineering", "Fluid Touch", "Interactive"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "strata-brand-architecture",
    slug: "/demos/agency/strata-brand-architecture",
    title: "Strata Brand Architecture",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Systematic brand identity and multi-tier digital infrastructure engineered specifically for private equity and institutional funds.",
    tags: ["Institutional Funds", "Brand Architecture", "Governance"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "prism-collective",
    slug: "/demos/agency/prism-collective",
    title: "Prism Collective",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Experimental digital agency exploring micro-interactions, chromatic aberrations, and tactile scroll physics for luxury fashion houses.",
    tags: ["Chromatic Shaders", "Luxury Fashion", "Micro-Interactions"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "velox-studios",
    slug: "/demos/agency/velox-studios",
    title: "Velox Studios",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "High-speed sprint agency delivering category-defining MVP designs and interactive investor roadshows in rapid 14-day cycles.",
    tags: ["Rapid Sprints", "MVP Design", "Investor Pitch"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "quantum-brand-engine",
    slug: "/demos/agency/quantum-brand-engine",
    title: "Quantum Brand Engine",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Deep-tech visual storytelling studio translating quantum computing, artificial intelligence, and biotech complexity into intuitive visual systems.",
    tags: ["Deep Tech", "AI Interfaces", "Complex Systems"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "alloy-digital-works",
    slug: "/demos/agency/alloy-digital-works",
    title: "Alloy Digital Works",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Industrial UI and spatial software design studio crafting telemetry dashboards for robotics, aerospace, and advanced manufacturing.",
    tags: ["Industrial UI", "Robotics", "Telemetry Dashboards"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "northstar-innovation",
    slug: "/demos/agency/northstar-innovation",
    title: "Northstar Innovation Lab",
    category: "Agency",
    categorySlug: "agency",
    status: "coming-soon",
    description:
      "Human-centered venture incubator web presence showcasing breakthrough hardware prototypes and connected consumer experiences.",
    tags: ["Hardware Incubator", "IoT Interfaces", "Human-Centered"],
    accentColor: "#f59e0b",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 2. PORTFOLIO (15 items)
  // ==========================================
  {
    id: "famim-hayat-portfolio",
    slug: "/demos/portfolio/famim-hayat-portfolio",
    title: "Famim Hayat Portfolio",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Lead UI & frontend designer portfolio showcasing high-density design systems, obsidian visual hierarchy, responsive grid rhythm, and interactive polish.",
    tags: ["Lead Designer", "Design Systems", "Obsidian UI", "Frontend"],
    accentColor: "#38bdf8",
    featured: true,
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "elena-rostova-visuals",
    slug: "/demos/portfolio/elena-rostova-visuals",
    title: "Elena Rostova Visuals",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Senior art director & 3D spatial visualizer portfolio with cinematic reel showcases, lighting breakdowns, and interactive camera controllers.",
    tags: ["Art Direction", "3D Camera", "Cinematography"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "kenji-sato-architecture",
    slug: "/demos/portfolio/kenji-sato-architecture",
    title: "Kenji Sato Architecture",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Minimalist architectural portfolio focusing on timber joinery, natural light modulation, and high-resolution blueprint overlays.",
    tags: ["Architecture", "Minimalism", "Blueprint Overlays"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "siddharth-rao-3d",
    slug: "/demos/portfolio/siddharth-rao-3d",
    title: "Siddharth Rao 3D Lab",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Real-time procedural artist showcasing custom geometry node systems, organic fluid simulations, and WebGPU interactive shaders.",
    tags: ["WebGPU", "Procedural 3D", "Shader Art"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "chloe-laurent-direction",
    slug: "/demos/portfolio/chloe-laurent-direction",
    title: "Chloé Laurent Creative Direction",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Parisian creative director portfolio specializing in luxury perfume campaigns, editorial print layouts, and bespoke typography.",
    tags: ["Creative Direction", "Editorial Print", "Luxury Perfume"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "marcus-vance-sound",
    slug: "/demos/portfolio/marcus-vance-sound",
    title: "Marcus Vance Sound & Motion",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Acoustic branding and kinetic motion designer portfolio featuring interactive waveforms, haptic feedback triggers, and film scoring samples.",
    tags: ["Sound Design", "Acoustic Branding", "Waveforms"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aria-chen-design-systems",
    slug: "/demos/portfolio/aria-chen-design-systems",
    title: "Aria Chen Design Systems",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Staff design technologist portfolio showcasing multi-brand token repositories, accessible component engines, and documentation portals.",
    tags: ["Staff Technologist", "Design Tokens", "Accessibility"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "julian-cruz-fine-art",
    slug: "/demos/portfolio/julian-cruz-fine-art",
    title: "Julián Cruz Contemporary Art",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Contemporary oil painter and installation artist archive with high-fidelity texture zoom, exhibition timelines, and collector inquiries.",
    tags: ["Contemporary Art", "Texture Zoom", "Exhibition Timeline"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "tara-novak-product-design",
    slug: "/demos/portfolio/tara-novak-product-design",
    title: "Tara Novak Product Design",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Principal product designer case studies detailing 0-to-1 fintech products, user onboarding funnel diagnostics, and complex design systems.",
    tags: ["Fintech UX", "Case Studies", "Funnel Optimization"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "dmitri-volkov-creative-tech",
    slug: "/demos/portfolio/dmitri-volkov-creative-tech",
    title: "Dmitri Volkov Creative Tech",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Creative technologist portfolio exploring physical computing, LiDAR point cloud interactive scans, and generative code experiments.",
    tags: ["Creative Tech", "LiDAR Scans", "Generative Code"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "zoe-sterling-photography",
    slug: "/demos/portfolio/zoe-sterling-photography",
    title: "Zoë Sterling Photography",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Editorial fashion and documentary photographer portfolio with masonry image grids, full-bleed lightbox views, and darkroom metadata.",
    tags: ["Documentary", "Fashion Photo", "Masonry Grid"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "nicoletta-moretti-editorial",
    slug: "/demos/portfolio/nicoletta-moretti-editorial",
    title: "Nicoletta Moretti Editorial",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Milanese publication designer and typographer showcasing bespoke magazine layouts, book binding craftsmanship, and font specimens.",
    tags: ["Publication Design", "Milanese Type", "Book Binding"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "devon-bailey-code-craft",
    slug: "/demos/portfolio/devon-bailey-code-craft",
    title: "Devon Bailey Code & Craft",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Full-stack design engineer portfolio balancing aesthetic sensitivity with high-performance React, Next.js, and server-side optimization.",
    tags: ["Design Engineer", "Performance", "React Polish"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "maya-lin-experimental",
    slug: "/demos/portfolio/maya-lin-experimental",
    title: "Maya Lin Experimental Studio",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Experimental interactive artist crafting visceral browser toys, audio-reactive canvas experiments, and speculative interface designs.",
    tags: ["Speculative Design", "Audio-Reactive", "Web Toys"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "kai-takahashi-motion",
    slug: "/demos/portfolio/kai-takahashi-motion",
    title: "Kai Takahashi Motion Graphics",
    category: "Portfolio",
    categorySlug: "portfolio",
    status: "coming-soon",
    description:
      "Tokyo-based kinetic animator portfolio featuring title sequences for sci-fi cinema, broadcast idents, and dynamic logo choreography.",
    tags: ["Kinetic Animation", "Title Sequences", "Tokyo Motion"],
    accentColor: "#38bdf8",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 3. BARBER (15 items)
  // ==========================================
  {
    id: "crown-and-razor-barbershop",
    slug: "/demos/barber/crown-and-razor-barbershop",
    title: "Crown & Razor Barbershop",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Heritage grooming lounge offering precision scissor cuts, hot towel straight-razor shaves, and single-malt whiskey hospitality.",
    tags: ["Heritage Barber", "Hot Towel Shave", "Whiskey Bar"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "the-obsidian-shear",
    slug: "/demos/barber/the-obsidian-shear",
    title: "The Obsidian Shear",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Modern dark-lounge barbershop featuring Japanese forged shears, bespoke beard oil blending, and VIP private styling suites.",
    tags: ["Japanese Shears", "Beard Blending", "VIP Suite"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "gentlemen-heritage-club",
    slug: "/demos/barber/gentlemen-heritage-club",
    title: "Gentlemen's Heritage Club",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Traditional English barbershop experience with tufted leather chairs, badger-hair brushes, and signature bay rum aftershaves.",
    tags: ["English Heritage", "Leather Lounge", "Traditional Cuts"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "apex-barber-lounge",
    slug: "/demos/barber/apex-barber-lounge",
    title: "Apex Barber Lounge",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Upscale metropolitan grooming atelier offering modern skin fades, facial scalp therapies, and seamless online chair reservations.",
    tags: ["Skin Fades", "Scalp Therapy", "Instant Booking"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "iron-and-strop-co",
    slug: "/demos/barber/iron-and-strop-co",
    title: "Iron & Strop Co.",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Industrial-aesthetic craft barbershop honoring vintage razor restoration, cold craft beer, and community conversations.",
    tags: ["Industrial Craft", "Vintage Razors", "Craft Beer"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "the-velvet-clipper",
    slug: "/demos/barber/the-velvet-clipper",
    title: "The Velvet Clipper",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Art Deco inspired gentlemen's salon providing soothing botanical head massages, textured scissor work, and grooming subscription boxes.",
    tags: ["Art Deco", "Botanical Care", "Subscription Box"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "sovereign-barber-studio",
    slug: "/demos/barber/sovereign-barber-studio",
    title: "Sovereign Barber Studio",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Elite private members grooming club offering bespoke hair consultations, precision line-ups, and luxury cologne pairings.",
    tags: ["Members Club", "Precision Lineup", "Luxury Cologne"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "district-01-cuts",
    slug: "/demos/barber/district-01-cuts",
    title: "District 01 Cuts",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Contemporary urban barbershop rooted in street culture, vinyl record soundscapes, and razor-sharp taper fades.",
    tags: ["Urban Culture", "Vinyl Records", "Taper Fades"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "baron-grooming-parlour",
    slug: "/demos/barber/baron-grooming-parlour",
    title: "Baron Grooming Parlour",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Historic European grooming parlour preserving century-old straight razor shaving rituals and artisan pomade concoctions.",
    tags: ["European Heritage", "Straight Razor", "Artisan Pomade"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "true-north-barber-co",
    slug: "/demos/barber/true-north-barber-co",
    title: "True North Barber Co.",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Nordic timber barbershop emphasizing cedarwood scented beard balms, natural light stations, and organic scalp detox treatments.",
    tags: ["Nordic Timber", "Cedarwood Balms", "Scalp Detox"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "artisan-blade-studio",
    slug: "/demos/barber/artisan-blade-studio",
    title: "Artisan Blade Studio",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Master barber atelier dedicated to bespoke hair styling, facial contouring, and handcrafted Damascus steel razor blades.",
    tags: ["Damascus Steel", "Facial Contouring", "Master Barber"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "legacy-chop-shop",
    slug: "/demos/barber/legacy-chop-shop",
    title: "Legacy Chop Shop",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "High-energy community barbershop with fast turnaround, legendary neighborhood banter, and classic pompadour styling.",
    tags: ["Community Hub", "Classic Pompadour", "High Energy"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "the-modern-groom",
    slug: "/demos/barber/the-modern-groom",
    title: "The Modern Groom",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Tech-forward grooming studio featuring automated chair reservations, contactless payment, and digital hair consultation previews.",
    tags: ["Tech Grooming", "Digital Preview", "Express Cut"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "gentry-and-fade",
    slug: "/demos/barber/gentry-and-fade",
    title: "Gentry & Fade",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Refined salon for the modern professional featuring espresso bar service, tailored cut consultations, and executive maintenance packages.",
    tags: ["Executive Care", "Espresso Bar", "Professional Styles"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "kinsman-shave-co",
    slug: "/demos/barber/kinsman-shave-co",
    title: "Kinsman Shave Co.",
    category: "Barber",
    categorySlug: "barber",
    status: "coming-soon",
    description:
      "Old-world shaving parlour specializing in sandalwood warm foam treatments, cold compress toning, and father-and-son tradition haircuts.",
    tags: ["Sandalwood Foam", "Cold Compress", "Tradition Cuts"],
    accentColor: "#d97706",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 4. RESTAURANT (15 items)
  // ==========================================
  {
    id: "umami-hearth-izakaya",
    slug: "/demos/restaurant/umami-hearth-izakaya",
    title: "Umami Hearth Modern Izakaya",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Binchotan charcoal robata grill and rare sake cellar dining experience set in a tranquil cedarwood and charred black cedar interior.",
    tags: ["Charcoal Robata", "Rare Sake Cellar", "Modern Izakaya"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "atelier-sauvage-fine-dining",
    slug: "/demos/restaurant/atelier-sauvage-fine-dining",
    title: "Atelier Sauvage Fine Dining",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Two-Michelin-star foraging culinary workshop featuring an ever-evolving twelve-course seasonal tasting menu and biodynamic wine pairing.",
    tags: ["Michelin Star", "Foraged Tasting", "Biodynamic Wine"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "laura-bistro-and-wine",
    slug: "/demos/restaurant/laura-bistro-and-wine",
    title: "L'Aura Bistro & Wine",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Intimate candlelit French wine bar and neighborhood bistro serving artisanal charcuterie, handmade sourdough, and natural vintages.",
    tags: ["Natural Wine", "French Bistro", "Artisan Charcuterie"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "terra-madre-farm-to-table",
    slug: "/demos/restaurant/terra-madre-farm-to-table",
    title: "Terra Madre Farm-to-Table",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Zero-kilometer regenerative agricultural dining experience located within a sunlit glasshouse surrounded by heirloom vegetable gardens.",
    tags: ["Regenerative Farm", "Zero Kilometer", "Glasshouse Dining"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "the-smoked-oak-smokehouse",
    slug: "/demos/restaurant/the-smoked-oak-smokehouse",
    title: "The Smoked Oak Smokehouse",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Craft Texas barbecue smokehouse featuring 18-hour oak-smoked prime brisket, house-made fermented sauces, and bourbon cocktail pairings.",
    tags: ["Oak-Smoked Brisket", "Texas BBQ", "Bourbon Cocktails"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "solstice-rooftop-lounge",
    slug: "/demos/restaurant/solstice-rooftop-lounge",
    title: "Solstice Rooftop Lounge",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Panoramic skyline rooftop restaurant offering Mediterranean crudo plates, infinity pool views, and sunset electronic lounge sessions.",
    tags: ["Skyline Rooftop", "Mediterranean Crudo", "Sunset Lounge"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "komorebi-tea-and-kaiseki",
    slug: "/demos/restaurant/komorebi-tea-and-kaiseki",
    title: "Komorebi Tea & Kaiseki",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Kyoto-inspired multi-course kaiseki ritual accompanied by single-origin ceremonial Uji matcha and Zen rock garden tranquility.",
    tags: ["Kyoto Kaiseki", "Ceremonial Matcha", "Zen Garden"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "osteria-del-mare",
    slug: "/demos/restaurant/osteria-del-mare",
    title: "Osteria Del Mare",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Coastal Italian seafood osteria celebrating hand-rolled squid ink tagliolini, salt-crusted branzino, and chilled Amalfi limoncello.",
    tags: ["Coastal Italian", "Fresh Catch", "Handmade Pasta"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "saffron-and-silk-dining",
    slug: "/demos/restaurant/saffron-and-silk-dining",
    title: "Saffron & Silk Persian Dining",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Opulent Persian culinary salon featuring saffron-infused tahdig, slow-simmered pomegranate stews, and rosewater cardamon desserts.",
    tags: ["Persian Cuisine", "Saffron Tahdig", "Silk Salon"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "nordic-pine-cuisine",
    slug: "/demos/restaurant/nordic-pine-cuisine",
    title: "Nordic Pine Cuisine",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "New Nordic gastronomy highlighting smoked reindeer heart, fermented cloudberries, and juniper-infused bone broths by open fire.",
    tags: ["New Nordic", "Fermentation", "Open Fire Hearth"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "fire-and-flour-pizza",
    slug: "/demos/restaurant/fire-and-flour-pizza",
    title: "Fire & Flour Neapolitan",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Artisan 900-degree volcanic stone oven pizzeria with 72-hour cold fermented dough, San Marzano D.O.P. tomatoes, and buffalo mozzarella.",
    tags: ["Neapolitan Pizza", "Volcanic Oven", "Cold Fermented"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "bonsai-sushi-bar",
    slug: "/demos/restaurant/bonsai-sushi-bar",
    title: "Bonsai Omakase Sushi Bar",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Exclusive 10-seat omakase counter serving aged wild-caught fish flown directly from Toyosu market, brushed with barrel-aged shoyu.",
    tags: ["10-Seat Omakase", "Toyosu Market", "Aged Edomae"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "velvet-ember-steakhouse",
    slug: "/demos/restaurant/velvet-ember-steakhouse",
    title: "Velvet Ember Prime Steakhouse",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Bespoke dry-aging steakhouse featuring 60-day whiskey-infused tomahawks, bone marrow crusts, and leather booth private service.",
    tags: ["Dry-Aged Tomahawk", "Prime Beef", "Whiskey Infused"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "brambles-artisan-bakery",
    slug: "/demos/restaurant/brambles-artisan-bakery",
    title: "Brambles Artisan Bakery & Cafe",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Morning viennoiserie, sourdough levain loaves, and specialty single-origin espresso in a warm brass and terracotta sunroom.",
    tags: ["Sourdough Levain", "Viennoiserie", "Terracotta Cafe"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "zenith-botanical-cocktail",
    slug: "/demos/restaurant/zenith-botanical-cocktail",
    title: "Zenith Botanical Cocktail Bar",
    category: "Restaurant",
    categorySlug: "restaurant",
    status: "coming-soon",
    description:
      "Speakeasy cocktail laboratory extracting botanical essences through rotary evaporation, pairing drinks with delicate dim sum bites.",
    tags: ["Rotary Evaporation", "Botanical Mixology", "Dim Sum Pairing"],
    accentColor: "#f97316",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 5. FASHION (15 items)
  // ==========================================
  {
    id: "maison-noir-atelier",
    slug: "/demos/fashion/maison-noir-atelier",
    title: "Maison Noir Avant-Garde Atelier",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "High-fashion couture atelier presenting sculpted obsidian silhouettes, architectural draping, and hand-finished Japanese wool coats.",
    tags: ["Haute Couture", "Architectural Draping", "Japanese Wool"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "silque-minimalist-essentials",
    slug: "/demos/fashion/silque-minimalist-essentials",
    title: "Silque Minimalist Essentials",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Capsule wardrobe brand crafted from organic Mulberry silk and ethical cashmere in calming neutral monochrome hues.",
    tags: ["Mulberry Silk", "Capsule Wardrobe", "Ethical Cashmere"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aethel-outerwear",
    slug: "/demos/fashion/aethel-outerwear",
    title: "Aethel Technical Outerwear",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Waterproof urban commuter parkas and technical shells featuring Dyneema composite fabrics and magnetic fidlock closures.",
    tags: ["Technical Outerwear", "Dyneema Fabric", "Urban Shell"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "vanguard-streetwear-collective",
    slug: "/demos/fashion/vanguard-streetwear-collective",
    title: "Vanguard Streetwear Collective",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Limited-edition drop platform highlighting heavyweight 500GSM hoodies, boxy cuts, and subversive typography prints.",
    tags: ["Streetwear Drop", "Heavyweight Cotton", "Subversive Type"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "couture-89-joaillerie",
    slug: "/demos/fashion/couture-89-joaillerie",
    title: "Couture 89 Haute Joaillerie",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Bespoke high jewelry salon showcasing ethically mined Colombian emeralds, recycled 18k yellow gold, and one-of-a-kind tiaras.",
    tags: ["Haute Joaillerie", "Colombian Emeralds", "Bespoke Jewelry"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "ethereal-thread-silk",
    slug: "/demos/fashion/ethereal-thread-silk",
    title: "Ethereal Thread Sustainable Silk",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Artisanal slow-fashion label producing botanical-dyed peace silk evening gowns with fluid movement and low-impact production.",
    tags: ["Peace Silk", "Botanical Dye", "Slow Fashion"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "kuro-denim-heritage",
    slug: "/demos/fashion/kuro-denim-heritage",
    title: "Kuro Denim Heritage Works",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Kojima vintage shuttle loom selvedge denim, rope-dyed in natural indigo for rich, authentic patina fades over decades.",
    tags: ["Selvedge Denim", "Natural Indigo", "Kojima Mills"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "lhorizon-resort-swim",
    slug: "/demos/fashion/lhorizon-resort-swim",
    title: "L'Horizon Resort & Swim",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Mediterranean luxury resortwear featuring breathable linen tunics, recycled ocean fiber swimsuits, and sun-washed pastels.",
    tags: ["Resortwear", "Linen Tunics", "Recycled Swim"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "solitaire-bespoke-tailoring",
    slug: "/demos/fashion/solitaire-bespoke-tailoring",
    title: "Solitaire Bespoke Tailoring",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Savile Row craftsmanship offering hand-canvassed three-piece suits, horn buttons, and individual client pattern drafting.",
    tags: ["Savile Row", "Hand-Canvassed", "Bespoke Suiting"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "nova-kicks-footwear",
    slug: "/demos/fashion/nova-kicks-footwear",
    title: "Nova Kicks Luxury Footwear",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Handmade Italian calfskin luxury sneakers combining vintage court silhouettes with carbon-fiber arch stabilization.",
    tags: ["Italian Calfskin", "Luxury Sneakers", "Carbon Arch"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aura-leather-studio",
    slug: "/demos/fashion/aura-leather-studio",
    title: "Aura Leather Studio",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Vegetable-tanned full-grain leather bags and weekend duffels saddle-stitched by hand with lifetime repair guarantees.",
    tags: ["Vegetable-Tanned", "Saddle Stitch", "Leather Bags"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "kinfolk-knitwear-labs",
    slug: "/demos/fashion/kinfolk-knitwear-labs",
    title: "Kinfolk Knitwear Labs",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Zero-waste seamless 3D knit sweaters woven from Scottish Shetland wool and Mongolian yak fleece for extreme warmth.",
    tags: ["Seamless 3D Knit", "Shetland Wool", "Zero-Waste"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "urban-nomad-apparel",
    slug: "/demos/fashion/urban-nomad-apparel",
    title: "Urban Nomad Technical Apparel",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Modular travel garments with hidden passport pockets, wrinkle-resistant four-way stretch, and climate-adaptive ventilation.",
    tags: ["Modular Travel", "Four-Way Stretch", "Packable"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "stelvio-eyewear-atelier",
    slug: "/demos/fashion/stelvio-eyewear-atelier",
    title: "Stelvio Eyewear Atelier",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Handcrafted Japanese titanium spectacles and bio-acetate sunglasses fitted with polarized mineral glass lenses.",
    tags: ["Japanese Titanium", "Bio-Acetate", "Polarized Glass"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "velvet-rebel-statement",
    slug: "/demos/fashion/velvet-rebel-statement",
    title: "Velvet Rebel Statement Wear",
    category: "Fashion",
    categorySlug: "fashion",
    status: "coming-soon",
    description:
      "Bold theatrical red-carpet dresses featuring hand-embroidered sequin constellations, liquid lame, and dramatic cathedral trains.",
    tags: ["Red Carpet", "Sequin Constellation", "Dramatic Train"],
    accentColor: "#ec4899",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 6. COSMETICS (5 items)
  // ==========================================
  {
    id: "lumina-botanicals-skincare",
    slug: "/demos/cosmetics/lumina-botanicals-skincare",
    title: "Lumina Botanicals Clean Skincare",
    category: "Cosmetics",
    categorySlug: "cosmetics",
    status: "coming-soon",
    description:
      "Clinical-grade clean skincare formulations powered by wild-harvested alpine botanicals, marine algae peptides, and cold-pressed seed oils.",
    tags: ["Clean Skincare", "Marine Peptides", "Cold-Pressed Oils"],
    accentColor: "#a855f7",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "velour-pigments-beauty",
    slug: "/demos/cosmetics/velour-pigments-beauty",
    title: "Velour Pigments Luxury Beauty",
    category: "Cosmetics",
    categorySlug: "cosmetics",
    status: "coming-soon",
    description:
      "Ultra-pigmented velvet matte lip colors, weightless foundation emulsions, and radiant cream highlighters in sculptural metal compacts.",
    tags: ["Velvet Matte", "Metal Compacts", "High Pigment"],
    accentColor: "#a855f7",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aura-radiance-serum-lab",
    slug: "/demos/cosmetics/aura-radiance-serum-lab",
    title: "Aura Radiance Serum Lab",
    category: "Cosmetics",
    categorySlug: "cosmetics",
    status: "coming-soon",
    description:
      "Cellular bio-repair serums engineered with multi-molecular hyaluronic acids, stabilized vitamin C esters, and bakuchiol retinol alternatives.",
    tags: ["Cellular Bio-Repair", "Hyaluronic Acid", "Vitamin C"],
    accentColor: "#a855f7",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "pure-nectar-organics",
    slug: "/demos/cosmetics/pure-nectar-organics",
    title: "Pure Nectar Organics",
    category: "Cosmetics",
    categorySlug: "cosmetics",
    status: "coming-soon",
    description:
      "Raw flower honey and royal jelly infused restorative face masks, microbiome-friendly cleansers, and soothing barrier creams.",
    tags: ["Royal Jelly", "Microbiome Barrier", "Organic Skincare"],
    accentColor: "#a855f7",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "obsidian-elixir-night",
    slug: "/demos/cosmetics/obsidian-elixir-night",
    title: "Obsidian Elixir Night Recovery",
    category: "Cosmetics",
    categorySlug: "cosmetics",
    status: "coming-soon",
    description:
      "Overnight regenerative facial treatment featuring black truffle extract, precious amber resin oil, and copper peptide matrix rebuilding.",
    tags: ["Black Truffle", "Amber Resin Oil", "Night Recovery"],
    accentColor: "#a855f7",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 7. DENTAL (5 items)
  // ==========================================
  {
    id: "apex-pearl-modern-dental",
    slug: "/demos/dental/apex-pearl-modern-dental",
    title: "Apex Pearl Modern Dental Studio",
    category: "Dental",
    categorySlug: "dental",
    status: "coming-soon",
    description:
      "Spa-like aesthetic dental sanctuary featuring AI smile simulation, porcelain veneer mastery, and ceiling entertainment suites.",
    tags: ["Smile Simulation", "Porcelain Veneers", "Spa Dentistry"],
    accentColor: "#06b6d4",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aurasmile-aesthetic-dentistry",
    slug: "/demos/dental/aurasmile-aesthetic-dentistry",
    title: "AuraSmile Aesthetic Dentistry",
    category: "Dental",
    categorySlug: "dental",
    status: "coming-soon",
    description:
      "Minimally invasive smile design clinic specializing in biomimetic composite bonding, painless laser teeth whitening, and sleep apnea care.",
    tags: ["Biomimetic Bonding", "Laser Whitening", "Smile Design"],
    accentColor: "#06b6d4",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "lumina-orthodontics-implants",
    slug: "/demos/dental/lumina-orthodontics-implants",
    title: "Lumina Orthodontics & Implants",
    category: "Dental",
    categorySlug: "dental",
    status: "coming-soon",
    description:
      "Digital orthodontics hub providing customized clear aligners, same-day ceramic crowns, and 3D guided surgical implant placement.",
    tags: ["Clear Aligners", "Guided Implants", "Same-Day Crowns"],
    accentColor: "#06b6d4",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "sovereign-dental-wellness",
    slug: "/demos/dental/sovereign-dental-wellness",
    title: "Sovereign Dental Wellness",
    category: "Dental",
    categorySlug: "dental",
    status: "coming-soon",
    description:
      "Comprehensive biological oral health clinic integrating biocompatible materials, ozone therapy, and holistic periodontal protocols.",
    tags: ["Holistic Dentistry", "Ozone Therapy", "Biocompatible"],
    accentColor: "#06b6d4",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "purewhite-pediatric-family",
    slug: "/demos/dental/purewhite-pediatric-family",
    title: "PureWhite Pediatric & Family Dental",
    category: "Dental",
    categorySlug: "dental",
    status: "coming-soon",
    description:
      "Warm, stress-free family dental studio featuring interactive gaming waiting zones, gentle pediatric dentistry, and preventive sealants.",
    tags: ["Pediatric Care", "Family Dental", "Stress-Free"],
    accentColor: "#06b6d4",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 8. MEDICAL (5 items)
  // ==========================================
  {
    id: "novus-health-integrative",
    slug: "/demos/medical/novus-health-integrative",
    title: "Novus Health Integrative Medicine",
    category: "Medical",
    categorySlug: "medical",
    status: "coming-soon",
    description:
      "Precision functional healthcare practice integrating genetic biomarker screening, metabolic optimization, and personalized longevity plans.",
    tags: ["Functional Medicine", "Biomarker Screening", "Longevity"],
    accentColor: "#10b981",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "st-luke-cardiovascular-longevity",
    slug: "/demos/medical/st-luke-cardiovascular-longevity",
    title: "St. Luke Cardiovascular & Longevity Center",
    category: "Medical",
    categorySlug: "medical",
    status: "coming-soon",
    description:
      "Advanced preventative cardiology hospital featuring high-resolution coronary CTA imaging, VO2 max endurance labs, and arterial rehab.",
    tags: ["Preventative Cardiology", "Coronary CTA", "Arterial Health"],
    accentColor: "#10b981",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "zenith-neurological-institute",
    slug: "/demos/medical/zenith-neurological-institute",
    title: "Zenith Neurological Institute",
    category: "Medical",
    categorySlug: "medical",
    status: "coming-soon",
    description:
      "Frontier neuroscience center diagnosing complex sleep disorders, cognitive decline mitigation, and non-invasive neuro-modulation therapies.",
    tags: ["Neuroscience", "Cognitive Health", "Sleep Medicine"],
    accentColor: "#10b981",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "auracare-telehealth-diagnostics",
    slug: "/demos/medical/auracare-telehealth-diagnostics",
    title: "AuraCare Telehealth & Diagnostics",
    category: "Medical",
    categorySlug: "medical",
    status: "coming-soon",
    description:
      "24/7 on-demand digital clinic with AI symptom triage, electronic prescription fulfillment, and home blood testing delivery kits.",
    tags: ["Telehealth 24/7", "AI Symptom Triage", "Home Blood Kits"],
    accentColor: "#10b981",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "vanguard-orthopedic-sports",
    slug: "/demos/medical/vanguard-orthopedic-sports",
    title: "Vanguard Orthopedic & Sports Clinic",
    category: "Medical",
    categorySlug: "medical",
    status: "coming-soon",
    description:
      "Premier sports medicine clinic offering robotic joint replacement, platelet-rich plasma (PRP) therapy, and Olympian physical rehabilitation.",
    tags: ["Sports Medicine", "Robotic Surgery", "PRP Therapy"],
    accentColor: "#10b981",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 9. TRAVEL (5 items)
  // ==========================================
  {
    id: "elysian-escapes-expeditions",
    slug: "/demos/travel/elysian-escapes-expeditions",
    title: "Elysian Escapes Luxury Expeditions",
    category: "Travel",
    categorySlug: "travel",
    status: "coming-soon",
    description:
      "Ultra-private bespoke journeys to secluded sanctuaries: from helicopter glacier landings in Patagonia to private atoll villas in the Maldives.",
    tags: ["Luxury Expeditions", "Helicopter Safari", "Private Atoll"],
    accentColor: "#14b8a6",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "nordic-aurora-arctic-journeys",
    slug: "/demos/travel/nordic-aurora-arctic-journeys",
    title: "Nordic Aurora Arctic Journeys",
    category: "Travel",
    categorySlug: "travel",
    status: "coming-soon",
    description:
      "Geodesic glass dome stays beneath the Northern Lights, private reindeer sledding through Lapland, and geothermal mineral lagoon soaks.",
    tags: ["Aurora Borealis", "Glass Dome", "Arctic Lapland"],
    accentColor: "#14b8a6",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "terra-incognita-eco-retreats",
    slug: "/demos/travel/terra-incognita-eco-retreats",
    title: "Terra Incognita Eco Retreats",
    category: "Travel",
    categorySlug: "travel",
    status: "coming-soon",
    description:
      "Zero-carbon luxury treehouse canopy lodges nestled in Costa Rican cloud forests, guided biodiversity hikes, and volcanic hot spring spas.",
    tags: ["Eco Retreat", "Canopy Lodge", "Zero Carbon"],
    accentColor: "#14b8a6",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "aerovoyage-private-jet-safari",
    slug: "/demos/travel/aerovoyage-private-jet-safari",
    title: "AeroVoyage Private Jet & Safari",
    category: "Travel",
    categorySlug: "travel",
    status: "coming-soon",
    description:
      "Seamless private jet circumnavigation of the African savannah with mobile tented camps, hot air balloon flights, and wildlife photography.",
    tags: ["Private Jet", "African Safari", "Tented Camp"],
    accentColor: "#14b8a6",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "azure-villa-mediterranean-yacht",
    slug: "/demos/travel/azure-villa-mediterranean-yacht",
    title: "Azure Villa Mediterranean Yacht Club",
    category: "Travel",
    categorySlug: "travel",
    status: "coming-soon",
    description:
      "Chartered 50-meter superyacht itineraries exploring hidden Amalfi coves, secluded Cycladic anchorages, and private cliffside villas.",
    tags: ["Superyacht Charter", "Amalfi Coast", "Cliffside Villa"],
    accentColor: "#14b8a6",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 10. CARS (2 items)
  // ==========================================
  {
    id: "veloce-hypercar-atelier",
    slug: "/demos/cars/veloce-hypercar-atelier",
    title: "Veloce Hypercar Atelier & Showroom",
    category: "Cars",
    categorySlug: "cars",
    status: "coming-soon",
    description:
      "Handcrafted quad-turbocharged hypercar showroom featuring aerodynamic wind tunnel telemetry, bare carbon monocoques, and track delivery.",
    tags: ["Quad-Turbo", "Carbon Monocoque", "Hypercar Atelier"],
    accentColor: "#e11d48",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "apex-electric-luxury-ev",
    slug: "/demos/cars/apex-electric-luxury-ev",
    title: "Apex Electric Luxury EV Concierge",
    category: "Cars",
    categorySlug: "cars",
    status: "coming-soon",
    description:
      "Next-generation solid-state battery grand tourer concierge offering 1,200HP whisper-quiet acceleration and bespoke interior personalization.",
    tags: ["Solid-State EV", "1200 Horsepower", "Grand Tourer"],
    accentColor: "#e11d48",
    year: 2026,
    badge: "Coming Soon",
  },

  // ==========================================
  // 11. MOTORCYCLE (2 items)
  // ==========================================
  {
    id: "blacksmith-custom-moto-works",
    slug: "/demos/motorcycle/blacksmith-custom-moto-works",
    title: "Blacksmith Custom Moto Works",
    category: "Motorcycle",
    categorySlug: "motorcycle",
    status: "coming-soon",
    description:
      "Hand-formed aluminum fuel tanks, bespoke stainless exhaust pipes, and tuned air-cooled twin cafe racers crafted in an industrial foundry.",
    tags: ["Cafe Racer", "Hand-Formed Aluminum", "Twin Engine"],
    accentColor: "#eab308",
    year: 2026,
    badge: "Coming Soon",
  },
  {
    id: "phantom-electric-superbike-lab",
    slug: "/demos/motorcycle/phantom-electric-superbike-lab",
    title: "Phantom Electric Superbike Lab",
    category: "Motorcycle",
    categorySlug: "motorcycle",
    status: "coming-soon",
    description:
      "Ultra-lightweight carbon frame electric superbikes with regenerative braking telemetry, 0-100 km/h in 2.1s, and heads-up helmet pairing.",
    tags: ["Electric Superbike", "Sub-2.5s Zero-60", "Carbon Frame"],
    accentColor: "#eab308",
    year: 2026,
    badge: "Coming Soon",
  },
];

// Verify total count equals 99
if (process.env.NODE_ENV !== "production") {
  if (DEMOS_REGISTRY.length !== 99) {
    console.warn(`[demosRegistry] Expected 99 demos, but found ${DEMOS_REGISTRY.length}`);
  }
}

/**
 * Returns a live count of demos matching each category.
 */
export function getCategoryCounts(items: DemoItem[] = DEMOS_REGISTRY): Record<string, number> {
  const counts: Record<string, number> = {
    all: items.length,
    agency: 0,
    portfolio: 0,
    barber: 0,
    restaurant: 0,
    fashion: 0,
    cosmetics: 0,
    dental: 0,
    medical: 0,
    travel: 0,
    cars: 0,
    motorcycle: 0,
  };

  for (const item of items) {
    const key = item.category.toLowerCase();
    if (key in counts) {
      counts[key]++;
    }
  }

  return counts;
}

/**
 * Filters the demos registry by category and search keyword.
 */
export function filterDemos(
  items: DemoItem[] = DEMOS_REGISTRY,
  category: string = "all",
  searchQuery: string = ""
): DemoItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    // 1. Category filter
    const matchesCategory =
      category === "all" ||
      item.category.toLowerCase() === category.toLowerCase() ||
      item.categorySlug === category;

    if (!matchesCategory) return false;

    // 2. Search query filter
    if (!query) return true;

    const inTitle = item.title.toLowerCase().includes(query);
    const inDescription = item.description.toLowerCase().includes(query);
    const inCategory = item.category.toLowerCase().includes(query);
    const inTags = item.tags.some((tag) => tag.toLowerCase().includes(query));
    const inSlug = item.slug.toLowerCase().includes(query);

    return inTitle || inDescription || inCategory || inTags || inSlug;
  });
}

/**
 * Retrieves a single demo item by slug.
 */
export function getDemoBySlug(slug: string): DemoItem | undefined {
  return DEMOS_REGISTRY.find((demo) => demo.slug === slug || demo.slug === `/${slug}`);
}

export default DEMOS_REGISTRY;
