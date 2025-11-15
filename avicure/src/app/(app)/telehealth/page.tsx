import {
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  CameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SignalIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const sessions = [
  {
    patient: "Ethan Morales",
    specialty: "Cardiac rehab coaching",
    time: "Live • 12 mins elapsed",
    status: "Vitals streaming",
  },
  {
    patient: "Sana Patel",
    specialty: "Oncology consultation",
    time: "Starts in 24 mins",
    status: "Interpreter reserved",
  },
  {
    patient: "Liam Brooks",
    specialty: "Behavioral health therapy",
    time: "Today, 5:00 PM",
    status: "Care plan synced",
  },
];

const resources = [
  {
    title: "Adaptive video quality",
    detail:
      "Optimized bandwidth for rural regions with AI to maintain clarity on clinical details.",
  },
  {
    title: "Integrated interpreter services",
    detail:
      "One-tap access to language or ASL support scheduled alongside visits.",
  },
  {
    title: "Clinical whiteboarding",
    detail:
      "Shared annotations and imaging overlays synchronized into the patient chart.",
  },
];

const automations = [
  {
    title: "Pre-visit readiness check",
    signal: "Complete",
    detail: "Device, consent, and environment scanning for each patient.",
  },
  {
    title: "Session summarization",
    signal: "Auto-drafted",
    detail: "Structured SOAP notes ready for clinician approval.",
  },
  {
    title: "Follow-up routing",
    signal: "Coordinated",
    detail: "Post-visit tasks sent to labs, pharmacy, and care navigation.",
  },
];

export default function TelehealthPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Telehealth Command Center"
        subtitle="Deliver virtual care with AI assistance, remote device streaming, and seamless handoffs."
        action={
          <button className="flex items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(45,95,79,0.25)] hover:bg-[#264c40]">
            Start instant visit
            <CameraIcon className="h-5 w-5" />
          </button>
        }
      />

      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Active & upcoming sessions
          </h2>
          <span className="chip">Auto-synced</span>
        </div>
        <ul className="space-y-3">
          {sessions.map((session) => (
            <li
              key={session.patient}
              className="flex flex-wrap items-center justify-between gap-4 rounded-[16px] bg-[#F5F5F0] px-4 py-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <div>
                <p className="text-base font-semibold text-[#1A1A1A]">
                  {session.patient}
                </p>
                <p className="text-sm text-[#6B6B6B]">{session.specialty}</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-[#2D5F4F]">
                <SignalIcon className="h-5 w-5" />
                {session.time}
              </div>
              <span className="rounded-[12px] bg-white px-3 py-1 text-xs font-semibold text-[#6B4E3D]">
                {session.status}
              </span>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#2D5F4F] hover:underline">
                Enter room
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <AdjustmentsHorizontalIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Experience enhancements
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Tailored settings to deliver compassionate digital care.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {resources.map((resource) => (
              <li
                key={resource.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <p className="text-base font-semibold text-[#1A1A1A]">
                  {resource.title}
                </p>
                <p className="mt-2 text-sm text-[#6B6B6B]">{resource.detail}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-[#2D5F4F]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Automation signals
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                AI orchestrates all steps before, during, and after the visit.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {automations.map((automation) => (
              <li
                key={automation.title}
                className="flex items-start gap-4 rounded-[16px] bg-[#F5F5F0] p-4"
              >
                <UserCircleIcon className="mt-1 h-7 w-7 text-[#2D5F4F]" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      {automation.title}
                    </p>
                    <span className="rounded-[12px] bg-white px-3 py-1 text-[11px] font-semibold text-[#2D5F4F]">
                      {automation.signal}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B6B6B]">{automation.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Compassionate digital bedside manner
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Avicure trains clinicians on remote rapport signals and suggests
              supportive language in real time.
            </p>
          </div>
          <button className="rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Open coaching studio
          </button>
        </div>
      </Card>
    </div>
  );
}

