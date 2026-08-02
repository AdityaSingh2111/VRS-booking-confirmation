/**
 * Page Two — Terms & Conditions
 *
 * All terms content is imported from `@/content/terms`.
 * The TermsCard component is imported from primitives.
 * Editing terms never requires touching this file.
 */
import React from "react";
import { CreditCard, PackageCheck, CalendarX2, ShieldAlert, Scale } from "lucide-react";
import { DocHeader, Footer, TermsCard, Watermark } from "./primitives";
import { allTermsSections } from "@/content/terms";
import { BookingData } from "@/types/booking";
/** Map icon name strings → Lucide components */
const iconMap: Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>
> = {
  CreditCard,
  PackageCheck,
  CalendarX2,
  ShieldAlert,
  Scale,
};
interface PageTwoProps {
  booking: BookingData;
}

export function PageTwo({ booking }: PageTwoProps) {
  void booking;
  return (
    <article className="sheet mx-auto flex flex-col rounded-sm p-[12mm]">
      <Watermark />
      <div className="relative z-[1] flex min-h-full flex-1 flex-col">
        <DocHeader compact />

        <div className="mt-1.5 rounded-lg border border-slate-200/90 bg-gradient-to-r from-slate-50/90 via-slate-50/60 to-white px-4 py-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mt-0 font-serif text-[22px] font-bold leading-tight tracking-tight text-slate-900">
                Terms & Conditions
              </h2>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                Please review the following terms. They form part of your confirmed booking.
              </p>
            </div>
            <span
              className="rounded-full border border-sky-200/80 bg-sky-50/90 px-3 py-1 text-[8.5px] font-bold uppercase tracking-widest"
              style={{ color: "var(--brand-blue)" }}
            >
              Legal Agreement
            </span>
          </div>
          <div
            className="mt-2 h-[2px] w-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--brand-blue), var(--brand-orange))",
            }}
          />
        </div>

        <div className="mt-2 flex flex-col gap-1">
          {allTermsSections.map((section) => {
            const Icon = iconMap[section.icon];
            return (
              <TermsCard
                key={section.index}
                index={section.index}
                title={section.title}
                icon={Icon ? <Icon className="h-4 w-4" /> : null}
                points={section.points}
                chips={section.chips}
                note={section.note}
              />
            );
          })}
        </div>

        <div className="flex-1" />
        <Footer page={2} />
      </div>
    </article>
  );
}
