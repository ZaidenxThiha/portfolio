import type { LucideIcon } from "lucide-react";

/** A quick-action button on the landing page (and quick-question pill in chat). */
export interface QuickAction {
  /** Label shown under the icon, e.g. "Me". */
  label: string;
  /** Lucide icon component. */
  icon: LucideIcon;
  /** Exact stroke color from the original site. */
  color: string;
  /** Preset query pushed to /chat?query=… */
  query: string;
}

/** A single chat message in the mocked /chat experience. */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}
