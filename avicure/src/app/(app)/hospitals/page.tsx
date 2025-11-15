import {
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  MapIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const facilities = [
  {
    name: "Mercy General Medical Center",
    programs: ["Cardiac ICU", "Stroke center", "Hospital-at-home"],
    capacity: "78% occupancy",
    focus: "Acute cardiac & neuro care",
  },
  {
    name: "Aurora West Health",
    programs: ["Oncology Pavilion", "Robotic surgery", "Post-acute rehab"],
    capacity: "64% occupancy",
    focus: "Precision oncology & recovery",
  },
  {
    name: "Stanford Health Network",
    programs: ["Advanced imaging", "Clinical trials", "Transplant services"],
    capacity: "71% occupancy",
    focus: "Tertiary & quaternary care",
  },
];

const operations = [
  {
    title: "Bed management synchronization",
    detail:
      "AI predicts discharges and admissions to balance demand across partnered hospitals.",
    status: "Live",
  },
  {
    title: "Surgical block optimization",
    detail:
      "Operating room schedules align with specialist availability and patient readiness.",
    status: "In review",
  },
  {
    title: "Transition of care automation",
    detail:
      "Discharge instructions and community resources shared instantly with patients.",
    status: "Scaling",
  },
];

const analytics = [
  {
    label: "Readmission risk reduced",
    value: "18%",
    context: "Across chronic heart failure cohort",
  },
  {
    label: "Average length of stay",
    value: "3.2 days",
    context: "Down 0.6 days with proactive monitoring",
  },
  {
    label: "Experience rating",
    value: "4.7 / 5",
    context: "Driven by seamless discharge handoffs",
  },
];

export default function HospitalsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Hospital Integration"
        subtitle="Real-time bed visibility, care coordination, and predictive planning across health systems."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <BuildingOffice2Icon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Partner facilities
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Connected hospital networks with live capacity and specialist
              routing.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {facility.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-[#2D5F4F]">
                {facility.capacity}
              </p>
              <p className="mt-2 text-sm text-[#6B6B6B]">{facility.focus}</p>
              <ul className="mt-3 space-y-1 text-xs text-[#6B6B6B]">
                {facility.programs.map((program) => (
                  <li key={program} className="rounded-[12px] bg-white/90 px-3 py-1">
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <PresentationChartLineIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Operational command center
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Key workflows automated for throughput and safety.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {operations.map((operation) => (
              <li
                key={operation.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {operation.title}
                  </p>
                  <span className="pill">{operation.status}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">
                  {operation.detail}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Performance insights
            </h3>
            <ArrowTrendingUpIcon className="h-6 w-6 text-[#2D5F4F]" />
          </div>
          <div className="space-y-3">
            {analytics.map((item) => (
              <div
                key={item.label}
                className="rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-xs font-semibold text-[#6B6B6B]">
                  {item.label}
                </p>
                <p className="text-2xl font-semibold text-[#1A1A1A]">
                  {item.value}
                </p>
                <p className="text-xs text-[#6B6B6B]">{item.context}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Visualize coverage and referral pathways
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Geographic intelligence highlights gaps and optimizes transfer
              routes across the Avicure ecosystem.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Open regional view
            <MapIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <Card className="flex flex-col gap-4 rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold">
            Safety and compliance tracked automatically
          </p>
          <p className="text-sm text-white/80">
            Joint Commission and CMS metrics monitored with real-time alerts and
            recommended actions.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
          View accreditation dashboard
          <ShieldCheckIcon className="h-5 w-5" />
        </button>
      </Card>
    </div>
  );
}

