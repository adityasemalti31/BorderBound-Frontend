
"use client";

import { useEffect, Suspense } from "react";
import { useLeaderboardStore } from "@/store/leaderboardStore";
import { useSearchParams } from "next/navigation";
import ContestantCard from "@/components/ContestantCard";
import {
  Vote,
  Search,
  RefreshCw,
  Trophy,
  Crown,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Users,
  Flame,
  ShieldCheck,
} from "lucide-react";

function LeaderboardContent() {
  const {
    leaderboard,
    pagination,
    meta,
    loading,
    search,
    city,
    setSearch,
    setCity,
    fetchLeaderboard,
  } = useLeaderboardStore();

  const searchParams = useSearchParams();

  const votingStatus = searchParams?.get("voting");
  const votesCount = searchParams?.get("votes");
  const reason = searchParams?.get("reason");

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const top32 = leaderboard.filter((c) => c.rank <= 32);
  const wildcardPool = leaderboard.filter(
    (c) => c.rank > 32 && c.rank <= 50
  );
  const remaining = leaderboard.filter((c) => c.rank > 50);

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* SUCCESS ALERT */}
        {votingStatus === "success" && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.07]">
            <div className="flex items-center gap-4 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-bold text-emerald-300">
                  VOTE PAYMENT SUCCESSFUL
                </p>
                <p className="mt-0.5 text-xs text-emerald-200/60">
                  Successfully allocated {votesCount || "your"} votes. Rankings
                  have been updated.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FAILED ALERT */}
        {votingStatus === "failed" && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-rose-500/20 bg-rose-500/[0.07]">
            <div className="flex items-center gap-4 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10">
                <AlertCircle className="h-5 w-5 text-rose-400" />
              </div>

              <div>
                <p className="text-sm font-bold text-rose-300">
                  VOTE PAYMENT FAILED
                </p>
                <p className="mt-0.5 text-xs text-rose-200/60">
                  {reason || "The voting transaction could not be completed."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* HERO HEADER */}
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0e14]">
          <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-amber-500/[0.06] blur-3xl" />

          <div className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              <div className="max-w-3xl">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.07] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
                    Live Selection
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Trophy className="hidden h-9 w-9 text-amber-400 sm:block" />

                  <h1 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    THE
                    <span className="text-red-500"> RANKINGS</span>
                  </h1>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                  Every verified vote changes the race. Track contestant
                  positions, support your contender, and watch the selection
                  line move.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Verified Votes
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2">
                    <Flame className="h-3.5 w-3.5 text-red-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Live Rankings
                    </span>
                  </div>
                </div>
              </div>

              {/* TOTAL VOTES */}
              <div className="shrink-0 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-5 lg:min-w-[220px]">
                <div className="flex items-center gap-2">
                  <Vote className="h-4 w-4 text-amber-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    Total Valid Votes
                  </span>
                </div>

                <div className="mt-2 font-mono text-3xl font-black text-amber-400">
                  {(meta?.totalVotesCast || 0).toLocaleString("en-IN")}
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-600">
                  Updated with verified votes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="mb-10 rounded-2xl border border-white/[0.07] bg-[#0b0e14] p-3">
          <div className="flex flex-col gap-3 sm:flex-row">

            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

              <input
                type="text"
                placeholder="Search contestant by name or BB ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 w-full rounded-xl border border-white/[0.06] bg-[#080a0f] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/40 focus:ring-1 focus:ring-red-500/10"
              />
            </div>

            <button
              onClick={fetchLeaderboard}
              disabled={loading}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 text-xs font-bold uppercase tracking-wider text-zinc-300 transition hover:border-red-500/30 hover:bg-red-500/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </button>
          </div>
        </section>

        {/* LOADING */}
        {loading && leaderboard.length === 0 && (
          <div className="rounded-3xl border border-white/[0.06] bg-[#0b0e14] py-24 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/[0.06]">
              <RefreshCw className="h-6 w-6 animate-spin text-red-500" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
              Loading Live Rankings
            </p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && leaderboard.length === 0 && (
          <div className="rounded-3xl border border-white/[0.06] bg-[#0b0e14] px-6 py-24 text-center">
            <Vote className="mx-auto mb-4 h-10 w-10 text-zinc-700" />

            <h3 className="text-lg font-black text-white">
              NO CONTESTANTS FOUND
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              No approved live contestants match your search.
            </p>
          </div>
        )}

        {/* ================= TOP 32 ================= */}
        {top32.length > 0 && (
          <section className="mb-14">

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1 w-8 bg-red-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                    Selection Zone
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Crown className="h-6 w-6 text-amber-400" />

                  <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    TOP 32
                  </h2>
                </div>

                <p className="mt-1 text-xs text-zinc-500">
                  Direct selection positions
                </p>
              </div>

              <div className="rounded-full border border-red-500/20 bg-red-500/[0.06] px-3 py-1.5">
                <span className="font-mono text-[10px] font-bold text-red-400">
                  01 — 32
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-red-500/[0.025] blur-xl" />

              <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {top32.map((c) => (
                  <ContestantCard
                    key={c.id || c._id}
                    contestant={c}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= WILDCARD ================= */}
        {wildcardPool.length > 0 && (
          <section className="mb-14">

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1 w-8 bg-cyan-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                    Wild Card Route
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-cyan-400" />

                  <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    WILD CARD
                  </h2>
                </div>

                <p className="mt-1 text-xs text-zinc-500">
                  Positions 33–50 remain in contention
                </p>
              </div>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1.5">
                <span className="font-mono text-[10px] font-bold text-cyan-400">
                  33 — 50
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {wildcardPool.map((c) => (
                <ContestantCard
                  key={c.id || c._id}
                  contestant={c}
                />
              ))}
            </div>
          </section>
        )}

        {/* ================= OUTSIDE TOP 50 ================= */}
        {remaining.length > 0 && (
          <section>

            <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                  Current Standings
                </p>

                <h2 className="mt-1 text-xl font-black text-zinc-300">
                  OUTSIDE TOP 50
                </h2>
              </div>

              <Users className="h-5 w-5 text-zinc-700" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {remaining.map((c) => (
                <ContestantCard
                  key={c.id || c._id}
                  contestant={c}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default function LeaderboardPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#07090d] text-xs font-mono uppercase tracking-widest text-zinc-500">
          Loading Leaderboard...
        </div>
      }
    >
      <LeaderboardContent />
    </Suspense>
  );
}
