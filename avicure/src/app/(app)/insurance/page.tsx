import {
  BanknotesIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const payers = [
  {
    name: "OptiCare Health",
    programs: "Value-based care • Bundled payments",
    status: "Integrated",
    insights: "Prior auth auto-approved 94%",
  },
  {
    name: "TrueNorth Insurance",
    programs: "Commercial plans • Telehealth wrap",
    status: "In negotiation",
    insights: "Chronic care cost down 18%",
  },
  {
    name: "MedSure Advantage",
    programs: "Medicare Advantage • SNP programs",
    status: "Active",
    insights: "Hospital-at-home expansion",
  },
];

const workflows = [
  {
    title: "Eligibility & benefits verification",
    result: "Real-time • <30 sec",
    detail:
      "AI checks coverage tiers, co-pays, and pre-visit financial readiness.",
  },
  {
    title: "Prior authorization autopilot",
    result: "End-to-end automation",
    detail:
      "Clinical data prefilled, supporting documentation attached automatically.",
  },
  {
    title: "Financial risk forecasting",
    result: "Insights refreshed hourly",
    detail:
      "Tracks utilization against contract benchmarks to prevent overruns.",
  },
];

const metrics = [
  {
    label: "Denial rate decreased",
    value: "-32%",
    sub: "Compared to industry benchmark",
  },
  {
    label: "Revenue cycle acceleration",
    value: "5.6 days",
    sub: "Average claims paid faster",
  },
  {
    label: "Patient cost savings",
    value: "$1.2M",
    sub: "Last quarter across programs",
  },
];

export default function InsurancePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Insurance & Payer Connectivity"
        subtitle="Align value-based care, prior authorizations, and financial intelligence in a unified hub."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <ShieldCheckIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Strategic payer partners
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Collaborative contracts with transparent performance tracking.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {payers.map((payer) => (
            <div
              key={payer.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {payer.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{payer.programs}</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#2D5F4F]">
                <span>{payer.status}</span>
                <span className="rounded-[12px] bg-white px-3 py-1">
                  {payer.insights}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <DocumentCheckIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Automation workflows
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Reduce manual effort with compliant, AI-assisted processes.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {workflows.map((workflow) => (
              <li
                key={workflow.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {workflow.title}
                  </p>
                  <span className="pill">{workflow.result}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">
                  {workflow.detail}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Financial performance
            </h3>
            <BanknotesIcon className="h-8 w-8 text-[#2D5F4F]" />
          </div>
          <div className="space-y-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-xs font-semibold text-[#6B6B6B]">
                  {metric.label}
                </p>
                <p className="text-3xl font-semibold text-[#1A1A1A]">
                  {metric.value}
                </p>
                <p className="text-xs text-[#6B6B6B]">{metric.sub}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Transparent contracts, aligned incentives
            </p>
            <p className="text-sm text-white/80">
              Track shared savings, quality metrics, and patient outcomes in one
              place.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            Review contract scorecards
            <CheckBadgeIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <Card className="flex items-center justify-between rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">
            Copilot predicts authorizations needed weeks ahead
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Surface requirements early, gather evidence automatically, and keep
            care moving.
          </p>
        </div>
        <SparklesIcon className="h-10 w-10 text-[#2D5F4F]" />
      </Card>
    </div>
  );
}

