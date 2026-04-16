# Alfa Global Group Website - Product Requirements Document

## Original Problem Statement
Build a premium, professional website for "Alfa Global Group" - a diversified global organization with business interests in wealth management, private equity, fintech trading, financial product distribution, agriculture, cyber security, and shipping.

## User Personas
- **High Net Worth Individuals (HNIs)**: Looking for wealth management and investment advisory services
- **Institutional Investors**: Seeking private equity and strategic investment opportunities
- **Corporate Clients**: Requiring cybersecurity solutions and business consulting
- **General Visitors**: Learning about the company and its subsidiaries

## Core Requirements

### Pages Structure
1. **Home** (`/`) - Hero section, performance stats, company overview, services
2. **About** (`/about`) - Company history, vision, mission, group companies overview
3. **Services** (`/services`) - Service categories across all business verticals
4. **Strategy** (`/strategy`) - Strategic pillars, execution methods, performance stats
5. **Global Access** (`/global-access`) - International presence, regional access areas
6. **Team** (`/team`) - 6 team members with Indian origin profiles
7. **Contact** (`/contact`) - Contact form, phone, email, office address
8. **Privacy** (`/privacy`) - Privacy policy
9. **Terms** (`/terms`) - Terms of service

### Company Pages (Dropdown Menu)
10. **Alfa Global Wealth Advisors** (`/alfa-global-wealth-advisors`) - Wealth management arm
11. **Alfa Star Dynamics** (`/alfa-star-dynamics`) - Private equity & capital investments
12. **Alfa Zillion Traders** (`/alfa-zillion-traders`) - Fintech trading platform
13. **Gazillion Capital** (`/gazillion-capital`) - Financial product distribution + Regulated & Certified By section
14. **MK Dairy Farms** (`/mk-dairy-farms`) - Agriculture & natural resources
15. **Cyberhakz** (`/cyberhakz`) - Enterprise cybersecurity solutions
16. **Dhanveir Groups Shipping** (`/dhanveir-groups-shipping`) - Maritime shipping services

### Design Requirements
- Premium, professional look with dark hero sections
- Standardized Teal color theme (no theme switching)
- 3D Globe preloader animation
- Responsive design for mobile/tablet/desktop
- Animated sections with Framer Motion
- text-justify alignment throughout
- Indian origin stock photos for all people images

## What's Been Implemented

### Completed Features
- [x] Full site structure with 16+ pages
- [x] Header with dropdown menu for 7 company pages
- [x] Footer with complete links and contact info
- [x] All company pages with full content from reference site
- [x] Teal theme standardized (theme switching removed)
- [x] 3D Globe preloader
- [x] Mobile responsive navigation
- [x] Text justification applied site-wide
- [x] Indian origin AI-generated professional photos for ALL people images across entire site (comprehensive audit completed)
  - Home page: "Who We Are" section (Indian man + woman), "Strategic Ventures" (Indian businessmen), meeting scene (Indian boardroom)
  - About page: "Who We Are" (Indian business professionals)
  - Team page: 6 unique Indian professional headshots
  - Client testimonials: 4 Indian professional photos  
  - Alfa Global Wealth Advisors: Indian businessman and businesswoman corporate photos, hero image with Indian financial professionals
  - Alfa Star Dynamics: Indian investment imagery (coins, growth charts), Indian corporate professionals
  - Alfa Zillion Traders: Indian business partnership/handshake, Indian corporate professional
  - Gazillion Capital: Two Indian team meeting scenes
  - All remaining images are non-people (buildings, charts, ships, icons, abstract silhouettes)
- [x] Team page: 12 real team members with actual photos from document, short bio + expandable full profile modal
  - Hariharan Ramachandran, Chetan Bharkhada, Capt. Govindarajan Senthilkumar, Mehul Dhokai, Reuben Balasingh, Dr. K.G. Raghunath, Navin Hariharan, Raj Navneeth, Ambika Aranganathan, Nithyasri Balakrishnan, Dhamodharan Gopalakrishnan, Hemalatha Karthikeyan
- [x] Client testimonials with Indian names and photos
- [x] Newsletter subscription with backend API
- [x] Contact form saving to MongoDB (POST /api/contact) - WORKING
- [x] WhatsApp floating chat button
- [x] Cookie consent banner
- [x] Scroll progress indicator
- [x] Back to top button
- [x] Partners/Certifications section on Gazillion Capital page only
- [x] Privacy Policy and Terms pages
- [x] Dhanveir Groups Shipping page with transparent logo
- [x] FAQs page and links completely removed
- [x] Live market ticker with real-time data from NSE API (NIFTY), Google Finance (SENSEX), open.er-api.com (USD/INR), goodreturns.in fallback (Gold, Silver)
- [x] Backend API endpoint `/api/market-data` with 5-min cache
- [x] Insights/Research page with 6 articles, clickable from homepage
- [x] Social media links in footer (LinkedIn, X, Facebook)
- [x] Map z-index fix - no longer overlaps navbar
- [x] Map single instance - no world tile looping (noWrap + maxBounds)
- [x] Page subtitle text centered on all hero sections
- [x] All page hero sections with consistent pt-36 pb-16 padding
- [x] ScrollToTop on route navigation
- [x] Docker deployment files (Dockerfile.backend, Dockerfile.frontend, docker-compose.yml, nginx.conf)
- [x] Investment calculator moved to Alfa Global Wealth Advisors page
- [x] Homepage sections cleaned up (testimonials, stats counters, badges removed)
- [x] "THE ALFA ADVANTAGE" section on homepage
- [x] Codebase cleanup - removed obsolete files

## Tech Stack
- **Frontend**: React, React Router, Tailwind CSS, Framer Motion, Three.js
- **Backend**: FastAPI, Motor (async MongoDB driver)
- **Database**: MongoDB

## Architecture
```
/app
├── backend/
│   ├── routes/
│   │   ├── contact.py
│   │   ├── newsletter.py
│   │   ├── testimonials.py
│   │   └── insights.py
│   ├── models.py
│   └── server.py
└── frontend/src/
    ├── components/
    │   ├── UltraHeader.jsx
    │   ├── UltraFooter.jsx
    │   ├── Globe3DPreloader.jsx
    │   ├── ClientTestimonials.jsx
    │   └── ProfessionalSections.jsx
    ├── pages/
    │   ├── UltraHome.jsx
    │   ├── AboutPage.jsx
    │   ├── ServicesPage.jsx
    │   ├── StrategyPage.jsx
    │   ├── GlobalAccessPage.jsx
    │   ├── TeamPage.jsx
    │   ├── PremiumContact.jsx
    │   ├── AlfaGlobalWealthAdvisorsPage.jsx
    │   ├── AlfaStarDynamicsPage.jsx
    │   ├── AlfaZillionTradersPage.jsx
    │   ├── GazillionCapitalPage.jsx
    │   ├── MKDairyFarmsPage.jsx
    │   ├── CyberhakzPage.jsx
    │   ├── DhanveirGroupsShippingPage.jsx
    │   ├── PrivacyPage.jsx
    │   └── TermsPage.jsx
    └── App.js
```

## API Endpoints
- `POST /api/contact` - Contact form submission (saves to MongoDB)
- `GET /api/contact` - Get all contact submissions
- `POST /api/subscribe` - Newsletter subscription
- `GET /api/testimonials` - Get testimonials
- `GET /api/insights` - Get insights

## Pending/Future Tasks
- Contact form email notifications (optional - currently saves to DB only)
- SEO optimization and meta tags
- Additional UI refinements based on user feedback

## Known Issues
- None - all reported bugs fixed (Feb 2026)
