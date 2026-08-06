import { useId } from "react";
import { LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  icon?: LucideIcon;
  register?: UseFormRegisterReturn;
  error?: string | undefined;
  id?: string;
}

export function FormTextarea({
  label,
  placeholder,
  rows = 4,
  icon: Icon,
  register,
  error,
  id,
}: FormTextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? register?.name ?? generatedId;
  const errorId = `${textareaId}-error`;

  return (
    <div className="space-y-2">
      <label htmlFor={textareaId} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3.5 h-4 w-4 text-slate-600" />}

        <textarea
          id={textareaId}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...register}
          className={`w-full resize-none rounded-xl border px-4 py-3 transition outline-none
            ${Icon ? "pl-10" : ""}
            ${
              error ? "border-danger focus:border-danger" : "border-slate-300 focus:border-primary"
            }`}
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
