import Link from "next/link";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  SignalIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const metrics = [
  {
    title: "Care Score",
    value: "92",
    suffix: "/100",
    trend: "+4.1% this week",
    color: "text-[#4CAF50]",
  },
  {
    title: "Active Cases",
    value: "36",
    suffix: " patients",
    trend: "8 high priority",
    color: "text-[#6B4E3D]",
  },
  {
    title: "AI Recommendations",
    value: "24",
    suffix: " insights",
    trend: "6 awaiting review",
    color: "text-[#2D5F4F]",
  },
  {
    title: "Network Response",
    value: "18m",
    suffix: " avg SLA",
    trend: "Labs • Hospitals • Pharmacy",
    color: "text-[#90B8A8]",
  },
];

const careJourney = [
  {
    title: "Remote Monitoring",
    detail: "Continuous heart rhythm capture via Avicure Patch",
    time: "Live",
    accent: "bg-[#2D5F4F]/10 text-[#2D5F4F]",
  },
  {
    title: "Cardiology Review",
    detail: "AI triaged for cardiologist follow-up",
    time: "12:30 PM",
    accent: "bg-[#6B4E3D]/10 text-[#6B4E3D]",
  },
  {
    title: "Diagnostic Labs",
    detail: "Comprehensive metabolic panel scheduled",
    time: "Today, 4:00 PM",
    accent: "bg-[#90B8A8]/20 text-[#2D5F4F]",
  },
  {
    title: "Pharmacy Sync",
    detail: "Medication adherence status synced",
    time: "Tomorrow, 9:00 AM",
    accent: "bg-[#FF9800]/10 text-[#FF9800]",
  },
];

const insights = [
  {
    title: "AI detected variance in blood pressure trends",
    detail: "Recommend adjusting lisinopril dosage for patient cohort",
    tag: "Clinical",
  },
  {
    title: "Hospital capacity forecast reaching 78%",
    detail: "Transfer pathways with Mercy General optimized",
    tag: "Operations",
  },
  {
    title: "Patient satisfaction tracking at 4.8",
    detail: "Telehealth onboarding contributes +12% improvement",
    tag: "Experience",
  },
];

const network = [
  {
    icon: SignalIcon,
    title: "Hospital Connect",
    items: ["Mercy General", "Stanford Health", "Aurora West"],
  },
  {
    icon: UserGroupIcon,
    title: "Specialist Council",
    items: ["Cardiology", "Oncology", "Endocrinology", "Mental Health"],
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Live Conversations",
    items: [
      "Dr. Kumar ↔ Lab AI",
      "Patient Lydia ↔ Wellness coach",
      "Pharmacy dispatch ↔ RN Daniel",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Welcome back, Dr. Rivera"
        subtitle="Monitor patient journeys, coordinate the care network, and act on AI-powered clinical insights."
        action={
          <Link
            href="/appointments/new"
            className="flex items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(45,95,79,0.25)] transition hover:bg-[#264c40]"
          >
            New Care Plan
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="space-y-3">
            <p className="text-sm font-medium text-[#6B6B6B]">
              {metric.title}
            </p>
            <div className="flex items-end gap-1">
              <h2 className="text-4xl font-semibold text-[#1A1A1A]">
                {metric.value}
              </h2>
              <span className="pb-1 text-sm text-[#6B6B6B]">
                {metric.suffix}
              </span>
            </div>
            <p className={`text-xs font-semibold ${metric.color}`}>
              {metric.trend}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                Integrated Care Journey
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                AI orchestrated plan across monitoring, diagnostics, and
                recovery.
              </p>
            </div>
            <span className="pill">Live synchronization</span>
          </div>
          <ol className="space-y-4">
            {careJourney.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.05)]"
              >
                <div
                  className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] text-sm font-semibold ${item.accent}`}
                >
                  {item.time}
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#1A1A1A]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>

        <div className="space-y-6">
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                Smart Insights
              </h3>
              <span className="chip">AI powered</span>
            </div>
            <ul className="space-y-4">
              {insights.map((insight) => (
                <li
                  key={insight.title}
                  className="rounded-[16px] border border-[#E4E4DC] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-sm font-semibold text-[#2D5F4F]">
                    {insight.tag}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#1A1A1A]">
                    {insight.title}
                  </p>
                  <p className="mt-1 text-sm text-[#6B6B6B]">
                    {insight.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <CpuChipIcon className="h-8 w-8 text-[#2D5F4F]" />
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">
                  Clinical Copilot
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  Automated workflows learning from every interaction.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-[14px] bg-[#2D5F4F]/10 px-4 py-3">
                <span className="text-sm font-medium text-[#2D5F4F]">
                  Predictive risk scanning
                </span>
                <span className="text-xs font-semibold text-[#2D5F4F]">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between rounded-[14px] bg-[#90B8A8]/20 px-4 py-3">
                <span className="text-sm font-medium text-[#1A1A1A]">
                  Care coordination automation
                </span>
                <span className="text-xs font-semibold text-[#2D5F4F]">
                  Syncing
                </span>
              </div>
              <div className="flex items-center justify-between rounded-[14px] bg-[#6B4E3D]/10 px-4 py-3">
                <span className="text-sm font-medium text-[#1A1A1A]">
                  Patient engagement journeys
                </span>
                <span className="text-xs font-semibold text-[#6B4E3D]">
                  3 triggers
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1A1A1A]">
              Connected Care Network
            </h3>
            <p className="text-sm text-[#6B6B6B]">
              Unified operations with hospitals, labs, pharmacies, and care
              teams.
            </p>
          </div>
          <Link
            href="/analytics"
            className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] transition hover:bg-[#2D5F4F] hover:text-white"
          >
            View analytics
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {network.map((group) => (
            <div
              key={group.title}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <div className="flex items-center gap-3">
                <group.icon className="h-8 w-8 text-[#2D5F4F]" />
                <p className="text-base font-semibold text-[#1A1A1A]">
                  {group.title}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#6B6B6B]">
                {group.items.map((item) => (
                  <li key={item} className="rounded-[12px] bg-white/90 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1A1A1A]">
              Patient Sentiment Pulse
            </h3>
            <p className="text-sm text-[#6B6B6B]">
              Real-time experience monitoring across digital and in-person touch
              points.
            </p>
          </div>
          <span className="chip bg-[#4CAF50]/10 text-[#2D5F4F]">
            +12% vs last month
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[18px] bg-[#2D5F4F] p-6 text-white shadow-[0_10px_24px_rgba(45,95,79,0.25)]">
            <p className="text-sm text-white/70">Overall satisfaction</p>
            <p className="mt-3 text-4xl font-semibold">4.8</p>
            <p className="mt-2 text-sm text-white/80">
              Telehealth-first cohorts reporting highest improvement.
            </p>
          </div>
          <div className="space-y-3 rounded-[18px] bg-white p-6 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
            <p className="text-sm font-semibold text-[#6B4E3D]">
              Engagement drivers
            </p>
            <div className="space-y-2">
              {[
                "Proactive lab notifications",
                "Coordinated discharge planning",
                "Nutrition tele-coaching",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[12px] bg-[#F5F5F0] px-4 py-2 text-sm text-[#1A1A1A]"
                >
                  {item}
                  <SparklesIcon className="h-5 w-5 text-[#90B8A8]" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[18px] bg-[#FDF8F2] p-6 shadow-[0_6px_18px_rgba(255,152,0,0.2)]">
            <p className="text-sm font-semibold text-[#FF9800]">
              Watchlist signals
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#6B6B6B]">
              <li>Appointment follow-ups after 48h delay</li>
              <li>Pharmacy delivery exceptions</li>
              <li>High-risk chronic care transitions</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
