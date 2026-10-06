"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLeaderboardStore } from "@/store/leaderboardStore";
import ContestantCard from "@/components/ContestantCard";
import {
  ArrowDownRight,
  ArrowRight,
  Flame,
  MoveUpRight,
  Play,
  Shield,
  Trophy,
  Users,
  Vote,
  Zap,
  ScrollText,
} from "lucide-react";
import HeroCarousel from "./(public)/home/home-comp/Carousel";
import { useAuthStore } from "@/store/authStore";

const RegistrationCountdown = dynamic(
  () => import("@/components/RegistrationCountdown"),
  {
    loading: () => null,
  },
);

const WhyToRegister = dynamic(() => import("@/components/WhyToRegister"), {
  loading: () => null,
});

const PriceHike = dynamic(() => import("@/components/PriceHike"), {
  loading: () => null,
});

const GangLeaders = dynamic(() => import("@/components/GangLeaders"), {
  loading: () => null,
});

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Page() {
  const { leaderboard, fetchLeaderboard } = useLeaderboardStore();
  const [calcVotes, setCalcVotes] = useState(100);

  const { user } = useAuthStore();

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const top3 = leaderboard.slice(0, 3);

  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const handleNavbarVisibility = (event) => {
      setNavbarHidden(event.detail.hidden);
    };

    window.addEventListener("navbar-visibility", handleNavbarVisibility);

    return () => {
      window.removeEventListener("navbar-visibility", handleNavbarVisibility);
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://theborderbound.in/#organization",
              name: "BorderBound",
              alternateName: [
                "THE BORDERBOUND",
                "The BorderBound",
                "Border Bound",
                "The Border Bound",
              ],
              url: "https://theborderbound.in",
              logo: {
                "@type": "ImageObject",
                url: "https://theborderbound.in/icon.png",
              },
              description:
                "BorderBound, also known as Border Bound, is a 15-day outdoor reality competition in India featuring contestants competing through survival, strategy, leadership, performance and public voting.",
              email: ["coachailaan@gmail.com", "admin@theborderbound.in"],
              telephone: "+91 91832 04329",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "IN",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://theborderbound.in/#website",
              name: "BorderBound",
              alternateName: [
                "Border Bound",
                "The BorderBound",
                "The Border Bound",
              ],
              url: "https://theborderbound.in",
              description:
                "BorderBound (Border Bound) is a 15-day outdoor reality competition in India featuring contestants, survival, strategy, leadership, performance and public voting.",
              inLanguage: "en-IN",
              publisher: {
                "@id": "https://theborderbound.in/#organization",
              },
            },
          ]),
        }}
      />

      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#050506] text-white">
        {/* =========================================================
          STICKY REGISTER CTA
      ========================================================= */}
        <motion.div
          initial={false}
          animate={{
            opacity: navbarHidden ? 1 : 0,
            y: navbarHidden ? 0 : -20,
            scale: navbarHidden ? 1 : 0.95,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`fixed right-3 top-3 z-[100] flex gap-2 sm:right-6 sm:top-5 ${
            navbarHidden ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* CAST VOTE */}
          <Link
            href="/contestant"
            className="group relative flex items-center gap-2 overflow-hidden border border-amber-400/50 bg-amber-500 px-4 py-3 shadow-[0_8px_35px_rgba(245,158,11,0.2)] transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:shadow-[0_8px_45px_rgba(245,158,11,0.35)] sm:gap-3 sm:px-6 sm:py-3.5"
          >
            <span className="absolute inset-y-0 -left-10 w-8 rotate-[20deg] bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <span className="absolute inset-0 animate-pulse bg-white/10" />

            <span className="relative z-10 flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

            <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.16em] text-black sm:text-[10px] sm:tracking-[0.2em]">
              Cast Vote
            </span>

            <ArrowRight className="relative z-10 h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* REGISTER NOW */}
          {!user && (
            <Link
              href="/register"
              className="group relative flex items-center gap-2 overflow-hidden border border-red-400/60 bg-red-600 px-4 py-3 shadow-[0_8px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:border-red-300 hover:bg-red-500 hover:shadow-[0_8px_45px_rgba(220,38,38,0.4)] sm:gap-3 sm:px-6 sm:py-3.5"
            >
              <span className="absolute inset-y-0 -left-10 w-8 rotate-[20deg] bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

              <span className="absolute inset-0 animate-pulse bg-red-400/10" />

              <span className="relative z-10 flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

              <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.16em] text-white sm:text-[10px] sm:tracking-[0.2em]">
                Register Now
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </motion.div>

        {/* =========================================================
          HERO CAROUSEL
      ========================================================= */}
        <HeroCarousel />

        <div className="hidden sm:block">
          <GangLeaders />
        </div>

        {/* =========================================================
          HERO / REGISTRATION
      ========================================================= */}
        <section className="relative min-h-[calc(100svh-70px)] overflow-hidden border-b border-white/[0.07]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(220,38,38,0.12),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#080809_0%,#050506_100%)]" />

          <div className="absolute left-[20%] top-[30%] h-[300px] w-[300px] rounded-full bg-red-700/[0.07] blur-[110px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

          <div className="absolute -right-24 top-32 h-[250px] w-[250px] rounded-full bg-amber-500/[0.04] blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[130px]" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:50px_50px] sm:[background-size:80px_80px]" />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-red-500 to-transparent"
          />

          <div className="relative mx-auto flex min-h-[calc(100svh-70px)] w-full max-w-[1500px] items-center px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative min-w-0"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center border border-red-500/30 bg-red-500/10">
                    <Flame className="h-3.5 w-3.5 text-red-500" />
                  </span>

                  <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.25em] text-zinc-300 sm:text-[9px] sm:tracking-[0.3em]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    Registration Open
                  </div>
                </div>

                <h1 className="max-w-3xl text-[clamp(3rem,8vw,7rem)] font-black leading-[0.82] tracking-[-0.07em]">
                  <span className="block text-white">CROSS</span>

                  <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                    THE
                  </span>

                  <span className="block bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
                    BORDER.
                  </span>
                </h1>

                <div className="mt-6 max-w-lg border-l border-red-500/40 pl-4 sm:mt-7 sm:pl-5">
                  <p className="text-xs leading-6 text-zinc-300 sm:text-sm sm:leading-7">
                    32 contestants. One battlefield. Every decision matters. The
                    public decides who gets through the border.
                  </p>
                </div>

                {/* REGISTER AS */}
                <div className="mt-8 sm:mt-10">
                  <div className="mb-3 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-300 sm:text-[9px]">
                    <span className="h-px w-5 bg-red-500" />
                    Register As
                  </div>

                  <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
                    {/* CONTESTANT */}
                    <Link
                      href="/register"
                      className="group relative flex min-h-[68px] items-center justify-between overflow-hidden border border-red-500/40 bg-red-600 px-5 text-left shadow-[0_0_30px_rgba(220,38,38,0.12)] transition-all duration-300 hover:border-red-300 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.28)] sm:min-h-[76px] sm:px-6"
                    >
                      <span className="absolute inset-y-0 -left-12 w-10 rotate-[20deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                      <div className="relative z-10">
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white sm:text-xs">
                          Contestant
                        </div>

                        <div className="mt-1 text-[8px] uppercase tracking-[0.1em] text-white/80">
                          Enter the battlefield
                        </div>
                      </div>

                      <ArrowRight className="relative z-10 h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    </Link>

                    {/* SUPPORTING */}
                    {/* <Link
                    href="/register/supporting"
                    className="group flex min-h-[68px] items-center justify-between border border-white/15 bg-white/[0.035] px-5 text-left backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] sm:min-h-[76px] sm:px-6"
                  >
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white sm:text-xs">
                        Supporting Contestant
                      </div>

                      <div className="mt-1 text-[8px] uppercase tracking-[0.1em] text-zinc-300">
                        Back someone in the game
                      </div>
                    </div>

                    <MoveUpRight className="h-4 w-4 shrink-0 text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white sm:h-5 sm:w-5" />
                  </Link> */}
                  </div>
                </div>
              </motion.div>

              <div className="sm:hidden block">
                <GangLeaders />
              </div>

              {/* RIGHT - CURRENT STATUS */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative mx-auto w-full max-w-[430px]"
              >
                <div className="absolute -inset-6 rounded-full bg-red-600/[0.07] blur-[70px]" />

                <div className="relative overflow-hidden border border-white/[0.12] bg-[#0a0a0c]/90 shadow-2xl backdrop-blur-2xl">
                  {/* TOP STATUS */}
                  <div className="flex items-center justify-between border-b border-white/[0.09] px-5 py-4 sm:px-6">
                    <div>
                      <div className="text-[8px] font-bold uppercase tracking-[0.28em] text-zinc-300">
                        Current Status
                      </div>

                      <div className="mt-1.5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                        Live
                      </div>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center border border-white/[0.09] bg-white/[0.035]">
                      <Shield className="h-4 w-4 text-zinc-300" />
                    </div>
                  </div>

                  {/* MAIN NUMBER */}
                  <div className="relative px-5 py-9 text-center sm:px-6 sm:py-12">
                    {/* Ambient red glow */}
                    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.10] blur-[65px]" />

                    {/* Soft golden glow */}
                    <div className="absolute left-[42%] top-[38%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.07] blur-[55px]" />

                    {/* Subtle center highlight */}
                    <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-500/[0.08] via-amber-400/[0.04] to-transparent blur-2xl" />

                    <div className="relative z-10">
                      <div className="text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-300 sm:text-[9px]">
                        Contestants Entering
                      </div>

                      <div className="mt-1 text-[5.5rem] font-black leading-none tracking-[-0.09em] text-white [text-shadow:0_0_35px_rgba(239,68,68,0.12),0_0_60px_rgba(245,158,11,0.08)] sm:text-[7rem]">
                        32
                      </div>

                      <div className="mt-2 flex items-center justify-center gap-2">
                        <span className="h-px w-6 bg-gradient-to-r from-transparent via-red-500/70 to-amber-400/50" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-red-400 sm:text-[10px]">
                          Contestants
                        </span>

                        <span className="h-px w-6 bg-gradient-to-l from-transparent via-red-500/70 to-amber-400/50" />
                      </div>
                    </div>
                  </div>

                  {/* STATS */}
                  <div className="grid grid-cols-2 border-t border-white/[0.09]">
                    <div className="border-r border-white/[0.09] px-5 py-5 text-center">
                      <div className="text-2xl font-black tracking-tight text-amber-400">
                        04
                      </div>

                      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                        Gang Leaders
                      </div>
                    </div>

                    <div className="px-5 py-5 text-center">
                      <div className="text-2xl font-black tracking-tight text-white">
                        ₹5
                      </div>

                      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                        Per Vote
                      </div>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <Link
                    href="/contestant"
                    className="m-4 flex items-center justify-between border border-white/[0.08] bg-white/[0.025] px-4 py-3"
                  >
                    <div>
                      <div className="text-[7px] uppercase tracking-[0.25em] text-zinc-400">
                        Selection System
                      </div>

                      <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-200">
                        Public Voting
                      </div>
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center border border-red-500/20 bg-red-500/[0.05]">
                      <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          <WhyToRegister />

          <PriceHike />

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-400 sm:flex">
            <span className="h-px w-10 bg-zinc-700" />
            Scroll To Explore
            <span className="h-px w-10 bg-zinc-700" />
          </div>
        </section>

        {/* =========================================================
          STATS
      ========================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="border-b border-white/[0.07]"
        >
          <div className="mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-red-500/70" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-400">
                  The BorderBound Standard
                </span>

                <span className="h-px w-8 bg-red-500/70" />
              </div>

              <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
                Built on <span className="text-red-500">Transparency.</span>
              </h2>

              <p className="mt-4 text-sm text-zinc-300 sm:text-base">
                Your registration. Your votes. Your chance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {[
                {
                  number: "01",
                  title: "Secure Payments",
                  description:
                    "Registration and voting payments are processed through our designated secure payment gateway. Payment confirmations are generated for successfully completed transactions.",
                  accent: "SAFE. TRACEABLE. CONFIRMED.",
                  icon: Shield,
                },
                {
                  number: "02",
                  title: "Verified Contestants",
                  description:
                    "Contestant details and eligibility are reviewed before an approved profile becomes eligible for public voting.",
                  accent: "EVERY PROFILE GOES THROUGH VERIFICATION.",
                  icon: Users,
                },
                {
                  number: "03",
                  title: "Verified Votes",
                  description:
                    "Only successfully processed and valid votes are counted toward the official leaderboard. Votes identified as invalid or fraudulent may be rejected in accordance with the Voting Rules.",
                  accent: "VALID VOTES. OFFICIAL COUNT.",
                  icon: Vote,
                },
                {
                  number: "04",
                  title: "Public Leaderboard",
                  description:
                    "Voting positions are displayed through the official leaderboard, allowing participants and supporters to track the competition throughout the voting period.",
                  accent: "THE RANKING IS VISIBLE.",
                  icon: Trophy,
                },
                {
                  number: "05",
                  title: "Final Validation",
                  description:
                    "When voting closes, results undergo final validation before the selected contestants are confirmed. The final selection is subject to the official eligibility and Voting Rules.",
                  accent: "THE FINAL LINE IS VERIFIED.",
                  icon: Shield,
                },
                {
                  number: "06",
                  title: "Official Rules",
                  description:
                    "Registration, eligibility, voting, selection, payments and other aspects of THE BORDERBOUND are governed by the official rules published on this website.",
                  accent: "KNOW THE RULES. KNOW THE GAME.",
                  icon: ScrollText,
                },
              ].map(({ number, title, description, accent, icon: Icon }) => (
                <motion.div
                  key={number}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-red-500/25 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/[0.07] blur-3xl transition-all duration-500 group-hover:bg-red-600/[0.14]" />

                  <span className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.2em] text-zinc-500">
                    {number}
                  </span>

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.06] text-red-400 transition-all duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/[0.1] group-hover:text-red-300">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-sm font-black uppercase tracking-[0.08em] text-white sm:text-[15px]">
                      {title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-5 text-zinc-300 sm:text-xs sm:leading-6">
                      {description}
                    </p>

                    <div className="mt-5 border-t border-white/[0.07] pt-4">
                      <span className="text-[8px] font-black uppercase tracking-[0.18em] text-red-400">
                        {accent}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto mt-5 max-w-5xl overflow-hidden rounded-2xl border border-red-500/15 bg-red-500/[0.035] p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-red-600/[0.07] blur-[70px]" />

              <div className="relative text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500/60" />

                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
                    The BorderBound Standard
                  </span>

                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-red-500/60" />
                </div>

                <h3 className="mt-4 text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                  No Hidden <span className="text-red-500">Rules.</span>
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-zinc-400 sm:text-sm">
                  The way you enter, vote and move through the selection process
                  is defined by the official rules. Read them before you
                  register or cast a vote.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/voting-rules"
                    className="inline-flex min-w-[170px] items-center justify-center border border-red-500/30 bg-red-600 px-6 py-3.5 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.25)]"
                  >
                    Voting Rules
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* =========================================================
          LEADERBOARD
      ========================================================= */}
        {/* {top3.length > 0 && (
          <section className="relative py-16 sm:py-24 lg:py-32">
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/[0.045] blur-[100px] sm:h-[400px] sm:w-[600px] sm:blur-[140px]" />

            <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={reveal}
                className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end"
              >
                <div className="min-w-0">
                  <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-red-400 sm:text-[10px] sm:tracking-[0.3em]">
                    <Trophy className="h-4 w-4" />
                    Live Standings
                  </div>

                  <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                    WHO'S
                    <span className="ml-2 text-zinc-400 sm:ml-3">LEADING?</span>
                  </h2>
                </div>

                <Link
                  href="/leaderboard"
                  className="group flex w-fit items-center gap-2 border-b border-red-500/40 pb-2 text-[9px] font-bold uppercase tracking-[0.17em] text-red-400 sm:text-[10px] sm:tracking-[0.2em]"
                >
                  Full Leaderboard
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <div className="grid min-w-0 gap-4 md:grid-cols-3 md:gap-5">
                {top3.map((contestant, index) => (
                  <motion.div
                    key={contestant.id || contestant._id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={{ y: -6 }}
                    className="min-w-0"
                  >
                    <ContestantCard contestant={contestant} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* =========================================================
          VOTING
      ========================================================= */}
        <section className="relative border-y border-white/[0.07] bg-[#080809] py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(245,158,11,0.07),transparent_25%),radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.06),transparent_25%)]" />

          <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="mb-10 max-w-2xl sm:mb-14"
            >
              <div className="mb-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-amber-400 sm:text-[10px] sm:tracking-[0.3em]">
                <Zap className="h-4 w-4" />
                Public Power
              </div>

              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-6xl">
                YOUR VOTE
                <br />
                <span className="text-red-500">CHANGES EVERYTHING.</span>
              </h2>

              <p className="mt-4 max-w-xl text-xs leading-6 text-zinc-300 sm:mt-5 sm:text-sm sm:leading-7">
                Choose your firepower. Every ₹5 adds one valid vote to the
                contestant you believe belongs inside The Borderbound.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full min-w-0 border border-white/[0.08] bg-black/60"
            >
              <div className="grid min-w-0 lg:grid-cols-[1fr_0.8fr]">
                <div className="min-w-0 p-5 sm:p-10 lg:border-r lg:border-white/[0.08]">
                  <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
                    <div className="min-w-0">
                      <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-300 sm:text-[9px] sm:tracking-[0.25em]">
                        Selected Firepower
                      </div>

                      <div className="mt-2 text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
                        {calcVotes}
                      </div>
                    </div>

                    <div className="shrink-0 pb-1 text-right">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-red-400 sm:text-xs">
                        Votes
                      </div>

                      <div className="mt-1 text-[10px] text-zinc-300 sm:text-xs">
                        ₹{calcVotes * 5} INR
                      </div>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="1000"
                    value={calcVotes}
                    onChange={(e) => setCalcVotes(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-none bg-zinc-800 accent-red-500"
                  />

                  <div className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2">
                    {[10, 50, 100, 1000].map((num) => (
                      <button
                        key={num}
                        onClick={() => setCalcVotes(num)}
                        className={`min-w-0 border px-1 py-3 text-[8px] font-bold uppercase tracking-wider transition-all sm:px-2 sm:text-[9px] ${
                          calcVotes === num
                            ? "border-red-500 bg-red-500/10 text-white"
                            : "border-white/[0.07] bg-white/[0.02] text-zinc-300 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-between border-t border-white/[0.08] p-5 sm:p-10 lg:border-t-0">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center border border-red-500/20 bg-red-500/10">
                      <Vote className="h-5 w-5 text-red-500" />
                    </div>

                    <h3 className="mt-6 text-xl font-black uppercase tracking-tight sm:mt-7 sm:text-2xl">
                      Ready To
                      <br />
                      Make A Move?
                    </h3>
                  </div>

                  <Link
                    href="/contestant"
                    className="group mt-9 flex min-h-[50px] items-center justify-between border border-red-500/30 bg-red-600 px-4 py-4 text-[9px] font-black uppercase tracking-[0.16em] transition-all hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.2)] sm:mt-12 sm:px-5 sm:text-[10px] sm:tracking-[0.2em]"
                  >
                    Cast Your Votes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
          SELECTION PROTOCOL
      ========================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="mb-10 sm:mb-16"
            >
              <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-300 sm:text-[10px] sm:tracking-[0.3em]">
                The Selection Protocol
              </div>

              <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-6xl">
                THREE STEPS.
                <br />
                <span className="text-zinc-400">ONE BORDER.</span>
              </h2>
            </motion.div>

            <div className="grid border-l border-white/[0.08] md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: Users,
                  title: "ENTER",
                  subtitle: "STEP INTO THE GAME",
                  text: "Create your contestant profile, verify your identity, and complete your registration. Your journey begins here.",
                },
                {
                  number: "02",
                  icon: Vote,
                  title: "FIGHT",
                  subtitle: "EARN YOUR PLACE",
                  text: "Public voting opens. Every valid vote moves you closer to the selection line. Every position matters.",
                },
                {
                  number: "03",
                  icon: Trophy,
                  title: "CROSS",
                  subtitle: "CROSS THE BORDER",
                  text: "The Top 32 cross the selection line and enter THE BORDERBOUND. Four more will earn their place through the Wild Card route.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="group relative min-w-0 border-b border-r border-t border-white/[0.08] p-5 transition-colors hover:bg-white/[0.025] sm:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-black tracking-[0.2em] text-red-500">
                        {item.number}
                      </span>

                      <Icon className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-red-500" />
                    </div>

                    <h3 className="mt-14 text-2xl font-black tracking-tight sm:mt-20 sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs font-black tracking-[0.16em] text-red-500 sm:text-sm">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 max-w-sm text-xs leading-6 text-zinc-300 sm:mt-4 sm:text-sm sm:leading-7">
                      {item.text}
                    </p>

                    <div className="mt-8 h-px w-10 bg-red-500/50 transition-all duration-500 group-hover:w-24 sm:mt-10 sm:w-12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
          FINAL CTA
      ========================================================= */}
        <section className="relative overflow-hidden border-t border-white/[0.07] py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(220,38,38,0.12),transparent_40%)]" />

          <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-red-500/20 bg-red-500/10 sm:h-14 sm:w-14">
                <Play className="ml-0.5 h-4 w-4 fill-red-500 text-red-500 sm:h-5 sm:w-5" />
              </div>

              <div className="mt-6 text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-300 sm:mt-7 sm:text-[10px] sm:tracking-[0.4em]">
                The Borderbound
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:mt-4 sm:text-7xl">
                CROSS THE
                <br />
                <span className="text-red-500">LINE.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-zinc-300 sm:mt-6 sm:text-sm sm:leading-7">
                Thousands may enter. Only the strongest stories make it through.
              </p>

              <Link
                href="/register"
                className="group mt-7 inline-flex min-h-[50px] items-center gap-3 bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[0.17em] text-black transition-all hover:bg-zinc-200 sm:mt-9 sm:px-8 sm:text-[10px] sm:tracking-[0.2em]"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
        <RegistrationCountdown />
      </div>
    </>
  );
}
