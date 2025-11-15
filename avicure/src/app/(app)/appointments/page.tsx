import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

const upcoming = [
  {
    patient: "Lydia Powell",
    specialty: "Cardiology",
    datetime: "Today, 2:00 PM",
    type: "In-person",
    location: "Mercy General, Suite 420",
  },
  {
    patient: "Noah Chen",
    specialty: "Endocrinology",
    datetime: "Today, 4:30 PM",
    type: "Virtual",
    location: "Avicure Telehealth",
  },
  {
    patient: "Amelia James",
    specialty: "Oncology",
    datetime: "Tomorrow, 9:15 AM",
    type: "In-person",
    location: "Aurora West Cancer Center",
  },
];

const careTracks = [
  {
    title: "Virtual Cross-Discipline Board",
    detail:
      "Trio conference connecting primary physician, cardiologist, and dietician.",
    time: "Thu, 10:30 AM",
  },
  {
    title: "Remote Rehab Session",
    detail:
      "Guided PT routine with live biometrics from home monitoring kit.",
    time: "Fri, 1:00 PM",
  },
  {
    title: "Advanced Imaging Review",
    detail: "MRI findings auto-summarized and queued for radiation consult.",
    time: "Mon, 3:15 PM",
  },
];

const automation = [
  {
    title: "Dynamic rescheduling",
    description:
      "AI proposes ideal slots when diagnostics or referrals shift timelines.",
    state: "Active",
  },
  {
    title: "Eligibility verification",
    description:
      "Insurance authorizations confirmed 3 days in advance across networks.",
    state: "4 pending",
  },
  {
    title: "Transportation coordination",
    description:
      "Rideshare and hospital transit arranged for mobility-limited patients.",
    state: "Synced",
  },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Appointments & Care Logistics"
        subtitle="Orchestrate every encounter with AI-assisted scheduling, capacity planning, and patient readiness."
        action={
          <Link
            href="/appointments/new"
            className="flex items-center gap-2 rounded-[16px] border border-[#2D5F4F] px-5 py-3 text-sm font-semibold text-[#2D5F4F] transition hover:bg-[#2D5F4F] hover:text-white"
          >
            Build visit plan
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Upcoming appointments
            </h2>
            <span className="chip">Live updates</span>
          </div>
          <ul className="space-y-4">
            {upcoming.map((item) => (
              <li
                key={`${item.patient}-${item.datetime}`}
                className="flex flex-wrap items-center justify-between gap-4 rounded-[16px] bg-[#F5F5F0] px-5 py-4 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.05)]"
              >
                <div>
                  <p className="text-lg font-semibold text-[#1A1A1A]">
                    {item.patient}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">
                    {item.specialty} • {item.type}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <ClockIcon className="h-5 w-5 text-[#2D5F4F]" />
                  {item.datetime}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
                  <MapPinIcon className="h-5 w-5 text-[#6B4E3D]" />
                  {item.location}
                </div>
                <Link
                  href="/telehealth"
                  className="text-sm font-semibold text-[#2D5F4F] hover:underline"
                >
                  View prep
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[#1A1A1A]">
              Intelligent automations
            </h3>
            <VideoCameraIcon className="h-8 w-8 text-[#2D5F4F]" />
          </div>
          <div className="space-y-3">
            {automation.map((item) => (
              <div
                key={item.title}
                className="rounded-[16px] border border-[#E4E4DC] bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-[#1A1A1A]">
                    {item.title}
                  </p>
                  <span className="pill">{item.state}</span>
                </div>
                <p className="mt-2 text-sm text-[#6B6B6B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1A1A1A]">
              Coordinated care tracks
            </h3>
            <p className="text-sm text-[#6B6B6B]">
              Multi-specialty sessions planned with lab, hospital, and rehab
              teams.
            </p>
          </div>
          <Link
            href="/care-team"
            className="flex items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#264c40]"
          >
            Open care board
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {careTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-[18px] bg-[#F5F5F0] p-5 shadow-[inset_0_0_0_1px_rgba(45,95,79,0.08)]"
            >
              <p className="text-sm font-semibold text-[#6B4E3D]">
                {track.time}
              </p>
              <p className="mt-2 text-base font-semibold text-[#1A1A1A]">
                {track.title}
              </p>
              <p className="mt-2 text-sm text-[#6B6B6B]">{track.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

