/**
 * Generates public/og-default.png — the card shown when the site is shared on
 * LinkedIn, iMessage, Slack, X, etc.
 *
 * Run with: node scripts/make-og-image.mjs
 *
 * Rendered from an SVG through sharp. Fonts are referenced by family name and
 * resolved from the system, so this uses Georgia rather than Instrument Serif
 * (which the site loads from Google Fonts but isn't installed locally). If you
 * install Instrument Serif, swap the family below and re-run.
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const PAPER = '#FBF9F6';
const INK = '#1A1916';
const INK_SOFT = '#6A6358';
const ACCENT = '#1C5F57';
const CLAY = '#B9603C';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const headline = [
  'Websites small businesses',
  'can actually run themselves.',
];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>

  <!-- accent rule down the left edge -->
  <rect x="0" y="0" width="10" height="630" fill="${ACCENT}"/>

  <text x="88" y="118" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="21" font-weight="600" letter-spacing="3.4" fill="${CLAY}">
    FREELANCE WEB DEVELOPER &amp; DESIGNER
  </text>

  ${headline
    .map(
      (line, i) =>
        `<text x="88" y="${238 + i * 82}" font-family="Georgia, 'Iowan Old Style', serif"
        font-size="70" fill="${INK}">${esc(line)}</text>`
    )
    .join('\n  ')}

  <line x1="88" y1="432" x2="1112" y2="432" stroke="#E2DBD1" stroke-width="1.5"/>

  <text x="88" y="492" font-family="Georgia, 'Iowan Old Style', serif"
        font-size="40" fill="${INK}">Alex Partida</text>

  <text x="88" y="536" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="24" fill="${INK_SOFT}">Los Angeles, CA</text>

  <text x="1112" y="536" text-anchor="end"
        font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="24" fill="${ACCENT}">alexpartida.com</text>
</svg>`;

const out = join(root, 'public', 'og-default.png');

const buf = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
writeFileSync(out, buf);

const { width, height, size } = await sharp(out).metadata();
console.log(`wrote public/og-default.png — ${width}x${height}, ${Math.round(size / 1024)}kB`);
