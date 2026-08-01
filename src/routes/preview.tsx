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

          <p className="mt-2 text-slate-500">Please generate a booking first.</p>

          <button
            onClick={() => navigate({ to: "/" })}
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Back to Booking Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-8">
      {/* Toolbar */}
      <div className="no-print mx-auto mb-6 flex w-[210mm] max-w-full items-center justify-between px-2">
        <h2 className="text-xl font-bold">Booking Preview</h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigate({ to: "/" })}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Edit
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <BookingDocument booking={booking} />
      </div>
    </main>
  );
}
