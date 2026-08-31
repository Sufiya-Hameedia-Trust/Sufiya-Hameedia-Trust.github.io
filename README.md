# Sufiya Hameedia Group of Institutions Website

A modern, responsive website for Sufiya Hameedia Group of Institutions - a charitable trust providing quality education across multiple programs in Bengaluru.

**Live Website:** [https://www.sufiyahameediatrust.in](https://www.sufiyahameediatrust.in)  
**GitHub Pages:** [https://sufiya-hameedia-trust.github.io](https://sufiya-hameedia-trust.github.io)  
**Current Version:** 2.3.0

---

## Table of Contents

- [For Humans](#for-humans)
  - [About](#about)
  - [Key Features](#key-features)
  - [How to Deploy Changes](#how-to-deploy-changes)
  - [Testing Guide](#testing-guide)
  - [Common Tasks](#common-tasks)
  - [Contact](#contact)
- [For AI Agents](#for-ai-agents)
  - [Repository Structure](#repository-structure)
  - [Branching Strategy](#branching-strategy)
  - [Deployment Architecture](#deployment-architecture)
  - [Design System](#design-system)
  - [Critical Rules](#critical-rules)
  - [Seasonal Content Management](#seasonal-content-management)

---

## For Humans

### About

Sufiya Hameedia Trust operates three educational institutions:
- **Higher Primary School (HPS)** - English Medium Day School (LKG to Grade 5), recognized by Government of Karnataka
- **Arabic Madrasa** - Hafiz-e-Quran, Nazrah Quran with Tajweed, Darse Nizam, and Islamic practices
- **Night Coaching (Adult Education)** - NIOS certification for 3rd, 5th, 8th, 10th, and 12th class (9 PM - 11 PM)

**Location:** #575/2, 10th A Cross, Vinayakanagar, Old Guddadahalli, Mysore Road, Bengaluru-560026

### Key Features

- Mobile-first responsive design (90% of users are on mobile)
- Photo gallery with real school photos
- UPI donation system with QR code
- Announcements and feedback system
- Multilingual support (English/Urdu)
- Interactive location map
- Admission banner (seasonal, toggleable)

### How to Deploy Changes

This website is hosted on **GitHub Pages**. Deployment is automatic when you push to the active release branch.

#### Deployment Steps:

1. **Make changes** on a feature branch (see Branching Strategy below)
2. **Push to GitHub** - `git push origin feature/your-branch-name`
3. **Test from feature branch:**
   - Go to repository **Settings** > **Pages**
   - Under **Build and deployment**, change **Branch** to your feature branch
   - Click **Save**
   - Wait 2-5 minutes for deployment
   - Visit https://www.sufiyahameediatrust.in to verify
4. **After testing passes:**
   - Create a new `Release_X.X.X` branch from the previous release
   - Create a Pull Request from your feature branch to the new release branch
   - Merge the PR
   - Change GitHub Pages source to the new release branch
   - Delete the feature branch
5. **If something breaks:**
   - Change GitHub Pages source back to the previous release branch (e.g., `Release_2.0.0`)
   - Site rolls back within 2-5 minutes

#### GitHub Pages Configuration:

- **Settings Location:** Repository > Settings > Pages
- **Source:** Deploy from a branch
- **Active Branch:** `Release_2.1.0` (or current release)
- **Folder:** `/ (root)`
- **Custom Domain:** `www.sufiyahameediatrust.in`
- **HTTPS:** Enforced
- **CNAME File:** Must never be deleted (contains custom domain)

### Testing Guide

**IMPORTANT: 90% of users access this site on mobile phones. Always test mobile first.**

#### Mobile Testing with Browser DevTools (F12)

1. **Open the deployed website** in Chrome: https://www.sufiyahameediatrust.in

2. **Open DevTools:**
   - Windows/Linux: Press `F12` or `Ctrl + Shift + I`
   - Mac: Press `Cmd + Option + I`

3. **Toggle Device Toolbar:**
   - Click the phone/tablet icon (top-left of DevTools panel)
   - OR shortcut: `Ctrl + Shift + M` (Windows) / `Cmd + Shift + M` (Mac)

4. **Select Mobile Devices to Test:**
   | Device | Resolution | Priority |
   |--------|-----------|----------|
   | iPhone SE | 375 x 667 | HIGH (smallest common phone) |
   | iPhone 12/13/14 Pro | 390 x 844 | HIGH (most common) |
   | Samsung Galaxy S20 | 360 x 800 | HIGH (Android) |
   | iPhone 14 Pro Max | 430 x 932 | MEDIUM (large phone) |
   | iPad Air | 820 x 1180 | LOW (tablet) |

5. **Testing Checklist:**
   - [ ] Page loads without errors (check Console tab for red messages)
   - [ ] No horizontal scrollbar on any device
   - [ ] Images load completely (no broken image icons)
   - [ ] Text is readable without zooming
   - [ ] Buttons/links are tappable (large enough touch targets)
   - [ ] Hamburger menu opens and closes properly
   - [ ] Scroll is smooth through all sections
   - [ ] Admission banner displays correctly
   - [ ] Animation plays on page load (subtle slide-in)

6. **Network Speed Testing:**
   - In DevTools, go to **Network** tab
   - Click dropdown showing "No throttling"
   - Select **Fast 3G**
   - Reload page
   - All content should load within 5-7 seconds
   - Images should appear within 3 seconds

7. **Check for Errors:**
   - Open **Console** tab in DevTools
   - Red messages = errors (fix required)
   - Yellow messages = warnings (usually OK)
   - Common errors:
     - `404 Not Found` = missing file (check path)
     - `Failed to load resource` = image missing
     - `Uncaught TypeError` = JavaScript bug

#### Real Device Testing

After DevTools testing, also check on actual phones:
1. Open Chrome/Safari on your phone
2. Clear browser cache first (Settings > Clear Data)
3. Visit the website
4. Test portrait AND landscape orientation
5. Test scrolling, tapping buttons, navigation menu

#### Desktop Testing

- Check in Chrome, Safari, Firefox, Edge
- Resize browser window from wide to narrow
- Verify content stays centered and readable

#### Hard Refresh (Clear Cache)

If changes don't appear:
- Windows: `Ctrl + Shift + R` or `Ctrl + F5`
- Mac: `Cmd + Shift + R`
- Mobile: Clear browser cache in settings
- Try Incognito/Private mode

### Common Tasks

#### Hide Admission Banner (After Admission Deadline)

In `index.html`, add `banner-hidden` class to the banner card:
```html
<!-- Change this: -->
<div class="announcement-card admission-banner-card">

<!-- To this: -->
<div class="announcement-card admission-banner-card banner-hidden">
```

Push the change and the banner disappears. Remove the class to show it again next year.

#### Update Admission Banner Image for Next Year

1. Replace `images/admission-banner-2026-27.jpg` with new image
2. Rename to match year: `images/admission-banner-2027-28.jpg`
3. Update the `src` attribute in `index.html`
4. Update the `alt` text with new year

### Contact

**Sufiya Hameedia Trust**
- Phone: +91 8886946411 / +91 8722940656
- Email: sufiyahameediatrust@gmail.com
- [Feedback Form](https://forms.gle/wDcuF4GRafVFXFcK8)

**Socials:**
[Facebook](https://www.facebook.com/profile.php?id=61559426468254) | [Instagram](https://www.instagram.com/hameediatrust/) | [Twitter/X](https://x.com/SufiyaTrus1477) | [YouTube](https://youtube.com/@madrasasufiyahameedia?si=Jq06terImd8lrJ5V)

**Website Development:**
- Technical issues/suggestions: shazebfahmi22@gmail.com

### Release Information

For detailed feature updates and version history, see [CHANGELOG.md](CHANGELOG.md).

---

## For AI Agents

### Repository Structure

```
Sufiya-Hameedia-Trust.github.io/
├── index.html                              # Main landing page (single-page app)
├── style.css                               # Global styles (1500+ lines, mobile-first)
├── script.js                               # JavaScript (hamburger menu, scroll, UPI)
├── hps.html                                # Higher Primary School detail page
├── madarsa.html                            # Arabic Madrasa detail page (Note: spelled "madarsa" not "madrasa")
├── night-coaching.html                     # Night Coaching detail page
├── CNAME                                   # Custom domain: www.sufiyahameediatrust.in
├── CHANGELOG.md                            # Version history
├── LICENSE                                 # Project license
├── README.md                               # This file
├── QR/
│   └── index.html                          # Standalone QR code page (www.sufiyahameediatrust.in/QR)
└── images/                                 # All website images
    ├── sufiyah.png                         # Logo (dark, for nav)
    ├── sufiyah_lighter.png                 # Logo (light, for hero)
    ├── president.jpg                       # President photo
    ├── HPS.png                             # Higher Primary School image
    ├── Madrasa.png                         # Madrasa image
    ├── adult-education.png                 # Night coaching image
    ├── donation-qr.png                     # UPI QR code for donations
    ├── admission-banner-2026-27.jpg        # Admission banner (seasonal)
    ├── school.jpg                          # School exterior
    ├── SH-HPS.jpg                          # School building
    ├── children-studying.png               # Hero background
    ├── email-logo.svg                      # Social icon
    ├── instagram-logo.svg                  # Social icon
    ├── X-logo.svg                          # Social icon
    ├── youtube-logo.svg                    # Social icon
    └── facebook-logo.svg                   # Social icon
```

### Branching Strategy

This repo uses a **Release Branch** workflow optimized for GitHub Pages deployment.

#### Branch Types

| Branch Type | Naming Convention | Purpose | Deployed? | Lifetime |
|------------|-------------------|---------|-----------|----------|
| `main` | `main` | Default GitHub branch | NO | Permanent |
| Release | `Release_X.X.X` | Production code | YES (one at a time) | Permanent (never delete) |
| Feature | `feature/descriptive-name` | Development work | YES (for testing only) | Temporary (delete after merge) |

#### Version Numbering (Semantic Versioning)

`MAJOR.MINOR.PATCH`
- **MAJOR** (X.0.0): Complete redesigns, breaking changes
- **MINOR** (0.X.0): New features, content additions (e.g., admission banner)
- **PATCH** (0.0.X): Bug fixes, typo corrections, small tweaks

#### Complete Workflow

```
1. Developer creates feature branch from latest Release branch
2. Developer makes changes, pushes feature branch
3. Human deploys from feature branch for live testing
4. Human tests on mobile (F12 DevTools) and real devices
5. If tests pass: Create new Release_X.X.X branch, PR feature into it
6. Human merges PR, switches GitHub Pages to new release branch
7. Human verifies live site works correctly
8. Feature branch is deleted (cleanup)
9. Release branch is NEVER deleted (permanent history)
```

#### Detailed Steps

**Step 1: Start Feature Work**
```bash
git checkout Release_2.1.0       # Latest release
git pull origin Release_2.1.0
git checkout -b feature/your-feature-name
```

**Step 2: Develop & Push**
```bash
# Make changes...
git add .
git commit -m "feat: description of changes"
git push origin feature/your-feature-name
```

**Step 3: Test Deployment (Human Does This)**
- GitHub Settings > Pages > Branch: `feature/your-feature-name`
- Wait 2-5 minutes
- Test on mobile (see Testing Guide above)

**Step 4: Create Release & Merge (After Approval)**
```bash
git checkout Release_2.1.0
git pull origin Release_2.1.0
git checkout -b Release_2.2.0    # New release branch
git push origin Release_2.2.0

# Create PR on GitHub: feature/your-feature-name → Release_2.2.0
# Human reviews and merges
```

**Step 5: Switch Deployment (Human Does This)**
- GitHub Settings > Pages > Branch: `Release_2.2.0`
- Wait 2-5 minutes
- Verify site works

**Step 6: Cleanup**
```bash
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

#### Current Branches

| Branch | Status | Purpose |
|--------|--------|---------|
| `main` | Default | Not used for deployment |
| `Release_2.0.0` | Previous release | Website v2.0 (do not delete) |
| `Release_2.1.0` | **ACTIVE DEPLOYMENT** | Current live site |
| `feature/*` | Temporary | Delete after merge |

#### Commit Message Format

```
<type>: <short description>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: CSS/formatting changes (no logic change)
- refactor: Code restructuring
- chore: Maintenance (config, dependencies)
```

### Deployment Architecture

```
GitHub Repository
    │
    ├── Push to Release_X.X.X branch
    │       │
    │       ▼
    │   GitHub Pages (built-in deployment)
    │       │
    │       ▼
    │   Static site served at:
    │   - https://sufiya-hameedia-trust.github.io
    │   - https://www.sufiyahameediatrust.in (custom domain via CNAME)
    │
    └── No GitHub Actions workflow file exists
        (Deployment uses GitHub's built-in Pages build system)
```

**Key Points:**
- NO `.github/workflows/` directory exists - this is intentional
- GitHub Pages uses its internal Jekyll-free static deployment
- The `CNAME` file maps the custom domain
- SSL/HTTPS is enforced by GitHub automatically
- Deployment triggers on ANY push to the configured branch
- Deployment time: 2-5 minutes

### Design System

**Typography:**
- Primary: `Inter` (weights: 300-700)
- Display: `Playfair Display` (headings)
- Loaded via Google Fonts

**Color Palette:**
- Primary Blue: `#667eea`
- Purple accent: `#764ba2`
- Dark text: `#1b1d12`
- Section backgrounds: Various pastels and gradients

**Layout:**
- Max content width: `1200px` (container class)
- Mobile-first responsive design
- CSS Grid and Flexbox for layout
- Section-based single-page architecture

**Responsive Breakpoints:**
- `480px` - Small mobile
- `768px` - Tablet / large mobile
- `1024px` - Small desktop
- `1400px` - Large desktop

### Critical Rules

1. **NEVER** delete Release branches - they are permanent historical records
2. **NEVER** delete or modify the `CNAME` file - it maps the custom domain
3. **NEVER** push directly to a Release branch - always use feature branches + PRs
4. **ALWAYS** test on mobile BEFORE approving any changes (90% mobile users)
5. **ALWAYS** create feature branches from the LATEST release branch
6. **ALWAYS** update CHANGELOG.md for user-facing changes
7. **ALWAYS** use `loading="lazy"` on images for performance
8. **ALWAYS** provide descriptive `alt` text on images
9. **PRESERVE** the hamburger menu JavaScript in `script.js`
10. **PRESERVE** the UPI donation system code
11. **IMAGE FILES** should be < 500KB, preferably < 300KB
12. **FILE NAMING** use lowercase-hyphenated names (e.g., `admission-banner-2026-27.jpg`)

### Seasonal Content Management

The admission banner section can be toggled seasonally:

**To Hide (after admission deadline):**
```html
<!-- Add class "banner-hidden" -->
<div class="announcement-card admission-banner-card banner-hidden">
```

**To Show (before new academic year):**
```html
<!-- Remove class "banner-hidden" -->
<div class="announcement-card admission-banner-card">
```

**To Update for Next Year:**
1. Replace `images/admission-banner-2026-27.jpg` with new year's banner
2. Update filename to match year
3. Update `src` and `alt` attributes in `index.html`
4. Follow the branching workflow for deployment

---

## Development

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript  
**Local Testing:** `python3 -m http.server 8000` then visit `http://localhost:8000`  
**Current Version:** 2.1.0  

---

(c) 2024-2025 Sufiya Hameedia Trust. All rights reserved.
