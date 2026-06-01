import { FluidCursor } from "@/components/FluidCursor";
import { PortfolioShell } from "@/components/PortfolioShell";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <FluidCursor />
      <PortfolioShell />
    </main>
  );
}
