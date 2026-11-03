export interface NavItem {
  label: string;
  href: string;
  children?: {
    title: string;
    description: string;
    href: string;
    number?: string;
  }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  href: string;
  isFeatured?: boolean;
  highlight?: string;
}

export interface SectorItem {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface InsightItem {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  href: string;
}

export interface CommitmentPillar {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
}

