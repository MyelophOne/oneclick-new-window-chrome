import { zip } from "zip-a-folder";
import fs from "node:fs/promises";
import path from "node:path";

const ZIP_FILE = "oneclick-new-window.zip";
const TEMP_DIR = path.resolve(".package-build");

const ignore = [
	"node_modules",
	".git",
	"scripts",
	".github",
	".yarn",
	"biome.json",
	".yarnrc.yml",
	".gitignore",
	"yarn.lock",
	".editorconfig",
	".package-build",
	ZIP_FILE,
];

await fs.rm(TEMP_DIR, { recursive: true, force: true });
await fs.rm(ZIP_FILE, { force: true });

await fs.mkdir(TEMP_DIR, { recursive: true });

const entries = await fs.readdir(".", { withFileTypes: true });

for (const entry of entries) {
	if (ignore.includes(entry.name)) continue;
	if (entry.name.endsWith(".md")) continue;
	if (entry.name.endsWith(".log")) continue;

	await fs.cp(path.resolve(entry.name), path.join(TEMP_DIR, entry.name), {
		recursive: true,
	});
}

await zip(TEMP_DIR, ZIP_FILE);

await fs.rm(TEMP_DIR, { recursive: true, force: true });

console.log(`Created ${ZIP_FILE}`);
