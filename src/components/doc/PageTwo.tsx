/**
 * Page Two — Terms & Conditions
 *
 * All terms content is imported from `@/content/terms`.
 * The TermsCard component is imported from primitives.
 * Editing terms never requires touching this file.
 */
import React from "react";
import {
  CreditCard,
  PackageCheck,
  CalendarX2,
  ShieldAlert,
  Scale,
} from "lucide-react";
import { DocHeader, Footer, TermsCard, Watermark } from "./primitives";
import { allTermsSections } from "@/content/terms";
import { BookingData } from "@/types/booking";
/** Map icon name strings → Lucide components */
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>> = {
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
    <article className="sheet mx-auto flex flex-col rounded-sm p-[15mm]">
      <Watermark />
      <div className="relative z-[1] flex min-h-full flex-1 flex-col">
        <DocHeader compact />

        <div className="pt-5">
          <h2 className="font-serif text-[24px] font-medium leading-tight tracking-tight">
            Terms &amp; Conditions
          </h2>
          <p className="mt-1.5 text-[10.5px] uppercase tracking-widest text-muted-foreground">
            Please review the following terms. They form part of your confirmed
            booking.
          </p>
          <div
            className="mt-4 h-[2px] w-full"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-blue), var(--brand-orange))",
            }}
          />
        </div>

        <div className="mt-3.5 flex flex-col gap-2.5">
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
