#!/usr/bin/env node

/**
 * Manifest verification script
 * Validates manifest.json against Chrome extension requirements
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.join(__dirname, "..", "manifest.json");

function verifyManifest() {
	console.log("Verifying manifest.json...\n");

	try {
		const manifestContent = fs.readFileSync(manifestPath, "utf8");
		const manifest = JSON.parse(manifestContent);

		let errors = [];
		let warnings = [];

		const requiredFields = [
			"manifest_version",
			"name",
			"version",
			"action",
			"background",
		];

		for (const field of requiredFields) {
			if (!manifest[field]) {
				errors.push(`Missing required field: ${field}`);
			}
		}

		if (manifest.manifest_version !== 3) {
			errors.push("manifest_version must be 3 for Chrome extensions");
		}

		const versionRegex = /^\d+\.\d+\.\d+$/;
		if (!versionRegex.test(manifest.version)) {
			warnings.push("Version should follow semantic versioning (x.x.x)");
		}

		if (manifest.action) {
			if (!manifest.action.default_icon) {
				warnings.push(
					"Action should have default_icon for toolbar icon",
				);
			}
			if (!manifest.action.default_title) {
				warnings.push("Action should have default_title for tooltip");
			}
		}

		if (manifest.background) {
			if (!manifest.background.service_worker) {
				errors.push(
					"Background must have service_worker field for Manifest V3",
				);
			}
			if (manifest.background.scripts) {
				warnings.push(
					"Background.scripts is deprecated in Manifest V3, use service_worker instead",
				);
			}
		}

		if (!manifest.icons) {
			warnings.push("Consider adding icons field for Chrome Web Store");
		} else {
			const requiredIconSizes = [16, 32, 48, 128];
			for (const size of requiredIconSizes) {
				if (!manifest.icons[size]) {
					warnings.push(`Missing icon size ${size}x${size}`);
				}
			}
		}

		if (!manifest.content_security_policy) {
			warnings.push(
				"Consider adding content_security_policy for security",
			);
		}

		if (errors.length > 0) {
			console.log("❌ ERRORS:");
			errors.forEach((error) => console.log(`  - ${error}`));
		} else {
			console.log("✅ No critical errors found");
		}

		if (warnings.length > 0) {
			console.log("\n⚠️  WARNINGS:");
			warnings.forEach((warning) => console.log(`  - ${warning}`));
		}

		console.log("\n📋 Manifest Summary:");
		console.log(`  Name: ${manifest.name}`);
		console.log(`  Version: ${manifest.version}`);
		console.log(`  Manifest Version: ${manifest.manifest_version}`);
		console.log(
			`  Permissions: ${manifest.permissions ? manifest.permissions.join(", ") : "none"}`,
		);

		if (errors.length === 0) {
			console.log("\n✅ Manifest verification passed!");
			return true;
		} else {
			console.log("\n❌ Manifest verification failed!");
			return false;
		}
	} catch (error) {
		console.error("Failed to verify manifest:", error.message);
		return false;
	}
}

const success = verifyManifest();
process.exit(success ? 0 : 1);
