import { BookingData } from "@/types/booking";

import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";

interface BookingDocumentProps {
  booking: BookingData;
}

export function BookingDocument({ booking }: BookingDocumentProps) {
  return (
    <>
      <PageOne booking={booking} />
      <PageTwo />
    </>
  );
}
