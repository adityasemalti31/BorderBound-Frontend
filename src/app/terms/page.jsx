import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Scale,
  CreditCard,
  Users,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | THE BORDERBOUND",
  description:
    "Read the official Terms & Conditions governing registration, participation, payments, public voting and the THE BORDERBOUND competition.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    number: "01",
    title: "ABOUT THE BORDERBOUND",
    icon: Users,
    content: (
      <p>
        THE BORDERBOUND is an outdoor reality competition involving physical,
        mental and strategic challenges, Gang Leaders, gangs, voting,
        eliminations, alliances, powers and other game mechanics.
        <br />
        <br />
        The show is currently planned as a 15-day outdoor competition featuring
        32 main contestants and 4 Gang Leaders.
        <br />
        <br />
        The format may include additional challenges, twists, Wild Card
        opportunities and strategic mechanisms as described in the official
        show rules.
      </p>
    ),
  },
  {
    number: "02",
    title: "CONTESTANT ELIGIBILITY",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          A person may register for THE BORDERBOUND if they satisfy the
          applicable eligibility requirements.
        </p>

        <div className="mt-6 space-y-5">
          <InfoBlock title="AGE">
            Applicants must be at least 16 years old and not more than 35 years
            old at the applicable eligibility date specified by the Organizer.
          </InfoBlock>

          <InfoBlock title="NATIONALITY / RESIDENCE">
            Applications are open to:
            <ul className="mt-3 space-y-2">
              <Bullet>Indian citizens</Bullet>
              <Bullet>NRIs</Bullet>
              <Bullet>OCI cardholders</Bullet>
            </ul>
            <p className="mt-3">
              Applicants may apply from any city or state in India.
              International applicants who qualify as NRI/OCI may also
              participate subject to applicable travel, documentation and legal
              requirements.
            </p>
          </InfoBlock>

          <InfoBlock title="GENDER">
            All genders are eligible to apply.
          </InfoBlock>

          <InfoBlock title="PREVIOUS EXPERIENCE">
            Previous participation in another reality show does not
            automatically disqualify an applicant.
          </InfoBlock>

          <InfoBlock title="SOCIAL MEDIA">
            There is no minimum follower count or social-media requirement for
            registration.
          </InfoBlock>
        </div>
      </>
    ),
  },
  {
    number: "03",
    title: "PHYSICAL PARTICIPATION",
    icon: ShieldCheck,
    content: (
      <p>
        THE BORDERBOUND includes physical challenges.
        <br />
        <br />
        Applicants are not required to meet a separate fitness qualification
        merely to register. However, contestants must be physically capable of
        participating in the challenges included in the show.
        <br />
        <br />
        The Organizer may require appropriate medical or fitness clearance
        where necessary for participation in specific physical activities.
        <br />
        <br />
        Contestants must follow all challenge instructions and safety
        requirements issued by the production team.
      </p>
    ),
  },
  {
    number: "04",
    title: "REGISTRATION",
    icon: FileText,
    content: (
      <>
        <p>Applicants must provide accurate and complete information during registration.</p>

        <p className="mt-5">The registration process may require:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Name</Bullet>
          <Bullet>Date of birth</Bullet>
          <Bullet>Contact information</Bullet>
          <Bullet>Location</Bullet>
          <Bullet>Identity information</Bullet>
          <Bullet>Age verification</Bullet>
          <Bullet>Photographs</Bullet>
          <Bullet>
            Other information reasonably required for eligibility verification
          </Bullet>
        </ul>

        <p className="mt-5">
          Applicants may submit any identity or age document that is legally
          valid and accepted for the relevant verification purpose.
        </p>

        <p className="mt-5">
          Providing false, misleading or materially incomplete information may
          result in disqualification.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "REGISTRATION DOES NOT GUARANTEE SELECTION",
    icon: AlertTriangle,
    content: (
      <>
        <p>Completing registration does not guarantee:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Selection for public voting</Bullet>
          <Bullet>A particular leaderboard position</Bullet>
          <Bullet>Selection among the Top 32</Bullet>
          <Bullet>Wild Card selection</Bullet>
          <Bullet>Participation in the main show</Bullet>
        </ul>

        <p className="mt-5">
          Selection will be conducted according to the official selection
          mechanism published by THE BORDERBOUND.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "REGISTRATION FEES",
    icon: CreditCard,
    content: (
      <>
        <p>
          The applicable registration fee will be displayed clearly before
          payment.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* <FeeCard
            label="EARLY REGISTRATION"
            amount="₹499"
            dates="5 October – 30 October 2026"
          /> */}

          <FeeCard
            label="REGULAR REGISTRATION"
            amount="₹1,499"
            dates="31 October – 15 November 2026"
          />
        </div>

        <p className="mt-6">
          The fee applicable to an applicant will be determined by the
          successful completion date and time of payment.
        </p>

        <div className="mt-5 border border-red-500/20 bg-red-500/[0.04] p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
            Registration Closes
          </p>
          <p className="mt-2 text-xl font-black text-white">
            15 November 2026
          </p>
        </div>
      </>
    ),
  },
  {
    number: "07",
    title: "PUBLIC VOTING",
    icon: Users,
    content: (
      <>
        <p>
          Approved and eligible contestant profiles may participate in the
          public voting stage.
        </p>

        <p className="mt-5">
          The detailed voting mechanism, voting period, vote value, valid
          votes, leaderboard and voting procedures are governed by the separate
          Official Voting Rules.
        </p>

        <PolicyLink href="/voting-rules" label="VIEW VOTING RULES" />
      </>
    ),
  },
  {
    number: "08",
    title: "VOTING ACCESS",
    icon: Users,
    content: (
      <p>
        A user does not need to create or log into a THE BORDERBOUND account to
        cast a vote, unless the Organizer introduces a specific technical
        requirement for a particular voting function.
        <br />
        <br />
        Multiple accounts may be created and used by users.
        <br />
        <br />
        A voter may support multiple contestants.
        <br />
        <br />
        International users may participate in voting subject to payment
        availability and applicable laws.
      </p>
    ),
  },
  {
    number: "09",
    title: "AUTOMATED VOTING IS PROHIBITED",
    icon: AlertTriangle,
    danger: true,
    content: (
      <>
        <p>
          Multiple genuine accounts are permitted. However, automated voting
          and manipulation of the intended voting process are strictly
          prohibited.
        </p>

        <p className="mt-5">
          The following activities are strictly prohibited:
        </p>

        <ul className="mt-4 space-y-3">
          <Bullet>Bots</Bullet>
          <Bullet>Voting scripts</Bullet>
          <Bullet>Automated voting software</Bullet>
          <Bullet>Emulators used to automate voting</Bullet>
          <Bullet>API-based automated voting</Bullet>
          <Bullet>Artificial traffic generation</Bullet>
          <Bullet>Exploitation of technical vulnerabilities</Bullet>
          <Bullet>
            Automated payment or voting systems designed to bypass the intended
            voting process
          </Bullet>
        </ul>

        <div className="mt-6 border border-red-500/20 bg-red-500/[0.05] p-5">
          <p className="text-sm font-bold leading-7 text-red-200">
            Votes generated through prohibited automated methods may be
            rejected or removed.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            The Organizer may investigate suspicious voting activity using
            available technical, payment and system records.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "10",
    title: "PAYMENT PROCESSING",
    icon: CreditCard,
    content: (
      <>
        <p>
          Payments will be processed through the designated payment gateway.
        </p>

        <p className="mt-5">
          The website will clearly display the applicable amount before payment
          confirmation.
        </p>

        <p className="mt-5">
          Payment credentials such as the following should never be shared with
          THE BORDERBOUND personnel:
        </p>

        <ul className="mt-4 space-y-3">
          <Bullet>UPI PIN</Bullet>
          <Bullet>Card PIN</Bullet>
          <Bullet>OTP</Bullet>
          <Bullet>Banking passwords</Bullet>
        </ul>

        <p className="mt-5">
          Users should retain their transaction or reference details for
          support purposes.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "SUCCESSFUL TRANSACTIONS",
    icon: CheckCircle2,
    content: (
      <p>
        A transaction will be treated as successfully completed only when
        payment has been successfully processed and the relevant system
        confirms the transaction.
        <br />
        <br />
        Failed, cancelled, reversed or unsuccessful transactions do not create
        valid registration or voting rights.
      </p>
    ),
  },
  {
    number: "12",
    title: "REFUNDS & CANCELLATIONS",
    icon: CreditCard,
    content: (
      <>
        <p>
          Registration and voting payments are subject to the official Refund &
          Cancellation Policy.
        </p>

        <p className="mt-5">
          Successfully credited votes cannot ordinarily be transferred from
          one contestant to another.
        </p>

        <p className="mt-5">
          Users should verify their selected contestant and payment details
          before confirming a voting transaction.
        </p>

        <PolicyLink
          href="/refund-cancellation-policy"
          label="VIEW REFUND & CANCELLATION POLICY"
        />
      </>
    ),
  },
  {
    number: "13",
    title: "LEADERBOARD",
    icon: TrophyIcon,
    content: (
      <p>
        The official website may display contestant rankings and other voting
        information.
        <br />
        <br />
        Leaderboard information may update during the voting period.
        <br />
        <br />
        The displayed leaderboard may remain provisional until final
        verification.
        <br />
        <br />
        The final valid vote count will be determined after the applicable
        verification process.
      </p>
    ),
  },
  {
    number: "14",
    title: "TOP 32 SELECTION",
    icon: Scale,
    content: (
      <>
        <p>Following the closing of public voting:</p>

        <NumberedList
          items={[
            "Voting will close.",
            "Applicable votes will be verified.",
            "Eligibility will be confirmed.",
            "Valid votes will be finalised.",
            "The final selection will be announced.",
          ]}
        />

        <p className="mt-6">
          The highest-ranking eligible contestants will form the Top 32
          selection pool according to the published selection mechanism.
        </p>

        <InfoBlock title="TIE AT THE SELECTION BOUNDARY">
          If two or more eligible contestants have an identical valid vote count
          at the relevant selection boundary, the applicable tie rule published
          by THE BORDERBOUND will apply.
          <br />
          <br />
          Current planned rule: where the relevant contestants are tied for the
          final qualifying position, both contestants will be selected, subject
          to eligibility verification.
        </InfoBlock>
      </>
    ),
  },
  {
    number: "15",
    title: "WILD CARD",
    icon: Users,
    content: (
      <p>
        Contestants who fall within the designated Wild Card eligibility pool
        may remain eligible for a Wild Card opportunity.
        <br />
        <br />
        The Wild Card mechanism may involve a separate selection process,
        challenge or other official mechanism.
        <br />
        <br />
        The applicable Wild Card rules will be published or communicated before
        the relevant Wild Card stage.
      </p>
    ),
  },
  {
    number: "16",
    title: "GAME FORMAT",
    icon: Users,
    content: (
      <>
        <p>The main competition may include:</p>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <Bullet>Gang formation</Bullet>
          <Bullet>Gang Leader decisions</Bullet>
          <Bullet>Physical challenges</Bullet>
          <Bullet>Mental challenges</Bullet>
          <Bullet>Strategic challenges</Bullet>
          <Bullet>Border Credits</Bullet>
          <Bullet>Advantages and powers</Bullet>
          <Bullet>Voting</Bullet>
          <Bullet>Eliminations</Bullet>
          <Bullet>Secret missions</Bullet>
          <Bullet>Alliances</Bullet>
          <Bullet>Wild Cards</Bullet>
          <Bullet>Other game twists</Bullet>
        </ul>

        <p className="mt-6">
          Participants will be required to follow the applicable rules
          communicated for each stage of the competition.
        </p>
      </>
    ),
  },
  {
    number: "17",
    title: "CHALLENGE SAFETY",
    icon: ShieldCheck,
    content: (
      <p>
        All contestants must follow the safety instructions provided by the
        production team, challenge officials and medical personnel.
        <br />
        <br />
        A contestant may be removed from a challenge if continuing could create
        a significant safety risk.
        <br />
        <br />
        The safety of participants and production personnel takes priority
        during physical activities.
      </p>
    ),
  },
  {
    number: "18",
    title: "DISQUALIFICATION",
    icon: AlertTriangle,
    danger: true,
    content: (
      <>
        <p>A participant may be disqualified for reasons including:</p>

        <ul className="mt-4 space-y-3">
          <Bullet>Providing materially false information</Bullet>
          <Bullet>Identity or eligibility fraud</Bullet>
          <Bullet>Forgery or misuse of documents</Bullet>
          <Bullet>Deliberate cheating</Bullet>
          <Bullet>
            Unauthorized interference with voting or website systems
          </Bullet>
          <Bullet>Automated voting</Bullet>
          <Bullet>Attempting to manipulate technical systems</Bullet>
          <Bullet>
            Serious violation of challenge safety instructions
          </Bullet>
          <Bullet>Serious misconduct</Bullet>
          <Bullet>
            Violation of the participant agreement or applicable show rules
          </Bullet>
        </ul>

        <p className="mt-6">
          Any disqualification process will be handled according to the
          applicable rules and agreements.
        </p>
      </>
    ),
  },
  {
    number: "19",
    title: "OFFICIAL COMMUNICATION",
    icon: FileText,
    content: (
      <>
        <p>Important announcements regarding:</p>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <Bullet>Registration</Bullet>
          <Bullet>Voting</Bullet>
          <Bullet>Selection</Bullet>
          <Bullet>Wild Cards</Bullet>
          <Bullet>Show schedules</Bullet>
          <Bullet>Competition updates</Bullet>
          <Bullet>Rules</Bullet>
        </ul>

        <p className="mt-6">
          will be communicated through official THE BORDERBOUND channels.
          Participants should verify important information through official
          sources.
        </p>
      </>
    ),
  },
  {
    number: "20",
    title: "MEDIA & PRODUCTION",
    icon: FileText,
    content: (
      <p>
        Selected contestants may be filmed, photographed and recorded during
        the production of THE BORDERBOUND.
        <br />
        <br />
        Detailed provisions regarding appearance, recording, publicity,
        promotional content, media usage and production rights will be
        contained in the participant agreement or production contract provided
        to selected contestants.
      </p>
    ),
  },
  {
    number: "21",
    title: "INTELLECTUAL PROPERTY",
    icon: ShieldCheck,
    content: (
      <p>
        THE BORDERBOUND name, logo, visual identity, website, graphics, videos,
        written materials, format materials and other official content are
        protected by applicable intellectual-property laws.
        <br />
        <br />
        Unauthorised reproduction, commercial use, distribution or exploitation
        of official materials is prohibited.
      </p>
    ),
  },
  {
    number: "22",
    title: "PRIVACY",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Personal information collected through registration, verification,
          payment and other website functions will be handled according to the
          official Privacy Policy.
        </p>

        <PolicyLink href="/privacy" label="VIEW PRIVACY POLICY" />
      </>
    ),
  },
  {
    number: "23",
    title: "WEBSITE AVAILABILITY",
    icon: ShieldCheck,
    content: (
      <p>
        The Organizer will make reasonable efforts to maintain the availability
        and functionality of the official website.
        <br />
        <br />
        Temporary interruptions may occur because of maintenance, technical
        issues, payment-provider interruptions, network failures or
        circumstances outside the Organizer's reasonable control.
      </p>
    ),
  },
  {
    number: "24",
    title: "CHANGES TO THE TERMS",
    icon: FileText,
    content: (
      <p>
        The Organizer may update these Terms & Conditions where reasonably
        necessary because of changes to the competition, website
        functionality, payment systems, applicable legal requirements or
        operational procedures.
        <br />
        <br />
        Material updates will be communicated through appropriate official
        channels.
      </p>
    ),
  },
  {
    number: "25",
    title: "GOVERNING LAW",
    icon: Scale,
    content: (
      <p>
        These Terms & Conditions shall be governed by the applicable laws of
        India.
        <br />
        <br />
        Any dispute shall be handled in accordance with applicable Indian law
        and the jurisdiction specified by the Organizer in the final legal
        version of these Terms.
      </p>
    ),
  },
  {
    number: "26",
    title: "CONTACT & SUPPORT",
    icon: FileText,
    content: (
      <p>
        For registration, payment, voting or technical assistance, users may
        contact the official THE BORDERBOUND support team through the contact
        details published on the website.
        <br />
        <br />
        Users should include their relevant transaction or reference details
        where applicable.
      </p>
    ),
  },
];

function InfoBlock({ title, children }) {
  return (
    <div className="border-l border-red-600/40 pl-4">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-7 text-zinc-400">{children}</div>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-7 text-zinc-400">
      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-red-500" />
      <span>{children}</span>
    </li>
  );
}

function NumberedList({ items }) {
  return (
    <div className="mt-5 space-y-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-start gap-4 border border-white/5 bg-white/[0.02] px-4 py-3"
        >
          <span className="text-[10px] font-black tracking-[0.15em] text-red-500">
            0{index + 1}
          </span>
          <span className="text-sm leading-6 text-zinc-400">{item}</span>
        </div>
      ))}
    </div>
  );
}

function FeeCard({ label, amount, dates }) {
  return (
    <div className="border border-white/10 bg-white/[0.025] p-5">
      <p className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-black tracking-tight text-white">
        {amount}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-red-400">
        {dates}
      </p>
    </div>
  );
}

function PolicyLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group mt-6 inline-flex items-center gap-2 border border-red-500/30 bg-red-500/[0.04] px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-red-400 transition-all hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-300"
    >
      {label}
      <ArrowUpRight
        size={14}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function TrophyIcon({ size = 18, ...props }) {
  return <span {...props}>🏆</span>;
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100">
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
              <FileText size={13} className="text-red-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-red-400">
                Official Legal Document
              </span>
            </div>

            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.35em] text-red-500">
              THE BORDERBOUND
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              TERMS
              <span className="block text-zinc-500">& CONDITIONS</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              <span>Last Updated: 28 September 2026</span>
              <span className="hidden h-1 w-1 bg-red-500 sm:block" />
              <span>Official THE BORDERBOUND Website</span>
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              Welcome to THE BORDERBOUND. These Terms & Conditions govern your
              use of the official THE BORDERBOUND website, registration for the
              competition, participation in the selection process, public
              voting and related services.
            </p>

            <div className="mt-8 border-l-2 border-red-600 bg-white/[0.025] px-5 py-4">
              <p className="text-sm leading-7 text-zinc-300">
                By using the website, creating an account, registering, or
                participating in any part of the selection process, you
                acknowledge that you have read and accepted these Terms &
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[250px_1fr] lg:gap-12">
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
                    className="flex gap-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600 transition-colors hover:text-white"
                  >
                    <span className="text-red-500">{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className={`scroll-mt-24 border bg-white/[0.015] p-6 sm:p-8 ${
                    section.danger
                      ? "border-red-500/15"
                      : "border-white/5"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center border ${
                        section.danger
                          ? "border-red-500/25 bg-red-500/[0.06]"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          section.danger
                            ? "text-red-500"
                            : "text-zinc-400"
                        }
                      />
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

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
            THE BORDERBOUND
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.03em] text-white sm:text-5xl">
            CLEAR RULES.
            <span className="block text-zinc-500">
              REAL COMPETITION. ONE BORDER.
            </span>
          </h2>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-zinc-600">
            32 Contestants. 4 Gang Leaders. 15 Days. One Winner.
          </p>

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
              Cast Your Vote
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/20">
        <div className="mx-auto max-w-4xl px-5 py-10 text-center sm:px-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
            Legal Notice
          </p>

          <p className="mt-4 text-xs leading-6 text-zinc-600">
            These Terms & Conditions are intended to describe the general
            website, registration, participation, payment and competition
            framework. The final legal version should be reviewed and approved
            by the Organizer and qualified legal counsel before launch.
          </p>
        </div>
      </section>
    </main>
  );
}