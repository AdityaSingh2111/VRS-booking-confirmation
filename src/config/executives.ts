/**
 * Booking Executive constants.
 * Add or remove executives here; no component changes needed.
 */

export interface BookingExecutive {
  name: string;
  employeeId: string;
  mobile: string;
}

export const bookingExecutives: BookingExecutive[] = [
  { name: "Aditya Singh", employeeId: "VRS-EMP-007", mobile: "+91 86088 89944" },
  { name: "Annalakshmi", employeeId: "VRS-EMP-009", mobile: "+91 93440 07343" },
  { name: "Jayshree", employeeId: "VRS-EMP-012", mobile: "+91 89259 36692" },
  { name: "Boopal", employeeId: "VRS-EMP-006", mobile: "+91 93449 07343" },
  { name: "Kothandaraman", employeeId: "VRS-EMP-016", mobile: "+91 74488 99918" },
];

/** Look up an executive by name (used in PDF rendering). */
export function findExecutive(name: string): BookingExecutive | undefined {
  return bookingExecutives.find((e) => e.name === name);
}
