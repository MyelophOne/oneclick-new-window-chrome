#!/usr/bin/env node

/**
 * Build script for Chrome extension icons
 * Generates PNG icons from SVG for different sizes
 * Creates light theme icons (icon-*.png) and dark theme icons (iconDark-*-dark.png)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconSizes = [16, 32, 48, 128];
const iconsDir = path.join(__dirname, "..", "src", "icons");
const lightSvgPath = path.join(iconsDir, "icon.svg");
const darkSvgPath = path.join(iconsDir, "iconDark.svg");

if (!fs.existsSync(iconsDir)) {
	fs.mkdirSync(iconsDir, { recursive: true });
}

/**
 * Generate a set of PNG icons from an SVG file
 * @param {string} svgPath - Path to SVG file
 * @param {string} prefix - Filename prefix (e.g., 'icon' or 'iconDark')
 * @param {string} suffix - Optional suffix to add before .png (e.g., '-dark')
 */
async function generateIconSet(svgPath, prefix, suffix = "") {
	const svgName = path.basename(svgPath);

	let svgContent;
	try {
		svgContent = fs.readFileSync(svgPath, "utf8");
	} catch (error) {
		console.error(`✗ Failed to read SVG file ${svgPath}:`, error.message);
		return false;
	}

	for (const size of iconSizes) {
		const filename = `${prefix}-${size}${suffix}.png`;
		const outputPath = path.join(iconsDir, filename);

		try {
			await sharp(Buffer.from(svgContent))
				.resize(size, size)
				.png()
				.toFile(outputPath);
		} catch (error) {
			console.error(`  ✗ Failed to generate ${filename}:`, error.message);
		}
	}

	return true;
}

async function generateIcons() {
	console.log("Generating Chrome extension icons...");

	await generateIconSet(lightSvgPath, "icon", "");

	const darkSvgExists = fs.existsSync(darkSvgPath);
	const darkSourcePath = darkSvgExists ? darkSvgPath : lightSvgPath;
	const darkSourceName = darkSvgExists
		? "iconDark.svg"
		: "icon.svg (fallback)";
	await generateIconSet(darkSourcePath, "iconDark", "-dark");

	console.log("Icon generation complete!");
}

generateIcons().catch(console.error);
