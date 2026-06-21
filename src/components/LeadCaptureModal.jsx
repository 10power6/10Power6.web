import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X } from "lucide-react";
import { useNavigateToContact } from "../hooks/useNavigateToContact";

const STORAGE_KEY = "leadCaptureModalDismissed";
const SCROLL_THRESHOLD = 0.6;
const TIME_THRESHOLD_MS = 45000;
const PHONE_HREF = "tel:+1234567890";

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggeredRef = useRef(false);
  const closeButtonRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const navigateToContact = useNavigateToContact();

  const dismiss = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  const tryOpen = useCallback(() => {
    if (triggeredRef.current || sessionStorage.getItem(STORAGE_KEY)) return;
    triggeredRef.current = true;
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(tryOpen, TIME_THRESHOLD_MS);

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_THRESHOLD) {
        tryOpen();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tryOpen]);

  useEffect(() => {
    if (!isOpen) return;

    scrollPositionRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, dismiss]);

  const handleSendInquiry = () => {
    dismiss();
    navigateToContact();
  };

  const handleCallNow = () => {
    dismiss();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ minHeight: "100dvh" }}
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            aria-label="Close lead capture dialog"
            onClick={dismiss}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            aria-describedby="lead-modal-description"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[min(90dvh,720px)] w-[92vw] max-w-[600px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/85 shadow-[0_32px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-[90vw] md:w-full"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_50%)]" />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={dismiss}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-300 shadow-lg backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="relative overflow-y-auto overscroll-contain p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-white/10">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-white/10">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>

              <h2 id="lead-modal-title" className="pr-10 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Need Help With Your Project?
              </h2>
              <p id="lead-modal-description" className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Get a free consultation and receive a response within 24 hours.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  onClick={handleCallNow}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-95"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={handleSendInquiry}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-400/40 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send Inquiry
                </button>
              </div>

              <p className="mt-5 text-center text-xs text-slate-500">
                No obligation. Free consultation.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
