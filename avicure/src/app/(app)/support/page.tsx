import {
  ArrowRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  LifebuoyIcon,
  PhoneArrowUpRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const channels = [
  {
    name: "Concierge Care Team",
    detail: "Guides patients through appointments, referrals, and resources.",
    availability: "24/7",
  },
  {
    name: "Clinical Support Line",
    detail: "Rapid medical triage with nurse navigators and specialists.",
    availability: "Live 6m avg response",
  },
  {
    name: "Digital Navigator",
    detail: "Tech setup, telehealth readiness, and accessibility assistance.",
    availability: "Every day 7 AM - 11 PM",
  },
];

const requests = [
  {
    title: "MRI results interpretation",
    status: "In progress",
    owner: "Radiology Copilot",
    eta: "18 minutes",
  },
  {
    title: "Specialty referral follow-up",
    status: "Queued",
    owner: "Care Coordination",
    eta: "45 minutes",
  },
  {
    title: "Medication side effect review",
    status: "Live chat",
    owner: "Pharmacy Support",
    eta: "Now",
  },
];

const knowledge = [
  "Access personalized guidance for financial aid and transportation.",
  "Understand test results with plain-language explanations.",
  "Connect caregivers with burnout and stress resilience resources.",
];

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Support & Advocacy"
        subtitle="The Avicure care concierge ensures patients and families feel supported at every step."
        action={
          <button className="flex items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(45,95,79,0.25)] hover:bg-[#264c40]">
            Request live assistance
            <PhoneArrowUpRightIcon className="h-5 w-5" />
          </button>
        }
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <LifebuoyIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Concierge channels
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Dedicated teams blending clinical, emotional, and logistical
              support.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {channel.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{channel.detail}</p>
              <p className="mt-3 text-xs font-semibold text-[#2D5F4F]">
                {channel.availability}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Active support requests
            </h3>
            <span className="chip">Realtime</span>
          </div>
          <ul className="space-y-3">
            {requests.map((request) => (
              <li
                key={request.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {request.title}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">{request.owner}</p>
                </div>
                <span className="rounded-[12px] bg-[#F5F5F0] px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                  {request.status}
                </span>
                <p className="text-xs font-semibold text-[#6B4E3D]">
                  ETA {request.eta}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Knowledge + empowerment
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Copilot prepares compassionate, actionable guidance.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {knowledge.map((tip) => (
              <li
                key={tip}
                className="rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-sm text-[#1A1A1A]">{tip}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Compassion, not complexity
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Every support interaction is recorded, transcribed, and fed back
              into quality improvement loops.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Review transcripts
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Emotional and mental wellbeing reinforced
            </p>
            <p className="text-sm text-white/80">
              Pair patients with therapists, support groups, and coping
              resources tailored to their experience.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            Open resilience hub
            <HeartIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <button className="flex w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#2D5F4F]/40 bg-[#F5F5F0] px-4 py-6 text-sm font-semibold text-[#2D5F4F] hover:border-[#2D5F4F] hover:text-[#1A1A1A]">
        View support analytics
        <SparklesIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

