/**
 * Document primitives — reusable building blocks shared by Page 1 and Page 2.
 *
 * All company data is imported from `@/config/company` so nothing is hardcoded.
 */

import type { ReactNode } from "react";
import { Globe, Phone, PhoneCall, Mail, Clock3 } from "lucide-react";
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

export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt={company.nameFull} className="h-28 w-auto -mt-12" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DOCUMENT HEADER
   ═══════════════════════════════════════════════════════════════════ */

export function DocHeader() {
  return (
    <div className="-mt-1 flex flex-col">
      <header className="flex items-center justify-between pb-2">
        <Logo />

        <div className="flex flex-col items-end text-right">
          <div className="flex items-center gap-1.5">
            <PhoneCall className="h-7.5 w-4.5" style={{ color: "var(--primary)" }} />
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.24em] text-slate-700">
              Toll Free:
            </span>
            <span className="text-[17px] font-bold leading-none text-slate-900">
              {contact.tollFreeDisplay}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <Clock3 className="h-7.5 w-4.5" style={{ color: "var(--secondary)" }} />
            <span className="text-[12.5px] font-semibold tracking-[0.074em] text-slate-600">
              Support Time:
              <span className="font-extrabold text-slate-900"> {contact.supportHours}</span>
            </span>
          </div>
        </div>
      </header>
      {/* Brand-colored divider line */}
      <div
        className="h-[2px] w-full rounded-full"
        style={{
          background: "linear-gradient(90deg, var(--primary), var(--secondary))",
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
          className="absolute left-0 top-0 h-full w-[2px] rounded-full"
          style={{ backgroundColor: "var(--secondary)" }}
        />
      )}
      {title && (
        <header className="mb-3 flex items-center gap-2">
          {icon && <span style={{ color: "var(--primary)" }}>{icon}</span>}
          <h3
            className="font-serif text-[11px] font-bold uppercase underline decoration-[1.2px] tracking-[0.15em]"
            style={{ color: "var(--primary)" }}
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
          className={`mt-0.5 truncate text-[12px] ${
            strong ? "font-semibold text-foreground" : "font-semibold text-foreground/90"
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
      className="border-y border-border py-3"
      style={{
        pageBreakInside: "avoid",
        breakInside: "avoid",
      }}
    >
      <header className="mb-1 flex items-center gap-2">
        {icon && <span style={{ color: "var(--primary)" }}>{icon}</span>}
        <h3
          className="font-serif text-[12px] font-extrabold uppercase underline decoration-[1.5px] underline-offset-2 tracking-[0.16em]"
          style={{ color: "var(--primary)" }}
        >
          <span className="mr-3.5">{index}</span>
          {title}
        </h3>
      </header>
      {points && (
        <ul className="mt-1.5 grid grid-cols-2 gap-x-6 gap-y-0.5">
          {points.map((p) => (
            <li key={p} className="flex gap-2 text-[12.5px] leading-[1.45] text-slate-900">
              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
      {chips && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-sm border border-hairline bg-transparent px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-800"
            >
              {c}
            </span>
          ))}
        </div>
      )}
      {note && (
        <p className="mt-5 border-t border-hairline pt-2 text-[12px] leading-[1.65] text-slate-700">
          {note}
        </p>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */

export function Footer() {
  return (
    <footer className="mt-auto overflow-hidden rounded-lg border border-slate-200/90 bg-slate-50/90">
      {/* Colored divider */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, var(--primary), var(--secondary))`,
        }}
      />
      <div className="px-3 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Globe className="h-3 w-3 text-slate-700" />
              <span
                className="text-[10px] font-extrabold whitespace-nowrap"
                style={{ color: "var(--primary)" }}
              >
                {contact.website}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-slate-700" />
              <span
                className="text-[10px] font-extrabold whitespace-nowrap"
                style={{ color: "var(--primary)" }}
              >
                {contact.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="h-3 w-3 text-slate-700" />
              <span
                className="text-[10px] font-extrabold whitespace-nowrap"
                style={{ color: "var(--primary)" }}
              >
                {contact.phone2}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-slate-700" />
              <span
                className="text-[10px] font-extrabold whitespace-nowrap"
                style={{ color: "var(--primary)" }}
              >
                {contact.email}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-1.5 border-t border-slate-200/80 pt-1.5 text-center text-[9.5px] text-slate-600">
          {doc.copyright} · {doc.generatedNote}
        </p>
      </div>
    </footer>
  );
}
