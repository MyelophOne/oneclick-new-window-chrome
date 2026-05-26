# Changelog

All notable changes to the OneClick New Window Chrome Extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-26

### Added

- Initial release of OneClick New Window extension
- One-click new window creation functionality
- Beautiful SVG icon with light/dark theme support
- Internationalization (English and Russian)
- Manifest V3 compliance
- Background service worker implementation
- Build script for icon generation
- Complete documentation (README, PRIVACY, CHANGELOG)
- ESLint configuration for code quality
- Package.json with build scripts

### Technical Details

- Manifest version: 3
- Required permission: `tabs`
- Background script: Service worker
- Content Security Policy: Restricted to self-only
- Icons: SVG source + generated PNGs (16, 32, 48, 128px)

### Security & Privacy

- No data collection
- No external communications
- Minimal permissions
- Local-only processing

## [Unreleased]

### Planned Features

- Keyboard shortcut configuration
- Custom window size options
- Window position memory
- Additional language support
- Statistics (optional, local-only)
- Theme-aware icon improvements
