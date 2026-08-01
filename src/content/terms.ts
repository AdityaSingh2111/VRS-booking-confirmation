/**
 * Terms & Conditions content.
 *
 * The UI maps over these arrays — editing terms never
 * requires touching a component file.
 */

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
    "Booking is confirmed only after receipt of the advance payment.",
    "Advance payment will be adjusted against the final invoice.",
    "Balance payment shall be made before unloading unless otherwise agreed.",
    "Additional services requested after booking will attract additional charges.",
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
    "Estimated delivery timelines are subject to operational conditions.",
    "Customer cooperation is required during pickup and delivery.",
  ],
};

export const cancellationPolicy: TermsSection = {
  index: "03",
  title: "Cancellation Policy",
  icon: "CalendarX2",
  points: [
    "Cancellation more than 48 hours before shifting: advance refunded in full.",
    "Cancellation within 24–48 hours: 50% of the advance is retained.",
    "Cancellation within 24 hours: the advance is non-refundable.",
    "Cancellation after vehicle dispatch: dispatch and handling charges apply.",
    "Refund timeline: refunds are processed within 7–10 working days.",
    "Rescheduling: one free rescheduling is permitted, subject to availability.",
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
  ],
  note: "The above items must not be handed over for packing or transportation under any circumstances. The company shall bear no liability for any such undeclared items.",
};

export const jurisdiction: TermsSection = {
  index: "05",
  title: "Jurisdiction",
  icon: "Scale",
  note: "All disputes, claims or legal proceedings arising out of this booking or the services provided by VRS Cargo Packers and Movers shall be subject to the exclusive jurisdiction of the competent courts at Chennai, Tamil Nadu, India.",
};

/** All sections in display order */
export const allTermsSections: TermsSection[] = [
  paymentTerms,
  serviceTerms,
  cancellationPolicy,
  restrictedItems,
  jurisdiction,
];
