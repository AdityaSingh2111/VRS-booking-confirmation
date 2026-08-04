import { bookingConfig } from "@/config/company";

let bookingCounter = 1;

function pad(value: number, length: number) {
  return value.toString().padStart(length, "0");
}

export function generateBookingId() {
  const now = new Date();

  const year = now.getFullYear().toString().slice(-2);
  const month = pad(now.getMonth() + 1, 2);
  const day = pad(now.getDate(), 2);

  const serial = pad(bookingCounter++, 3);

  return `${bookingConfig.idPrefix}${year}${month}${day}${serial}`;
}

export function generateReferenceNumber() {
  return generateBookingId().replace(bookingConfig.idPrefix, bookingConfig.referencePrefix);
}
