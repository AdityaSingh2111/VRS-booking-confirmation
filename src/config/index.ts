/**
 * Configuration barrel — re-exports all config modules.
 *
 * Prefer targeted imports (e.g., `from "@/config/company"`) in components
 * to keep dependency graphs clear. Use this barrel for convenience in
 * files that need multiple config modules.
 */

export * from "./company";
export * from "./executives";
export * from "./phone";
export * from "./services";
export * from "./seo";
