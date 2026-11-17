import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const portraitBase64 = fs.readFileSync('public/assets/karthick-raja-portfolio.jpg').toString('base64');
const portraitDataUrl = `data:image/jpeg;base64,${portraitBase64}`;

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #05060a;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    color: #f7f7fb;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
  }

  /* Background ambient glows */
  .glow-gold {
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 196, 81, 0.18) 0%, transparent 65%);
    top: -150px;
    left: -150px;
    pointer-events: none;
  }
  .glow-violet {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, transparent 65%);
    bottom: -200px;
    right: 100px;
    pointer-events: none;
  }
  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  .left {
    z-index: 2;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .brand-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 6px 16px;
    background: rgba(245, 196, 81, 0.08);
    border: 1px solid rgba(245, 196, 81, 0.3);
    border-radius: 999px;
    width: fit-content;
  }
  .brand-badge .dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 10px #10b981;
  }
  .brand-badge span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f5c451;
  }

  h1.name {
    font-size: 56px;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
    background: linear-gradient(180deg, #ffffff 40%, #c4c8dc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role {
    font-size: 26px;
    font-weight: 700;
    color: #94a3b8;
    letter-spacing: -0.02em;
  }
  .role strong {
    color: #f5c451;
    font-weight: 800;
  }

  .metrics {
    display: flex;
    gap: 28px;
    margin-top: 6px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .metric-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .metric-val {
    font-size: 28px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.03em;
  }
  .metric-val span {
    color: #f5c451;
  }
  .metric-lbl {
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }
  .tag {
    font-size: 12px;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
  }

  .right {
    z-index: 2;
    position: relative;
    width: 380px;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .photo-frame {
    width: 360px;
    height: 460px;
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    box-shadow: 
      0 25px 60px -15px rgba(0, 0, 0, 0.8),
      0 0 0 1px rgba(245, 196, 81, 0.35),
      0 0 40px rgba(139, 92, 246, 0.25);
    background: #0f1118;
  }
  .photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  .photo-frame .glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
    pointer-events: none;
  }

  .floating-pill {
    position: absolute;
    bottom: -10px;
    left: -20px;
    padding: 10px 20px;
    background: rgba(15, 17, 24, 0.92);
    border: 1px solid rgba(245, 196, 81, 0.4);
    border-radius: 16px;
    backdrop-filter: blur(12px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .floating-pill .loc-icon {
    font-size: 16px;
  }
  .floating-pill .loc-text {
    font-size: 13px;
    font-weight: 700;
    color: #f1f5f9;
  }
  .floating-pill .loc-sub {
    font-size: 11px;
    font-weight: 600;
    color: #f5c451;
  }

  .url-mark {
    position: absolute;
    bottom: 25px;
    right: 80px;
    font-size: 13px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.05em;
  }
</style>
</head>
<body>
  <div class="glow-gold"></div>
  <div class="glow-violet"></div>
  <div class="grid-pattern"></div>

  <div class="left">
    <div class="brand-badge">
      <span class="dot"></span>
      <span>Available Immediately &middot; Portfolio</span>
    </div>

    <h1 class="name">Karthick Raja L</h1>

    <div class="role">
      <strong>Data Analyst</strong> &middot; SQL &middot; Python &middot; Power BI
    </div>

    <div class="metrics">
      <div class="metric-item">
        <div class="metric-val">500<span>K+</span></div>
        <div class="metric-lbl">SQL Records Modeled</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">12<span>+ hrs</span></div>
        <div class="metric-lbl">Saved Weekly via ETL</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">&#8377;87<span> Cr</span></div>
        <div class="metric-lbl">Banking Analytics</div>
      </div>
    </div>

    <div class="tags">
      <span class="tag">SQL Server & MySQL</span>
      <span class="tag">Python (Pandas)</span>
      <span class="tag">Power BI & DAX</span>
      <span class="tag">Microsoft Azure</span>
      <span class="tag">Snowflake</span>
      <span class="tag">Star Schema</span>
    </div>
  </div>

  <div class="right">
    <div class="photo-frame">
      <img src="${portraitDataUrl}" alt="Karthick Raja" />
      <div class="glare"></div>
    </div>
    <div class="floating-pill">
      <div class="loc-icon">&#128205;</div>
      <div>
        <div class="loc-text">Chennai, India</div>
        <div class="loc-sub">karthickraja.page</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const tempHtml = path.resolve('temp_og.html');
const outJpg = path.resolve('public/assets/og-card.jpg');
const outPng = path.resolve('public/assets/og-card.png');

fs.writeFileSync(tempHtml, html, 'utf8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browser = fs.existsSync(chromePath) ? chromePath : edgePath;

console.log('Rendering new 1200x630 OG card with browser:', browser);

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--window-size=1200,630',
  '--force-device-scale-factor=1',
  '--hide-scrollbars',
  `--screenshot=${outPng}`,
  tempHtml,
]);

// Convert PNG to high-quality JPEG
import('child_process').then(() => {
  const { execSync } = require('child_process');
});
