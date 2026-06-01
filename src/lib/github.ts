/** Live GitHub repo showcase — curated to the strongest repos. */

export interface RepoCard {
  name: string;
  title: string;
  description: string;
  language: string | null;
  stars: number;
  url: string;
}

interface GhRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  fork: boolean;
}

const GH_USER = "ZaidenxThiha";

/** Curated repos (name → friendly title), in display order. */
const FEATURED: Record<string, string> = {
  "Traffic-analysis-heatmap": "Traffic Analysis Heatmap",
  "523K0073_523K0078_Midterm": "MLP vs RNN Comparison",
  Skipgram_MIdtermProject: "Skip-gram Word Embeddings",
  DIP_final: "Digital Image Processing",
  SE_final_project: "Electronics Online Store",
};

/** Cleaner descriptions where the GitHub one is missing or just the repo name. */
const DESCRIPTIONS: Record<string, string> = {
  "Traffic-analysis-heatmap": "Traffic analysis heatmap built with YOLO object detection.",
  "523K0073_523K0078_Midterm": "Comparing Multi-Layer Perceptrons and Recurrent Networks (RNNs).",
  Skipgram_MIdtermProject: "Skip-gram word2vec word-embedding model.",
  DIP_final: "Digital Image Processing final project.",
  SE_final_project: "Electronics online store — software-engineering project.",
};

export async function getFeaturedRepos(): Promise<RepoCard[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=pushed`,
      {
        headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio" },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as GhRepo[];
    const order = Object.keys(FEATURED);
    return data
      .filter((r) => FEATURED[r.name])
      .map((r) => ({
        name: r.name,
        title: FEATURED[r.name],
        description: DESCRIPTIONS[r.name] ?? r.description ?? "",
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
      }))
      .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
  } catch {
    return [];
  }
}
