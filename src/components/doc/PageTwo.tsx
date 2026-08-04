/**
 * Page Two — Terms & Conditions
 *
 * All terms content is imported from `@/content/terms`.
 * The TermsCard component is imported from primitives.
 * Editing terms never requires touching this file.
 */
import React from "react";
import { DocHeader, Footer, TermsCard, Watermark } from "./primitives";
import { allTermsSections } from "@/content/terms";
import { iconMap } from "@/lib/icon-map";

export function PageTwo() {
  return (
    <article className="sheet mx-auto flex flex-col rounded-sm p-[12mm]">
      <Watermark />
      <div className="relative z-[1] flex min-h-full flex-1 flex-col">
        <DocHeader />

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
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[8.5px] font-bold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              Legal Agreement
            </span>
          </div>
          <div
            className="mt-2 h-[2px] w-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--primary), var(--secondary))",
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
        <Footer />
      </div>
    </article>
  );
}
