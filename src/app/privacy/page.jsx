import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  CreditCard,
  UserCheck,
  Globe,
  Mail,
  Phone,
  Scale,
  Eye,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | THE BORDERBOUND",
  description:
    "Read the official THE BORDERBOUND Privacy Policy covering personal information, registration data, voting information, payments, cookies, data security, retention and privacy rights.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    number: "01",
    title: "INFORMATION WE COLLECT",
    icon: Database,
    content: (
      <>
        <h3 className="text-white font-bold text-lg mb-4">
          A. Registration Information
        </h3>

        <p className="mb-4">
          When you register as a contestant, we may collect:
        </p>

        <ul>
          <li>Full name</li>
          <li>Date of birth</li>
          <li>Gender</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>City and state</li>
          <li>Password/account credentials</li>
          <li>Profile photograph</li>
          <li>Identity and age-verification documents</li>
          <li>Other information required to verify eligibility</li>
        </ul>

        <h3 className="text-white font-bold text-lg mb-4 mt-10">
          B. Voting Information
        </h3>

        <p className="mb-4">
          When you cast votes, we may collect information necessary to process
          and verify the transaction, which may include:
        </p>

        <ul>
          <li>Selected contestant</li>
          <li>Number of votes purchased</li>
          <li>Transaction/reference ID</li>
          <li>Date and time of transaction</li>
          <li>Payment status</li>
          <li>Technical information associated with the transaction</li>
        </ul>

        <p className="mt-5">
          Payment card, banking or other sensitive payment credentials are
          processed through the designated payment gateway and are not intended
          to be stored by THE BORDERBOUND unless specifically required for
          lawful payment processing.
        </p>

        <h3 className="text-white font-bold text-lg mb-4 mt-10">
          C. Technical Information
        </h3>

        <p className="mb-4">
          When you use our website, we may automatically receive certain
          technical information, such as:
        </p>

        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Approximate location derived from technical information</li>
          <li>Website activity and interaction data</li>
          <li>Cookies and similar technologies</li>
          <li>Security and fraud-prevention information</li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "HOW WE USE YOUR INFORMATION",
    icon: UserCheck,
    content: (
      <>
        <p className="mb-4">We may use collected information to:</p>

        <ul>
          <li>Process contestant registrations</li>
          <li>Verify contestant eligibility and identity</li>
          <li>Create and manage user accounts</li>
          <li>Process payments</li>
          <li>Process and validate votes</li>
          <li>Maintain the official voting system and leaderboard</li>
          <li>Detect fraudulent, automated or unauthorized activity</li>
          <li>Prevent abuse and manipulation of the website</li>
          <li>Communicate with applicants, contestants and users</li>
          <li>Provide customer support</li>
          <li>Publish approved contestant profiles where applicable</li>
          <li>Administer the show and selection process</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Maintain website security</li>
          <li>Improve our website, systems and user experience</li>
          <li>
            Maintain records required for operational, accounting or legal
            purposes
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "CONTESTANT PROFILE INFORMATION",
    icon: Eye,
    content: (
      <>
        <p>
          If you are selected for public voting, certain information from your
          contestant profile may be displayed publicly on the official THE
          BORDERBOUND website.
        </p>

        <p className="mt-5 mb-4">This may include information such as:</p>

        <ul>
          <li>Name</li>
          <li>Age</li>
          <li>City/state</li>
          <li>Profile photograph</li>
          <li>Contestant number</li>
          <li>Public contestant biography</li>
          <li>Voting position or vote count, where applicable</li>
        </ul>

        <div className="mt-6 border border-red-500/20 bg-red-500/5 p-5 rounded-xl">
          <p className="text-white font-semibold">
            Sensitive documents submitted for verification will not be publicly
            displayed.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "04",
    title: "PUBLIC LEADERBOARD",
    icon: FileText,
    content: (
      <>
        <p>
          During the official voting period, the website may display publicly
          available competition information, including:
        </p>

        <ul className="mt-4">
          <li>Contestant ranking</li>
          <li>Vote count</li>
          <li>Position on the leaderboard</li>
          <li>
            Other information necessary to communicate the status of the
            competition
          </li>
        </ul>

        <p className="mt-5">
          The displayed leaderboard may be provisional until final vote
          validation is completed.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "PAYMENT INFORMATION",
    icon: CreditCard,
    content: (
      <>
        <p>
          Payments may be processed through our designated payment gateway,
          including PayU or another payment service provider specified by the
          Organizer.
        </p>

        <p className="mt-5">
          Payment providers may independently process information according to
          their own privacy policies and applicable laws.
        </p>

        <p className="mt-5">
          THE BORDERBOUND does not request users to provide their:
        </p>

        <ul className="mt-4">
          <li>UPI PIN</li>
          <li>ATM PIN</li>
          <li>Internet banking password</li>
          <li>Card PIN</li>
          <li>
            OTP for purposes other than the legitimate payment/verification
            flow
          </li>
        </ul>

        <div className="mt-6 border border-red-500/20 bg-red-500/5 p-5 rounded-xl">
          <p className="text-white font-semibold">
            Never share your banking credentials or OTP with anyone claiming
            to represent THE BORDERBOUND.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "06",
    title: "COOKIES AND SIMILAR TECHNOLOGIES",
    icon: Cookie,
    content: (
      <>
        <p>Our website may use cookies and similar technologies to:</p>

        <ul className="mt-4">
          <li>Keep the website functioning properly</li>
          <li>Maintain sessions</li>
          <li>Remember preferences</li>
          <li>Understand website usage</li>
          <li>Improve performance</li>
          <li>Maintain security</li>
          <li>Detect suspicious activity</li>
        </ul>

        <p className="mt-5">
          You may be able to control cookies through your browser settings.
          Disabling certain cookies may affect website functionality.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "SHARING OF INFORMATION",
    icon: Globe,
    content: (
      <>
        <p>
          We may share personal information where reasonably necessary with:
        </p>

        <ul className="mt-4">
          <li>Payment gateway and payment-processing providers</li>
          <li>Website hosting and technology providers</li>
          <li>Identity/eligibility verification providers</li>
          <li>Fraud-prevention and security service providers</li>
          <li>Professional advisers and service providers</li>
          <li>Production and operational partners where necessary</li>
          <li>
            Government authorities, regulators or law-enforcement agencies
            where legally required
          </li>
        </ul>

        <p className="mt-5">
          We do not intend to sell your personal information as a standalone
          commercial product.
        </p>

        <p className="mt-5">
          Service providers receiving information from us may only use it for
          the purposes for which they have been engaged, subject to applicable
          contractual and legal requirements.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "INTERNATIONAL DATA PROCESSING",
    icon: Globe,
    content: (
      <p>
        Some technology, hosting, payment, analytics or service providers may
        process information outside India.
        <br />
        <br />
        Where personal information is transferred or processed outside India,
        we will take steps required under applicable law.
      </p>
    ),
  },
  {
    number: "09",
    title: "DATA SECURITY",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures designed to
          protect personal information against unauthorized access, alteration,
          disclosure, misuse or destruction.
        </p>

        <p className="mt-5">
          However, no internet transmission or electronic storage system can be
          guaranteed to be completely secure.
        </p>

        <p className="mt-5">
          Users are responsible for maintaining the confidentiality of their
          account credentials.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "DATA RETENTION",
    icon: Database,
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy,
          including:
        </p>

        <ul className="mt-4">
          <li>Providing our services</li>
          <li>Administering THE BORDERBOUND</li>
          <li>Maintaining transaction and voting records</li>
          <li>Resolving disputes</li>
          <li>Preventing fraud and abuse</li>
          <li>
            Complying with legal, tax, accounting and regulatory obligations
          </li>
        </ul>

        <p className="mt-5">
          Different categories of information may be retained for different
          periods depending on their purpose and applicable legal requirements.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "YOUR RIGHTS",
    icon: Scale,
    content: (
      <>
        <p>
          Subject to applicable law, you may have rights regarding your
          personal information, including the right to:
        </p>

        <ul className="mt-4">
          <li>Request access to certain personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion where legally applicable</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>
            Raise a grievance regarding processing of your personal information
          </li>
          <li>
            Request information regarding how your personal data is handled
          </li>
        </ul>

        <p className="mt-5">
          Certain information may need to be retained where required by law or
          where necessary for legitimate operational, security or
          dispute-resolution purposes.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "CHILDREN AND AGE REQUIREMENTS",
    icon: UserCheck,
    content: (
      <>
        <p>
          Contestant participation in THE BORDERBOUND is subject to the
          eligibility requirements published in the official Terms & Conditions.
        </p>

        <p className="mt-5">
          Where applicable, additional consent, verification or safeguards may
          be required for participants who are minors.
        </p>

        <p className="mt-5">
          Users should not submit another person's personal information without
          appropriate authorization.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "THIRD-PARTY LINKS",
    icon: ArrowLeft,
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, payment
          services, social media platforms or other services.
        </p>

        <p className="mt-5">
          THE BORDERBOUND is not responsible for the privacy practices of
          third-party websites.
        </p>

        <p className="mt-5">
          We encourage users to review the privacy policies of those services
          before providing personal information.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "FRAUD PREVENTION AND SECURITY",
    icon: Lock,
    content: (
      <>
        <p>Information may be processed to identify and investigate:</p>

        <ul className="mt-4">
          <li>Automated voting</li>
          <li>Bot activity</li>
          <li>Suspicious transactions</li>
          <li>Payment abuse</li>
          <li>Multiple unauthorized transactions</li>
          <li>Attempts to manipulate voting systems</li>
          <li>Exploitation of website vulnerabilities</li>
          <li>
            Other activity that may compromise the integrity or security of the
            platform
          </li>
        </ul>

        <p className="mt-5">
          Information may be retained or disclosed where reasonably necessary
          for investigation, enforcement or legal compliance.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "COMMUNICATIONS",
    icon: Mail,
    content: (
      <>
        <p>We may contact users regarding:</p>

        <ul className="mt-4">
          <li>Registration</li>
          <li>Payments</li>
          <li>Voting</li>
          <li>Account activity</li>
          <li>Important show updates</li>
          <li>Security issues</li>
          <li>Customer support</li>
          <li>Changes to our policies or services</li>
        </ul>

        <p className="mt-5">
          Where legally required, promotional communications will be subject to
          applicable consent and communication requirements.
        </p>
      </>
    ),
  },
  {
    number: "16",
    title: "CHANGES TO THIS PRIVACY POLICY",
    icon: FileText,
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in:
        </p>

        <ul className="mt-4">
          <li>THE BORDERBOUND</li>
          <li>Our website</li>
          <li>Technology</li>
          <li>Legal requirements</li>
          <li>Data-processing practices</li>
        </ul>

        <p className="mt-5">
          The updated version will be published on the official website with a
          revised “Last Updated” date.
        </p>
      </>
    ),
  },
  {
    number: "17",
    title: "GRIEVANCE / PRIVACY CONTACT",
    icon: Mail,
    content: (
      <>
        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
          <p className="text-white font-bold text-xl mb-5">
            THE BORDERBOUND
          </p>

          <div className="space-y-4 text-sm">
            <p>
              <span className="text-zinc-500 block mb-1">EMAIL</span>
              <a
                href="mailto:coachailaan@gmail.com"
                className="text-white hover:text-red-400 transition-colors"
              >
                coachailaan@gmail.com
              </a>
              <br />
              <a
                href="mailto:theborderbound@gmail.com"
                className="text-white hover:text-red-400 transition-colors"
              >
                theborderbound@gmail.com
              </a>
            </p>

            <p>
              <span className="text-zinc-500 block mb-1">PHONE</span>
              <a
                href="tel:+919183204329"
                className="text-white hover:text-red-400 transition-colors"
              >
                9183204329
              </a>
            </p>

            <p>
              <span className="text-zinc-500 block mb-1">
                GRIEVANCE OFFICER / PRIVACY CONTACT
              </span>
              <span className="text-white font-semibold">
                Ailaan Ayush Rathore
              </span>
            </p>

            <p>
              <span className="text-zinc-500 block mb-1">EMAIL</span>
              <a
                href="mailto:admin@theborderbound.in"
                className="text-white hover:text-red-400 transition-colors"
              >
                admin@theborderbound.in
              </a>
            </p>

            <p>
              <span className="text-zinc-500 block mb-1">ADDRESS</span>
              <span className="text-white">Korba, Chhattisgarh</span>
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "18",
    title: "GOVERNING LAW",
    icon: Scale,
    content: (
      <>
        <p>
          This Privacy Policy shall be governed by the applicable laws of
          India.
        </p>

        <p className="mt-5">
          Any disputes relating to privacy or the use of personal information
          shall be handled in accordance with applicable Indian law.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-300">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.14),transparent_42%)]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-zinc-500 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={15} />
            BACK TO HOME
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl border border-red-500/20 bg-red-500/10 flex items-center justify-center">
              <ShieldCheck className="text-red-500" size={20} />
            </div>

            <span className="text-xs font-bold tracking-[0.3em] text-red-500">
              OFFICIAL POLICY
            </span>
          </div>

          <p className="text-sm font-bold tracking-[0.35em] text-zinc-600 mb-5">
            THE BORDERBOUND
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[0.95] max-w-5xl">
            PRIVACY
            <span className="block text-red-500">POLICY</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg leading-8 text-zinc-400">
            THE BORDERBOUND respects your privacy and is committed to
            protecting the personal information you provide while using our
            website, registering for the show, participating in public voting,
            or communicating with us.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-zinc-400">
              <Lock size={14} className="text-red-500" />
              DATA PROTECTION
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-zinc-400">
              <ShieldCheck size={14} className="text-red-500" />
              OFFICIAL POLICY
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-zinc-400">
              LAST UPDATED: 28 SEP 2026
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="max-w-4xl">
          <p className="text-lg sm:text-xl leading-9 text-zinc-300">
            This Privacy Policy explains what information we collect, why we
            collect it, how we use it, when it may be shared, and the choices
            available to you.
          </p>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pb-24">
        <div className="space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.number}
                className="border border-white/10 bg-white/[0.025] rounded-2xl overflow-hidden"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start gap-5 mb-7">
                    <div className="shrink-0">
                      <span className="text-xs font-black tracking-[0.2em] text-red-500">
                        {section.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        className="text-red-500 shrink-0"
                      />

                      <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="pl-0 sm:pl-11 text-sm sm:text-base leading-8 text-zinc-400">
                    {section.content}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRIVACY MATTERS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-black tracking-[0.3em] text-red-500 mb-4">
              OUR COMMITMENT
            </p>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              YOUR PRIVACY
              <span className="text-red-500"> MATTERS.</span>
            </h2>

            <p className="mt-7 text-base sm:text-lg leading-8 text-zinc-400">
              We collect information to operate THE BORDERBOUND—not to create
              unnecessary exposure of your personal information.
            </p>

            <p className="mt-8 text-sm font-semibold text-zinc-300">
              Before submitting information, please review our:
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold tracking-wider text-zinc-300 hover:text-white hover:border-red-500/40 transition-all"
              >
                TERMS & CONDITIONS
              </Link>

              <Link
                href="/voting-rules"
                className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold tracking-wider text-zinc-300 hover:text-white hover:border-red-500/40 transition-all"
              >
                VOTING RULES
              </Link>

              <Link
                href="/refund-cancellation-policy"
                className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold tracking-wider text-zinc-300 hover:text-white hover:border-red-500/40 transition-all"
              >
                REFUND & CANCELLATION
              </Link>

              <Link
                href="/privacy"
                className="px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-xs font-bold tracking-wider text-red-400"
              >
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <div className="border border-red-500/20 bg-red-500/[0.035] rounded-3xl p-8 sm:p-12 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl border border-red-500/20 bg-red-500/10 flex items-center justify-center mb-6">
            <ShieldCheck className="text-red-500" size={26} />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white">
            YOUR DATA. YOUR TRUST.
          </h2>

          <p className="mt-4 text-zinc-500 text-sm sm:text-base">
            THE BORDERBOUND — Official Privacy Policy
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:admin@theborderbound.in"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 px-6 py-3.5 text-sm font-black text-white transition-all"
            >
              <Mail size={16} />
              CONTACT PRIVACY TEAM
            </a>

            <a
              href="tel:+919183204329"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] px-6 py-3.5 text-sm font-black text-zinc-300 hover:text-white transition-all"
            >
              <Phone size={16} />
              9183204329
            </a>
          </div>

          <p className="mt-10 text-xs font-bold tracking-[0.25em] text-zinc-700">
            EVERYONE HAS A BOUNDARY. THE GAME BEGINS WHEN YOU CROSS IT.
          </p>
        </div>
      </section>
    </main>
  );
}