"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ModelSelector } from "@/components/ModelSelector";
import { GameShowcase } from "@/components/GameShowcase";
import { DesktopPromoModal } from "@/components/DesktopPromoModal";

export default function RezonaLabLaunch() {
  const [showDesktopModal, setShowDesktopModal] = useState(false);
  return (
    <div className="min-h-screen bg-rezona-dark relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-rezona-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rezona-orange rounded-lg flex items-center justify-center font-bold text-black text-lg">R</div>
            <span className="text-xl font-bold tracking-tight">REZONA <span className="text-xs bg-rezona-orange/20 text-rezona-orange px-1.5 py-0.5 rounded ml-1">LAB</span></span>
          </div>
          <button onClick={() => setShowDesktopModal(true)} className="text-sm text-rezona-muted hover:text-white transition-colors">Create on Desktop →</button>
        </header>
        <HeroSection />
        <StatsBar />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-rezona-card border border-rezona-border rounded-2xl p-6 shadow-2xl">
          <label className="block text-rezona-muted text-sm mb-3 font-medium">Enter your idea to generate</label>
          <div className="flex gap-3">
            <input type="text" placeholder="A medieval tank battle game in a European city..." className="flex-1 bg-rezona-dark border border-rezona-border rounded-xl px-4 py-3 text-white placeholder-rezona-muted focus:outline-none focus:border-rezona-orange transition-colors" />
            <button className="bg-rezona-orange hover:bg-rezona-orange-hover text-white rounded-xl px-6 py-3 font-semibold transition-all active:scale-95 shrink-0">↑</button>
          </div>
          <div className="mt-4 pt-4 border-t border-rezona-border"><ModelSelector /></div>
          <div className="mt-4 flex flex-wrap gap-4 justify-center text-xs text-rezona-muted">
            <span className="font-semibold text-white mr-2">Support export to:</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-rezona-orange rounded-sm inline-block"/> Rezona</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded-sm inline-block"/> Android APK</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded-sm inline-block"/> Google Play</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-400 rounded-sm inline-block"/> Steam</span>
          </div>
        </motion.div>
        <FAQAccordion />
        <GameShowcase />
      </main>
      <footer className="relative z-10 text-center py-12 text-rezona-muted text-sm">
        <p>© 2026 Rezona Lab. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ by Rezonasaur HQ</p>
      </footer>
      {showDesktopModal && <DesktopPromoModal onClose={() => setShowDesktopModal(false)} />}
    </div>
  );
}