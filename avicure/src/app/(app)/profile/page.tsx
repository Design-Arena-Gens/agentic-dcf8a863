import {
  AcademicCapIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const expertise = [
  "Cardiology & heart failure",
  "AI-assisted diagnostics",
  "Telehealth leadership",
  "Community health design",
];

const highlights = [
  {
    label: "Care score impact",
    value: "+27%",
    detail: "Improved patient outcomes across chronic cohorts.",
  },
  {
    label: "Average rating",
    value: "4.9",
    detail: "Patient feedback across 642 encounters.",
  },
  {
    label: "Research publications",
    value: "18",
    detail: "Cardiovascular AI and digital health studies.",
  },
];

const credentials = [
  {
    title: "Board certified in cardiology",
    organization: "American Board of Internal Medicine",
    year: "2015",
  },
  {
    title: "Digital health leadership fellowship",
    organization: "Stanford Digital Health",
    year: "2019",
  },
  {
    title: "Clinical AI Advisor",
    organization: "Avicure Council",
    year: "2022",
  },
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dr. Maria Rivera"
        subtitle="Chief Medical Officer • Cardiology Lead • Advocate for compassionate, AI-empowered care."
      />

      <Card className="flex flex-col gap-6 rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-[24px] border border-[#E4E4DC]">
            <Image
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=240&q=80"
              alt="Dr. Rivera"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1A1A1A]">
              “Every patient deserves a coordinated, human experience.”
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Leading Avicure&apos;s clinical strategy across hospitals, labs,
              and remote care.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-4 py-2 text-sm font-semibold text-[#2D5F4F] hover:bg-[#2D5F4F] hover:text-white">
          Share profile
          <ArrowUpRightIcon className="h-5 w-5" />
        </button>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <SparklesIcon className="h-7 w-7 text-[#2D5F4F]" />
            <p className="text-lg font-semibold text-[#1A1A1A]">
              Signature expertise
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span
                key={item}
                className="rounded-[12px] bg-[#F5F5F0] px-3 py-1.5 text-xs font-semibold text-[#2D5F4F]"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <StarIcon className="h-7 w-7 text-[#6B4E3D]" />
            <p className="text-lg font-semibold text-[#1A1A1A]">Highlights</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[16px] bg-[#F5F5F0] p-4 text-center shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
              >
                <p className="text-xs text-[#6B6B6B]">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-[#1A1A1A]">
                  {item.value}
                </p>
                <p className="text-[11px] text-[#6B6B6B]">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <AcademicCapIcon className="h-7 w-7 text-[#2D5F4F]" />
          <p className="text-lg font-semibold text-[#1A1A1A]">Credentials</p>
        </div>
        <ul className="space-y-3">
          {credentials.map((credential) => (
            <li
              key={credential.title}
              className="flex items-center justify-between rounded-[16px] border border-[#E4E4DC] bg-white p-4"
            >
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {credential.title}
                </p>
                <p className="text-xs text-[#6B6B6B]">
                  {credential.organization}
                </p>
              </div>
              <span className="rounded-[12px] bg-[#F5F5F0] px-3 py-1 text-xs font-semibold text-[#2D5F4F]">
                {credential.year}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="rounded-[24px] bg-[#2D5F4F] p-6 text-white shadow-[0_14px_32px_rgba(45,95,79,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Publications & speaking engagements
            </p>
            <p className="text-sm text-white/80">
              Explore Dr. Rivera&apos;s research on AI cardiology, integrated
              care delivery, and patient-first innovation.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-[16px] bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
            View media kit
            <DocumentTextIcon className="h-5 w-5" />
          </button>
        </div>
      </Card>

      <button className="flex w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#2D5F4F]/40 bg-[#F5F5F0] px-4 py-6 text-sm font-semibold text-[#2D5F4F] hover:border-[#2D5F4F] hover:text-[#1A1A1A]">
        Update professional profile
        <BriefcaseIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

