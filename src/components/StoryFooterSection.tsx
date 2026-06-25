import React from 'react';
import { TESTIMONIALS, WHATSAPP_NUMBER } from '../data';
import { Sparkles, Heart, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

export const StoryFooterSection: React.FC = () => {
  const openWhatsAppContact = () => {
    const text = encodeURIComponent("Hi Beautyvana! I have a general question about your brand and skincare formulations.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Our Story & Testimonials Section */}
      <section id="story" className="relative z-10 px-6 md:px-12 py-12 scroll-mt-24">
        <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 md:p-14 shadow-2xl shadow-slate-200/40">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-white/40 text-[10px] uppercase tracking-[0.25em] font-bold text-rose-900 mb-4 border border-white/60">
              Philosophy & Heritage
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight mb-6">
              Born in <span className="italic font-light">Seoul</span>, Perfected for Your Barrier
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              At Beautyvana, we believe skincare is not a 10-step chore, but a mindful daily ritual. We marry centuries-old Korean herbal remedies—like fermented white rice water, wild Jeju mugwort, and Inje birch sap—with clean modern actives like Ceramides and Bakuchiol.
            </p>
          </div>

          {/* Core Brand Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 text-center shadow-lg hover:bg-white/60 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">100% Cruelty-Free</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Never tested on animals. Dermatologist approved clean formulas free from harsh sulfates, parabens, and synthetic dyes.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 text-center shadow-lg hover:bg-white/60 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">Barrier-First Actives</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formulated at optimal pH levels (5.0–5.5) to restore natural lipid protection and soothe chronic inflammation.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 text-center shadow-lg hover:bg-white/60 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">WhatsApp Concierge</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct human assistance. Connect instantly with our Seoul skincare team on WhatsApp for tailored routine advice.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="pt-8 border-t border-white/50">
            <h3 className="text-center font-serif text-2xl text-slate-800 mb-8">
              Loved by Ritualists Worldwide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((test, idx) => (
                <div key={idx} className="bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-white/80 flex flex-col justify-between shadow-md">
                  <div className="flex gap-1 mb-3 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Sparkles key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                    "{test.quote}"
                  </p>
                  <div className="flex justify-between items-end pt-3 border-t border-white/60 text-[11px]">
                    <strong className="text-slate-900 font-serif">{test.author}</strong>
                    <span className="text-slate-500">{test.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Bar & Footer (Exact match to Frosted Glass Design HTML) */}
      <footer className="relative z-10 mx-6 md:mx-12 mb-8 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-slate-600 shadow-xl font-medium">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block"/>Based in Seoul, SK</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"/>Cruelty-Free certified</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"/>Free Shipping Over $50</span>
        </div>
        
        <button 
          onClick={openWhatsAppContact}
          className="font-bold text-slate-800 bg-white/60 hover:bg-white px-4 py-2 rounded-full border border-white transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
          <span>WA: +1 (555) 890-4321</span>
        </button>
      </footer>
    </>
  );
};
