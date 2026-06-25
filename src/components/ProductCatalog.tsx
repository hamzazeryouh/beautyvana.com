import React, { useState } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data';
import { Search, Sparkles, Star, ShoppingBag, MessageCircle, Info } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Serum', 'Cream', 'Oil', 'Mask', 'Toner', 'Cleanser'];

  const filteredProducts = products.filter((product) => {
    const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleQuickWhatsAppBuy = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const text = encodeURIComponent(`Hi Beautyvana! I would like to order: ${product.name} ($${product.price.toFixed(2)}). Please send me payment & shipping options via WhatsApp.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="shop" className="relative z-10 px-6 md:px-12 py-12 scroll-mt-24">
      <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/40">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/40">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/40 text-[10px] uppercase tracking-[0.25em] font-bold text-rose-900 mb-3 border border-white/60">
              Complete Catalog
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight">
              The <span className="italic font-light text-rose-950">Luminous</span> Collection
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Each formula is crafted in Seoul with clinical-grade active ingredients to strengthen the moisture barrier and impart a lasting glass-skin glow.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search ingredient or ritual..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/50 backdrop-blur-md border border-white/80 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-rose-400 focus:bg-white/80 transition-all shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                  : 'bg-white/40 hover:bg-white/70 text-slate-700 border border-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Frosted Glass Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/30 rounded-3xl border border-white/50">
            <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-3 animate-spin" />
            <h3 className="text-xl font-serif text-slate-800">No rituals found matching your criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search or choosing another category.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2 rounded-full bg-rose-900 text-white text-xs font-semibold uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:bg-white/65 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
              >
                <div>
                  {/* Top Badge & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/60 border border-white text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/60">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Product Visual Container */}
                  <div className="w-full aspect-square bg-slate-100 rounded-2xl mb-5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-inner">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      referrerPolicy="no-referrer" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-rose-600/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest shadow-md border border-white/20">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 z-10">
                      <span className="text-[11px] font-serif font-bold tracking-widest uppercase opacity-80">
                        BEAUTYVANA
                      </span>
                      <span className="text-[10px] font-mono bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                        {product.volume}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl text-slate-900 group-hover:text-rose-950 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-rose-800/90 mt-0.5 mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Pricing & Actions */}
                <div className="pt-4 border-t border-white/60 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xs text-slate-500 block">Price</span>
                      <span className="text-2xl font-bold text-slate-900 font-serif">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelectProduct(product); }}
                      className="text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1 underline"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Ritual Details</span>
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                      className="py-3 px-3 rounded-2xl bg-white/70 hover:bg-white border border-white/90 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-rose-800" />
                      <span>Add Cart</span>
                    </button>

                    <button
                      onClick={(e) => handleQuickWhatsAppBuy(e, product)}
                      className="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-200/50 active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
