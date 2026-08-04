# 📄 Booking Confirmation Generator

An enterprise-grade, white-label booking confirmation document generator for VRS Cargo Packers and Movers. Generates pixel-perfect, two-page A4 booking confirmation documents ready for printing or exporting as PDF.

---

## ✨ Key Features

- **⚡ Interactive Booking Form**: Real-time validated entry form powered by React Hook Form, Zod, dynamic balance calculations, and searchable executive selector.
- **📄 Two-Page A4 Document Layout**:
  - **Page 1**: Booking ID, dates, customer info, pickup & delivery addresses, payment summary, next steps, support contacts, and verification QR code.
  - **Page 2**: Comprehensive terms, conditions, legal agreements, and trust badges.
- **🖨️ Tailored Print Output**: Specialized CSS `@media print` rules tuned for exact A4 portrait boundaries without orphaned text or extra pages.
- **🎨 CSS-First Theme Architecture**: Single source of truth for all brand colors in `src/styles.css` using semantic CSS custom properties.
- **🏷️ Fully Decoupled White-Label Configuration**: All company details, service presets, executive directory, legal terms, and SEO metadata configured in `src/config/` and `src/content/`.

---

## 🛠️ Technology Stack

| Layer                  | Technology                                                                |
| :--------------------- | :------------------------------------------------------------------------ |
| **Framework & Server** | [TanStack Start](https://tanstack.com/router) + React 19                  |
| **Routing**            | TanStack Router (File-based)                                              |
| **State Management**   | [Zustand](https://github.com/pmndrs/zustand)                              |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Print Layout     |
| **Icons & QR**         | [Lucide React](https://lucide.dev/) & `react-qr-code`                     |
| **Language Engine**    | TypeScript 5.8 (Strict Mode) · Node.js `>=22 <25`                         |

---

## 📁 Project Directory Structure

```
booking-confirmation/
├── public/                # Static web assets & favicon
└── src/
    ├── assets/            # Brand imagery (logo.webp)
    ├── components/
    │   ├── booking/       # Booking form sections & action controls
    │   ├── doc/           # PDF Document layout (PageOne, PageTwo, primitives)
    │   ├── form/          # Form control primitives (FormInput, FormSelect, FormCombobox)
    │   └── ui/            # UI components (LoadingScreen)
    ├── config/            # Business & service configuration (company, services, executives, seo)
    ├── content/           # Legal terms & condition content
    ├── hooks/             # Custom React hooks & form state logic
    ├── lib/               # Utility functions, icon maps, error handlers
    ├── routes/            # TanStack Router pages (/, /preview)
    ├── store/             # Zustand store for booking state
    ├── types/             # TypeScript data interfaces
    └── styles.css         # Centralized CSS design tokens & print styles
```

---

## 💻 Command Reference

| Command             | Description                                                                        |
| :------------------ | :--------------------------------------------------------------------------------- |
| `npm run dev`       | Start Vite dev server with hot module replacement                                  |
| `npm run build`     | Compile production bundles (`.output/`)                                            |
| `npm run preview`   | Preview production build locally                                                   |
| `npm run typecheck` | Run TypeScript compiler check without emitting files                               |
| `npm run lint`      | Run ESLint static analysis                                                         |
| `npm run check`     | Run both `typecheck` and `lint` verification                                       |
| `npm run clean`     | Cross-platform cleanup of build & cache artifacts (`dist`, `.output`, `.tanstack`) |
| `npm run format`    | Auto-format source code using Prettier                                             |

---

## 📖 Documentation Index

- **[NEW_COMPANY_WORKFLOW.md](file:///c:/VRS/booking-confirmation/NEW_COMPANY_WORKFLOW.md)**: Step-by-step guide for cloning, rebranding, setting colors, and configuring a new company instance.
- **[DEPLOYMENT.md](file:///c:/VRS/booking-confirmation/DEPLOYMENT.md)**: Production deployment guide for Vercel, Node server, Cloudflare Pages, and Netlify.
