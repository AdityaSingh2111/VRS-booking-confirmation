# Packers & Movers Booking Confirmation Template

An enterprise-grade, white-label booking confirmation PDF generator template. Fully decoupled from company-specific identities, allowing quick rebranding by modifying configuration files alone without editing component logic.

---

## 🚀 Rebranding Guide (White-Label Setup)

To configure this application for a new company, update **only** the following files:

### 1. Business & Identity Config
* **[company.ts](file:///c:/VRS/booking-confirmation/src/config/company.ts)**: Company names, GST, ISO certifications, court jurisdiction, and support details.
* **[services.ts](file:///c:/VRS/booking-confirmation/src/config/services.ts)**: Available service types, accepted payment methods, and default form values.
* **[executives.ts](file:///c:/VRS/booking-confirmation/src/config/executives.ts)**: Booking executives directory.
* **[seo.ts](file:///c:/VRS/booking-confirmation/src/config/seo.ts)**: Deployment URLs and metadata for OpenGraph/SEO preview.

### 2. Styles & Branding assets
* **[styles.css](file:///c:/VRS/booking-confirmation/src/styles.css)**: Set primary, accent, and brand variables under `:root`:
  ```css
  --brand-blue: #new-color;
  --brand-orange: #new-color;
  --brand-green: #new-color;
  ```
* **Logo**: Replace `src/assets/logo.webp` with your company logo.
* **Favicon**: Replace `public/favicon.ico`.

---

## 🛠️ Technical Stack

- **Core**: React 19 + TypeScript (Strict Mode)
- **Routing**: TanStack Router (File-based)
- **State Management**: Zustand
- **Forms & Validation**: React Hook Form + Zod
- **Styling**: Tailwind CSS v4 + Vanilla CSS print layout (tuned for pixel-perfect A4 portrait prints)
- **Framework**: TanStack Start

---

## 💻 Local Development

### Prerequisites
Make sure you have Node.js and npm installed.

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd booking-confirmation

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
