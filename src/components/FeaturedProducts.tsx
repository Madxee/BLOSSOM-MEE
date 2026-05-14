import { motion } from "motion/react";
import { ShoppingCart, MessageCircle, Heart } from "lucide-react";
import { PRODUCTS, PHONE_NUMBER } from "../constants";

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-rose-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Collections</h2>
            <p className="text-slate-600 dark:text-slate-400">Handpicked quality products curated for your aesthetic</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-rose-500 font-bold flex items-center gap-2 group"
          >
            View All Products <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-[2rem] overflow-hidden border border-rose-100 hover:border-rose-400 transition-all p-3">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 bg-white/50">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-3 glass-dark rounded-full opacity-0 group-hover:opacity-100 transition-all text-rose-500 hover:bg-rose-500 hover:text-white">
                    <Heart className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-2 pb-2 text-center">
                  <h3 className="font-sans font-bold text-lg mb-1 text-slate-800 dark:text-white">{product.name}</h3>
                  <p className="text-rose-600 font-bold text-xl mb-4">{product.price}</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 glass-dark py-3 rounded-full flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-white dark:hover:bg-rose-500 transition-all text-[10px] font-bold uppercase tracking-wider">
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                    <a 
                      href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}?text=Hello, I want to order ${product.name}`}
                      target="_blank"
                      className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
