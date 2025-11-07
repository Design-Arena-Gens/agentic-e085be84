"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFA] text-neutral-900">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-center sm:justify-start sm:text-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-neutral-950"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Hello,
          </motion.h1>
          <motion.button
            className="group flex items-center gap-3 rounded-full border-2 border-dashed border-[#22A06B] bg-white px-6 py-3 shadow-[0_20px_40px_rgba(34,160,107,0.14)] transition-all duration-200 hover:-translate-y-1 hover:border-solid hover:shadow-[0_26px_50px_rgba(34,160,107,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#22A06B]/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl font-semibold leading-none text-neutral-900 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
              layoutId="plus-icon"
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
            >
              +
            </motion.span>
            <motion.span
              className="text-lg font-medium text-[#22A06B]"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Add Name
            </motion.span>
          </motion.button>
        </motion.div>
      </main>
      <motion.footer
        className="flex items-center justify-center pb-10 text-sm font-medium text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Tap the button to personalise this greeting.
      </motion.footer>
    </div>
  );
}
