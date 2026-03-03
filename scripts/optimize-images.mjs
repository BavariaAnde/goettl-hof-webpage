import { readdir, mkdir, stat, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'public', 'iamges');
const destDir = path.join(projectRoot, 'public', 'images');

await mkdir(destDir, { recursive: true });

const entries = await readdir(srcDir, { withFileTypes: true });

const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp']);

for (const entry of entries) {
	if (!entry.isFile()) continue;
	const ext = path.extname(entry.name).toLowerCase();
	if (!allowed.has(ext)) continue;
	const input = path.join(srcDir, entry.name);
	const outputName = `${path.parse(entry.name).name.replace(/\s+/g, '-').toLowerCase()}.webp`;
	const output = path.join(destDir, outputName);
	await sharp(input)
		.resize({ width: 1800, withoutEnlargement: true })
		.webp({ quality: 78 })
		.toFile(output);
}

// optional: remove the old folder with heavy files
await rm(srcDir, { recursive: true, force: true });
