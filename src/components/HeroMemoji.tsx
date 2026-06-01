import Image from "next/image";

/** Zoomed/cropped memoji face. Mirrors toukoum.fr's translate + scale crop. */
export function HeroMemoji() {
  return (
    <div className="relative z-10 h-52 w-48 overflow-hidden sm:h-72 sm:w-72">
      <Image
        src="/images/landing-memojis.png"
        alt="Hero memoji"
        width={1920}
        height={1080}
        priority
        className="h-auto w-full translate-y-14 scale-[2] object-cover"
      />
    </div>
  );
}
