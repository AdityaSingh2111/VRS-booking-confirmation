import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  children: ReactNode;
}

export function FormSection({
  title,
  description,
  icon: Icon,
  iconBg,
  iconColor,
  children,
}: FormSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
        >
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            {title}
          </h2>

          {description && (
            <p className="text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>

      </div>

      {children}

    </section>
  );
}