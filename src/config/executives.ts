/**
 * Booking Executive constants — 30 executives.
 * Add or remove executives here; no component changes needed.
 */

export interface BookingExecutive {
  name: string;
  employeeId: string;
  mobile: string;
}

export const bookingExecutives: BookingExecutive[] = [
  { name: "Aditya Singh", employeeId: "VRS-EMP-007", mobile: "+91 86088 89944" },
  { name: "Arun Kumar", employeeId: "VRS-EMP-001", mobile: "+91 98400 11001" },
  { name: "Divya Raj", employeeId: "VRS-EMP-002", mobile: "+91 98400 11002" },
  { name: "Karthik M", employeeId: "VRS-EMP-003", mobile: "+91 98400 11003" },
  { name: "Priya Sharma", employeeId: "VRS-EMP-004", mobile: "+91 98400 11004" },
  { name: "Suresh B", employeeId: "VRS-EMP-005", mobile: "+91 98400 11005" },
  { name: "Lakshmi Devi", employeeId: "VRS-EMP-006", mobile: "+91 98400 11006" },
  { name: "Rajesh P", employeeId: "VRS-EMP-037", mobile: "+91 98400 11007" },
  { name: "Meena S", employeeId: "VRS-EMP-008", mobile: "+91 98400 11008" },
  { name: "Venkat Raman", employeeId: "VRS-EMP-009", mobile: "+91 98400 11009" },
  { name: "Anitha K", employeeId: "VRS-EMP-010", mobile: "+91 98400 11010" },
  { name: "Praveen G", employeeId: "VRS-EMP-011", mobile: "+91 98400 11011" },
  { name: "Sathya N", employeeId: "VRS-EMP-012", mobile: "+91 98400 11012" },
  { name: "Deepa R", employeeId: "VRS-EMP-013", mobile: "+91 98400 11013" },
  { name: "Muthukumar A", employeeId: "VRS-EMP-014", mobile: "+91 98400 11014" },
  { name: "Kavitha T", employeeId: "VRS-EMP-015", mobile: "+91 98400 11015" },
  { name: "Balasubramanian", employeeId: "VRS-EMP-016", mobile: "+91 98400 11016" },
  { name: "Nithya V", employeeId: "VRS-EMP-017", mobile: "+91 98400 11017" },
  { name: "Senthil Kumar", employeeId: "VRS-EMP-018", mobile: "+91 98400 11018" },
  { name: "Rani J", employeeId: "VRS-EMP-019", mobile: "+91 98400 11019" },
  { name: "Ganesh D", employeeId: "VRS-EMP-020", mobile: "+91 98400 11020" },
  { name: "Pooja M", employeeId: "VRS-EMP-021", mobile: "+91 98400 11021" },
  { name: "Vijayakumar S", employeeId: "VRS-EMP-022", mobile: "+91 98400 11022" },
  { name: "Saranya L", employeeId: "VRS-EMP-023", mobile: "+91 98400 11023" },
  { name: "Chandrasekaran", employeeId: "VRS-EMP-024", mobile: "+91 98400 11024" },
  { name: "Usha Rani", employeeId: "VRS-EMP-025", mobile: "+91 98400 11025" },
  { name: "Murugesan K", employeeId: "VRS-EMP-026", mobile: "+91 98400 11026" },
  { name: "Lavanya B", employeeId: "VRS-EMP-027", mobile: "+91 98400 11027" },
  { name: "Selvam T", employeeId: "VRS-EMP-028", mobile: "+91 98400 11028" },
  { name: "Rekha P", employeeId: "VRS-EMP-029", mobile: "+91 98400 11029" },
  { name: "Arumugam V", employeeId: "VRS-EMP-030", mobile: "+91 98400 11030" },
];

/** Look up an executive by name (used in PDF rendering). */
export function findExecutive(name: string): BookingExecutive | undefined {
  return bookingExecutives.find((e) => e.name === name);
}
