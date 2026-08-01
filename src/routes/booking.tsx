import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/booking/BookingForm";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
});

function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <BookingForm />
      </div>
    </main>
  );
}