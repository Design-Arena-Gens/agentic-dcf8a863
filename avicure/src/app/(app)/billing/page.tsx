import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  CalculatorIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const revenueStreams = [
  {
    name: "Value-based care contracts",
    detail: "Shared savings programs across cardiology and oncology.",
    amount: "$4.2M",
    change: "+18% QoQ",
  },
  {
    name: "Telehealth services",
    detail: "Virtual visits, remote monitoring, digital therapeutics.",
    amount: "$2.1M",
    change: "+12% QoQ",
  },
  {
    name: "Hospital-at-home",
    detail: "Acute episodes managed in home settings.",
    amount: "$1.4M",
    change: "+26% QoQ",
  },
];

const tasks = [
  {
    title: "Claim review queue",
    items: "12 flags to verify",
    detail: "AI recommended adjustments applied automatically.",
  },
  {
    title: "Patient payment plans",
    items: "24 schedules syncing",
    detail: "Automated reminders and financial assistance matching.",
  },
  {
    title: "Contract performance review",
    items: "3 payers require updates",
    detail: "Share dashboards with finance and clinical leads.",
  },
];

const metrics = [
  {
    label: "Clean claim rate",
    value: "96.4%",
    sub: "AI-prepped coding and documentation",
  },
  {
    label: "Net collection rate",
    value: "98.1%",
    sub: "Up from 94.6% last quarter",
  },
  {
    label: "Days in AR",
    value: "23",
    sub: "Down 7 days month-over-month",
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Billing & Revenue Operations"
        subtitle="Track revenue streams, automate financial workflows, and align every care interaction with seamless payment experiences."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <BanknotesIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Revenue streams
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Consolidated view across payers, programs, and services.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {revenueStreams.map((stream) => (
            <div
              key={stream.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {stream.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{stream.detail}</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#2D5F4F]">
                <span>{stream.amount}</span>
                <span className="rounded-[12px] bg-white px-3 py-1">
                  {stream.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ClipboardDocumentCheckIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Priority tasks
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                AI orders the worklist based on impact and urgency.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {task.title}
                  </p>
                  <span className="pill">{task.items}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">{task.detail}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Financial performance
            </h3>
            <ChartPieIcon className="h-8 w-8 text-[#2D5F4F]" />
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

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Precision billing with predictive safeguards
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Copilot flags coding variations, missing documentation, and payer
              policy shifts before submission.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Open audit report
            <CalculatorIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Transparent cost conversations with patients
            </p>
            <p className="text-sm text-white/80">
              Personalized estimates, assistance programs, and payment plans
              available in one conversation.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            Launch patient wallet
            <CurrencyDollarIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <button className="flex w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#2D5F4F]/40 bg-[#F5F5F0] px-4 py-6 text-sm font-semibold text-[#2D5F4F] hover:border-[#2D5F4F] hover:text-[#1A1A1A]">
        Export finance briefing
        <ArrowTrendingUpIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

