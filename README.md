# Q1 Konnect - Official Marketing & Partner Acquisition Website

The official, high-converting standalone marketing and lead-generation website for **Q1 Konnect: Healthcare Workforce Network**.

> **Note**: This repository is completely separate from the core Q1 Konnect mobile/web application repository (`q1-konnect`). It can be deployed independently to any static web hosting provider (e.g., Vercel, Netlify, AWS Amplify, Cloudflare Pages).

---

## 🌟 Overview & Key Objectives

This website serves two primary audiences in the healthcare ecosystem:

1. **Hospital & Healthcare Facility Leadership** (CNOs, Medical Directors, HR Executives):
   - Educates facilities on eliminating shift shortages without traditional 35–50% agency markups.
   - Highlights 100% automated PRC license verification, clinical matching scoring, and geofenced QR attendance.
   - **Conversion Action**: Schedule a 20-Minute Partnership Consultation / Product Demo (generates `.ics` calendar invitation).
   - **Interactive Tool**: Hospital Staffing ROI & Overtime Savings Calculator.

2. **Registered Nurses & Healthcare Professionals**:
   - Educates nurses on shift flexibility, guaranteed transparent pay, and the digital credential wallet.
   - Emphasizes zero fees for healthcare workers and fast digital wallet payouts (GCash, Maya, Bank Transfer).
   - **Conversion Action**: Fast-track registration for the Nurse Talent Pool (assigns unique applicant reference ID).
   - **Interactive Tool**: Nurse Supplemental Shift Earnings Estimator.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Storage & Leads**: LocalStorage with built-in export utility and direct hook for Supabase / CRM webhooks.
- **Calendar Support**: Dynamic `.ics` file generator for Google Calendar, Outlook, and Apple Calendar.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher)
- NPM or Yarn

### Installation & Run

1. Navigate to this directory:
   ```bash
   cd q1-konnect-website
   ```

2. Install dependencies:
   ```bash
   npm.cmd install
   ```

3. Start the local development server:
   ```bash
   npm.cmd run dev
   ```
   Open `http://localhost:3001` in your browser.

4. Build for production:
   ```bash
   npm.cmd run build
   ```
   The compiled static assets will be in `dist/`.

---

## 📋 Features Included

- **Dynamic Dual-Persona Switcher**: Seamlessly toggles the hero and section priorities between "For Hospitals" and "For Nurses".
- **Interactive App Feature Showcase**: Interactive tabs simulating the Hospital Staffing Command Center and the Nurse Mobile Companion (PWA).
- **Hospital Meeting Scheduler Modal**: Validated booking flow with instant `.ics` download.
- **Nurse Talent Pool Application Modal**: Multi-specialty registration with applicant code generation.
- **Interactive Financial Calculators**:
  - Hospital Staffing Savings & Administrative Time Recovered
  - Nurse Monthly & Weekly Take-Home Estimator
- **Compliance & Trust Section**: Details on PRC license verification and Philippine Data Privacy Act (RA 10173) compliance.
- **Segmented FAQ Accordion**: Tailored answers for both hospital partners and bedside nurses.
- **Local Leads Manager (Drawer)**: Non-intrusive administrative drawer allowing testing teams to review and export captured leads directly from the browser without third-party dependencies.

---

## 📄 License
Private & Proprietary — Q1 Konnect Platform Inc.
