import Logo from "./Logo";
import { BUSINESS_NAME, PHONE_NUMBER, EMAIL, ADDRESS } from "../constants";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-white/5 dark:bg-zinc-950/50 border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Elevating your lifestyle through premium quality and modern sophistication. Your trusted partner for gadgets, accessories, and home items.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-500 hover:text-brand-accent hover:border-brand-accent/40 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 border-b-2 border-rose-500 w-fit pb-2">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Featured Products", "CEO Profile", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-brand-accent flex items-center gap-1 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 border-b-2 border-rose-500 w-fit pb-2">Support</h4>
            <ul className="space-y-4">
              {["Quality Guarantee", "Shipping Policy", "Order Status", "WhatsApp Support", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-brand-accent flex items-center gap-1 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 border-b-2 border-rose-500 w-fit pb-2">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-6">Subscribe to get luxury updates and special offers.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/50 dark:bg-zinc-900 shadow-inner rounded-2xl px-6 py-4 pr-12 outline-none focus:border-brand-accent border border-brand-accent/10 transition-all"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-brand-accent text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-accent/20 hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs opacity-50">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-brand-gold/20" />
                ))}
              </div>
              <span>Join 500+ Luxury Insiders</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-accent/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 text-center">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
