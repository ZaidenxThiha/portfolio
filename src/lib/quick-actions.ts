import {
  Laugh,
  BriefcaseBusiness,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from "lucide-react";
import type { QuickAction } from "@/types";

/** The five quick-action buttons, verbatim icons / colors / queries from toukoum.fr. */
export const QUICK_ACTIONS: QuickAction[] = [
  {
    label: "Me",
    icon: Laugh,
    color: "#329696",
    query: "Who are you? I want to know more about you.",
  },
  {
    label: "Projects",
    icon: BriefcaseBusiness,
    color: "#3E9858",
    query: "What are your projects? What are you working on right now?",
  },
  {
    label: "Skills",
    icon: Layers,
    color: "#856ED9",
    query: "What are your skills? Give me a list of your soft and hard skills.",
  },
  {
    label: "Fun",
    icon: PartyPopper,
    color: "#B95F9D",
    query: "What’s the craziest thing you’ve ever done? What are your hobbies?",
  },
  {
    label: "Contact",
    icon: UserRoundSearch,
    color: "#C19433",
    query: "How can I contact you?",
  },
];
