import {
  ArrowUpRightIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const categories = [
  {
    title: "Clinicians & Specialists",
    description: "Find the right physician by expertise, outcomes, and access.",
    icon: UserGroupIcon,
    results: 324,
    highlight: ["Cardiology", "Oncology", "Pediatrics"],
  },
  {
    title: "Diagnostic Labs",
    description: "Connect with labs offering same-day PCR, imaging, and panels.",
    icon: BeakerIcon,
    results: 118,
    highlight: ["Genomics", "Pathology", "Remote kits"],
  },
  {
    title: "Hospital Services",
    description: "Bed availability, surgical blocks, and transition planning.",
    icon: BuildingLibraryIcon,
    results: 64,
    highlight: ["Cardiac cath labs", "ICU capacity", "Post-op recovery"],
  },
];

const trendingQueries = [
  {
    query: "Post-operative remote monitoring kits",
    network: "Labs + Home health",
    updated: "45s ago",
  },
  {
    query: "Tele-oncology second opinion availability",
    network: "Cancer centers",
    updated: "3m ago",
  },
  {
    query: "Care plans for gestational diabetes cohort",
    network: "OBGYN + Endocrinology",
    updated: "6m ago",
  },
];

const protocols = [
  {
    title: "Cardiac rehabilitation pathway",
    steps: 12,
    owner: "Avicure Clinical Council",
  },
  {
    title: "Hospital-at-home escalation procedure",
    steps: 9,
    owner: "Virtual Hospital Ops",
  },
  {
    title: "Rapid diagnostics fulfillment workflow",
    steps: 7,
    owner: "Network Logistics",
  },
];

export default function SearchPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Unified Healthcare Search"
        subtitle="Discover clinicians, services, and protocols across the Avicure network with contextual AI guidance."
      />

      <Card className="flex flex-col gap-6 rounded-[24px] bg-[#2D5F4F] p-8 text-white shadow-[0_16px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-white/15">
            <MagnifyingGlassIcon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              Ask Avicure Copilot anything
            </h2>
            <p className="text-sm text-white/80">
              Tailored recommendations are generated in real time across patient
              charts, provider networks, and operational signals.
            </p>
          </div>
        </div>
        <div className="relative">
          <input
            className="h-14 w-full rounded-[16px] border border-white/20 bg-white/10 px-5 text-sm font-medium placeholder:text-white/60 focus:border-white focus:outline-none"
            placeholder="Search for physicians, services, diagnostics, or patient support..."
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[14px] bg-white px-4 py-2 text-sm font-semibold text-[#2D5F4F] shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
            Run insight
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/70">
          Suggested: cardiology telehealth • precision oncology • rapid PCR •
          VR rehab • behavioral health
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Trending network queries
            </h3>
            <span className="chip">Live</span>
          </div>
          <ul className="space-y-3">
            {trendingQueries.map((item) => (
              <li
                key={item.query}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <p className="text-sm font-semibold text-[#2D5F4F]">
                  {item.network}
                </p>
                <p className="mt-1 text-base font-semibold text-[#1A1A1A]">
                  {item.query}
                </p>
                <p className="mt-1 text-xs text-[#6B6B6B]">
                  Auto-refreshed {item.updated}
                </p>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Standardized protocols
            </h3>
            <QueueListIcon className="h-7 w-7 text-[#6B4E3D]" />
          </div>
          <ul className="space-y-3">
            {protocols.map((protocol) => (
              <li
                key={protocol.title}
                className="flex items-center justify-between rounded-[16px] bg-[#F5F5F0] px-4 py-3 text-sm text-[#1A1A1A]"
              >
                <div>
                  <p className="font-semibold">{protocol.title}</p>
                  <p className="text-xs text-[#6B6B6B]">
                    {protocol.steps} steps • {protocol.owner}
                  </p>
                </div>
                <ArrowUpRightIcon className="h-5 w-5 text-[#2D5F4F]" />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="flex flex-col gap-4 rounded-[22px] bg-white/95 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3">
              <category.icon className="h-10 w-10 text-[#2D5F4F]" />
              <div>
                <p className="text-base font-semibold text-[#1A1A1A]">
                  {category.title}
                </p>
                <p className="text-xs text-[#6B6B6B]">
                  {category.results} network matches
                </p>
              </div>
            </div>
            <p className="text-sm text-[#6B6B6B]">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.highlight.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[12px] bg-[#2D5F4F]/10 px-3 py-1 text-xs font-semibold text-[#2D5F4F]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#6B4E3D] hover:underline">
              Explore
              <ArrowUpRightIcon className="h-4 w-4" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

