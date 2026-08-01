import { useEffect, useState } from "react";
import { defaultBookingValues } from "@/hooks/useBookingForm";
import { useNavigate } from "@tanstack/react-router";
import { generateBookingId, generateReferenceNumber } from "@/utils/bookingId";
import { CustomerSection } from "./CustomerSection";
import { BookingSection } from "./BookingSection";
import { AddressSection } from "./AddressSection";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { PaymentSection } from "./PaymentSection";
import { FormActions } from "./FormActions";

import { BookingFormValues, useBookingForm } from "@/hooks/useBookingForm";
import { useBookingStore } from "@/store/bookingStore";
import { BookingData } from "@/types/booking";

export function BookingForm() {
  const formData = useBookingStore((state) => state.formData);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useBookingForm(formData);
  useEffect(() => {
    if (formData) {
      reset(formData);
    } else {
      reset(defaultBookingValues);
    }
  }, [formData, reset]);

  const navigate = useNavigate();
  const clearAll = useBookingStore((state) => state.clearAll);

  const setBooking = useBookingStore((state) => state.setBooking);
  const setFormData = useBookingStore((state) => state.setFormData);

  //   const onSubmit = (data: any) => {
  //     setBooking(data);

  //     navigate({
  //       to: "/preview",
  //     });
  //   };

  const onSubmit = async (data: BookingFormValues) => {

    const booking: BookingData = {
      bookingId: generateBookingId(),

      referenceNumber: generateReferenceNumber(),

      bookingDate: data.bookingDate,

      generatedOn: new Date().toLocaleDateString("en-IN"),

      customer: {
        name: data.customerName,
        phone: data.phone,
        email: data.email ?? "",
      },

      pickup: {
        address: data.pickupAddress,
      },

      delivery: {
        address: data.deliveryAddress,
      },

      service: {
        type: data.serviceType,
        shiftingDate: data.shiftingDate,
      },

      payment: {
        total: data.totalAmount,
        advance: data.advancePaid,
        balance: data.totalAmount - data.advancePaid,
        method: data.paymentMethod,
        status: data.bookingStatus,
      },
    };

    setFormData(data);

    setBooking(booking);

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);

    navigate({
      to: "/preview",
    });
  };
  if (loading) {
  return (
    <LoadingScreen />
  );
}
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">Booking Generator</h1>

        <p className="mt-2 text-sm text-slate-500">
          Fill in the customer details below to generate a Booking Confirmation document.
        </p>
      </div>
      <CustomerSection register={register} errors={errors} />
      <BookingSection register={register} errors={errors} />
      <AddressSection register={register} errors={errors} />
      <PaymentSection register={register} errors={errors} watch={watch} />
      <FormActions
        onReset={() => {
          const confirmed = window.confirm(
            "Are you sure you want to reset the booking form?\n\nAll entered data will be lost.",
          );

          if (!confirmed) return;

          clearAll();
          reset(defaultBookingValues);
        }}
      />{" "}
    </form>
  );
}
