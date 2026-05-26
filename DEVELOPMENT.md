# Development Guide

## Overview

This guide covers development practices, architecture, and technical details for the OneClick New Window Chrome extension.

## Architecture

### Manifest V3

The extension uses Manifest V3, the latest Chrome extension standard:

- **Service Worker**: Background script runs as a service worker
- **Content Security Policy**: Restricted to self-only
- **Permissions**: Minimal (`tabs` only)
- **Action API**: Toolbar button with click handler

### File Structure

```
new-window-opener/
├── manifest.json          # Extension configuration
├── src/
│   ├── icons/            # SVG source + generated PNGs
│   └── scripts/
│       └── background.js # Service worker
├── _locales/             # Internationalization
├── scripts/              # Build and test utilities
├── assets/               # Promotional materials
└── .github/              # CI/CD and templates
```

## Core Components

### Background Service Worker (`src/scripts/background.js`)

- Listens for extension icon clicks
- Creates new browser windows using `chrome.windows.create()`
- Handles installation events
- Minimal error handling and logging

### Icons (`src/icons/`)

- **SVG Source**: `icon.svg` with light/dark theme support
- **Generated PNGs**: 16x16, 32x32, 48x48, 128x128 pixels
- **Theme Support**: CSS styles for light/dark themes in SVG

### Internationalization (`_locales/`)

- English (`en`) and Russian (`ru`) support
- Messages for extension name, description, and tooltip
- Easily extensible for more languages

## Development Workflow

### 1. Setup Development Environment

```bash
# Clone repository
git clone https://github.com/yourusername/new-window-opener.git
cd new-window-opener

# Install dependencies
npm install

# Generate icons
yarn build
```

### 2. Load Extension in Chrome

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the extension directory

### 3. Make Changes

- Edit `src/scripts/background.js` for functionality
- Modify `src/icons/icon.svg` for icon changes
- Update `_locales/*/messages.json` for translations
- Update `manifest.json` for configuration changes

### 4. Test Changes

```bash
# Run verification scripts
yarn lint
node scripts/verify-manifest.js
node scripts/check-files.js
node scripts/test-extension.js

# Manual testing in Chrome
# 1. Click extension icon
# 2. Verify new window opens
# 3. Check console for errors
```

### 5. Build and Package

```bash
# Regenerate icons if SVG changed
yarn build

# Create distribution package
yarn package
# Output: new-window-opener.zip
```

## Technical Details

### Chrome API Usage

#### `chrome.action.onClicked`

```javascript
chrome.action.onClicked.addListener(async () => {
 // Handle extension icon click
});
```

#### `chrome.windows.create`

```javascript
const window = await chrome.windows.create({
 focused: true, // Bring window to front
 type: "normal", // Regular window (not popup)
});
```

#### `chrome.runtime.onInstalled`

```javascript
chrome.runtime.onInstalled.addListener((details) => {
 // Handle installation or update
});
```

### Error Handling

- Basic try-catch for window creation
- Console logging for debugging
- No user-facing error messages (simple fail-silent)

### Performance Considerations

- Service worker stays dormant until needed
- Minimal memory footprint
- Fast window creation (native Chrome API)

## Icon System

### SVG Design

- 128x128 viewBox for crisp scaling
- CSS classes for theme support
- Simple geometric shapes for clarity
- Shadow effect for depth

### PNG Generation

Icons are generated in multiple sizes:

- **16x16**: Toolbar icon
- **32x32**: Extension page icon
- **48x48**: Details page icon
- **128x128**: Web Store icon

### Theme Support

The SVG includes both light and dark theme styles:

```css
/* Light theme */
.window-frame {
 fill: #4285f4;
}
.window-inner {
 fill: #ffffff;
}

/* Dark theme */
.window-frame {
 fill: #8ab4f8;
}
.window-inner {
 fill: #202124;
}
```

## Internationalization

### Adding a New Language

1. Create `_locales/{language_code}/messages.json`
2. Add translations for all message keys
3. Update `manifest.json` if needed
4. Test language switching

### Message Keys

- `extensionName`: Extension display name
- `extensionDescription`: Extension description
- `actionTitle`: Tooltip text for extension icon

## Testing Strategy

### Automated Tests

- Manifest validation
- File structure verification
- Mock Chrome API testing
- Localization validation

### Manual Tests

- Extension installation
- Icon click functionality
- Window creation
- Multiple window support
- Theme compatibility

### Browser Compatibility

- Chrome 88+ (Manifest V3)
- Edge 88+ (Chromium-based)
- Opera 74+ (Chromium-based)
- Other Chromium-based browsers

## Security Considerations

### Permissions

- **`tabs`**: Required for `chrome.windows.create()`
- No other permissions needed
- Minimal permission principle

### Content Security Policy

```json
"content_security_policy": {
  "extension_pages": "script-src 'self'; object-src 'self'"
}
```

### Data Privacy

- No data collection
- No external communications
- No user tracking
- Local-only operation

## Deployment

### Chrome Web Store Requirements

1. **Package**: ZIP file with all required files
2. **Icons**: 128x128 PNG for store listing
3. **Screenshots**: 1280x800 and 640x400 PNG
4. **Description**: Detailed extension description
5. **Privacy Policy**: Required (provided in PRIVACY.md)

### Version Management

- Semantic versioning (`MAJOR.MINOR.PATCH`)
- Update `manifest.json` and `package.json`
- Update `CHANGELOG.md`
- Create Git tag

## Troubleshooting Development Issues

### Icons Not Generating

```bash
# Check SVG file exists
ls src/icons/icon.svg

# Try alternative generation method
node scripts/install-deps.js
node scripts/generate-icons.js
```

### Extension Not Loading

- Check manifest.json for errors
- Verify service worker path is correct
- Check console for loading errors
- Ensure all required files exist

### Window Not Opening

- Check `tabs` permission in manifest
- Verify Chrome API is available
- Check console for API errors
- Test in Chrome stable (not Canary)

## Best Practices

### Code Quality

- Use ESLint for consistent style
- Add comments for complex logic
- Keep functions small and focused
- Use async/await for Chrome APIs

### Maintenance

- Regular dependency updates
- Chrome API compatibility checks
- User feedback incorporation
- Security review before releases

### Documentation

- Keep README up to date
- Document all configuration options
- Include troubleshooting guides
- Maintain changelog

## Future Enhancements

### Planned Features

- Keyboard shortcuts
- Custom window sizes
- Window position memory
- Additional language support
- Statistics (local-only)

### Technical Improvements

- Unit tests with Jest
- Integration tests with Puppeteer
- Automated screenshot generation
- Continuous deployment pipeline

## Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/migrating/to-manifest-v3/)
- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Extension Best Practices](https://developer.chrome.com/docs/extensions/mv3/best-practices/)

## Support

For development questions:

1. Check this guide
2. Review Chrome extension documentation
3. Search existing issues
4. Contact maintainers

Happy coding! 🚀
