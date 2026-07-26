import { readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..');

function readGalleryDir(subfolder) {
  try {
    const dir = join(ROOT, 'public', 'gallery', subfolder);
    return readdirSync(dir).filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f));
  } catch { return []; }
}

const manifest = {
  flyers: readGalleryDir('flyers'),
  doingmything: readGalleryDir('doingmything'),
};

const outDir = join(ROOT, 'src', 'data');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'gallery-manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`Gallery manifest: ${manifest.flyers.length} flyers, ${manifest.doingmything.length} doingmything`);
