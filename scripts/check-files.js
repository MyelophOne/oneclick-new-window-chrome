#!/usr/bin/env node

/**
 * File structure verification script
 * Checks if all required files for Chrome extension are present
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, "..");

const requiredFiles = [
	"manifest.json",
	"src/scripts/background.js",
	"src/icons/icon.svg",
	"_locales/en/messages.json",
	"README.md",
	"PRIVACY.md",
];

const requiredIcons = [
	"src/icons/icon-16.png",
	"src/icons/icon-32.png",
	"src/icons/icon-48.png",
	"src/icons/icon-128.png",
];

function checkFiles() {
	console.log("Checking extension file structure...\n");

	let missingFiles = [];
	let missingIcons = [];

	for (const file of requiredFiles) {
		const filePath = path.join(rootDir, file);
		if (!fs.existsSync(filePath)) {
			missingFiles.push(file);
		}
	}

	for (const icon of requiredIcons) {
		const iconPath = path.join(rootDir, icon);
		if (!fs.existsSync(iconPath)) {
			missingIcons.push(icon);
		}
	}

	if (missingFiles.length === 0) {
		console.log("✅ All required files are present");
	} else {
		console.log("❌ Missing required files:");
		missingFiles.forEach((file) => console.log(`  - ${file}`));
	}

	if (missingIcons.length === 0) {
		console.log("✅ All icon files are present");
	} else {
		console.log("\n⚠️  Missing generated icons (run build script):");
		missingIcons.forEach((icon) => console.log(`  - ${icon}`));
		console.log("\nTo generate icons, run: yarn build");
	}

	console.log("\n📁 Directory structure:");
	const directories = [
		"src",
		"src/icons",
		"src/scripts",
		"_locales",
		"_locales/en",
		"_locales/ru",
		"scripts",
		"assets",
	];

	directories.forEach((dir) => {
		const dirPath = path.join(rootDir, dir);
		const exists = fs.existsSync(dirPath);
		console.log(`  ${exists ? "✓" : "✗"} ${dir}/`);
	});

	console.log("\n📊 Summary:");
	console.log(
		`  Required files: ${requiredFiles.length - missingFiles.length}/${requiredFiles.length}`,
	);
	console.log(
		`  Generated icons: ${requiredIcons.length - missingIcons.length}/${requiredIcons.length}`,
	);

	if (missingFiles.length === 0 && missingIcons.length === 0) {
		console.log("\n✅ Extension structure is complete!");
		return true;
	} else {
		console.log("\n⚠️  Some files are missing. Please check above.");
		return false;
	}
}

const success = checkFiles();
process.exit(success ? 0 : 1);
