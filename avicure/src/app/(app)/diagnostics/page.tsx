import {
  ArrowRightIcon,
  BeakerIcon,
  CameraIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const imaging = [
  {
    name: "AI Spine MRI Reconstruction",
    detail: "Reduces scan time 40% with higher resolution output.",
    status: "FDA cleared",
  },
  {
    name: "Low-dose CT Screening",
    detail: "Early cancer detection with predictive interpretation.",
    status: "Active",
  },
  {
    name: "EchoFlow 4D Ultrasound",
    detail: "Real-time cardiology imaging in tele-consults.",
    status: "Pilot",
  },
];

const pathways = [
  {
    title: "Critical lab -> Specialist escalation",
    steps: ["Result arrives", "AI summary", "Physician alerted", "Care plan"],
  },
  {
    title: "Radiology review workflow",
    steps: [
      "Imaging synced",
      "AI annotation",
      "Consult board",
      "Patient briefing",
    ],
  },
  {
    title: "Genomic interpretation",
    steps: [
      "Sequence processed",
      "Variant flagged",
      "Therapy evaluated",
      "Pharmacy sync",
    ],
  },
];

const knowledge = [
  {
    title: "Precision diagnostics library",
    description:
      "Best practice protocols, study references, and clinical implementation tips.",
  },
  {
    title: "AI interpretation audit trail",
    description:
      "Transparent rationale for each automated suggestion with clinician feedback loops.",
  },
  {
    title: "Cross-discipline case reviews",
    description:
      "Share and learn from complex cases across cardiology, oncology, and neurology.",
  },
];

export default function DiagnosticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Diagnostics Intelligence"
        subtitle="Accelerate discovery with AI-enhanced imaging, lab orchestration, and collaborative interpretation."
        action={
          <button className="flex items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(45,95,79,0.25)] hover:bg-[#264c40]">
            Upload studies
            <CloudArrowUpIcon className="h-5 w-5" />
          </button>
        }
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <CameraIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Imaging excellence
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              AI-boosted diagnostics across MRI, CT, ultrasound, and oncology.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {imaging.map((item) => (
            <div
              key={item.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {item.name}
              </p>
              <p className="mt-2 text-sm text-[#6B6B6B]">{item.detail}</p>
              <span className="mt-3 inline-flex rounded-[12px] bg-white px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <BeakerIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Diagnostic pathways
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Every test orchestrated into actionable care steps.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="rounded-[18px] border border-[#E4E4DC] bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {pathway.title}
                  </p>
                  <ArrowRightIcon className="h-5 w-5 text-[#2D5F4F]" />
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#6B6B6B]">
                  {pathway.steps.map((step, index) => (
                    <span
                      key={step}
                      className="rounded-[12px] bg-[#F5F5F0] px-3 py-1 text-[#2D5F4F]"
                    >
                      {index + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ChartBarIcon className="h-8 w-8 text-[#2D5F4F]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Knowledge + governance
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Transparency, learning, and compliance built into diagnostics.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {knowledge.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <DocumentTextIcon className="mt-1 h-6 w-6 text-[#6B4E3D]" />
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

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Interpretations ready in minutes
            </p>
            <p className="text-sm text-white/80">
              AI drafts findings, specialists apply judgment, and patients
              receive understandable summaries.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            View case queue
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}

