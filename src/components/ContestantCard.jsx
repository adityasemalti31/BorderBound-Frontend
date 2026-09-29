
"use client";

import Link from "next/link";
import { useVotingStore } from "@/store/votingStore";
import {
  Vote,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Minus,
  Crown,
  Sparkles,
  MapPin,
} from "lucide-react";

export default function ContestantCard({ contestant }) {
  const { openVoteModal } = useVotingStore();

  const rank = contestant.rank || 0;

  const isTop3 = rank > 0 && rank <= 3;
  const isTop32 = rank > 0 && rank <= 32;
  const isWildCardPool = rank > 32 && rank <= 50;

  const movement = contestant.movement || "SAME";

  const rankStyles = isTop3
    ? "border-amber-500/30 bg-amber-500/[0.025]"
    : isTop32
    ? "border-white/[0.08] bg-[#0b0e14]"
    : isWildCardPool
    ? "border-cyan-500/15 bg-cyan-500/[0.02]"
    : "border-white/[0.06] bg-[#0b0e14]";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-[#0e1118] ${rankStyles}`}
    >
      {/* TOP 3 ACCENT */}
      {isTop3 && (
        <>
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-300 to-red-500" />

          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/[0.08] blur-3xl" />
        </>
      )}

      {/* WILDCARD ACCENT */}
      {isWildCardPool && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      )}

      <div className="relative p-4 sm:p-5">

        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div
              className={`flex h-8 min-w-8 items-center justify-center rounded-lg border px-2 font-mono text-[10px] font-black ${
                isTop3
                  ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                  : isTop32
                  ? "border-red-500/20 bg-red-500/[0.07] text-red-400"
                  : isWildCardPool
                  ? "border-cyan-500/20 bg-cyan-500/[0.07] text-cyan-400"
                  : "border-white/[0.07] bg-white/[0.03] text-zinc-500"
              }`}
            >
              {isTop3 && (
                <Crown className="mr-1 h-3 w-3" />
              )}
              #{rank}
            </div>

            {contestant.selectionStatus === "wildcard" && (
              <span className="inline-flex items-center gap-1 rounded-md border border-cyan-500/20 bg-cyan-500/[0.06] px-2 py-1 text-[8px] font-black uppercase tracking-wider text-cyan-400">
                <Sparkles className="h-2.5 w-2.5" />
                Wild Card
              </span>
            )}
          </div>

          {/* MOVEMENT */}
          <div className="font-mono text-[10px] font-bold">

            {movement === "UP" && (
              <span className="flex items-center gap-1 text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" />
                +{contestant.rankChange || 1}
              </span>
            )}

            {movement === "DOWN" && (
              <span className="flex items-center gap-1 text-red-400">
                <TrendingDown className="h-3.5 w-3.5" />
                -{contestant.rankChange || 1}
              </span>
            )}

            {movement === "SAME" && (
              <span className="flex items-center gap-1 text-zinc-600">
                <Minus className="h-3 w-3" />
                SAME
              </span>
            )}
          </div>
        </div>

        {/* CONTESTANT */}
        <div className="flex items-center gap-4">

          <div
            className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border bg-[#080a0f] ${
              isTop3
                ? "border-amber-400/30"
                : isTop32
                ? "border-white/[0.08]"
                : isWildCardPool
                ? "border-cyan-500/20"
                : "border-white/[0.06]"
            }`}
          >
            {contestant.profilePhotoUrl ? (
              <img
                src={contestant.profilePhotoUrl}
                alt={contestant.fullName}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl font-black text-zinc-600">
                {contestant.fullName?.[0]}
              </div>
            )}

            {isTop3 && (
              <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-md bg-black/70 backdrop-blur">
                <Crown className="h-3 w-3 text-amber-400" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">

            <h3 className="truncate text-base font-black tracking-tight text-white transition-colors group-hover:text-red-400">
              {contestant.fullName}
            </h3>

            <div className="mt-1 flex items-center gap-1 truncate text-[10px] text-zinc-500">
              <MapPin className="h-3 w-3 shrink-0" />

              <span className="truncate">
                {contestant.city}, {contestant.state}
              </span>
            </div>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-zinc-700">
              {contestant.applicationId}
            </p>
          </div>
        </div>

        {/* VOTES */}
        <div className="mt-5 flex items-end justify-between border-t border-white/[0.06] pt-4">

          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-zinc-600">
              Verified Votes
            </p>

            <p
              className={`mt-1 font-mono text-xl font-black ${
                isTop3
                  ? "text-amber-400"
                  : isTop32
                  ? "text-white"
                  : isWildCardPool
                  ? "text-cyan-400"
                  : "text-zinc-300"
              }`}
            >
              {(contestant.totalValidVotes || 0).toLocaleString("en-IN")}
            </p>
          </div>

          <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-700">
            Votes
          </span>
        </div>

        {/* ACTIONS */}
        <div className="mt-4 grid grid-cols-2 gap-2">

          <Link
            href={`/contestant/${contestant.id || contestant._id}`}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.025] text-[10px] font-bold uppercase tracking-wider text-zinc-400 transition hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-white"
          >
            Profile
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={() => openVoteModal(contestant)}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-[10px] font-black uppercase tracking-wider text-white shadow-lg shadow-red-600/10 transition hover:from-red-500 hover:to-orange-500 active:scale-[0.97]"
          >
            <Vote className="h-3.5 w-3.5" />
            Vote Now
          </button>

        </div>
      </div>
    </article>
  );
}