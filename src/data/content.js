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
  LuPresentation,
  LuShieldCheck,
  LuSigma,
  LuWorkflow,
  LuZap,
} from 'react-icons/lu';
import { FaPython } from 'react-icons/fa6';
import { SiSnowflake } from 'react-icons/si';
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
    'SQL · Python · Power BI · DAX · Azure',
    'Star Schema & Semantic Data Modeling',
    'Executive KPI Dashboards & Reports',
    'ETL Automation & Business Analytics',
  ],
  tagline:
    'Data Analyst with over a year of experience in **SQL, Python, Power BI, and data modeling**. Cleaned and modeled **500K+ transaction records** in SQL, automated reporting saving **12+ hours weekly**, and built end-to-end analytics pipelines turning business questions into clear decision-ready reports.',
  stats: [
    { value: 1, suffix: '+ yrs', label: 'Hands-on experience' },
    { value: 500, suffix: 'K+', label: 'Transaction records modeled' },
    { value: 12, suffix: '+ hrs', label: 'Saved weekly via automation' },
  ],
  badge: 'Data Analyst · SQL · Python · Power BI',
};

export const marquee = [
  { label: 'SQL (Server / MySQL)', icon: TbSql },
  { label: 'Python (Pandas, NumPy)', icon: FaPython },
  { label: 'Power BI', icon: LuChartColumn },
  { label: 'DAX Measures', icon: LuSigma },
  { label: 'Power Query (M)', icon: LuFilter },
  { label: 'Microsoft Azure', icon: TbBrandAzure },
  { label: 'Snowflake', icon: SiSnowflake },
  { label: 'Star Schema Modeling', icon: TbTopologyStar3 },
  { label: 'Advanced Excel', icon: LuFileSpreadsheet },
  { label: 'ETL Pipelines', icon: LuWorkflow },
  { label: 'Row-Level Security', icon: LuShieldCheck },
  { label: 'EDA & Data Validation', icon: LuPresentation },
];

export const about = {
  eyebrow: 'About me',
  title: 'A data analyst who turns raw data into *clarity*',
  intro:
    'Data analyst with over a year of experience in retail and sales data. Cleaned and modeled 500K+ transaction records in SQL at Besant Technologies, Chennai, and built sales pipeline reporting for a Dubai engineering company. Automated a weekly report that saved 12+ hours and cut reporting delays by 35%. Takes business questions from raw data through SQL and Python analysis to clear reports that managers use for decisions.',
  details: [
    { label: 'Name', value: 'Karthick Raja L' },
    { label: 'Role', value: 'Data Analyst (SQL · Python · Power BI)' },
    { label: 'Status', value: 'Available immediately' },
    { label: 'Location', value: 'Chennai, India' },
    { label: 'Education', value: 'B.E. Computer Science and Engineering' },
    { label: 'Languages', value: 'English, Tamil, Malayalam' },
    { label: 'Focus', value: 'Data Modeling, Python Analysis & Power BI Solutions' },
  ],
  competenciesIntro: 'Core technical proficiencies applied across live commercial pipelines, analytics, and data modeling.',
  // level: 3 = Advanced, 2 = Strong, 1 = Working Knowledge
  competencies: [
    { icon: LuDatabase, label: 'SQL (Server / MySQL), CTEs & Joins', level: 3 },
    { icon: LuChartColumn, label: 'Power BI (Desktop & Service)', level: 3 },
    { icon: LuBoxes, label: 'DAX & Star Schema Data Modeling', level: 3 },
    { icon: FaPython, label: 'Python (Pandas, NumPy) & Cloud (Azure, Snowflake)', level: 3 },
    { icon: LuZap, label: 'Power Query (M) & Gateway Automation', level: 2 },
    { icon: LuFileSpreadsheet, label: 'Advanced Excel, Pivot Tables & Power Pivot', level: 2 },
    { icon: LuChartLine, label: 'EDA, Churn & Segment Analysis', level: 3 },
  ],
};

export const levelLabels = { 3: 'Advanced', 2: 'Strong', 1: 'Working Knowledge' };

// chart: the decorative mini-visual drawn in each tile ('bars' | 'donut' | 'line' | 'gauge')
export const stats = [
  { value: 9, label: 'Live BI & analytics projects', chart: 'bars' },
  { value: 7, label: 'Certifications & credentials', chart: 'donut' },
  { value: 500, suffix: 'K+', label: 'Transaction records modeled', duration: 2.6, chart: 'line' },
  { value: 12, suffix: '+', label: 'Hours saved weekly', chart: 'gauge' },
];

// "How I work" strip, shown under the stats.
export const process = {
  eyebrow: 'How I work',
  title: 'From question to *decision-ready report*',
  steps: [
    {
      title: 'Requirements',
      text: 'Collaborate with business stakeholders and managers to pin down key decision needs, define KPIs, and agree on data definitions before querying.',
    },
    {
      title: 'Model',
      text: 'Clean and standardize raw data using SQL and Python (Pandas), architect star-schema models, and write optimized DAX measures.',
    },
    {
      title: 'Validate',
      text: 'Perform EDA, reconcile numbers against source records, test edge cases, and validate metric accuracy with stakeholders.',
    },
    {
      title: 'Ship',
      text: 'Deploy automated refresh via Power BI Gateway and Azure pipelines, enforce Row-Level Security (RLS), and deliver actionable dashboards.',
    },
  ],
  toolsLabel: 'Tools I use daily',
  tools: [
    'SQL Server / MySQL',
    'Python (Pandas, NumPy)',
    'Power BI (Desktop & Service)',
    'DAX',
    'Power Query (M)',
    'Microsoft Azure',
    'Snowflake',
    'Advanced Excel',
    'Git',
  ],
};

export const experience = {
  eyebrow: 'Experience',
  title: 'Work *history*',
  subtitle:
    'From retail transaction pipelines and EDA in Chennai to commercial reporting in Dubai — a timeline of hands-on impact.',
  roles: [
    {
      period: 'Jan 2026 – Jul 2026',
      company: 'Besant Technologies',
      location: 'Chennai, India',
      title: 'Data Analyst',
      groups: [
        {
          title: 'SQL Data Transformation & Exploratory Analysis',
          points: [
            'Cleaned and standardized 500K+ retail transaction records in SQL using CTEs, joins and window functions.',
            'Performed EDA in SQL and Python (Pandas) to identify sales trends, churn indicators and fulfillment delays.',
            'Analyzed product and segment performance to identify top-selling and underperforming lines.',
          ],
        },
        {
          title: 'Power BI Dashboards & Cloud Automation',
          points: [
            'Built Power BI dashboards for retail sales, customer behavior and fulfillment on one consistent data model.',
            'Staged data in Azure and automated refresh via Power BI Gateway, cutting reporting delays by 35%.',
          ],
        },
      ],
      stack: [
        'SQL Server',
        'MySQL',
        'Python (Pandas)',
        'Power BI',
        'DAX',
        'Microsoft Azure',
        'Power BI Gateway',
        'CTEs & Window Functions',
      ],
    },
    {
      period: 'May 2025 – Nov 2025',
      company: 'Enjay Engineering',
      location: 'Dubai, UAE',
      mode: 'Remote, Contract',
      title: 'BI Analyst',
      testimonial: null,
      groups: [
        {
          title: 'Commercial KPIs & Margin Analysis',
          points: [
            'Defined win rate, quotation aging and conversion KPIs with regional sales managers across all open quotations.',
            'Analyzed customer, product and pricing data to identify demand trends, margin leakage and stalled quotations.',
          ],
        },
        {
          title: 'Reporting Automation & DAX Architecture',
          points: [
            'Automated the weekly quotation report in Power Query, saving 12+ hours of manual work every week.',
            'Built a star-schema model and 30+ DAX measures (YoY growth, conversion, aging), validated against source data.',
          ],
        },
      ],
      stack: [
        'Power BI',
        'DAX',
        'Power Query (M)',
        'Star Schema',
        'SQL',
        'Row-Level Security',
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
    'Interactive Power BI and Python analytics reports you can open and explore, with complete documentation on GitHub.',
  featured: [
    {
      title: 'Banking Performance Analytics',
      category: 'Financial Analytics · Indian Banking & Payments',
      description:
        'Analyzed ₹87 crore in transaction value across 150K transactions, including fees and tax. Found Investment transactions drove 56% of total value while each of the 5 customer segments held about 20%, and analyzed a 10% failure rate spread at 9–11% across states and segments.',
      tags: ['SQL', 'Power BI', 'DAX', 'Power Query'],
      url: pbi('eyJrIjoiM2E0ZTNiMTEtYWMwNS00NWE4LWE2ODMtZDhlZmYwYzdjNzE2IiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('Banking-Performance-Analytics'),
      pdf: '/assets/projects/banking-performance.pdf',
      image: '/assets/projects/banking-performance.webp',
      width: 1280,
      height: 700,
      alt: 'Banking Performance Analytics Power BI dashboard: ₹87 crore transaction volume, fees, tax, and failure rate analysis',
    },
    {
      title: 'API Performance Monitoring',
      category: 'Data Engineering & Analytics · Python & MySQL',
      description:
        'Built a Python and MySQL pipeline loading 559K API request logs across 11 endpoints. Found the checkout endpoint breached its SLA on every request (1,522 ms average); latency rose 91% at peak hours.',
      tags: ['Python', 'MySQL', 'Power BI', 'DAX', 'ETL Pipelines'],
      url: pbi('eyJrIjoiZmNmMzFhZTAtYWZiZS00OWQyLWEyMDgtYjllNTJkM2FmMTgzIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('API-Performance-Monitoring-Analytics'),
      pdf: '/assets/projects/api-monitoring.pdf',
      image: '/assets/projects/api-monitoring.webp',
      width: 1280,
      height: 731,
      alt: 'API Performance Monitoring System Power BI dashboard: 559K request logs, SLA breaches and hourly latency bottlenecks',
    },
    {
      title: 'VOLT IQ: Industrial IoT Analytics',
      category: 'Industrial IoT · Predictive Maintenance',
      description:
        'Turned 100K+ sensor readings from 50 machines into a 6-page operations report. Flagged 8,766 anomalies and tracked energy use and sensor data quality for predictive maintenance.',
      tags: ['Power BI', 'DAX', 'Power Query', 'IoT Analytics'],
      url: pbi('eyJrIjoiMjI0MDdhOTYtMmJmZi00YjM5LWIwZGQtZGIyNjhhOWZmZTFkIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('VOLT-IQ-Industrial-IoT-Analytics'),
      pdf: '/assets/projects/volt-iq.pdf',
      image: '/assets/projects/volt-iq.webp',
      width: 1280,
      height: 798,
      alt: 'VOLT IQ Industrial IoT Power BI dashboard: 100K+ sensor readings, energy usage, and 8,766 anomalies overview',
    },
    {
      title: 'Retail Analytics & Profit Insights',
      category: 'Retail & Sales Analytics · Profit Insights',
      description:
        '$798K in sales and $78K profit (9.8% margin) over 2014–2017, broken down by product category, regional cities, and sales managers to pinpoint loss-making lines and top customer segments.',
      tags: ['Power BI', 'DAX', 'Power Query', 'Star Schema'],
      url: pbi('eyJrIjoiZWRiMTkxYTYtOGRhZS00NTRiLTg4MTgtMGI4MjcyMDhiMjgzIiwidCI6IjNjYjM3ODQ0LTAxZGEtNGJlYS04MDEwLTBmYjFmNWExZWM0ZSJ9'),
      github: repo('Retail-Analytics-Profit-Insights'),
      pdf: '/assets/projects/retail-profit.pdf',
      image: '/assets/projects/retail-profit.webp',
      width: 1280,
      height: 731,
      alt: 'Retail Analytics & Profit Insights Power BI dashboard: sales, margin, category and customer profitability overview',
    },
    {
      title: 'Business Performance & Customer Analytics',
      category: 'Subscription & Revenue Analytics',
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
    {
      title: 'UAE Real Estate Analytics',
      category: 'Real Estate · International Market',
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
        'Commercial sales and pipeline analytics for Enjay Engineering (Dubai): automated weekly reporting in Power Query saving 12+ hours, built a star-schema model with 30+ DAX measures, and analyzed quotation aging, win rate, and margins.',
      tags: ['Power BI', 'DAX', 'SQL', 'Power Query', 'Star Schema', 'RLS'],
      url: null,
      github: null,
      pdf: null,
      note: 'Client project · dashboard not publicly available',
      image: '/assets/projects/steel-quotation.webp',
      width: 1280,
      height: 730,
      alt: 'Steel Quotation & Sales Analytics — branded summary card showing AED 15M+ pipeline, 12h+ saved weekly, 5-page report and 30+ DAX measures',
    },
  ],
  more: {
    eyebrow: 'More work',
    title: 'Additional projects',
    subtitle: 'More live reports across healthcare claims and credit risk modeling.',
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
    'A focused, industry-aligned skillset spanning SQL database engineering, Power BI semantic modeling, Python analysis, and cloud data platforms.',
  learning: 'Microsoft Fabric',
  groups: [
    {
      icon: LuDatabase,
      title: 'SQL & Databases',
      sub: 'SQL Server · MySQL · Query Architecture',
      description:
        'Advanced relational database querying, query tuning, CTEs, window functions, complex joins, subqueries, aggregations, and star schema dimensional modeling.',
      items: [
        'SQL Server',
        'MySQL',
        'CTEs & Subqueries',
        'Window Functions',
        'Joins & Aggregations',
        'Query Optimization',
        'Star Schema Modeling',
        'Data Validation & QA',
        'Stored Procedures & Views',
        'T-SQL',
      ],
    },
    {
      icon: LuChartPie,
      title: 'Power BI & Visualization',
      sub: 'Power BI Desktop & Service · DAX · Modeling',
      description:
        'End-to-end dashboard engineering, semantic model architecture, 30+ complex DAX measures, Power Query (M), Row-Level Security, and automated Gateway refresh.',
      items: [
        'Power BI Desktop & Service',
        'Advanced DAX Measures',
        'Star Schema Data Modeling',
        'Power Query (M)',
        'KPI Dashboards',
        'Row-Level Security (RLS)',
        'Power BI Gateway Refresh',
        'Time Intelligence',
        'Interactive Visuals',
        'Data Storytelling',
      ],
    },
    {
      icon: LuLaptop,
      title: 'Python, Cloud & Analytics',
      sub: 'Python · Azure · Snowflake · Excel',
      description:
        'Data extraction and manipulation with Pandas and NumPy, cloud staging in Azure and Snowflake, automated ETL pipelines, and advanced analytical modeling in Excel.',
      items: [
        'Python (Pandas, NumPy)',
        'Microsoft Azure',
        'Snowflake',
        'ETL Pipelines',
        'Git',
        'Advanced Excel (XLOOKUP, INDEX-MATCH)',
        'Pivot Tables & Power Pivot',
        'Exploratory Data Analysis (EDA)',
        'Customer Segmentation',
        'Trend & Churn Analysis',
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
      degree: 'B.E. Computer Science and Engineering',
      school: 'Hindusthan Institute of Technology, Coimbatore',
      details: ['Anna University Affiliated', 'Medium: English'],
    },
    {
      period: '2020 – 2022',
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Sri Ramakrishna Matric Hr Sec School, Perambalur, Tamil Nadu, India',
      details: ['Stream: Computer Science'],
    },
  ],
};

// Professional certificates and course certificates.
export const certifications = {
  eyebrow: 'Credentials',
  title: 'Certifications & *courses*',
  subtitle: 'Industry-recognized credentials in Azure cloud, data analytics, BI modeling, and Python from Microsoft, Google, and IBM.',
  items: [
    {
      issuer: 'Microsoft',
      title: 'Microsoft Certified: Azure Fundamentals',
      sub: 'Microsoft Certification',
      credential: 'AZ-900 · Microsoft Certified',
    },
    {
      issuer: 'Microsoft',
      title: 'Microsoft Data Analytics / Power BI Data Analyst',
      sub: 'Professional Certificate · Microsoft & Coursera',
      credential: 'ID: TYPPUPQXZ0T8',
    },
    {
      issuer: 'Google',
      title: 'Google Data Analytics',
      sub: 'Professional Certificate · Coursera',
      credential: 'ID: AC9CYEX40XK8',
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
      issuer: 'Microsoft & LinkedIn',
      title: 'Career Essentials in Data Analysis',
      sub: 'Professional Certificate · LinkedIn Learning',
      credential: 'Course certificate',
    },
    {
      issuer: 'Microsoft',
      title: 'Harnessing the Power of Data with Power BI',
      sub: 'Course certificate · Coursera',
      credential: 'ID: FHTK7PQTG40Z',
    },
  ],
};

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Let’s *talk*',
  subtitle: 'Always happy to discuss analytics, data pipelines, dashboard design, or full-time opportunities.',
  formTitle: 'Have an opportunity or question?',
  formIntro: 'Drop me a message and I’ll get back to you promptly.',
};

export const quote = {
  text: 'Without data, you’re just another person with an opinion.',
  author: 'W. Edwards Deming',
};
