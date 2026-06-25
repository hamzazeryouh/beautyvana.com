import React from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data';
import { X, Star, Sparkles, CheckCircle2, MessageCircle, ShoppingBag } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hi Beautyvana Specialist!\n\nI want to order:\n• Ritual: ${product.name}\n• Category: ${product.category}\n• Volume: ${product.volume}\n• Price: $${product.price.toFixed(2)}\n\nPlease assist me with payment details and delivery to my address via WhatsApp.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-md animate-fade-in">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Frosted Glass Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-white text-slate-800 flex items-center justify-center transition-all shadow-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Visual Presentation */}
        <div className="w-full md:w-5/12 p-8 flex flex-col justify-between relative min-h-[300px] md:min-h-[480px] overflow-hidden bg-slate-900">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            referrerPolicy="no-referrer" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-900/40" />

          <div className="flex justify-between items-start relative z-10">
            <span className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/40 shadow-xs">
              {product.category}
            </span>
            {product.badge && (
              <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          <div className="my-auto text-center py-10 relative z-10 text-white/90">
            <div className="font-serif text-3xl tracking-tighter font-bold drop-shadow-md">
              BEAUTYVANA
            </div>
            <div className="text-xs font-mono tracking-widest uppercase text-white/70 mt-1">
              {product.volume}
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 border border-white/30 relative z-10 text-white">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span>Customer Approval</span>
              <div className="flex items-center gap-1 text-amber-300">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>{product.rating} / 5.0</span>
              </div>
            </div>
            <div className="text-[10px] text-white/80 mt-0.5">
              Based on {product.reviewsCount} verified dermatological reviews
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="w-full md:w-7/12 p-8 md:p-10 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-800 mb-1">
              {product.tagline}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight">
              {product.name}
            </h2>
            <div className="text-3xl font-serif font-bold text-slate-900 mt-3 mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Benefits List */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-3">
                Key Skin Benefits
              </h4>
              <div className="space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Ingredients */}
            <div className="mb-6 bg-white/50 rounded-2xl p-4 border border-white/80">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-2">
                Active Formulation
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.keyIngredients.map((ing, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200/60 text-[11px] font-medium text-rose-900">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-1">
                Ritual Application
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "{product.howToUse}"
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/60 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { onAddToCart(product); onClose(); }}
              className="flex-1 py-4 px-6 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-rose-800" />
              <span>Add to Ritual Bag</span>
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="flex-[1.5] py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-200/60 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp Now</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
