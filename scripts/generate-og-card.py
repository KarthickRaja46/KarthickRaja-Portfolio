import os
import subprocess
from PIL import Image

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
browser = chrome_path if os.path.exists(chrome_path) else edge_path

temp_html = os.path.abspath('temp_og.html')
out_png = os.path.abspath('public/assets/og-card.png')
out_jpg = os.path.abspath('public/assets/og-card.jpg')

print("Rendering OG card with:", browser)
cmd = [
    browser,
    '--headless=new',
    '--disable-gpu',
    '--window-size=1200,630',
    '--force-device-scale-factor=1',
    '--hide-scrollbars',
    f'--screenshot={out_png}',
    temp_html
]
subprocess.run(cmd, check=True)

if os.path.exists(out_png):
    img = Image.open(out_png).convert('RGB')
    # ensure exact 1200x630
    if img.size != (1200, 630):
        img = img.resize((1200, 630), Image.Resampling.LANCZOS)
    img.save(out_jpg, 'JPEG', quality=95, optimize=True)
    print("Saved new og-card.jpg successfully at 1200x630!")
    if os.path.exists(temp_html):
        os.remove(temp_html)
