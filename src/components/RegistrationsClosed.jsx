
"use client";

import { motion } from "framer-motion";
import {
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Users,
  Trophy,
} from "lucide-react";

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 7) % 100}%`,
  delay: (i % 6) * 0.7,
  duration: 5 + (i % 5) * 1.5,
  size: 2 + (i % 3),
}));

export default function RegistrationsClosed() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#050505] text-white overflow-hidden flex items-center justify-center px-4 py-16 sm:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[550px] h-[450px] bg-rose-600/[0.10] blur-[140px] rounded-full" />

        <div className="absolute bottom-[-180px] right-[-100px] w-[400px] h-[400px] bg-orange-500/[0.07] blur-[130px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* FLOATING PARTICLES */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-rose-400"
            style={{
              left: particle.left,
              bottom: "-10px",
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -900],
              opacity: [0, 0.65, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl mx-auto"
      >

        {/* BRAND */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            <div>
              <p className="text-sm font-black tracking-[0.12em]">
                THE BORDERBOUND
              </p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Official Competition Portal
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="relative rounded-[30px] sm:rounded-[38px] border border-white/[0.10] bg-[#0b0b0b]/90 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden">

          {/* TOP LINE */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-orange-500" />

          <div className="p-7 sm:p-12 text-center relative">

            {/* STATUS ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 180,
              }}
              className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-[32px] border border-dashed border-rose-500/30"
              />

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-[30px] bg-rose-500/20 blur-2xl"
              />

              <div className="absolute inset-[7px] rounded-[27px] bg-gradient-to-br from-rose-500/20 to-orange-500/10 border border-rose-500/25 flex items-center justify-center">
                <LockKeyhole
                  className="w-10 h-10 sm:w-12 sm:h-12 text-rose-400"
                  strokeWidth={1.5}
                />
              </div>

              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-[3px] border-[#0b0b0b]"
              />
            </motion.div>

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/[0.07] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />

              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-rose-400 font-bold">
                Registration Window Closed
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[42px] sm:text-6xl md:text-7xl font-black tracking-[-0.055em] leading-[0.98]"
            >
              THE GATES
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-300">
                ARE CLOSED.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-zinc-500 leading-7 max-w-md mx-auto mt-7"
            >
              The registration window for{" "}
              <span className="text-white font-semibold">
                The BorderBound
              </span>{" "}
              has officially come to an end.
              <br className="hidden sm:block" />
              We are no longer accepting new contestant applications.
            </motion.p>

            {/* DIVIDER */}
            <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-9" />

            {/* INFO CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 max-w-md mx-auto"
            >
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-left">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/10 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-rose-400" />
                </div>

                <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">
                  Applications
                </p>

                <p className="text-sm font-bold text-white mt-1">
                  Closed
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-left">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/10 flex items-center justify-center mb-3">
                  <Trophy className="w-4 h-4 text-orange-400" />
                </div>

                <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">
                  Competition
                </p>

                <p className="text-sm font-bold text-white mt-1">
                  In Progress
                </p>
              </div>
            </motion.div>

            {/* BOTTOM MESSAGE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />

                <span className="text-[10px] font-medium">
                  Official BorderBound Announcement
                </span>
              </div>

              <p className="text-[10px] text-zinc-700 mt-4 tracking-wide">
                THE BORDERBOUND © 2026
              </p>
            </motion.div>

          </div>
        </div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-[10px] text-zinc-700 mt-7 tracking-wider"
        >
          THE NEXT CHAPTER BEGINS.
        </motion.p>

      </motion.div>
    </main>
  );
}
