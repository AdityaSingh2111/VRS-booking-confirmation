import { FieldErrors, UseFormRegister } from "react-hook-form";

import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormSection } from "@/components/form/FormSection";
import { AddressCard } from "./AddressCard";

import { Route } from "lucide-react";

interface AddressSectionProps {
  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
}

export function AddressSection({
  register,
  errors,
}: AddressSectionProps) {
  return (
    <FormSection
      title="Pickup & Delivery"
      description="Enter the complete pickup and destination details."
      icon={Route}
      iconBg="bg-violet-100"
      iconColor="text-violet-600"
    >
      <div className="grid gap-6 lg:grid-cols-2">

        <AddressCard
          title="Pickup Address"
          accent="blue"
          prefix="pickup"
          register={register}
          errors={errors}
        />

        <AddressCard
          title="Delivery Address"
          accent="orange"
          prefix="delivery"
          register={register}
          errors={errors}
        />

      </div>
    </FormSection>
  );
}