import {
  BellAlertIcon,
  ChartBarIcon,
  CloudArrowDownIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const alerts = [
  {
    type: "Critical lab escalation",
    detail: "Troponin levels flagged for Amelia James • Cardiology on-call notified.",
    time: "2 minutes ago",
    priority: "High",
  },
  {
    type: "Remote monitoring insight",
    detail: "Arrhythmia variance detected for Isaiah Woods • Telemetry review requested.",
    time: "7 minutes ago",
    priority: "High",
  },
  {
    type: "Follow-up reminder",
    detail: "Telehealth summary pending physician sign-off • Dr. Lawson",
    time: "15 minutes ago",
    priority: "Medium",
  },
  {
    type: "Patient satisfaction survey",
    detail: "HCAHPS feedback ready for review • 12 responses",
    time: "28 minutes ago",
    priority: "Low",
  },
];

const channels = [
  {
    title: "Clinical escalations",
    description: "Urgent signals routed to physicians, nurses, and specialists.",
    icon: ExclamationTriangleIcon,
    status: "Always on",
  },
  {
    title: "Operations + logistics",
    description: "Capacity, scheduling, and transfer updates for care teams.",
    icon: ChartBarIcon,
    status: "Standard",
  },
  {
    title: "Compliance & safety",
    description: "Regulatory changes, audits, and security alerts.",
    icon: ShieldCheckIcon,
    status: "Priority",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Notifications Center"
        subtitle="Stay ahead of critical clinical alerts, operational updates, and experience signals."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <BellAlertIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Real-time alerts
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              AI prioritizes what needs attention, reducing noise for clinicians.
            </p>
          </div>
        </div>
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li
              key={alert.type}
              className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-[#E4E4DC] bg-white p-4"
            >
              <div>
                <p className="text-base font-semibold text-[#1A1A1A]">
                  {alert.type}
                </p>
                <p className="text-sm text-[#6B6B6B]">{alert.detail}</p>
              </div>
              <span
                className={`rounded-[12px] px-3 py-1 text-xs font-semibold ${
                  alert.priority === "High"
                    ? "bg-[#F44336]/15 text-[#F44336]"
                    : alert.priority === "Medium"
                    ? "bg-[#FF9800]/15 text-[#FF9800]"
                    : "bg-[#2D5F4F]/10 text-[#2D5F4F]"
                }`}
              >
                {alert.priority}
              </span>
              <p className="text-xs font-semibold text-[#6B6B6B]">
                {alert.time}
              </p>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {channels.map((channel) => (
          <Card
            key={channel.title}
            className="space-y-4 rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
          >
            <channel.icon className="h-8 w-8 text-[#2D5F4F]" />
            <div>
              <p className="text-base font-semibold text-[#1A1A1A]">
                {channel.title}
              </p>
              <p className="text-sm text-[#6B6B6B]">{channel.description}</p>
            </div>
            <span className="rounded-[12px] bg-white px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
              {channel.status}
            </span>
          </Card>
        ))}
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Fine-tune your signal preferences
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Choose channels, escalation paths, and quiet hours for every role.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Download preferences
            <CloudArrowDownIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}

