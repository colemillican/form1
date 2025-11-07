"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Brand name */
const BRAND_NAME = "LocalLink Digital";

/* Inline logo */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="LocalLink Digital logo">
      <defs>
        <linearGradient id="llg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#23B8A5" />
          <stop offset="100%" stopColor="#9BE564" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#llg)" />
      <path
        d="M20 20v24h12M32 44h12V20"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Animation variants */
const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween", duration: 0.25 } },
  exit: { x: "100%", transition: { type: "tween", duration: 0.2 } },
} as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
} as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black md:hidden shadow">
      {/* Header row */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <LogoMark size={28} />
          <span className="text-white text-base font-semibold tracking-wide">
            {BRAND_NAME}
          </span>
        </div>

        <button
          className="text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Animated overlay + drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fade overlay (transparent click-away with soft fade for polish) */}
            <motion.button
              className="fixed inset-0 z-40 md:hidden bg-black/0"
              onClick={close}
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Side drawer */}
            <motion.aside
              className="fixed top-0 right-0 z-50 h-screen w-[78%] max-w-[320px] bg-black border-l border-neutral-800"
              role="dialog"
              aria-modal="true"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <LogoMark size={22} />
                  <span className="text-white text-sm font-semibold">{BRAND_NAME}</span>
                </div>
                <button className="text-white" onClick={close} aria-label="Close menu">
                  <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer links (staggered fade/slide) */}
              <motion.nav
                className="flex flex-col px-4 py-6 gap-3 text-white text-base"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="py-2 px-2 rounded hover:bg-neutral-900 transition"
                    variants={itemVariants}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Bottom branding (gentle fade/slide up) */}
              <motion.div
                className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <LogoMark size={40} />
                <span className="text-white mt-2 text-sm font-semibold">{BRAND_NAME}</span>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}



