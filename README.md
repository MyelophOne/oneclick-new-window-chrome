# OneClick New Window Chrome Extension by MyelophOne

A simple Chrome extension that opens a new browser window with a single click.

## Features

- One-click new window creation
- Maximized window by default
- Dark/light theme icon support
- Configurable icon theme in extension settings

## Development

### Prerequisites

- Node.js 18+
- Chrome browser

### Build Icons

```bash
yarn build
```

This generates PNG icons from SVG files:

- Light theme: `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`
- Dark theme: `iconDark-16-dark.png`, `iconDark-32-dark.png`, `iconDark-48-dark.png`, `iconDark-128-dark.png`

### Icon Theme Settings

Users can choose between light and dark theme icons in the extension settings page:

1. Right-click the extension icon
2. Select "Options"
3. Choose "Light theme icon" or "Dark theme icon"
4. Click "Save Settings"

### File Structure

```
src/
├── icons/
│   ├── icon.svg           # Light theme SVG
│   ├── iconDark.svg       # Dark theme SVG
│   ├── icon-*.png         # Generated light theme PNGs
│   └── iconDark-*-dark.png # Generated dark theme PNGs
├── scripts/
│   ├── background.js      # Background service worker
├── options/
│   ├── options.html       # Settings page
│   └── options.js         # Settings page logic
└── _locales/              # Localization files
```

### Manifest Changes

- Added `storage` permission for saving user preferences
- Added `options_page` for settings
- Removed content script for automatic theme detection

## License

MIT License

Copyright (c) 2026 Aliaksandr Ivanou
