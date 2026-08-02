/**
 * Centralized company configuration.
 * Every document component reads from this file.
 * Change a value here and it updates everywhere.
 */

// ─── Brand Colors ────────────────────────────────────────────────
export const brand = {
  blue: "#0DA0FD",
  orange: "#FA8835",
  green: "#22C55E",
} as const;

// ─── Company Identity ────────────────────────────────────────────
export const company = {
  name: "VRS Cargo",
  nameFull: "VRS Cargo Packers and Movers",
  legalName: "VRS Cargo Packers and Movers Pvt. Ltd.",
  tagline: "Every Move, Managed Right",
  gst: "33AAKCV0507E1ZQ",
  iso: "ISO 9001:2015",
} as const;

// ─── Contact Information ─────────────────────────────────────────
export const contact = {
  phone: "+91 93440 07343",
  tollFree: "04446279150",
  email: "info@vrscargopackers.com",
  website: "vrscargopackers.com",
  websiteUrl: "https://www.vrscargopackers.com",
} as const;

// ─── Document Metadata ──────────────────────────────────────────
export const doc = {
  title: `VRS CargoBooking Confirmation | ${company.nameFull}`,
  description:
    "Premium booking confirmation document for VRS Cargo Packers and Movers.",
  totalPages: 2,
  copyright: `© ${new Date().getFullYear()} ${company.legalName}. All rights reserved.`,
  generatedNote: "This is a computer-generated booking confirmation.",
} as const;

// ─── Trust Badges ────────────────────────────────────────────────
export interface TrustBadge {
  /** Lucide icon name — resolved in the component */
  icon: string;
  label: string;
}

export const trustBadges: TrustBadge[] = [
  { icon: "BadgeDollarSign", label: "GST Registered" },
  { icon: "Award", label: "ISO Certified" },
  { icon: "Map", label: "Pan India Service" },
  { icon: "PackageCheck", label: "Professional Packing" },
  { icon: "Headphones", label: "Verified Support" },
  { icon: "ShieldCheck", label: "Safe Transportation" },
];

// ─── What Happens Next ──────────────────────────────────────────
export const nextSteps: string[] = [
  "Our relocation coordinator will contact you before your scheduled shifting date.",
  "Please keep your mobile phone reachable.",
  "Keep a valid Government ID ready during pickup.",
  "Remaining payment is payable before unloading unless agreed otherwise.",
  "Contact Customer Support for any assistance.",
  "Track your shipment status via our website or app.",
];

// ─── Hero Chips ──────────────────────────────────────────────────
export const heroChips: string[] = [
  "Safe Packing",
  "Timely Relocation",
  "Professional Support",
];
