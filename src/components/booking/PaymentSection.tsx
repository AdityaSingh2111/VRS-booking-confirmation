import { Wallet, IndianRupee, CreditCard, CheckCircle2 } from "lucide-react";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormInput } from "@/components/form/FormInput";
import { FormSelect } from "@/components/form/FormSelect";
import { FormSection } from "@/components/form/FormSection";
import { paymentMethods, bookingStatuses } from "@/config/services";

interface PaymentSectionProps {
  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
  watch: UseFormWatch<BookingFormValues>;
}

export function PaymentSection({ register, errors, watch }: PaymentSectionProps) {
  const total = Number(watch("totalAmount")) || 0;
  const advance = Number(watch("advancePaid")) || 0;

  const balance = total >= advance ? total - advance : 0;
  const advanceExceeded = advance > total;
  return (
    <FormSection
      title="Payment Information"
      description="Enter booking payment details."
      icon={Wallet}
      iconBg="bg-success/10"
      iconColor="text-success"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormInput
          label="Total Amount"
          type="number"
          placeholder="0"
          icon={IndianRupee}
          register={register("totalAmount", {
            valueAsNumber: true,
          })}
          error={errors.totalAmount?.message}
        />

        <FormInput
          label="Advance Received"
          type="number"
          placeholder="0"
          icon={IndianRupee}
          register={register("advancePaid", {
            valueAsNumber: true,
          })}
          error={errors.advancePaid?.message}
        />

        <FormInput
          id="balanceAmount"
          label="Balance Amount"
          type="number"
          icon={IndianRupee}
          readOnly
          value={balance}
        />
        {advanceExceeded && (
          <p id="balanceAmount-error" role="alert" className="text-sm font-semibold text-danger">
            Advance payment cannot be more than the total amount.
          </p>
        )}

        <FormSelect
          label="Payment Method"
          icon={CreditCard}
          register={register("paymentMethod")}
          error={errors.paymentMethod?.message}
          options={paymentMethods}
        />

        <div className="md:col-span-2">
          <FormSelect
            label="Booking Status"
            icon={CheckCircle2}
            register={register("bookingStatus")}
            error={errors.bookingStatus?.message}
            options={bookingStatuses}
          />
        </div>
      </div>
    </FormSection>
  );
}
