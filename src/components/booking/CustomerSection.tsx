import { MessageCircle, User, Phone, Mail } from "lucide-react";
import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form";

import { FormInput } from "@/components/form/FormInput";
import { FormSection } from "@/components/form/FormSection";
import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormSelect } from "@/components/form/FormSelect";
import { customerTitles } from "@/config/services";

interface CustomerSectionProps {
  register: UseFormRegister<BookingFormValues>;
  watch: UseFormWatch<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
}

export function CustomerSection({ register, watch, errors }: CustomerSectionProps) {
  const whatsappSameAsPhone = watch("whatsappSameAsPhone");

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
          autoComplete="name"
          placeholder="Enter customer name"
          icon={User}
          register={register("customerName")}
          error={errors.customerName?.message}
        />

        <div className="md:col-span-2">
          <FormInput
            label="Phone Number"
            autoComplete="tel"
            placeholder="9876543210"
            type="tel"
            icon={Phone}
            register={register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <div className="md:col-span-2 space-y-4">
          <label htmlFor="whatsappSameAsPhone" className="flex cursor-pointer items-center gap-3">
            <input
              id="whatsappSameAsPhone"
              type="checkbox"
              {...register("whatsappSameAsPhone")}
              className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-primary"
            />
            <span className="text-sm font-medium text-slate-700">
              WhatsApp number is same as Phone Number
            </span>
          </label>

          {!whatsappSameAsPhone && (
            <FormInput
              label="WhatsApp Number"
              autoComplete="tel"
              placeholder="9876543210"
              type="tel"
              icon={MessageCircle}
              register={register("whatsapp")}
              error={errors.whatsapp?.message}
            />
          )}
        </div>

        <div className="md:col-span-2">
          <FormInput
            label="Email Address"
            autoComplete="email"
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
