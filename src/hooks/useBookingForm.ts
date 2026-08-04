import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formDefaults } from "@/config/services";

const phoneSchema = z
  .string()
  .min(10, "Please enter a valid 10-digit phone number")
  .max(10, "Please enter a valid 10-digit phone number");

const bookingSchema = z
  .object({
    title: z.string(),
    customerName: z.string().min(2, "Please enter the customer's full name"),

    phone: phoneSchema,

    whatsappSameAsPhone: z.boolean(),

    whatsapp: z.string().optional(),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .optional()
      .or(z.literal("")),

    bookingDate: z.string().min(1, "Please select a booking date"),

    shiftingDate: z.string().min(1, "Please select a shifting date"),

    serviceType: z.string(),

    pickupAddress: z.string().min(5, "Please enter the complete pickup address"),

    deliveryAddress: z.string().min(5, "Please enter the complete delivery address"),

    totalAmount: z.coerce.number(),

    advancePaid: z.coerce.number(),

    paymentMethod: z.string(),

    bookingStatus: z.string(),

    executiveName: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.whatsappSameAsPhone) {
        return (data.whatsapp?.length ?? 0) >= 10 && (data.whatsapp?.length ?? 0) <= 10;
      }
      return true;
    },
    {
      path: ["whatsapp"],
      message: "Please enter a valid 10-digit WhatsApp number",
    },
  )
  .refine((data) => data.totalAmount > 0, {
    path: ["totalAmount"],
    message: "Please enter a total amount greater than zero",
  })
  .refine((data) => data.advancePaid >= 0, {
    path: ["advancePaid"],
    message: "Advance payment cannot be less than zero",
  })
  .refine((data) => data.advancePaid <= data.totalAmount, {
    path: ["advancePaid"],
    message: "Advance payment cannot be more than the total amount",
  });

export type BookingFormValues = z.infer<typeof bookingSchema>;

export const defaultBookingValues: BookingFormValues = {
  title: formDefaults.title,
  customerName: "",
  phone: "",
  whatsappSameAsPhone: true,
  whatsapp: "",
  email: "",

  bookingDate: new Date().toISOString().slice(0, 10),

  shiftingDate: "",

  serviceType: formDefaults.serviceType,

  pickupAddress: "",

  deliveryAddress: "",

  totalAmount: 0,
  advancePaid: 0,

  paymentMethod: formDefaults.paymentMethod,

  bookingStatus: formDefaults.bookingStatus,

  executiveName: "",
};

export function useBookingForm(values?: BookingFormValues | null) {
  return useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),

    defaultValues: values ?? defaultBookingValues,
  });
}
