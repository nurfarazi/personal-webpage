import { readFileSync } from 'node:fs';

const mapPath = process.argv[2] ?? 'dist/assets/index-Acs-vChC.js.map';
const map = JSON.parse(readFileSync(mapPath, 'utf8'));
const counts = new Map();

(map.sources || []).forEach((src, index) => {
  const content = map.sourcesContent?.[index] ?? '';
  counts.set(src, (counts.get(src) ?? 0) + content.length);
});

const sorted = [...counts.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

for (const [src, size] of sorted) {
  console.log(`${size.toString().padStart(8, ' ')} ${src}`);
}
