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

export const profile = {
  name: 'Karthick Raja',
  firstName: 'Karthick',
  lastName: 'Raja',
  role: 'Data Analyst & Power BI Developer',
  location: 'Dubai, UAE',
  locationLong: 'Dubai, United Arab Emirates',
  availability: 'Available immediately · UAE Visit Visa',
  email: 'karthickraja232205@gmail.com',
  phone: '+971 50 256 7444',
  phoneHref: 'tel:+971502567444',
  linkedin: 'https://www.linkedin.com/in/karthick-raja-l-7a5b3a26b/',
  linkedinHandle: '/in/karthick-raja',
  linkedinCerts: 'https://www.linkedin.com/in/karthick-raja-l-7a5b3a26b/details/certifications/',
  github: 'https://github.com/KarthickRaja46',
  whatsapp:
    'https://wa.me/971502567444?text=Hi%20Karthick,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect.',
  resume: '/assets/KARTHICK_RAJA_Data_Analyst.pdf',
  resumeFileName: 'Karthick_Raja_Data_Analyst_Resume.pdf',
  portrait: '/assets/karthick-raja-portrait.webp',
  portraitAlt: 'Portrait of Karthick Raja, Data Analyst and Power BI Developer',
};

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
    'Data Analyst & Power BI Developer with 1.5+ years of experience in **SQL, Power BI, DAX, Power Query, Azure, Excel, and data modeling**. I build KPI dashboards, executive reports, and BI solutions across **sales, banking, and supply chain**.',
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
    { label: 'Location', value: 'Dubai, UAE (Available Immediately / UAE Visit Visa)' },
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

export const stats = [
  { value: 8, suffix: '+', label: 'Analytical projects' },
  { value: 6, suffix: '+', label: 'Certifications' },
  { value: 800, suffix: 'K+', label: 'Records analyzed', duration: 2.6 },
  { value: 12, suffix: '+', label: 'Hours saved weekly' },
];

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

export const projects = {
  eyebrow: 'Selected work',
  title: 'Selected *projects*',
  subtitle:
    'A collection of interactive Power BI dashboards, ETL pipelines, and data applications delivering measurable business value.',
  featured: [
    {
      title: 'Steel Quotation & Sales Analytics',
      category: 'Sales & Commercial Analytics',
      description:
        'Automated reporting workflows saving 12+ hours weekly and tracked AED 15M+ in commercial pipeline opportunities across UAE emirates with a 5-page interactive Power BI dashboard.',
      tags: ['Power BI', 'DAX', 'SQL', 'Power Query', 'Star Schema'],
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMWQxMzFjYTAtZjkxMi00YzViLTg2NTktMGI5Y2YzNWRkNDBkIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9',
      image: '/assets/steel_quotation_thumbnail.webp',
      width: 1376,
      height: 768,
      alt: 'Steel Quotation and Sales Analytics Power BI dashboard preview',
    },
    {
      title: 'Business Performance & Customer Analytics',
      category: 'Customer Analytics',
      description:
        'Analyzed $2.3M revenue and $286K profit across 9,994 orders, identifying customer retention patterns, cohort metrics, and YTD performance trends.',
      tags: ['Power BI', 'DAX', 'Star Schema', 'Azure'],
      url: 'https://app.powerbi.com/view?r=eyJrIjoiNjRlMTgyYmYtYjBjOC00ZGUzLTlmMjMtYzY3NTBiMDcyMGZiIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9',
      image: '/assets/biz_performance_thumbnail.webp',
      width: 1024,
      height: 1024,
      alt: 'Business Performance and Customer Analytics Power BI dashboard preview',
    },
    {
      title: 'Banking Performance Dashboard',
      category: 'Financial Analytics',
      description:
        'Analyzed ₹4.87B in transaction value across 150K+ records, identifying high-failure transaction segments and risk factors with SQL validation and Power Query ETL.',
      tags: ['Power BI', 'SQL', 'Financial Analytics', 'Power Query'],
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMjg1MTcwZjktZTViMy00OTU3LTgyMTctNGIzNTRhNWYwYWM1IiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9',
      image: '/assets/banking_analytics_thumbnail.webp',
      width: 1024,
      height: 1024,
      alt: 'Banking Performance Power BI dashboard preview',
    },
    {
      title: 'VOLT IQ – Industrial IoT Platform',
      category: 'Industrial IoT',
      description:
        'Analyzed 50,000+ IoT telemetry records across 10 industrial machines to monitor machine health, evaluate downtime risk, and detect vibration anomalies in real-time.',
      tags: ['Power BI', 'DAX', 'IoT Analytics', 'Anomaly Detection'],
      url: 'https://app.powerbi.com/view?r=eyJrIjoiZTNjNzZiNGItYjM3Zi00NDNjLWFhODMtNjNiZjlkMWI4NjQ4IiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9&pageName=fd208009e45a735db3b9',
      image: '/assets/voltiq_iot_thumbnail.webp',
      width: 1024,
      height: 1024,
      alt: 'VOLT IQ Industrial IoT Machine Intelligence Power BI dashboard preview',
    },
  ],
  more: {
    eyebrow: 'Technical Portfolio',
    title: 'Additional Completed Projects',
    subtitle:
      'Specialized analytical solutions spanning healthcare claim modeling, API telemetry, retail pipelines, and NLP automation.',
    items: [
      {
        badge: 'Healthcare Analytics · Simulated',
        title: 'ClaimVision – Healthcare Claims Analytics',
        description:
          'Modeled 120,000+ insurance claims across a 4-page Power BI dashboard with 25+ DAX measures diagnosing claim denial patterns, settlement cycles, and reimbursement velocities.',
        tags: ['Power BI', 'DAX', 'SQL', 'Healthcare KPIs'],
      },
      {
        badge: 'Web Telemetry · Simulated',
        title: 'API Performance Monitoring System',
        description:
          'Processed 100,000+ simulated API request logs to benchmark latency percentiles (p95/p99), throughput, HTTP status errors, and SLA compliance using Python, SQL, and Power BI.',
        tags: ['Python', 'SQL', 'Power BI', 'SLA Analytics'],
      },
      {
        badge: 'Enterprise Analytics · Besant',
        title: 'Retail & Supply Chain Reporting Suite',
        description:
          'Designed end-to-end reporting solutions analyzing 500K+ transactional records, tracking customer churn indicators, delivery lead times, and fulfillment bottlenecks.',
        tags: ['Power BI', 'SQL', 'ETL Gateways', 'Supply Chain'],
      },
      {
        badge: 'NLP Automation · Python',
        title: 'ATS Resume Analyzer & Job Matcher',
        description:
          'Developed a Python text-processing tool parsing candidate resumes against job descriptions to extract keywords, calculate semantic match percentages, and highlight skill gaps.',
        tags: ['Python', 'NLP', 'Text Analytics'],
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
      details: ['Focus: Business Intelligence & Data Engineering', 'Medium: English'],
    },
    {
      period: '2020 – 2022',
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Sri Ramakrishna Matric Hr Sec School, Perambalur, Tamil Nadu, India',
      details: ['Stream: Computer Science', 'Grade: 76.3%', 'Medium: English'],
    },
    {
      period: '2012 – 2020',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: "St. Paul's Matric Hr Sec School, Tamil Nadu, India",
      details: ['Grade: 92%', 'Medium: English'],
    },
  ],
};

export const certifications = {
  eyebrow: 'Credentials',
  title: 'Professional *certifications*',
  subtitle:
    'Industry-recognized credentials verifying expertise in Power BI, SQL, cloud infrastructure, and data analytics.',
  items: [
    {
      issuer: 'Microsoft',
      title: 'Microsoft Certified: Power BI Data Analyst',
      sub: 'Microsoft Certified Associate',
      credential: 'ID: TYPPUPQXZ0T8',
    },
    {
      issuer: 'Google',
      title: 'Google Business Intelligence',
      sub: 'Professional Certificate',
      credential: 'Google Certified',
    },
    {
      issuer: 'Microsoft',
      title: 'Microsoft Azure Fundamentals (AZ‑900)',
      sub: 'Cloud & Data Infrastructure',
      credential: 'Microsoft Certified',
    },
    {
      issuer: 'IBM',
      title: 'Generative AI for Data Analysts',
      sub: 'IBM Certified',
      credential: 'ID: Q5AF9GPDM2LU',
    },
    {
      issuer: 'Microsoft',
      title: 'Harnessing the Power of Data with Power BI',
      sub: 'Microsoft Certified',
      credential: 'ID: FHTK7PQTG40Z',
    },
    {
      issuer: 'Microsoft & LinkedIn',
      title: 'Career Essentials in Data Analysis',
      sub: 'Professional Certificate',
      credential: 'Verified Credential',
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
