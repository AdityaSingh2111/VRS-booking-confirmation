import { MapPin } from "lucide-react";
import {
  FieldErrors,
  UseFormRegister,
  Path,
} from "react-hook-form";

import { BookingFormValues } from "@/hooks/useBookingForm";
import { FormInput } from "@/components/form/FormInput";
import { FormTextarea } from "@/components/form/FormTextarea";

interface AddressCardProps {
  title: string;
  accent: "blue" | "orange";

  prefix: "pickup" | "delivery";

  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
}

export function AddressCard({
  title,
  accent,
  prefix,
  register,
  errors,
}: AddressCardProps) {
  const bg =
    accent === "blue"
      ? "bg-sky-100"
      : "bg-orange-100";

  const color =
    accent === "blue"
      ? "text-sky-600"
      : "text-orange-600 font-extrabold";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}
        >
          <MapPin className={`h-5 w-5 ${color}`} />
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            Enter complete address details.
          </p>
        </div>

      </div>

      <div className="space-y-5">

        <FormTextarea
          label="Complete Address"
          placeholder="Enter complete address..."
          register={register(
            `${prefix}Address` as Path<BookingFormValues>
          )}
          error={
            errors[
              `${prefix}Address` as keyof BookingFormValues
            ]?.message as string
          }
        />

        <div className="grid grid-cols-2 gap-4">

        </div>

      </div>

    </div>
  );
}