import React from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data';
import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  featuredProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onExploreShop: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredProducts,
  onSelectProduct,
  onExploreShop,
}) => {
  const handleDirectWhatsAppOrder = () => {
    const text = encodeURIComponent("Hi Beautyvana! I'm interested in ordering the Daily Luminous Ritual starter routine. Can you share availability and shipping details?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative z-10 px-6 md:px-12 pt-6 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Hero Banner Card */}
        <div className="flex-1 lg:flex-[5] flex flex-col justify-center">
          <div className="h-full flex flex-col justify-between bg-white/20 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl group-hover:bg-rose-300/40 transition-all duration-700 pointer-events-none" />

            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-600 mb-6 border border-white/60 shadow-xs">
                ✨ New Collection 2026
              </span>
              
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Your Daily <br/>
                <span className="italic font-light text-rose-950">Luminous</span> Ritual
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 max-w-md leading-relaxed mb-10 font-normal">
                Premium Korean skincare curated for your unique skin barrier. Minimal ingredients, weightless textures, maximum glass-skin results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <button 
                onClick={handleDirectWhatsAppOrder}
                className="bg-emerald-600 text-white px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-200/60 hover:bg-emerald-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.891-11.893 11.891-2.01 0-3.987-.51-5.742-1.47l-6.255 1.679zm6.79-4.027c1.554.922 3.31 1.408 5.105 1.409 5.454 0 9.893-4.438 9.893-9.891 0-2.646-1.029-5.132-2.9-7c-1.87-1.868-4.359-2.898-7.004-2.898-5.456 0-9.894 4.438-9.894 9.892 0 2.129.683 4.204 1.956 5.922l-.994 3.635 3.743-.969z"/>
                </svg>
                Order via WhatsApp
              </button>

              <div className="text-sm text-slate-600 font-medium flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-200 shadow-xs flex items-center justify-center text-[10px] font-bold text-pink-800">SJ</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-200 shadow-xs flex items-center justify-center text-[10px] font-bold text-blue-800">ER</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-200 shadow-xs flex items-center justify-center text-[10px] font-bold text-emerald-800">CM</div>
                </div>
                <span>
                  <strong className="text-slate-900 block sm:inline">+2.4k</strong> happy customers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Grid Sidebar (Exact styling from Frosted Glass HTML) */}
        <div className="flex-1 lg:flex-[7] grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          {featuredProducts.slice(0, 4).map((product) => {
            // Determine icon label color class based on category
            let badgeTextClass = "text-rose-800";
            if (product.category === 'Cream') badgeTextClass = "text-blue-800";
            if (product.category === 'Oil') badgeTextClass = "text-emerald-800";
            if (product.category === 'Mask') badgeTextClass = "text-violet-800";

            return (
              <div 
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-xl hover:bg-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-300/60 text-[10px] font-bold uppercase text-rose-900">
                    {product.badge}
                  </span>
                )}

                <div className="w-32 h-32 rounded-2xl mb-4 relative overflow-hidden group-hover:scale-105 transition-transform shadow-inner bg-slate-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover rounded-2xl" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent flex items-end justify-center pb-2">
                    <span className="text-[10px] font-serif text-white font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/30 backdrop-blur-xs border border-white/40">
                      {product.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-slate-800 group-hover:text-rose-950 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3 line-clamp-1">
                  {product.tagline}
                </p>
                <div className="mt-auto flex items-center justify-between w-full pt-2 border-t border-white/50">
                  <span className="text-lg font-bold text-slate-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-[11px] font-semibold text-rose-800 uppercase tracking-wider underline opacity-0 group-hover:opacity-100 transition-opacity">
                    View Ritual &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Bar prompt to scroll down to full catalog */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={onExploreShop}
          className="px-6 py-2.5 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-md border border-white/60 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition-all cursor-pointer shadow-sm flex items-center gap-2"
        >
          <span>Explore All Skincare Products</span>
          <span className="animate-bounce">&darr;</span>
        </button>
      </div>
    </section>
  );
};
