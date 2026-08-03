/**
 * Service configuration — service types, payment methods, statuses, titles.
 *
 * Editing this file updates all form dropdowns and default values.
 * No component changes are needed when adding or removing options.
 */

// ─── Customer Titles ─────────────────────────────────────────────
export const customerTitles = ["Mr.", "Mrs.", "Ms.", "Dr.", "M/s."] as const;

// ─── Service Types ───────────────────────────────────────────────
export const serviceTypes = [
  "Household Shifting",
  "Office Relocation",
  "Car Transportation",
  "Bike Transportation",
  "Warehousing & Storage",
  "Loading & Unloading",
] as const;

// ─── Payment Methods ─────────────────────────────────────────────
export const paymentMethods = ["UPI", "Cash", "Bank Transfer", "Cheque", "Card"] as const;

// ─── Booking Statuses ────────────────────────────────────────────
export const bookingStatuses = ["Confirmed", "Pending Payment", "On Hold"] as const;

// ─── Form Defaults ───────────────────────────────────────────────
/** Default values for configurable form fields. */
export const formDefaults = {
  title: "Mr.",
  serviceType: "Household Shifting",
  paymentMethod: "UPI",
  bookingStatus: "Confirmed",
} as const;

// ─── Loading Screen Messages ─────────────────────────────────────
/** Displayed sequentially during the loading transition. */
export const loadingMessages = [
  "Validating customer details...",
  "Preparing booking confirmation...",
  "Calculating payment summary...",
  "Generating PDF preview...",
  "Almost ready...",
] as const;
