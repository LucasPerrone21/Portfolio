import profileImg from '../assets/images/profile.jpeg';
import case01Img from '../assets/images/case-01-financial.jpg';
import case02Svg from '../assets/images/case-02-sisu.svg';
import case03Img from '../assets/images/case-03-iot.jpg';
import case04Img from '../assets/images/case-04-distributed.jpg';
import type {
  CareerMilestone,
  CompetencyCard,
  CoreRuntimeTag,
  NavItem,
  ProjectCaseStudy,
  SkillBadge,
  TechDomainCategory,
  TopologyNode,
} from '../types/portfolio';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
];

export const HERO_CORE_RUNTIMES: CoreRuntimeTag[] = [
  { label: 'React', variant: 'navy-yellow' },
  { label: 'NestJS', variant: 'navy-yellow' },
  { label: 'TypeScript', variant: 'navy' },
  { label: 'Python', variant: 'outline' },
  { label: 'PostgreSQL', variant: 'outline' },
  { label: 'Redis', variant: 'outline' },
  { label: 'Docker', variant: 'outline' },
];

export const SYSTEM_TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: '01',
    title: 'API GATEWAY & REVERSE PROXY',
    subtitle: 'TLS 1.3 · Rate Limiter · Auth Guard',
    badge: 'NGINX',
    variant: 'navy',
  },
  {
    id: '02',
    title: 'NESTJS CORE & PYTHON WORKERS',
    subtitle: 'REST Endpoints · Web Scraping · n8n',
    badge: 'ACTIVE',
    variant: 'red',
  },
  {
    id: '03',
    title: 'POSTGRESQL & REDIS CACHING',
    subtitle: 'ACID Pool · Sub-second Key Invalidation',
    badge: 'REPLICATED',
    variant: 'navy-yellow',
  },
];

export const PROFILE_PHOTO = profileImg;

export const COMPETENCY_CARDS: CompetencyCard[] = [
  {
    title: 'APIs REST & Microsserviços',
    description:
      'Contratos estruturados com Swagger/OpenAPI, injeção de dependências modular no NestJS e separação estrita de camadas de domínio.',
    accentColor: 'navy',
  },
  {
    title: 'Automação & Web Scraping',
    description:
      'Crawlers tolerantes a bloqueios com Selenium/Playwright e orquestrações assíncronas com n8n para integração de sistemas legados.',
    accentColor: 'red',
  },
  {
    title: 'Bancos SQL & Cache',
    description:
      'Modelagem relacional em PostgreSQL, queries otimizadas, índices parciais e mitigação de picos de carga via Redis.',
    accentColor: 'yellow',
  },
  {
    title: 'Containerização & DevOps',
    description:
      'Ambientes reprodutíveis via Docker e Docker Compose, pipelines de integração contínua (CI/CD) e servidores Linux dedicados.',
    accentColor: 'navy',
  },
];

export const CONSOLIDATED_SKILLS: SkillBadge[] = [
  { label: 'NestJS', variant: 'navy' },
  { label: 'Node.js', variant: 'navy' },
  { label: 'Python', variant: 'red' },
  { label: 'TypeScript', variant: 'navy' },
  { label: 'PostgreSQL', variant: 'dark' },
  { label: 'Redis', variant: 'red' },
  { label: 'Docker & Compose', variant: 'navy' },
  { label: 'n8n Automation', variant: 'yellow' },
  { label: 'Selenium & Pandas', variant: 'surface' },
  { label: 'Prisma ORM', variant: 'surface' },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'fjs',
    statusBadge: 'MARCO ATUAL // ATIVO',
    isActive: true,
    period: 'JUNHO 2025 — ATUALMENTE',
    role: 'ESTAGIÁRIO DE INOVAÇÃO & TI',
    organization: 'FUNDAÇÃO JOSÉ SILVEIRA',
    domainBadge: {
      label: 'TELEMETRIA & HEALTHCARE IOT',
      dotColor: 'yellow',
    },
    description:
      'Pesquisa e prototipação de soluções de Internet das Coisas (IoT) aplicadas à saúde. Captura de telemetria contínua de sensores industriais e biomédicos, transmissão de dados em tempo real com pipelines de ingestão resilientes e dashboards operacionais em Next.js e TypeScript como camada analítica.',
    highlights: ['Next.js e TypeScript'],
    tags: [
      { label: 'IoT Sensors', variant: 'surface' },
      { label: 'Telemetria Hospitalar', variant: 'surface' },
      { label: 'Python', variant: 'surface' },
      { label: 'MQTT', variant: 'surface' },
      { label: 'Next.js', variant: 'surface' },
      { label: 'TypeScript', variant: 'navy' },
    ],
    accentTheme: 'red',
  },
  {
    id: 'titan',
    statusBadge: 'MARCO ATUAL // ATIVO',
    isActive: true,
    period: 'ABRIL 2024 — ATUALMENTE',
    role: 'DESENVOLVEDOR FULLSTACK & CONSULTOR COMERCIAL',
    organization: 'TITAN — EMPRESA JÚNIOR DE ENGENHARIA DE COMPUTAÇÃO DA UFBA',
    technicalVictory: {
      kicker: 'VITÓRIA TÉCNICA VERIFICADA',
      from: '4 HORAS',
      to: '10 SEGUNDOS',
      description:
        'Automação com n8n e scripts backend reduzindo drasticamente gargalo operacional.',
    },
    description:
      'Liderança técnica e desenvolvimento de microsserviços em NestJS, modelagem relacional avançada em PostgreSQL, implementação de fluxos automatizados de dados via n8n, esteiras de integração contínua (CI/CD) e consultoria técnica-comercial para prospecção e especificação de projetos de software.',
    highlights: ['NestJS', 'PostgreSQL', 'n8n'],
    tags: [
      { label: 'NestJS', variant: 'navy' },
      { label: 'TypeScript', variant: 'surface' },
      { label: 'PostgreSQL', variant: 'surface' },
      { label: 'n8n Workflows', variant: 'yellow' },
      { label: 'Docker', variant: 'surface' },
      { label: 'Consultoria Comercial', variant: 'red' },
    ],
    accentTheme: 'navy',
  },
  {
    id: 'sumai',
    statusBadge: 'MARCO CONCLUÍDO',
    isActive: false,
    period: 'JUNHO 2024 — JUNHO 2025',
    role: 'ESTAGIÁRIO DE DESENVOLVIMENTO FULLSTACK',
    organization: 'SUPERINTENDÊNCIA DE OBRAS E MEIO AMBIENTE (SUMAI — UFBA)',
    domainBadge: {
      label: 'GESTÃO PATRIMONIAL & AMBIENTAL',
      icon: 'check_circle',
    },
    description:
      'Desenvolvimento de aplicações e sistemas web internos voltados à gestão patrimonial, infraestrutura predial e sustentabilidade ambiental no campus da UFBA. Modelagem de APIs REST estruturadas em Node.js e Python, integração com banco de dados PostgreSQL e suporte contínuo aos fluxos operacionais da superintendência.',
    highlights: ['Node.js e Python', 'PostgreSQL'],
    tags: [
      { label: 'Fullstack', variant: 'surface' },
      { label: 'Node.js', variant: 'surface' },
      { label: 'Python', variant: 'surface' },
      { label: 'PostgreSQL', variant: 'surface' },
      { label: 'Sistemas Web', variant: 'surface' },
      { label: 'UFBA', variant: 'red-outline' },
    ],
    accentTheme: 'muted',
  },
  {
    id: 'ufba',
    statusBadge: 'EM FORMAÇÃO ACADÊMICA',
    isActive: false,
    period: '2022.1 — 2026.2 (PREV.)',
    role: 'GRADUANDO EM SISTEMAS DE INFORMAÇÃO',
    organization: 'UNIVERSIDADE FEDERAL DA BAHIA (UFBA)',
    domainBadge: {
      label: 'GRADUAÇÃO SUPERIOR // TI',
      icon: 'school',
    },
    description:
      'Base sólida em algoritmos e estruturas de dados, arquitetura de computadores, engenharia de software contemporânea, modelagem de banco de dados relacional e distribuído, e sistemas inteligentes com foco na integridade de sistemas computacionais de larga escala.',
    highlights: [],
    tags: [
      { label: 'Bacharelado', variant: 'navy' },
      { label: 'Sistemas de Informação', variant: 'surface' },
      { label: 'Arquitetura de Software', variant: 'surface' },
      { label: 'Modelagem SQL', variant: 'surface' },
      { label: 'UFBA', variant: 'red-outline' },
    ],
    accentTheme: 'yellow',
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'cade-meu-dinheiro',
    caseNumber: 'CASE // 01',
    selectorLabel: '01 // CADÊ MEU DINHEIRO',
    title: 'CADÊ MEU DINHEIRO — API FINANCEIRA & LIVRO-RAZÃO',
    category: 'FINANCIAL CORE ENGINE',
    statusLabel: 'STATUS: PRODUCTION',
    statusVariant: 'emerald',
    description:
      'API REST de alto desempenho para gestão orçamentária e conciliação de saldos em tempo real. Implementação orientada a transações com bloqueio otimista, cache de consultas em Redis e arquitetura em camadas estruturada em NestJS para isolar o motor de cálculo das regras de autorização JWT.',
    image: case01Img,
    imageAlt: 'Cadê Meu Dinheiro - Precision Financial Engine',
    hudTopRightBadge: 'P95 < 22MS',
    hudTopRightVariant: 'yellow-outline',
    hudBottomLeftLabel: 'CORE CONCILIATION ENGINE',
    hudBottomDotColor: 'red',
    hudBottomRightLabel: 'HOT REPLICATION',
    hudBottomRightColor: 'yellow',
    accentBorderColor: 'red',
    tags: [
      { label: 'NestJS', variant: 'navy' },
      { label: 'TypeScript', variant: 'surface' },
      { label: 'PostgreSQL', variant: 'surface' },
      { label: 'Redis Cache', variant: 'surface' },
      { label: 'Docker', variant: 'surface' },
      { label: 'ACID Transactions', variant: 'yellow-soft' },
    ],
    primaryAction: {
      label: 'VER PROJETO AO VIVO',
      href: 'https://github.com/lucasperrone',
      icon: 'bolt',
      variant: 'red',
    },
    secondaryAction: {
      label: 'VER REPOSITÓRIO',
      href: 'https://github.com/lucasperrone',
      icon: 'code',
    },
    specFooter: 'API SPEC v2.4 · STABLE',
  },
  {
    id: 'sisu-2026',
    caseNumber: 'CASE // 02',
    selectorLabel: '02 // SISU 2026',
    title: 'SISU 2026 — AUTOMAÇÃO DE NOTAS DE CORTE & CRAWLER PARALELO',
    category: 'DATA HARVESTING & ETL PIPELINE',
    statusLabel: 'PYTHON ENGINE // AUTOMATED',
    statusVariant: 'navy',
    description:
      'Pipeline automatizado de web scraping para extração contínua e processamento das notas de corte das universidades federais. O sistema utiliza instâncias assíncronas em Python com rotação de proxies, estruturação em Pandas e persistência normalizada em SQL para alimentar dashboards analíticos instantâneos.',
    image: case02Svg,
    fallbackImage: case02Svg,
    imageAlt: 'Sisu 2026 Automação e Data Harvesting',
    hudTopRightBadge: '50K REG/H',
    hudTopRightVariant: 'white-outline',
    hudBottomLeftLabel: 'PARALLEL HARVESTING CLUSTER',
    hudBottomDotColor: 'yellow',
    hudBottomRightLabel: 'ZERO IP BAN',
    hudBottomRightColor: 'red',
    accentBorderColor: 'navy',
    tags: [
      { label: 'Python', variant: 'red' },
      { label: 'Selenium', variant: 'surface' },
      { label: 'Playwright', variant: 'surface' },
      { label: 'Pandas ETL', variant: 'surface' },
      { label: 'PostgreSQL', variant: 'surface' },
      { label: 'Docker Swarm', variant: 'surface' },
    ],
    primaryAction: {
      label: 'VER CÓDIGO FONTE',
      href: 'https://github.com/lucasperrone',
      icon: 'code',
      variant: 'navy',
    },
    secondaryAction: {
      label: 'DOCUMENTAÇÃO ETL',
      href: 'https://github.com/lucasperrone',
      icon: 'description',
    },
    specFooter: 'PIPELINE AUTÔNOMO · 24/7 SCHEDULER',
  },
  {
    id: 'iot-industrial',
    caseNumber: 'CASE // 03',
    selectorLabel: '03 // IOT INDUSTRIAL',
    title: 'MONITORAMENTO IOT INDUSTRIAL & SENSORES CRÍTICOS',
    category: 'INDUSTRIAL IOT // TELEMETRIA EM TEMPO REAL',
    statusLabel: 'HOSPITALAR & AMBIENTAL',
    statusVariant: 'navy-yellow',
    description:
      'Ingestão contínua para sensores físicos de vibração, temperatura e pressão em ambientes de missão crítica. Arquitetura tolerante a desconexões com buffering em memória flash de nós de borda, transporte ultrarrápido MQTT e visualização telemetrizada de alta frequência.',
    image: case03Img,
    imageAlt: 'Monitoramento IoT Industrial e Sensores em Tempo Real',
    hudTopRightBadge: 'MQTT TELEMETRY',
    hudTopRightVariant: 'red-solid',
    hudBottomLeftLabel: 'EDGE BUFFER ACTIVE',
    hudBottomDotColor: 'emerald',
    hudBottomRightLabel: '100% PERSISTÊNCIA',
    hudBottomRightColor: 'yellow',
    accentBorderColor: 'yellow',
    tags: [
      { label: 'MQTT Protocol', variant: 'navy' },
      { label: 'Python', variant: 'surface' },
      { label: 'Next.js / TS', variant: 'surface' },
      { label: 'TimescaleDB', variant: 'surface' },
      { label: 'Docker', variant: 'surface' },
      { label: 'Edge Buffering', variant: 'yellow-soft' },
    ],
    primaryAction: {
      label: 'VER PROJETO AO VIVO',
      href: 'https://github.com/lucasperrone',
      icon: 'sensors',
      variant: 'red',
    },
    secondaryAction: {
      label: 'VER REPOSITÓRIO',
      href: 'https://github.com/lucasperrone',
      icon: 'code',
    },
    specFooter: 'EMBEDDED SPECS // TI TMSS20 & ESP32',
  },
  {
    id: 'sistemas-distribuidos',
    caseNumber: 'CASE // 04',
    selectorLabel: '04 // DISTRIBUÍDOS',
    title: 'SISTEMAS DISTRIBUÍDOS & EDGE COMPUTING CLUSTER',
    category: 'DISTRIBUTED SYSTEMS // CLUSTER & CLOUD',
    statusLabel: 'EVENT-DRIVEN ARCHITECTURE',
    statusVariant: 'navy-red',
    description:
      'Coordenação de nós de borda e instâncias em nuvem com sincronização assíncrona, balanceamento adaptativo de tráfego, gossip protocol para descoberta de topologias e contratos de comunicação binária de baixíssimo overhead.',
    image: case04Img,
    imageAlt: 'Sistemas Distribuídos e Edge Computing Cluster',
    hudTopRightBadge: 'RED BULL TELEMETRY',
    hudTopRightVariant: 'yellow-outline',
    hudBottomLeftLabel: 'GLOBAL MULTI-REGION',
    hudBottomDotColor: 'red',
    hudBottomRightLabel: '1.9 TB/S THROUGHPUT',
    hudBottomRightColor: 'emerald',
    accentBorderColor: 'red',
    tags: [
      { label: 'Node.js', variant: 'navy' },
      { label: 'Redis Cluster', variant: 'surface' },
      { label: 'gRPC / Protobuf', variant: 'surface' },
      { label: 'Linux Kernel Tuning', variant: 'surface' },
      { label: 'Docker / K8s', variant: 'surface' },
      { label: 'Sub-5ms Gossip', variant: 'red-soft' },
    ],
    primaryAction: {
      label: 'VER ARQUITETURA',
      href: 'https://github.com/lucasperrone',
      icon: 'schema',
      variant: 'navy',
    },
    secondaryAction: {
      label: 'REPOSITÓRIO GITHUB',
      href: 'https://github.com/lucasperrone',
      icon: 'code',
    },
    specFooter: 'PROTOBUF v3 · MULTI-DATACENTER',
  },
];

export const TECH_DOMAIN_CATEGORIES: TechDomainCategory[] = [
  {
    title: 'BACKEND',
    kicker: 'CORE',
    kickerColor: 'red',
    topBorderColor: 'red',
    description:
      'Desenvolvimento estruturado, contratos de API robustos e tipagem rigorosa.',
    items: [
      { name: 'NestJS', badge: 'AVANÇADO', badgeVariant: 'red' },
      { name: 'Node.js', badge: 'RUNTIME', badgeVariant: 'navy' },
      { name: 'Python', badge: 'CORE', badgeVariant: 'navy' },
      { name: 'TypeScript', badge: 'TYPE-SAFE', badgeVariant: 'navy' },
      { name: 'APIs REST', badge: 'STANDARDS', badgeVariant: 'navy' },
    ],
  },
  {
    title: 'DATABASE',
    kicker: 'STORAGE',
    kickerColor: 'navy',
    topBorderColor: 'navy',
    description:
      'Consistência relacional, queries de alta eficiência e camadas de cache rápido.',
    items: [
      { name: 'PostgreSQL', badge: 'RELACIONAL', badgeVariant: 'navy' },
      { name: 'SQL Avançado', badge: 'INDEX & CTE', badgeVariant: 'navy' },
      { name: 'Redis', badge: 'IN-MEMORY', badgeVariant: 'navy-yellow-pill' },
      { name: 'Prisma ORM', badge: 'SCHEMA MAPPING', badgeVariant: 'navy' },
    ],
  },
  {
    title: 'INFRASTRUCTURE',
    kicker: 'DEVOPS',
    kickerColor: 'navy',
    topBorderColor: 'yellow',
    description:
      'Ambientes isolados, automação de deploys e governança de servidores.',
    items: [
      { name: 'Docker', badge: 'CONTAINERS', badgeVariant: 'navy' },
      { name: 'CI/CD', badge: 'GITHUB ACTIONS', badgeVariant: 'navy' },
      { name: 'Linux', badge: 'SYSTEMD & BASH', badgeVariant: 'navy' },
      { name: 'Git & GitHub', badge: 'VERSIONING', badgeVariant: 'navy' },
    ],
  },
  {
    title: 'DATA & AUTO',
    kicker: 'PIPELINES',
    kickerColor: 'red',
    topBorderColor: 'navy',
    description:
      'Tratamento de dados tabulares e automação de fluxos operacionais complexos.',
    items: [
      { name: 'Pandas', badge: 'DATA FRAMES', badgeVariant: 'navy' },
      { name: 'Selenium', badge: 'AUTOMATION', badgeVariant: 'navy' },
      { name: 'n8n', badge: 'ORCHESTRATOR', badgeVariant: 'red' },
      { name: 'Web Scraping', badge: 'EXTRACTION', badgeVariant: 'navy' },
    ],
  },
  
];

export const CONTACT_INFO = {
  email: 'lucaspramos21@gmail.com',
  githubUrl: 'https://github.com/LucasPerrone21',
  githubDisplay: 'github.com/LucasPerrone21',
  linkedinUrl: 'https://linkedin.com/in/LucasPerrone21',
  linkedinDisplay: 'linkedin.com/in/LucasPerrone21',
};

