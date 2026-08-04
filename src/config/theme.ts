/**
 * Centralized theme token configuration.
 * Single source of truth for all branding and semantic colors throughout the application.
 */

export const theme = {
  colors: {
    // Semantic Theme Tokens
    primary: "#0539bc",
    secondary: "#ef4b05",
    tertiary: "#08cc50",
    background: "#ffffff",
    surface: "#f8fafc",
    border: "#e2e8f0",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#94a3b8",

    // Semantic Status Colors
    status: {
      success: "#08cc50",
      warning: "#f59e0b",
      danger: "#ef4444",
    },
  },
} as const;

export type Theme = typeof theme;
