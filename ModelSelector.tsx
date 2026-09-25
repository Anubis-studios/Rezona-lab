"use client";
import { useState } from "react";
import { aiModels } from "@/lib/data";
function CheckIcon({ className }: { className?: string }) { return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>; }
export function ModelSelector() {
  const [selected, setSelected] = useState("Rez1");
  const [isOpen, setIsOpen] = useState(false);
  const selectedModel = aiModels.find(m => m.name === selected);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 bg-rezona-dark border border-rezona-border rounded-xl px-4 py-2.5 w-full text-left hover:border-rezona-orange/50 transition-colors">
        <div className="w-6 h-6 bg-rezona-orange rounded flex items-center justify-center text-[10px] font-bold text-black">R</div>
        <div className="flex-1 min-w-0"><div className="text-sm font-semibold text-white">{selected}</div><div className="text-xs text-rezona-muted truncate">{selectedModel?.desc}</div></div>
        <svg className={`w-4 h-4 text-rezona-muted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-rezona-card border border-rezona-border rounded-xl shadow-2xl z-20 max-h-64 overflow-y-auto">
          {aiModels.map((model) => (
            <button key={model.name} onClick={() => { setSelected(model.name); setIsOpen(false); }} className="w-full flex items-center gap-3 p-3 hover:bg-rezona-dark transition-colors text-left border-b border-rezona-border/50 last:border-0">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${selected === model.name ? 'border-rezona-orange bg-rezona-orange/10' : 'border-rezona-border'}`}>{selected === model.name && <CheckIcon className="w-3 h-3 text-rezona-orange" />}</div>
              <div className="min-w-0"><div className="text-sm font-medium text-white">{model.name}</div><div className="text-xs text-rezona-muted truncate">{model.desc}</div></div>
            </button>
          ))}
        </div>
      )}
      {isOpen && <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />}
    </div>
  );
}