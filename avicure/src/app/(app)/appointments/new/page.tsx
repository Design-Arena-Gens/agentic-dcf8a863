import { ArrowLeftIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const steps = [
  {
    title: "Patient context",
    detail: "Vitals, history, goals, and preferences pulled automatically.",
    status: "Complete",
  },
  {
    title: "Scheduling intelligence",
    detail: "Optimized slot suggestions with travel and specialist availability.",
    status: "Ready",
  },
  {
    title: "Care plan alignment",
    detail: "Sync labs, imaging, pharmacy, and follow-up pathways.",
    status: "Pending",
  },
];

export default function NewAppointmentPage() {
  return (
    <div className="space-y-8">
      <Link
        href="/appointments"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D5F4F] hover:underline"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to appointments
      </Link>
      <PageHeader
        title="Build a coordinated visit plan"
        subtitle="Create a seamless experience from scheduling through follow-up with Avicure Copilot."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <ClipboardDocumentListIcon className="h-7 w-7 text-[#2D5F4F]" />
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Guided workflow
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Each step is auto-filled with AI insights yet fully editable.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center justify-between rounded-[16px] border border-[#E4E4DC] bg-white p-4"
            >
              <div>
                <p className="text-xs font-semibold text-[#6B6B6B]">
                  Step {index + 1}
                </p>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {step.title}
                </p>
                <p className="text-sm text-[#6B6B6B]">{step.detail}</p>
              </div>
              <span className="rounded-[12px] bg-[#F5F5F0] px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                {step.status}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full rounded-[16px] bg-[#2D5F4F] py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(45,95,79,0.25)] hover:bg-[#264c40]">
          Continue with Copilot
        </button>
      </Card>
    </div>
  );
}

