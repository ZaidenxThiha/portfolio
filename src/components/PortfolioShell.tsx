"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Hero } from "@/components/Hero";
import { HeroMemoji } from "@/components/HeroMemoji";
import { ChatInput } from "@/components/ChatInput";
import { Wordmark } from "@/components/Wordmark";
import { Reveal } from "@/components/Reveal";
import { TabCards } from "@/components/portfolio/TabCards";
import { Explorer } from "@/components/portfolio/Explorer";
import { QUICK_ACTIONS } from "@/lib/quick-actions";
import type { RepoCard } from "@/lib/github";

export function PortfolioShell({ repos }: { repos: RepoCard[] }) {
  const [active, setActive] = useState("Me");

  function scrollToExplore() {
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function select(label: string) {
    setActive(label);
    requestAnimationFrame(scrollToExplore);
  }

  return (
    <>
      {/* Hero — full viewport */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-24">
        <Wordmark />
        <Hero />
        <div className="animate-fade-up [animation-delay:120ms]">
          <HeroMemoji />
        </div>
        <div className="z-10 mt-6 flex w-full animate-fade-up flex-col items-center justify-center [animation-delay:240ms] md:px-0">
          <ChatInput />
          <TabCards active={active} onSelect={select} />
          {/* Mobile tab cards — horizontal scroll row */}
          <div className="mt-4 flex w-full max-w-lg gap-2.5 overflow-x-auto px-1 pb-1 sm:hidden">
            {QUICK_ACTIONS.map(({ label, icon: Icon, color }) => (
              <button
                key={label}
                type="button"
                onClick={() => select(label)}
                aria-pressed={active === label}
                className={`liquid-glass flex h-[64px] w-[64px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl ${
                  active === label ? "liquid-glass--active" : ""
                }`}
              >
                <Icon size={20} color={color} />
                <span className="text-[10px] font-medium text-gray-700">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToExplore}
          aria-label="Scroll to explore"
          className="group absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 transition-colors hover:text-neutral-700"
        >
          <span className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Explore
            </span>
            <ChevronDown className="animate-bob h-6 w-6" />
          </span>
        </button>
      </section>

      {/* Explore — long, scrollable info */}
      <section id="explore" className="relative z-10 px-4 pt-16 pb-28">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore my world
          </h2>
          <p className="mt-2 text-neutral-500">
            Pick a card to dive into a different part of my story.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Explorer active={active} onSelect={setActive} repos={repos} />
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-200/60 px-4 py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 text-sm text-neutral-400 sm:flex-row">
          <p>Thiha Aung — AI Engineer &amp; Data Analyst</p>
          <p>Ho Chi Minh City, Vietnam</p>
        </div>
      </footer>
    </>
  );
}
