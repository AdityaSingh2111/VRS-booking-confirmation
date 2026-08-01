import {
  CalendarDays,
  Truck,
  Hash,
  ClipboardList,
} from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormInput } from "@/components/form/FormInput";
import { FormSelect } from "@/components/form/FormSelect";
import { FormSection } from "@/components/form/FormSection";

interface BookingSectionProps {
  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
}

export function BookingSection({
  register,
  errors,
}: BookingSectionProps) {
  return (
    <FormSection
      title="Booking Information"
      description="Enter booking and service details."
      icon={ClipboardList}
      iconBg="bg-orange-100"
      iconColor="text-orange-600 font-extrabold"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <FormInput
          label="Booking ID"
          placeholder="Auto Generated"
          icon={Hash}
          readOnly
        />

        <FormInput
          label="Booking Date"
          type="date"
          icon={CalendarDays}
          register={register("bookingDate")}
          error={errors.bookingDate?.message}
        />

        <FormInput
          label="Shifting Date"
          type="date"
          icon={CalendarDays}
          register={register("shiftingDate")}
          error={errors.shiftingDate?.message}
        />

        <FormSelect
          label="Service Type"
          icon={Truck}
          register={register("serviceType")}
          error={errors.serviceType?.message}
          options={[
            "Household Shifting",
            "Office Relocation",
            "Car Transportation",
            "Bike Transportation",
            "Warehousing & Storage",
            "Loading & Unloading",
          ]}
        />

      </div>
    </FormSection>
  );
}