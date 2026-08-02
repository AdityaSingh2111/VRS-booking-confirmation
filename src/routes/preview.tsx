import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";

import { BookingDocument } from "@/components/doc/BookingDocument";
import { useBookingStore } from "@/store/bookingStore";

export const Route = createFileRoute("/preview")({
  component: PreviewPage,
});

function PreviewPage() {
  const navigate = useNavigate();

  const booking = useBookingStore((state) => state.booking);

  if (!booking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-xl border bg-white p-8 shadow-lg">
          <h2 className="text-xl font-semibold">No Booking Found</h2>

          <p className="mt-2 text-slate-700">Please generate a booking first.</p>

          <button
            onClick={() => navigate({ to: "/" })}
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Back to Booking Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Back Button */}
          <button
            onClick={() => navigate({ to: "/" })}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 md:px-5 md:py-2.5"
          >
            <ArrowLeft className="h-4 w-4" />

            <span className="hidden sm:inline">Back to Edit</span>

            <span className="sm:hidden">Back</span>
          </button>

          {/* Desktop Title Only */}
          <h1 className="absolute left-1/2 hidden -translate-x-1/2 text-xl font-bold tracking-wide text-slate-800 md:block">
            Booking Preview
          </h1>

          {/* Print Button */}
          <button
            onClick={() => {
              const suffix =
                booking.customer.title === "Mr."
                  ? "Sir"
                  : booking.customer.title === "Mrs." || booking.customer.title === "Ms."
                    ? "Ma'am"
                    : "";

              const fileName = suffix
                ? `${booking.customer.title} {booking.customer.name} ${suffix} Booking Confirmation`
                : `${booking.customer.title} {booking.customer.name} Booking Confirmation`;

              const previousTitle = document.title;
              document.title = fileName;

              window.print();

              setTimeout(() => {
                document.title = previousTitle;
              }, 1000);
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0DA0FD] px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:px-5 md:py-2.5"
          >
            <Printer className="h-8 w-8" />

            <span className="hidden sm:inline">Print / Save as PDF</span>

            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </div>

      {/* Document */}
      <div className="document-container mx-auto flex max-w-6xl flex-col items-center gap-8 py-10">
        {" "}
        <BookingDocument booking={booking} />
      </div>
    </main>
  );
}
