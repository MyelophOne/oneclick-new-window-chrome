document.addEventListener("DOMContentLoaded", async () => {
	const i18nElements = document.querySelectorAll("[data-i18n]");
	for (const element of i18nElements) {
		const key = element.getAttribute("data-i18n");
		try {
			const message = chrome.i18n.getMessage(key);
			if (message) {
				if (element.tagName === "OPTION") {
					element.textContent = message;
				} else {
					element.textContent = message;
				}
			}
		} catch (e) {
			console.warn(`Failed to load i18n message for key "${key}":`, e);
		}
	}

	const themeSelect = document.getElementById("theme");
	const saveButton = document.getElementById("save");
	const statusDiv = document.getElementById("status");

	const result = await chrome.storage.sync.get(["useDarkIcon"]);
	const useDarkIcon = result.useDarkIcon || false;

	themeSelect.value = useDarkIcon ? "dark" : "light";

	saveButton.addEventListener("click", async () => {
		const selectedValue = themeSelect.value;
		const useDarkIcon = selectedValue === "dark";

		try {
			await chrome.storage.sync.set({ useDarkIcon });

			showStatus(chrome.i18n.getMessage("saveSuccess"), "success");

			chrome.runtime.sendMessage({ action: "updateIcon" }, (_) => {
				if (chrome.runtime.lastError) {
					console.error("Message error:", chrome.runtime.lastError);
				}
			});
		} catch (error) {
			showStatus(chrome.i18n.getMessage("saveError"), "error");
			console.error("Failed to save settings:", error);
		}
	});

	function showStatus(message, type) {
		statusDiv.textContent = message;
		statusDiv.className = `status ${type}`;
		statusDiv.style.display = "block";

		setTimeout(() => {
			statusDiv.style.display = "none";
		}, 3000);
	}
});
