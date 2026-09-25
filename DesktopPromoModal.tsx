"use client";
import { motion, AnimatePresence } from "framer-motion";
interface Props { onClose: () => void; }
function XIcon({ className }: { className?: string }) { return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>; }
function CopyIcon({ className }: { className?: string }) { return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>; }
export function DesktopPromoModal({ onClose }: Props) {
  const handleCopy = () => { navigator.clipboard.writeText("https://rezona.ai/studio/game"); alert("Link copied!"); };
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-rezona-card border border-rezona-border rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"><XIcon className="w-5 h-5" /></button>
          <div className="h-40 bg-gradient-to-br from-rezona-orange/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="text-6xl select-none">🦖</div>
          </div>
          <div className="p-6 text-center space-y-4">
            <div className="text-xs font-bold text-rezona-orange uppercase tracking-wider">Rezona Lab Game Studio</div>
            <h3 className="text-2xl font-bold text-white">Create your game on desktop!</h3>
            <p className="text-rezona-muted text-sm">With full control and advanced pro-grade tools!</p>
            <div className="flex items-center gap-2 bg-rezona-dark border border-rezona-border rounded-lg p-3">
              <code className="flex-1 text-sm text-rezona-muted text-left truncate">rezona.ai/studio/game</code>
              <button onClick={handleCopy} className="text-rezona-muted hover:text-white transition-colors shrink-0"><CopyIcon className="w-4 h-4" /></button>
            </div>
            <div className="space-y-3 pt-2">
              <button onClick={handleCopy} className="w-full bg-rezona-orange hover:bg-rezona-orange-hover text-white font-bold py-3 rounded-xl transition-all active:scale-95">Share the link!</button>
              <button onClick={onClose} className="w-full bg-rezona-border/30 hover:bg-rezona-border/50 text-white font-medium py-3 rounded-xl transition-all">Keep browsing</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}