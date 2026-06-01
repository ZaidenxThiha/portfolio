/** Giant faded name wordmark pinned to the bottom (hidden on mobile). */
export function Wordmark() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
      <span className="-mb-10 hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black whitespace-nowrap text-transparent select-none sm:block lg:text-[16rem]">
        Thiha Aung
      </span>
    </div>
  );
}
