import { NavItem, ServiceItem, SectorItem, ApproachStep, InsightItem, CommitmentPillar, WhyUsPoint } from "@/types";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
    children: [
      {
        number: "01",
        title: "Investor Relations",
        description: "Build informed investor relationships through clear, consistent communication and targeted shareholder engagement.",
        href: "#services",
      },
      {
        number: "02",
        title: "Capital Markets Advisory",
        description: "Navigate the capital markets with strategic insight, market positioning and financial communications expertise.",
        href: "#services",
      },
      {
        number: "03",
        title: "Public Relations",
        description: "Shape a compelling company narrative and connect it with the media and audiences that matter.",
        href: "#services",
      },
      {
        number: "04",
        title: "Digital & Social Media",
        description: "Extend your reach through integrated digital content, social channels and investor focused campaigns.",
        href: "#services",
      },
      {
        number: "05",
        title: "Mergers & Acquisitions",
        description: "Communicate strategic opportunities with clarity and support stakeholder understanding throughout a transaction.",
        href: "#services",
      },
      {
        number: "06",
        title: "Strategic Communications & Global Outreach",
        description: "Bring your investment story to international audiences through coordinated communications and outreach.",
        href: "#services",
      },
    ],
  },
  {
    label: "Sectors",
    href: "#sectors",
    children: [
      {
        number: "01",
        title: "Mining",
        description: "Connecting resource companies with investors who understand the opportunity beneath the surface.",
        href: "#sectors",
      },
      {
        number: "02",
        title: "Technology",
        description: "Bringing innovation stories to an informed, connected investment audience.",
        href: "#sectors",
      },
      {
        number: "03",
        title: "Blockchain",
        description: "Clear communication for businesses shaping the next generation of digital infrastructure.",
        href: "#sectors",
      },
      {
        number: "04",
        title: "Psychedelics",
        description: "Building understanding around an evolving field of research and discovery.",
        href: "#sectors",
      },
      {
        number: "05",
        title: "Pharmaceuticals",
        description: "Translating complex science into a clear and compelling investment narrative.",
        href: "#sectors",
      },
      {
        number: "06",
        title: "Cannabis",
        description: "Strategic market visibility for companies across the cannabis industry.",
        href: "#sectors",
      },
    ],
  },
  {
    label: "Insights",
    href: "#insights",
  },
  {
    label: "Clients",
    href: "#clients",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const COMMITMENT_PILLARS: CommitmentPillar[] = [
  {
    number: "01",
    title: "Strategic Guidance",
    description: "Tailored strategies designed around your company s unique goals and investment objectives.",
  },
  {
    number: "02",
    title: "Global Network",
    description: "Access to a broad network of investors, financial institutions and industry connections.",
  },
  {
    number: "03",
    title: "Integrated Solutions",
    description: "Investor relations, financing communications, public relations and digital communications.",
  },
  {
    number: "04",
    title: "Measurable Impact",
    description: "Building awareness, attracting investor interest and supporting meaningful business outcomes.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Investor Relations",
    description: "Build informed investor relationships through clear, consistent communication and targeted shareholder engagement.",
    href: "#contact",
    isFeatured: true,
    highlight: "A stronger investment story. A more connected market presence.",
  },
  {
    number: "02",
    title: "Capital Markets Advisory",
    description: "Navigate the capital markets with strategic insight, market positioning and financial communications expertise.",
    href: "#contact",
  },
  {
    number: "03",
    title: "Public Relations",
    description: "Shape a compelling company narrative and connect it with the media and audiences that matter.",
    href: "#contact",
  },
  {
    number: "04",
    title: "Digital & Social Media",
    description: "Extend your reach through integrated digital content, social channels and investor focused campaigns.",
    href: "#contact",
  },
  {
    number: "05",
    title: "Mergers & Acquisitions",
    description: "Communicate strategic opportunities with clarity and support stakeholder understanding throughout a transaction.",
    href: "#contact",
  },
  {
    number: "06",
    title: "Strategic Communications & Global Outreach",
    description: "Bring your investment story to international audiences through coordinated communications and outreach.",
    href: "#contact",
  },
];

export const COMMUNICATION_CAPABILITIES = [
  "Newsletter & Email Blasts",
  "Conference Media Coverage",
  "Global Outreach",
  "Podcast & Interview Features",
  "Investor Campaigns",
  "Press Office",
  "Multimedia",
  "News Syndication",
];

export const SECTORS_DATA: SectorItem[] = [
  {
    number: "01",
    title: "Mining",
    description: "Connecting resource companies with investors who understand the opportunity beneath the surface.",
    image: "/images/sector-mining.jpg",
    href: "#contact",
  },
  {
    number: "02",
    title: "Technology",
    description: "Bringing innovation stories to an informed, connected investment audience.",
    image: "/images/sector-technology.jpg",
    href: "#contact",
  },
  {
    number: "03",
    title: "Blockchain",
    description: "Clear communication for businesses shaping the next generation of digital infrastructure.",
    image: "/images/sector-blockchain.jpg",
    href: "#contact",
  },
  {
    number: "04",
    title: "Psychedelics",
    description: "Building understanding around an evolving field of research and discovery.",
    image: "/images/sector-psychedelics.jpg",
    href: "#contact",
  },
  {
    number: "05",
    title: "Pharmaceuticals",
    description: "Translating complex science into a clear and compelling investment narrative.",
    image: "/images/sector-pharmaceuticals.jpg",
    href: "#contact",
  },
  {
    number: "06",
    title: "Cannabis",
    description: "Strategic market visibility for companies across the cannabis industry.",
    image: "/images/sector-cannabis.jpg",
    href: "#contact",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Discover the business, market position, objectives, target audiences and investment goals.",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description: "Develop tailored investor communication, market visibility, media and PR strategies.",
  },
  {
    number: "03",
    title: "CONNECT",
    description: "Connect companies with relevant investors, financial professionals, media and industry audiences.",
  },
  {
    number: "04",
    title: "GROW",
    description: "Strengthen visibility, investor engagement and long term market presence.",
  },
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: "resource-opportunity",
    category: "MARKET INSIGHTS",
    date: "Date to be supplied",
    title: "The investment story behind the resource opportunity.",
    description: "A sample perspective on communicating long term opportunity in a changing resources landscape.",
    image: "/images/insights-mining.jpg",
    href: "#insights",
  },
  {
    id: "connecting-innovation",
    category: "INDUSTRY UPDATES",
    date: "Date to be supplied",
    title: "Connecting innovation with the investment community.",
    description: "A sample look at how technology companies can build understanding among market audiences.",
    image: "/images/insights-tech.jpg",
    href: "#insights",
  },
  {
    id: "clearer-framework",
    category: "PRESS RELEASES",
    date: "Date to be supplied",
    title: "A clearer framework for company announcements.",
    description: "A sample editorial exploring the role of clarity and consistency in market communications.",
    href: "#insights",
  },
];

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    number: "01",
    title: "Industry Experience",
    description: "Approximately 40 years of team experience.",
  },
  {
    number: "02",
    title: "International Network",
    description: "Connections across North America, Europe and Asia.",
  },
  {
    number: "03",
    title: "Integrated Capabilities",
    description: "Investor relations, PR, digital media and communications.",
  },
  {
    number: "04",
    title: "Tailored Strategies",
    description: "Approaches developed around individual business objectives.",
  },
  {
    number: "05",
    title: "Relationship Driven",
    description: "Meaningful connections with investors and industry audiences.",
  },
];

export const GLOBAL_REGIONS = [
  { number: "01", name: "United States" },
  { number: "02", name: "Canada" },
  { number: "03", name: "Europe" },
  { number: "04", name: "Asia" },
];

