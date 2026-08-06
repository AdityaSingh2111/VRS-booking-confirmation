/**
 * Phone validation configuration.
 *
 * Adjust these values when white-labelling for a different country
 * without modifying form components or validation hooks.
 */
export const phoneValidation = {
  /** ISO 3166-1 alpha-2 country code (informational). */
  country: "IN",
  minLength: 10,
  maxLength: 10,
  invalidMessage: "Please enter a valid 10-digit phone number",
  whatsappInvalidMessage: "Please enter a valid 10-digit WhatsApp number",
} as const;
