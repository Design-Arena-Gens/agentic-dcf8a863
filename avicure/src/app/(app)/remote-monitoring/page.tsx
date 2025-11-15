import {
  ArrowTrendingDownIcon,
  BoltIcon,
  CpuChipIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const devices = [
  {
    name: "Avicure Patch",
    metric: "Cardiac rhythm • Respiratory rate",
    coverage: "1,248 patients",
    status: "Live sync",
  },
  {
    name: "Glucose Loop",
    metric: "Continuous glucose monitoring",
    coverage: "782 patients",
    status: "AI calibrated",
  },
  {
    name: "Recovery Band",
    metric: "Mobility • Sleep • Activity",
    coverage: "1,102 patients",
    status: "Coaching active",
  },
];

const alerts = [
  {
    patient: "Isaiah Woods",
    signal: "Arrhythmia pattern detected",
    severity: "High",
    action: "Escalated to cardiology",
  },
  {
    patient: "Mei Lin",
    signal: "Glucose lows trending",
    severity: "Medium",
    action: "Nutrition consult scheduled",
  },
  {
    patient: "Sofia Reyes",
    signal: "Mobility drop post-surgery",
    severity: "Medium",
    action: "PT televisit initiated",
  },
];

const insights = [
  {
    title: "Heart failure cohort risk falling",
    data: "-14% readmission probability with continuous patch adherence.",
  },
  {
    title: "Sleep recovery improving",
    data: "Average 58 minutes more restorative sleep after supportive coaching.",
  },
  {
    title: "Movement goals achieved",
    data: "82% of patients met activity milestones aided by adaptive nudges.",
  },
];

export default function RemoteMonitoringPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Remote Monitoring Insights"
        subtitle="Track connected devices, AI insights, and proactive interventions across the care continuum."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <WifiIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Device fleet status
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Real-time connectivity, coverage, and AI-assisted coaching.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {devices.map((device) => (
            <div
              key={device.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {device.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{device.metric}</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#2D5F4F]">
                <span>{device.coverage}</span>
                <span className="rounded-[12px] bg-white px-3 py-1">
                  {device.status}
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
              Escalation queue
            </h3>
            <span className="chip">Live</span>
          </div>
          <ul className="space-y-3">
            {alerts.map((alert) => (
              <li
                key={alert.patient}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {alert.patient}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">{alert.signal}</p>
                </div>
                <span
                  className={`rounded-[12px] px-3 py-1 text-xs font-semibold ${
                    alert.severity === "High"
                      ? "bg-[#F44336]/15 text-[#F44336]"
                      : "bg-[#FF9800]/15 text-[#FF9800]"
                  }`}
                >
                  {alert.severity}
                </span>
                <p className="text-xs font-semibold text-[#2D5F4F]">
                  {alert.action}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <CpuChipIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                AI-generated insights
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Predictive analytics for population health and individual care.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {insights.map((insight) => (
              <li
                key={insight.title}
                className="rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {insight.title}
                </p>
                <p className="text-sm text-[#6B6B6B]">{insight.data}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="flex flex-col gap-4 rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">
            Prevent readmissions with proactive nudges
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Personalized messaging, home visit triggers, and coaching sequences
            adapt to each patient&apos;s real-time data.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
          Configure nudges
          <BoltIcon className="h-5 w-5" />
        </button>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Population risk trending downward
            </p>
            <p className="text-sm text-white/80">
              AI surfaces cohort-level reductions and suggests reinforcement
              strategies to sustain outcomes.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-[18px] bg-white/10 px-5 py-3 text-center">
              <p className="text-xs text-white/70">Risk reduction</p>
              <p className="text-3xl font-semibold">-21%</p>
            </div>
            <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
              View population report
              <ArrowTrendingDownIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
