import { useEffect } from "react";
import { defaultBookingValues } from "@/hooks/useBookingForm";
import { useNavigate } from "@tanstack/react-router";
import { generateBookingId, generateReferenceNumber } from "@/utils/bookingId";
import { CustomerSection } from "./CustomerSection";
import { BookingSection } from "./BookingSection";
import { AddressSection } from "./AddressSection";
import { PaymentSection } from "./PaymentSection";
import { FormActions } from "./FormActions";

import { company } from "@/config/company";
import { BookingFormValues, useBookingForm } from "@/hooks/useBookingForm";
import { useBookingStore } from "@/store/bookingStore";
import { BookingData } from "@/types/booking";

export function BookingForm() {
  const formData = useBookingStore((state) => state.formData);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    control,
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

  const onSubmit = (data: BookingFormValues) => {
    const booking: BookingData = {
      bookingId: generateBookingId(),

      referenceNumber: generateReferenceNumber(),

      bookingDate: data.bookingDate,

      generatedOn: new Date().toLocaleDateString("en-IN"),

      customer: {
        title: data.title,
        name: data.customerName,
        phone: data.phone,
        whatsapp: data.whatsappSameAsPhone ? data.phone : (data.whatsapp ?? data.phone),
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

      executiveName: data.executiveName || undefined,
    };

    setFormData(data);

    setBooking(booking);

    navigate({
      to: "/preview",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
        <img
          src={company.logo}
          alt={company.name}
          className="mx-auto mb-4 h-14 w-auto object-contain"
        />
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Booking Generator</h1>

        <p className="mt-2 text-sm text-slate-700">
          Fill in the details below to generate a Booking Confirmation document
        </p>
      </div>
      <CustomerSection register={register} watch={watch} errors={errors} />
      <BookingSection register={register} errors={errors} control={control} />
      <AddressSection register={register} errors={errors} />
      <PaymentSection register={register} errors={errors} watch={watch} />
      <FormActions
        onReset={() => {
          const confirmed = window.confirm(
            "Are you sure you want to reset the booking form?\n\nAll entered information will be cleared.",
          );

          if (!confirmed) return;

          clearAll();
          reset(defaultBookingValues);
        }}
      />
    </form>
  );
}
