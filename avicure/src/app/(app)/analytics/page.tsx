import {
  ArrowTrendingUpIcon,
  ChartPieIcon,
  CpuChipIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const performance = [
  {
    title: "Hospital readmission reduction",
    value: "-18%",
    context: "Driven by remote monitoring + telehealth follow-ups.",
  },
  {
    title: "Patient experience score",
    value: "4.8 / 5",
    context: "Consistent improvement across inpatient and virtual services.",
  },
  {
    title: "Care coordination efficiency",
    value: "+26%",
    context: "AI workflows closing gaps faster than manual processes.",
  },
];

const dashboards = [
  {
    name: "Population health outcomes",
    metric: "Cohorts by risk stratification",
    owner: "Clinical analytics",
  },
  {
    name: "Operational throughput",
    metric: "Bed utilization • Wait times • OR efficiency",
    owner: "Hospital operations",
  },
  {
    name: "Financial vitality",
    metric: "Revenue vs cost • Payer mix • Denial trends",
    owner: "Finance leadership",
  },
];

const narratives = [
  {
    title: "Cardiac recovery transformation",
    insight:
      "Combined telemetry, AI triage, and coaching to reduce readmissions 24% while improving patient satisfaction.",
  },
  {
    title: "Precision oncology expansion",
    insight:
      "Cross-institution data sharing enabled 37% more trial matches and faster diagnostics.",
  },
  {
    title: "Hospital-at-home scaling",
    insight:
      "Home-based acute care lowered cost per episode by 31% and freed 68 ICU bed days.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Analytics & Outcomes"
        subtitle="Understand the impact of Avicure across clinical quality, operations, and financial performance."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <PresentationChartBarIcon className="h-8 w-8 text-[#2D5F4F]" />
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A]">
                Performance highlights
              </h2>
              <p className="text-sm text-[#6B6B6B]">
                Key outcome indicators updated in real time.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {performance.map((item) => (
              <div
                key={item.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {item.title}
                </p>
                <p className="text-3xl font-semibold text-[#2D5F4F]">
                  {item.value}
                </p>
                <p className="text-xs text-[#6B6B6B]">{item.context}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ChartPieIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Executive dashboards
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Tailored perspectives for leaders across the network.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {dashboards.map((dash) => (
              <li
                key={dash.name}
                className="flex items-center justify-between rounded-[16px] bg-[#F5F5F0] px-4 py-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    {dash.name}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">{dash.metric}</p>
                </div>
                <span className="rounded-[12px] bg-white px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                  {dash.owner}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Story-driven intelligence
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Copilot crafts shareable narratives, translating data into human impact.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Export executive brief
            <DocumentTextIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {narratives.map((story) => (
            <div
              key={story.title}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
            >
              <p className="text-sm font-semibold text-[#1A1A1A]">
                {story.title}
              </p>
              <p className="mt-2 text-sm text-[#6B6B6B]">{story.insight}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              AI predicts outcomes, humans direct care
            </p>
            <p className="text-sm text-white/80">
              Forecasts surface opportunities to intervene earlier and invest wisely.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            Launch predictive studio
            <CpuChipIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <button className="flex w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#2D5F4F]/40 bg-[#F5F5F0] px-4 py-6 text-sm font-semibold text-[#2D5F4F] hover:border-[#2D5F4F] hover:text-[#1A1A1A]">
        Compare performance by region
        <ArrowTrendingUpIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
