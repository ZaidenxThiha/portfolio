/** Centered heading group: greeting, big title, and tagline. */
export function Hero() {
  return (
    <div className="z-[1] mt-20 mb-6 flex flex-col items-center text-center md:mt-0 md:mb-10">
      <div className="animate-fade-up [animation-delay:60ms]">
        <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900/5 px-4 py-1.5 text-sm font-medium text-neutral-600 ring-1 ring-neutral-900/10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-secondary-foreground md:text-2xl">
        Hey, I&apos;m Thiha 👋
      </h2>
      <h1 className="mt-1 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        AI Engineer
        <span className="block">&amp; Data Analyst</span>
      </h1>
      <p className="mt-4 max-w-md text-base text-neutral-500 md:text-lg">
        Building intelligent tools at the intersection of machine learning, data, and clean design.
      </p>
    </div>
  );
}
