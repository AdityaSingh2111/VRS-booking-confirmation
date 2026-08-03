/**
 * SEO & Open Graph configuration.
 *
 * Edit this file to update meta tags, OG images, and deploy URLs.
 * All route-level head() functions read from here.
 */

import { company } from "./company";

// ─── SEO Configuration ──────────────────────────────────────────
export const seo = {
  /** Production deploy URL (used for OG absolute URLs). */
  deployUrl: "https://vrsbooking.vercel.app",
  /** Path to the OG image within the public directory. */
  ogImagePath: "/og-image.png",
  /** Site name for og:site_name. */
  siteName: company.name,
  /** Twitter card type. */
  twitterCard: "summary_large_image",
} as const;

/** Fully qualified OG image URL. */
export const ogImageUrl = `${seo.deployUrl}${seo.ogImagePath}`;
