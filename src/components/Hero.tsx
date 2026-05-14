import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PHONE_NUMBER } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Premium Selection
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
            Quality Products for <br />
            <span className="text-slate-700 italic">Everyday</span> Lifestyle
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            Shop premium gadgets, fashion accessories, and kitchen essentials curated for the modern aesthetic.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-rose-200 hover:bg-rose-600 transition-all"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-dark rounded-full font-bold flex items-center gap-2 border border-rose-100 dark:border-rose-900/30"
            >
              Chat on WhatsApp <MessageCircle className="w-5 h-5 text-rose-500" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white/50 dark:border-white/5 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Products" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-6 rounded-2xl shadow-xl z-20 border border-brand-accent/20 hidden sm:block floating"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">5★</div>
              <div>
                <p className="text-xs font-bold">Top Rated</p>
                <p className="text-[10px] opacity-70">Quality Guaranteed</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 border border-brand-accent/20 hidden sm:block floating"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 font-bold">⚡</div>
              <div>
                <p className="text-xs font-bold">Fast Delivery</p>
                <p className="text-[10px] opacity-70">Nationwide Shipping</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
