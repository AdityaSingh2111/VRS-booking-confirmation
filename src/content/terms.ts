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
    "Estimated delivery timelines are subject to operational conditions.",
    "Customer cooperation is required during pickup and delivery.",
    "Rescheduling: Any changes to the booking schedule must be communicated in advance.",
  ],
};

export const cancellationPolicy: TermsSection = {
  index: "03",
  title: "Cancellation Policy",
  icon: "CalendarX2",
  points: [
    "Customer-initiated cancellations are non-refundable.",
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
