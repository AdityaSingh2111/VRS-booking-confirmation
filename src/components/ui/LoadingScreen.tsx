import { useEffect, useState } from "react";
import { company } from "@/config/company";
import { loadingMessages } from "@/config/services";

interface LoadingScreenProps {
  title?: string;
}

export function LoadingScreen({ title = "Preparing Your Booking" }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev === loadingMessages.length - 1 ? prev : prev + 1));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-8 text-center">
        <img src={company.logo} alt={company.name} className="mx-auto h-20 w-auto animate-pulse" />

        <h1 className="mt-8 text-2xl font-bold text-slate-800">{title}</h1>

        <p className="mt-3 text-sm text-slate-700">{loadingMessages[messageIndex]}</p>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="loading-bar h-full rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        <p className="mt-6 text-sm text-slate-600">Please wait a moment...</p>
      </div>
    </div>
  );
}
