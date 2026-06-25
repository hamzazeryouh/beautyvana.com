import React from 'react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../data';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 50.00;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const itemsSummary = cart
      .map((item) => `• ${item.quantity}x ${item.product.name} ($${(item.product.price * item.quantity).toFixed(2)})`)
      .join('\n');

    const message = `Hi Beautyvana Team!\n\nI want to place an order from your Luminous Collection:\n\n${itemsSummary}\n\nSubtotal: $${subtotal.toFixed(2)}\nShipping: ${subtotal >= freeShippingThreshold ? 'FREE' : 'Standard'}\nTotal Est: $${subtotal.toFixed(2)}\n\nPlease confirm availability and share payment link via WhatsApp. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden bg-slate-900/40 backdrop-blur-md animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      {/* Frosted Glass Slide-over Drawer */}
      <div className="relative z-10 w-full max-w-md h-full bg-white/70 backdrop-blur-2xl border-l border-white/80 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-hidden text-slate-800 animate-slide-left">
        
        {/* Header */}
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-white/60">
            <div className="flex items-center gap-2 font-serif text-2xl text-slate-900">
              <ShoppingBag className="w-6 h-6 text-rose-800" />
              <span>Ritual Bag</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/80 border border-white text-slate-600 ml-1">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-white text-slate-800 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="py-4 border-b border-white/60">
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
              <span>
                {subtotal >= freeShippingThreshold ? (
                  <strong className="text-emerald-700">🎉 You unlocked FREE Shipping!</strong>
                ) : (
                  <>Add <strong>${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more for FREE Shipping</>
                )}
              </span>
              <span className="font-mono text-[11px]">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/50 rounded-full overflow-hidden border border-white/80">
              <div
                className="h-full bg-gradient-to-r from-rose-400 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4 opacity-70 py-12">
              <ShoppingBag className="w-12 h-12 text-slate-400 mb-3" />
              <p className="font-serif text-lg text-slate-700">Your ritual bag is empty</p>
              <p className="text-xs text-slate-500 mt-1">Explore our serums and creams to begin your skincare journey.</p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs uppercase tracking-widest font-semibold"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="bg-white/50 backdrop-blur-md rounded-2xl p-3.5 border border-white/80 flex gap-3.5 items-center shadow-xs group">
                <div className="w-16 h-16 rounded-xl shrink-0 overflow-hidden bg-slate-100 relative">
                  <img src={item.product.imageUrl} alt={item.product.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-bold text-slate-900 truncate">{item.product.name}</h4>
                  <span className="text-xs font-mono text-rose-900 font-bold">${item.product.price.toFixed(2)}</span>
                  
                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center bg-white/80 rounded-lg border border-slate-200 shadow-2xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 hover:text-rose-600 transition-colors cursor-pointer"
                        title="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 hover:text-emerald-600 transition-colors cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between self-stretch py-0.5">
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-slate-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-serif font-bold text-slate-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-white/80 mt-auto bg-white/30 backdrop-blur-xl -mx-6 -mb-8 p-6 rounded-t-3xl border border-white">
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-mono font-bold text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping to your location</span>
                <span className="font-mono font-bold text-emerald-700">
                  {subtotal >= freeShippingThreshold ? 'FREE' : '$4.99 Standard'}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-white/60">
                <span className="font-serif text-base">Total Order</span>
                <span className="font-serif text-xl text-rose-950">
                  ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-200 cursor-pointer group mb-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Checkout via WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest px-2">
              <span>🔒 Direct WhatsApp Encrypted</span>
              <button onClick={onClearCart} className="hover:text-rose-600 underline cursor-pointer">Clear bag</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
