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
        <div className="animate-fade-up">
          <Hero />
        </div>
        <div className="animate-fade-up [animation-delay:120ms]">
          <HeroMemoji />
        </div>
        <div className="z-10 mt-4 flex w-full animate-fade-up flex-col items-center justify-center [animation-delay:240ms] md:px-0">
          <ChatInput />
          <TabCards active={active} onSelect={select} />
        </div>

        <button
          type="button"
          onClick={scrollToExplore}
          aria-label="Scroll to explore"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 transition-colors hover:text-neutral-700"
        >
          <ChevronDown className="animate-bob h-7 w-7" />
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
    </>
  );
}
