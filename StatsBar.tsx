"use client";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
export function StatsBar() {
  const items = [{ label: "Creators", value: stats.creators }, { label: "Games", value: stats.games }, { label: "Earned", value: stats.earned }];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-3 gap-4 bg-rezona-card/50 backdrop-blur-sm border border-rezona-border rounded-2xl p-6">
      {items.map((item, i) => (<div key={i} className="text-center"><div className="text-2xl sm:text-3xl font-bold text-white">{item.value}</div><div className="text-sm text-rezona-muted mt-1">{item.label}</div></div>))}
    </motion.div>
  );
}