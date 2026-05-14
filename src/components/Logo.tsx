import { BUSINESS_NAME } from "../constants";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-rose-200">
        BM
      </div>
      <h1 className="text-xl font-bold tracking-tight">
        BLOSSOM <span className="text-rose-500">MEE</span>
      </h1>
    </div>
  );
}
