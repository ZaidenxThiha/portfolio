/** Persona + canned (mock) responses for the /chat experience. */

export interface SocialLink {
  label: string;
  href: string;
}

export const PERSONA = {
  name: "Thiha Aung",
  firstName: "Thiha",
  role: "AI Engineer & Data Analyst",
  handle: "@ZaidenxThiha",
  email: "gghex645@gmail.com",
  phone: "+84 84 230 8045",
  location: "Ho Chi Minh City, Vietnam",
  socials: [
    { label: "GitHub", href: "https://github.com/ZaidenxThiha" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thiha-aung-726384330" },
  ] satisfies SocialLink[],
};

/** Returns a canned assistant reply for a given query. */
export function getMockResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("who are you") || q.includes("about you")) {
    return "Hey! I’m Thiha Aung — an AI Engineer and Data Analyst based in Ho Chi Minh City, and a final-year Computer Science student at Ton Duc Thang University. I love turning data into insights, building reliable AI-powered systems, and constantly learning new tech. Ask me anything! 😄";
  }
  if (q.includes("project")) {
    return "In 2026 I built two POS financial systems — one for Thazin & Cherry English Centre and one for EDUbridge Private School — handling payments, billing, and financial records. Alongside that, as a final-year CS student I focus on AI and data projects (analysis pipelines, ML models, LLM-powered tools), and earlier I built an Elevator Control System with PLC programming. Past roles include Technical Engineer at Thazin & Cherry and IT Support at FPT IS Vietnam.";
  }
  if (q.includes("skill")) {
    return "Hard skills: Python, Data Analysis, Machine Learning, SQL, AI/LLM tooling, data visualization, and general programming — plus a solid engineering base in networking and troubleshooting. Soft skills: Leadership and Communication. I’m strongest at turning messy data into clear insights and shipping reliable AI-driven solutions. 🧠";
  }
  if (q.includes("craziest") || q.includes("hobbies") || q.includes("fun")) {
    return "Craziest thing? Moving abroad to take on a Computer Science degree in Vietnam while building my engineering career at the same time. 😅 Outside of work I love tinkering with hardware, exploring Ho Chi Minh City, and picking up new skills.";
  }
  if (q.includes("contact")) {
    return "You can reach me by email or connect on GitHub and LinkedIn above — I’m based in Ho Chi Minh City. Feel free to hit me up anytime, I’d be happy to chat! 😉 What’s on your mind?";
  }
  return "Great question! I’m a mock version of Thiha’s AI portfolio, so my answers are canned — but feel free to try one of the quick questions below to learn more about me! 👇";
}

/** Whether a query should also render the Contacts card. */
export function isContactQuery(query: string): boolean {
  return query.toLowerCase().includes("contact");
}
