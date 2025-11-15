import {
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const circles = [
  {
    name: "Heart Thrive Collective",
    members: 186,
    focus: "Cardiac recovery inspiration and safe exercise guidance.",
    facilitator: "Coach Elena • Cardiologist Dr. Kumar",
  },
  {
    name: "Oncology Resilience Group",
    members: 142,
    focus: "Navigating treatment effects and emotional health.",
    facilitator: "RN Harper • Therapist Aya",
  },
  {
    name: "Diabetes Lifestyle Crew",
    members: 203,
    focus: "Meal planning, stress, and movement accountability.",
    facilitator: "Nutritionist Leo • Endocrinologist Dr. Chen",
  },
];

const liveEvents = [
  {
    title: "Evening mindfulness reset",
    host: "Behavioral health team",
    time: "Today, 7:00 PM",
    capacity: "35 spots left",
  },
  {
    title: "Cardio cooking workshop",
    host: "Nutrition studio",
    time: "Tomorrow, 6:00 PM",
    capacity: "Streamed + recorded",
  },
  {
    title: "Caregiver roundtable",
    host: "Community advocates",
    time: "Fri, 12:00 PM",
    capacity: "Invite only",
  },
];

const initiatives = [
  {
    title: "Neighborhood health ambassadors",
    detail:
      "Train local champions to extend Avicure support into communities.",
  },
  {
    title: "Digital equity program",
    detail:
      "Provide devices, connectivity, and training for telehealth readiness.",
  },
  {
    title: "Shared stories library",
    detail: "Curated patient journeys to inspire and educate peers.",
  },
];

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Community & Engagement"
        subtitle="Create supportive ecosystems that pair clinical care with human connection and shared wisdom."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <UserGroupIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Care circles
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Moderated groups blending patient voice with clinical guidance.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {circles.map((circle) => (
            <div
              key={circle.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {circle.name}
              </p>
              <p className="text-xs font-semibold text-[#2D5F4F]">
                {circle.members} members
              </p>
              <p className="mt-2 text-sm text-[#6B6B6B]">{circle.focus}</p>
              <p className="mt-3 text-xs text-[#6B6B6B]">{circle.facilitator}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Live events
            </h3>
            <span className="chip">Hybrid</span>
          </div>
          <ul className="space-y-3">
            {liveEvents.map((event) => (
              <li
                key={event.title}
                className="flex items-center justify-between rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {event.title}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">
                    {event.host} • {event.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="rounded-[12px] bg-[#F5F5F0] px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                    {event.capacity}
                  </p>
                  <button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#6B4E3D] hover:underline">
                    RSVP
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <MegaphoneIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Community initiatives
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Extend impact beyond clinical walls.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {initiatives.map((initiative) => (
              <li
                key={initiative.title}
                className="rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {initiative.title}
                </p>
                <p className="text-sm text-[#6B6B6B]">{initiative.detail}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="flex flex-col gap-4 rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">
            Stories power healing
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Copilot curates uplifting narratives and resources tailored to each
            patient&apos;s journey.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
          Share a story
          <HeartIcon className="h-5 w-5" />
        </button>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Compassion-driven, data-informed community care
            </p>
            <p className="text-sm text-white/80">
              Empower patients, families, and clinicians with shared insight and
              mutual encouragement.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            Launch engagement studio
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}

