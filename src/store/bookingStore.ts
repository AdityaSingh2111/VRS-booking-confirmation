import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { company } from "@/config/company";
import { BookingData } from "@/types/booking";
import { BookingFormValues } from "@/hooks/useBookingForm";

interface BookingStore {
  // Data used by the PDF
  booking: BookingData | null;

  // Data used by the booking form
  formData: BookingFormValues | null;

  setBooking: (booking: BookingData) => void;

  setFormData: (data: BookingFormValues) => void;

  clearBooking: () => void;

  clearFormData: () => void;

  clearAll: () => void;
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      booking: null,

      formData: null,

      setBooking: (booking) =>
        set({
          booking,
        }),

      setFormData: (formData) =>
        set({
          formData,
        }),

      clearBooking: () =>
        set({
          booking: null,
        }),

      clearFormData: () =>
        set({
          formData: null,
        }),

      clearAll: () =>
        set({
          booking: null,
          formData: null,
        }),
    }),
    {
      name: `${company.nameSlug}-booking-store`,

      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
