/**
 * Document primitives — reusable building blocks shared by Page 1 and Page 2.
 *
 * All company data is imported from `@/config/company` so nothing is hardcoded.
 */

import type { ReactNode } from "react";
import { Globe, Phone, PhoneCall, Mail } from "lucide-react";
import { company, contact, doc } from "@/config/company";
import logo from "@/assets/logo.webp";
/* ═══════════════════════════════════════════════════════════════════
   WATERMARK
   ═══════════════════════════════════════════════════════════════════ */

export function Watermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <img src={logo} alt="" className="w-[360px] opacity-[0.09] select-none" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   LOGO
   ═══════════════════════════════════════════════════════════════════ */

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={logo}
        alt="VRS Cargo Packers & Movers"
        className={compact ? "h-26 w-auto -mt-10" : "h-26 w-auto -mt-10"}
      />

      {/* <p
        className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em]"
        style={{ color: "var(--brand-blue)" }}
      >
        {company.tagline}
      </p> */}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DOCUMENT HEADER
   ═══════════════════════════════════════════════════════════════════ */

export function DocHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className="-mt-1 flex flex-col">
      <header className="flex items-center pb-3">
        <Logo compact={compact} />
      </header>
      {/* Brand-colored divider line */}
      <div
        className="h-[2px] w-full rounded-full"
        style={{
          background: "linear-gradient(90deg, var(--brand-blue), var(--brand-orange))",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CARD
   ═══════════════════════════════════════════════════════════════════ */

export function Card({
  title,
  icon,
  accent = false,
  children,
  className = "",
}: {
  title?: string;
  icon?: ReactNode;
  accent?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative border-y border-border py-3 ${className}`}
      style={{
        pageBreakInside: "avoid",
        breakInside: "avoid",
      }}
    >
      {accent && (
        <div
          className="absolute left-0 top-0 h-full w-[3px] rounded-full"
          style={{ backgroundColor: "var(--brand-orange)" }}
        />
      )}
      {title && (
        <header className="mb-3 flex items-center gap-2">
          {icon && <span style={{ color: "var(--brand-blue)" }}>{icon}</span>}
          <h3
            className="font-serif text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--brand-blue)" }}
          >
            {title}
          </h3>
        </header>
      )}
      <div className={accent ? "pl-3" : ""}>{children}</div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FIELD
   ═══════════════════════════════════════════════════════════════════ */

export function Field({
  label,
  value,
  icon,
  strong = false,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
  strong?: boolean;
}) {
  return (
    <div className="flex min-w-0 items-start gap-2.5">
      {icon && <span className="mt-[2px] text-slate-700">{icon}</span>}
      <div className="min-w-0">
        <p className="text-[7.5px] uppercase tracking-widest text-slate-700">{label}</p>
        <p
          className={`mt-0.5 truncate text-[12px] ${strong ? "font-semibold text-foreground" : "font-semibold text-foreground/90"
            }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TERMS SECTION (used on Page 2)
   ═══════════════════════════════════════════════════════════════════ */

export function TermsCard({
  index,
  title,
  icon,
  points,
  note,
  chips,
}: {
  index: string;
  title: string;
  icon: ReactNode;
  points?: string[] | undefined;
  note?: string | undefined;
  chips?: string[] | undefined;
}) {
  return (
    <section
      className="border-y border-border py-4"
      style={{
        pageBreakInside: "avoid",
        breakInside: "avoid",
      }}
    >
      <header className="mb-3 flex items-center gap-2">
        {icon && <span style={{ color: "var(--brand-blue)" }}>{icon}</span>}
        <h3
          className="font-serif text-[11px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: "var(--brand-blue)" }}
        >
          <span className="mr-1.5">{index}</span>
          {title}
        </h3>
      </header>
      {points && (
        <ul className="mt-2.5 grid grid-cols-2 gap-x-6 gap-y-1.5">
          {points.map((p) => (
            <li key={p} className="flex gap-2 text-[11.5px] leading-[1.55] text-slate-700">
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
      {chips && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-sm border border-hairline bg-transparent px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>
      )}
      {note && (
        <p className="mt-4 border-t border-hairline pt-3 text-[9.5px] leading-[1.65] text-slate-700">
          {note}
        </p>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */

export function Footer({ page }: { page: number }) {
  return (
    <footer className="mt-auto">
      {/* Colored divider */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, var(--brand-blue), var(--brand-orange))`,
        }}
      />
      <div className="pt-3">
        <div className="flex items-center justify-between gap-4">
          <div className="grid flex-1 grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Globe className="h-3 w-3 text-slate-700" />
              <span
                className="truncate text-[8.5px] font-semibold"
                style={{ color: "var(--brand-blue)" }}
              >
                {contact.website}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-slate-700" />
              <span
                className="truncate text-[8.5px] font-semibold"
                style={{ color: "var(--brand-blue)" }}
              >
                {contact.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="h-3 w-3 text-slate-700" />
              <span
                className="truncate text-[8.5px] font-semibold"
                style={{ color: "var(--brand-blue)" }}
              >
                {contact.tollFree}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-slate-700" />
              <span
                className="truncate text-[8.5px] font-semibold"
                style={{ color: "var(--brand-blue)" }}
              >
                {contact.email}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-1.5 border-t border-hairline pt-1.5 text-center text-[8.5px] text-slate-700">
          {doc.copyright} · {doc.generatedNote}
        </p>
      </div>
    </footer>
  );
}
