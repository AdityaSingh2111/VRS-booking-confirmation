import { LucideIcon } from "lucide-react";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  icon?: LucideIcon;
  register?: any;
  error?: string | undefined;
}

export function FormTextarea({
  label,
  placeholder,
  rows = 4,
  icon: Icon,
  register,
  error,
}: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">{label}</label>

      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3.5 h-4 w-4 text-slate-600" />}

        <textarea
          rows={rows}
          placeholder={placeholder}
          {...register}
          className={`w-full resize-none rounded-xl border px-4 py-3 transition outline-none
            ${Icon ? "pl-10" : ""}
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-slate-300 focus:border-sky-500"
            }`}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
