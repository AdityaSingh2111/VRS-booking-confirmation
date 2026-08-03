/**
 * Terms & Conditions content.
 *
 * The UI maps over these arrays — editing terms never
 * requires touching a component file.
 */

import { company } from "@/config/company";

// ─── Types ───────────────────────────────────────────────────────
export interface TermsSection {
  index: string;
  title: string;
  /** Lucide icon name — resolved in the component */
  icon: string;
  points?: string[];
  chips?: string[];
  note?: string;
}

// ─── Content ─────────────────────────────────────────────────────

export const paymentTerms: TermsSection = {
  index: "01",
  title: "Payment Terms",
  icon: "CreditCard",
  points: [
    "Booking will be confirmed only after receipt of the agreed advance payment.",
    "Advance payment will be adjusted against the final invoice.",
    "Balance payment must be made before dispatch of the consignment.",
    "Additional services requested after booking will attract additional charges.",
    "Payment after delivery (COD) is not applicable unless approved by the company in writing.",
    "Taxes shall be applicable as per prevailing Government regulations.",
  ],
};

export const serviceTerms: TermsSection = {
  index: "02",
  title: "Service Terms",
  icon: "PackageCheck",
  points: [
    "Professional packing using quality packing materials.",
    "Safe loading and unloading by trained staff.",
    "Secure transportation throughout transit.",
    "Estimated delivery timelines are subject to operational conditions and unforeseen circumstances.",
    "Customer cooperation is required during and prior to both pickup and delivery.",
    "Rescheduling: Any changes to the booking schedule must be communicated in advance.",
  ],
};

export const cancellationPolicy: TermsSection = {
  index: "03",
  title: "Cancellation Policy",
  icon: "CalendarX2",
  points: [
    "Advance payment is non-refundable in case of customer-initiated cancellations.",
    "If the cancellation is due to the company's fault, a full refund will be provided.",
    "Approved refunds will be processed within 2–3 working days.",
    "If cancelled during pickup or loading, applicable service and operational charges will apply.",
    "No cancellation or refund will be accepted after pickup, loading, or dispatch.",
    "By confirming the booking, the customer agrees to this cancellation policy.",
  ],
};

export const restrictedItems: TermsSection = {
  index: "04",
  title: "Restricted Items",
  icon: "ShieldAlert",
  chips: [
    "Cash",
    "Jewellery",
    "Gold",
    "Silver",
    "Important Documents",
    "Firearms",
    "Explosives",
    "Illegal Goods",
    "Hazardous Chemicals",
    "Flammable Materials",
    "Perishable Goods",
    "narcotics",
    "Government restricted items",
  ],
  note: "Fragile valuables(unless declared in advance) & the above items must not be handed over for packing or transportation under any circumstances. The company shall bear no liability for any such undeclared items.",
};

export const jurisdiction: TermsSection = {
  index: "05",
  title: "Jurisdiction",
  icon: "Scale",
  note: `All disputes, claims or legal proceedings arising out of this booking or the services provided by ${company.nameFull} shall be subject to the exclusive jurisdiction of the competent courts at ${company.jurisdiction}.`,
};

/** All sections in display order */
export const allTermsSections: TermsSection[] = [
  paymentTerms,
  serviceTerms,
  cancellationPolicy,
  restrictedItems,
  jurisdiction,
];
