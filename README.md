# 📄 Booking Confirmation Generator Template

An enterprise-grade, white-label booking confirmation PDF generator template. Built for logistics, relocation, and booking service providers, this template generates pixel-perfect, two-page A4 booking confirmation documents ready for printing or saving as PDF.

All company identity, business details, service options, and branding colors are fully decoupled into configuration files and centralized CSS design tokens — allowing complete rebranding in minutes without touching application logic.

---

## ✨ Key Features

- **⚡ Fast Interactive Form**: Comprehensive booking entry form powered by React Hook Form, Zod validation, and dynamic executive combobox search.
- **📄 Pixel-Perfect Two-Page A4 Document**:
  - **Page 1**: Booking ID, dates, customer details, pickup & delivery addresses, payment summary with balance calculations, next steps, executive contact, and verification QR code.
  - **Page 2**: Comprehensive terms, conditions, legal agreements, and trust badges.
- **🖨️ Optimized Print & PDF Export**: Tailored `@media print` rules ensuring exact page boundaries, background graphics preservation, and orphan-free layout on A4 paper.
- **🎨 Centralized Color System**: Single source of truth for all branding colors in `src/styles.css` using semantic CSS custom properties.
- **🏷️ Complete White-Label Readiness**: Business info, services, executives, terms, logo, and SEO metadata configured exclusively in `src/config/` and `src/content/`.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework & Server** | [TanStack Start](https://tanstack.com/router) + React 19 |
| **Routing** | TanStack Router (File-based) |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Print Layout |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **QR Generation** | `react-qr-code` |
| **Language** | TypeScript (Strict Mode) |

---

## 🎨 Centralized Color & Theme System

All brand colors are centralized in [`src/styles.css`](file:///c:/VRS/booking-confirmation/src/styles.css) under `:root` and `@theme inline`. Updating these CSS variables changes the entire application's theme instantly:

```css
:root {
  /* ── Semantic Theme Tokens ── */
  --primary: #0539bc;           /* Main Primary Brand Color */
  --secondary: #ef4b05;         /* Secondary Accent Color */
  --tertiary: #08cc50;          /* Tertiary Brand Color */

  --background: #ffffff;        /* App & Sheet Background */
  --surface: #f8fafc;           /* Card & Surface Background */
  --border: #e2e8f0;            /* Default Border Color */

  --text-primary: #0f172a;       /* Primary Text Color */
  --text-secondary: #475569;     /* Secondary Text Color */
  --text-muted: #94a3b8;         /* Muted Text Color */

  /* ── Semantic Status Colors ── */
  --success: #08cc50;           /* Success Indicators & Badges */
  --warning: #f59e0b;           /* Warnings & Alerts */
  --danger: #ef4444;            /* Validation Errors */
}
```

---

## 🚀 White-Label Setup & Rebranding Guide

To rebrand this application for a new business, edit **only** the configuration files listed below:

### 1. Color Palette & Branding
- **[`src/styles.css`](file:///c:/VRS/booking-confirmation/src/styles.css)**: Modify `:root` color tokens (`--primary`, `--secondary`, `--tertiary`, etc.).
- **Company Logo**: Replace `src/assets/logo.webp` with your logo image.
- **Favicon**: Replace `public/favicon.ico`.

### 2. Business Identity & Details
- **[`src/config/company.ts`](file:///c:/VRS/booking-confirmation/src/config/company.ts)**: Company name, legal name, GST number, ISO certification, support contact numbers, toll-free display, operating hours, jurisdiction, trust badges, and next steps list.

### 3. Services & Form Presets
- **[`src/config/services.ts`](file:///c:/VRS/booking-confirmation/src/config/services.ts)**: Offered service types, accepted payment methods, default values, and loading messages.

### 4. Booking Executives Directory
- **[`src/config/executives.ts`](file:///c:/VRS/booking-confirmation/src/config/executives.ts)**: List of booking executives with employee IDs, names, and contact numbers.

### 5. Document Terms & Conditions
- **[`src/content/terms.ts`](file:///c:/VRS/booking-confirmation/src/content/terms.ts)**: All legal sections, clauses, and terms points rendered on Page 2.

### 6. SEO & Metadata
- **[`src/config/seo.ts`](file:///c:/VRS/booking-confirmation/src/config/seo.ts)**: Deployment URL, OpenGraph titles, site name, and social card configuration.

---

## 📁 Project Structure

```
booking-confirmation/
├── public/                # Static assets & favicon
└── src/
    ├── assets/            # Images (logo.webp, etc.)
    ├── components/
    │   ├── booking/       # Booking form sections & action controls
    │   ├── doc/           # PDF Document layout (PageOne, PageTwo, primitives)
    │   ├── form/          # Form control primitives (FormInput, FormSelect, FormCombobox)
    │   └── ui/            # UI components (LoadingScreen)
    ├── config/            # Business & service configuration (company, services, executives, seo)
    ├── content/           # Legal terms & condition content
    ├── hooks/             # Custom React hooks & form state logic
    ├── lib/               # Utility functions, icon maps, error pages
    ├── routes/            # TanStack Router pages (/, /preview)
    ├── store/             # Zustand store for booking state
    ├── types/             # TypeScript data definitions
    └── styles.css         # Centralized CSS design tokens & print styles
```

---

## 💻 Development & Build Commands

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher (or bun / pnpm / yarn)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd booking-confirmation

# Install dependencies
npm install
```

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Build the client & SSR server bundles for production |
| `npm run start` | Run the built production server locally |

---

## 🖨️ Printing & PDF Export

1. Fill out the booking form on the homepage (`/`).
2. Click **Generate PDF** to open the document preview screen (`/preview`).
3. Click **Print / Save as PDF** in the toolbar.
4. Select **Save as PDF** or your printer destination in the browser print dialog. Ensure background graphics are enabled for full visual reproduction.
