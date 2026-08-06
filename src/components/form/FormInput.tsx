import { useId } from "react";
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
  id?: string;
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
  id,
}: FormInputProps) {
  const generatedId = useId();
  const inputId = id ?? register?.name ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />
        )}

        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...register}
          className={`
            w-full min-w-0 rounded-xl border px-4 py-3 transition-all duration-200 outline-none
            ${Icon ? "pl-10" : ""}
            ${error ? "border-danger focus:border-danger" : "border-slate-300 focus:border-primary"}
            ${readOnly || disabled ? "bg-slate-100 text-slate-700 cursor-not-allowed" : "bg-white"}
            focus:ring-2 focus:ring-primary/20
            ${className}
          `}
        />
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
