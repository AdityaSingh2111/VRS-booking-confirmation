import { RotateCcw, FileText } from "lucide-react";

interface FormActionsProps {
  onReset?: () => void;
}

export function FormActions({
  onReset,
}: FormActionsProps) {
  return (
    <div className="flex items-center justify-end gap-4 pt-6">
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"

      >
        <RotateCcw className="h-4 w-4" />
        Reset Form
      </button>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <FileText className="h-4 w-4" />
        Generate PDF
      </button>
    </div>
  );
}