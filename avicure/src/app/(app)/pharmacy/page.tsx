import {
  ArrowUpRightIcon,
  ClockIcon,
  CubeIcon,
  HomeIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const fulfillment = [
  {
    name: "PrecisionRx",
    focus: "Specialty oncology + biologics",
    status: "Cold-chain active",
    eta: "Same-day metro",
  },
  {
    name: "CareFlow Pharmacy",
    focus: "Chronic care synchronizations",
    status: "Adherence program",
    eta: "24h national",
  },
  {
    name: "CommunityMed",
    focus: "Local pickup partners",
    status: "Curbside ready",
    eta: "2h radius",
  },
];

const automations = [
  {
    title: "Therapy adherence pulse",
    detail:
      "AI monitors wearable and symptom journals to detect gaps in medication usage.",
    indicator: "4 alerts open",
  },
  {
    title: "Prior authorization autopilot",
    detail:
      "Completes insurer forms with chart data and tracks approvals across payers.",
    indicator: "92% auto-approved",
  },
  {
    title: "Formulary optimization",
    detail:
      "Recommends cost-effective alternatives without clinical compromise.",
    indicator: "$680 avg saved",
  },
];

const delivery = [
  {
    mode: "Courier dispatch",
    detail: "Temperature-controlled vans with live tracking.",
    progress: "22 en route",
  },
  {
    mode: "Home hub lockers",
    detail: "Secure patient pick-up with biometric verification.",
    progress: "47 lockers used",
  },
  {
    mode: "Hospital bedside",
    detail: "Meds to beds service for discharge readiness.",
    progress: "12 orders today",
  },
];

export default function PharmacyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Pharmacy & Therapeutics"
        subtitle="Synchronize medication therapy management, automations, and logistics for every patient."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <CubeIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Fulfillment partners
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Integrated distribution across specialty, retail, and digital
              pharmacies.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {fulfillment.map((item) => (
            <div
              key={item.name}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <p className="text-base font-semibold text-[#1A1A1A]">
                {item.name}
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">{item.focus}</p>
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#2D5F4F]">
                <span>{item.status}</span>
                <span className="rounded-[12px] bg-[#2D5F4F]/10 px-3 py-1">
                  {item.eta}
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
              Intelligent therapy automation
            </h3>
            <SparklesIcon className="h-7 w-7 text-[#6B4E3D]" />
          </div>
          <ul className="space-y-3">
            {automations.map((automation) => (
              <li
                key={automation.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {automation.title}
                  </p>
                  <span className="pill">{automation.indicator}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">
                  {automation.detail}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <TruckIcon className="h-8 w-8 text-[#2D5F4F]" />
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Delivery orchestration
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Ensure timely supply with unified routing intelligence.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {delivery.map((item) => (
              <li
                key={item.mode}
                className="flex items-center justify-between rounded-[16px] bg-[#F5F5F0] px-4 py-3 text-sm text-[#1A1A1A]"
              >
                <div>
                  <p className="font-semibold">{item.mode}</p>
                  <p className="text-xs text-[#6B6B6B]">{item.detail}</p>
                </div>
                <span className="rounded-[12px] bg-white px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                  {item.progress}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="flex flex-col gap-4 rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">
            Monitor transitions from hospital to home
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Medication schedules, home instructions, and remote care kits
            aligned before patients leave the facility.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
          Review discharge queue
          <HomeIcon className="h-5 w-5" />
        </button>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Predict refill needs before gaps emerge
            </p>
            <p className="text-sm text-white/80">
              Copilot forecasts utilization and secures insurance approvals with
              zero touch.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25">
            Open refill dashboard
            <ClockIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <button className="flex w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#2D5F4F]/50 bg-[#F5F5F0] px-4 py-6 text-sm font-semibold text-[#2D5F4F] hover:border-[#2D5F4F] hover:text-[#1A1A1A]">
        Connect new pharmacy partner
        <ArrowUpRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

