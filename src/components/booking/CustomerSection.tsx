import { User, Phone, Mail } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

import { FormInput } from "@/components/form/FormInput";
import { FormSection } from "@/components/form/FormSection";
import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormSelect } from "@/components/form/FormSelect";
import { customerTitles } from "@/config/services";

interface CustomerSectionProps {
  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
}

export function CustomerSection({ register, errors }: CustomerSectionProps) {
  return (
    <FormSection
      title="Customer Information"
      description="Enter the customer's contact details."
      icon={User}
      iconBg="bg-primary/10"
      iconColor="text-primary"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[120px_1fr]">
        <FormSelect label="Title" register={register("title")} options={customerTitles} />
        <FormInput
          label="Customer Name"
          placeholder="Enter customer name"
          icon={User}
          register={register("customerName")}
          error={errors.customerName?.message}
        />

        <div className="md:col-span-2">
          <FormInput
            label="Phone Number"
            placeholder="9876543210"
            type="tel"
            icon={Phone}
            register={register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <div className="md:col-span-2">
          <FormInput
            label="Email Address"
            placeholder="customer@email.com"
            type="email"
            icon={Mail}
            register={register("email")}
            error={errors.email?.message}
          />
        </div>
      </div>
    </FormSection>
  );
}
