import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>KARTHICK RAJA L - Resume</title>
<style>
  @page {
    size: A4;
    margin: 12mm 15mm 12mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1a1f2c;
    font-size: 9.3pt;
    line-height: 1.36;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  a {
    color: #1a1f2c;
    text-decoration: none;
  }
  .header {
    text-align: left;
    margin-bottom: 9px;
  }
  .header h1 {
    font-size: 20pt;
    font-weight: 800;
    letter-spacing: 0.03em;
    color: #1e3a6a;
    line-height: 1.1;
    margin-bottom: 2px;
  }
  .header .title {
    font-size: 9.8pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #475569;
    margin-bottom: 4px;
  }
  .header .contact-row {
    font-size: 8.8pt;
    color: #334155;
    margin-bottom: 2px;
  }
  .header .links-row {
    font-size: 8.8pt;
    color: #1e3a6a;
    margin-bottom: 2px;
  }
  .header .links-row a {
    color: #1e3a6a;
  }
  .header .avail {
    font-size: 8.6pt;
    color: #475569;
    font-style: italic;
  }
  .sep {
    color: #94a3b8;
    margin: 0 4px;
  }

  .section {
    margin-top: 8px;
  }
  .section-title {
    font-size: 10.8pt;
    font-weight: 800;
    color: #1e3a6a;
    padding-bottom: 2px;
    border-bottom: 1.4pt solid #1e3a6a;
    margin-bottom: 5px;
    letter-spacing: 0.01em;
  }
  p.summary {
    text-align: justify;
    color: #1e293b;
    line-height: 1.36;
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .skill-line {
    color: #1e293b;
    line-height: 1.34;
  }
  .skill-cat {
    font-weight: 700;
    color: #0f172a;
  }

  .job {
    margin-bottom: 7px;
  }
  .job-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .job-company {
    font-weight: 800;
    color: #0f172a;
    font-size: 9.5pt;
  }
  .job-period {
    font-size: 8.8pt;
    font-weight: 600;
    color: #475569;
  }
  .job-role {
    font-style: italic;
    font-weight: 600;
    color: #1e3a6a;
    font-size: 9.1pt;
    margin-bottom: 2px;
  }
  ul.bullets {
    list-style: none;
    padding-left: 0;
  }
  ul.bullets li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 2px;
    color: #1e293b;
    line-height: 1.34;
  }
  ul.bullets li::before {
    content: "•";
    position: absolute;
    left: 1px;
    color: #1e3a6a;
    font-size: 11pt;
    line-height: 1;
  }

  .proj {
    margin-bottom: 6px;
  }
  .proj-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .proj-title {
    font-weight: 800;
    color: #0f172a;
    font-size: 9.3pt;
  }
  .proj-stack {
    font-size: 8.6pt;
    font-style: italic;
    color: #475569;
  }

  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .edu-deg {
    font-weight: 800;
    color: #0f172a;
    font-size: 9.4pt;
  }
  .edu-period {
    font-size: 8.8pt;
    font-weight: 600;
    color: #475569;
  }
  .edu-school {
    color: #334155;
    font-size: 9pt;
  }

  .certs-line {
    margin-bottom: 2px;
    color: #1e293b;
  }
  .certs-label {
    font-weight: 700;
    color: #0f172a;
  }
</style>
</head>
<body>

<div class="header">
  <h1>KARTHICK RAJA L</h1>
  <div class="title">DATA ANALYST | SQL &middot; PYTHON &middot; POWER BI</div>
  <div class="contact-row">
    Chennai, India <span class="sep">|</span> +91 6383 268445 <span class="sep">|</span> <a href="mailto:karthickrajacareer46@gmail.com">karthickrajacareer46@gmail.com</a>
  </div>
  <div class="links-row">
    <a href="https://linkedin.com/in/karthick-raja-l-7a5b3a26b" target="_blank">linkedin.com/in/karthick-raja-l-7a5b3a26b</a>
    <span class="sep">|</span>
    <a href="https://github.com/KarthickRaja46" target="_blank">github.com/KarthickRaja46</a>
    <span class="sep">|</span>
    <a href="https://karthickraja.page" target="_blank">karthickraja.page</a>
  </div>
  <div class="avail">Available immediately.</div>
</div>

<div class="section">
  <div class="section-title">Profile Summary</div>
  <p class="summary">
    Data analyst with over a year of experience in retail and sales data. Cleaned and modeled 500K+ transaction records in SQL at Besant Technologies, Chennai, and built sales pipeline reporting for a Dubai engineering company. Automated a weekly report that saved 12+ hours and cut reporting delays by 35%. Takes business questions from raw data through SQL and Python analysis to clear reports that managers use for decisions.
  </p>
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <div class="skills-list">
    <div class="skill-line"><span class="skill-cat">SQL & Databases:</span> SQL Server, MySQL, Joins, CTEs, Subqueries, Window Functions, Aggregations</div>
    <div class="skill-line"><span class="skill-cat">Python & Cloud:</span> Python (Pandas, NumPy), Microsoft Azure, Snowflake, ETL, Git</div>
    <div class="skill-line"><span class="skill-cat">Power BI & Visualization:</span> Power BI (Desktop & Service), DAX, Power Query (M), Star Schema Data Modeling, KPI Dashboards, Row Level Security</div>
    <div class="skill-line"><span class="skill-cat">Excel & Reporting:</span> Advanced Excel, Pivot Tables, XLOOKUP, INDEX-MATCH, Power Pivot, Reporting Automation</div>
    <div class="skill-line"><span class="skill-cat">Data Analysis:</span> Sales & Revenue Analysis, KPI Tracking, Trend & Variance Analysis, Customer Segmentation, Churn Analysis, EDA, Data Cleaning & Validation</div>
  </div>
</div>

<div class="section">
  <div class="section-title">Work Experience</div>
  
  <div class="job">
    <div class="job-head">
      <div class="job-company">Besant Technologies <span style="font-weight:normal; color:#475569;">| Chennai, India</span></div>
      <div class="job-period">Jan 2026 &ndash; Jul 2026</div>
    </div>
    <div class="job-role">Data Analyst</div>
    <ul class="bullets">
      <li>Cleaned and standardized 500K+ retail transaction records in SQL using CTEs, joins and window functions.</li>
      <li>Performed EDA in SQL and Python (Pandas) to identify sales trends, churn indicators and fulfillment delays.</li>
      <li>Analyzed product and segment performance to identify top-selling and underperforming lines.</li>
      <li>Built Power BI dashboards for retail sales, customer behavior and fulfillment on one consistent data model.</li>
      <li>Staged data in Azure and automated refresh via Power BI Gateway, cutting reporting delays by 35%.</li>
    </ul>
  </div>

  <div class="job" style="margin-bottom: 2px;">
    <div class="job-head">
      <div class="job-company">Enjay Engineering <span style="font-weight:normal; color:#475569;">| Dubai, UAE (Remote, Contract)</span></div>
      <div class="job-period">May 2025 &ndash; Nov 2025</div>
    </div>
    <div class="job-role">BI Analyst</div>
    <ul class="bullets">
      <li>Defined win rate, quotation aging and conversion KPIs with regional sales managers across all open quotations.</li>
      <li>Automated the weekly quotation report in Power Query, saving 12+ hours of manual work every week.</li>
      <li>Built a star-schema model and 30+ DAX measures (YoY growth, conversion, aging), validated against source data.</li>
      <li>Analyzed customer, product and pricing data to identify demand trends, margin leakage and stalled quotations.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Projects</div>

  <div class="proj">
    <div class="proj-head">
      <div class="proj-title">Banking Performance Analytics</div>
      <div class="proj-stack">SQL, Power BI, DAX, Power Query</div>
    </div>
    <ul class="bullets">
      <li>Analyzed &#8377;87 crore in transaction value across 150K transactions, including fees and tax.</li>
      <li>Found Investment transactions drove 56% of total value, while each of the 5 customer segments held about 20%.</li>
      <li>Found 10% of transactions failed, spread evenly at 9&ndash;11% across every state and segment.</li>
    </ul>
  </div>

  <div class="proj">
    <div class="proj-head">
      <div class="proj-title">API Performance Monitoring</div>
      <div class="proj-stack">Python, MySQL, Power BI</div>
    </div>
    <ul class="bullets">
      <li>Built a Python and MySQL pipeline loading 559K API request logs across 11 endpoints.</li>
      <li>Found the checkout endpoint breached its SLA on every request (1,522 ms average); latency rose 91% at peak hours.</li>
    </ul>
  </div>

  <div class="proj" style="margin-bottom: 2px;">
    <div class="proj-head">
      <div class="proj-title">VOLT IQ: Industrial IoT Analytics</div>
      <div class="proj-stack">Power BI, DAX, Power Query</div>
    </div>
    <ul class="bullets">
      <li>Turned 100K+ sensor readings from 50 machines into a 6-page operations report.</li>
      <li>Flagged 8,766 anomalies and tracked energy use and sensor data quality for predictive maintenance.</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="section-title">Education</div>
  <div class="edu-row">
    <div class="edu-deg">B.E. Computer Science and Engineering</div>
    <div class="edu-period">2022 &ndash; 2026</div>
  </div>
  <div class="edu-school">Hindusthan Institute of Technology, Coimbatore</div>
</div>

<div class="section">
  <div class="section-title">Certifications &amp; Languages</div>
  <div class="certs-line">
    <span class="certs-label">Certifications:</span> Microsoft Azure Fundamentals <span class="sep">|</span> Microsoft Data Analytics
  </div>
  <div class="certs-line">
    <span class="certs-label">Languages:</span> English <span class="sep">|</span> Tamil <span class="sep">|</span> Malayalam
  </div>
</div>

</body>
</html>
`;

const tempHtmlPath = path.resolve('temp_resume.html');
const outPdf1 = path.resolve('public/assets/KARTHICK_RAJA_Data_Analyst_Resume.pdf');
const outPdf2 = path.resolve('public/assets/KARTHICK_RAJA_BI_Analyst_Resume.pdf');

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = fs.existsSync(chromePath) ? chromePath : edgePath;

console.log('Compiling resume PDF with browser:', browser);

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${outPdf1}`,
  tempHtmlPath,
]);

// Also copy or compile to BI Analyst CV slot so both download buttons serve the updated resume
fs.copyFileSync(outPdf1, outPdf2);

fs.unlinkSync(tempHtmlPath);
console.log('Resume PDF generated successfully at:', outPdf1, 'and', outPdf2);
