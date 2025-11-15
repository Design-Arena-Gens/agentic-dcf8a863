import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
  FireIcon,
  MapPinIcon,
  RadioIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const responseTeams = [
  {
    name: "Rapid Response Unit",
    coverage: "Inpatient",
    members: "12 clinicians",
    status: "Ready in 2 min",
  },
  {
    name: "Tele-emergency Command",
    coverage: "Remote facilities",
    members: "Cardiology • Neurology • Trauma",
    status: "Live",
  },
  {
    name: "Community Crisis Network",
    coverage: "Home & community",
    members: "Paramedics • Social workers • Mental health",
    status: "On standby",
  },
];

const incidents = [
  {
    label: "STEMI activation",
    detail: "Patient inbound via EMS • Cath lab prepped • Cardiologist en route.",
    time: "3 minutes ago",
    escalation: "Code Red",
  },
  {
    label: "Stroke protocol",
    detail: "CT imaging reserved • Neurology teleconsult awaits arrival.",
    time: "7 minutes ago",
    escalation: "Code Gold",
  },
  {
    label: "Sepsis watchlist",
    detail: "AI flagged vitals in ward 3B • Rapid labs ordered.",
    time: "14 minutes ago",
    escalation: "Code Amber",
  },
];

const readiness = [
  {
    title: "Bed + ICU availability",
    stat: "83% ready",
    detail: "Real-time capacity sync with partner hospitals.",
  },
  {
    title: "Blood supply",
    stat: "Full spectrum",
    detail: "Fresh plasma shipment confirmed this morning.",
  },
  {
    title: "Emergency kits",
    stat: "92% deployed",
    detail: "Restocking remote clinics this afternoon.",
  },
];

export default function EmergencyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Emergency Coordination"
        subtitle="Command center for critical events, ensuring rapid response across hospitals, EMS, and remote teams."
        action={
          <button className="flex items-center gap-2 rounded-[16px] bg-[#F44336] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(244,67,54,0.35)] hover:bg-[#d7372b]">
            Trigger code activation
            <ExclamationTriangleIcon className="h-5 w-5" />
          </button>
        }
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <RadioIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Response teams
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Unified dispatch of clinical, EMS, and tele-emergency squads.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {responseTeams.map((team) => (
            <div
              key={team.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {team.name}
              </p>
              <p className="text-xs font-semibold text-[#2D5F4F]">
                {team.coverage}
              </p>
              <p className="mt-2 text-sm text-[#6B6B6B]">{team.members}</p>
              <p className="mt-3 rounded-[12px] bg-white px-3 py-1 text-xs font-semibold text-[#6B4E3D]">
                {team.status}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Live incidents
            </h3>
            <span className="chip">Critical stream</span>
          </div>
          <ul className="space-y-3">
            {incidents.map((incident) => (
              <li
                key={incident.label}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {incident.label}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">{incident.detail}</p>
                </div>
                <span className="rounded-[12px] bg-[#F44336]/15 px-3 py-1 text-xs font-semibold text-[#F44336]">
                  {incident.escalation}
                </span>
                <p className="text-xs font-semibold text-[#6B6B6B]">
                  {incident.time}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="h-8 w-8 text-[#6B4E3D]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Readiness dashboard
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Track lifesaving supplies and capacity across the network.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {readiness.map((item) => (
              <li
                key={item.title}
                className="rounded-[16px] bg-[#F5F5F0] p-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {item.title}
                </p>
                <p className="text-xl font-semibold text-[#2D5F4F]">
                  {item.stat}
                </p>
                <p className="text-xs text-[#6B6B6B]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Coordinate with EMS in seconds
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Share vitals, pickup coordinates, and hospital status in one pane.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
            Open EMS link
            <MapPinIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Practice saves lives
            </p>
            <p className="text-sm text-white/80">
              Run simulations, document learnings, and strengthen joint response.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            Schedule drill
            <FireIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <button className="flex w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#F44336]/40 bg-[#FFF4F2] px-4 py-6 text-sm font-semibold text-[#F44336] hover:border-[#F44336] hover:bg-[#FFE4E1]">
        Review incident archive
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

