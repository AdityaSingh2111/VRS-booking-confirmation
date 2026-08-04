# 🚀 New Company Setup Workflow

A step-by-step checklist for cloning, rebranding, and configuring a new company instance from this white-label booking confirmation generator template.

---

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js**: `v22.x`+ installed (`>=22 <25`)
- **Git**: Installed and configured on your machine
- **GitHub & Deployment Accounts**: Account access for repository hosting and production deployment
- **New Company Branding Assets**:
  - Company logo in `.webp` format (`src/assets/logo.webp`)
  - Favicon (`public/favicon.ico`)
  - Primary, Secondary, and Accent brand color hex codes

---

## 1. Project Duplication & Artifact Cleanup

### Step 1.1: Copy Template Directory

Copy the template folder to a new directory named for your new company:

```bash
# Example for new company "Apex Movers"
cp -r booking-confirmation apex-movers-booking
cd apex-movers-booking
```

### Step 1.2: Remove Existing Git History & Build Caches

Delete template Git history, dependencies, and build outputs:

**Windows (PowerShell):**

```powershell
Remove-Item -Recurse -Force .git, node_modules, dist, .output, .tanstack, .wrangler, package-lock.json -ErrorAction SilentlyContinue
```

**macOS / Linux (Bash):**

```bash
rm -rf .git node_modules dist .output .tanstack .wrangler package-lock.json
```

---

## 2. Package Configuration & Dependencies

### Step 2.1: Update `package.json`

Update the `"name"` and `"description"` fields for the new company:

```json
{
  "name": "apex-movers-booking-generator",
  "description": "Booking confirmation document generator for Apex Movers."
}
```

### Step 2.2: Install Fresh Dependencies

```bash
npm install
```

---

## 3. Brand Assets Replacement

Replace placeholder assets with the new company's visual identity:

- [ ] **Logo**: Overwrite `src/assets/logo.webp` with your company logo (~400x120px WebP).
- [ ] **Favicon**: Overwrite `public/favicon.ico`.
- [ ] **Web Manifest**: Update `name` and `short_name` in `public/site.webmanifest`:
  ```json
  {
    "name": "Apex Movers Booking Generator",
    "short_name": "Apex Movers"
  }
  ```

---

## 4. Color & Theme Centralization

Open [`src/styles.css`](file:///c:/VRS/booking-confirmation/src/styles.css) and update `:root` custom properties with your brand colors:

```css
:root {
  /* ── Semantic Brand Tokens (Single Source of Truth) ── */
  --primary: #0539bc; /* Main Primary Brand Color */
  --primary-foreground: #ffffff;

  --secondary: #ef4b05; /* Secondary Accent Color */
  --secondary-foreground: #ffffff;

  --tertiary: #08cc50; /* Tertiary Brand Color */
  --tertiary-foreground: #ffffff;

  --background: #ffffff; /* App & Document Sheet Background */
  --surface: #f8fafc; /* Card Background */
  --border: #e2e8f0; /* Default Border Color */

  --text-primary: #0f172a; /* Primary Text Color */
  --text-secondary: #475569; /* Secondary Text Color */
  --text-muted: #94a3b8; /* Muted Text Color */

  /* ── Semantic Status Colors ── */
  --success: #08cc50; /* Success Indicators */
  --warning: #f59e0b; /* Warnings */
  --danger: #ef4444; /* Validation Errors */
}
```

---

## 5. Configuration Updates

Update company data across the configuration files:

### 5.1 Business Identity — [`src/config/company.ts`](file:///c:/VRS/booking-confirmation/src/config/company.ts)

- [ ] Update `company.name`, `nameFull`, `legalName`, `tagline`.
- [ ] Update `company.gst`, `iso`, `jurisdiction`.
- [ ] Update `contact.phone`, `phone2`, `tollFree`, `tollFreeDisplay`, `supportHours`, `email`, `website`, `websiteUrl`.
- [ ] Update `trustBadges` list and `nextSteps` customer instructions.
- [ ] Update `bookingConfig.idPrefix` and `referencePrefix`.

### 5.2 Services & Form Options — [`src/config/services.ts`](file:///c:/VRS/booking-confirmation/src/config/services.ts)

- [ ] Update `serviceTypes` and `paymentMethods` arrays.

### 5.3 Executives Directory — [`src/config/executives.ts`](file:///c:/VRS/booking-confirmation/src/config/executives.ts)

- [ ] Populate `bookingExecutives` array (`employeeId`, `name`, `mobile`).

### 5.4 Terms & Conditions — [`src/content/terms.ts`](file:///c:/VRS/booking-confirmation/src/content/terms.ts)

- [ ] Update legal clauses and terms points rendered on Page 2.

### 5.5 SEO Metadata — [`src/config/seo.ts`](file:///c:/VRS/booking-confirmation/src/config/seo.ts)

- [ ] Update `seo.siteName` and target production `deployUrl`.

---

## 6. Local Testing & Verification

```bash
# Start development server
npm run dev

# Verify TypeScript and lint rules
npm run check

# Verify production build compilation
npm run build
```

### Verification Checklist:

- [ ] Form displays updated logo, company title, and service options.
- [ ] Automatic balance calculation works as expected.
- [ ] Executive combobox reflects updated executive directory.
- [ ] Document Preview (`/preview`) renders Page 1 and Page 2 with new colors and company details.
- [ ] QR code resolves to the updated website URL.
- [ ] Print preview (`Ctrl+P`) formats cleanly within 2 A4 pages.

---

## 7. Git Repository & Deployment

### Step 7.1: Initialize Git Repository

```bash
git init
git add .
git commit -m "feat: initial commit for new company booking generator"
git branch -M main
git remote add origin https://github.com/YOUR_ORGANIZATION/NEW_REPO_NAME.git
git push -u origin main
```

### Step 7.2: Deploy to Production

For step-by-step production hosting setup (Vercel, Node server, Cloudflare Pages, Netlify), see **[DEPLOYMENT.md]**.

---

## 📋 Final QA Checklist

- [ ] Web application is live and accessible via custom domain.
- [ ] OpenGraph preview (titles, social cards) renders new company metadata.
- [ ] PDF document prints cleanly on A4 paper across Chrome and Edge.
