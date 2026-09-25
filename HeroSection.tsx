"use client";
import { motion } from "framer-motion";
export function HeroSection() {
  return (
    <section className="text-center space-y-6 py-10">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="inline-block">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1]">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">$1,000,000+ EARNED.</span><br />
          <span className="text-rezona-orange">YOU&apos;RE NEXT!</span>
        </h1>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg sm:text-xl text-rezona-muted max-w-2xl mx-auto">Thousands of creators are making games in Rezona Lab. Publish and earn anywhere.</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="pt-4">
        <a href="#" className="inline-flex items-center gap-2 bg-rezona-orange hover:bg-rezona-orange-hover text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,107,43,0.4)] active:scale-95">Explore Rezona Lab</a>
      </motion.div>
    </section>
  );
}