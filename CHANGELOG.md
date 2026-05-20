# Changelog

All notable changes to the Sufiya Hameedia Trust website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2025-05-20

### Added
- **Admissions Banner Section** - Seasonal admission poster for 2026-27
  - Mobile-first design (95-98% width on mobile, max 700px on desktop)
  - Subtle slide-in + fade-in CSS animation on page load
  - Purple gradient background (`#667eea` → `#764ba2`)
  - Rounded corners and shadow for poster card
  - Hover lift effect on desktop (disabled on mobile for performance)
  - `loading="lazy"` for performance
  - Seasonal toggle via CSS class `banner-hidden` on the section element

### Changed
- **README.md** - Complete rewrite with dual audience sections
  - "For Humans" section: testing guide with F12 DevTools, deployment steps, common tasks
  - "For AI Agents" section: repository structure, branching strategy, critical rules, design system
  - Mobile testing checklist with specific device resolutions
  - Network throttling guide for slow connection testing
  - Seasonal content management instructions

### Technical
- Added ~90 lines of CSS for banner section with 4 responsive breakpoints
- Image: `images/admission-banner-2026-27.jpg` (268KB, 1200x1600px)
- Banner placed between Hero/About section and Academic Institutions section
- No JavaScript required — pure CSS animations and toggle

---

## [2.0.0] - 2024-10-16

### Added
- **Photo Gallery Section** - Real classroom and Independence Day celebration photos
  - 3 authentic photos: `classroom1_kids_real.jpg`, `classroom2_kid_real.jpg`, `15_august_photo_teacher_student_real.jpg`
  - Non-clickable display with visible captions
  - Mobile-responsive grid layout
  - Professional card-based design

- **Announcements Section** - Communication hub for important updates
  - Google Forms integration for student/teacher feedback
  - Professional announcement cards layout
  - Feedback form: https://forms.gle/wDcuF4GRafVFXFcK8
  - Space designed for regular institutional updates

- **Enhanced UPI Donation System** - Streamlined payment experience
  - **Direct Payment Flow**: Quick amount buttons (₹100, ₹500, ₹1000) open UPI app immediately
  - **Custom Payment**: Main "Pay Now via UPI" button for custom amounts
  - **No Two-Step Process**: Single click directly opens UPI app with pre-filled details
  - Device tracking with reliable browser/platform identification
  - Trust indicators: "Trusted by thousands | 100% goes to education"
  - Security badges: "Secure Payment" & "Tax Exemption Available"

- **Multilingual Support** - Urdu language integration
  - President's message Urdu summary: "صدر کا پیغام - خلاصہ"
  - Proper RTL (Right-to-Left) text direction for Arabic script
  - Bilingual content maintained in same sections

- **Enhanced Navigation** - Improved user experience
  - Added "Gallery" and "Announcements" menu items
  - Smooth scroll navigation to new sections
  - Mobile-responsive hamburger menu support

### Changed
- **YouTube Channel Link** - Updated across all pages (index, hps, madrasa, night-coaching)
  - From: `@madrasaesufiyahamidiya`
  - To: `@madrasasufiyahameedia` (https://youtube.com/@madrasasufiyahameedia?si=Jq06terImd8lrJ5V)

- **Evening Classes Timing Display** - Multiple format improvements
  - Main page: "9:00 PM - 11:00 PM" → "Evening: 9:00 PM - 11:00 PM"
  - Night coaching page: "9-11" → "9pm to 11pm"
  - Night coaching page: "Evening Classes (PM)" → "Evening Classes"

- **UPI Payment Flow** - Completely redesigned for ease of use
  - **Quick amounts**: Direct UPI app opening (no selection step)
  - **Custom amounts**: Single button with helper text "Click here for custom pay"
  - **Device identifiers**: Reliable browser/platform detection (Chrome-Windows-1234)
  - **No scrolling issues**: Fixed `href="#"` causing page jumps

- **Footer Cleanup** - Improved categorization
  - Removed "Donation Programs" from "Academic Programs" sections across all pages
  - Academic Programs now only shows educational institutions

### Fixed
- **President Photo Positioning** - Visual improvement
  - Added `object-position: center top` to prevent head cutoff
  - Better face centering in circular frame

- **UPI Button Behavior** - Interaction improvements
  - Fixed scrolling to top when clicking amount buttons
  - Prevented default link behavior causing navigation issues
  - Direct UPI app launching without intermediate steps

- **Device Identifier Generation** - Reliability improvements
  - More robust browser detection (Chrome, Firefox, Safari, Edge)
  - Better platform identification (Windows, Mac, Android, iPhone)
  - Cleaner transaction notes instead of parsing errors

### Technical Improvements
- **JavaScript Enhancements**
  - Simplified UPI donation logic (removed complex amount selection state)
  - Direct link generation for immediate UPI app opening
  - Improved error handling and user feedback
  - Better device fingerprinting for transaction tracking

- **CSS Improvements**
  - Updated grid layouts for 3-column amount buttons (removed 4th custom button)
  - Added styling for custom pay helper text
  - Enhanced mobile responsiveness
  - Consistent styling across all pages

- **Cross-Page Consistency**
  - YouTube links updated on all 4 HTML pages
  - Footer academic programs cleaned up on all pages
  - Consistent navigation and branding throughout

---

## [1.0.0] - 2024-08-13

### Initial Release
- **Responsive Website Launch** - Modern educational institution website
- **Institution Pages** - HPS, Madrasa, Night Coaching dedicated pages
- **Contact Information** - Phone numbers, address, embedded Google Maps
- **Social Media Integration** - Facebook, Instagram, Twitter, YouTube links
- **Basic Donation System** - QR code integration for UPI payments
- **Mobile Optimization** - Touch-friendly interface and navigation
- **Professional Design** - Clean UI with institutional branding

---

## Versioning Strategy

- **Major Version (X.0.0)**: Breaking changes or significant feature additions
- **Minor Version (0.X.0)**: New features, backward compatible
- **Patch Version (0.0.X)**: Bug fixes, minor improvements

## Links

- [Live Website](https://sufiya-hameedia-trust.github.io)
- [Repository](https://github.com/Sufiya-Hameedia-Trust/Sufiya-Hameedia-Trust.github.io)
- [Issues](https://github.com/Sufiya-Hameedia-Trust/Sufiya-Hameedia-Trust.github.io/issues)
