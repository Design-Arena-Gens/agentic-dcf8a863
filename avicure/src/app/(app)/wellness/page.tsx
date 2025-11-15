import {
  ArrowTrendingUpIcon,
  FireIcon,
  HeartIcon,
  MoonIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const programs = [
  {
    name: "Cardio Revive",
    focus: "Post-heart event lifestyle coaching",
    enrollment: "312 patients",
    status: "Active",
  },
  {
    name: "Metabolic Reset",
    focus: "Nutrition + endocrinology digital program",
    enrollment: "487 patients",
    status: "Cohort onboarding",
  },
  {
    name: "Mindful Recovery",
    focus: "Behavioral health and resilience training",
    enrollment: "269 patients",
    status: "Tele-coaching",
  },
];

const metrics = [
  { label: "Average activity gain", value: "+22%", icon: FireIcon },
  { label: "Sleep quality score", value: "4.6 / 5", icon: MoonIcon },
  { label: "Nutrition adherence", value: "78%", icon: HeartIcon },
];

const community = [
  {
    title: "Care circles",
    detail: "Moderated peer groups for chronic conditions and recovery phases.",
  },
  {
    title: "Wellness concierge",
    detail: "Personalized support connecting medical and lifestyle services.",
  },
  {
    title: "Mind-body studio",
    detail: "Guided mindfulness, movement, and mental resilience sessions.",
  },
];

export default function WellnessPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Wellness & Lifestyle Navigation"
        subtitle="Bridge clinical excellence with holistic wellness programs, community support, and digital coaching."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <SparklesIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Signature programs
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Personalized tracks blending clinical protocols with wellness
              expertise.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {program.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{program.focus}</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#2D5F4F]">
                <span>{program.enrollment}</span>
                <span className="rounded-[12px] bg-white px-3 py-1">
                  {program.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Impact metrics
            </h3>
            <span className="chip">AI blended</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[16px] bg-[#F5F5F0] p-4 text-center shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <metric.icon className="mx-auto h-6 w-6 text-[#2D5F4F]" />
                <p className="mt-2 text-2xl font-semibold text-[#1A1A1A]">
                  {metric.value}
                </p>
                <p className="text-xs text-[#6B6B6B]">{metric.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <UserGroupIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Community ecosystem
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Human connection meets intelligent support.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {community.map((item) => (
              <li
                key={item.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {item.title}
                </p>
                <p className="text-sm text-[#6B6B6B]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Habit intelligence nudges at the right moment
            </p>
            <p className="text-sm text-[#6B6B6B]">
              AI uses biometric and contextual signals to recommend micro-habits
              patients can stick with.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Design habit loop
            <ArrowTrendingUpIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}

