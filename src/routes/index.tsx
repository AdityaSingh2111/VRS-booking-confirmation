import { createFileRoute } from "@tanstack/react-router";
import { doc } from "@/config/company";
import { BookingForm } from "@/components/booking/BookingForm";

export const Route = createFileRoute("/")({
  head: () => ({
    title: doc.title,

    meta: [
      {
        name: "description",
        content: doc.description,
      },

      {
        property: "og:title",
        content: doc.title,
      },

      {
        property: "og:description",
        content: doc.description,
      },

      {
        property: "og:image",
        content: "https://vrsbooking.vercel.app/og-image.png",
      },

      {
        property: "og:url",
        content: "https://vrsbooking.vercel.app",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:site_name",
        content: "VRS Cargo",
      },

      {
        property: "twitter:card",
        content: "summary_large_image",
      },

      {
        property: "twitter:title",
        content: doc.title,
      },

      {
        property: "twitter:description",
        content: doc.description,
      },

      {
        property: "twitter:image",
        content: "https://vrsbooking.vercel.app/og-image.png",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <BookingForm />
      </div>
    </main>
  );
}
