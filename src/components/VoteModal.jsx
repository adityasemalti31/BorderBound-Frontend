"use client";

import { useVotingStore } from "@/store/votingStore";
import { useLeaderboardStore } from "@/store/leaderboardStore";
import {
  X,
  Vote,
  Sparkles,
  AlertCircle,
  CheckCircle,
  ShieldCheck,
  Users,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

export default function VoteModal() {
  const {
    isVoteModalOpen,
    targetContestant,
    votesCount,
    setVotesCount,
    closeVoteModal,
    submitVotePayment,
    packages,
    loading,
    error,
  } = useVotingStore();

  const { fetchLeaderboard } = useLeaderboardStore();

  if (!isVoteModalOpen || !targetContestant) return null;

  const unitPrice = 5;
  const totalAmount = votesCount * unitPrice;

  const handlePay = async (simulate = false) => {
    try {
      await submitVotePayment(simulate);
      fetchLeaderboard();
    } catch (err) {}
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-xl sm:p-5"
      onClick={closeVoteModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#09090b] shadow-[0_30px_100px_rgba(0,0,0,0.75)]"
      >
        {/* =====================================================
            AMBIENT GLOW
        ===================================================== */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-red-600/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-amber-500/[0.05] blur-3xl" />

        {/* TOP ACCENT */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-amber-400" />

        {/* =====================================================
            CLOSE
        ===================================================== */}
        <button
          type="button"
          onClick={closeVoteModal}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-500 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/[0.08] hover:text-white sm:right-5 sm:top-5"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-5 sm:p-7">
          {/* =====================================================
              HEADER
          ===================================================== */}
          <div className="mb-6 flex items-start gap-3 pr-10">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/[0.07]">
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />

              <Vote className="relative h-5 w-5 text-red-500" />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-red-500">
                  Public Voting
                </span>

                <span className="h-1 w-1 rounded-full bg-zinc-700" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                  Live
                </span>
              </div>

              <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                Cast Your Vote
              </h2>

              <p className="mt-1 text-[11px] text-zinc-500">
                ₹5 per vote • Support your favourite contestant
              </p>
            </div>
          </div>

          {/* =====================================================
              CONTESTANT
          ===================================================== */}
          <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-red-500 via-red-500 to-amber-400" />

            <div className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
              {/* IMAGE */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900 sm:h-[70px] sm:w-[70px]">
                {targetContestant.profilePhotoUrl ? (
                  <img
                    src={targetContestant.profilePhotoUrl}
                    alt={targetContestant.fullName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-xl font-black text-red-500">
                    {targetContestant.fullName?.[0]?.toUpperCase()}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* INFO */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-md border border-amber-500/20 bg-amber-500/[0.07] px-1.5 py-0.5 text-[7px] font-black uppercase tracking-[0.15em] text-amber-400">
                    Rank #{targetContestant.rank || "-"}
                  </span>
                </div>

                <h3 className="truncate text-sm font-black text-white sm:text-base">
                  {targetContestant.fullName}
                </h3>

                <p className="mt-0.5 truncate text-[10px] text-zinc-500">
                  {targetContestant.applicationId ||
                    targetContestant.city ||
                    "Contestant"}
                </p>
              </div>

              {/* CURRENT VOTES */}
              <div className="hidden shrink-0 text-right sm:block">
                <span className="mb-1 block text-[7px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Current Votes
                </span>

                <div className="flex items-center justify-end gap-1.5">
                  <Users className="h-3 w-3 text-red-500" />

                  <span className="text-lg font-black text-white">
                    {targetContestant.totalValidVotes || 0}
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE CURRENT VOTES */}
            <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-2.5 sm:hidden">
              <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                Current Votes
              </span>

              <div className="flex items-center gap-1.5">
                <Users className="h-3 w-3 text-red-500" />

                <span className="text-xs font-black text-white">
                  {targetContestant.totalValidVotes || 0}
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              PACKAGE
          ===================================================== */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300">
                Choose Votes
              </p>

              <p className="mt-0.5 text-[9px] text-zinc-600">
                Select a package or enter custom amount
              </p>
            </div>

            <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-400">
              <CheckCircle className="h-3 w-3" />
              ₹5 / Vote
            </div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
            {packages?.map((pkg) => {
              const selected = votesCount === pkg.votes;

              return (
                <button
                  key={pkg.votes}
                  type="button"
                  onClick={() => setVotesCount(pkg.votes)}
                  className={`group relative overflow-hidden rounded-xl border p-3 text-center transition-all duration-300 ${
                    selected
                      ? "border-red-500/60 bg-red-500/[0.10] shadow-[0_8px_30px_rgba(239,68,68,0.12)]"
                      : "border-white/[0.07] bg-white/[0.025] hover:border-white/[0.14] hover:bg-white/[0.045]"
                  }`}
                >
                  {selected && (
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 to-amber-400" />
                  )}

                  <div
                    className={`mb-1 text-sm font-black ${
                      selected ? "text-white" : "text-zinc-300"
                    }`}
                  >
                    {pkg.votes}
                  </div>

                  <div className="text-[7px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                    Votes
                  </div>

                  <div
                    className={`mt-2 text-[10px] font-black ${
                      selected ? "text-amber-400" : "text-zinc-500"
                    }`}
                  >
                    ₹{pkg.amount}
                  </div>

                  {selected && (
                    <div className="absolute right-2 top-2">
                      <CheckCircle className="h-3 w-3 text-red-400" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              CUSTOM VOTES
          ===================================================== */}
          <div className="mb-5">
            <label
              htmlFor="customVotes"
              className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400"
            >
              Custom Votes
            </label>

            <div className="relative">
              <Vote className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

              <input
                id="customVotes"
                type="number"
                min="1"
                value={votesCount}
                onChange={(e) => {
                  const value = Number(e.target.value);

                  setVotesCount(value < 1 ? 1 : value);
                }}
                className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-28 text-sm font-black text-white outline-none transition-all placeholder:text-zinc-700 focus:border-red-500/50 focus:bg-white/[0.04] focus:ring-4 focus:ring-red-500/[0.06]"
                placeholder="Enter votes"
              />

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600">
                  Total
                </span>

                <span className="ml-1 text-xs font-black text-amber-400">
                  ₹{totalAmount}
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              ERROR
          ===================================================== */}
          {error && (
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] p-3.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />

              <span className="text-[10px] font-semibold leading-4 text-red-300">
                {error}
              </span>
            </div>
          )}

          {/* =====================================================
              PAYMENT SUMMARY
          ===================================================== */}
          <div className="mb-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Your Selection
                </span>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-black text-white">
                    {votesCount}
                  </span>

                  <span className="text-[9px] text-zinc-600">
                    Votes
                  </span>

                  <span className="text-zinc-700">×</span>

                  <span className="text-[9px] font-bold text-zinc-500">
                    ₹{unitPrice}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                  Total Payable
                </span>

                <div className="mt-0.5 flex items-center justify-end gap-0.5">
                  <IndianRupee className="h-4 w-4 text-amber-400" />

                  <span className="text-xl font-black text-amber-400">
                    {totalAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              PAY BUTTON
          ===================================================== */}
          <button
            type="button"
            onClick={() => handlePay(false)}
            disabled={loading || votesCount < 1}
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-500 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_35px_rgba(220,38,38,0.2)] transition-all duration-300 hover:from-red-500 hover:via-red-500 hover:to-amber-400 hover:shadow-[0_15px_45px_rgba(220,38,38,0.3)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="absolute inset-y-0 -left-20 w-10 rotate-[20deg] bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            {loading ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                <span className="relative">
                  Processing Payment...
                </span>
              </>
            ) : (
              <>
                <Sparkles className="relative h-4 w-4" />

                <span className="relative">
                  Pay ₹{totalAmount} with PayU
                </span>

                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>

          {/* =====================================================
              SECURITY FOOTER
          ===================================================== */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <ShieldCheck className="h-3 w-3 text-emerald-500/70" />

            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-zinc-700">
              Secure payment • Powered by PayU
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}