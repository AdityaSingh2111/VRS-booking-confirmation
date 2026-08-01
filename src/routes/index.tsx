import { createFileRoute } from "@tanstack/react-router";
import { doc } from "@/config/company";
import { BookingForm } from "@/components/booking/BookingForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: doc.title },
      {
        name: "description",
        content: doc.description,
      },
      { property: "og:title", content: doc.title },
      {
        property: "og:description",
        content: doc.description,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="py-10">
      <div className="no-print mx-auto mb-6 flex w-[210mm] max-w-full items-center justify-between px-4"></div>

      <div className="mx-auto max-w-6xl px-4">
        <BookingForm />
      </div>
    </main>
  );
}
