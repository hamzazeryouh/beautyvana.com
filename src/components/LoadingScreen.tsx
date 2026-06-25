import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden font-sans select-none"
         style={{ background: 'radial-gradient(circle at top left, #fdfcfb 0%, #e2d1c3 100%)' }}>
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-pink-200/60 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-indigo-100/50"></div>

      {/* Frosted Glass Container */}
      <div className="relative z-10 flex flex-col items-center p-12 bg-white/30 backdrop-blur-2xl border border-white/50 rounded-[40px] shadow-2xl shadow-slate-300/40 max-w-sm w-full mx-6 text-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/80 text-[11px] uppercase tracking-[0.25em] font-semibold text-rose-800 mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-spin" />
          <span>Ritual Preparing</span>
        </div>

        <div className="text-4xl font-serif tracking-tighter text-slate-800 mb-3">
          BEAUTY<span className="font-light italic text-rose-900">VANA</span>
        </div>
        <p className="text-xs text-slate-600 tracking-wider uppercase mb-10">
          Seoul Premium Glass Skin
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden border border-white/60 mb-4 p-0.5 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-rose-400 via-pink-500 to-emerald-500 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-[10px] uppercase tracking-widest text-slate-500 font-mono">
          <span>Loading Essence</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </div>
  );
};
