"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/lib/data";
function ChevronDownIcon({ className }: { className?: string }) { return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>; }
export function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqData.map((faq) => (
          <div key={faq.id} className="bg-rezona-card border border-rezona-border rounded-xl overflow-hidden transition-colors hover:border-rezona-orange/30">
            <button onClick={() => setOpenId(openId === faq.id ? null : faq.id)} className="w-full flex items-center justify-between p-5 text-left">
              <span className="font-semibold text-white pr-4">{faq.question}</span>
              <ChevronDownIcon className={`w-5 h-5 text-rezona-orange shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>{openId === faq.id && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><div className="p-5 pt-0 text-rezona-muted leading-relaxed border-t border-rezona-border/50">{faq.answer}</div></motion.div>)}</AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}