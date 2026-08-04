import { LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormSelectProps {
  label: string;
  icon?: LucideIcon;
  options: readonly string[];
  register?: UseFormRegisterReturn;
  error?: string | undefined;
}

export function FormSelect({ label, icon: Icon, options, register, error }: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">{label}</label>

      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3.5 h-4 w-4 text-slate-600" />}

        <select
          {...register}
          className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition
            ${Icon ? "pl-10" : ""}
            ${error ? "border-danger" : "border-slate-300 focus:border-primary"}`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
}
