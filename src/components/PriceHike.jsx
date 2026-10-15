"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PriceHike() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={reveal}
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#080809]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-red-500/[0.06] blur-[110px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-amber-500/[0.04] blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-red-500" />

            <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
              <TrendingUp className="h-3.5 w-3.5" />
              Registration Pricing
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-red-500" />
          </motion.div>

          <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            The Earlier You Enter,
            <br />
            <span className="text-red-500">The Less You Pay.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Registration fees increase as the registration window moves
            forward.
            <span className="text-zinc-200">
              {" "}
              Choose your window and take your first step toward crossing the
              Border.
            </span>
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-red-500/30 bg-red-500/[0.06] p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-600/[0.12] blur-[80px] transition-all duration-700 group-hover:bg-red-600/[0.2]" />

              <div className="absolute left-0 top-0 h-[2px] w-1/2 bg-gradient-to-r from-red-500 to-transparent transition-all duration-700 group-hover:w-full" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.08] text-red-400">
                    <Zap className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-400">
                    Early Registration
                  </span>
                </div>

                <div className="mt-9">
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-black tracking-[-0.08em] text-white sm:text-7xl">
                      ₹499
                    </span>

                    <span className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Registration Fee
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-300">
                    <CalendarDays className="h-3.5 w-3.5 text-red-400" />
                    05 October — 30 October
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-5">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-300">
                    <ShieldCheck className="h-3.5 w-3.5 text-red-400" />
                    Enter early. Secure your shot.
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center py-1 md:px-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.06]"
              >
                <div className="absolute inset-0 animate-ping rounded-full border border-red-500/15" />

                <ArrowRight className="relative hidden h-5 w-5 text-red-500 sm:block" />

                <div className="relative sm:hidden">
                  <ArrowRight className="h-5 w-5 rotate-90 text-red-500" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.03] blur-[80px]" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-zinc-400">
                    <Clock3 className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    Regular Registration
                  </span>
                </div>

                <div className="mt-9">
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-black tracking-[-0.08em] text-zinc-200 sm:text-7xl">
                      ₹1,499
                    </span>

                    <span className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                      Registration Fee
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    31 October — 15 November
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-5">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <TrendingUp className="h-3.5 w-3.5 text-red-500" />
                    The price goes up. The Border doesn&apos;t wait.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-24 max-w-5xl border-t border-white/[0.07] pt-20 sm:mt-32 sm:pt-24"
          >
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-red-500" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-400">
                  Why Does The Price Increase?
                </span>

                <span className="h-px w-10 bg-gradient-to-l from-transparent to-red-500" />
              </div>

              <h3 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                The Closer You Get,
                <br />
                <span className="text-red-500">The Higher The Stakes.</span>
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                Registration moves through defined phases as THE BORDERBOUND
                approaches its selection and voting stages. The early window
                gives applicants access to the lower registration fee before
                the next phase begins.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.045] p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.08] text-red-400">
                    <Zap className="h-4 w-4" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-red-400">
                    01 — Early Entry
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-sm leading-7 text-zinc-300">
                    Register during the early window at ₹499 and enter the
                    official selection process before the registration fee
                    increases.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    <CalendarDays className="h-4 w-4 text-red-400" />
                    05 OCT — 19 OCT
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-zinc-400">
                    <TrendingUp className="h-4 w-4" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400">
                    02 — The Competition Grows
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-sm leading-7 text-zinc-300">
                    As registration continues, more applicants enter the
                    selection pool and the process moves closer to screening
                    and public voting.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    <CalendarDays className="h-4 w-4 text-red-400" />
                    20 OCT — 05 NOV
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-14 max-w-3xl text-center sm:mt-16"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500/60" />

            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">
              Registration Deadline
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-red-500/60" />
          </div>

          <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            Registration Closes{" "}
            <span className="text-red-500">05 November 2026.</span>
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-zinc-500 sm:text-sm">
            Once registration closes, applications will no longer be
            accepted.
          </p>

          <Link
            href="/register"
            className="group mx-auto mt-7 inline-flex items-center gap-3 border border-red-500/30 bg-red-600 px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
          >
            Register Now

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}