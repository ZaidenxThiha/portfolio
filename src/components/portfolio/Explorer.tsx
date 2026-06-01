"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { QUICK_ACTIONS } from "@/lib/quick-actions";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  CORE_SKILLS,
  FOCUS_SKILLS,
  FUN,
  type TimelineItem,
} from "@/lib/portfolio";

interface ExplorerProps {
  active: string;
  onSelect: (label: string) => void;
}

export function Explorer({ active, onSelect }: ExplorerProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    function measure() {
      const btn = btnRefs.current[active];
      if (btn)
        setIndicator({
          left: btn.offsetLeft,
          top: btn.offsetTop,
          width: btn.offsetWidth,
          height: btn.offsetHeight,
        });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const accent =
    QUICK_ACTIONS.find((a) => a.label === active)?.color ?? "#0171E3";

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Tab bar with sliding liquid indicator */}
      <div className="sticky top-4 z-20 mb-8 flex justify-center">
        <div
          ref={rowRef}
          className="relative flex max-w-full gap-1 overflow-x-auto rounded-full p-1.5 liquid-glass"
        >
          <span
            className="liquid-indicator"
            style={{
              transform: `translate(${indicator.left}px, ${indicator.top}px)`,
              width: indicator.width,
              height: indicator.height,
              opacity: indicator.width ? 1 : 0,
            }}
          />
          {QUICK_ACTIONS.map(({ label, icon: Icon, color }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                ref={(el) => {
                  btnRefs.current[label] = el;
                }}
                type="button"
                onClick={() => onSelect(label)}
                aria-pressed={isActive}
                className="relative z-[1] inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              >
                <Icon size={18} color={isActive ? color : "#9ca3af"} />
                <span className={isActive ? "text-neutral-900" : "text-neutral-500"}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated content panel — re-mounts (key) so the glass-in plays on switch */}
      <div
        key={active}
        className="animate-glass-in liquid-glass rounded-3xl p-7 sm:p-10"
        style={{ borderTopColor: accent }}
      >
        {active === "Me" && <MePanel />}
        {active === "Projects" && <ProjectsPanel />}
        {active === "Skills" && <SkillsPanel accent={accent} />}
        {active === "Fun" && <FunPanel />}
        {active === "Contact" && <ContactPanel accent={accent} />}
      </div>
    </div>
  );
}

/* ---------- panels ---------- */

function PanelHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>;
}

function MePanel() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <PanelHeading>About me</PanelHeading>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
            {ABOUT.role}
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
            {ABOUT.status}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
            <MapPin className="h-3.5 w-3.5" /> {ABOUT.location}
          </span>
        </div>
        <p className="mt-4 leading-relaxed text-neutral-700">{ABOUT.summary}</p>
      </div>

      <div>
        <h3 className="mb-3 inline-flex items-center gap-2 text-lg font-semibold">
          <GraduationCap className="h-5 w-5 text-neutral-500" /> Education
        </h3>
        <Timeline items={EDUCATION} />
      </div>
    </div>
  );
}

function ProjectsPanel() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <PanelHeading>Projects</PanelHeading>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-neutral-50 p-5">
              <h3 className="font-semibold">{p.title}</h3>
              {p.meta && <p className="mt-0.5 text-xs text-neutral-500">{p.meta}</p>}
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-neutral-700">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 inline-flex items-center gap-2 text-lg font-semibold">
          <Briefcase className="h-5 w-5 text-neutral-500" /> Experience
        </h3>
        <Timeline items={EXPERIENCE} />
      </div>
    </div>
  );
}

function SkillsPanel({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <PanelHeading>Skills</PanelHeading>
        <div className="mt-5 space-y-4">
          {CORE_SKILLS.map((s, i) => (
            <div key={s.name}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="font-medium text-neutral-800">{s.name}</span>
                <span className="text-neutral-400">{s.level}/5</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="bar-fill h-full rounded-full"
                  style={{
                    ["--lvl" as string]: `${(s.level / 5) * 100}%`,
                    animationDelay: `${i * 80}ms`,
                    background: `linear-gradient(90deg, ${accent}, ${accent}cc)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 inline-flex items-center gap-2 text-lg font-semibold">
          <Sparkles className="h-5 w-5 text-neutral-500" /> AI &amp; Data focus
        </h3>
        <div className="flex flex-wrap gap-2">
          {FOCUS_SKILLS.map((f) => (
            <span
              key={f}
              className="rounded-full border border-neutral-200 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-neutral-700"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FunPanel() {
  return (
    <div>
      <PanelHeading>Fun</PanelHeading>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {FUN.map((f) => (
          <div
            key={f}
            className="rounded-2xl bg-neutral-50 px-5 py-4 text-neutral-700"
          >
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPanel({ accent }: { accent: string }) {
  const items = [
    { icon: Mail, label: ABOUT.name, value: "gghex645@gmail.com", href: "mailto:gghex645@gmail.com" },
    { icon: Phone, label: "Phone", value: "+84 84 230 8045", href: "tel:+84842308045" },
    { icon: GithubIcon, label: "GitHub", value: "github.com/ZaidenxThiha", href: "https://github.com/ZaidenxThiha" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "in/thiha-aung", href: "https://www.linkedin.com/in/thiha-aung-726384330" },
    { icon: MapPin, label: "Location", value: ABOUT.location, href: undefined },
  ];
  return (
    <div>
      <PanelHeading>Get in touch</PanelHeading>
      <p className="mt-3 text-neutral-600">
        I’m open to opportunities and collaborations — reach out anytime.
      </p>
      <div className="mt-5 divide-y divide-neutral-100">
        {items.map(({ icon: Icon, label, value, href }) => {
          const inner = (
            <>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
                <Icon className="h-[18px] w-[18px]" style={{ color: accent }} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-neutral-400">{label}</span>
                <span className="font-medium text-neutral-800">{value}</span>
              </span>
              {href && <ArrowUpRight className="ml-auto h-4 w-4 text-neutral-400" />}
            </>
          );
          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 transition-colors hover:text-neutral-900"
            >
              {inner}
            </a>
          ) : (
            <div key={label} className="flex items-center gap-3 py-3">
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={`${item.title}-${item.org}`} className="border-l-2 border-neutral-200 pl-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h4 className="font-semibold text-neutral-900">{item.title}</h4>
            {item.period && (
              <span className="text-xs text-neutral-400">{item.period}</span>
            )}
          </div>
          <p className="text-sm text-neutral-600">{item.org}</p>
          {item.points.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-700">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
