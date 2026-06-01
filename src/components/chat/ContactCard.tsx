import { ChevronRight } from "lucide-react";
import { PERSONA } from "@/lib/chat-responses";

/** The "Contacts" card rendered for contact-related queries. */
export function ContactCard() {
  return (
    <div className="w-full rounded-2xl bg-neutral-100 p-8">
      <div className="flex items-start justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Contacts</h2>
        <span className="text-base text-neutral-800">{PERSONA.handle}</span>
      </div>
      <a
        href={`mailto:${PERSONA.email}`}
        className="mt-8 inline-flex items-center gap-1 text-lg font-medium text-[#0171E3] hover:underline"
      >
        {PERSONA.email}
        <ChevronRight className="h-4 w-4" />
      </a>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
        {PERSONA.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-800"
          >
            {s.label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-neutral-500">
        {PERSONA.location} · {PERSONA.phone}
      </p>
    </div>
  );
}
