chrome.action.onClicked.addListener(async () => {
	try {
		await chrome.windows.create({
			focused: true,
			type: 'normal',
			state: 'maximized'
		})
	} catch (error) {
		console.error('Failed to create new window:', error)
	}
})

chrome.runtime.onInstalled.addListener((_) => {
	updateIconFromSettings()
})

const iconPaths = {
	light: {
		16: chrome.runtime.getURL('src/icons/icon-16.png'),
		32: chrome.runtime.getURL('src/icons/icon-32.png'),
		48: chrome.runtime.getURL('src/icons/icon-48.png'),
		128: chrome.runtime.getURL('src/icons/icon-128.png')
	},
	dark: {
		16: chrome.runtime.getURL('src/icons/iconDark-16-dark.png'),
		32: chrome.runtime.getURL('src/icons/iconDark-32-dark.png'),
		48: chrome.runtime.getURL('src/icons/iconDark-48-dark.png'),
		128: chrome.runtime.getURL('src/icons/iconDark-128-dark.png')
	}
}

async function updateIconFromSettings() {
	const result = await chrome.storage.sync.get(['useDarkIcon'])
	const useDarkIcon = result.useDarkIcon || false
	const paths = useDarkIcon ? iconPaths.dark : iconPaths.light

	chrome.action.setIcon(
		{
			path: paths
		},
		() => {
			if (chrome.runtime.lastError) {
				console.error(
					'Failed to update icon:',
					chrome.runtime.lastError.message,
					chrome.runtime.lastError,
					JSON.stringify(paths)
				)
			}
		}
	)
}

chrome.runtime.onStartup.addListener(() => {
	updateIconFromSettings()
})

updateIconFromSettings()

chrome.storage.onChanged.addListener((changes) => {
	if (changes.useDarkIcon) {
		updateIconFromSettings()
	}
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'updateIcon') {
		updateIconFromSettings()
		sendResponse({ success: true })
	}
	return true
})
