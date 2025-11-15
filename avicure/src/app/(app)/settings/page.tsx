import {
  BellIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  MoonIcon,
  PencilSquareIcon,
  Square2StackIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const preferences = [
  {
    title: "Clinical notifications",
    description: "Escalate critical alerts instantly while batching routine updates.",
    icon: BellIcon,
    status: "Smart routing",
  },
  {
    title: "Workspace theme",
    description: "Light, dark, and high contrast palettes tuned for long shifts.",
    icon: MoonIcon,
    status: "Adaptive",
  },
  {
    title: "AI copilot prompts",
    description: "Customize tone, level of detail, and clinical emphasis.",
    icon: PencilSquareIcon,
    status: "Personalized",
  },
];

const security = [
  {
    title: "Multi-factor authentication",
    detail: "Biometric + secure device verification.",
    icon: FingerPrintIcon,
  },
  {
    title: "Session governance",
    detail: "Auto-lock after 8 minutes idle • cross-device logout.",
    icon: LockClosedIcon,
  },
  {
    title: "Access delegation",
    detail: "Delegate roles with expiring privileges for rotating shifts.",
    icon: Square2StackIcon,
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings & Personalization"
        subtitle="Shape Avicure around your specialty, working style, and security standards."
      />

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <Cog6ToothIcon className="h-8 w-8 text-[#2D5F4F]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Workspace preferences
            </h2>
            <p className="text-sm text-[#6B6B6B]">
              Configure how the platform looks, feels, and communicates with you.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {preferences.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.06)]"
            >
              <item.icon className="h-7 w-7 text-[#2D5F4F]" />
              <p className="mt-2 text-base font-semibold text-[#1A1A1A]">
                {item.title}
              </p>
              <p className="text-sm text-[#6B6B6B]">{item.description}</p>
              <p className="mt-3 text-xs font-semibold text-[#2D5F4F]">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <SunIcon className="h-8 w-8 text-[#6B4E3D]" />
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Security & governance
            </h3>
            <p className="text-sm text-[#6B6B6B]">
              Protect patient privacy and maintain institutional compliance.
            </p>
          </div>
        </div>
        <ul className="space-y-3">
          {security.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 rounded-[16px] border border-[#E4E4DC] bg-white p-4"
            >
              <item.icon className="mt-1 h-6 w-6 text-[#2D5F4F]" />
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {item.title}
                </p>
                <p className="text-sm text-[#6B6B6B]">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

