import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  FileText,
  AlertTriangle,
  ShieldCheck,
  XCircle,
} from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | THE BORDERBOUND",
  description:
    "Read the official THE BORDERBOUND Refund & Cancellation Policy covering registration fees, voting purchases, failed payments, duplicate transactions and technical payment issues.",
  alternates: {
    canonical: "/refund-cancellation-policy",
  },
};

const sections = [
  {
    number: "01",
    title: "ALL PAYMENTS ARE FINAL",
    icon: CreditCard,
    content: (
      <>
        <p>
          All successfully completed payments made through the official
          THE BORDERBOUND website are final and non-refundable, subject to any
          rights that cannot legally be excluded under applicable law.
        </p>

        <p className="mt-6">This includes:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Contestant registration fees</Bullet>
          <Bullet>Public voting purchases</Bullet>
          <Bullet>Multiple vote purchases</Bullet>
          <Bullet>
            Any other paid service clearly identified as non-refundable before
            payment
          </Bullet>
        </ul>

        <Notice>
          Once a payment has been successfully processed, the user cannot
          request a cancellation or refund merely because they have changed
          their mind.
        </Notice>
      </>
    ),
  },
  {
    number: "02",
    title: "REGISTRATION FEES",
    icon: FileText,
    content: (
      <>
        <p>
          Once a registration fee has been successfully paid, the registration
          cannot be cancelled and the registration fee will not be refunded.
        </p>

        <p className="mt-6">This applies even if the applicant later:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Decides not to participate</Bullet>
          <Bullet>Becomes unavailable</Bullet>
          <Bullet>Is not selected</Bullet>
          <Bullet>Does not qualify for public voting</Bullet>
          <Bullet>Does not enter the Top 32</Bullet>
          <Bullet>Does not receive a Wild Card</Bullet>
          <Bullet>Changes their mind after registration</Bullet>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "VOTING PURCHASES",
    icon: CreditCard,
    content: (
      <>
        <p>
          All successfully credited votes are final and non-refundable.
        </p>

        <p className="mt-6">Once votes have been credited to a contestant:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>They cannot be cancelled</Bullet>
          <Bullet>They cannot be transferred to another contestant</Bullet>
          <Bullet>They cannot be exchanged for another service</Bullet>
          <Bullet>They cannot be converted back into money</Bullet>
        </ul>

        <Notice>
          Users should carefully verify the selected contestant and number of
          votes before completing payment.
        </Notice>
      </>
    ),
  },
  {
    number: "04",
    title: "WRONG CONTESTANT SELECTED",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          If a user voluntarily purchases votes for the wrong contestant, the
          transaction will not be transferred to another contestant and will
          not be refunded.
        </p>

        <p className="mt-5 font-bold text-zinc-300">
          Please verify your selection before confirming payment.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "FAILED PAYMENT",
    icon: XCircle,
    content: (
      <>
        <p>
          A payment that is not successfully completed will not create valid
          registration or voting credits.
        </p>

        <p className="mt-6">
          If money has been debited from a user's bank, card or account despite
          the transaction being unsuccessful and the corresponding service has
          not been delivered, the user should contact the official support team
          with the transaction or reference details.
        </p>

        <p className="mt-5">
          The transaction will be investigated and handled in accordance with
          applicable payment-system and legal requirements.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "DUPLICATE TRANSACTIONS",
    icon: CreditCard,
    content: (
      <>
        <p>
          If a user believes that the same payment was charged more than once
          due to a technical error, they should contact official support and
          provide the relevant transaction references.
        </p>

        <p className="mt-5">
          The Organizer may investigate the payment records and system logs.
        </p>

        <p className="mt-5">
          Any genuine payment-processing error will be handled in accordance
          with applicable law and the relevant payment provider's process.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "NO REFUND FOR NON-SELECTION",
    icon: XCircle,
    content: (
      <>
        <p>
          Payment for registration provides access to the registration or
          application process. It does not constitute a guarantee of selection.
        </p>

        <p className="mt-6">Therefore, no refund will be provided because an applicant:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Does not qualify</Bullet>
          <Bullet>Receives insufficient valid votes</Bullet>
          <Bullet>Is outside the Top 32</Bullet>
          <Bullet>Does not receive a Wild Card</Bullet>
          <Bullet>Is eliminated</Bullet>
          <Bullet>Does not ultimately participate in the main show</Bullet>
        </ul>
      </>
    ),
  },
  {
    number: "08",
    title: "NO REFUND FOR VOTING OUTCOME",
    icon: ShieldCheck,
    content: (
      <>
        <p>Purchasing votes does not guarantee:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>A particular ranking</Bullet>
          <Bullet>Selection</Bullet>
          <Bullet>Top 32 qualification</Bullet>
          <Bullet>Wild Card qualification</Bullet>
          <Bullet>Participation in the main show</Bullet>
        </ul>

        <Notice>
          A voting purchase is a contribution to the published voting
          mechanism and is not a purchase of a guaranteed competition outcome.
        </Notice>
      </>
    ),
  },
  {
    number: "09",
    title: "TECHNICAL ISSUES",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          If a payment is successfully debited but the purchased registration
          or votes are not delivered because of a technical issue, the user
          should contact official support immediately with the relevant
          transaction information.
        </p>

        <p className="mt-6">Where available, users should provide:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Transaction ID</Bullet>
          <Bullet>Payment reference</Bullet>
          <Bullet>Date and time</Bullet>
          <Bullet>Registered mobile or email, where applicable</Bullet>
          <Bullet>Relevant screenshot or payment confirmation</Bullet>
        </ul>

        <p className="mt-6">
          The Organizer will investigate the transaction.
        </p>

        <p className="mt-5">
          Where a payment-processing error is confirmed, the matter will be
          resolved through the applicable payment-provider and legal process.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "CONTACT BEFORE PAYMENT",
    icon: FileText,
    content: (
      <>
        <p>
          Because payments are non-refundable, users are encouraged to review
          the following documents before completing a transaction:
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <PolicyLink
            href="/terms"
            label="TERMS & CONDITIONS"
          />

          <PolicyLink href="/voting-rules" label="VOTING RULES" />

          <PolicyLink href="/privacy" label="PRIVACY POLICY" />

          <PolicyLink
            href="/refund-cancellation-policy"
            label="REFUND & CANCELLATION POLICY"
          />
        </div>
      </>
    ),
  },
];

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-7 text-zinc-400">
      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-red-500" />
      <span>{children}</span>
    </li>
  );
}

function Notice({ children }) {
  return (
    <div className="mt-7 border border-red-500/20 bg-red-500/[0.04] p-5">
      <div className="flex items-start gap-3">
        <CheckCircle2
          size={17}
          className="mt-1 shrink-0 text-red-500"
        />
        <p className="text-sm leading-7 text-zinc-300">{children}</p>
      </div>
    </div>
  );
}

function PolicyLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 border border-white/10 bg-white/[0.025] px-4 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-400 transition-all hover:border-red-500/30 hover:bg-red-500/[0.04] hover:text-white"
    >
      <span>{label}</span>

      <ArrowUpRight
        size={14}
        className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export default function RefundCancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back To Home
          </Link>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-red-500/20 bg-red-500/[0.05] px-4 py-2">
              <CreditCard size={13} className="text-red-500" />

              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-red-400">
                Official Payment Policy
              </span>
            </div>

            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-red-500">
              THE BORDERBOUND
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              REFUND &
              <span className="block text-zinc-500">
                CANCELLATION POLICY
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              <span>Last Updated: 28 September 2026</span>

              <span className="hidden h-1 w-1 bg-red-500 sm:block" />

              <span>Official THE BORDERBOUND Website</span>
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              Please read this policy carefully before completing a
              registration or voting transaction on THE BORDERBOUND.
            </p>

            <div className="mt-8 border-l-2 border-red-600 bg-white/[0.025] px-5 py-5">
              <p className="text-sm font-bold leading-7 text-zinc-300">
                Successful payments are final and non-refundable, except where
                a refund or other remedy is required by applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[250px_1fr] lg:gap-12">
          {/* DESKTOP CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border border-white/5 bg-white/[0.015] p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-red-500">
                Contents
              </p>

              <div className="mt-5 space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#section-${section.number}`}
                    className="flex gap-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-600 transition-colors hover:text-white"
                  >
                    <span className="text-red-500">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* SECTIONS */}
          <div className="space-y-4">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-24 border border-white/5 bg-white/[0.015] p-6 sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03]">
                      <Icon size={18} className="text-zinc-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[9px] font-black tracking-[0.2em] text-red-500">
                          {section.number}
                        </span>

                        <h2 className="text-lg font-black uppercase tracking-[-0.01em] text-white sm:text-xl">
                          {section.title}
                        </h2>
                      </div>

                      <div className="mt-6 text-sm leading-7 text-zinc-400">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANT ACKNOWLEDGEMENT */}
      <section className="border-y border-red-500/10 bg-red-500/[0.025]">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-red-500/20 bg-red-500/[0.06]">
            <ShieldCheck size={22} className="text-red-500" />
          </div>

          <p className="mt-7 text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
            IMPORTANT
          </p>

          <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
            PAYMENT CONFIRMATION
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
            By completing a payment, you acknowledge that you have read and
            accepted this Refund & Cancellation Policy.
          </p>

          <div className="mx-auto mt-8 max-w-3xl border border-white/10 bg-black/20 px-5 py-5">
            <p className="text-xs font-black uppercase leading-6 tracking-[0.12em] text-zinc-300 sm:text-sm">
              Successful payments are final and non-refundable, except where a
              refund or other remedy is required by applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
            THE BORDERBOUND
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.03em] text-white sm:text-5xl">
            EVERYONE HAS A BOUNDARY.
            <span className="block text-zinc-500">
              THE GAME BEGINS WHEN YOU CROSS IT.
            </span>
          </h2>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-red-500"
            >
              Register Now

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/voting-rules"
              className="group inline-flex items-center justify-center gap-3 border border-white/10 bg-white/[0.03] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              View Voting Rules

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* LEGAL NOTICE */}
      <section className="border-t border-white/5 bg-black/20">
        <div className="mx-auto max-w-4xl px-5 py-10 text-center sm:px-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
            Legal Notice
          </p>

          <p className="mt-4 text-xs leading-6 text-zinc-600">
            This policy should be reviewed by qualified legal counsel before
            launch and should match the actual payment gateway, refund process,
            voting mechanism and applicable legal requirements.
          </p>
        </div>
      </section>
    </main>
  );
}