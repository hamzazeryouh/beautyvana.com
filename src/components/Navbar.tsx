import React from 'react';
import { ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenRoutineFinder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenRoutineFinder,
}) => {
  const handleNavClick = (e: React.MouseEvent, tabId: string) => {
    e.preventDefault();
    if (tabId === 'routine') {
      onOpenRoutineFinder();
      return;
    }
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent("Hi Beautyvana! I'm exploring your Korean skincare collection. Can you advise me on your products?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <header className="relative z-20 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 sticky top-0 bg-white/10 backdrop-blur-xl border-b border-white/20 transition-all">
      {/* Brand Logo */}
      <a 
        href="#home" 
        onClick={(e) => handleNavClick(e, 'home')}
        className="text-2xl md:text-3xl font-serif tracking-tighter text-slate-800 hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
      >
        BEAUTY<span className="font-light italic text-rose-800">VANA</span>
      </a>

      {/* Center Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm uppercase tracking-widest text-slate-700 font-medium">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`transition-all pb-1 ${activeTab === 'home' ? 'border-b-2 border-slate-800 text-slate-900 font-bold' : 'opacity-70 hover:opacity-100'}`}
        >
          Home
        </a>
        <a 
          href="#shop" 
          onClick={(e) => handleNavClick(e, 'shop')}
          className={`transition-all pb-1 ${activeTab === 'shop' ? 'border-b-2 border-slate-800 text-slate-900 font-bold' : 'opacity-70 hover:opacity-100'}`}
        >
          Shop All
        </a>
        <button 
          onClick={onOpenRoutineFinder}
          className="flex items-center gap-1.5 opacity-80 hover:opacity-100 text-rose-800 hover:text-rose-950 font-semibold uppercase tracking-widest text-xs md:text-sm transition-all px-3 py-1 rounded-full bg-white/40 border border-white/60 shadow-xs cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
          <span>Routine Finder</span>
        </button>
        <a 
          href="#story" 
          onClick={(e) => handleNavClick(e, 'story')}
          className={`transition-all pb-1 ${activeTab === 'story' ? 'border-b-2 border-slate-800 text-slate-900 font-bold' : 'opacity-70 hover:opacity-100'}`}
        >
          Our Story
        </a>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={openWhatsAppGeneral}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/90 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200/50 cursor-pointer"
          title="Chat with Skincare Specialist on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </button>

        <button 
          onClick={onOpenCart}
          className="relative p-3 rounded-full bg-white/50 backdrop-blur-md border border-white/80 text-slate-800 hover:bg-white/80 transition-all shadow-md shadow-slate-200/50 cursor-pointer"
          aria-label="View Cart"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
