import {
  ArrowUpRightIcon,
  BeakerIcon,
  CpuChipIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const labPartners = [
  {
    name: "NovaDx Laboratories",
    focus: "Genomic sequencing • Liquid biopsy",
    turnaround: "12h avg",
    status: "Priority channel",
  },
  {
    name: "RapidLab Diagnostics",
    focus: "PCR • Infectious disease • Respiratory panels",
    turnaround: "4h avg",
    status: "Same-day",
  },
  {
    name: "Lumina Pathology",
    focus: "Histopathology • Immunohistochemistry",
    turnaround: "24h avg",
    status: "AI annotated",
  },
];

const pipelines = [
  {
    title: "Critical care panels",
    detail:
      "Emergency processing for ICU pathways with automatic physician alerts.",
    performance: "98% on-time",
  },
  {
    title: "Oncology biomarker tracking",
    detail:
      "Longitudinal analysis aligned with oncology treatment sequencing.",
    performance: "Updated hourly",
  },
  {
    title: "Home collection kits",
    detail:
      "Doorstep logistics for chronic care cohorts with same-day courier.",
    performance: "72 cities",
  },
];

const automation = [
  {
    title: "AI quality validation",
    description:
      "Analyzes raw lab outputs to flag anomalies before clinician review.",
  },
  {
    title: "Logistics command center",
    description:
      "Real-time routing of specimens with live temperature tracking.",
  },
  {
    title: "Therapy alignment",
    description:
      "Prep pharmacy updates when new lab thresholds trigger medication shifts.",
  },
];

export default function LabsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Diagnostics & Laboratory Network"
        subtitle="Coordinate advanced diagnostics, AI validation, and logistics for faster, smarter results."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <BeakerIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Featured lab partners
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Integrated contracts with real-time status, SLAs, and AI insights.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {labPartners.map((lab) => (
            <div
              key={lab.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {lab.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{lab.focus}</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#2D5F4F]">
                <span>{lab.turnaround}</span>
                <span className="rounded-[12px] bg-[#2D5F4F]/10 px-3 py-1">
                  {lab.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Workflow pipelines
            </h3>
            <ArrowUpRightIcon className="h-6 w-6 text-[#2D5F4F]" />
          </div>
          <ul className="space-y-3">
            {pipelines.map((pipeline) => (
              <li
                key={pipeline.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {pipeline.title}
                  </p>
                  <span className="pill">{pipeline.performance}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">
                  {pipeline.detail}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <TruckIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Logistics and automation
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Connected couriers, temperature monitoring, and automatic
                dispatching.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {automation.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-[16px] bg-[#F5F5F0] p-4"
              >
                <CpuChipIcon className="mt-1 h-6 w-6 text-[#2D5F4F]" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_12px_28px_rgba(45,95,79,0.3)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              AI flags critical values the moment they land
            </p>
            <p className="text-sm text-white/80">
              Escalations are routed to attending physicians and hospital teams
              with contextual insights and recommended actions.
            </p>
          </div>
          <button className="rounded-[16px] bg-white px-5 py-3 text-sm font-semibold text-[#2D5F4F]">
            View escalation matrix
          </button>
        </div>
      </Card>
    </div>
  );
}
