
"use client";

import { useEffect, useState, forwardRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Vote,
  User,
  LogOut,
  Shield,
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useConfigStore } from "@/store/configStore";
import Image from "next/image";

import logo from "../../public/logo2.png";

const LogoutModal = ({ open, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden border border-white/[0.09] bg-[#0a0a0c] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-red-600/15 blur-3xl" />

            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

            <div className="relative p-6 sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-red-500/20 bg-red-500/[0.07]">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>

              <div className="mb-7">
                <p className="mb-2 text-[8px] font-black uppercase tracking-[0.3em] text-red-500">
                  End Session
                </p>

                <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  Logout from BorderBound?
                </h2>

                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  Are you sure you want to logout from your account? You can
                  sign in again anytime.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={onConfirm}
                  className="border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
                >
                  Sign Out
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="group flex items-center justify-center gap-2 border border-red-500/30 bg-red-600 px-4 py-3.5 text-[9px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                >
                  <LogOut className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  Continue
                </button>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-zinc-800" />

                <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-700">
                  The BorderBound
                </span>

                <span className="h-px w-8 bg-zinc-800" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = forwardRef(function Navbar({ onVisibilityChange }, ref) {
  const { user, checkAuth, openAuthModal, logout } = useAuthStore();
  const { configData, fetchPublicConfig } = useConfigStore();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  useEffect(() => {
    checkAuth();
    fetchPublicConfig();
  }, [checkAuth, fetchPublicConfig]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateNavbar = (hidden) => {
      setNavbarHidden(hidden);

      window.dispatchEvent(
        new CustomEvent("navbar-visibility", {
          detail: { hidden },
        })
      );

      if (onVisibilityChange) {
        onVisibilityChange(hidden);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        updateNavbar(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        updateNavbar(true);
        setMobileOpen(false);
      } else if (currentScrollY < lastScrollY) {
        updateNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onVisibilityChange]);

  const regAmount = configData?.registration?.amount || 499;
  const isRegClosed = configData?.registration?.isClosed;

  const handleLogoutClick = () => {
    setMobileOpen(false);
    setLogoutOpen(true);
  };

  const handleLogoutConfirm = async () => {
    setLogoutOpen(false);

    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.28,
        ease: [0.4, 0, 0.2, 1],
      },
    },

    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -12,
      scale: 0.97,
    },

    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      <header
        ref={ref}
        className={`sticky top-0 z-40 w-full border-b border-white/[0.07] bg-[#050506]/95 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          navbarHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="mx-auto hidden h-[76px] w-full max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center px-6 lg:grid lg:px-10 xl:px-12">

          {/* LEFT */}
          <nav className="flex items-center gap-2 justify-self-start">
            <Link
              href="/leaderboard"
              className="group flex h-11 items-center gap-2.5 border border-transparent px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500 transition-all duration-300 hover:border-white/[0.06] hover:bg-white/[0.025] hover:text-white"
            >
              <Vote className="h-3.5 w-3.5 text-red-500 transition-transform group-hover:scale-110" />
              Live Leaderboard
            </Link>

            {user?.role === "admin" && (
              <Link
                href="/admin"
                className="group flex h-11 items-center gap-2 border border-transparent px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400 transition-all duration-300 hover:border-cyan-500/10 hover:bg-cyan-500/[0.03] hover:text-cyan-300"
              >
                <Shield className="h-3.5 w-3.5" />
                Admin
              </Link>
            )}
          </nav>

          {/* CENTER LOGO */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group relative flex h-full items-center justify-center px-8"
          >
            <div className="absolute inset-x-4 top-1/2 h-12 -translate-y-1/2 bg-red-600/[0.03] blur-2xl transition-all duration-500 group-hover:bg-red-600/[0.07]" />

            <Image
              src={logo}
              alt="The BorderBound"
              width={170}
              height={70}
              priority
              className="relative h-auto w-[125px] object-contain transition-transform duration-300 group-hover:scale-[1.03] xl:w-[140px]"
            />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center justify-self-end gap-3">

            {!isRegClosed && (
              <div className="hidden items-center gap-2 border border-red-500/15 bg-red-500/[0.04] px-3.5 py-2 lg:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                </span>

                <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-600">
                  Reg Fee
                </span>

                <span className="text-xs font-black text-amber-400">
                  ₹{regAmount}
                </span>
              </div>
            )}

            <Link
              href="/register"
              className="group flex h-11 items-center gap-2 border border-red-500/20 bg-red-600 px-4 text-[9px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.18)]"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300 transition-transform group-hover:rotate-12" />

              <span className="hidden xl:inline">
                {user ? "Register as Contestant" : "Register"}
              </span>

              <span className="xl:hidden">
                Register
              </span>

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="group flex h-11 items-center gap-2 border border-white/[0.08] bg-white/[0.025] px-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex h-6 w-6 items-center justify-center bg-zinc-800">
                    <User className="h-3 w-3 text-zinc-400 group-hover:text-amber-400" />
                  </div>

                  <span className="hidden text-[9px] font-bold uppercase tracking-[0.13em] text-zinc-300 xl:block">
                    {user.fullName?.split(" ")[0]}
                  </span>
                </Link>

                <button
                  onClick={handleLogoutClick}
                  title="Logout"
                  className="flex h-11 w-10 items-center justify-center border border-white/[0.07] bg-white/[0.02] text-zinc-600 transition-all hover:border-red-500/20 hover:bg-red-500/[0.06] hover:text-red-400"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </>
            ) : (
              <button
                onClick={() => openAuthModal("login")}
                className="h-11 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-white"
              >
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* ================= MOBILE / TABLET NAVBAR ================= */}
        <div className="flex h-[68px] w-full items-center justify-between px-4 sm:px-6 lg:hidden">

          <div className="w-10" />

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="The BorderBound"
              width={150}
              height={60}
              priority
              className="h-auto w-[115px] sm:w-[130px] transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-colors hover:border-red-500/30 hover:bg-red-500/[0.05] hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden border-t border-white/[0.07] bg-[#050506]/98 backdrop-blur-2xl lg:hidden"
            >
              <motion.div className="space-y-2 px-4 py-4">

                <motion.div variants={itemVariants}>
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between border border-white/[0.06] bg-white/[0.015] px-4 py-4 transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center border border-white/[0.07] bg-white/[0.025]">
                        <Vote className="h-3.5 w-3.5 text-zinc-500 group-hover:text-red-500" />
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white">
                        Home
                      </span>
                    </div>

                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 group-hover:text-red-500" />
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/leaderboard"
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between border border-white/[0.06] bg-white/[0.015] px-4 py-4 transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center border border-red-500/15 bg-red-500/[0.05]">
                        <Vote className="h-3.5 w-3.5 text-red-500" />
                      </div>

                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white">
                          Live Leaderboard
                        </span>

                        <span className="mt-1 block text-[7px] uppercase tracking-[0.15em] text-zinc-700">
                          Track The Battle
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 group-hover:text-red-500" />
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="group relative flex items-center justify-between overflow-hidden border border-red-500/25 bg-red-600 px-4 py-4 transition-all duration-300 hover:bg-red-500"
                  >
                    <div className="relative flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center border border-white/20 bg-white/10">
                        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                      </div>

                      <div>
                        <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white">
                          Register Contestant
                        </span>

                        <span className="mt-1 block text-[7px] uppercase tracking-[0.15em] text-white/50">
                          Enter The Border
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="relative h-4 w-4 text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>

                {user?.role === "admin" && (
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/admin"
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border border-cyan-500/10 bg-cyan-500/[0.02] px-4 py-4 transition-all duration-300 hover:bg-cyan-500/[0.05]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center border border-cyan-500/15 bg-cyan-500/[0.05]">
                          <Shield className="h-3.5 w-3.5 text-cyan-400" />
                        </div>

                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                          Admin Portal
                        </span>
                      </div>

                      <ArrowUpRight className="h-3.5 w-3.5 text-cyan-500/50 group-hover:text-cyan-400" />
                    </Link>
                  </motion.div>
                )}

                {user && (
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border border-white/[0.06] bg-white/[0.015] px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center border border-white/[0.07] bg-white/[0.025]">
                          <User className="h-3.5 w-3.5 text-zinc-400" />
                        </div>

                        <div>
                          <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                            Dashboard
                          </span>

                          <span className="mt-1 block text-[7px] uppercase tracking-[0.15em] text-zinc-700">
                            {user.fullName}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700" />
                    </Link>
                  </motion.div>
                )}

                {user && (
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={handleLogoutClick}
                      className="group flex w-full items-center justify-between border border-red-500/10 bg-red-500/[0.025] px-4 py-4 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center border border-red-500/15 bg-red-500/[0.05]">
                          <LogOut className="h-3.5 w-3.5 text-red-400" />
                        </div>

                        <div className="text-left">
                          <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white">
                            Logout
                          </span>

                          <span className="mt-1 block text-[7px] uppercase tracking-[0.15em] text-zinc-700">
                            End Current Session
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 group-hover:text-red-500" />
                    </button>
                  </motion.div>
                )}

                {!user && (
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 gap-2 pt-1"
                  >
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        openAuthModal("login");
                      }}
                      className="border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      Sign In
                    </button>

                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        openAuthModal("register");
                      }}
                      className="bg-red-600 px-4 py-3.5 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-red-500"
                    >
                      Create Account
                    </button>
                  </motion.div>
                )}

                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center gap-2 pt-2"
                >
                  <span className="h-px w-8 bg-zinc-800" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                    The Borderbound
                  </span>

                  <span className="h-px w-8 bg-zinc-800" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <LogoutModal
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
});

export default Navbar;
