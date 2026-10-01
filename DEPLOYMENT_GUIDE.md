# Q1 Konnect Website - Sharing & Deployment Guide

This guide provides immediate instructions for **sharing the website with your Board of Directors**, followed by technical specifications for your **CTO to connect and publish to your custom domain**.

---

## 🚀 Part 1: How to Share Immediately with Fellow Board Members

To allow board members to easily open and view the website on their phones, iPads, or laptops, choose whichever method best fits your meeting style:

### Method A: Instant Public HTTPS Link (Zero Setup, 30 Seconds)
*Best for sharing via WhatsApp, Viber, Telegram, or Email without needing to install anything on their devices.*

1. Open **[app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.
2. Drag and drop the compiled **`dist`** folder (located at `q1-konnect-website/dist`) straight into the browser window.
3. You will immediately get a live, secure public URL (e.g., `https://q1-konnect-preview.netlify.app`).
4. Share this link directly with your fellow board members!

---

### Method B: Deploy via Vercel (1-Minute Command)
*Best if your organization already uses Vercel (matching the main app setup).*

1. Open PowerShell and navigate to the project directory:
   ```powershell
   cd "c:\Users\alvin\Desktop\APP FOUNDRY STUDIO\App Projects\Q1 Konnect App\q1-konnect-website"
   ```
2. Run the Vercel deploy command:
   ```powershell
   npx.cmd vercel
   ```
3. Follow the quick prompts to log in (or deploy preview). Vercel will output a live link (e.g., `https://q1-konnect-website.vercel.app`).

---

### Method C: Local Boardroom / WiFi Network Sharing
*Best for in-person board meetings where everyone is connected to the same office or home WiFi.*

1. In PowerShell, run:
   ```powershell
   cd "c:\Users\alvin\Desktop\APP FOUNDRY STUDIO\App Projects\Q1 Konnect App\q1-konnect-website"
   npm.cmd run preview
   ```
2. The terminal will display:
   ```
   ➜ Local:   http://localhost:3001/
   ➜ Network: http://192.168.1.XXX:3001/
   ```
3. Anyone on the same WiFi network can type the **Network URL** on their phone or tablet browser to interact with the site live.

---

## 🛠️ Part 2: Technical Handoff for the CTO (Custom Domain Setup)

The website repository is fully configured for continuous deployment with zero-configuration static hosting.

### 1. Repository Information
* **Local Path**: `c:\Users\alvin\Desktop\APP FOUNDRY STUDIO\App Projects\Q1 Konnect App\q1-konnect-website`
* **Git Status**: Independent Git repository on branch `main`.
* **Framework**: React 19 + TypeScript + Vite 6 + Tailwind CSS v4.
* **Pre-configured Files**:
  * `vercel.json` — Pre-configured with single-page application routing rewrites and asset cache headers.
  * `public/_redirects` — Pre-configured for Netlify / Cloudflare Pages SPA fallback.

### 2. Linking to GitHub (Pushing to Remote)
Your CTO can create a new repository in your organization's GitHub (e.g. `github.com/appfoundrystudio-svg/q1-konnect-website`) and push the repository:
```bash
git remote add origin https://github.com/appfoundrystudio-svg/q1-konnect-website.git
git push -u origin main
```

### 3. Vercel Custom Domain Configuration (Recommended)
1. In the Vercel dashboard, click **Add New Project** and select `q1-konnect-website`.
2. Configure settings:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
3. In **Project Settings** > **Domains**, enter your custom domain (e.g. `q1konnect.com` and `www.q1konnect.com`).
4. At your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare):
   * Add a `CNAME` record:
     * Name: `www`
     * Value: `cname.vercel-dns.com`
   * Add an `A` record (Apex domain):
     * Name: `@`
     * Value: `76.76.21.21`
5. Vercel will automatically provision a free, auto-renewing SSL/TLS (HTTPS) certificate within 2–5 minutes.

### 4. Alternative: Netlify Custom Domain Configuration
1. In Netlify, import the repository from GitHub.
2. In **Domain Management**, click **Add custom domain**.
3. Point your registrar DNS:
   * `CNAME` for `www` -> `<your-site-name>.netlify.app`
   * `A` record for `@` -> `75.2.60.5`
4. Netlify auto-provisions Let's Encrypt SSL.

---

## 📋 Checklist for Launch

- [x] Prominent high-resolution official Q1 Konnect logo integrated across header and footer.
- [x] Official Electric Blue (`#00A3FF`) & Deep Black (`#0A0E17`) branding aligned throughout.
- [x] Video explainers embedded for both Hospital Partners and Registered Nurses.
- [x] Pre-launch positioning aligned with November PHAPi National Convention.
- [x] Lead capture forms tested with `.ics` calendar invitation generation.
- [x] Production build verified (`dist/` ready).
