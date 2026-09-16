const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const outDir = path.join(__dirname, 'posters');

fs.mkdirSync(outDir, { recursive: true });

function dataUri(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';
  return `data:${mime};base64,${fs.readFileSync(path.join(root, file)).toString('base64')}`;
}

const logo = dataUri('public/assets/logo-full.png');
const logoIcon = dataUri('public/assets/logo-icon.png');
const mockup = dataUri('public/assets/mockup-1.png');

function posterSvg({ width, height, platform }) {
  const isPortrait = height > width;
  const margin = isPortrait ? 78 : 76;
  const logoSize = isPortrait ? 78 : 72;
  const titleSize = isPortrait ? 96 : 92;
  const bodySize = isPortrait ? 34 : 31;
  const cardW = isPortrait ? 770 : 660;
  const cardH = isPortrait ? 500 : 430;
  const cardX = isPortrait ? 180 : 500;
  const cardY = isPortrait ? 695 : 555;
  const mockupW = isPortrait ? 710 : 600;
  const mockupH = isPortrait ? 400 : 332;
  const headlineY = isPortrait ? 285 : 275;
  const subY = isPortrait ? 515 : 488;
  const footerY = height - (isPortrait ? 82 : 70);
  const badgeY = margin + 8;

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F8FAFC"/>
      <stop offset="0.45" stop-color="#EEF4FF"/>
      <stop offset="1" stop-color="#F8FFF9"/>
    </linearGradient>
    <linearGradient id="dark" x1="${margin}" y1="${headlineY - 80}" x2="${width - margin}" y2="${headlineY + 190}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0B0B0F"/>
      <stop offset="1" stop-color="#243044"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#6D5DFC"/>
      <stop offset="0.52" stop-color="#0891B2"/>
      <stop offset="1" stop-color="#10B981"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#101828" flood-opacity="0.16"/>
    </filter>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#101828" flood-opacity="0.12"/>
    </filter>
    <clipPath id="mockClip">
      <rect x="${cardX + 30}" y="${cardY + 74}" width="${mockupW}" height="${mockupH}" rx="28"/>
    </clipPath>
    <style>
      .font { font-family: "Segoe UI", Arial, sans-serif; }
      .tight { letter-spacing: 0px; }
    </style>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <circle cx="${width * 0.18}" cy="${height * 0.18}" r="${isPortrait ? 270 : 240}" fill="#FFFFFF" opacity="0.7"/>
  <circle cx="${width * 0.86}" cy="${height * 0.22}" r="${isPortrait ? 210 : 190}" fill="#DDF7FF" opacity="0.56"/>
  <circle cx="${width * 0.76}" cy="${height * 0.82}" r="${isPortrait ? 250 : 220}" fill="#E8FFE9" opacity="0.62"/>
  <path d="M${width - 245} 0 C${width - 120} ${height * 0.18}, ${width - 120} ${height * 0.38}, ${width} ${height * 0.55}" stroke="#FFFFFF" stroke-width="2" opacity="0.7"/>
  <path d="M0 ${height * 0.76} C${width * 0.22} ${height * 0.68}, ${width * 0.36} ${height * 0.9}, ${width * 0.62} ${height * 0.78}" stroke="#FFFFFF" stroke-width="2" opacity="0.8"/>

  <g transform="translate(${margin}, ${margin})">
    <rect width="${isPortrait ? 302 : 286}" height="${logoSize}" rx="22" fill="#FFFFFF" opacity="0.82" filter="url(#softShadow)"/>
    <image href="${logoIcon}" x="12" y="11" width="${logoSize - 22}" height="${logoSize - 22}" preserveAspectRatio="xMidYMid meet"/>
    <text x="${logoSize + 5}" y="${logoSize / 2 + 9}" class="font" font-size="${isPortrait ? 30 : 28}" font-weight="800" fill="#0B0B0F">Zyfiro</text>
  </g>

  <g transform="translate(${width - margin - (isPortrait ? 244 : 230)}, ${badgeY})">
    <rect width="${isPortrait ? 244 : 230}" height="${isPortrait ? 52 : 48}" rx="24" fill="#FFFFFF" opacity="0.72"/>
    <circle cx="28" cy="${isPortrait ? 26 : 24}" r="6" fill="#10B981"/>
    <text x="44" y="${isPortrait ? 34 : 31}" class="font" font-size="${isPortrait ? 18 : 17}" font-weight="750" fill="#475467">Premium Software Agency</text>
  </g>

  <text x="${margin}" y="${headlineY}" class="font tight" font-size="${titleSize}" font-weight="850" fill="url(#dark)">Meet</text>
  <text x="${margin}" y="${headlineY + titleSize * 0.98}" class="font tight" font-size="${titleSize}" font-weight="850" fill="url(#dark)">Zyfiro</text>

  <rect x="${margin}" y="${subY - 28}" width="${isPortrait ? 92 : 88}" height="7" rx="4" fill="url(#accent)"/>
  <text x="${margin}" y="${subY + 42}" class="font" font-size="${bodySize}" font-weight="650" fill="#344054">
    <tspan x="${margin}" dy="0">Professional software, designed with</tspan>
    <tspan x="${margin}" dy="${bodySize + 14}">restraint and built for scale.</tspan>
  </text>

  <g filter="url(#shadow)">
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="42" fill="#FFFFFF" opacity="0.86"/>
    <rect x="${cardX + 18}" y="${cardY + 18}" width="${cardW - 36}" height="${cardH - 36}" rx="32" fill="#F8FAFC"/>
    <rect x="${cardX + 35}" y="${cardY + 38}" width="${cardW - 70}" height="${isPortrait ? 54 : 50}" rx="20" fill="#FFFFFF"/>
    <circle cx="${cardX + 70}" cy="${cardY + (isPortrait ? 65 : 62)}" r="7" fill="#FCA5A5"/>
    <circle cx="${cardX + 94}" cy="${cardY + (isPortrait ? 65 : 62)}" r="7" fill="#FCD34D"/>
    <circle cx="${cardX + 118}" cy="${cardY + (isPortrait ? 65 : 62)}" r="7" fill="#86EFAC"/>
    <text x="${cardX + cardW - (isPortrait ? 220 : 214)}" y="${cardY + (isPortrait ? 72 : 68)}" class="font" font-size="${isPortrait ? 18 : 16}" font-weight="800" fill="#667085">DESIGN • BUILD • SCALE</text>
    <image href="${mockup}" x="${cardX + 30}" y="${cardY + 74}" width="${mockupW}" height="${mockupH}" preserveAspectRatio="xMidYMid slice" clip-path="url(#mockClip)"/>
    <rect x="${cardX + 30}" y="${cardY + 74}" width="${mockupW}" height="${mockupH}" rx="28" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.72"/>
  </g>

  <g transform="translate(${margin}, ${footerY - 34})">
    <rect width="${isPortrait ? 470 : 450}" height="58" rx="29" fill="#FFFFFF" opacity="0.76"/>
    <text x="25" y="38" class="font" font-size="${isPortrait ? 22 : 21}" font-weight="750" fill="#344054">zyfiro.org | zyfiro@gmail.com</text>
  </g>

  <text x="${width - margin}" y="${footerY}" text-anchor="end" class="font" font-size="${isPortrait ? 18 : 17}" font-weight="800" fill="#667085">${platform}</text>
</svg>`;
}

async function render(config) {
  const svg = posterSvg(config);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(config.out);
}

async function main() {
  await render({
    width: 1200,
    height: 1200,
    platform: 'LINKEDIN',
    out: path.join(outDir, 'zyfiro-day-1-linkedin.png'),
  });

  await render({
    width: 1080,
    height: 1350,
    platform: 'INSTAGRAM',
    out: path.join(outDir, 'zyfiro-day-1-instagram.png'),
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
