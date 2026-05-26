# Installation Guide

## Quick Installation

### From Chrome Web Store

_(Coming soon)_

### Manual Installation (Developer Mode)

1. **Download the extension**
   - Download the ZIP file from the releases page
   - Or clone the repository: `git clone https://github.com/yourusername/new-window-opener.git`

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Or click Menu (⋮) > More Tools > Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" in the top-right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the extension directory
   - The extension should appear in your toolbar

5. **Verify installation**
   - Look for the OneClick New Window icon in your toolbar
   - Hover over the icon to see "Open New Window" tooltip

## Testing the Extension

1. **Click the icon**
   - Click the extension icon in your toolbar
   - A new browser window should open immediately

2. **Check for errors**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for extension logs

3. **Verify functionality**
   - Multiple clicks should open multiple windows
   - Each window should be a normal browser window (not incognito)

## Troubleshooting

### Icon Not Appearing

- Refresh the extensions page (`chrome://extensions/`)
- Ensure extension is enabled (toggle is blue)
- Try restarting Chrome

### Window Not Opening

- Check console for errors
- Verify you have permission to open new windows
- Try disabling other extensions that might interfere

### Permission Issues

- The extension only requires `tabs` permission
- This is necessary to create new windows
- No other permissions are required

## Updating the Extension

### Manual Update

1. Download the new version
2. Go to `chrome://extensions/`
3. Click "Update" or remove and reinstall

### Automatic Updates

When published to Chrome Web Store, updates will be automatic.

## Uninstallation

1. Go to `chrome://extensions/`
2. Find "OneClick New Window"
3. Click "Remove"
4. Confirm removal

## System Requirements

- **Chrome**: Version 88 or higher (Manifest V3)
- **Operating System**: Windows, macOS, Linux, ChromeOS
- **Permissions**: `tabs` (to create new windows)

## Privacy Note

The extension:

- Does not collect any data
- Does not track your browsing
- Does not communicate with external servers
- Only opens new windows locally

## Support

If you encounter issues:

1. Check this installation guide
2. Review the [README](README.md)
3. Check [GitHub Issues](https://github.com/yourusername/new-window-opener/issues)
4. Contact the maintainer

## Developer Notes

For developers wanting to modify the extension:

```bash
# Clone the repository
git clone https://github.com/yourusername/new-window-opener.git

# Install dependencies
npm install

# Build icons
yarn build

# Load in Chrome
# Follow manual installation steps above
```

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for development guidelines.
