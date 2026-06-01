"use client";

import { QUICK_ACTIONS } from "@/lib/quick-actions";

interface TabCardsProps {
  active: string;
  onSelect: (label: string) => void;
}

/** The five liquid-glass cards in the hero. Clicking one selects that tab
 *  and scrolls down to the info section. */
export function TabCards({ active, onSelect }: TabCardsProps) {
  return (
    <div className="mt-4 hidden w-full max-w-2xl gap-3 sm:grid sm:grid-cols-3 md:grid-cols-5">
      {QUICK_ACTIONS.map(({ label, icon: Icon, color }) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect(label)}
          aria-pressed={active === label}
          className={`liquid-glass ${
            active === label ? "liquid-glass--active" : ""
          } flex h-[82px] cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl text-sm font-medium`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
            <Icon size={22} color={color} />
            <span className="text-xs font-medium sm:text-sm">{label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
