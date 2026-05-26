# Publishing Guide

This guide covers the process of publishing the OneClick New Window extension to the Chrome Web Store.

## Prerequisites

### Developer Account

1. **Create a Google Developer Account**
   - Visit [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   - Sign in with Google account
   - Pay one-time $5 registration fee (if not already paid)

2. **Verify Account**
   - Complete email verification
   - Set up payment method (for registration fee)
   - Agree to Developer Terms of Service

### Required Materials

Before publishing, prepare:

1. **Extension Package**
   - ZIP file containing all extension files
   - Generated with `yarn package`

2. **Promotional Images**
   - **1280x800 PNG**: Large promotional tile
   - **640x400 PNG**: Small promotional tile
   - See `assets/` directory for templates

3. **Screenshots** (optional but recommended)
   - 1280x800 or 640x400 PNG
   - Show extension in action
   - 3-5 screenshots recommended

4. **Text Content**
   - Extension name (max 45 characters)
   - Detailed description (max 13200 characters)
   - Privacy policy (link or text)
   - Support information

## Step-by-Step Publishing Process

### Step 1: Prepare Extension Package

```bash
# Generate icons (if not already done)
yarn build

# Create distribution package
yarn package
# Output: new-window-opener.zip
```

Verify the package contains:

- `manifest.json`
- `src/` directory with scripts and icons
- `_locales/` directory with translations
- All required PNG icons (16, 32, 48, 128px)

### Step 2: Create Promotional Images

Create two promotional images:

1. **Large Tile (1280x800)**
   - Left side: Large extension icon (512x512)
   - Right side: Extension name and tagline
   - Background: Gradient matching extension colors
   - Call to action: "Install Now" or similar

2. **Small Tile (640x400)**
   - Center: Extension icon (256x256)
   - Below: Extension name
   - Simple background matching extension colors

Save as PNG files:

- `promo-1280x800.png`
- `promo-640x400.png`

### Step 3: Prepare Screenshots

Take 3-5 screenshots showing:

1. Extension icon in toolbar
2. New window opening
3. Multiple windows open
4. Extension details page

Requirements:

- PNG format
- 1280x800 or 640x400 pixels
- Clear and professional
- Show actual extension functionality

### Step 4: Write Store Listing Content

#### Extension Name

- "OneClick New Window" (or your chosen name)
- Max 45 characters

#### Short Description

- "Open new browser windows with one click"
- Max 132 characters

#### Detailed Description

Include:

- Key features
- How to use
- System requirements
- Privacy information
- Support details

Example:

```
OneClick New Window is a lightweight Chrome extension that lets you open new browser windows with a single click.

✨ Features:
• One-click window creation
• Beautiful light/dark theme icons
• Privacy focused - no data collection
• Minimal permissions required
• International support (English & Russian)

🚀 How to Use:
1. Install the extension
2. Click the icon in your toolbar
3. A new window opens instantly

🔒 Privacy:
• No data collection
• No tracking
• No external communications
• Local-only operation

📋 Requirements:
• Chrome 88 or higher
• Windows, macOS, Linux, or ChromeOS

🌐 Support:
• GitHub: [Your GitHub URL]
• Email: [Your Email]
```

#### Privacy Policy

- Link to your privacy policy
- Or paste the content from `PRIVACY.md`
- Must be accessible publicly

### Step 5: Upload to Chrome Web Store

1. **Log in** to [Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. **Click "New Item"**
3. **Upload ZIP file**
   - Drag and drop `new-window-opener.zip`
   - Or click to select file
4. **Fill in Store Listing**
   - Extension name
   - Detailed description
   - Category (Productivity recommended)
   - Language (English)
5. **Upload Images**
   - Promotional tiles (1280x800, 640x400)
   - Screenshots
   - Icon (128x128 will be auto-extracted)
6. **Set Pricing**
   - Select "Free"
7. **Select Distribution**
   - "Public" for Chrome Web Store
   - Or "Private" for limited distribution
8. **Review and Publish**
   - Review all information
   - Click "Submit for Review"

### Step 6: Review Process

#### What Happens Next

1. **Automated Review** (immediate)
   - Malware scanning
   - Policy compliance check
   - Technical validation

2. **Manual Review** (1-7 days)
   - Human review of functionality
   - Policy compliance verification
   - May request changes

3. **Publication**
   - Extension goes live
   - Available in Chrome Web Store
   - Automatic updates enabled

#### Common Review Issues

- **Permission Justification**: Ensure `tabs` permission is justified
- **Privacy Policy**: Must be accessible and comprehensive
- **Functionality**: Must work as described
- **Content**: No misleading claims

### Step 7: Post-Publication

#### Monitor Metrics

- Install count
- User ratings
- Crash reports
- User feedback

#### Update Extension

1. Update version in `manifest.json`
2. Update `CHANGELOG.md`
3. Create new package: `yarn package`
4. Upload new version to Developer Dashboard
5. Submit for review

#### Respond to Users

- Monitor reviews
- Respond to feedback
- Address issues promptly
- Update extension based on feedback

## Chrome Web Store Policies

### Must Comply With

1. **Developer Program Policies**
   - No deceptive behavior
   - No malware or viruses
   - Respect user privacy
   - Clear functionality description

2. **Content Policies**
   - No hate speech
   - No violence
   - No sexually explicit material
   - No illegal activities

3. **Privacy Requirements**
   - Clear privacy policy
   - Data collection disclosure
   - User consent for data collection

### Special Considerations for This Extension

- **Minimal Permissions**: Only `tabs` permission
- **No Data Collection**: Clearly stated in privacy policy
- **Simple Functionality**: Easy to review and verify

## Marketing (Optional)

### Increase Visibility

1. **Optimize Store Listing**
   - Clear, compelling description
   - High-quality images
   - Relevant keywords

2. **Social Media**
   - Announce on Twitter, LinkedIn
   - Share on relevant forums
   - Blog post about the extension

3. **Website**
   - Create simple landing page
   - Documentation and support
   - Download links

4. **User Engagement**
   - Respond to reviews
   - Address issues quickly
   - Consider feature requests

## Troubleshooting Publication Issues

### Extension Rejected

Common reasons and solutions:

1. **Permission Not Justified**
   - Add explanation for `tabs` permission
   - Update description to clarify need

2. **Privacy Policy Missing**
   - Ensure privacy policy is accessible
   - Link to hosted version of `PRIVACY.md`

3. **Functionality Issues**
   - Test extension thoroughly
   - Fix any bugs before resubmitting

4. **Policy Violations**
   - Review Chrome Web Store policies
   - Make necessary changes

### Technical Issues

- **Upload Fails**: Check ZIP file size and contents
- **Validation Errors**: Check manifest.json format
- **Icon Issues**: Ensure all required icon sizes exist

## Maintenance

### Regular Updates

- Update dependencies
- Test with new Chrome versions
- Address user feedback
- Fix reported issues

### Version Management

- Use semantic versioning
- Update changelog
- Communicate changes to users

### Sunsetting (If Needed)

- Provide notice to users
- Remove from store
- Archive repository

## Resources

### Official Documentation

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Developer Program Policies](https://developer.chrome.com/docs/webstore/program-policies/)
- [Publishing Your Extension](https://developer.chrome.com/docs/webstore/publish/)

### Support

- [Chrome Web Store Help](https://support.google.com/chrome_webstore/)
- [Developer Forum](https://groups.google.com/a/chromium.org/g/chromium-extensions)

## Checklist Before Publishing

### Extension Package

- [ ] `yarn build` executed
- [ ] `yarn package` created ZIP
- [ ] All required files in ZIP
- [ ] Manifest version is 3
- [ ] Icons in all required sizes

### Store Listing

- [ ] Promotional images created
- [ ] Screenshots prepared
- [ ] Description written
- [ ] Privacy policy ready
- [ ] Category selected

### Compliance

- [ ] Extension follows policies
- [ ] Permissions justified
- [ ] No deceptive claims
- [ ] Privacy policy comprehensive

### Testing

- [ ] Extension works in Chrome
- [ ] No console errors
- [ ] Multiple windows open correctly
- [ ] Icons display properly

Good luck with your publication! 🚀
