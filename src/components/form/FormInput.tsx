import { LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: LucideIcon;
  register?: UseFormRegisterReturn;
  error?: string | undefined;
  readOnly?: boolean;
  value?: string | number;
  disabled?: boolean;
  className?: string;
}

export function FormInput({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  register,
  error,
  readOnly = false,
  value,
  disabled = false,
  className = "",
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">{label}</label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />
        )}

        <input
          type={type}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          {...register}
          className={`
            w-full min-w-0 rounded-xl border px-4 py-3 transition-all duration-200 outline-none
            ${Icon ? "pl-10" : ""}
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-slate-300 focus:border-sky-500"
            }
            ${readOnly || disabled ? "bg-slate-100 text-slate-700 cursor-not-allowed" : "bg-white"}
            focus:ring-2 focus:ring-sky-100
            ${className}
          `}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
