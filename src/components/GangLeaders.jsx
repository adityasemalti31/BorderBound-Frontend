
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Lock,
  Sparkles,
} from "lucide-react";

const leaders = [
  {
    id: 1,
    name: "NAIRA",
    gang: "GANG 01",
    image: "/naira.jpeg",
    revealed: true,
    description: "The first force has entered the BorderBound.",
  },
  {
    id: 2,
    name: "ADDY JAIN",
    gang: "GANG 02",
    image: "/addy.jpeg",
    revealed: true,
    description: "Strategy meets survival.",
  },
  {
    id: 3,
    name: "SHUBHANGI JAISWAL",
    gang: "GANG 03",
    image: null,
    revealed: true,
    description: "A new contender enters the battlefield.",
  },
  {
    id: 4,
    name: "?",
    gang: "GANG 04",
    image: null,
    revealed: false,
    description: "The fourth leader has not been revealed yet.",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function GangLeaders() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const activeLeader = leaders[current];

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => {
        const next =
          prev + 1 >= leaders.length
            ? 0
            : prev + 1;

        return [next, 1];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ================= MANUAL SLIDE ================= */

  const paginate = (newDirection) => {
    setCurrent(([prev]) => {
      let next = prev + newDirection;

      if (next < 0) {
        next = leaders.length - 1;
      }

      if (next >= leaders.length) {
        next = 0;
      }

      return [next, newDirection];
    });
  };

  /* ================= SWIPE ================= */

  const handleSwipe = (offsetX) => {
    if (offsetX < -50) {
      paginate(1);
    }

    if (offsetX > 50) {
      paginate(-1);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#08090d] py-14 sm:py-20">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute left-0 top-1/3 h-48 w-48 rounded-full bg-red-900/10 blur-[90px] sm:h-64 sm:w-64" />

        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-700/5 blur-[100px] sm:h-72 sm:w-72" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-8 text-center sm:mb-12"
        >

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-red-400 sm:mb-4 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.25em]">

            <Crown
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            THE FOUR LEADERS

          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">

            LEAD THE

            <span className="ml-2 text-red-500">
              BORDER
            </span>

          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-400 sm:mt-4 sm:text-base sm:leading-6">

            Four leaders. Four gangs. One battlefield.

            <br className="hidden sm:block" />

            Only one will stand above the rest.

          </p>

        </motion.div>

        {/* ================= CAROUSEL ================= */}

        <div className="relative mx-auto max-w-5xl">

          <div
            className="
              relative
              h-[480px]
              overflow-hidden
              rounded-[1.5rem]
              border
              border-white/10
              bg-white/[0.025]
              shadow-2xl
              shadow-black/50
              backdrop-blur-sm
              sm:h-[600px]
              sm:rounded-[2rem]
            "
          >

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >

              <motion.div
                key={activeLeader.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"

                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}

                drag="x"

                dragConstraints={{
                  left: 0,
                  right: 0,
                }}

                dragElastic={0.8}

                onDragEnd={(event, info) => {
                  handleSwipe(info.offset.x);
                }}

                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >

                {/* ================= IMAGE ================= */}

                <div className="absolute inset-0">

                  {activeLeader.revealed &&
                  activeLeader.image ? (
                    <>

                      <Image
  src={activeLeader.image}
  alt={activeLeader.name}
  fill
  priority={activeLeader.id === 1}
  sizes="(max-width: 640px) 100vw, 1024px"
  className="object-cover object-center sm:object-[center_25%]"
/>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/45 to-black/10" />

                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />

                    </>
                  ) : (

                    /* ================= LOCKED ================= */

                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#0d0d12]">

                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.14),transparent_55%)]" />

                      <motion.div
                        animate={{
                          scale: [
                            1,
                            1.12,
                            1,
                          ],
                          opacity: [
                            0.2,
                            0.4,
                            0.2,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          absolute
                          h-56
                          w-56
                          rounded-full
                          border
                          border-red-500/30
                          sm:h-72
                          sm:w-72
                        "
                      />

                      <motion.div
                        animate={{
                          scale: [
                            1.1,
                            1,
                            1.1,
                          ],
                          opacity: [
                            0.1,
                            0.3,
                            0.1,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="
                          absolute
                          h-72
                          w-72
                          rounded-full
                          border
                          border-red-500/20
                          sm:h-96
                          sm:w-96
                        "
                      />

                      <motion.div
                        animate={{
                          y: [
                            0,
                            -8,
                            0,
                          ],
                          rotate: [
                            -2,
                            2,
                            -2,
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          relative
                          z-10
                          flex
                          h-28
                          w-28
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-red-500/20
                          bg-black/40
                          shadow-[0_0_70px_rgba(220,38,38,0.15)]
                          backdrop-blur-xl
                          sm:h-40
                          sm:w-40
                        "
                      >

                        <span className="text-6xl font-black text-red-500/80 sm:text-8xl">
                          ?
                        </span>

                      </motion.div>

                    </div>
                  )}

                </div>

                {/* ================= REVEAL BADGE ================= */}

                {!activeLeader.revealed && (

                  <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-8">

                    <div className="flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-950/50 px-3 py-1.5 text-[9px] font-black tracking-[0.15em] text-red-400 backdrop-blur-xl sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">

                      <Lock size={11} />

                      REVEAL SOON

                    </div>

                  </div>

                )}

                {/* ================= CONTENT ================= */}

                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-10 md:p-12">

                  <div className="max-w-2xl">

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.45,
                      }}
                      className="
                        mb-2
                        flex
                        items-center
                        gap-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-red-400
                        sm:mb-3
                        sm:gap-2
                        sm:text-xs
                        sm:tracking-[0.25em]
                      "
                    >

                      <Sparkles size={12} />

                      {activeLeader.revealed
                        ? "Gang Leader"
                        : "Identity Classified"}

                    </motion.div>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.45,
                      }}
                      className="
                        text-3xl
                        font-black
                        uppercase
                        tracking-tight
                        text-white
                        sm:text-5xl
                        md:text-6xl
                      "
                    >

                      {activeLeader.name}

                    </motion.h3>

                    {/* <motion.p
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.27,
                        duration: 0.45,
                      }}
                      className="
                        mt-2
                        max-w-lg
                        text-xs
                        leading-5
                        text-slate-300
                        sm:mt-3
                        sm:text-base
                        sm:leading-6
                      "
                    >

                      {activeLeader.description}

                    </motion.p> */}

                  </div>

                </div>

                {/* ================= NUMBER ================= */}

                <div className="absolute bottom-5 right-5 z-20 sm:bottom-8 sm:right-8">

                  <span className="text-5xl font-black text-white/5 sm:text-8xl">
                    0{activeLeader.id}
                  </span>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

        {/* ================= DOTS ================= */}

        <div className="mt-5 flex items-center justify-center gap-1.5 sm:mt-7 sm:gap-2">

          {leaders.map((leader, index) => (

            <button
              key={leader.id}
              onClick={() => {

                if (index === current) {
                  return;
                }

                const directionValue =
                  index > current
                    ? 1
                    : -1;

                setCurrent([
                  index,
                  directionValue,
                ]);

              }}
              aria-label={`Go to leader ${leader.id}`}
              className="group p-1"
            >

              <motion.span
                animate={{
                  width:
                    current === index
                      ? 28
                      : 7,

                  opacity:
                    current === index
                      ? 1
                      : 0.3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`
                  block
                  h-1.5
                  rounded-full
                  ${
                    leader.revealed
                      ? "bg-red-500"
                      : "bg-slate-500"
                  }
                `}
              />

            </button>

          ))}

        </div>

        {/* ================= STATUS ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-slate-500
            sm:mt-6
            sm:text-[10px]
            sm:tracking-[0.2em]
          "
        >

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />

          Swipe to explore the leaders

        </motion.div>

      </div>

    </section>
  );
}


