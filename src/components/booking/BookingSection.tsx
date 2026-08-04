import { CalendarDays, Truck, Hash, ClipboardList, UserCheck } from "lucide-react";
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";

import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormInput } from "@/components/form/FormInput";
import { FormSelect } from "@/components/form/FormSelect";
import { FormSection } from "@/components/form/FormSection";
import { FormCombobox } from "@/components/form/FormCombobox";
import { bookingExecutives } from "@/config/executives";
import { serviceTypes } from "@/config/services";

interface BookingSectionProps {
  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
  control: Control<BookingFormValues>;
}

export function BookingSection({ register, errors, control }: BookingSectionProps) {
  const executiveOptions = bookingExecutives.map((e) => e.name);

  return (
    <FormSection
      title="Booking Information"
      description="Enter booking and service details."
      icon={ClipboardList}
      iconBg="bg-secondary/10"
      iconColor="text-secondary"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormInput label="Booking ID" placeholder="Auto Generated" icon={Hash} readOnly />

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
          options={serviceTypes}
        />

        <Controller
          name="executiveName"
          control={control}
          render={({ field }) => (
            <FormCombobox
              label="Booking Executive"
              icon={UserCheck}
              options={executiveOptions}
              value={field.value || ""}
              onChange={field.onChange}
              placeholder="Search or select executive..."
              {...(errors.executiveName?.message ? { error: errors.executiveName.message } : {})}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
