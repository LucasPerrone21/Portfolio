export interface NavItem {
  label: string;
  href: string;
}

export interface CoreRuntimeTag {
  label: string;
  variant: 'outline' | 'navy' | 'navy-yellow';
}

export interface TopologyNode {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  variant: 'navy' | 'red' | 'navy-yellow';
}

export interface CompetencyCard {
  title: string;
  description: string;
  accentColor: 'navy' | 'red' | 'yellow';
}

export interface SkillBadge {
  label: string;
  variant: 'navy' | 'red' | 'dark' | 'yellow' | 'surface';
}

export interface CareerMilestone {
  id: string;
  statusBadge: string;
  isActive: boolean;
  period: string;
  role: string;
  organization: string;
  domainBadge?: {
    label: string;
    icon?: string;
    dotColor?: 'yellow' | 'red';
  };
  technicalVictory?: {
    kicker: string;
    from: string;
    to: string;
    description: string;
  };
  description: string;
  highlights: string[];
  tags: {
    label: string;
    variant: 'surface' | 'navy' | 'yellow' | 'red' | 'red-outline';
  }[];
  accentTheme: 'red' | 'navy' | 'muted' | 'yellow';
}

export interface ProjectMetric {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  caseNumber: string;
  selectorLabel: string;
  title: string;
  category: string;
  statusLabel: string;
  statusVariant: 'emerald' | 'navy' | 'navy-yellow' | 'navy-red';
  description: string;
  image: string;
  fallbackImage?: string;
  imageAlt: string;
  hudTopRightBadge: string;
  hudTopRightVariant: 'yellow-outline' | 'white-outline' | 'red-solid';
  hudBottomLeftLabel: string;
  hudBottomDotColor: 'red' | 'yellow' | 'emerald';
  hudBottomRightLabel: string;
  hudBottomRightColor: 'yellow' | 'red' | 'emerald';
  accentBorderColor: 'red' | 'navy' | 'yellow';
  tags: {
    label: string;
    variant: 'navy' | 'red' | 'surface' | 'yellow-soft' | 'red-soft';
  }[];
  metrics?: ProjectMetric[];
  primaryAction: {
    label: string;
    href: string;
    icon: string;
    variant: 'red' | 'navy';
  };
  secondaryAction: {
    label: string;
    href: string;
    icon: string;
  };
  specFooter: string;
}

export interface TechStackItem {
  name: string;
  badge: string;
  badgeVariant?: 'red' | 'navy' | 'navy-yellow-pill';
}

export interface TechDomainCategory {
  title: string;
  kicker: string;
  kickerColor: 'red' | 'navy';
  topBorderColor: 'red' | 'navy' | 'yellow';
  description: string;
  items: TechStackItem[];
}

