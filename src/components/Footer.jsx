import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Trophy,
  Users,
  Vote,
  FileText,
  Scale,
  CreditCard,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import logo from "../../public/logo2.png";
import Image from "next/image";

export default function Footer() {
  const timeline = [
    {
      date: "05 OCT",
      title: "Registration Opens",
      active: true,
    },
    {
      date: "15 OCT",
      title: "Public Voting Opens",
      active: false,
    },
    {
      date: "31 OCT",
      title: "Fee Changes",
      active: false,
      detail: "₹499 → ₹1,499",
    },
    {
      date: "15 NOV",
      title: "Registration Closes",
      active: false,
    },
    {
      date: "20 NOV",
      title: "Voting Closes",
      active: false,
    },
  ];

  const quickLinks = [
    ["Home", "/"],
    ["Leaderboard", "/leaderboard"],
    ["Register", "/register"],
    ["Support a Contestant", "/register/supporting"],
  ];

  const legalLinks = [
    {
      label: "Terms & Conditions",
      href: "/terms",
      icon: FileText,
    },
    {
      label: "Voting Rules",
      href: "/voting-rules",
      icon: Vote,
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
      icon: ShieldCheck,
    },
    {
      label: "Refund & Cancellation",
      href: "/refund-cancellation-policy",
      icon: CreditCard,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#030303] text-zinc-400">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Timeline */}
        <div className="border-b border-white/[0.07] py-14 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-red-500" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-400">
                  Official Protocol
                </span>
              </div>

              <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-white sm:text-3xl">
                BorderBound Timeline
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-5 text-zinc-400 sm:text-sm">
                India chooses who gets the opportunity. The BorderBound decides
                who survives it.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-full border border-red-500/15 bg-red-500/[0.04] px-4 py-2.5 lg:self-auto">
              <Users className="h-4 w-4 text-red-400" />

              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-300 sm:text-[10px]">
                32 Initial + 04 Wild Cards
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className="group relative flex gap-4 border-b border-white/[0.07] py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0 lg:border-r lg:border-white/[0.07] lg:py-2 lg:first:pl-0 lg:last:border-r-0"
              >
                {index < timeline.length - 1 && (
                  <div className="absolute bottom-0 left-[7px] top-[42px] hidden w-px bg-white/[0.07] sm:block lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:h-px lg:w-8" />
                )}

                <div className="relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-red-500/40 bg-[#030303]">
                  <span className="h-1 w-1 rounded-full bg-red-500" />
                </div>

                <div>
                  <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-red-400">
                    {item.date}
                  </div>

                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.04em] text-zinc-200">
                    {item.title}
                  </div>

                  {item.detail && (
                    <div className="mt-1 text-[10px] text-zinc-500">
                      {item.detail}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3"
            >
              <div>
                <Image
                  src={logo}
                  alt="The BorderBound"
                  width={140}
                  height={100}
                />
              </div>
            </Link>

            <p className="mt-6 max-w-md text-xs leading-6 text-zinc-400 sm:text-sm">
              A real-time outdoor reality competition where registration, public
              voting, strategy and performance decide who gets to cross the
              border.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2">
                <Users className="h-3.5 w-3.5 text-red-400" />

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                  32 Contestants
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2">
                <Vote className="h-3.5 w-3.5 text-amber-400" />

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                  ₹5 / Vote
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-5 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              Navigate
            </div>

            <div className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between text-xs font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  <span>{label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              <Scale className="h-3.5 w-3.5 text-red-400" />
              Legal & Policies
            </div>

            <div className="space-y-3">
              {legalLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between gap-3 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-red-400" />
                    {label}
                  </span>

                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Trust + Contact */}
          <div>
            <div className="mb-5 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              Trust & Verification
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <div>
                  <div className="text-xs font-bold text-zinc-200">
                    Secure Payments
                  </div>

                  <div className="mt-1 text-[10px] leading-4 text-zinc-500">
                    Payments processed through a secure gateway.
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Vote className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />

                <div>
                  <div className="text-xs font-bold text-zinc-200">
                    Verified Voting
                  </div>

                  <div className="mt-1 text-[10px] leading-4 text-zinc-500">
                    Only valid successfully processed votes count.
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />

                <div>
                  <div className="text-xs font-bold text-zinc-200">
                    Public Leaderboard
                  </div>

                  <div className="mt-1 text-[10px] leading-4 text-zinc-500">
                    Voting positions remain publicly visible.
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Contact
                </div>

                <div className="space-y-3">
                  <a
                    href="mailto:coachailaan@gmail.com"
                    className="group flex items-center gap-3 text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-red-400" />

                    <span className="break-all">coachailaan@gmail.com</span>
                  </a>

                  <a
                    href="mailto:admin@theborderbound.in"
                    className="group flex items-center gap-3 text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-red-400" />

                    <span className="break-all">admin@theborderbound.in</span>
                  </a>

                  <a
                    href="tel:+919183204329"
                    className="group flex items-center gap-3 text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-red-400" />

                    <span>+91 91832 04329</span>
                  </a>
                </div>
              </div>
              {/* Address */}
              <div className="mt-5 border-t border-white/[0.07] pt-5">
                <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Registered Location
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02]">
                    <span className="text-[11px] text-red-400">
                      <MapPin />
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-zinc-200">
                      Hyderabad, India
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-zinc-500">
                      Official BorderBound correspondence location.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/[0.07] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
            © {new Date().getFullYear()} The BorderBound. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/terms"
              className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Terms
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              href="/voting-rules"
              className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Voting Rules
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              href="/privacy"
              className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Privacy
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              href="/refund-cancellation-policy"
              className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Refunds
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-red-500" />

            <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-zinc-500">
              Official Registration & Voting Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
