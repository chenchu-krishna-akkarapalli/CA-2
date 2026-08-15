import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200/80">
        <span className="text-[12px] font-outfit font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full inline-block mb-3">
          404 Not Found
        </span>
        <h1 className="font-outfit font-extrabold text-[28px] sm:text-[34px] text-brand-primary mb-2">
          Page Not Found
        </h1>
        <p className="font-inter text-[14px] text-slate-600 mb-6">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="min-h-[46px] w-full rounded-xl bg-gradient-btn-hero text-white font-outfit font-bold text-[15px] flex items-center justify-center gap-2 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
