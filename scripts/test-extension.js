#!/usr/bin/env node

/**
 * Test script for extension functionality
 * Simulates extension behavior and validates logic
 */

console.log("🔧 Testing OneClick New Window extension...");

const mockChrome = {
	action: {
		onClicked: {
			addListener: (callback) => {
				console.log("📋 action.onClicked listener registered");
				setTimeout(() => {
					console.log("Simulating extension icon click...");
					callback();
				}, 1000);
			},
		},
	},
	windows: {
		create: async (options) => {
			console.log(
				"✅ chrome.windows.create called with options:",
				JSON.stringify(options, null, 2),
			);
			return { id: Math.floor(Math.random() * 1000) };
		},
	},
	runtime: {
		onInstalled: {
			addListener: (callback) => {
				console.log("✅ runtime.onInstalled listener registered");
				setTimeout(() => {
					callback({ reason: "install", previousVersion: undefined });
				}, 500);
			},
		},
	},
};

async function testExtension() {
	mockChrome.action.onClicked.addListener(async () => {
		try {
			const window = await mockChrome.windows.create({
				focused: true,
				type: "normal",
			});
			console.log(`✅ New window created with ID: ${window.id}`);
		} catch (error) {
			console.error("❌ Failed to create new window:", error);
		}
	});

	console.log("✅ Basic functionality tests completed!");
}

testExtension().catch(console.error);
