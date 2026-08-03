/**
 * Shared icon map — resolves icon name strings from config to Lucide components.
 *
 * Used by document pages to render trust badges and terms section icons
 * without hardcoding icon imports in config files.
 */

import type React from "react";
import {
  Award,
  BadgeDollarSign,
  CalendarX2,
  CreditCard,
  Headphones,
  Map,
  PackageCheck,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

/** Map of icon name strings to Lucide components. Add entries here when new icons are referenced in config. */
export const iconMap: Record<string, IconComponent> = {
  // Trust badges (Page 1)
  BadgeDollarSign,
  Award,
  Map,
  PackageCheck,
  Headphones,
  ShieldCheck,
  // Terms sections (Page 2)
  CreditCard,
  CalendarX2,
  ShieldAlert,
  Scale,
};
