"use client";
import { motion } from "framer-motion";
const games = [
  { title: "Steel Boulevard", genre: "Action", gradient: "from-gray-700 to-gray-500" },
  { title: "Joker's Gambit", genre: "Strategy", gradient: "from-purple-800 to-purple-600" },
  { title: "Fable Realms", genre: "RPG", gradient: "from-green-800 to-green-600" }
];
export function GameShowcase() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between"><h2 className="text-2xl font-bold">All Games</h2><button className="text-sm text-rezona-orange hover:text-white transition-colors">View All →</button></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`group relative aspect-video rounded-xl overflow-hidden border border-rezona-border cursor-pointer bg-gradient-to-br ${game.gradient}`}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"><h3 className="font-bold text-white">{game.title}</h3><p className="text-xs text-rezona-muted">{game.genre}</p></div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"><button className="bg-rezona-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Remix Game</button></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}