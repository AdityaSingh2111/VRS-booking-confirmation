import { useState, useRef, useEffect } from "react";
import { LucideIcon, ChevronDown, Search, X } from "lucide-react";

interface FormComboboxProps {
  label: string;
  icon?: LucideIcon | undefined;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  placeholder?: string | undefined;
}

export function FormCombobox({
  label,
  icon: Icon,
  options,
  value,
  onChange,
  error,
  placeholder = "Select or search...",
}: FormComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? options.filter((o) => o.toLowerCase().includes(query.toLowerCase()))
    : options;

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  function select(option: string) {
    onChange(option);
    setOpen(false);
    setQuery("");
  }

  function clear(e: React.MouseEvent) {
    e.stopPropagation();
    onChange("");
  }

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>

      {/* Trigger */}
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3.5 h-4 w-4 text-slate-600 pointer-events-none z-10" />}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-left outline-none transition flex items-center justify-between
            ${Icon ? "pl-10" : ""}
            ${error ? "border-red-500" : open ? "border-sky-500 ring-1 ring-sky-200" : "border-slate-300 hover:border-slate-400"}`}
        >
          <span className={value ? "text-slate-900 text-sm font-medium" : "text-slate-400 text-sm"}>
            {value || placeholder}
          </span>
          <span className="flex items-center gap-1 shrink-0 ml-2">
            {value && (
              <span
                role="button"
                onClick={clear}
                className="rounded-full p-0.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="h-3.5 w-3.5" />
              </span>
            )}
            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </span>
        </button>

        {/* Dropdown panel */}
        {open && (
          <div className="absolute z-50 mt-1.5 w-full rounded-xl border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
            {/* Search */}
            <div className="px-3 py-2 border-b border-slate-100 flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search executive..."
                className="w-full text-sm outline-none placeholder:text-slate-400 bg-transparent"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600">
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Options list */}
            <ul className="max-h-52 overflow-y-auto py-1 divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-sm text-slate-400 text-center">No results found</li>
              ) : (
                filtered.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => select(option)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition
                        ${value === option
                          ? "bg-sky-50 text-sky-700 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      {option}
                    </button>
                  </li>
                ))
              )}
            </ul>

            {/* Footer count */}
            <div className="px-3 py-1.5 border-t border-slate-100 text-[10px] text-slate-400 text-right">
              {filtered.length} of {options.length} executives
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
