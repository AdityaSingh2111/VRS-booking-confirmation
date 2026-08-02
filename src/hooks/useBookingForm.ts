import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bookingSchema = z
  .object({
    customerName: z.string().min(2, "Customer name is required"),

    phone: z.string().min(10).max(10),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .optional()
      .or(z.literal("")),

    bookingDate: z.string(),

    shiftingDate: z.string(),

    serviceType: z.string(),

    pickupAddress: z.string().min(5),

    deliveryAddress: z.string().min(5),

    totalAmount: z.coerce.number(),

    advancePaid: z.coerce.number(),

    paymentMethod: z.string(),

    bookingStatus: z.string(),
  })
  .refine((data) => data.totalAmount > 0, {
    path: ["totalAmount"],
    message: "Total amount must be greater than zero.",
  })
  .refine((data) => data.advancePaid >= 0, {
    path: ["advancePaid"],
    message: "Advance amount cannot be negative.",
  })
  .refine((data) => data.advancePaid <= data.totalAmount, {
    path: ["advancePaid"],
    message: "Advance amount cannot exceed total amount.",
  });

export type BookingFormValues = z.infer<typeof bookingSchema>;

export const defaultBookingValues: BookingFormValues = {
  customerName: "",
  phone: "",
  email: "",

  bookingDate: new Date().toISOString().slice(0, 10),

  shiftingDate: "",

  serviceType: "Household Shifting",

  pickupAddress: "",

  deliveryAddress: "",

  totalAmount: 0,
  advancePaid: 0,

  paymentMethod: "UPI",

  bookingStatus: "Confirmed",
};

export function useBookingForm(values?: BookingFormValues | null) {
  return useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),

    defaultValues: values ?? defaultBookingValues,
  });
}
