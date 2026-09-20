/**
 * One-off image optimiser. Converts the oversized PNG/JPG assets in public/
 * to properly sized WebP. The originals are kept because the LocalBusiness /
 * Service schema and the OG/Twitter tags reference hero-car.png and logo.png
 * by URL — only the visible <img> tags point at the WebP files.
 *
 * Run with: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public');

/** [source, outputBasename, width, quality] */
const targets = [
  // Hero van — desktop only (hidden below lg), served as two responsive widths.
  ['hero-car.png', 'hero-car-672', 672, 80],
  ['hero-car.png', 'hero-car-1305', 1305, 78],
  // Nav + footer logo — rendered at 48-56px tall, so 360px wide covers 2x DPR.
  ['logo.png', 'logo-360', 360, 86],
  // Tyre size guide — rendered inside max-w-md (448px), so 896px covers 2x.
  ['tyre-guide.jpg', 'tyre-guide-896', 896, 78],
  // Service page hero images.
  ['tyre-fitting.jpg', 'tyre-fitting-1024', 1024, 78],
  ['puncture-repair.jpg', 'puncture-repair-1024', 1024, 78],
  ['locking-nut.jpg', 'locking-nut-1024', 1024, 78],
  ['jump-start.jpg', 'jump-start-1024', 1024, 78],
  ['service-van.jpg', 'service-van-1024', 1024, 78],
];

async function convert(src, out, width, quality) {
  const inPath = join(publicDir, src);
  const outPath = join(publicDir, `${out}.webp`);
  const info = await sharp(inPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(outPath);
  return { outPath, bytes: info.size, width: info.width, height: info.height };
}

async function main() {
  for (const [src, out, width, quality] of targets) {
    const r = await convert(src, out, width, quality);
    console.log(`${src} -> ${out}.webp  ${r.width}x${r.height}  ${(r.bytes / 1024).toFixed(1)} KB`);
  }

  // Gallery photos: rendered in a 256x176 tile, so 512x352 covers 2x DPR.
  const files = (await readdir(publicDir)).filter((f) => /^work-\d+\.jpg$/.test(f));
  let before = 0;
  let after = 0;
  for (const f of files.sort()) {
    const base = f.replace(/\.jpg$/, '');
    const outPath = join(publicDir, `${base}.webp`);
    const info = await sharp(join(publicDir, f))
      .resize({ width: 512, height: 352, fit: 'cover', position: 'centre' })
      .webp({ quality: 74, effort: 6 })
      .toFile(outPath);
    before += (await sharp(join(publicDir, f)).metadata()).size || 0;
    after += info.size;
  }
  console.log(`work-*.jpg -> work-*.webp  (${files.length} files, ${(after / 1024).toFixed(0)} KB total)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
