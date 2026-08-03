import { createFileRoute } from "@tanstack/react-router";
import { doc } from "@/config/company";
import { seo, ogImageUrl } from "@/config/seo";
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
        content: ogImageUrl,
      },

      {
        property: "og:url",
        content: seo.deployUrl,
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:site_name",
        content: seo.siteName,
      },

      {
        property: "twitter:card",
        content: seo.twitterCard,
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
        content: ogImageUrl,
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
