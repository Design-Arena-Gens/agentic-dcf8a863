import {
  ArrowRightIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const teamMembers = [
  {
    name: "Dr. Priya Kumar",
    role: "Cardiology Lead",
    focus: "Adaptive cardiac recovery program",
    status: "Online",
  },
  {
    name: "Dr. Henry Lawson",
    role: "Oncology Specialist",
    focus: "Targeted therapy optimization",
    status: "Reviewing labs",
  },
  {
    name: "Ella Martinez, RN",
    role: "Care Navigator",
    focus: "Home health coordination",
    status: "Available",
  },
  {
    name: "Jared Lee",
    role: "AI Care Analyst",
    focus: "Risk stratification insights",
    status: "Deploying models",
  },
];

const initiatives = [
  {
    title: "Chronic care redesign",
    detail:
      "360° collaboration with cardiology, primary care, and nutrition to reduce readmissions.",
    progress: "Milestone 3 of 5",
  },
  {
    title: "Precision oncology pathway",
    detail:
      "Genomic-informed treatment plans co-developed with lab and pharmacy teams.",
    progress: "Pilot cohort 28 patients",
  },
  {
    title: "Hospital-at-home expansion",
    detail:
      "Integrated remote monitoring and rapid response protocols across regions.",
    progress: "Scaling to 6 regions",
  },
];

const huddles = [
  {
    title: "Morning clinical stand-up",
    participants: 18,
    agenda: [
      "Escalate telemetry alerts",
      "Review resource allocation",
      "Assign follow-up actions",
    ],
  },
  {
    title: "Interdisciplinary tumor board",
    participants: 12,
    agenda: [
      "Genomic sequencing insights",
      "Clinical trial matching",
      "Therapy adjustments",
    ],
  },
  {
    title: "Patient experience council",
    participants: 9,
    agenda: [
      "Post-discharge feedback loops",
      "Community outreach programs",
      "Engagement metrics",
    ],
  },
];

export default function CareTeamPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Care Team Collaboration"
        subtitle="Coordinate multidisciplinary experts, shared care plans, and AI insights in one connected workspace."
        action={
          <button className="flex items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(45,95,79,0.25)] hover:bg-[#264c40]">
            Launch team huddle
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        }
      />

      <Card className="grid gap-4 sm:grid-cols-2">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-[#1A1A1A]">
                  {member.name}
                </p>
                <p className="text-sm text-[#6B6B6B]">{member.role}</p>
              </div>
              <span className="rounded-full bg-[#4CAF50]/15 px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                {member.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-[#6B6B6B]">{member.focus}</p>
          </div>
        ))}
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="h-8 w-8 text-[#2D5F4F]" />
            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                Strategic initiatives
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Shared accountability streams with measurable outcomes.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {initiatives.map((initiative) => (
              <li
                key={initiative.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {initiative.title}
                  </p>
                  <span className="pill">{initiative.progress}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">{initiative.detail}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <HeartIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                Daily coordination huddles
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                AI auto-prepares agendas and pushes action items to the network.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {huddles.map((huddle) => (
              <li
                key={huddle.title}
                className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-semibold text-[#1A1A1A]">
                      {huddle.title}
                    </p>
                    <p className="text-xs text-[#6B6B6B]">
                      {huddle.participants} participants
                    </p>
                  </div>
                  <UserIcon className="h-6 w-6 text-[#2D5F4F]" />
                </div>
                <ul className="mt-3 space-y-1 text-sm text-[#6B6B6B]">
                  {huddle.agenda.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2D5F4F]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="flex flex-col gap-4 rounded-[22px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">
            Signal human needs faster with co-pilot summaries
          </p>
          <p className="text-sm text-[#6B6B6B]">
            AI synthesizes context from patient updates, messages, and monitor
            alerts to brief the right expert instantly.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
          Open conversation hub
          <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
        </button>
      </Card>
    </div>
  );
}

