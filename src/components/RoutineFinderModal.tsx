import React, { useState } from 'react';
import { Product } from '../types';
import { ROUTINE_QUESTIONS } from '../data';
import { WHATSAPP_NUMBER } from '../data';
import { X, Sparkles, Check, ArrowRight, RotateCcw, MessageCircle, ShoppingBag } from 'lucide-react';

interface RoutineFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: Product[];
  onAddToCart: (product: Product) => void;
}

export const RoutineFinderModal: React.FC<RoutineFinderModalProps> = ({
  isOpen,
  onClose,
  allProducts,
  onAddToCart,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQuestion = ROUTINE_QUESTIONS[currentStep];

  const handleSelectOption = (categories: string[]) => {
    const nextCategories = Array.from(new Set([...selectedCategories, ...categories]));
    setSelectedCategories(nextCategories);

    if (currentStep < ROUTINE_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedCategories([]);
    setIsFinished(false);
  };

  // Recommend products based on quiz categories
  const recommendedProducts = allProducts.filter((p) =>
    selectedCategories.length === 0 ? true : selectedCategories.includes(p.category)
  );

  const handleOrderEntireRoutineWA = () => {
    const names = recommendedProducts.map(p => `• ${p.name} ($${p.price.toFixed(2)})`).join('\n');
    const total = recommendedProducts.reduce((sum, p) => sum + p.price, 0);
    const text = encodeURIComponent(
      `Hi Beautyvana Specialist!\n\nI completed the Custom Routine Finder Quiz and want to order my personalized routine:\n\n${names}\n\nTotal Est: $${total.toFixed(2)}\n\nPlease assist me with ordering this bundle via WhatsApp!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-md animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-white/75 backdrop-blur-2xl border border-white/80 rounded-[40px] shadow-2xl overflow-hidden p-8 sm:p-12 text-slate-800">
        
        {/* Header & Close */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-rose-900 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-rose-600 animate-pulse" />
            <span>Seoul Skin Routine Finder</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-white text-slate-800 flex items-center justify-center transition-all shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isFinished ? (
          <div>
            {/* Step Indicator */}
            <div className="flex justify-between text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-3">
              <span>Question {currentStep + 1} of {ROUTINE_QUESTIONS.length}</span>
              <span>{Math.round(((currentStep + 1) / ROUTINE_QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/50 rounded-full overflow-hidden mb-8 border border-white">
              <div 
                className="h-full bg-rose-800 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / ROUTINE_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-8 leading-snug">
              {currentQuestion.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.recommendedCategories)}
                  className="p-5 rounded-3xl bg-white/50 hover:bg-white/80 border border-white/80 text-left transition-all hover:shadow-lg hover:-translate-y-0.5 group flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <h4 className="font-serif text-lg text-slate-900 group-hover:text-rose-950 font-medium">
                      {opt.label}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {opt.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-white flex items-center justify-center group-hover:bg-rose-900 group-hover:text-white transition-colors shrink-0 ml-4">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Quiz Results Screen */
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <span className="inline-block px-3.5 py-1 rounded-full bg-rose-100 border border-rose-300/60 text-rose-900 text-[10px] font-bold uppercase tracking-widest mb-3">
                ✨ Your Personalized Prescription
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-slate-900">
                Your <span className="italic font-light">Luminous</span> Ritual Bundle
              </h3>
              <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                Based on your skin barrier analysis, we curated this targeted Korean regimen for optimal daily recovery.
              </p>
            </div>

            {/* Recommended Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-h-[340px] overflow-y-auto p-1">
              {recommendedProducts.map((prod) => (
                <div key={prod.id} className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white flex gap-3.5 items-center shadow-md">
                  <div className="w-16 h-16 rounded-xl shrink-0 overflow-hidden bg-slate-100 relative">
                    <img src={prod.imageUrl} alt={prod.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-rose-900 block">{prod.category}</span>
                    <h5 className="font-serif text-sm font-bold text-slate-900 truncate">{prod.name}</h5>
                    <span className="text-xs font-bold text-slate-900">${prod.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(prod)}
                    className="p-2 bg-white hover:bg-slate-900 hover:text-white rounded-xl border border-slate-200 transition-colors shadow-2xs"
                    title="Add to bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={resetQuiz}
                className="py-4 px-5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={handleOrderEntireRoutineWA}
                className="flex-1 py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-200/60 cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Bundle on WhatsApp</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
