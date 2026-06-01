import { FluidCursor } from "@/components/FluidCursor";
import { PortfolioShell } from "@/components/PortfolioShell";
import { getFeaturedRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getFeaturedRepos();
  return (
    <main className="relative flex min-h-screen flex-col">
      <FluidCursor />
      <PortfolioShell repos={repos} />
    </main>
  );
}
