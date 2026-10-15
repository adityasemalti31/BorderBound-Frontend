import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  ShieldCheck,
  Trophy,
  Users,
  Vote,
  AlertTriangle,
  RefreshCcw,
  Scale,
  FileText,
  LockKeyhole,
} from "lucide-react";

const rules = [
  {
    number: "01",
    title: "Who Can Receive Votes",
    icon: Users,
    content: (
      <>
        <p>
          Only contestants whose profiles have been approved and published by
          THE BORDERBOUND will be eligible to receive public votes.
        </p>

        <p>
          A registration does not automatically guarantee eligibility for
          voting.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Voting Period",
    icon: CalendarDays,
    content: (
      <>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-500">
              Voting Opens
            </div>
            <div className="mt-2 text-lg font-black text-white">
              15 October 2026
            </div>
          </div>

          <div className="rounded-xl border border-red-500/15 bg-red-500/[0.035] p-4">
            <div className="text-[9px] font-black uppercase tracking-[0.18em] text-red-400">
              Voting Closes
            </div>
            <div className="mt-2 text-lg font-black text-white">
              15 November 2026
            </div>
          </div>
        </div>

        <p>
          Votes submitted after the official closing time will not be counted.
        </p>

        <p>
          The Organizer may display a countdown on the official website for
          reference. The server-recorded closing time will be treated as final.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Vote Value",
    icon: CreditCard,
    content: (
      <>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.045] p-6 text-center">
          <div className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            ₹5 <span className="text-red-500">=</span> 1 Vote
          </div>

          <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-zinc-400">
            Each successfully completed ₹5 voting transaction represents one
            vote for the selected contestant.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-xs font-black uppercase tracking-[0.16em] text-white">
            Unlimited Voting
          </h4>

          <p className="mt-2">
            Eligible users may purchase and cast multiple votes, subject to the
            applicable payment, verification and anti-fraud rules.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "04",
    title: "How to Vote",
    icon: Vote,
    content: (
      <div className="space-y-3">
        {[
          "Visit the official THE BORDERBOUND website.",
          "Open the Cast Vote section.",
          "Select the contestant you wish to support.",
          "Select the number of votes.",
          "Complete the applicable payment.",
          "After successful payment confirmation, the valid votes will be credited to the selected contestant.",
          "The updated voting position will appear on the official leaderboard, subject to processing and verification.",
        ].map((step, index) => (
          <div
            key={step}
            className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/[0.08] text-[10px] font-black text-red-400">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="!mt-0 self-center text-xs leading-6 text-zinc-300">
              {step}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "05",
    title: "Payment Confirmation",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          A vote is considered successfully submitted only after the payment
          has been successfully processed and the voting system confirms the
          transaction.
        </p>

        <div className="mt-5 rounded-xl border border-amber-500/15 bg-amber-500/[0.035] p-5">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />

            <p className="!mt-0 text-xs leading-6 text-zinc-300">
              A failed, cancelled, reversed or unsuccessful payment will not
              create valid votes.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "06",
    title: "Official Leaderboard",
    icon: Trophy,
    content: (
      <>
        <p>The official website may display:</p>

        <ul className="mt-4 space-y-3">
          {[
            "Contestant ranking",
            "Vote count",
            "Position",
            "Other relevant voting information",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-xs text-zinc-300"
            >
              <CheckCircle2 className="h-4 w-4 text-red-500" />
              {item}
            </li>
          ))}
        </ul>

        <p>
          Leaderboard positions may change throughout the voting period.
        </p>

        <p>
          The displayed leaderboard is provisional until final verification is
          completed.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Invalid / Fraudulent Votes",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          THE BORDERBOUND reserves the right to investigate and reject votes
          that appear to be:
        </p>

        <ul className="mt-5 space-y-3">
          {[
            "Fraudulently generated",
            "Generated through unauthorised means",
            "Associated with payment abuse",
            "Resulting from technical manipulation",
            "Obtained through exploitation of system vulnerabilities",
            "Otherwise inconsistent with the official Voting Rules",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-xs leading-6 text-zinc-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              {item}
            </li>
          ))}
        </ul>

        <p>
          Invalid votes may be removed from a contestant&apos;s total.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Top 32 + Wild Card Eligibility",
    icon: Trophy,
    content: (
      <>
        <div className="rounded-xl border border-red-500/15 bg-red-500/[0.035] p-5">
          <h4 className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Top 32
          </h4>

          <p className="mt-3">
            The highest-ranking eligible contestants after final vote
            validation will qualify for the direct selection pool for THE
            BORDERBOUND, subject to the final official selection mechanism.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5">
          <h4 className="text-xs font-black uppercase tracking-[0.16em] text-white">
            Top 50
          </h4>

          <p className="mt-3">
            Contestants ranking within the designated Top 50 may remain eligible
            for the Wild Card selection process, subject to the official Wild
            Card rules.
          </p>
        </div>

        <p className="text-[11px] text-zinc-500">
          The exact Wild Card mechanism will be communicated through the
          official website and/or official show announcements.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Voting Errors & Technical Issues",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          If a payment is deducted but the corresponding votes are not
          credited, the user should retain the payment confirmation or
          transaction reference and contact the official support team.
        </p>

        <p>
          The Organizer may investigate transaction records and system logs to
          resolve genuine discrepancies.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Refunds",
    icon: RefreshCcw,
    content: (
      <>
        <p>
          Voting purchases are subject to the official Refund & Cancellation
          Policy.
        </p>

        <p>
          Once a valid vote has been successfully credited, it cannot ordinarily
          be transferred to another contestant or converted into votes for
          another contestant.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Changes to Voting",
    icon: Clock3,
    content: (
      <>
        <p>
          THE BORDERBOUND may make reasonable changes to the voting interface,
          technical process or operational procedure where required.
        </p>

        <p>
          Any material change affecting the voting process will be communicated
          through the official website or official communication channels.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Organizer's Decision",
    icon: Scale,
    content: (
      <>
        <p>
          The Organizer&apos;s determination regarding vote validity,
          eligibility and final verification, based on the applicable rules and
          available transaction/system records, will be final, subject to
          applicable law.
        </p>
      </>
    ),
  },
];

export default function VotingRulesPage() {
  return (
    <main className="min-h-screen bg-[#080809] text-white">
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.07] blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-40 h-80 w-80 rounded-full bg-red-500/[0.05] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to The BorderBound
          </Link>

          <div className="mx-auto mt-14 max-w-4xl text-center sm:mt-20">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-red-500" />

              <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
                <LockKeyhole className="h-3.5 w-3.5" />
                Official Voting Policy
              </span>

              <span className="h-px w-10 bg-gradient-to-l from-transparent to-red-500" />
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Voting
              <br />
              <span className="text-red-500">Rules.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              THE BORDERBOUND — Official Public Voting
            </p>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-6 text-zinc-500">
              Please read these rules carefully before purchasing votes.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.025] px-4 py-3">
                <CalendarDays className="h-4 w-4 text-red-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-zinc-300">
                  15 Oct — 20 Nov 2026
                </span>
              </div>

              <div className="flex items-center gap-2 border border-red-500/20 bg-red-500/[0.05] px-4 py-3">
                <Vote className="h-4 w-4 text-red-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-zinc-300">
                  ₹5 = 1 Vote
                </span>
              </div>

              {/* <div className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.025] px-4 py-3">
                <Users className="h-4 w-4 text-zinc-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-zinc-300">
                  Unlimited Voting
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="space-y-4">
          {rules.map(
            ({ number, title, icon: Icon, content }) => (
              <article
                key={number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.03]"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-red-600/[0.045] blur-[80px] transition-all duration-500 group-hover:bg-red-600/[0.08]" />

                <div className="relative grid gap-6 p-6 sm:grid-cols-[90px_1fr] sm:p-8">
                  <div className="flex items-start gap-4 sm:block">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-red-500">
                      {number}
                    </span>
                  </div>

                  <div>

                    <div className="flex gap-2 items-center">

                   
                    <h2 className="text-base font-black uppercase tracking-[0.05em] text-white sm:text-lg">
                      {title} 
                    </h2>
                     <div className="mt-0 flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/15 bg-red-500/[0.05] text-red-400 sm:mt-5">
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </div>

                     </div>

                   

                    <div className="mt-5 space-y-4 text-xs leading-7 text-zinc-400 sm:text-sm">
                      {content} 
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-red-500 to-transparent transition-all duration-500 group-hover:w-1/3" />
              </article>
            )
          )}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-[1100px] px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500/60" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
                THE BORDERBOUND
              </span>

              <span className="h-px w-8 bg-gradient-to-l from-transparent to-red-500/60" />
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl">
              Every Vote
              <br />
              <span className="text-red-500">Moves The Line.</span>
            </h2>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400 sm:flex-row sm:gap-7">
              <span>Voting Opens — 15 October 2026</span>
              <span className="hidden h-1 w-1 rounded-full bg-red-500 sm:block" />
              <span>Voting Closes — 20 November 2026</span>
              <span className="hidden h-1 w-1 rounded-full bg-red-500 sm:block" />
              <span className="text-red-400">₹5 = 1 Vote</span>
            </div>

            <Link
              href="/vote"
              className="group mx-auto mt-9 inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_45px_rgba(220,38,38,0.3)]"
            >
              Cast Your Vote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
            <FileText className="h-3.5 w-3.5" />
            Official Policies
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link
              href="/voting-rules"
              className="text-[9px] font-black uppercase tracking-[0.14em] text-red-400 transition-colors hover:text-red-300"
            >
              Voting Rules
            </Link>

            <Link
              href="/terms"
              className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/refund-cancellation"
              className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-white"
            >
              Refund & Cancellation Policy
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}