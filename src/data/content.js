/*
 * All portfolio copy lives here — edit this file to update the site.
 *
 * Inline formatting (rendered by src/lib/rich.jsx):
 *   **text**  -> highlighted (brighter, semibold)
 *   *text*    -> gold italic accent (used in headings)
 */
import {
  LuBoxes,
  LuChartColumn,
  LuChartLine,
  LuChartPie,
  LuDatabase,
  LuFileSpreadsheet,
  LuFilter,
  LuLaptop,
  LuLayers,
  LuPresentation,
  LuShieldCheck,
  LuSigma,
  LuWorkflow,
  LuZap,
} from 'react-icons/lu';
import { FaPython } from 'react-icons/fa6';
import { TbBrandAzure, TbSql, TbTopologyStar3 } from 'react-icons/tb';

export { profile } from './profile';

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  rotatingPhrases: [
    'SQL · Power BI · DAX · Python · Azure',
    'Star Schema & Semantic Data Modeling',
    'Executive KPI & Financial Dashboards',
    'ETL Automation & Business Analytics',
  ],
  tagline:
    'Data Analyst & Power BI Developer with 1.5+ years of hands-on experience in **SQL, Power BI, DAX, Power Query, Excel, and data modeling**. I build KPI dashboards, executive reports, and BI solutions across **sales, banking, real estate, and supply chain**.',
  stats: [
    { value: 1.5, decimals: 1, suffix: '+', label: 'Years experience' },
    { prefix: 'AED ', value: 15, suffix: 'M+', label: 'Pipeline tracked' },
    { value: 70, suffix: '%', label: 'Faster reporting' },
  ],
  badge: 'Power BI · SQL Specialist',
};

export const marquee = [
  { label: 'Power BI', icon: LuChartColumn },
  { label: 'SQL', icon: TbSql },
  { label: 'DAX', icon: LuSigma },
  { label: 'Power Query', icon: LuFilter },
  { label: 'Microsoft Fabric', icon: LuLayers },
  { label: 'Azure', icon: TbBrandAzure },
  { label: 'Python', icon: FaPython },
  { label: 'Star Schema', icon: TbTopologyStar3 },
  { label: 'Advanced Excel', icon: LuFileSpreadsheet },
  { label: 'ETL Automation', icon: LuWorkflow },
  { label: 'Row-Level Security', icon: LuShieldCheck },
  { label: 'Data Storytelling', icon: LuPresentation },
];

export const about = {
  eyebrow: 'About me',
  title: 'A data person who designs for *clarity*',
  intro:
    'I combine analytical thinking with practical business understanding to turn complex datasets into clear, reliable reporting. My work spans data transformation, validation, semantic modeling, KPI development, and dashboard design, with a focus on making information easier for teams and decision-makers to understand and act on.',
  details: [
    { label: 'Name', value: 'Karthick Raja' },
    { label: 'Role', value: 'Data Analyst & Power BI Developer' },
    { label: 'Status', value: 'Open to Full-Time Roles' },
    { label: 'Location', value: 'Dubai, UAE (Available Immediately)' },
    { label: 'Education', value: 'B.E. Computer Science & Engineering' },
    { label: 'Languages', value: 'English, Tamil, Malayalam' },
    { label: 'Focus', value: 'Business Intelligence, Semantic Modeling & Automation' },
  ],
  competenciesIntro: 'Focus areas demonstrated through projects, experience, and certifications.',
  // level: 3 = Advanced, 2 = Strong, 1 = Working Knowledge
  competencies: [
    { icon: LuChartColumn, label: 'Power BI & Microsoft Fabric', level: 3 },
    { icon: LuDatabase, label: 'SQL, CTEs & Query Optimization', level: 3 },
    { icon: LuBoxes, label: 'DAX & Star Schema Modeling', level: 3 },
    { icon: LuChartLine, label: 'Data Visualization & KPI Design', level: 3 },
    { icon: LuZap, label: 'Power Query (M) & Power BI Gateway', level: 2 },
    { icon: LuFileSpreadsheet, label: 'Advanced Excel & Power Pivot', level: 2 },
    { icon: FaPython, label: 'Python (Pandas, NumPy) & Azure', level: 1 },
  ],
};

export const levelLabels = { 3: 'Advanced', 2: 'Strong', 1: 'Working Knowledge' };

// chart: the decorative mini-visual drawn in each tile ('bars' | 'donut' | 'line' | 'gauge')
export const stats = [
  { value: 8, label: 'Live BI projects', chart: 'bars' },
  { value: 6, label: 'Certifications & courses', chart: 'donut' },
  { value: 800, suffix: 'K+', label: 'Records analyzed', duration: 2.6, chart: 'line' },
  { value: 12, suffix: '+', label: 'Hours saved weekly', chart: 'gauge' },
];

// "How I work" strip, shown under the stats.
export const process = {
  eyebrow: 'How I work',
  title: 'From question to *dashboard*',
  steps: [
    {
      title: 'Requirements',
      text: 'Sit with the people who will use the report, pin down the decisions it must support, and agree KPI definitions before touching data.',
    },
    {
      title: 'Model',
      text: 'Clean and shape the data with SQL and Power Query, then build a star schema and DAX measures that stay fast as volumes grow.',
    },
    {
      title: 'Validate',
      text: 'Reconcile totals against the source, test edge cases, and walk through every KPI with the owner of the numbers.',
    },
    {
      title: 'Ship',
      text: 'Publish with scheduled refresh and row-level security, then keep improving it from real usage and feedback.',
    },
  ],
  toolsLabel: 'Tools I use daily',
  tools: ['Power BI Desktop & Service', 'DAX', 'Power Query (M)', 'SQL Server / MySQL', 'Excel & Power Pivot', 'Python (Pandas)', 'Git'],
};

export const experience = {
  eyebrow: 'Experience',
  title: 'Work *history*',
  subtitle:
    'From hands-on analytics to UAE business reporting — a timeline of the roles that have shaped my craft.',
  roles: [
    {
      period: 'Jan 2026 – Jul 2026',
      company: 'Besant Technologies',
      location: 'Chennai, India',
      title: 'Data Analyst Intern',
      groups: [
        {
          title: 'End-to-End BI & Data Pipelines',
          points: [
            'Built end-to-end BI reporting solutions across Retail, Banking, and Supply Chain datasets, covering data extraction, cleansing, validation, and Power BI reporting.',
            'Conducted Exploratory Data Analysis (EDA) using SQL and Python (Pandas) to identify sales trends, customer churn indicators, and fulfillment bottlenecks.',
          ],
        },
        {
          title: 'SQL Transformation & Validation',
          points: [
            'Used SQL with CTEs, joins, window functions, and aggregations to clean, validate, and standardize 500K+ transactional records, improving data accuracy and consistency across reports.',
          ],
        },
        {
          title: 'Scheduled Automation & Gateways',
          points: [
            'Configured scheduled data refresh automation through Power BI Gateway, reducing reporting delays by 35% and improving reporting turnaround.',
          ],
        },
      ],
      stack: [
        'Power BI',
        'SQL',
        'Python',
        'Pandas',
        'ETL Pipelines',
        'Power BI Gateway',
        'Star Schema',
        'Advanced Excel',
      ],
    },
    {
      period: 'May 2025 – Nov 2025',
      company: 'Enjay Engineering Services',
      location: 'Dubai, UAE',
      mode: 'Remote',
      title: 'Power BI Developer (Freelance)',
      // Fill in with a real quote from Enjay to show it under this role, e.g.
      // { quote: '…', name: 'Full Name', role: 'Sales Manager, Enjay Engineering' }
      testimonial: null,
      groups: [
        {
          title: 'Commercial Pipeline & Stakeholder Collaboration',
          points: [
            'Collaborated with business stakeholders to define reporting requirements, commercial KPIs, and executive dashboard layouts.',
            'Designed and maintained Power BI dashboards delivering executive and project-level KPI reporting for engineering quotation and commercial pipeline performance.',
            'Gave regional leadership visibility into AED 15M+ in active opportunities across UAE emirates.',
            'Analyzed regional product demand, steel volumes, pricing, and margins to identify margin leakage and underperforming opportunities, improving sales conversion by 15% through emirate-level tracking.',
          ],
        },
        {
          title: 'Data Modeling & DAX Architecture',
          points: [
            'Built Star Schema data models and 30+ DAX measures covering time intelligence, YoY growth, conversion rates, and quotation aging to support engineering project performance reviews.',
          ],
        },
        {
          title: 'ETL Automation & Power Query',
          points: [
            'Automated weekly quotation reporting workflows using Power Query, eliminating 12+ hours of manual effort per week and reducing reporting turnaround time by 70%.',
          ],
        },
        {
          title: 'Governance & Row-Level Security',
          points: [
            'Implemented Row-Level Security (RLS) to provide role-specific branch-level access for regional sales managers, strengthening reporting governance.',
          ],
        },
      ],
      stack: [
        'Power BI',
        'DAX',
        'Power Query',
        'SQL',
        'Azure',
        'Star Schema',
        'Row-Level Security',
        'Microsoft Fabric',
      ],
    },
  ],
};

const pbi = (key) => `https://app.powerbi.com/view?r=${key}`;
const repo = (name) => `https://github.com/KarthickRaja46/${name}`;

// Each project: live Power BI link, GitHub repo, and a PDF export of the report pages.
export const projects = {
  eyebrow: 'Selected work',
  title: 'Selected *projects*',
  subtitle:
    'Interactive Power BI reports you can open and click through, each with its source on GitHub and a PDF of every page.',
  featured: [
    {
      title: 'UAE Real Estate Analytics',
      category: 'Real Estate · UAE',
      description:
        '8,000 property listings across all seven emirates: AED 3bn in sales, AED 311M in broker commission, rental occupancy and days on market, and a leaderboard of 18 brokerages over 4 report pages.',
      tags: ['Power BI', 'DAX', 'Power Query', 'Geo Analytics'],
      url: pbi('eyJrIjoiYWI1YjViZTQtNTg3Zi00MmYwLThkMDAtYmY0YTFjNzU4MzEyIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('UAE-Real-Estate-Analytics-PowerBI'),
      pdf: '/assets/projects/uae-real-estate.pdf',
      image: '/assets/projects/uae-real-estate.webp',
      width: 1280,
      height: 811,
      alt: 'UAE Real Estate Analytics Power BI dashboard: commission, properties closed and listings by emirate',
    },
    {
      title: 'Steel Quotation & Sales Analytics',
      category: 'Client Project · Enjay Engineering',
      description:
        '5-page commercial dashboard for a UAE steel supplier: AED 15M+ in active pipeline tracked, 30+ DAX measures covering quotation aging, win rate and emirate-level demand, and 12+ hours of weekly manual reporting eliminated.',
      tags: ['Power BI', 'DAX', 'SQL', 'Power Query', 'Star Schema', 'RLS'],
      // No public link — client data. The image below is a branded summary card.
      url: null,
      github: null,
      pdf: null,
      note: 'Client project · dashboard not publicly available',
      image: '/assets/projects/steel-quotation.webp',
      width: 1280,
      height: 730,
      alt: 'Steel Quotation & Sales Analytics — branded summary card showing AED 15M+ pipeline, 12h+ saved weekly, 5-page report and 30+ DAX measures',
    },
    {
      title: 'Banking Performance Dashboard',
      category: 'Financial Analytics',
      description:
        '₹4.87B in transaction value across 150K transactions, with fee and tax tracking, state-wise revenue, customer segments and success-versus-failed transaction analysis.',
      tags: ['Power BI', 'SQL', 'Power Query', 'DAX'],
      url: pbi('eyJrIjoiM2E0ZTNiMTEtYWMwNS00NWE4LWE2ODMtZDhlZmYwYzdjNzE2IiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('Banking-Performance-Analytics'),
      pdf: '/assets/projects/banking-performance.pdf',
      image: '/assets/projects/banking-performance.webp',
      width: 1280,
      height: 700,
      alt: 'Banking Performance Power BI dashboard: transaction amount, fees and tax overview',
    },
    {
      title: 'VOLT IQ – Industrial IoT Platform',
      category: 'Industrial IoT',
      description:
        '100K+ sensor readings from 50 machines turned into a 6-page operations report: 8,766 anomalies flagged, predictive maintenance, energy use and sensor data quality.',
      tags: ['Power BI', 'DAX', 'Power Query', 'IoT Analytics'],
      url: pbi('eyJrIjoiMjI0MDdhOTYtMmJmZi00YjM5LWIwZGQtZGIyNjhhOWZmZTFkIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('VOLT-IQ-Industrial-IoT-Analytics'),
      pdf: '/assets/projects/volt-iq.pdf',
      image: '/assets/projects/volt-iq.webp',
      width: 1280,
      height: 798,
      alt: 'VOLT IQ Industrial IoT Power BI dashboard: machine status, energy and anomaly overview',
    },
    {
      title: 'Business Performance & Customer Analytics',
      category: 'Subscription & Revenue',
      description:
        '5-page subscription billing report: 7.77M revenue, 92.3% collection rate, 421K MRR and 7.97% churn, broken down by customer segment, industry, usage and outstanding invoices.',
      tags: ['Power BI', 'DAX', 'Power Query', 'Star Schema'],
      url: pbi('eyJrIjoiMWI4YjFjODQtOTBkOS00ZmM2LWI0NTgtNmM0NmQ1ZTAxYWFiIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('Business-Performance-Customer-Intelligence'),
      pdf: '/assets/projects/business-performance.pdf',
      image: '/assets/projects/business-performance.webp',
      width: 1280,
      height: 731,
      alt: 'Business Performance Power BI dashboard: revenue, collections, MRR and subscriptions overview',
    },
  ],
  more: {
    eyebrow: 'More work',
    title: 'Additional projects',
    subtitle: 'More live reports across healthcare, API monitoring, retail and lending.',
    items: [
      {
        badge: 'Healthcare Analytics',
        title: 'ClaimVision – Healthcare Claims Analytics',
        description:
          '20K insurance claims across 1,000 providers: claim value by service and specialty, patient demographics, provider efficiency, and 5,011 claims (24.9%) flagged as high fraud risk.',
        tags: ['Power BI', 'DAX', 'Power Query', 'Healthcare KPIs'],
        url: pbi('eyJrIjoiMWQxMzFjYTAtZjkxMi00YzViLTg2NTktMGI5Y2YzNWRkNDBkIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
        github: repo('ClaimVision-Healthcare-Analytics'),
        pdf: '/assets/projects/claimvision.pdf',
      },
      {
        badge: 'API Monitoring · Python',
        title: 'API Performance Monitoring System',
        description:
          '559K API requests across 11 endpoints: success, error and SLA-breach rates, hourly latency bottlenecks and a system health score, fed by a Python and MySQL ETL pipeline.',
        tags: ['Python', 'MySQL', 'Power BI', 'DAX'],
        url: pbi('eyJrIjoiZmNmMzFhZTAtYWZiZS00OWQyLWEyMDgtYjllNTJkM2FmMTgzIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
        github: repo('API-Performance-Monitoring-Analytics'),
        pdf: '/assets/projects/api-monitoring.pdf',
      },
      {
        badge: 'Retail Analytics',
        title: 'Retail Analytics & Profit Insights',
        description:
          '$798K in sales and $78K profit (9.8% margin) over 2014–2017, broken down by category, city and sales manager to find loss-making products and top customers.',
        tags: ['Power BI', 'DAX', 'Power Query', 'Star Schema'],
        url: pbi('eyJrIjoiZWRiMTkxYTYtOGRhZS00NTRiLTg4MTgtMGI4MjcyMDhiMjgzIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
        github: repo('Retail-Analytics-Profit-Insights'),
        pdf: '/assets/projects/retail-profit.pdf',
      },
      {
        badge: 'Lending & Risk',
        title: 'Loan Analytics & Risk Management',
        description:
          '20K loan applications worth 498M, analysed by credit score, employment, education, home ownership and loan purpose to show approval patterns and flag high-risk applicants.',
        tags: ['Power BI', 'DAX', 'Power Query', 'Risk Analytics'],
        url: pbi('eyJrIjoiMzkxYzQ5ZGUtYTQ2ZC00MWFlLWIxNzAtOWZlMDU0MjMzMzFlIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
        pdf: '/assets/projects/loan-risk.pdf',
      },
    ],
  },
};

export const skills = {
  eyebrow: 'Technical Expertise',
  title: 'Skills & *capabilities*',
  subtitle:
    'A focused, industry-aligned skillset spanning Power BI & Fabric architecture, SQL optimization, Azure cloud pipelines, and business analysis.',
  groups: [
    {
      icon: LuChartPie,
      title: 'Power BI, Fabric & Azure',
      sub: 'Power BI · Fabric · Cloud Pipelines',
      description:
        'End-to-end dashboard design, semantic modeling, DAX, Microsoft Fabric, Azure data services, and automated ETL pipelines.',
      items: [
        'Power BI Desktop & Service',
        'Advanced DAX Measures',
        'Semantic Model Design',
        'Power Query & M',
        'Microsoft Fabric',
        'Incremental Refresh',
        'Deployment Pipelines',
        'Row-Level Security',
        'Performance Optimization',
        'Azure Data Factory',
      ],
    },
    {
      icon: LuDatabase,
      title: 'SQL & Data Analytics',
      sub: 'Query Optimization · Modeling · QA',
      description:
        'Relational database querying, query tuning, CTEs, window functions, dimensional modeling (Star & Snowflake schemas), and QA validation.',
      items: [
        'SQL (MySQL, PostgreSQL, T-SQL)',
        'Query Optimization',
        'CTEs & Window Functions',
        'Joins & Subqueries',
        'Stored Procedures & Views',
        'Star & Snowflake Modeling',
        'Data Validation & QA',
        'Time Intelligence',
      ],
    },
    {
      icon: LuLaptop,
      title: 'Python, Excel & Business Analysis',
      sub: 'Pandas · Requirements · Storytelling',
      description:
        'Python data manipulation, advanced Excel modeling, business requirements discovery, root-cause diagnostics, and executive data storytelling.',
      items: [
        'Python (Pandas, NumPy)',
        'Data Cleaning & EDA',
        'API Data Extraction',
        'Advanced Excel & Power Pivot',
        'Business Requirements Gathering',
        'KPI Definition & Ad-hoc Analysis',
        'Root Cause Analysis',
        'Stakeholder Data Storytelling',
        'Data Visualization',
        'Statistical Analysis',
      ],
    },
  ],
};

export const education = {
  eyebrow: 'Education',
  title: 'Academic *background*',
  items: [
    {
      period: '2022 – 2026',
      degree: 'Bachelor of Engineering in Computer Science & Engineering',
      school: 'Hindusthan Institute of Technology, Coimbatore, Tamil Nadu, India',
      // Add your CGPA here once final, e.g. 'CGPA: 8.1 / 10'
      details: ['Medium: English'],
    },
    {
      period: '2020 – 2022',
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Sri Ramakrishna Matric Hr Sec School, Perambalur, Tamil Nadu, India',
      details: ['Stream: Computer Science'],
    },
  ],
};

// Only the first two are exam-based certifications; the rest are course certificates.
export const certifications = {
  eyebrow: 'Credentials',
  title: 'Certifications & *courses*',
  subtitle: 'Microsoft certifications backed by course certificates in BI, analytics and generative AI.',
  items: [
    {
      issuer: 'Microsoft',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      sub: 'Microsoft Certification',
      credential: 'ID: TYPPUPQXZ0T8',
    },
    {
      issuer: 'Microsoft',
      title: 'Microsoft Certified: Azure Fundamentals',
      sub: 'Microsoft Certification',
      credential: 'Microsoft Learn',
    },
    {
      issuer: 'Google',
      title: 'Google Business Intelligence',
      sub: 'Professional Certificate · Coursera',
      credential: 'Course certificate',
    },
    {
      issuer: 'IBM',
      title: 'Generative AI for Data Analysts',
      sub: 'Specialization · Coursera',
      credential: 'ID: Q5AF9GPDM2LU',
    },
    {
      issuer: 'Microsoft',
      title: 'Harnessing the Power of Data with Power BI',
      sub: 'Course certificate · Coursera',
      credential: 'ID: FHTK7PQTG40Z',
    },
    {
      issuer: 'Microsoft & LinkedIn',
      title: 'Career Essentials in Data Analysis',
      sub: 'Professional Certificate · LinkedIn Learning',
      credential: 'Course certificate',
    },
  ],
};

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Let’s *talk*',
  subtitle: 'Always happy to discuss analytics, dashboard design or new opportunities.',
  formTitle: 'Have an opportunity or question?',
  formIntro: 'Drop me a message and I’ll get back to you promptly.',
};

export const quote = {
  text: 'Without data, you’re just another person with an opinion.',
  author: 'W. Edwards Deming',
};
