"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Loader2,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const { resetPassword, loading, error } = useAuthStore();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [success, setSuccess] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLocalError("");

    if (!token) {
      setLocalError("Invalid or missing reset link.");
      return;
    }

    if (password.length < 8) {
      setLocalError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(token, password);
      setSuccess(true);
    } catch (err) {}
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-rose-600/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="text-center mb-7">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-xl shadow-rose-500/20">
            <LockKeyhole className="w-6 h-6 text-white" />
          </div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-rose-400 font-bold mt-6">
            THE BORDERBOUND
          </p>

          <h1 className="text-3xl font-black tracking-tight mt-2">
            Create new password
          </h1>

          <p className="text-xs text-zinc-500 mt-3 leading-5">
            Choose a strong password for your BorderBound account.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 sm:p-8 shadow-2xl shadow-black/40">
          {success ? (
            <div className="text-center py-5">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>

              <h2 className="text-xl font-black mt-5">
                Password updated
              </h2>

              <p className="text-xs text-zinc-500 mt-2 leading-5">
                Your password has been changed successfully.
              </p>

              <button
                onClick={() => router.push("/")}
                className="mt-7 w-full h-13 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition"
              >
                Continue to BorderBound
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {(localError || error) && (
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-500/[0.06] border border-rose-500/20">
                  <AlertCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />

                  <p className="text-xs text-rose-300 leading-5">
                    {localError || error}
                  </p>
                </div>
              )}

              <PasswordField
                label="New Password"
                value={password}
                onChange={setPassword}
                show={showPassword}
                setShow={setShowPassword}
                placeholder="Minimum 8 characters"
              />

              <PasswordField
                label="Confirm Password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                show={showConfirm}
                setShow={setShowConfirm}
                placeholder="Re-enter your password"
              />

              <div className="rounded-2xl bg-white/[0.025] border border-white/[0.06] p-4">
                <p className="text-[10px] text-zinc-500 leading-5">
                  Use at least 8 characters. Avoid using an easily
                  guessable password.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || !token}
                className="w-full h-14 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-3 hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Updating password...
                  </>
                ) : (
                  <>
                    Update Password
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-[9px] text-zinc-700 mt-5">
          Secure BorderBound account recovery
        </p>
      </motion.div>
    </main>
  );
}

function PasswordField({
  label,
  value,
  onChange,
  show,
  setShow,
  placeholder,
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.14em] font-bold text-zinc-400">
        {label}
      </label>

      <div className="relative mt-2">
        <input
          type={show ? "text" : "password"}
          required
          minLength={8}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-12 rounded-2xl bg-white/[0.025] border border-white/[0.08] px-4 pr-12 text-sm text-white placeholder:text-zinc-700 outline-none focus:border-rose-500/40 focus:ring-4 focus:ring-rose-500/[0.06]"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-300 transition"
        >
          {show ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}