/** Centered heading group: greeting and big title. */
export function Hero() {
  return (
    <div className="z-[1] mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12">
      <h2 className="mt-1 text-xl font-semibold text-secondary-foreground md:text-2xl">
        Hey, I&apos;m Thiha 👋
      </h2>
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        AI Engineer
        <span className="block">&amp; Data Analyst</span>
      </h1>
    </div>
  );
}
