import { useId } from "react";
import { LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormSelectProps {
  label: string;
  icon?: LucideIcon;
  options: readonly string[];
  register?: UseFormRegisterReturn;
  error?: string | undefined;
  id?: string;
}

export function FormSelect({ label, icon: Icon, options, register, error, id }: FormSelectProps) {
  const generatedId = useId();
  const selectId = id ?? register?.name ?? generatedId;
  const errorId = `${selectId}-error`;

  return (
    <div className="space-y-2">
      <label htmlFor={selectId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3.5 h-4 w-4 text-slate-600" />}

        <select
          id={selectId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
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

      {error && (
        <p id={errorId} role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
