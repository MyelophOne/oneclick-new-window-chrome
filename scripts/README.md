# Build and Test Scripts

This directory contains utility scripts for building, testing, and verifying the Chrome extension.

## Available Scripts

### Build Scripts

1. **`build.js`** - Main build script using Sharp
   - Generates PNG icons from SVG source
   - Requires: `sharp` dependency
   - Run: `yarn build`

### Verification Scripts

2. **`verify-manifest.js`** - Manifest validation
   - Validates `manifest.json` against Chrome extension requirements
   - Checks for required fields, proper version, and best practices
   - Run: `node scripts/verify-manifest.js`

3. **`check-files.js`** - File structure verification
   - Checks if all required files are present
   - Verifies generated icons exist
   - Run: `node scripts/check-files.js`

4. **`test-extension.js`** - Functional testing
   - Simulates extension behavior
   - Tests event listeners and Chrome API calls
   - Validates localization and permissions
   - Run: `node scripts/test-extension.js`

## Usage

### Quick Start

```bash
# Install dependencies
yarn install

# Generate icons (using sharp)
yarn build

# Verify the extension
node scripts/verify-manifest.js
node scripts/check-files.js
node scripts/test-extension.js
```

### Package for Chrome Web Store

```bash
# Create ZIP package (excludes development files)
yarn package
```

## Dependencies

### Required for Build

- **Sharp** (recommended): High-performance image processing

### Development Only

- **Biome**: Code quality and style checking
- **Node.js**: Runtime for build scripts (v18+)

## Notes

- The main `package.json` uses Sharp for icon generation
- All scripts are ES modules (use `.js` extension with `import/export`)
- Test scripts use CommonJS `require()` for simplicity with JSON files

## Troubleshooting

### Manifest Errors

If manifest verification fails:

```bash
# Check specific errors
node scripts/verify-manifest.js

# Fix issues in manifest.json
# Common issues: missing fields, wrong manifest_version
```
