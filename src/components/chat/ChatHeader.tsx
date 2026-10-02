import { Info, ArrowLeft } from "lucide-react";
import Link from "next/link";

/** Chat top bar: back button, talking memoji video (center), info (right). */
export function ChatHeader() {
  return (
    <header className="relative flex items-center justify-center px-6 pt-6 pb-2">
      <Link
        href="/"
        aria-label="Back to home"
        className="fixed top-8 left-6 z-[51] flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>
      <div className="h-14 w-14 overflow-hidden">
        <video
          src="/videos/final_memojis.webm"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full scale-[1.8] object-contain"
        />
      </div>
      <button
        type="button"
        aria-label="Information"
        className="fixed top-8 right-6 z-[51] flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
      >
        <Info className="h-5 w-5" />
      </button>
    </header>
  );
}
